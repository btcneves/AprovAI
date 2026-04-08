import { describe, expect, it } from 'vitest'
import { activeQuestions } from '@/data/questionBank/questions'

describe('question bank', () => {
  it('possui mais de 100 questões ativas e todas com 5 alternativas', () => {
    expect(activeQuestions.length).toBeGreaterThan(100)
    activeQuestions.forEach((question) => {
      expect(question.alternatives).toHaveLength(5)
      expect(question.whyOthersAreWrong.length).toBe(4)
    })
  })
})
