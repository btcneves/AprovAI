import fs from 'node:fs/promises'
import path from 'node:path'
import { ensureCbmscDirs, extensionFromUrl, readJson, slugify } from './utils.mjs'

const main = async () => {
  await ensureCbmscDirs()
  const index = await readJson('data/cbmsc/manual_index.json', [])
  let downloaded = 0

  for (const item of index) {
    const ext = extensionFromUrl(item.fileUrl)
    const filename = `${slugify(item.id || item.title)}${ext}`
    const output = path.join('data/cbmsc/raw', filename)

    try {
      await fs.access(output)
      continue
    } catch {
      // arquivo não existe
    }

    try {
      const response = await fetch(item.fileUrl)
      if (!response.ok) continue
      const buffer = Buffer.from(await response.arrayBuffer())
      await fs.writeFile(output, buffer)
      downloaded += 1
    } catch {
      // mantém execução
    }
  }

  console.log(`[cbmsc:download] Download concluído. Novos arquivos: ${downloaded}`)
}

main().catch((error) => {
  console.error('[cbmsc:download] Erro fatal:', error)
  process.exitCode = 1
})
