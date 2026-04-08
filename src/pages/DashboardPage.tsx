import { Card } from '@/components/ui/Card'
import { activeQuestions } from '@/data/questionBank/questions'
import { useAppState } from '@/app/AppStateContext'

export const DashboardPage = () => {
  const { attempts } = useAppState()
  const last = attempts.at(-1)
  const questionMap = new Map(activeQuestions.map((question) => [question.id, question]))

  const totalAnswers = attempts.reduce((sum, attempt) => sum + attempt.answers.length, 0)
  const totalCorrect = attempts.reduce((sum, attempt) => sum + attempt.correctCount, 0)
  const overallRate = totalAnswers ? Math.round((totalCorrect / totalAnswers) * 100) : 0

  const topicStats = new Map<string, { total: number; correct: number }>()
  const difficultyStats = new Map<string, { total: number; correct: number }>()
  const trainCount = new Map<string, number>()
  const wrongCount = new Map<string, number>()

  for (const attempt of attempts) {
    for (const answer of attempt.answers) {
      const question = questionMap.get(answer.questionId)
      if (!question) continue

      const topicKey = `${question.topic}${question.subtopic ? ` / ${question.subtopic}` : ''}`
      const topic = topicStats.get(topicKey) ?? { total: 0, correct: 0 }
      topic.total += 1
      if (answer.isCorrect) topic.correct += 1
      topicStats.set(topicKey, topic)

      const difficulty = difficultyStats.get(question.difficulty) ?? { total: 0, correct: 0 }
      difficulty.total += 1
      if (answer.isCorrect) difficulty.correct += 1
      difficultyStats.set(question.difficulty, difficulty)

      trainCount.set(topicKey, (trainCount.get(topicKey) ?? 0) + 1)
      if (!answer.isCorrect) wrongCount.set(topicKey, (wrongCount.get(topicKey) ?? 0) + 1)
    }
  }

  const mostWrong = [...wrongCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3)
  const mostTrained = [...trainCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3)
  const weakestTopic = mostWrong[0]?.[0]

  return (
    <div className="grid-2">
      <Card title="Resumo da preparação">
        <p>Banco ativo: {activeQuestions.length} questões.</p>
        <p>Simulados/sessões realizados: {attempts.length}</p>
        <p>Taxa de acerto geral: <strong>{overallRate}%</strong></p>
        <p>Recomendação da próxima revisão: {weakestTopic ? `priorizar ${weakestTopic}` : 'realizar o primeiro simulado para gerar diagnóstico'}</p>
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

      <Card title="Taxa por tema">
        <ul>
          {[...topicStats.entries()].slice(0, 8).map(([topic, stat]) => (
            <li key={topic}>{topic}: {Math.round((stat.correct / stat.total) * 100)}% ({stat.correct}/{stat.total})</li>
          ))}
        </ul>
      </Card>

      <Card title="Indicadores de estudo">
        <p><strong>Assuntos mais errados</strong></p>
        <ul>{mostWrong.map(([topic, count]) => <li key={topic}>{topic}: {count} erros</li>)}</ul>
        <p><strong>Assuntos mais treinados</strong></p>
        <ul>{mostTrained.map(([topic, count]) => <li key={topic}>{topic}: {count} questões</li>)}</ul>
        <p><strong>Progresso por dificuldade</strong></p>
        <ul>
          {[...difficultyStats.entries()].map(([difficulty, stat]) => (
            <li key={difficulty}>{difficulty}: {Math.round((stat.correct / stat.total) * 100)}%</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
