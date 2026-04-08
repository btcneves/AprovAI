import type { SimuladoAnswer } from './types'
import type { Question } from './types'
import { storage } from '@/lib/storage'
import { calculateWeightedTrend, toPercent, weightedAverage } from './learningMetrics'

const NODE_LEARNING_KEY = 'aprovai_node_learning_v1'
const NODE_LEARNING_SCHEMA_VERSION = 1
const DAY_IN_MS = 24 * 60 * 60 * 1000

export type NodeTrend = 'melhorando' | 'piorando' | 'estavel'

export type NodeAccuracySnapshot = {
  at: string
  accuracyRate: number
}

export type NodeLearningStats = {
  nodeId: string
  viewCount: number
  reviewCount: number
  errorCount: number
  correctCount: number
  lastReviewedAt: string | null
  lastErrorAt: string | null
  accuracyRate: number
  trend: NodeTrend
  history: NodeAccuracySnapshot[]
}

export type NodeLearningMap = Record<string, NodeLearningStats>

const isRecord = (value: unknown): value is Record<string, unknown> => !!value && typeof value === 'object' && !Array.isArray(value)

const isValidNodeStats = (value: unknown): value is NodeLearningStats => {
  if (!isRecord(value)) return false
  return typeof value.nodeId === 'string' && Array.isArray(value.history)
}

const isValidNodeLearningMap = (value: unknown): value is NodeLearningMap =>
  isRecord(value) && Object.values(value).every(isValidNodeStats)

const calculateTrend = (history: NodeAccuracySnapshot[]): NodeTrend =>
  calculateWeightedTrend(history.map((item) => ({ at: item.at, value: item.accuracyRate / 100 })))

const baseNodeStats = (nodeId: string): NodeLearningStats => ({
  nodeId,
  viewCount: 0,
  reviewCount: 0,
  errorCount: 0,
  correctCount: 0,
  lastReviewedAt: null,
  lastErrorAt: null,
  accuracyRate: 0,
  trend: 'estavel',
  history: []
})

const withDerivedFields = (entry: NodeLearningStats): NodeLearningStats => {
  const boundedHistory = entry.history.slice(-8).filter((item) => typeof item.at === 'string' && Number.isFinite(item.accuracyRate))
  const weightedRate = weightedAverage(boundedHistory.map((item) => ({ at: item.at, value: item.accuracyRate / 100 })))

  return {
    ...entry,
    accuracyRate: toPercent(weightedRate),
    history: boundedHistory,
    trend: calculateTrend(boundedHistory)
  }
}

const normalizeMap = (raw: NodeLearningMap): NodeLearningMap =>
  Object.fromEntries(
    Object.entries(raw).map(([nodeId, value]) => {
      const merged: NodeLearningStats = {
        ...baseNodeStats(nodeId),
        ...value,
        nodeId,
        history: value.history ?? []
      }
      return [nodeId, withDerivedFields(merged)]
    })
  )

export const loadNodeLearning = (): NodeLearningMap => {
  const envelope = storage.getVersioned<NodeLearningMap>(NODE_LEARNING_KEY, {
    version: NODE_LEARNING_SCHEMA_VERSION,
    fallback: {},
    isValid: isValidNodeLearningMap,
    migrate: {
      0: (legacy) => (isRecord(legacy) ? normalizeMap(legacy as NodeLearningMap) : {})
    }
  })
  return normalizeMap(envelope.data)
}

export const saveNodeLearning = (state: NodeLearningMap): NodeLearningMap => {
  const normalized = normalizeMap(state)
  storage.setVersioned(NODE_LEARNING_KEY, NODE_LEARNING_SCHEMA_VERSION, normalized)
  return normalized
}

export const registerNodeView = (state: NodeLearningMap, nodeId: string): NodeLearningMap => {
  const current = state[nodeId] ?? baseNodeStats(nodeId)
  return saveNodeLearning({
    ...state,
    [nodeId]: withDerivedFields({ ...current, viewCount: current.viewCount + 1 })
  })
}

export const registerNodeReview = (state: NodeLearningMap, nodeId: string, reviewedAt = new Date().toISOString()): NodeLearningMap => {
  const current = state[nodeId] ?? baseNodeStats(nodeId)
  return saveNodeLearning({
    ...state,
    [nodeId]: withDerivedFields({
      ...current,
      reviewCount: current.reviewCount + 1,
      lastReviewedAt: reviewedAt
    })
  })
}

export const registerAttemptNodeLearning = (
  state: NodeLearningMap,
  answers: SimuladoAnswer[],
  questions: Question[],
  timestamp = new Date().toISOString()
): NodeLearningMap => {
  const questionById = new Map(questions.map((question) => [question.id, question]))
  const perNodeAttempt = new Map<string, { correct: number; wrong: number }>()

  for (const answer of answers) {
    const question = questionById.get(answer.questionId)
    if (!question) continue

    const nodeId = question.relatedMindMapNodeId
    const current = perNodeAttempt.get(nodeId) ?? { correct: 0, wrong: 0 }
    if (answer.isCorrect) current.correct += 1
    else current.wrong += 1
    perNodeAttempt.set(nodeId, current)
  }

  const nextState: NodeLearningMap = { ...state }

  for (const [nodeId, attemptStats] of perNodeAttempt.entries()) {
    const current = nextState[nodeId] ?? baseNodeStats(nodeId)
    const historyEntry: NodeAccuracySnapshot = {
      at: timestamp,
      accuracyRate: toPercent(attemptStats.correct / (attemptStats.correct + attemptStats.wrong))
    }

    nextState[nodeId] = withDerivedFields({
      ...current,
      correctCount: current.correctCount + attemptStats.correct,
      errorCount: current.errorCount + attemptStats.wrong,
      lastErrorAt: attemptStats.wrong > 0 ? timestamp : current.lastErrorAt,
      history: [...current.history, historyEntry]
    })
  }

  return saveNodeLearning(nextState)
}

export const isCriticalNode = (entry?: NodeLearningStats): boolean => {
  if (!entry?.lastErrorAt) return false
  const recentError = Date.now() - new Date(entry.lastErrorAt).getTime() <= 7 * DAY_IN_MS
  return recentError && entry.errorCount >= 3 && entry.errorCount >= entry.correctCount
}

export const isNeglectedNode = (entry?: NodeLearningStats): boolean => {
  if (!entry?.lastReviewedAt) return true
  return Date.now() - new Date(entry.lastReviewedAt).getTime() > 21 * DAY_IN_MS
}

export const rankNodeRecommendations = (entries: NodeLearningStats[]): NodeLearningStats[] => {
  return [...entries]
    .sort((a, b) => {
      const score = (item: NodeLearningStats) => {
        const recentErrorWeight = isCriticalNode(item) ? 6 : 0
        const neverReviewedWeight = item.reviewCount === 0 ? 4 : 0
        const trendWeight = item.trend === 'piorando' ? 3 : item.trend === 'melhorando' ? -1 : 0
        const accuracyWeight = item.accuracyRate < 60 ? 2 : 0
        return recentErrorWeight + neverReviewedWeight + trendWeight + accuracyWeight
      }
      return score(b) - score(a)
    })
}

export const nodeLearningStorageKey = NODE_LEARNING_KEY
