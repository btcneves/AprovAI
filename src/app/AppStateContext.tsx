import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { SimuladoAttempt } from '@/domain/types'
import { loadAttempts, saveAttempt } from '@/domain/historyService'

type AppState = {
  attempts: SimuladoAttempt[]
  registerAttempt: (attempt: SimuladoAttempt) => void
}

const AppStateContext = createContext<AppState | null>(null)

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [attempts, setAttempts] = useState<SimuladoAttempt[]>(() => loadAttempts())

  const value = useMemo(
    () => ({
      attempts,
      registerAttempt: (attempt: SimuladoAttempt) => {
        const next = saveAttempt(attempt)
        setAttempts(next)
      }
    }),
    [attempts]
  )

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

export const useAppState = () => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState deve ser usado dentro de AppStateProvider')
  }
  return context
}
