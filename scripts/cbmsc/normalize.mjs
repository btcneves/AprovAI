import fs from 'node:fs/promises'
import path from 'node:path'
import { ensureCbmscDirs, writeJson } from './utils.mjs'

const normalizeText = (value) => value.replace(/\s+/g, ' ').trim()

const main = async () => {
  await ensureCbmscDirs()
  const parsedFiles = await fs.readdir('data/cbmsc/parsed').catch(() => [])

  for (const file of parsedFiles) {
    const sourcePath = path.join('data/cbmsc/parsed', file)
    const raw = JSON.parse(await fs.readFile(sourcePath, 'utf-8'))

    const normalized = {
      ...raw,
      normalizedAt: new Date().toISOString(),
      sections: (raw.sections ?? []).map((section) => ({
        ...section,
        content: normalizeText(section.content ?? ''),
        keywords: Array.from(new Set((section.keywords ?? []).map((keyword) => normalizeText(keyword.toLowerCase()))))
      }))
    }

    await writeJson(path.join('data/cbmsc/normalized', file), normalized)
  }

  console.log(`[cbmsc:normalize] Normalização inicial concluída para ${parsedFiles.length} arquivo(s).`)
}

main().catch((error) => {
  console.error('[cbmsc:normalize] Erro fatal:', error)
  process.exitCode = 1
})
