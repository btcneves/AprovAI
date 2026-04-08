import { activeQuestions } from '@/data/questionBank/questions'
import type { Question, SimuladoAnswer, SimuladoAttempt } from './types'

const HISTORY_KEY = 'imarui_simulados'
const BLOCK_WINDOW = 5

const normalizeStatement = (statement: string): string => statement.replace(/\s*\(variação\s+\d+\)\s*$/i, '').trim()
const canonicalKey = (question: Question): string => `${question.discipline}::${question.topic}::${question.subtopic}::${normalizeStatement(question.statement)}`

const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]]
  }
  return copy
}

const buildFrequencyMap = (attempts: SimuladoAttempt[]): Map<string, number> => {
  const freq = new Map<string, number>()
  for (const attempt of attempts) {
    for (const id of attempt.questionIds) {
      freq.set(id, (freq.get(id) ?? 0) + 1)
    }
  }
  return freq
}

const rankPool = (pool: Question[], blockedIds: Set<string>, freq: Map<string, number>) =>
  pool
    .filter((question) => !blockedIds.has(question.id))
    .sort((a, b) => {
      const byUsage = (freq.get(a.id) ?? 0) - (freq.get(b.id) ?? 0)
      if (byUsage !== 0) return byUsage
      return Math.random() - 0.5
    })

const pickPortuguese = (pool: Question[], count: number, blockedIds: Set<string>, freq: Map<string, number>): Question[] => {
  const selected: Question[] = []
  const usedKeys = new Set<string>()

  for (const question of rankPool(pool, blockedIds, freq)) {
    const key = canonicalKey(question)
    if (usedKeys.has(key)) continue
    selected.push(question)
    usedKeys.add(key)
    if (selected.length === count) break
  }

  if (selected.length < count) throw new Error('Banco de português insuficiente para gerar simulado.')
  return selected
}

const difficultyBucket = (difficulty: Question['difficulty']) => (difficulty === 'facil' ? 'facil' : difficulty === 'dificil' ? 'dificil' : 'media')

const pickSpecific = (pool: Question[], count: number, blockedIds: Set<string>, freq: Map<string, number>): Question[] => {
  const preferred = rankPool(pool, blockedIds, freq)
  const fallback = pool
    .filter((question) => blockedIds.has(question.id))
    .sort((a, b) => (freq.get(a.id) ?? 0) - (freq.get(b.id) ?? 0))
  const ranked = [...preferred, ...fallback]

  const selected: Question[] = []
  const usedKeys = new Set<string>()
  const topicCount = new Map<string, number>()
  const diffTargets = { facil: 10, media: 10, dificil: 10 }
  const diffCount = { facil: 0, media: 0, dificil: 0 }

  const canUse = (question: Question) => {
    const canonical = canonicalKey(question)
    if (usedKeys.has(canonical)) return false

    const topicKey = `${question.topic}::${question.subtopic ?? ''}`
    if ((topicCount.get(topicKey) ?? 0) >= 4) return false

    const bucket = difficultyBucket(question.difficulty)
    if (diffCount[bucket] >= diffTargets[bucket]) return false
    return true
  }

  for (const question of ranked) {
    if (!canUse(question)) continue
    selected.push(question)
    usedKeys.add(canonicalKey(question))
    const topicKey = `${question.topic}::${question.subtopic ?? ''}`
    topicCount.set(topicKey, (topicCount.get(topicKey) ?? 0) + 1)
    diffCount[difficultyBucket(question.difficulty)] += 1
    if (selected.length === count) return selected
  }

  for (const question of ranked) {
    const canonical = canonicalKey(question)
    if (usedKeys.has(canonical)) continue
    selected.push(question)
    usedKeys.add(canonical)
    if (selected.length === count) return selected
  }

  throw new Error('Banco específico insuficiente para gerar simulado.')
}

export const buildSimulado = (recentAttempts: SimuladoAttempt[]): Question[] => {
  const portuguese = activeQuestions.filter((question) => question.discipline === 'portugues')
  const specific = activeQuestions.filter((question) => question.discipline === 'especificos')

  if (portuguese.length < 5 || specific.length < 30) {
    throw new Error('Banco de questões insuficiente para gerar simulado 5 + 30')
  }

  const blockedIds = new Set(recentAttempts.slice(-BLOCK_WINDOW).flatMap((attempt) => attempt.questionIds))
  const freq = buildFrequencyMap(recentAttempts)

  const selected = [...pickPortuguese(portuguese, 5, blockedIds, freq), ...pickSpecific(specific, 30, blockedIds, freq)]
  return shuffle(selected)
}

export const evaluateSimulado = (
  questions: Question[],
  answerMap: Record<string, SimuladoAnswer['selectedAlternativeId']>
): Omit<SimuladoAttempt, 'id' | 'createdAt'> => {
  const answers: SimuladoAnswer[] = questions.map((question) => {
    const selectedAlternativeId = answerMap[question.id] ?? null
    return {
      questionId: question.id,
      selectedAlternativeId,
      isCorrect: selectedAlternativeId === question.correctAlternativeId
    }
  })

  const portugueseCorrect = questions
    .filter((question) => question.discipline === 'portugues')
    .filter((question) => answers.find((answer) => answer.questionId === question.id)?.isCorrect).length

  const specificCorrect = questions
    .filter((question) => question.discipline === 'especificos')
    .filter((question) => answers.find((answer) => answer.questionId === question.id)?.isCorrect).length

  const correctCount = portugueseCorrect + specificCorrect
  const wrongCount = questions.length - correctCount

  return {
    questionIds: questions.map((question) => question.id),
    answers,
    score: Number((portugueseCorrect * 0.2 + specificCorrect * 0.3).toFixed(2)),
    correctCount,
    wrongCount,
    portugueseCorrect,
    specificCorrect
  }
}

export const storageKeys = {
  history: HISTORY_KEY
}
