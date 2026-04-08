import {
  LIBRARY_URL,
  ROOT_URL,
  ensureCbmscDirs,
  extractAnchors,
  extensionFromUrl,
  fetchText,
  readJson,
  resolveUrl,
  slugify,
  stripTags,
  writeJson
} from './utils.mjs'

const isCategoryLink = (href) => /\/manuais-cbmsc\/category\//i.test(href)
const isDownloadQueryLink = (href) => /[?&]download=\d+:[^&#]+/i.test(href)
const isDirectFileLink = (href) => /\.(pdf|docx?|xlsx?|pptx?)($|\?|#)/i.test(href)
const isFileCandidateLink = (href) =>
  isDownloadQueryLink(href) ||
  isDirectFileLink(href) ||
  /option=com_phocadownload&view=file/i.test(href) ||
  /\/manuais-cbmsc\/file\//i.test(href)

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

const extractDownloadSlug = (href) => {
  const matched = href.match(/[?&]download=([0-9]+:[^&#]+)/i)
  return matched?.[1] ?? null
}

const parseManuals = (html, category) => {
  const manuals = []
  const seen = new Set()

  const fileBoxes = html.matchAll(/<div\s+class=["'][^"']*pd-filebox[^"']*["'][^>]*>([\s\S]*?)<div\s+class=["']pd-cb["']/gi)
  for (const box of fileBoxes) {
    const block = box[1]
    const titleMatch = block.match(/<div\s+class=["'][^"']*pd-title[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)
    const title = titleMatch ? stripTags(titleMatch[1]) : 'Documento sem título'
    const anchors = extractAnchors(block)
    const fileAnchor = anchors.find((anchor) => anchor.href && isFileCandidateLink(anchor.href))
    if (!fileAnchor) continue

    const href = resolveUrl(fileAnchor.href)
    const dedupeKey = `${category.url}::${href}`
    if (seen.has(dedupeKey)) continue
    seen.add(dedupeKey)

    manuals.push({
      id: slugify(`${category.title}-${title}`),
      title,
      category: category.title,
      sourcePage: category.url,
      detailPageUrl: isDownloadQueryLink(href)
        ? `${LIBRARY_URL.replace(/\/$/, '')}/file/${extractDownloadSlug(href)?.split(':')?.[0] ?? ''}`
        : href,
      initialUrl: href,
      extension: extensionFromUrl(href).replace('.', ''),
      collectedAt: new Date().toISOString(),
      status: 'pending'
    })
  }

  // fallback tolerante para HTML inconsistente
  if (!manuals.length) {
    const anchors = extractAnchors(html)
    for (const anchor of anchors) {
      if (!anchor.href) continue
      const href = resolveUrl(anchor.href)
      if (!isFileCandidateLink(href)) continue
      const title = anchor.text || href.split('/').pop() || 'Documento sem título'
      const dedupeKey = `${category.url}::${href}`
      if (seen.has(dedupeKey)) continue
      seen.add(dedupeKey)

      manuals.push({
        id: slugify(`${category.title}-${title}`),
        title,
        category: category.title,
        sourcePage: category.url,
        detailPageUrl: href,
        initialUrl: href,
        extension: extensionFromUrl(href).replace('.', ''),
        collectedAt: new Date().toISOString(),
        status: 'pending'
      })
    }
  }

  return manuals
}

const resolveFileUrlFromDetailPage = async (manual, logs) => {
  const candidates = [manual.detailPageUrl, manual.initialUrl].filter(Boolean)
  const already = new Set()

  for (const candidate of candidates) {
    if (!candidate || already.has(candidate)) continue
    already.add(candidate)

    if (isDownloadQueryLink(candidate) || isDirectFileLink(candidate)) {
      return { fileUrl: candidate, resolution: 'direct_from_index' }
    }

    try {
      const detailHtml = await fetchText(candidate)
      const anchors = extractAnchors(detailHtml)

      const scored = anchors
        .filter((anchor) => anchor.href)
        .map((anchor) => {
          const href = resolveUrl(anchor.href)
          const text = anchor.text.toLowerCase()
          const samePortal = href.startsWith(ROOT_URL)
          const isStrongDownload = isDownloadQueryLink(href) || isDirectFileLink(href)
          const isPortalDownloadButton = samePortal && /download|baixar/.test(text) && /manuais-cbmsc|com_phocadownload/i.test(href)

          const score =
            (isStrongDownload ? 5 : 0) +
            (isPortalDownloadButton ? 3 : 0) +
            (samePortal ? 1 : -2)

          return { href, score, keep: isStrongDownload || isPortalDownloadButton }
        })
        .filter((item) => item.keep && item.score > 0)
        .sort((a, b) => b.score - a.score)

      if (scored.length) {
        return { fileUrl: scored[0].href, resolution: 'detail_page' }
      }

      const heuristicMatch = detailHtml.match(/(?:href|src)=(['"])([^'"]+\.(?:pdf|docx?|xlsx?|pptx?)(?:\?[^'"]*)?)\1/i)
      if (heuristicMatch?.[2]) {
        return { fileUrl: resolveUrl(heuristicMatch[2]), resolution: 'detail_heuristic' }
      }

      logs.push({
        step: 'detail-page',
        level: 'warn',
        manualId: manual.id,
        detailUrl: candidate,
        message: 'Página de detalhe sem link de download detectável.'
      })
    } catch (error) {
      logs.push({
        step: 'detail-page',
        level: 'warn',
        manualId: manual.id,
        detailUrl: candidate,
        message: error.message
      })
    }
  }

  return { fileUrl: '', resolution: 'not_found' }
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

  const resolved = []
  for (const manual of collected) {
    const detail = await resolveFileUrlFromDetailPage(manual, logs)
    resolved.push({
      ...manual,
      fileUrl: detail.fileUrl,
      extension: extensionFromUrl(detail.fileUrl || manual.initialUrl).replace('.', ''),
      status: detail.fileUrl ? 'available' : 'unavailable',
      resolution: detail.resolution
    })
  }

  const deduped = Array.from(new Map(resolved.map((item) => [`${item.sourcePage}::${item.fileUrl || item.id}`, item])).values())
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
    categoriesSeen: categories.length,
    manualsSeen: collected.length,
    available: finalIndex.filter((item) => item.status === 'available').length,
    onlineCollected: deduped.length,
    finalCount: finalIndex.length,
    usedFallback: !deduped.length,
    logs
  })

  console.log(
    `[cbmsc:index] Concluído com ${categories.length} categorias, ${collected.length} itens e ${finalIndex.filter((item) => item.status === 'available').length} download(s) disponível(is).`
  )
}

main().catch((error) => {
  console.error('[cbmsc:index] Erro fatal:', error)
  process.exitCode = 1
})
