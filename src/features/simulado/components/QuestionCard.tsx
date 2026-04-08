import type { AlternativeId, Question } from '@/domain/types'

type Props = {
  question: Question
  index: number
  total: number
  selected: AlternativeId | null
  onSelect: (id: AlternativeId) => void
}

export const QuestionCard = ({ question, index, total, selected, onSelect }: Props) => (
  <article className="card question-card">
    <h3>
      Questão {index + 1} de {total}
    </h3>
    <p>{question.statement}</p>
    <div className="alternatives">
      {question.alternatives.map((alternative) => (
        <label key={alternative.id} className={selected === alternative.id ? 'alt selected' : 'alt'}>
          <input
            type="radio"
            name={question.id}
            checked={selected === alternative.id}
            onChange={() => onSelect(alternative.id)}
          />
          <span>{alternative.id}) {alternative.text}</span>
        </label>
      ))}
    </div>
  </article>
)
