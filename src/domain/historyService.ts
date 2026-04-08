import type { SimuladoAttempt } from './types'
import { storage } from '@/lib/storage'
import { storageKeys } from './simuladoService'

export const loadAttempts = (): SimuladoAttempt[] => storage.get<SimuladoAttempt[]>(storageKeys.history, [])

export const saveAttempt = (attempt: SimuladoAttempt): SimuladoAttempt[] => {
  const current = loadAttempts()
  const next = [...current, attempt]
  storage.set(storageKeys.history, next)
  return next
}
