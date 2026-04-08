import { useMemo, useState } from 'react'
import { useAppState } from '@/app/AppStateContext'
import { buildSimulado, evaluateSimulado } from '@/domain/simuladoService'
import type { AlternativeId, Question, SimuladoAttempt } from '@/domain/types'
import { QuestionCard } from '@/features/simulado/components/QuestionCard'
import { ResultPanel } from '@/features/simulado/components/ResultPanel'

export const SimuladoPage = () => {
  const { attempts, registerAttempt } = useAppState()
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, AlternativeId | null>>({})
  const [result, setResult] = useState<SimuladoAttempt | null>(null)

  const progress = useMemo(() => {
    const answered = Object.values(answers).filter(Boolean).length
    return questions.length ? Math.round((answered / questions.length) * 100) : 0
  }, [answers, questions.length])

  const start = () => {
    const generated = buildSimulado(attempts)
    setQuestions(generated)
    setAnswers({})
    setIndex(0)
    setResult(null)
  }

  const finish = () => {
    if (!questions.length) return

    const evaluated = evaluateSimulado(questions, answers)
    const attempt: SimuladoAttempt = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...evaluated
    }
    registerAttempt(attempt)
    setResult(attempt)
  }

  if (!questions.length) {
    return (
      <section className="card">
        <h2>Simulado Oficial (35 questões)</h2>
        <p>Distribuição obrigatória: 5 Português + 30 Específicos.</p>
        <button onClick={start}>Iniciar simulado</button>
      </section>
    )
  }

  if (result) {
    return <ResultPanel attempt={result} questions={questions} />
  }

  const current = questions[index]
  return (
    <div>
      <section className="card">
        <p>Progresso: {progress}%</p>
        <p>
          Respondidas: {Object.values(answers).filter(Boolean).length}/{questions.length}
        </p>
      </section>
      <QuestionCard
        question={current}
        index={index}
        total={questions.length}
        selected={answers[current.id] ?? null}
        onSelect={(id) => setAnswers((prev) => ({ ...prev, [current.id]: id }))}
      />
      <div className="actions-row">
        <button disabled={index === 0} onClick={() => setIndex((value) => value - 1)}>Anterior</button>
        <button disabled={index === questions.length - 1} onClick={() => setIndex((value) => value + 1)}>Próxima</button>
        <button onClick={finish}>Finalizar e corrigir</button>
      </div>
    </div>
  )
}
