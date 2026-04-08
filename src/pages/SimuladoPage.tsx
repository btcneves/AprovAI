import { useMemo, useState } from 'react'
import { useAppState } from '@/app/AppStateContext'
import { buildSimulado, evaluateSimulado, type StudyMode } from '@/domain/simuladoService'
import { enrichAttemptWithAnalytics } from '@/domain/analyticsService'
import type { AlternativeId, Difficulty, Question, SimuladoAttempt } from '@/domain/types'
import { activeQuestions } from '@/data/questionBank/questions'
import { QuestionCard } from '@/features/simulado/components/QuestionCard'
import { ResultPanel } from '@/features/simulado/components/ResultPanel'

export const SimuladoPage = () => {
  const { attempts, registerAttempt } = useAppState()
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, AlternativeId | null>>({})
  const [result, setResult] = useState<SimuladoAttempt | null>(null)
  const [mode, setMode] = useState<StudyMode>('full')
  const [subtopic, setSubtopic] = useState('')
  const [difficulty, setDifficulty] = useState<Difficulty>('media')

  const progress = useMemo(() => {
    const answered = Object.values(answers).filter(Boolean).length
    return questions.length ? Math.round((answered / questions.length) * 100) : 0
  }, [answers, questions.length])

  const subtopics = useMemo(
    () =>
      [...new Set(activeQuestions.map((question) => question.subtopic).filter(Boolean))]
        .sort((a, b) => (a ?? '').localeCompare(b ?? ''))
        .map((value) => value as string),
    []
  )

  const start = () => {
    const generated =
      mode === 'full'
        ? buildSimulado(attempts, { mode })
        : buildSimulado(attempts, {
            mode,
            questionCount: 20,
            subtopic: subtopic || undefined,
            difficulty
          })

    setQuestions(generated)
    setAnswers({})
    setIndex(0)
    setResult(null)
  }

  const finish = () => {
    if (!questions.length) return

    const now = new Date().toISOString()
    const evaluated = evaluateSimulado(questions, answers)
    const attempt = enrichAttemptWithAnalytics(
      {
        id: crypto.randomUUID(),
        createdAt: now,
        timestamp: now,
        ...evaluated
      },
      questions
    )
    registerAttempt(attempt)
    setResult(attempt)
  }

  if (!questions.length) {
    return (
      <section className="card">
        <h2>Simulado Oficial + Modo de Estudo Inteligente</h2>
        <p>Modo completo mantém a distribuição oficial: 5 Português + 30 Específicos.</p>
        <div className="study-config-grid">
          <label>
            Modo de estudo
            <select className="input" value={mode} onChange={(event) => setMode(event.target.value as StudyMode)}>
              <option value="full">Simulado oficial completo</option>
              <option value="weak-topics">Treino focado em temas fracos</option>
              <option value="subtopic">Treino por subtema</option>
              <option value="difficulty">Treino por dificuldade</option>
              <option value="recent-wrong">Revisão das erradas recentes</option>
            </select>
          </label>

          {mode === 'subtopic' ? (
            <label>
              Subtema
              <select className="input" value={subtopic} onChange={(event) => setSubtopic(event.target.value)}>
                <option value="">Selecione um subtema</option>
                {subtopics.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>
          ) : null}

          {mode === 'difficulty' ? (
            <label>
              Dificuldade
              <select className="input" value={difficulty} onChange={(event) => setDifficulty(event.target.value as Difficulty)}>
                <option value="facil">Fácil</option>
                <option value="media">Média</option>
                <option value="dificil">Difícil</option>
              </select>
            </label>
          ) : null}
        </div>
        <button onClick={start}>Iniciar sessão</button>
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
