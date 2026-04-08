import { Link } from 'react-router-dom'
import type { Question, SimuladoAttempt } from '@/domain/types'

type Props = {
  attempt: SimuladoAttempt
  questions: Question[]
}

export const ResultPanel = ({ attempt, questions }: Props) => {
  const questionMap = new Map(questions.map((question) => [question.id, question]))
  const wrongAnswers = attempt.answers.filter((answer) => !answer.isCorrect)
  const percentual = ((attempt.correctCount / questions.length) * 100).toFixed(1)

  return (
    <div className="result-grid">
      <section className="card">
        <h2>Resultado do Simulado</h2>
        <p>Nota: <strong>{attempt.score.toFixed(2)}</strong></p>
        <p>Acertos: {attempt.correctCount}</p>
        <p>Erros: {attempt.wrongCount}</p>
        <p>Percentual: {percentual}%</p>
        <p>Português: {attempt.portugueseCorrect} | Específicos: {attempt.specificCorrect}</p>
      </section>

      <section className="card">
        <h3>Questões para revisão</h3>
        {wrongAnswers.length === 0 ? <p>Excelente! Você acertou todas.</p> : null}
        {wrongAnswers.map((answer) => {
          const question = questionMap.get(answer.questionId)
          if (!question) return null

          return (
            <div key={question.id} className="wrong-item">
              <p><strong>{question.statement}</strong></p>
              <p>Marcada: {answer.selectedAlternativeId ?? 'Não respondida'}</p>
              <p>Correta: {question.correctAlternativeId}</p>
              <p>Explicação: {question.explanation}</p>
              <ul>{question.whyOthersAreWrong.map((reason) => <li key={reason}>{reason}</li>)}</ul>
              <Link to={`/mapas?focus=${question.relatedMindMapNodeId}`}>Revisar no mapa mental</Link>
            </div>
          )
        })}
      </section>
    </div>
  )
}
