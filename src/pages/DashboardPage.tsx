import { Card } from '@/components/ui/Card'
import { activeQuestions } from '@/data/questionBank/questions'
import { useAppState } from '@/app/AppStateContext'

export const DashboardPage = () => {
  const { attempts } = useAppState()
  const last = attempts.at(-1)

  return (
    <div className="grid-2">
      <Card title="Resumo da preparação">
        <p>Banco ativo: {activeQuestions.length} questões.</p>
        <p>Estrutura oficial: 5 de Português + 30 de Específicos.</p>
        <p>Simulados realizados: {attempts.length}</p>
      </Card>
      <Card title="Último desempenho">
        {last ? (
          <>
            <p>Data: {new Date(last.createdAt).toLocaleString('pt-BR')}</p>
            <p>Nota: {last.score.toFixed(2)}</p>
            <p>Acertos: {last.correctCount}</p>
          </>
        ) : (
          <p>Ainda não há tentativas registradas.</p>
        )}
      </Card>
    </div>
  )
}
