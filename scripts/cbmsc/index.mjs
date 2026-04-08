import { LIBRARY_URL, ensureCbmscDirs, extractAnchors, extensionFromUrl, fetchText, readJson, resolveUrl, slugify, writeJson } from './utils.mjs'

const isCategoryLink = (href) => /\/manuais-cbmsc\/category\//i.test(href)
const isFileLink = (href) => /\.(pdf|docx?|xlsx?|pptx?)($|\?)/i.test(href)

const parseCategories = (html) => {
  const anchors = extractAnchors(html)
  const categories = []
  const seen = new Set()

  for (const anchor of anchors) {
    if (!anchor.href || !isCategoryLink(anchor.href)) continue
    const href = resolveUrl(anchor.href)
    const title = anchor.text.replace(/^categoria\s*:?/i, '').trim()
    if (!title || seen.has(href)) continue
    seen.add(href)
    categories.push({ title, url: href })
  }

  return categories
}

const parseManuals = (html, category) => {
  const anchors = extractAnchors(html)
  const manuals = []
  const seen = new Set()

  for (const anchor of anchors) {
    if (!anchor.href) continue
    const href = resolveUrl(anchor.href)
    if (!isFileLink(href)) continue
    const title = anchor.text || href.split('/').pop() || 'Documento sem título'
    const dedupeKey = `${category.url}::${href}`
    if (seen.has(dedupeKey)) continue
    seen.add(dedupeKey)

    manuals.push({
      id: slugify(`${category.title}-${title}`),
      title,
      category: category.title,
      sourcePage: category.url,
      fileUrl: href,
      extension: extensionFromUrl(href).replace('.', ''),
      collectedAt: new Date().toISOString(),
      status: 'active'
    })
  }

  return manuals
}

const FALLBACK_MANUALS = [
  {
    id: 'combate-incendio-estrutural-manual',
    title: 'Manual de Combate a Incêndio Estrutural (fallback)',
    category: 'Combate a Incêndio Estrutural',
    sourcePage: LIBRARY_URL,
    fileUrl: '',
    extension: 'pdf',
    collectedAt: new Date().toISOString(),
    status: 'unavailable'
  },
  {
    id: 'atendimento-basico-emergencias-manual',
    title: 'Manual de Atendimento Básico a Emergências (fallback)',
    category: 'Atendimento Pré-Hospitalar',
    sourcePage: LIBRARY_URL,
    fileUrl: '',
    extension: 'pdf',
    collectedAt: new Date().toISOString(),
    status: 'unavailable'
  }
]

const main = async () => {
  await ensureCbmscDirs()
  const logs = []

  console.log(`[cbmsc:index] Coletando categorias em ${LIBRARY_URL}`)

  let categories = []
  try {
    const libraryHtml = await fetchText(LIBRARY_URL)
    categories = parseCategories(libraryHtml)
  } catch (error) {
    logs.push({ step: 'library', level: 'error', message: error.message })
  }

  const collected = []

  for (const category of categories) {
    try {
      console.log(`[cbmsc:index] Lendo categoria: ${category.title}`)
      const categoryHtml = await fetchText(category.url)
      collected.push(...parseManuals(categoryHtml, category))
    } catch (error) {
      logs.push({ step: 'category', category: category.title, url: category.url, level: 'warn', message: error.message })
    }
  }

  const deduped = Array.from(new Map(collected.map((item) => [`${item.sourcePage}::${item.fileUrl}`, item])).values())
  const previous = await readJson('data/cbmsc/manual_index.json', [])

  const finalIndex = deduped.length ? deduped : previous.length ? previous : FALLBACK_MANUALS
  if (!deduped.length) {
    logs.push({
      step: 'fallback',
      level: 'warn',
      message: 'Coleta online indisponível ou sem resultados. Mantendo índice anterior/fallback para não interromper pipeline.'
    })
  }

  await writeJson('data/cbmsc/manual_index.json', finalIndex)
  await writeJson('data/cbmsc/logs/index-log.json', {
    generatedAt: new Date().toISOString(),
    onlineCollected: deduped.length,
    finalCount: finalIndex.length,
    usedFallback: !deduped.length,
    logs
  })

  console.log(`[cbmsc:index] Concluído com ${categories.length} categorias e ${finalIndex.length} documentos no índice final.`)
}

main().catch((error) => {
  console.error('[cbmsc:index] Erro fatal:', error)
  process.exitCode = 1
})
