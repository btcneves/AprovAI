import { describe, expect, it } from 'vitest'
import { activeQuestions } from '@/data/questionBank/questions'

describe('question bank', () => {
  it('possui pelo menos 200 questões ativas e todas com 5 alternativas', () => {
    expect(activeQuestions.length).toBeGreaterThanOrEqual(200)
    activeQuestions.forEach((question) => {
      expect(question.alternatives).toHaveLength(5)
      expect(question.whyOthersAreWrong.length).toBe(4)
    })
  })

  it('evita discrepância de tamanho entre alternativas para reduzir acerto por padrão superficial', () => {
    activeQuestions.forEach((question) => {
      const lengths = question.alternatives.map((alternative) => alternative.text.length)
      const spread = Math.max(...lengths) - Math.min(...lengths)

      expect(spread).toBeLessThanOrEqual(35)
    })
  })

  it('mantém rastreabilidade com fontes oficiais em parte relevante do banco', () => {
    const withSources = activeQuestions.filter((question) => question.sourceRefs?.length)
    expect(withSources.length).toBeGreaterThanOrEqual(120)
  })
})
