import { Card } from '@/components/ui/Card'
import { useAppState } from '@/app/AppStateContext'

export const HistoricoPage = () => {
  const { attempts } = useAppState()

  return (
    <Card title="Histórico e revisão por erros">
      {attempts.length === 0 ? <p>Nenhum simulado registrado.</p> : null}
      <ul>
        {[...attempts].reverse().map((attempt) => {
          const percentual = ((attempt.correctCount / 35) * 100).toFixed(1)
          return (
            <li key={attempt.id}>
              <strong>{new Date(attempt.createdAt).toLocaleString('pt-BR')}</strong> — Nota {attempt.score.toFixed(2)} — {attempt.correctCount} acertos ({percentual}%) — {attempt.wrongCount} erros
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
