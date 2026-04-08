import fs from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import { ensureCbmscDirs, readJson, slugify, writeJson } from './utils.mjs'

const MIN_TEXT_PER_PAGE = 80

const normalizeText = (value) => value.replace(/\s+/g, ' ').trim()

const splitIntoBlocks = (text) =>
  text
    .split(/(?<=[\.:;])\s{2,}|(?<=[\.!?])\s+(?=[A-ZÁÀÃÂÉÊÍÓÔÕÚÇ0-9])/g)
    .map((item) => normalizeText(item))
    .filter((item) => item.length >= 35)

const headingPatterns = [/^(cap[íi]tulo|se[cç][aã]o|m[óo]dulo|unidade|anexo)\b/i, /^\d+(\.\d+){0,3}\s+[A-ZÁÀÃÂÉÊÍÓÔÕÚÇ]/, /^[A-ZÁÀÃÂÉÊÍÓÔÕÚÇ\s-]{8,}$/]

const looksLikeHeading = (text) => {
  const sample = text.slice(0, 120).trim()
  return headingPatterns.some((pattern) => pattern.test(sample))
}

const extractKeywords = (text) => {
  const stop = new Set(['para', 'como', 'quando', 'sobre', 'entre', 'pelos', 'pelas', 'com', 'sem', 'mais', 'menos', 'depois', 'antes'])
  return Array.from(
    new Set(
      text
        .toLowerCase()
        .split(/[^\p{L}\p{N}]+/u)
        .filter((token) => token.length >= 4 && !stop.has(token))
    )
  ).slice(0, 18)
}

const stableSectionId = (manualId, title, pageStart, idx) => {
  const digest = createHash('sha1').update(`${manualId}|${title.toLowerCase()}|${pageStart}|${idx}`).digest('hex').slice(0, 8)
  return `${manualId}-sec-${digest}`
}

const buildSectionsFromPages = (pages, manualId) => {
  const sections = []
  let current = null

  const closeCurrent = (idx) => {
    if (!current) return
    const normalized = normalizeText(current.content)
    if (normalized.length < 120) return

    const section = {
      ...current,
      id: stableSectionId(manualId, current.title, current.pageStart, idx),
      content: normalized,
      keywords: extractKeywords(`${current.title} ${normalized}`),
      sourceRefs: []
    }

    sections.push(section)
    current = null
  }

  for (const page of pages) {
    const blocks = splitIntoBlocks(page.text)
    for (const block of blocks) {
      const titleCandidate = looksLikeHeading(block)
      if (!current) {
        current = {
          title: titleCandidate ? block.slice(0, 140) : `Trecho técnico ${sections.length + 1}`,
          content: '',
          pageStart: page.pageNumber,
          pageEnd: page.pageNumber,
          purpose: ['theory', 'review', 'mindmap', 'question-generation', 'answer-explanation']
        }
      } else if (titleCandidate && current.content.length > 280) {
        closeCurrent(sections.length + 1)
        current = {
          title: block.slice(0, 140),
          content: '',
          pageStart: page.pageNumber,
          pageEnd: page.pageNumber,
          purpose: ['theory', 'review', 'mindmap', 'question-generation', 'answer-explanation']
        }
      }

      current.content += ` ${block}`
      current.pageEnd = page.pageNumber
    }
  }

  closeCurrent(sections.length + 1)
  return sections
}

const parsePdf = async (filePath) => {
  const loadingTask = getDocument(filePath)
  const pdf = await loadingTask.promise
  const pages = []

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber)
    const textContent = await page.getTextContent()
    const text = textContent.items.map((item) => ('str' in item ? item.str : '')).join(' ')
    pages.push({ pageNumber, text: normalizeText(text) })
  }

  await loadingTask.destroy()
  return pages
}

const main = async () => {
  await ensureCbmscDirs()
  const index = await readJson('data/cbmsc/manual_index.json', [])
  const files = await fs.readdir('data/cbmsc/raw').catch(() => [])
  const qualityLog = []

  for (const file of files) {
    const filePath = path.join('data/cbmsc/raw', file)
    const ext = path.extname(file).toLowerCase()
    const baseName = path.parse(file).name
    const entry = index.find((item) => slugify(item.id) === baseName || baseName.includes(slugify(item.id)))

    if (ext !== '.pdf') {
      qualityLog.push({ file, status: 'skipped', reason: 'unsupported_extension' })
      continue
    }

    try {
      const pages = await parsePdf(filePath)
      const lowQualityPages = pages.filter((page) => page.text.length < MIN_TEXT_PER_PAGE).map((page) => page.pageNumber)
      const sections = buildSectionsFromPages(pages, entry?.id ?? baseName)

      const document = {
        manualId: entry?.id ?? baseName,
        title: entry?.title ?? file,
        category: entry?.category ?? 'Não classificado',
        sourceUrl: entry?.sourcePage ?? '',
        fileUrl: entry?.fileUrl ?? '',
        collectedAt: entry?.collectedAt ?? new Date().toISOString(),
        parsedAt: new Date().toISOString(),
        textQuality: {
          totalPages: pages.length,
          lowTextPages: lowQualityPages,
          averageCharsPerPage: Math.round(pages.reduce((sum, page) => sum + page.text.length, 0) / Math.max(pages.length, 1)),
          requiresOcrReview: lowQualityPages.length > 0
        },
        pages: pages.map((page) => ({ pageNumber: page.pageNumber, charCount: page.text.length, text: page.text })),
        sections: sections.map((section) => ({
          ...section,
          sourceRefs: [
            {
              manualId: entry?.id ?? baseName,
              sectionId: section.id,
              manualTitle: entry?.title,
              category: entry?.category,
              sourcePage: entry?.sourcePage,
              sourceUrl: entry?.fileUrl ?? entry?.sourcePage ?? '',
              collectedAt: entry?.collectedAt,
              pageStart: section.pageStart,
              pageEnd: section.pageEnd,
              excerpt: section.content.slice(0, 320)
            }
          ]
        }))
      }

      await writeJson(`data/cbmsc/parsed/${baseName}.json`, document)
      qualityLog.push({ file, status: 'parsed', sections: sections.length, lowTextPages: lowQualityPages })
    } catch (error) {
      qualityLog.push({ file, status: 'failed', reason: error.message })
    }
  }

  await writeJson('data/cbmsc/logs/parse-log.json', {
    generatedAt: new Date().toISOString(),
    filesSeen: files.length,
    qualityLog
  })

  console.log(`[cbmsc:parse] Parse real concluído para ${qualityLog.filter((entry) => entry.status === 'parsed').length} arquivo(s).`)
}

main().catch((error) => {
  console.error('[cbmsc:parse] Erro fatal:', error)
  process.exitCode = 1
})
