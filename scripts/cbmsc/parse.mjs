import fs from 'node:fs/promises'
import path from 'node:path'
import { ensureCbmscDirs, readJson, writeJson } from './utils.mjs'

const main = async () => {
  await ensureCbmscDirs()
  const index = await readJson('data/cbmsc/manual_index.json', [])
  const files = await fs.readdir('data/cbmsc/raw').catch(() => [])

  for (const file of files) {
    const entry = index.find((item) => file.includes(item.id))
    const document = {
      manualId: entry?.id ?? path.parse(file).name,
      title: entry?.title ?? file,
      category: entry?.category ?? 'Não classificado',
      sourceUrl: entry?.sourcePage ?? '',
      fileUrl: entry?.fileUrl ?? '',
      collectedAt: entry?.collectedAt ?? new Date().toISOString(),
      parsedAt: new Date().toISOString(),
      sections: [
        {
          id: 'sec-1',
          title: 'Texto extraído pendente',
          content: 'Parser inicial criado. Extração avançada de PDF será implementada no próximo incremento.',
          keywords: ['pendente', 'pdf', 'extracao'],
          purpose: ['theory', 'review'],
          sourceRefs: []
        }
      ]
    }

    await writeJson(`data/cbmsc/parsed/${path.parse(file).name}.json`, document)
  }

  console.log(`[cbmsc:parse] Parse inicial concluído para ${files.length} arquivo(s).`)
}

main().catch((error) => {
  console.error('[cbmsc:parse] Erro fatal:', error)
  process.exitCode = 1
})
