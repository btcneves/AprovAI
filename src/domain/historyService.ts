import type { SimuladoAttempt } from './types'
import { storage } from '@/lib/storage'
import { storageKeys } from './simuladoService'
import { hydrateAttempt } from './analyticsService'

export const loadAttempts = (): SimuladoAttempt[] =>
  storage.get<SimuladoAttempt[]>(storageKeys.history, []).map((attempt) => hydrateAttempt(attempt))

export const saveAttempt = (attempt: SimuladoAttempt): SimuladoAttempt[] => {
  const current = loadAttempts()
  const next = [...current, attempt]
  storage.set(storageKeys.history, next)
  return next
}
