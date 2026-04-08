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

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E']
const difficulties = ['easy', 'medium', 'hard']
const questionTypes = ['conceptual', 'application', 'scenario', 'procedure', 'definition', 'comparison', 'exception']
const bannedWords = [/\bcorret[ao]\b/i, /\berrad[ao]\b/i, /\binadequad[ao]\b/i, /manual oficial/i, /alinhad[ao]\s+ao\s+manual/i]

const OPTION_FAMILIES = [
  {
    correctIndex: 0,
    statements: [
      'Confirmar segurança da cena, seguir a sequência primária do protocolo e tratar achados críticos sem pular etapas.',
      'Iniciar a intervenção específica antes da sequência primária e ajustar prioridades durante a execução tática.',
      'Concluir a avaliação secundária para depois revisar a sequência primária com base no quadro consolidado.',
      'Aplicar a técnica setorial completa antes de checar riscos dinâmicos e redefinir prioridades da equipe.',
      'Realizar estabilização global e postergar intervenções críticas até finalizar a coleta integral de dados.'
    ]
  },
  {
    correctIndex: 0,
    statements: [
      'Priorizar riscos imediatos, executar a etapa inicial prevista e reavaliar continuamente a resposta da vítima ou cena.',
      'Antecipar a etapa de apoio para ganhar tempo e validar riscos imediatos somente na revisão da operação.',
      'Conduzir ações em paralelo sem hierarquia entre etapas, ajustando a sequência após a primeira intervenção.',
      'Manter foco exclusivo na técnica principal e deixar a reavaliação de risco para o encerramento da ocorrência.',
      'Coletar o máximo de informações antes de qualquer intervenção, mesmo diante de sinais de agravamento rápido.'
    ]
  },
  {
    correctIndex: 0,
    statements: [
      'Definir prioridade técnica inicial, aplicar o procedimento correspondente e registrar rechecagens ao longo da evolução.',
      'Aplicar primeiro o procedimento de menor risco aparente e confirmar a prioridade técnica apenas na etapa final.',
      'Executar medidas de suporte avançado antes da triagem inicial, reservando o protocolo principal para confirmação tardia.',
      'Centralizar toda a decisão na primeira impressão da equipe e reduzir rechecagens para evitar interrupções operacionais.',
      'Padronizar uma única conduta para todos os cenários e compensar desvios com monitoramento posterior da guarnição.'
    ]
  }
]

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

const shift = (items, offset) => items.map((_, index, arr) => arr[(index + offset) % arr.length])

const normalizedLen = (option) => option.replace(/^[A-E]\)\s*/, '').trim().length

const validateQuestionQuality = (options, correctLetter) => {
  const issues = []
  const lengths = options.map(normalizedLen)
  const max = Math.max(...lengths)
  const min = Math.min(...lengths)

  if (max / min > 1.35) {
    issues.push(`disparidade de tamanho entre alternativas (${min}-${max})`)
  }

  for (const option of options) {
    const raw = option.replace(/^[A-E]\)\s*/, '')
    if (bannedWords.some((word) => word.test(raw))) {
      issues.push(`termo privilegiado detectado: "${raw}"`)
    }
  }

  const uniqueOptionBodies = new Set(options.map((option) => option.replace(/^[A-E]\)\s*/, '').toLowerCase()))
  if (uniqueOptionBodies.size < 5) {
    issues.push('alternativas com repetição textual')
  }

  const correctOption = options.find((option) => option.startsWith(`${correctLetter})`))?.replace(/^[A-E]\)\s*/, '') ?? ''
  if (!correctOption) {
    issues.push('alternativa correta não encontrada após rotação')
  }

  return issues
}

const createOptions = (variant, familyIndex) => {
  const family = OPTION_FAMILIES[familyIndex % OPTION_FAMILIES.length]
  const rotated = shift(family.statements, variant)
  const options = rotated.map((statement, idx) => `${OPTION_LABELS[idx]}) ${statement}`)
  const correctLetter = OPTION_LABELS[(OPTION_LABELS.length + family.correctIndex - variant) % OPTION_LABELS.length]

  const qualityIssues = validateQuestionQuality(options, correctLetter)
  if (qualityIssues.length) {
    throw new Error(`Questão rejeitada pelo validador: ${qualityIssues.join('; ')}`)
  }

  return { options, correctLetter }
}

const fallbackSourceForTopic = (topic) => ({
  manualId: 'cbmsc-referencia-geral',
  manualTitle: 'Referencial CBMSC Consolidado',
  sectionId: `secao-${topic.subtheme.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  title: topic.subtheme,
  content: `Referência operacional para ${topic.focus}.`,
  pageStart: 1,
  pageEnd: 1,
  sourceUrl: 'https://www.cbm.sc.gov.br'
})

const main = async () => {
  await fs.mkdir('src/data/questions', { recursive: true })
  const sections = await extractSections()

  let index = 1
  const questions = []

  for (const topic of TOPICS) {
    const matched = findSections(sections, topic.keywords, 16)
    const quantity = 8

    for (let i = 0; i < quantity; i += 1) {
      const source = matched.length ? matched[i % matched.length] : fallbackSourceForTopic(topic)

      const variant = i % 5
      const familyIndex = i % OPTION_FAMILIES.length
      const { options, correctLetter } = createOptions(variant, familyIndex)
      const excerpt = source.content.slice(0, 260)

      questions.push({
        id: `cbmsc-q-${String(index).padStart(4, '0')}`,
        theme: topic.theme,
        subtheme: topic.subtheme,
        difficulty: difficulties[index % difficulties.length],
        questionType: questionTypes[index % questionTypes.length],
        question: `Em uma ocorrência de ${topic.focus}, qual conduta representa a melhor priorização técnica para o cenário apresentado?`,
        options,
        correctAnswer: correctLetter,
        explanation: `A melhor alternativa preserva a sequência primária, trata ameaças imediatas e mantém reavaliação contínua conforme a seção "${source.title}" do manual ${source.manualTitle}.`,
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
