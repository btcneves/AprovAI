import type { SimuladoAnswer } from './types'
import type { Question } from './types'
import { storage } from '@/lib/storage'

const NODE_LEARNING_KEY = 'aprovai_node_learning_v1'
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

const toPercent = (value: number) => Number((value * 100).toFixed(1))

const calculateTrend = (history: NodeAccuracySnapshot[]): NodeTrend => {
  if (history.length < 2) return 'estavel'
  const recent = history.slice(-6)
  const splitIndex = Math.max(1, Math.floor(recent.length / 2))
  const olderSlice = recent.slice(0, splitIndex)
  const newerSlice = recent.slice(splitIndex)

  const olderAvg = olderSlice.reduce((acc, item) => acc + item.accuracyRate, 0) / olderSlice.length
  const newerAvg = newerSlice.reduce((acc, item) => acc + item.accuracyRate, 0) / newerSlice.length
  const delta = newerAvg - olderAvg

  if (delta > 8) return 'melhorando'
  if (delta < -8) return 'piorando'
  return 'estavel'
}

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
  const total = entry.correctCount + entry.errorCount
  const accuracyRate = total ? toPercent(entry.correctCount / total) : 0
  const history = entry.history.slice(-8)

  return {
    ...entry,
    accuracyRate,
    history,
    trend: calculateTrend(history)
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
  const raw = storage.get<NodeLearningMap>(NODE_LEARNING_KEY, {})
  return normalizeMap(raw)
}

export const saveNodeLearning = (state: NodeLearningMap): NodeLearningMap => {
  const normalized = normalizeMap(state)
  storage.set(NODE_LEARNING_KEY, normalized)
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
