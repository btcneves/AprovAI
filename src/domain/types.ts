export type Discipline = 'portugues' | 'especificos'

export type Difficulty = 'facil' | 'media' | 'dificil'

export type AlternativeId = 'A' | 'B' | 'C' | 'D' | 'E'

export type QuestionOfficialSource = {
  manualId?: string
  sectionId?: string
  excerpt?: string
  pageStart?: number
  pageEnd?: number
  sourceUrl?: string
}

export type Question = {
  id: string
  discipline: Discipline
  area: string
  topic: string
  subtopic?: string
  difficulty: Difficulty
  sourceType: 'original' | 'adaptada' | 'inspirada'
  statement: string
  alternatives: { id: AlternativeId; text: string }[]
  correctAlternativeId: AlternativeId
  explanation: string
  whyOthersAreWrong: string[]
  editalReference: string
  tags: string[]
  relatedMindMapNodeId: string
  isActive: boolean
  sourceRefs?: QuestionOfficialSource[]
}

export type MindMapNode = {
  id: string
  title: string
  discipline: Discipline
  descriptionShort: string
  descriptionDetailed: string
  studyChecklist?: string[]
  studyReferences?: Array<{
    label: string
    type: 'edital' | 'cbae' | 'manual' | 'legislacao'
    url?: string
  }>
  parentId: string | null
  childrenIds: string[]
  tags: string[]
  editalReference: string
  relatedQuestionIds: string[]
  priority: 'alta' | 'media' | 'baixa'
}

export type SimuladoAnswer = {
  questionId: string
  selectedAlternativeId: AlternativeId | null
  isCorrect: boolean
}

export type SimuladoAttempt = {
  id: string
  createdAt: string
  questionIds: string[]
  answers: SimuladoAnswer[]
  score: number
  correctCount: number
  wrongCount: number
  portugueseCorrect: number
  specificCorrect: number
  durationInSeconds?: number
}
