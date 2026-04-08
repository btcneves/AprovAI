import crypto from 'node:crypto'
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

const MIN_MEANINGFUL_CHARS = 18
const MAX_SUBTHEMES = 4
const MAX_POINTS_PER_SUBTHEME = 3
const STOP_TERMS = new Set(['corpo', 'bombeiros', 'militar', 'santa', 'catarina', 'figura', 'tabela', 'fonte'])

const NOISE_PATTERNS = [
  /corpo\s+de\s+bombeiros/i,
  /^\d{1,4}$/,
  /^(figura|tabela)\s*\d+/i,
  /saiba\s+mais/i,
  /^fonte\s*:/i,
  /^p[aá]gina\s*\d+/i
]

const normalizeForCompare = (text) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const hashText = (text) => crypto.createHash('sha1').update(text).digest('hex')

const tokenSet = (text) => new Set(normalizeForCompare(text).split(' ').filter(Boolean))

const jaccardSimilarity = (a, b) => {
  const sa = tokenSet(a)
  const sb = tokenSet(b)
  if (!sa.size && !sb.size) return 1
  let intersection = 0
  for (const token of sa) {
    if (sb.has(token)) intersection += 1
  }
  return intersection / (sa.size + sb.size - intersection)
}

const isNoiseLine = (line) => {
  const normalized = normalizeForCompare(line)
  if (!normalized) return true
  if (NOISE_PATTERNS.some((pattern) => pattern.test(line))) return true
  if (line.length < MIN_MEANINGFUL_CHARS && !/[:•\-]/.test(line)) return true
  const alpha = (line.match(/[A-Za-zÀ-ÿ]/g) ?? []).length
  if (alpha === 0) return true
  if (alpha / line.length < 0.45) return true
  return false
}

const cleanContent = (raw = '') => {
  const stats = {
    linesRemovedNoise: 0,
    linesRemovedShort: 0,
    linesRemovedBroken: 0,
    linesKept: 0
  }

  const normalized = raw
    .replace(/\r/g, '\n')
    .replace(/(\p{L})-\s*\n\s*(\p{L})/gu, '$1$2')
    .replace(/\b\d{1,4}\s+corpo\s+de\s+bombeiros\s+militar\s+de\s+santa\s+catarina\b/gi, ' ')
    .replace(/\b(figura|tabela)\s*\d+\s*[-:–]*/gi, ' ')
    .replace(/\bfonte\s*:[^.\n]{0,160}/gi, ' ')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')

  const lines = normalized
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)

  const filtered = []
  for (const line of lines) {
    if (NOISE_PATTERNS.some((pattern) => pattern.test(line))) {
      stats.linesRemovedNoise += 1
      continue
    }
    if (line.length < MIN_MEANINGFUL_CHARS && !/[:•\-]/.test(line)) {
      stats.linesRemovedShort += 1
      continue
    }
    if (isNoiseLine(line)) {
      stats.linesRemovedBroken += 1
      continue
    }
    filtered.push(line)
    stats.linesKept += 1
  }

  const merged = []
  for (const line of filtered) {
    const prev = merged.at(-1)
    if (!prev) {
      merged.push(line)
      continue
    }

    const prevEndsSentence = /[.!?:;)]$/.test(prev)
    const currentStartsLower = /^[a-zà-ÿ]/.test(line)
    if (!prevEndsSentence || currentStartsLower) {
      merged[merged.length - 1] = `${prev} ${line}`.replace(/\s+/g, ' ').trim()
    } else {
      merged.push(line)
    }
  }

  return {
    cleanedText: merged.join(' '),
    cleanedLines: merged,
    stats
  }
}

const isValidTitle = (title = '') => {
  if (!title || title.length < 6 || title.length > 90) return false
  if (NOISE_PATTERNS.some((pattern) => pattern.test(title))) return false
  if (/^\d+[.)\-:\s]/.test(title)) return false
  return true
}

const sentenceSplit = (text) =>
  text
    .replace(/[•●▪◦]/g, '; ')
    .split(/(?<=[.!?;:])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= MIN_MEANINGFUL_CHARS)

const extractListItems = (text) => {
  const normalized = text.replace(/[•●▪◦]/g, ';').replace(/\s+/g, ' ')
  return normalized
    .split(/[;]+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 8 && !NOISE_PATTERNS.some((pattern) => pattern.test(part)))
}

const compactSentence = (sentence) => {
  const cleaned = sentence
    .replace(/\b\d+(\.\d+)*\b/g, ' ')
    .replace(/[“”"']/g, '')
    .replace(/\b[A-ZÀ-Ü]{3,}(?:\s+[A-ZÀ-Ü]{3,}){2,}\b/g, ' ')
    .replace(/^\d+(\.\d+)*\s*/g, '')
    .replace(/^[-•]\s*/, '')
    .replace(/\b(este|esta|isso|essa)\s+tipo\s+de\s+/gi, '')
    .replace(/\bse\s+classificam\s+em\s+/gi, 'classificação em ')
    .replace(/\s+/g, ' ')
    .trim()

  const byPeriod = cleaned.split(/[.!?]+/)[0]?.trim() ?? cleaned
  const byClause = byPeriod.split(/[,;]+/)[0]?.trim() ?? byPeriod
  if (byClause.length <= 100) return byClause
  const simplified = byClause
  const cut = simplified.slice(0, 100)
  return `${cut.slice(0, cut.lastIndexOf(' ')).trim()}...`
}

const toStudyPoint = (sentence) => {
  const normalized = normalizeForCompare(sentence)
  if (!normalized) return ''
  const classMatch = normalized.match(/\bclasse\s+([a-z])\b/)
  if (classMatch) return `Classe ${classMatch[1].toUpperCase()}: material e agente extintor compatível.`
  if (normalized.includes('produtos da combustao') && normalized.includes('categor')) {
    return 'Produtos da combustão: gases, chama, calor e fumaça.'
  }
  if (normalized.includes('agentes extintores nao condutores')) {
    return 'Usar agentes extintores não condutores em materiais energizados.'
  }
  if (normalized.includes('compressao direta')) return 'Controle de hemorragia com compressão direta imediata.'
  if (normalized.includes('torniquete')) return 'Torniquete quando sangramento grave não controla com compressão.'
  return sentence
}

const dedupeStrings = (items, counters) => {
  const exactSet = new Set()
  const hashSet = new Set()
  const output = []

  for (const item of items) {
    const normalized = normalizeForCompare(item)
    if (!normalized) continue
    const hash = hashText(normalized)

    if (exactSet.has(normalized)) {
      counters.duplicatesExact += 1
      continue
    }
    if (hashSet.has(hash)) {
      counters.duplicatesHash += 1
      continue
    }

    const similar = output.find((existing) => jaccardSimilarity(existing, item) >= 0.9)
    if (similar) {
      counters.duplicatesSimilar += 1
      continue
    }

    exactSet.add(normalized)
    hashSet.add(hash)
    output.push(item)
  }

  return output
}

const summarizeSection = (section, counters) => {
  const { cleanedText } = cleanContent(section.content ?? '')
  const listItems = dedupeStrings(extractListItems(cleanedText), counters).map((item) => toStudyPoint(compactSentence(item)))
  const sentences = dedupeStrings(sentenceSplit(cleanedText), counters).map((item) => toStudyPoint(compactSentence(item)))
  const points = (listItems.length >= 2 ? listItems : sentences).filter(Boolean).slice(0, MAX_POINTS_PER_SUBTHEME)

  const subtheme = isValidTitle(section.title) ? compactSentence(section.title) : compactSentence(sentences[0] ?? section.title ?? '')

  return {
    section,
    subtheme,
    points,
    cleanText: cleanedText
  }
}

const extractSectionsFromNormalized = async () => {
  const files = await fs.readdir('data/cbmsc/normalized').catch(() => [])
  const sections = []

  for (const file of files.filter((name) => name.endsWith('.json'))) {
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

const extractSectionsFromExistingMaps = async () => {
  const files = await fs.readdir('src/data/mindmaps').catch(() => [])
  const sections = []

  for (const file of files.filter((name) => name.startsWith('cbmsc-') && name.endsWith('.json'))) {
    const map = await readJson(path.join('src/data/mindmaps', file), null)
    if (!map) continue

    const mapId = file.replace('.json', '')
    const sourceBlocks = map.sources ?? []

    sourceBlocks.forEach((source, index) => {
      const fallbackText = [source.excerpt, ...(map.examHighlights ?? [])].filter(Boolean).join('. ')
      if (!fallbackText) return
      sections.push({
        manualId: source.manualId ?? mapId,
        manualTitle: source.manualTitle ?? map.title,
        category: source.category ?? 'fallback-generated',
        sectionId: source.sectionId ?? `${mapId}-fallback-sec-${index + 1}`,
        title: map.title,
        keywords: map.terms ?? [],
        content: fallbackText,
        pageStart: source.pageStart,
        pageEnd: source.pageEnd,
        sourceUrl: source.sourceUrl,
        excerpt: fallbackText.slice(0, 260)
      })
    })
  }

  return sections
}

const scoreSection = (section, topicKeywords) => {
  const haystack = `${section.title} ${(section.keywords ?? []).join(' ')} ${section.content ?? ''}`.toLowerCase()
  return topicKeywords.reduce((score, keyword) => score + (haystack.includes(keyword.toLowerCase()) ? 2 : 0), 0)
}

const bestSections = (sections, topicKeywords, count = 10) =>
  sections
    .map((section) => ({ section, score: scoreSection(section, topicKeywords) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((entry) => entry.section)

const validateAndPruneNodes = (nodes, counters) => {
  const seen = new Set()

  const isValidLabel = (label) => {
    if (!label || label.length < 6) return false
    if (NOISE_PATTERNS.some((pattern) => pattern.test(label))) return false
    if (/^\d+$/.test(label.trim())) return false
    return true
  }

  const validNodes = []
  for (const node of nodes) {
    if (!isValidLabel(node.label)) {
      counters.qualityPruned += 1
      continue
    }

    const normalizedLabel = normalizeForCompare(node.label)
    if (seen.has(normalizedLabel)) {
      counters.qualityPruned += 1
      continue
    }
    seen.add(normalizedLabel)

    const children = (node.children ?? []).filter((child) => {
      if (!isValidLabel(child.label)) {
        counters.qualityPruned += 1
        return false
      }
      const normalizedChild = normalizeForCompare(child.label)
      if (seen.has(normalizedChild)) {
        counters.qualityPruned += 1
        return false
      }
      seen.add(normalizedChild)
      return true
    })

    if (children.length === 0) {
      counters.qualityPruned += 1
      continue
    }

    validNodes.push({ ...node, children })
  }

  return validNodes
}

const buildMindMap = (topic, matches, counters) => {
  const id = `cbmsc-${slugify(topic.title)}`

  const synthesized = matches
    .map((section) => summarizeSection(section, counters))
    .filter((entry) => entry.subtheme && entry.points.length > 0)

  const subthemes = dedupeStrings(
    synthesized.map((entry) => `${entry.subtheme}||${entry.points.join(' | ')}`),
    counters
  )
    .map((entry) => {
      const [subtheme, ...rest] = entry.split('||')
      const points = rest.join('||').split(' | ').map((point) => point.trim()).filter(Boolean)
      return { subtheme, points }
    })
    .slice(0, MAX_SUBTHEMES)

  let nodes = subthemes.map((item, index) => ({
    id: `${id}-n${index + 1}`,
    label: item.subtheme,
    type: 'main',
    children: item.points.slice(0, MAX_POINTS_PER_SUBTHEME).map((point, pointIndex) => ({
      id: `${id}-n${index + 1}-${String.fromCharCode(97 + pointIndex)}`,
      label: point,
      type: 'child'
    }))
  }))

  nodes = validateAndPruneNodes(nodes, counters)

  if (nodes.length === 0) {
    nodes = [{
      id: `${id}-n1`,
      label: topic.subtheme,
      type: 'main',
      children: topic.keywords.slice(0, 3).map((keyword, index) => ({
        id: `${id}-n1-${String.fromCharCode(97 + index)}`,
        label: `Foco: ${keyword}`,
        type: 'child'
      }))
    }]
  }

  const highlights = dedupeStrings(nodes.flatMap((node) => (node.children ?? []).map((child) => child.label)), counters).slice(0, 6)

  const uniqueSources = dedupeStrings(matches.map((item) => `${item.manualId}::${item.sectionId}`), counters)
    .map((compound) => {
      const [manualId, sectionId] = compound.split('::')
      return matches.find((item) => item.manualId === manualId && item.sectionId === sectionId)
    })
    .filter(Boolean)
    .slice(0, 8)

  return {
    id,
    title: topic.title,
    summary: `${topic.theme}: ${topic.subtheme}. Revisão em tópicos curtos para estudo rápido.`,
    nodes,
    examHighlights: highlights,
    commonMistakes: [`Confundir conceitos de ${topic.title.toLowerCase()}.`, 'Ignorar sequência operacional prevista em manual.'],
    terms: dedupeStrings([...topic.keywords, ...matches.flatMap((section) => section.keywords ?? [])], counters)
      .filter((term) => term.length > 2 && !STOP_TERMS.has(normalizeForCompare(term)) && !NOISE_PATTERNS.some((pattern) => pattern.test(term)))
      .slice(0, 20),
    sources: uniqueSources.map((section) => ({
      manualId: section.manualId,
      manualTitle: section.manualTitle,
      sectionId: section.sectionId,
      sourceUrl: section.sourceUrl,
      category: section.category,
      excerpt: cleanContent(section.excerpt ?? section.content ?? '').cleanedText.slice(0, 220),
      pageStart: section.pageStart,
      pageEnd: section.pageEnd
    }))
  }
}

const main = async () => {
  await fs.mkdir('src/data/mindmaps', { recursive: true })
  await fs.mkdir('data/cbmsc/logs', { recursive: true })

  const counters = {
    duplicatesExact: 0,
    duplicatesSimilar: 0,
    duplicatesHash: 0,
    qualityPruned: 0
  }

  const beforeSampleMap = await readJson('src/data/mindmaps/cbmsc-extintores.json', null)
  const beforeSample = beforeSampleMap?.nodes?.[0]?.children?.[0]?.label ?? null

  let sections = await extractSectionsFromNormalized()
  let sourceMode = 'normalized'

  if (sections.length === 0) {
    sections = await extractSectionsFromExistingMaps()
    sourceMode = 'fallback-existing-mindmaps'
  }

  const cleaningStats = sections.reduce(
    (acc, section) => {
      const cleaned = cleanContent(section.content ?? '')
      acc.linesRemovedNoise += cleaned.stats.linesRemovedNoise
      acc.linesRemovedShort += cleaned.stats.linesRemovedShort
      acc.linesRemovedBroken += cleaned.stats.linesRemovedBroken
      acc.linesKept += cleaned.stats.linesKept
      return acc
    },
    { linesRemovedNoise: 0, linesRemovedShort: 0, linesRemovedBroken: 0, linesKept: 0 }
  )

  const maps = TOPICS.map((topic) => buildMindMap(topic, bestSections(sections, topic.keywords, 14), counters))

  for (const map of maps) {
    await fs.writeFile(path.join('src/data/mindmaps', `${map.id}.json`), `${JSON.stringify(map, null, 2)}\n`, 'utf-8')
  }

  await writeJson('src/data/mindmaps/generated-index.json', {
    generatedAt: new Date().toISOString(),
    sourceMode,
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
    source: sourceMode,
    manualCount: new Set(sections.map((section) => section.manualId)).size,
    sectionCount: sections.length,
    themes: knowledgeThemes
  })

  const afterSampleMap = await readJson('src/data/mindmaps/cbmsc-extintores.json', null)
  const afterSample = afterSampleMap?.nodes?.[0]?.children?.[0]?.label ?? null

  await writeJson('data/cbmsc/logs/mindmap-quality-report.json', {
    generatedAt: new Date().toISOString(),
    sourceMode,
    totals: {
      sectionsProcessed: sections.length,
      mapsGenerated: maps.length,
      ...cleaningStats,
      ...counters
    },
    beforeAfterSample: {
      topic: 'Extintores',
      before: beforeSample,
      after: afterSample
    },
    finalMapExample: afterSampleMap
  })

  console.log(`[cbmsc:generate-mindmaps] ${maps.length} mapa(s) oficial(is) gerado(s) | fonte: ${sourceMode}.`)
}

main().catch((error) => {
  console.error('[cbmsc:generate-mindmaps] Erro fatal:', error)
  process.exitCode = 1
})
