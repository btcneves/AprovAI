import { LIBRARY_URL, ensureCbmscDirs, extractAnchors, extensionFromUrl, readJson, resolveUrl, slugify, writeJson } from './utils.mjs'

const isCategoryLink = (href) => /\/manuais-cbmsc\/category\//i.test(href)
const isFileLink = (href) => /\.(pdf|docx?|xlsx?|pptx?)($|\?)/i.test(href)

const fetchHtml = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Falha ao carregar ${url} (status ${response.status})`)
  }
  return response.text()
}

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

const main = async () => {
  await ensureCbmscDirs()
  console.log(`[cbmsc:index] Coletando categorias em ${LIBRARY_URL}`)

  const libraryHtml = await fetchHtml(LIBRARY_URL)
  const categories = parseCategories(libraryHtml)

  if (!categories.length) {
    console.warn('[cbmsc:index] Nenhuma categoria encontrada automaticamente. Mantendo índice anterior.')
    const previous = await readJson('data/cbmsc/manual_index.json', [])
    await writeJson('data/cbmsc/manual_index.json', previous)
    return
  }

  const collected = []

  for (const category of categories) {
    console.log(`[cbmsc:index] Lendo categoria: ${category.title}`)
    try {
      const categoryHtml = await fetchHtml(category.url)
      const manuals = parseManuals(categoryHtml, category)
      collected.push(...manuals)
    } catch (error) {
      console.warn(`[cbmsc:index] Falha na categoria ${category.url}: ${error.message}`)
    }
  }

  const deduped = Array.from(new Map(collected.map((item) => [`${item.sourcePage}::${item.fileUrl}`, item])).values())
  await writeJson('data/cbmsc/manual_index.json', deduped)

  console.log(`[cbmsc:index] Concluído com ${categories.length} categorias e ${deduped.length} documentos indexados.`)
}

main().catch((error) => {
  console.error('[cbmsc:index] Erro fatal:', error)
  process.exitCode = 1
})
