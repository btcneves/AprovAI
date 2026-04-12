import { describe, expect, it } from 'vitest'
import { buildSimulado, evaluateSimulado } from '@/domain/simuladoService'
import { activeQuestions } from '@/data/questionBank/questions'

describe('simuladoService', () => {
  it('gera simulado com 35 questões respeitando 5 + 30 e sem repetição interna', () => {
    const simulado = buildSimulado([])
    expect(simulado).toHaveLength(35)

    const pt = simulado.filter((q) => q.discipline === 'portugues')
    const esp = simulado.filter((q) => q.discipline === 'especificos')
    expect(pt).toHaveLength(5)
    expect(esp).toHaveLength(30)

    const uniqueIds = new Set(simulado.map((q) => q.id))
    expect(uniqueIds.size).toBe(35)

    const canonical = simulado.map((q) => `${q.discipline}::${q.topic}::${q.subtopic}::${q.statement.replace(/\s*\(variação\s+\d+\)\s*$/i, '').trim()}`)
    expect(new Set(canonical).size).toBe(35)
  })

  it('gera modo inteligente por dificuldade com 20 questões', () => {
    const treino = buildSimulado([], { mode: 'difficulty', difficulty: 'dificil', questionCount: 20 })
    expect(treino.length).toBeGreaterThan(0)
    expect(treino.length).toBeLessThanOrEqual(20)
    expect(treino.every((question) => question.difficulty === 'dificil')).toBe(true)
  })

  it('gera modo adaptativo priorizando dificuldade e temas com maior erro recente', () => {
    const sampled = activeQuestions.slice(0, 12)
    const adaptiveAttempts = [
      {
        id: 'attempt-1',
        createdAt: new Date().toISOString(),
        questionIds: sampled.map((q) => q.id),
        answers: sampled.map((q, index) => ({ questionId: q.id, selectedAlternativeId: q.alternatives[0]?.id ?? null, isCorrect: index % 3 === 0 })),
        score: 1.2,
        correctCount: 4,
        wrongCount: 8,
        portugueseCorrect: 2,
        specificCorrect: 2
      }
    ]

    const treino = buildSimulado(adaptiveAttempts, { mode: 'adaptive', questionCount: 15 })
    expect(treino.length).toBeGreaterThan(0)
    expect(treino.length).toBeLessThanOrEqual(15)
    expect(treino.every((question) => question.difficulty === 'dificil')).toBe(true)
  })

  it('avalia nota com pesos oficiais 0.2 e 0.3', () => {
    const simulado = [...activeQuestions.filter((q) => q.discipline === 'portugues').slice(0, 5), ...activeQuestions.filter((q) => q.discipline === 'especificos').slice(0, 30)]

    const answers = Object.fromEntries(
      simulado.map((q, index) => [q.id, index < 4 ? q.correctAlternativeId : null])
    )

    const result = evaluateSimulado(simulado, answers)
    expect(result.portugueseCorrect + result.specificCorrect).toBe(4)
    expect(result.score).toBe(0.8)
  })
})
