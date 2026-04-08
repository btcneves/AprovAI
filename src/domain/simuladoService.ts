import { activeQuestions } from '@/data/questionBank/questions'
import type { Difficulty, Question, SimuladoAnswer, SimuladoAttempt } from './types'

const HISTORY_KEY = 'imarui_simulados'
const BLOCK_WINDOW = 5

export type StudyMode = 'full' | 'weak-topics' | 'topic' | 'subtopic' | 'difficulty' | 'recent-wrong'

export type BuildSimuladoOptions = {
  mode?: StudyMode
  topic?: string
  subtopic?: string
  difficulty?: Difficulty
  questionCount?: number
}

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

const buildStudyPool = (attempts: SimuladoAttempt[], options: BuildSimuladoOptions): Question[] => {
  const mode = options.mode ?? 'full'
  const questionMap = new Map(activeQuestions.map((question) => [question.id, question]))

  if (mode === 'topic' && options.topic) {
    return activeQuestions.filter((question) => question.topic === options.topic)
  }

  if (mode === 'subtopic' && options.subtopic) {
    return activeQuestions.filter((question) => question.subtopic === options.subtopic)
  }

  if (mode === 'difficulty' && options.difficulty) {
    return activeQuestions.filter((question) => question.difficulty === options.difficulty)
  }

  if (mode === 'recent-wrong') {
    const wrongIds = attempts
      .slice(-8)
      .flatMap((attempt) => attempt.answers.filter((answer) => !answer.isCorrect).map((answer) => answer.questionId))
    return wrongIds.map((id) => questionMap.get(id)).filter(Boolean) as Question[]
  }

  if (mode === 'weak-topics') {
    const wrongBySubtopic = new Map<string, number>()
    for (const attempt of attempts) {
      for (const answer of attempt.answers.filter((item) => !item.isCorrect)) {
        const question = questionMap.get(answer.questionId)
        if (!question) continue
        const key = `${question.topic}::${question.subtopic ?? ''}`
        wrongBySubtopic.set(key, (wrongBySubtopic.get(key) ?? 0) + 1)
      }
    }

    const worst = [...wrongBySubtopic.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([key]) => key)
    if (!worst.length) return activeQuestions
    return activeQuestions.filter((question) => worst.includes(`${question.topic}::${question.subtopic ?? ''}`))
  }

  return activeQuestions
}

const dedupeByCanonical = (pool: Question[]): Question[] => {
  const seen = new Set<string>()
  return pool.filter((question) => {
    const key = canonicalKey(question)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export const buildSimulado = (recentAttempts: SimuladoAttempt[], options: BuildSimuladoOptions = {}): Question[] => {
  const mode = options.mode ?? 'full'

  if (mode === 'full') {
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

  const blockedIds = new Set(recentAttempts.slice(-3).flatMap((attempt) => attempt.questionIds))
  const freq = buildFrequencyMap(recentAttempts)
  const requestedCount = options.questionCount ?? 20
  const basePool = dedupeByCanonical(buildStudyPool(recentAttempts, options))
  const rankedPool = rankPool(basePool, blockedIds, freq)
  const fallbackPool = rankPool(basePool, new Set<string>(), freq)

  const selected = [...rankedPool, ...fallbackPool]
    .filter((question, index, array) => array.findIndex((item) => item.id === question.id) === index)
    .slice(0, requestedCount)

  if (!selected.length) {
    throw new Error('Não foi possível montar treino com os filtros selecionados.')
  }

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
