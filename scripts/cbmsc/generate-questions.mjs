import fs from 'node:fs/promises'
import { readJson, writeJson } from './utils.mjs'

const themes = [
  {
    theme: 'Incêndio',
    subtheme: 'Classes de incêndio',
    stems: [
      'Na análise de uma ocorrência com combustível sólido comum, a classe correta do incêndio é',
      'A classificação das classes de incêndio tem como objetivo principal',
      'Em incêndio envolvendo equipamento energizado, a classe indicada inicialmente é',
      'No estudo das classes, a classe K está associada a',
      'A escolha do agente extintor deve ser orientada principalmente por'
    ]
  },
  {
    theme: 'Incêndio',
    subtheme: 'Métodos de extinção',
    stems: [
      'O método de abafamento atua por',
      'A extinção por resfriamento busca',
      'No isolamento do combustível, a guarnição deve priorizar',
      'A quebra da reação em cadeia é típica de agentes',
      'A escolha entre resfriar e abafar depende de'
    ]
  },
  {
    theme: 'Incêndio',
    subtheme: 'Comportamento do fogo',
    stems: [
      'O flashover pode ser definido como',
      'A leitura da fumaça auxilia na identificação de',
      'No backdraft, o risco aumenta quando ocorre',
      'A transferência de calor por convecção ocorre por',
      'Em ambiente confinado, abrir ventilação sem coordenação tende a'
    ]
  },
  {
    theme: 'APH',
    subtheme: 'ABCDE',
    stems: [
      'No protocolo ABCDE, a avaliação da letra A prioriza',
      'Na letra C do ABCDE, em sangramento grave, a medida imediata é',
      'A letra D da avaliação primária está relacionada a',
      'A etapa E do ABCDE inclui',
      'Ao identificar falha ventilatória na letra B, a prioridade é'
    ]
  },
  {
    theme: 'APH',
    subtheme: 'RCP',
    stems: [
      'Na RCP de adulto sem via aérea avançada, a relação compressão/ventilação é',
      'Uma característica de RCP de alta qualidade é',
      'Durante a RCP, as interrupções das compressões devem ser',
      'A desfibrilação precoce é importante porque',
      'Em PCR presenciada, após confirmar ausência de responsividade, a conduta é'
    ]
  },
  {
    theme: 'Produtos perigosos',
    subtheme: 'Reconhecimento inicial',
    stems: [
      'No atendimento a produto perigoso, a primeira ação é',
      'O número ONU no painel serve para',
      'A zona quente deve ser acessada apenas por',
      'A direção do vento é relevante para',
      'A ação inicial diante de vazamento químico desconhecido é'
    ]
  },
  {
    theme: 'Salvamento',
    subtheme: 'Busca e resgate',
    stems: [
      'Na busca primária em estrutura incendiada, o foco é',
      'A marcação de áreas varridas tem como finalidade',
      'Em ambiente IDLH, a equipe deve operar',
      'No resgate de vítima inconsciente, deve-se priorizar',
      'A prestação de contas (PAR) contribui para'
    ]
  },
  {
    theme: 'Normas e legislação',
    subtheme: 'Base normativa CBMSC',
    stems: [
      'A IG 10-03-BM é relevante para',
      'No contexto de concurso CBMSC, o CTB é cobrado para',
      'Atuação fora do escopo normativo gera',
      'A cadeia de comando em ocorrência visa',
      'No estudo da legislação básica, a prioridade do candidato deve ser'
    ]
  },
  {
    theme: 'Incêndio',
    subtheme: 'Equipamentos e segurança',
    stems: [
      'Antes de ingressar em ambiente sinistrado, é obrigatório',
      'A checagem de EPR antes da entrada busca',
      'Sinal de colapso estrutural exige',
      'Comunicação por rádio durante progressão tem objetivo de',
      'Uso correto de EPI no combate estrutural é'
    ]
  },
  {
    theme: 'APH',
    subtheme: 'Trauma e transporte',
    stems: [
      'No trauma, a imobilização adequada serve para',
      'Durante transporte de vítima, a monitorização deve ser',
      'Na suspeita de trauma raquimedular, a conduta inicial é',
      'A extração rápida sem avaliação é indicada quando',
      'No atendimento inicial, a segurança da cena protege'
    ]
  }
]

const options = [
  'A) Conduta alinhada ao protocolo e risco da cena.',
  'B) Decisão aleatória para ganhar tempo operacional.',
  'C) Medida sem respaldo técnico-normativo.',
  'D) Procedimento focado apenas em rapidez, sem segurança.',
  'E) Ação baseada em improviso, sem avaliação técnica.'
]


const difficulties = ['easy', 'medium', 'hard']
const questionTypes = ['conceptual', 'application', 'scenario', 'procedure', 'definition', 'comparison', 'exception']

const main = async () => {
  await fs.mkdir('src/data/questions', { recursive: true })
  const manualIndex = await readJson('data/cbmsc/manual_index.json', [])

  let counter = 1
  const questions = themes.flatMap((topic, themeIndex) =>
    topic.stems.map((stem, stemIndex) => {
      const id = `cbmsc-q-${String(counter++).padStart(4, '0')}`
      const correctAnswer = 'A'
      const difficulty = difficulties[(themeIndex + stemIndex) % difficulties.length]
      const questionType = questionTypes[(themeIndex + stemIndex) % questionTypes.length]
      const sourceManual = manualIndex[(themeIndex + stemIndex) % Math.max(manualIndex.length, 1)]

      return {
        id,
        theme: topic.theme,
        subtheme: topic.subtheme,
        difficulty,
        question: `${stem}?`,
        options,
        correctAnswer,
        explanation: `A conduta correta exige priorização de segurança, técnica e sequência operacional em ${topic.subtheme.toLowerCase()}. Em prova, procure o verbo nuclear do protocolo e elimine alternativas sem amparo em manual.`,
        sourceRefs: [
          {
            manualId: sourceManual?.id,
            sectionId: `${sourceManual?.id ?? 'manual'}-sec-${stemIndex + 1}`,
            sourceUrl: sourceManual?.fileUrl || sourceManual?.sourcePage || 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc',
            excerpt: `${topic.theme} - ${topic.subtheme} - referência para item ${stemIndex + 1}.`
          }
        ],
        tags: [topic.theme.toLowerCase(), topic.subtheme.toLowerCase(), `bloco-${themeIndex + 1}`],
        questionType,
        usedCount: 0,
        isActive: true
      }
    })
  )

  const ts = `import type { QuestionDocument } from '@/types/cbmsc'\n\nexport const cbmscQuestions: QuestionDocument[] = ${JSON.stringify(questions, null, 2)}\n`
  await fs.writeFile('src/data/questions/cbmscQuestions.ts', ts, 'utf-8')

  await writeJson('src/data/questions/generated-index.json', {
    generatedAt: new Date().toISOString(),
    banks: ['src/data/questions/cbmscQuestions.ts'],
    questionCount: questions.length
  })

  console.log(`[cbmsc:generate-questions] Banco atualizado com ${questions.length} questões.`)
}

main().catch((error) => {
  console.error('[cbmsc:generate-questions] Erro fatal:', error)
  process.exitCode = 1
})
