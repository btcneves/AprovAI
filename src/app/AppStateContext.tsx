import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { SimuladoAttempt } from '@/domain/types'
import { loadAttempts, saveAttempt } from '@/domain/historyService'
import { activeQuestions } from '@/data/questionBank/questions'
import {
  loadNodeLearning,
  registerAttemptNodeLearning,
  registerNodeReview,
  registerNodeView,
  type NodeLearningMap
} from '@/domain/nodeLearningService'

type AppState = {
  attempts: SimuladoAttempt[]
  nodeLearningById: NodeLearningMap
  registerAttempt: (attempt: SimuladoAttempt) => void
  registerNodeView: (nodeId: string) => void
  registerNodeReview: (nodeId: string) => void
}

const AppStateContext = createContext<AppState | null>(null)

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [attempts, setAttempts] = useState<SimuladoAttempt[]>(() => loadAttempts())
  const [nodeLearningById, setNodeLearningById] = useState<NodeLearningMap>(() => loadNodeLearning())

  const value = useMemo(
    () => ({
      attempts,
      nodeLearningById,
      registerAttempt: (attempt: SimuladoAttempt) => {
        const nextAttempts = saveAttempt(attempt)
        setAttempts(nextAttempts)
        setNodeLearningById((current) => registerAttemptNodeLearning(current, attempt.answers, activeQuestions, attempt.createdAt))
      },
      registerNodeView: (nodeId: string) => {
        setNodeLearningById((current) => registerNodeView(current, nodeId))
      },
      registerNodeReview: (nodeId: string) => {
        setNodeLearningById((current) => registerNodeReview(current, nodeId))
      }
    }),
    [attempts, nodeLearningById]
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
