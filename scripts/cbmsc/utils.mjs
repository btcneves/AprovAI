import fs from 'node:fs/promises'
import path from 'node:path'

export const ROOT_URL = 'https://portal.cbm.sc.gov.br'
export const LIBRARY_URL = `${ROOT_URL}/index.php/biblioteca/manuais-cbmsc`

export const resolveUrl = (url) => {
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  if (url.startsWith('/')) return `${ROOT_URL}${url}`
  return `${ROOT_URL}/${url}`
}

export const slugify = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const extractAnchors = (html) => {
  const matches = html.matchAll(/<a\s+[^>]*href=(['"])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi)
  return [...matches].map((match) => ({
    href: match[2],
    text: stripTags(match[3]).trim()
  }))
}

export const stripTags = (input) =>
  input
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()

export const extensionFromUrl = (url) => {
  const clean = url.split('?')[0]
  const ext = path.extname(clean).toLowerCase()
  return ext || '.html'
}

export const ensureCbmscDirs = async () => {
  await fs.mkdir('data/cbmsc/raw', { recursive: true })
  await fs.mkdir('data/cbmsc/parsed', { recursive: true })
  await fs.mkdir('data/cbmsc/normalized', { recursive: true })
}

export const writeJson = async (filePath, data) => {
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf-8')
}

export const readJson = async (filePath, fallback) => {
  try {
    const raw = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}
