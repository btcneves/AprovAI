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

export type DistractorAuditItem = {
  text: string
  type: string
  variation: string
  plausible: boolean
}

export type DistractorAudit = {
  correctType: string
  distractors: DistractorAuditItem[]
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
  supportSnippet?: string
  sourceRefs?: QuestionOfficialSource[]
  distractorAudit?: DistractorAudit
}

export type MindMapNode = {
  id: string
  title: string
  discipline: Discipline
  descriptionShort: string
  descriptionDetailed: string
  summary?: string
  examHighlights?: string[]
  commonMistakes?: string[]
  criticalDifferences?: string[]
  traps?: string[]
  sources?: Array<{
    manualId: string
    manualTitle?: string
    sectionId?: string
    sourceUrl: string
    pageStart?: number
    pageEnd?: number
    excerpt?: string
  }>
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


export type ThemeSnapshot = {
  theme: string
  totalQuestions: number
  correct: number
  wrong: number
  accuracyRate: number
}

export type WrongQuestionRef = {
  questionId: string
  theme: string
  subtheme: string | null
}
export type SimuladoAnswer = {
  questionId: string
  selectedAlternativeId: AlternativeId | null
  isCorrect: boolean
}

export type SimuladoAttempt = {
  id: string
  createdAt: string
  timestamp?: string
  questionIds: string[]
  answers: SimuladoAnswer[]
  score: number
  correctCount: number
  wrongCount: number
  totalQuestions?: number
  accuracyRate?: number
  themes?: string[]
  subthemes?: string[]
  difficulty?: Difficulty | 'mista'
  wrongQuestionRefs?: WrongQuestionRef[]
  themeSnapshot?: ThemeSnapshot[]
  portugueseCorrect: number
  specificCorrect: number
  durationInSeconds?: number
}
