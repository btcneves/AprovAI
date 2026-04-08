import { beforeEach, describe, expect, it, vi } from 'vitest'
import { loadAttempts } from '@/domain/historyService'
import { buildTemporalAnalysis } from '@/domain/analyticsService'
import { temporalDecayWeight } from '@/domain/learningMetrics'
import type { SimuladoAttempt } from '@/domain/types'

const now = new Date('2026-04-08T12:00:00.000Z')

const makeAttempt = (id: string, createdAt: string, rate: number): SimuladoAttempt => ({
  id,
  createdAt,
  questionIds: [`q-${id}`],
  answers: [{ questionId: `q-${id}`, selectedAlternativeId: 'A', isCorrect: rate >= 0.5 }],
  score: 1,
  correctCount: rate >= 0.5 ? 1 : 0,
  wrongCount: rate >= 0.5 ? 0 : 1,
  portugueseCorrect: 0,
  specificCorrect: 1,
  themeSnapshot: [{ theme: 'APH', totalQuestions: 1, correct: rate >= 0.5 ? 1 : 0, wrong: rate >= 0.5 ? 0 : 1, accuracyRate: rate }],
  themes: ['APH'],
  subthemes: [],
  totalQuestions: 1,
  accuracyRate: rate,
  wrongQuestionRefs: []
})

describe('persistência versionada e decay temporal', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(now)
    localStorage.clear()
  })

  it('migra histórico legado (array puro) para envelope versionado', () => {
    const legacy = [makeAttempt('legacy', '2026-04-01T10:00:00.000Z', 1)]
    localStorage.setItem('imarui_simulados', JSON.stringify(legacy))

    const loaded = loadAttempts()
    const persisted = JSON.parse(localStorage.getItem('imarui_simulados') ?? '{}') as { version: number; data: unknown[] }

    expect(loaded).toHaveLength(1)
    expect(persisted.version).toBe(1)
    expect(Array.isArray(persisted.data)).toBe(true)
  })

  it('aplica decay temporal favorecendo eventos recentes em analytics', () => {
    const attempts = [
      makeAttempt('old', '2026-03-09T12:00:00.000Z', 0),
      makeAttempt('mid', '2026-04-01T12:00:00.000Z', 0.5),
      makeAttempt('new', '2026-04-08T10:00:00.000Z', 1)
    ]

    const analysis = buildTemporalAnalysis(attempts, 30)
    const aph = analysis.themes.find((item) => item.theme === 'APH')

    expect(aph).toBeDefined()
    expect(aph?.avgAccuracyRate).toBeGreaterThan(0.6)
    expect(temporalDecayWeight('2026-04-08T10:00:00.000Z')).toBeGreaterThan(temporalDecayWeight('2026-03-09T12:00:00.000Z'))
  })
})
