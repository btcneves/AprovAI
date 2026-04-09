export type SourceRef = {
  manualId: string
  sectionId?: string
  manualTitle?: string
  category?: string
  sourcePage?: string
  sourceUrl: string
  collectedAt?: string
  excerpt?: string
  pageStart?: number
  pageEnd?: number
}

export type CBMSCManualIndexEntry = {
  id: string
  title: string
  category: string
  sourcePage: string
  fileUrl: string
  extension: string
  collectedAt: string
  status: 'active' | 'archived' | 'unavailable'
}

export type CBMSCSection = {
  id: string
  title: string
  content: string
  keywords: string[]
  pageStart?: number
  pageEnd?: number
  purpose: Array<'theory' | 'review' | 'mindmap' | 'question-generation' | 'answer-explanation'>
  sourceRefs: SourceRef[]
}

export type CBMSCManualDocument = {
  manualId: string
  title: string
  category: string
  sourceUrl: string
  fileUrl?: string
  collectedAt: string
  parsedAt?: string
  normalizedAt?: string
  sections: CBMSCSection[]
}

export type MindMapNodeDocument = {
  id: string
  label: string
  type: 'main' | 'child'
  children?: MindMapNodeDocument[]
}

export type MindMapDocument = {
  id: string
  title: string
  summary: string
  nodes: MindMapNodeDocument[]
  examHighlights: string[]
  commonMistakes: string[]
  terms: string[]
  sources: SourceRef[]
}

export type QuestionSourceRef = {
  manualId?: string
  sectionId?: string
  sourceUrl?: string
  excerpt: string
  pageStart?: number
  pageEnd?: number
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

export type QuestionDocument = {
  id: string
  theme: string
  subtheme: string
  difficulty: 'easy' | 'medium' | 'hard'
  question: string
  options: string[]
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E'
  explanation: string
  supportSnippet?: string
  manualId?: string
  sectionId?: string
  pages?: { start?: number; end?: number }
  sourceRefs: QuestionSourceRef[]
  tags: string[]
  questionType: 'conceptual' | 'application' | 'scenario' | 'procedure' | 'definition' | 'comparison' | 'exception'
  distractorAudit?: DistractorAudit
  usedCount: number
  isActive: boolean
}
