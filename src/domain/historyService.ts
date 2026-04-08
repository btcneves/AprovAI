import type { SimuladoAttempt } from './types'
import { storage } from '@/lib/storage'
import { storageKeys } from './simuladoService'
import { hydrateAttempt } from './analyticsService'

const ATTEMPT_SCHEMA_VERSION = 1

const isAttempt = (value: unknown): value is SimuladoAttempt => {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<SimuladoAttempt>
  return typeof candidate.id === 'string' && typeof candidate.createdAt === 'string' && Array.isArray(candidate.answers) && Array.isArray(candidate.questionIds)
}

const isAttemptList = (value: unknown): value is SimuladoAttempt[] => Array.isArray(value) && value.every(isAttempt)

export const loadAttempts = (): SimuladoAttempt[] => {
  const envelope = storage.getVersioned<SimuladoAttempt[]>(storageKeys.history, {
    version: ATTEMPT_SCHEMA_VERSION,
    fallback: [],
    isValid: isAttemptList,
    migrate: {
      0: (legacy) => (Array.isArray(legacy) ? legacy.filter(isAttempt) : [])
    }
  })

  return envelope.data.map((attempt) => hydrateAttempt(attempt))
}

export const saveAttempt = (attempt: SimuladoAttempt): SimuladoAttempt[] => {
  const current = loadAttempts()
  const next = [...current, attempt]
  storage.setVersioned(storageKeys.history, ATTEMPT_SCHEMA_VERSION, next)
  return next
}
