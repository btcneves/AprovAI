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
