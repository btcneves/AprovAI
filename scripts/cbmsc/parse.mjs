import fs from 'node:fs/promises'
import path from 'node:path'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import { ensureCbmscDirs, extensionFromUrl, readJson, slugify, writeJson } from './utils.mjs'

const MIN_TEXT_PER_PAGE = 80

const normalizeText = (value) => value.replace(/\s+/g, ' ').trim()

const splitIntoBlocks = (text) =>
  text
    .split(/\n{2,}|(?<=[\.:;])\s{2,}/g)
    .map((item) => normalizeText(item))
    .filter((item) => item.length >= 30)

const classifySectionTitle = (block) => {
  const head = block.slice(0, 100)
  if (/^(cap[íi]tulo|se[cç][aã]o|m[óo]dulo|unidade)\b/i.test(head)) return head
  if (/^\d+(\.\d+)*\s+/.test(head) && head.length <= 110) return head
  return null
}

const buildSectionsFromPages = (pages, manualId) => {
  const sections = []
  let current = null

  const closeCurrent = () => {
    if (!current) return
    current.content = normalizeText(current.content)
    current.keywords = Array.from(
      new Set(
        current.content
          .toLowerCase()
          .split(/[^\p{L}\p{N}]+/u)
          .filter((token) => token.length >= 5)
          .slice(0, 15)
      )
    )
    sections.push(current)
    current = null
  }

  for (const page of pages) {
    const blocks = splitIntoBlocks(page.text)
    for (const block of blocks) {
      const maybeTitle = classifySectionTitle(block)
      if (maybeTitle && !current) {
        current = {
          id: `${manualId}-sec-${sections.length + 1}`,
          title: maybeTitle,
          content: '',
          keywords: [],
          pageStart: page.pageNumber,
          pageEnd: page.pageNumber,
          purpose: ['theory', 'review', 'question-generation', 'answer-explanation'],
          sourceRefs: []
        }
      } else if (maybeTitle && current && current.content.length > 120) {
        closeCurrent()
        current = {
          id: `${manualId}-sec-${sections.length + 1}`,
          title: maybeTitle,
          content: '',
          keywords: [],
          pageStart: page.pageNumber,
          pageEnd: page.pageNumber,
          purpose: ['theory', 'review', 'question-generation', 'answer-explanation'],
          sourceRefs: []
        }
      } else if (!current) {
        current = {
          id: `${manualId}-sec-${sections.length + 1}`,
          title: `Trecho ${sections.length + 1}`,
          content: '',
          keywords: [],
          pageStart: page.pageNumber,
          pageEnd: page.pageNumber,
          purpose: ['theory', 'review', 'question-generation'],
          sourceRefs: []
        }
      }

      current.content += `${block} `
      current.pageEnd = page.pageNumber
    }
  }

  closeCurrent()
  return sections.filter((section) => section.content.length > 80)
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
              excerpt: section.content.slice(0, 240)
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
