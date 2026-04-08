export type LearningTrend = 'melhorando' | 'piorando' | 'estavel'

type DecaySample = {
  at: string
  value: number
}

const DAY_IN_MS = 24 * 60 * 60 * 1000

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export const toPercent = (value: number) => Number((value * 100).toFixed(1))

export const temporalDecayWeight = (timestamp: string, nowMs = Date.now()): number => {
  const eventMs = new Date(timestamp).getTime()
  if (Number.isNaN(eventMs)) return 0.1

  const ageDays = Math.max(0, (nowMs - eventMs) / DAY_IN_MS)

  if (ageDays <= 7) {
    const factor = ageDays / 7
    return Number((1 - factor * 0.5).toFixed(4))
  }

  if (ageDays <= 30) {
    const factor = (ageDays - 7) / 23
    return Number((0.5 - factor * 0.4).toFixed(4))
  }

  return 0.1
}

export const weightedAverage = (samples: DecaySample[]): number => {
  if (!samples.length) return 0

  const weighted = samples.reduce(
    (acc, sample) => {
      const w = temporalDecayWeight(sample.at)
      return {
        total: acc.total + sample.value * w,
        weight: acc.weight + w
      }
    },
    { total: 0, weight: 0 }
  )

  return weighted.weight ? weighted.total / weighted.weight : 0
}

export const normalizeTrendFromRates = (olderRate: number, newerRate: number, threshold = 0.07): LearningTrend => {
  const delta = newerRate - olderRate
  if (delta > threshold) return 'melhorando'
  if (delta < -threshold) return 'piorando'
  return 'estavel'
}

export const calculateWeightedTrend = (samples: DecaySample[]): LearningTrend => {
  if (samples.length < 2) return 'estavel'

  const sorted = [...samples].sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime())
  const middle = Math.ceil(sorted.length / 2)
  const olderRate = weightedAverage(sorted.slice(0, middle))
  const newerRate = weightedAverage(sorted.slice(middle))

  return normalizeTrendFromRates(olderRate, newerRate)
}

export const safeRate = (numerator: number, denominator: number) => {
  if (denominator <= 0) return 0
  return clamp(numerator / denominator, 0, 1)
}
