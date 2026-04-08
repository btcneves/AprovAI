import type { MindMapNode, Question, SimuladoAttempt } from './types'

type PerformanceStatus = 'forte' | 'atencao' | 'fraco' | 'sem-dados'

export type EnrichedMindMapNode = MindMapNode & {
  examHighlights: string[]
  commonMistakes: string[]
  criticalDifferences: string[]
  traps: string[]
  shortExplanation: string
  linkedQuestions: Question[]
}

export const inferPerformanceStatus = (accuracy?: number): PerformanceStatus => {
  if (accuracy === undefined) return 'sem-dados'
  if (accuracy < 0.55) return 'fraco'
  if (accuracy < 0.75) return 'atencao'
  return 'forte'
}

const dedupe = (values: string[]) => [...new Set(values.map((item) => item.trim()).filter(Boolean))]

export const buildNodeErrorFrequency = (attempts: SimuladoAttempt[], questions: Question[]): Map<string, number> => {
  const questionMap = new Map(questions.map((question) => [question.id, question]))
  const errorFrequency = new Map<string, number>()

  for (const attempt of attempts) {
    for (const answer of attempt.answers.filter((item) => !item.isCorrect)) {
      const question = questionMap.get(answer.questionId)
      if (!question) continue
      const nodeId = question.relatedMindMapNodeId
      errorFrequency.set(nodeId, (errorFrequency.get(nodeId) ?? 0) + 1)
    }
  }

  return errorFrequency
}

export const enrichMindMapNode = (
  node: MindMapNode,
  linkedQuestions: Question[],
  errorFrequency: number
): EnrichedMindMapNode => {
  const fallbackHighlight = node.summary ?? node.descriptionShort

  const examHighlights = dedupe([
    ...(node.examHighlights ?? []),
    ...linkedQuestions.slice(0, 3).map((question) => question.explanation)
  ]).slice(0, 4)

  const commonMistakes = dedupe([
    ...(node.commonMistakes ?? []),
    ...linkedQuestions.flatMap((question) => question.whyOthersAreWrong.slice(0, 1)).map((item) => item.replace(/^Incorreta:\s*/i, '')),
    errorFrequency > 0 ? `Tema com ${errorFrequency} erro(s) recente(s) em simulados.` : ''
  ]).slice(0, 4)

  const criticalDifferences = dedupe([
    ...(node.criticalDifferences ?? []),
    ...linkedQuestions
      .slice(0, 3)
      .map((question) => `Diferenciar ${question.subtopic ?? question.topic} dentro de ${question.topic}.`)
  ]).slice(0, 3)

  const traps = dedupe([
    ...(node.traps ?? []),
    ...linkedQuestions
      .filter((question) => question.difficulty !== 'facil')
      .slice(0, 3)
      .map((question) => `Pegadinha comum: confundir ${question.subtopic ?? question.topic} na leitura apressada.`)
  ]).slice(0, 3)

  return {
    ...node,
    examHighlights: examHighlights.length ? examHighlights : [fallbackHighlight],
    commonMistakes,
    criticalDifferences,
    traps,
    shortExplanation: node.summary ?? node.descriptionShort,
    linkedQuestions
  }
}

export const buildNodeAccuracy = (attempts: SimuladoAttempt[], questions: Question[]): Map<string, number> => {
  const questionMap = new Map(questions.map((question) => [question.id, question]))
  const stats = new Map<string, { correct: number; total: number }>()

  for (const attempt of attempts) {
    for (const answer of attempt.answers) {
      const question = questionMap.get(answer.questionId)
      if (!question) continue

      const nodeId = question.relatedMindMapNodeId
      const current = stats.get(nodeId) ?? { correct: 0, total: 0 }
      current.total += 1
      if (answer.isCorrect) current.correct += 1
      stats.set(nodeId, current)
    }
  }

  return new Map(
    [...stats.entries()].map(([nodeId, value]) => [nodeId, value.total ? value.correct / value.total : 0])
  )
}
