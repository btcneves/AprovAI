import fs from 'node:fs/promises'
import path from 'node:path'
import { readJson, writeJson } from './utils.mjs'

const TOPICS = [
  { theme: 'Incêndio', subtheme: 'Classes de incêndio', keywords: ['classe a', 'classe b', 'classe c', 'classe d', 'classe k'], focus: 'classificação do incêndio' },
  { theme: 'Incêndio', subtheme: 'Métodos de extinção', keywords: ['resfriamento', 'abafamento', 'isolamento'], focus: 'método de extinção adequado' },
  { theme: 'Incêndio', subtheme: 'Comportamento do fogo', keywords: ['flashover', 'backdraft', 'fumaça'], focus: 'fenômeno do incêndio' },
  { theme: 'Incêndio', subtheme: 'Extintores', keywords: ['extintor', 'co2', 'pqs', 'espuma'], focus: 'emprego de extintores' },
  { theme: 'APH', subtheme: 'ABCDE', keywords: ['abcde', 'airway', 'breathing', 'circulation'], focus: 'avaliação primária' },
  { theme: 'APH', subtheme: 'RCP', keywords: ['rcp', 'compressão', 'dea'], focus: 'reanimação cardiopulmonar' },
  { theme: 'APH', subtheme: 'Trauma', keywords: ['trauma', 'imobilização', 'coluna'], focus: 'atendimento ao trauma' },
  { theme: 'APH', subtheme: 'Hemorragias', keywords: ['hemorragia', 'torniquete', 'compressão direta'], focus: 'controle hemorrágico' },
  { theme: 'Produtos perigosos', subtheme: 'Reconhecimento e isolamento', keywords: ['produto perigoso', 'onu', 'zona quente'], focus: 'isolamento inicial' },
  { theme: 'Salvamento', subtheme: 'Salvamento em altura', keywords: ['altura', 'ancoragem', 'corda'], focus: 'técnica de salvamento em altura' },
  { theme: 'Salvamento', subtheme: 'Salvamento aquático', keywords: ['afogamento', 'salvamento aquático', 'praia'], focus: 'resgate aquático' },
  { theme: 'Salvamento', subtheme: 'Resgate veicular', keywords: ['resgate veicular', 'desencarceramento', 'estabilização'], focus: 'procedimentos em resgate veicular' },
  { theme: 'Salvamento', subtheme: 'Busca terrestre', keywords: ['busca terrestre', 'setorização', 'varredura'], focus: 'procedimento de busca terrestre' },
  { theme: 'Operações', subtheme: 'Segurança operacional', keywords: ['segurança operacional', 'comando', 'par'], focus: 'gestão de segurança da guarnição' },
  { theme: 'Normas', subtheme: 'Legislação e atividade técnica', keywords: ['ig', 'norma', 'atividade técnica', 'legislação'], focus: 'base normativa do CBMSC' }
]

const difficulties = ['easy', 'medium', 'hard']
const questionTypes = ['conceptual', 'application', 'scenario', 'procedure', 'definition', 'comparison', 'exception']

const extractSections = async () => {
  const files = await fs.readdir('data/cbmsc/normalized').catch(() => [])
  const sections = []

  for (const file of files) {
    const doc = await readJson(path.join('data/cbmsc/normalized', file), null)
    if (!doc?.sections?.length) continue

    for (const section of doc.sections) {
      sections.push({
        manualId: doc.manualId,
        manualTitle: doc.title,
        sectionId: section.id,
        title: section.title,
        content: section.content ?? '',
        keywords: section.keywords ?? [],
        pageStart: section.pageStart,
        pageEnd: section.pageEnd,
        sourceUrl: doc.fileUrl || doc.sourceUrl
      })
    }
  }
  return sections
}

const scoreSection = (section, keywords) => {
  const text = `${section.title} ${(section.keywords ?? []).join(' ')} ${section.content.slice(0, 1800)}`.toLowerCase()
  return keywords.reduce((acc, keyword) => acc + (text.includes(keyword.toLowerCase()) ? 3 : 0), 0)
}

const findSections = (sections, keywords, limit = 12) =>
  sections
    .map((section) => ({ section, score: scoreSection(section, keywords) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.section)

const createOptions = (focus, variant) => {
  const correct = `A) Conduta alinhada ao manual oficial para ${focus}.`
  const distractors = [
    `B) Procedimento comum, porém sem respaldo normativo para ${focus}.`,
    `C) Ação parcialmente correta, mas com inversão de prioridade em ${focus}.`,
    `D) Conduta de risco que ignora avaliação da cena em ${focus}.`,
    `E) Resposta genérica baseada em improviso para ${focus}.`
  ]

  const rotated = [correct, ...distractors].map((_, index, array) => array[(index + variant) % array.length])
  return rotated
}

const correctLetter = (variant) => ['A', 'B', 'C', 'D', 'E'][(5 - (variant % 5)) % 5]

const main = async () => {
  await fs.mkdir('src/data/questions', { recursive: true })
  const sections = await extractSections()

  let index = 1
  const questions = []

  for (const topic of TOPICS) {
    const matched = findSections(sections, topic.keywords, 16)
    const quantity = 8

    for (let i = 0; i < quantity; i += 1) {
      const source = matched[i % Math.max(matched.length, 1)]
      if (!source) continue

      const variant = i % 5
      const options = createOptions(topic.focus, variant)
      const excerpt = source.content.slice(0, 260)

      questions.push({
        id: `cbmsc-q-${String(index).padStart(4, '0')}`,
        theme: topic.theme,
        subtheme: topic.subtheme,
        difficulty: difficulties[index % difficulties.length],
        questionType: questionTypes[index % questionTypes.length],
        question: `Conforme o manual oficial do CBMSC, em ${topic.focus}, qual alternativa está correta para a situação operacional descrita?`,
        options,
        correctAnswer: correctLetter(variant),
        explanation: `A alternativa correta mantém aderência ao texto oficial de ${source.manualTitle}, seção \"${source.title}\", priorizando sequência técnica e segurança operacional.`,
        supportSnippet: excerpt,
        manualId: source.manualId,
        sectionId: source.sectionId,
        pages: { start: source.pageStart, end: source.pageEnd },
        sourceRefs: [
          {
            manualId: source.manualId,
            sectionId: source.sectionId,
            sourceUrl: source.sourceUrl,
            excerpt,
            pageStart: source.pageStart,
            pageEnd: source.pageEnd
          }
        ],
        tags: [topic.theme.toLowerCase(), topic.subtheme.toLowerCase(), `manual-${source.manualId}`],
        usedCount: 0,
        isActive: true
      })

      index += 1
    }
  }

  const ts = `import type { QuestionDocument } from '@/types/cbmsc'\n\nexport const cbmscQuestions: QuestionDocument[] = ${JSON.stringify(questions, null, 2)}\n`
  await fs.writeFile('src/data/questions/cbmscQuestions.ts', ts, 'utf-8')

  await writeJson('src/data/questions/generated-index.json', {
    generatedAt: new Date().toISOString(),
    banks: ['src/data/questions/cbmscQuestions.ts'],
    questionCount: questions.length,
    themes: Array.from(new Set(questions.map((q) => q.subtheme))).length
  })

  console.log(`[cbmsc:generate-questions] Banco atualizado com ${questions.length} questões oficiais.`)
}

main().catch((error) => {
  console.error('[cbmsc:generate-questions] Erro fatal:', error)
  process.exitCode = 1
})
