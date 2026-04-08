import { Card } from '@/components/ui/Card'
import { activeQuestions } from '@/data/questionBank/questions'
import { useAppState } from '@/app/AppStateContext'
import { buildRecommendations, buildTemporalAnalysis } from '@/domain/analyticsService'

export const DashboardPage = () => {
  const { attempts } = useAppState()
  const last = attempts.at(-1)
  const questionMap = new Map(activeQuestions.map((question) => [question.id, question]))

  const totalAnswers = attempts.reduce((sum, attempt) => sum + attempt.answers.length, 0)
  const totalCorrect = attempts.reduce((sum, attempt) => sum + attempt.correctCount, 0)
  const overallRate = totalAnswers ? Math.round((totalCorrect / totalAnswers) * 100) : 0

  const topicStats = new Map<string, { total: number; correct: number }>()
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

      trainCount.set(topicKey, (trainCount.get(topicKey) ?? 0) + 1)
      if (!answer.isCorrect) wrongCount.set(topicKey, (wrongCount.get(topicKey) ?? 0) + 1)
    }
  }

  const mostWrong = [...wrongCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3)
  const mostTrained = [...trainCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3)
  const weakestTopic = mostWrong[0]?.[0]

  const analysis7 = buildTemporalAnalysis(attempts, 7)
  const analysis14 = buildTemporalAnalysis(attempts, 14)
  const analysis30 = buildTemporalAnalysis(attempts, 30)
  const recommendations = buildRecommendations(attempts)

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
            <p>Taxa da sessão: {Math.round((last.accuracyRate ?? 0) * 100)}%</p>
          </>
        ) : (
          <p>Ainda não há tentativas registradas.</p>
        )}
      </Card>

      <Card title="Recomendações adaptativas (prioridade por impacto)">
        {recommendations.length === 0 ? <p>Realize sessões para liberar recomendações.</p> : null}
        <ul>
          {recommendations.map((item) => (
            <li key={item.id}>
              <strong>[P{item.priority}] {item.title}</strong> — {item.description}
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Evolução por tema (7/14/30 dias)">
        {analysis30.themes.length === 0 ? <p>Sem dados suficientes para análise temporal.</p> : null}
        <ul>
          {analysis30.themes.slice(0, 6).map((themeData) => {
            const rate7 = analysis7.themes.find((item) => item.theme === themeData.theme)?.avgAccuracyRate ?? 0
            const rate14 = analysis14.themes.find((item) => item.theme === themeData.theme)?.avgAccuracyRate ?? 0
            const rate30 = analysis30.themes.find((item) => item.theme === themeData.theme)?.avgAccuracyRate ?? 0
            return (
              <li key={themeData.theme}>
                <strong>{themeData.theme}</strong>: 7d {Math.round(rate7 * 100)}% · 14d {Math.round(rate14 * 100)}% · 30d {Math.round(rate30 * 100)}% · tendência {themeData.trend}
              </li>
            )
          })}
        </ul>
      </Card>

      <Card title="Indicadores de estudo">
        <p><strong>Assuntos mais errados</strong></p>
        <ul>{mostWrong.map(([topic, count]) => <li key={topic}>{topic}: {count} erros</li>)}</ul>
        <p><strong>Assuntos mais treinados</strong></p>
        <ul>{mostTrained.map(([topic, count]) => <li key={topic}>{topic}: {count} questões</li>)}</ul>
      </Card>

      <Card title="Taxa por tema">
        <ul>
          {[...topicStats.entries()].slice(0, 8).map(([topic, stat]) => (
            <li key={topic}>{topic}: {Math.round((stat.correct / stat.total) * 100)}% ({stat.correct}/{stat.total})</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
