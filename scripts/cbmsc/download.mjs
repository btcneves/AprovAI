import fs from 'node:fs/promises'
import path from 'node:path'
import { downloadBinary, ensureCbmscDirs, extensionFromUrl, readJson, slugify, writeJson } from './utils.mjs'

const main = async () => {
  await ensureCbmscDirs()
  const index = await readJson('data/cbmsc/manual_index.json', [])
  let downloaded = 0
  const logEntries = []

  for (const item of index) {
    if (!item.fileUrl) {
      logEntries.push({ manualId: item.id, status: 'skipped', reason: 'missing_file_url' })
      continue
    }

    const ext = extensionFromUrl(item.fileUrl)
    const filename = `${slugify(item.id || item.title)}${ext}`
    const output = path.join('data/cbmsc/raw', filename)

    try {
      await fs.access(output)
      logEntries.push({ manualId: item.id, status: 'cached', file: output })
      continue
    } catch {
      // arquivo não existe
    }

    try {
      const buffer = await downloadBinary(item.fileUrl)
      await fs.writeFile(output, buffer)
      downloaded += 1
      logEntries.push({ manualId: item.id, status: 'downloaded', file: output, bytes: buffer.length })
    } catch (error) {
      logEntries.push({ manualId: item.id, status: 'failed', reason: error.message })
    }
  }

  await writeJson('data/cbmsc/logs/download-log.json', {
    generatedAt: new Date().toISOString(),
    downloaded,
    total: index.length,
    logEntries
  })

  console.log(`[cbmsc:download] Download concluído. Novos arquivos: ${downloaded}`)
}

main().catch((error) => {
  console.error('[cbmsc:download] Erro fatal:', error)
  process.exitCode = 1
})
