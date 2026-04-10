import { describe, expect, it } from 'vitest'
import { cbmscMindmaps } from '@/data/mindmaps'

const normalize = (text: string) => text.trim().toLowerCase()

describe('mindmap data normalization', () => {
  it('remove duplicação em summary/highlights/mistakes', () => {
    for (const map of cbmscMindmaps) {
      const summaryNorm = normalize(map.summary)
      const highlightsNorm = map.examHighlights.map(normalize)
      const mistakesNorm = map.commonMistakes.map(normalize)

      expect(new Set(highlightsNorm).size).toBe(highlightsNorm.length)
      expect(new Set(mistakesNorm).size).toBe(mistakesNorm.length)
      expect(highlightsNorm.filter((item) => item === summaryNorm).length).toBeLessThanOrEqual(1)
      expect(map.examHighlights.length).toBeLessThanOrEqual(4)
      expect(map.commonMistakes.length).toBeLessThanOrEqual(4)
    }
  })
})
