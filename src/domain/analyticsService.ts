import { activeQuestions } from '@/data/questionBank/questions'
import type { Question, SimuladoAttempt } from './types'
import { calculateWeightedTrend, safeRate, weightedAverage } from './learningMetrics'

export type TemporalWindowDays = 7 | 14 | 30

export type TemporalThemeInsight = {
  theme: string
  avgAccuracyRate: number
  errorFrequency: number
  attempts: number
  trend: 'melhorando' | 'piorando' | 'estavel'
}

export type TemporalAnalysis = {
  windowDays: TemporalWindowDays
  themes: TemporalThemeInsight[]
}

export type Recommendation = {
  id: string
  type: 'weak-recent' | 'falling' | 'undertrained' | 'recent-errors-review'
  priority: number
  title: string
  description: string
}

const questionMap = new Map(activeQuestions.map((question) => [question.id, question]))

const buildThemeSnapshot = (questionById: Map<string, Question>, answers: SimuladoAttempt['answers']) => {
  const perTheme = new Map<string, { total: number; correct: number; wrong: number }>()

  for (const answer of answers) {
    const question = questionById.get(answer.questionId)
    if (!question) continue

    const current = perTheme.get(question.topic) ?? { total: 0, correct: 0, wrong: 0 }
    current.total += 1
    if (answer.isCorrect) current.correct += 1
    else current.wrong += 1
    perTheme.set(question.topic, current)
  }

  return [...perTheme.entries()].map(([theme, stat]) => ({
    theme,
    totalQuestions: stat.total,
    correct: stat.correct,
    wrong: stat.wrong,
    accuracyRate: Number(safeRate(stat.correct, stat.total).toFixed(4))
  }))
}

export const enrichAttemptWithAnalytics = (attempt: SimuladoAttempt, questions: Question[]): SimuladoAttempt => {
  const themes = [...new Set(questions.map((question) => question.topic))]
  const subthemes = [...new Set(questions.map((question) => question.subtopic).filter(Boolean))] as string[]
  const questionById = new Map(questions.map((question) => [question.id, question]))
  const themeSnapshot = buildThemeSnapshot(questionById, attempt.answers)

  const difficulty = questions.length === 0
    ? 'mista'
    : questions.every((question) => question.difficulty === questions[0].difficulty)
      ? questions[0].difficulty
      : 'mista'

  const wrongQuestionRefs = attempt.answers
    .filter((answer) => !answer.isCorrect)
    .map((answer) => {
      const question = questionById.get(answer.questionId)
      if (!question) return null
      return {
        questionId: question.id,
        theme: question.topic,
        subtheme: question.subtopic ?? null
      }
    })
    .filter(Boolean) as NonNullable<SimuladoAttempt['wrongQuestionRefs']>[number][]

  return {
    ...attempt,
    totalQuestions: questions.length,
    accuracyRate: Number(safeRate(attempt.correctCount, questions.length).toFixed(4)),
    themes,
    subthemes,
    difficulty,
    wrongQuestionRefs,
    themeSnapshot
  }
}

const inWindow = (createdAt: string, days: number) => {
  const created = new Date(createdAt).getTime()
  const now = Date.now()
  const msWindow = days * 24 * 60 * 60 * 1000
  return now - created <= msWindow
}

export const buildTemporalAnalysis = (attempts: SimuladoAttempt[], windowDays: TemporalWindowDays): TemporalAnalysis => {
  const filtered = attempts.filter((attempt) => inWindow(attempt.createdAt, windowDays))
  const perTheme = new Map<string, Array<{ at: string; rate: number; wrongRate: number }>>()

  for (const attempt of filtered) {
    const snapshot = attempt.themeSnapshot ?? []
    for (const themeData of snapshot) {
      const current = perTheme.get(themeData.theme) ?? []
      current.push({
        at: attempt.createdAt,
        rate: themeData.accuracyRate,
        wrongRate: safeRate(themeData.wrong, themeData.totalQuestions)
      })
      perTheme.set(themeData.theme, current)
    }
  }

  const themes = [...perTheme.entries()].map(([theme, samples]) => {
    const avgAccuracyRate = weightedAverage(samples.map((sample) => ({ at: sample.at, value: sample.rate })))
    const errorFrequency = weightedAverage(samples.map((sample) => ({ at: sample.at, value: sample.wrongRate })))
    const trend = calculateWeightedTrend(samples.map((sample) => ({ at: sample.at, value: sample.rate })))

    return {
      theme,
      avgAccuracyRate: Number(avgAccuracyRate.toFixed(4)),
      errorFrequency: Number(errorFrequency.toFixed(4)),
      attempts: samples.length,
      trend
    }
  })

  return {
    windowDays,
    themes: themes.sort((a, b) => b.errorFrequency - a.errorFrequency)
  }
}

export const buildRecommendations = (attempts: SimuladoAttempt[]): Recommendation[] => {
  if (!attempts.length) return []

  const last30 = buildTemporalAnalysis(attempts, 30)
  const last14 = buildTemporalAnalysis(attempts, 14)
  const recommendations: Recommendation[] = []

  last14.themes
    .filter((item) => item.avgAccuracyRate < 0.65)
    .slice(0, 3)
    .forEach((item, index) => {
      recommendations.push({
        id: `weak-${item.theme}`,
        type: 'weak-recent',
        priority: 100 - index * 10,
        title: `Fortalecer ${item.theme}`,
        description: `Taxa recente ponderada de ${(item.avgAccuracyRate * 100).toFixed(0)}% nos últimos 14 dias.`
      })
    })

  last30.themes
    .filter((item) => item.trend === 'piorando')
    .slice(0, 3)
    .forEach((item, index) => {
      recommendations.push({
        id: `falling-${item.theme}`,
        type: 'falling',
        priority: 80 - index * 10,
        title: `Reagir à queda em ${item.theme}`,
        description: 'Desempenho em queda na janela de 30 dias (com peso temporal).'
      })
    })

  const trainedCount = new Map<string, number>()
  for (const attempt of attempts.slice(-20)) {
    for (const theme of attempt.themes ?? []) {
      trainedCount.set(theme, (trainedCount.get(theme) ?? 0) + 1)
    }
  }

  const undertrained = [...trainedCount.entries()].filter(([, count]) => count <= 2).sort((a, b) => a[1] - b[1]).slice(0, 2)
  undertrained.forEach(([theme], index) => {
    recommendations.push({
      id: `undertrained-${theme}`,
      type: 'undertrained',
      priority: 60 - index * 5,
      title: `Treinar mais ${theme}`,
      description: 'Tema pouco praticado no histórico recente.'
    })
  })

  const recentWrongThemes = new Map<string, number>()
  for (const attempt of attempts.slice(-5)) {
    for (const wrong of attempt.wrongQuestionRefs ?? []) {
      recentWrongThemes.set(wrong.theme, (recentWrongThemes.get(wrong.theme) ?? 0) + 1)
    }
  }

  const mostWrongRecent = [...recentWrongThemes.entries()].sort((a, b) => b[1] - a[1])[0]
  if (mostWrongRecent) {
    recommendations.push({
      id: `review-${mostWrongRecent[0]}`,
      type: 'recent-errors-review',
      priority: 95,
      title: `Revisar erros em ${mostWrongRecent[0]}`,
      description: `Foram ${mostWrongRecent[1]} erros recentes; faça revisão direcionada.`
    })
  }

  return recommendations
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 6)
}

export const buildErrorFollowUp = (attempts: SimuladoAttempt[], latestAttempt: SimuladoAttempt) => {
  const previous = attempts.at(-2)
  if (!latestAttempt.wrongQuestionRefs?.length) {
    return {
      message: 'Sem erros nesta sessão. Mantenha revisão espaçada para retenção.',
      improvements: [] as string[]
    }
  }

  const themeCounter = new Map<string, number>()
  for (const wrong of latestAttempt.wrongQuestionRefs) {
    themeCounter.set(wrong.theme, (themeCounter.get(wrong.theme) ?? 0) + 1)
  }

  const focusTheme = [...themeCounter.entries()].sort((a, b) => b[1] - a[1])[0]?.[0]
  const improvements: string[] = []

  if (previous?.themeSnapshot && focusTheme) {
    const prev = previous.themeSnapshot.find((item) => item.theme === focusTheme)
    const current = latestAttempt.themeSnapshot?.find((item) => item.theme === focusTheme)
    if (prev && current) {
      if (current.accuracyRate > prev.accuracyRate) improvements.push(`Houve melhoria em ${focusTheme} (${Math.round(prev.accuracyRate * 100)}% → ${Math.round(current.accuracyRate * 100)}%).`)
      if (current.accuracyRate < prev.accuracyRate) improvements.push(`Queda em ${focusTheme} (${Math.round(prev.accuracyRate * 100)}% → ${Math.round(current.accuracyRate * 100)}%). Reforce treino focado.`)
    }
  }

  return {
    message: focusTheme
      ? `Após erro, revise o mapa mental de ${focusTheme} e inicie um treino focado nesse tema.`
      : 'Após erro, revise o mapa mental relacionado e faça treino focado.',
    improvements
  }
}

export const resolveMindMapNodeByTheme = (theme: string): string | null => {
  const question = activeQuestions.find((item) => item.topic === theme)
  return question?.relatedMindMapNodeId ?? null
}

export const hydrateAttempt = (attempt: SimuladoAttempt): SimuladoAttempt => {
  if (attempt.themeSnapshot && attempt.totalQuestions && attempt.accuracyRate !== undefined) return attempt

  const questions = attempt.questionIds
    .map((id) => questionMap.get(id))
    .filter(Boolean) as Question[]

  return enrichAttemptWithAnalytics(
    {
      ...attempt,
      difficulty: attempt.difficulty ?? 'mista',
      themes: attempt.themes ?? [],
      subthemes: attempt.subthemes ?? [],
      wrongQuestionRefs: attempt.wrongQuestionRefs ?? []
    },
    questions
  )
}
