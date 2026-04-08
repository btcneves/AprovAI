import { Link } from 'react-router-dom'
import type { Question, SimuladoAttempt } from '@/domain/types'
import { buildErrorFollowUp } from '@/domain/analyticsService'
import { useAppState } from '@/app/AppStateContext'

type Props = {
  attempt: SimuladoAttempt
  questions: Question[]
}

export const ResultPanel = ({ attempt, questions }: Props) => {
  const { attempts } = useAppState()
  const questionMap = new Map(questions.map((question) => [question.id, question]))
  const wrongAnswers = attempt.answers.filter((answer) => !answer.isCorrect)
  const percentual = ((attempt.correctCount / questions.length) * 100).toFixed(1)
  const followUp = buildErrorFollowUp(attempts, attempt)
  const performanceLabel = Number(percentual) >= 80 ? 'Ótimo desempenho' : Number(percentual) >= 60 ? 'Bom, com pontos de ajuste' : 'Atenção: revisar bases críticas'

  return (
    <div className="result-grid">
      <section className="card">
        <h2>Resultado do Simulado</h2>
        <p>Nota: <strong>{attempt.score.toFixed(2)}</strong></p>
        <p>Acertos: {attempt.correctCount}</p>
        <p>Erros: {attempt.wrongCount}</p>
        <p>Percentual: <strong className={Number(percentual) >= 60 ? 'feedback-ok' : 'feedback-warn'}>{percentual}%</strong></p>
        <p className={Number(percentual) >= 60 ? 'feedback-ok' : 'feedback-warn'}>{performanceLabel}</p>
        <p>Português: {attempt.portugueseCorrect} | Específicos: {attempt.specificCorrect}</p>
      </section>

      <section className="card">
        <h3>Fechamento do loop pós-erro</h3>
        <p>{followUp.message}</p>
        <ul>
          {followUp.improvements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h3>Revisão pós-simulado</h3>
        {wrongAnswers.length === 0 ? <p>Excelente! Você acertou todas.</p> : null}
        {wrongAnswers.map((answer) => {
          const question = questionMap.get(answer.questionId)
          if (!question) return null

          const selectedText = question.alternatives.find((alternative) => alternative.id === answer.selectedAlternativeId)?.text
          const correctText = question.alternatives.find((alternative) => alternative.id === question.correctAlternativeId)?.text
          const mapNode = question.relatedMindMapNodeId

          return (
            <article key={question.id} className="wrong-item">
              <p><strong>Questão errada:</strong> {question.statement}</p>
              <p><strong>Resposta marcada:</strong> {answer.selectedAlternativeId ?? 'Não respondida'} {selectedText ? `— ${selectedText}` : ''}</p>
              <p><strong>Resposta correta:</strong> {question.correctAlternativeId} {correctText ? `— ${correctText}` : ''}</p>
              <p><strong>Explicação:</strong> {question.explanation}</p>
              {question.sourceRefs?.[0] ? (
                <p>
                  <strong>Manual / Seção / Página:</strong> {question.sourceRefs[0].manualId ?? 'n/d'}
                  {question.sourceRefs[0].sectionId ? ` | ${question.sourceRefs[0].sectionId}` : ''}
                  {question.sourceRefs[0].pageStart ? ` | p. ${question.sourceRefs[0].pageStart}${question.sourceRefs[0].pageEnd && question.sourceRefs[0].pageEnd !== question.sourceRefs[0].pageStart ? `-${question.sourceRefs[0].pageEnd}` : ''}` : ''}
                </p>
              ) : null}
              {question.supportSnippet ? <p><strong>Trecho de apoio:</strong> {question.supportSnippet}</p> : null}
              <ul>{question.whyOthersAreWrong.map((reason) => <li key={reason}>{reason}</li>)}</ul>
              <p><strong>Ação:</strong> revisar mapa mental do tema e refazer treino focado.</p>
              <div className="actions-row" style={{ justifyContent: 'flex-start' }}>
                <Link to={`/simulado?mode=subtopic&topic=${encodeURIComponent(question.topic)}&subtopic=${encodeURIComponent(question.subtopic ?? '')}`}>Iniciar treino focado agora</Link>
                {mapNode ? <Link to={`/mapas?focus=${mapNode}`}>Abrir mapa mental relacionado</Link> : null}
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}
