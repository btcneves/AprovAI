import { Card } from '@/components/ui/Card'
import { useAppState } from '@/app/AppStateContext'

export const HistoricoPage = () => {
  const { attempts } = useAppState()

  return (
    <Card title="Histórico de sessões + snapshots por tema">
      {attempts.length === 0 ? <p>Nenhum simulado registrado.</p> : null}
      <ul>
        {[...attempts].reverse().map((attempt) => {
          const total = attempt.totalQuestions ?? attempt.answers.length
          const percentual = total ? ((attempt.correctCount / total) * 100).toFixed(1) : '0.0'
          return (
            <li key={attempt.id} className="history-item">
              <strong>{new Date(attempt.createdAt).toLocaleString('pt-BR')}</strong> — Nota {attempt.score.toFixed(2)} — {attempt.correctCount}/{total} ({percentual}%) — {attempt.wrongCount} erros
              <br />
              Temas: {(attempt.themes ?? []).join(', ') || 'n/d'} | Subtemas: {(attempt.subthemes ?? []).join(', ') || 'n/d'} | Dificuldade: {attempt.difficulty ?? 'mista'}
              {(attempt.themeSnapshot?.length ?? 0) > 0 ? (
                <ul>
                  {attempt.themeSnapshot?.map((item) => (
                    <li key={`${attempt.id}-${item.theme}`}>
                      Snapshot {item.theme}: {item.correct}/{item.totalQuestions} ({Math.round(item.accuracyRate * 100)}%)
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
