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

const pickWithAvoidance = (pool: Question[], count: number, blockedIds: Set<string>): Question[] => {
  const ordered = [...shuffle(pool.filter((question) => !blockedIds.has(question.id))), ...shuffle(pool.filter((question) => blockedIds.has(question.id)))]

  const selected: Question[] = []
  const usedKeys = new Set<string>()

  for (const question of ordered) {
    const key = canonicalKey(question)
    if (usedKeys.has(key)) continue
    selected.push(question)
    usedKeys.add(key)
    if (selected.length === count) return selected
  }

  throw new Error(`Banco de questões insuficiente para evitar repetição interna (${count} necessárias).`)
}

export const buildSimulado = (recentAttempts: SimuladoAttempt[]): Question[] => {
  const portuguese = activeQuestions.filter((question) => question.discipline === 'portugues')
  const specific = activeQuestions.filter((question) => question.discipline === 'especificos')

  if (portuguese.length < 5 || specific.length < 30) {
    throw new Error('Banco de questões insuficiente para gerar simulado 5 + 30')
  }

  const blockedIds = new Set(
    recentAttempts
      .slice(-BLOCK_WINDOW)
      .flatMap((attempt) => attempt.questionIds)
  )

  const selected = [...pickWithAvoidance(portuguese, 5, blockedIds), ...pickWithAvoidance(specific, 30, blockedIds)]
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
