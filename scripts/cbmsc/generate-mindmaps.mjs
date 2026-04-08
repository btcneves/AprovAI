import fs from 'node:fs/promises'
import path from 'node:path'
import { readJson, writeJson } from './utils.mjs'

const slugify = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const TOPICS = [
  { title: 'Classes de incêndio', theme: 'Incêndio', subtheme: 'Classificação e agentes extintores', keywords: ['classe a', 'classe b', 'classe c', 'classe d', 'classe k', 'agente extintor'], dependencies: [] },
  { title: 'Métodos de extinção', theme: 'Incêndio', subtheme: 'Resfriamento, abafamento e isolamento', keywords: ['resfriamento', 'abafamento', 'isolamento', 'reacao em cadeia'], dependencies: ['Classes de incêndio'] },
  { title: 'Comportamento do fogo', theme: 'Incêndio', subtheme: 'Fenômenos e leitura de fumaça', keywords: ['flashover', 'backdraft', 'fumaça', 'convecção', 'radiação'], dependencies: ['Métodos de extinção'] },
  { title: 'Extintores', theme: 'Incêndio', subtheme: 'Tipos, uso e limitações', keywords: ['extintor', 'pqs', 'co2', 'espuma', 'água pressurizada'], dependencies: ['Classes de incêndio'] },
  { title: 'APH / ABCDE', theme: 'APH', subtheme: 'Avaliação primária', keywords: ['abcde', 'airway', 'breathing', 'circulation', 'exposição'], dependencies: [] },
  { title: 'RCP', theme: 'APH', subtheme: 'Parada cardiorrespiratória', keywords: ['rcp', 'compressão', 'desfibrilação', 'dea', 'cadeia de sobrevivência'], dependencies: ['APH / ABCDE'] },
  { title: 'Trauma', theme: 'APH', subtheme: 'Manejo do trauma e transporte', keywords: ['trauma', 'imobilização', 'cinemática', 'coluna', 'transporte'], dependencies: ['APH / ABCDE'] },
  { title: 'Hemorragias', theme: 'APH', subtheme: 'Controle de sangramento', keywords: ['hemorragia', 'torniquete', 'compressão direta', 'choque hipovolêmico'], dependencies: ['APH / ABCDE'] },
  { title: 'Produtos perigosos', theme: 'Produtos Perigosos', subtheme: 'Reconhecimento e isolamento', keywords: ['onu', 'produto perigoso', 'zona quente', 'isolamento', 'epi químico'], dependencies: [] },
  { title: 'Salvamento em altura', theme: 'Salvamento', subtheme: 'Técnicas verticais', keywords: ['altura', 'corda', 'ancoragem', 'rapel', 'ascensão'], dependencies: ['Segurança operacional'] },
  { title: 'Salvamento aquático', theme: 'Salvamento', subtheme: 'Guarda-vidas e abordagem', keywords: ['salvamento aquático', 'afogamento', 'praia', 'corrente de retorno'], dependencies: ['Segurança operacional'] },
  { title: 'Resgate veicular', theme: 'Salvamento', subtheme: 'Desencarceramento e estabilização', keywords: ['resgate veicular', 'desencarceramento', 'estabilização', 'ferramenta hidráulica'], dependencies: ['Segurança operacional'] },
  { title: 'Busca terrestre', theme: 'Salvamento', subtheme: 'Busca, orientação e comando', keywords: ['busca terrestre', 'varredura', 'setorização', 'ponto de encontro'], dependencies: ['Segurança operacional'] },
  { title: 'Segurança operacional', theme: 'Gestão Operacional', subtheme: 'Gestão de risco e comando', keywords: ['segurança operacional', 'comando de incidentes', 'par', 'zona de risco'], dependencies: [] },
  { title: 'Normas / legislação / atividade técnica', theme: 'Normas e Legislação', subtheme: 'Base normativa CBMSC', keywords: ['ig', 'norma', 'legislação', 'atividade técnica', 'responsabilidade'], dependencies: [] }
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
        category: doc.category,
        sectionId: section.id,
        title: section.title,
        keywords: section.keywords ?? [],
        content: section.content ?? '',
        pageStart: section.pageStart,
        pageEnd: section.pageEnd,
        sourceUrl: doc.fileUrl || doc.sourceUrl,
        excerpt: (section.content ?? '').slice(0, 260)
      })
    }
  }

  return sections
}

const scoreSection = (section, topicKeywords) => {
  const haystack = `${section.title} ${(section.keywords ?? []).join(' ')} ${(section.content ?? '').slice(0, 1500)}`.toLowerCase()
  return topicKeywords.reduce((score, keyword) => score + (haystack.includes(keyword.toLowerCase()) ? 2 : 0), 0)
}

const bestSections = (sections, topicKeywords, count = 8) =>
  sections
    .map((section) => ({ section, score: scoreSection(section, topicKeywords) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((entry) => entry.section)

const buildMindMap = (topic, matches) => {
  const id = `cbmsc-${slugify(topic.title)}`
  const top = matches.slice(0, 4)

  const nodes = top.map((section, index) => ({
    id: `${id}-n${index + 1}`,
    label: section.title.slice(0, 90),
    type: 'main',
    children: [
      { id: `${id}-n${index + 1}-a`, label: section.excerpt.slice(0, 110), type: 'child' },
      { id: `${id}-n${index + 1}-b`, label: `Páginas ${section.pageStart ?? '?'}-${section.pageEnd ?? '?'}`, type: 'child' }
    ]
  }))

  return {
    id,
    title: topic.title,
    summary: `Resumo derivado de seções oficiais do CBMSC sobre ${topic.subtheme.toLowerCase()}.`,
    nodes,
    examHighlights: top.map((section) => section.excerpt.slice(0, 140)),
    commonMistakes: [`Confundir conceitos centrais de ${topic.title.toLowerCase()}.`, 'Responder por prática informal sem aderência ao manual oficial.'],
    terms: Array.from(new Set([...topic.keywords, ...top.flatMap((section) => section.keywords.slice(0, 6))])).slice(0, 22),
    sources: top.map((section) => ({
      manualId: section.manualId,
      manualTitle: section.manualTitle,
      sectionId: section.sectionId,
      sourceUrl: section.sourceUrl,
      category: section.category,
      excerpt: section.excerpt,
      pageStart: section.pageStart,
      pageEnd: section.pageEnd
    }))
  }
}

const main = async () => {
  await fs.mkdir('src/data/mindmaps', { recursive: true })

  const sections = await extractSections()
  const maps = TOPICS.map((topic) => buildMindMap(topic, bestSections(sections, topic.keywords, 10)))

  for (const map of maps) {
    await fs.writeFile(path.join('src/data/mindmaps', `${map.id}.json`), `${JSON.stringify(map, null, 2)}\n`, 'utf-8')
  }

  await writeJson('src/data/mindmaps/generated-index.json', {
    generatedAt: new Date().toISOString(),
    maps: maps.map((map) => `src/data/mindmaps/${map.id}.json`),
    total: maps.length
  })

  const knowledgeThemes = TOPICS.map((topic) => {
    const matches = bestSections(sections, topic.keywords, 14)
    return {
      theme: topic.theme,
      subtheme: topic.subtheme,
      priority: ['Classes de incêndio', 'APH / ABCDE', 'RCP', 'Trauma'].includes(topic.title) ? 'alta' : 'media',
      manualIds: Array.from(new Set(matches.map((item) => item.manualId))).slice(0, 12),
      sectionIds: matches.map((item) => item.sectionId),
      dependencies: topic.dependencies,
      keywords: topic.keywords
    }
  })

  await writeJson('data/cbmsc/knowledge_map.json', {
    generatedAt: new Date().toISOString(),
    source: 'manuals-parsed',
    manualCount: new Set(sections.map((section) => section.manualId)).size,
    sectionCount: sections.length,
    themes: knowledgeThemes
  })

  console.log(`[cbmsc:generate-mindmaps] ${maps.length} mapa(s) oficial(is) gerado(s).`)
}

main().catch((error) => {
  console.error('[cbmsc:generate-mindmaps] Erro fatal:', error)
  process.exitCode = 1
})
