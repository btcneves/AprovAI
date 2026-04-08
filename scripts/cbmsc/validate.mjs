import fs from 'node:fs/promises'

const fileExists = async (file) => {
  try {
    await fs.access(file)
    return true
  } catch {
    return false
  }
}

const main = async () => {
  const checks = [
    'data/cbmsc/manual_index.json',
    'data/cbmsc/knowledge_map.json',
    'src/data/mindmaps/classes-incendio.json',
    'src/data/questions/cbmscQuestions.ts'
  ]

  const results = await Promise.all(checks.map(async (file) => ({ file, exists: await fileExists(file) })))
  const missing = results.filter((result) => !result.exists)

  for (const result of results) {
    console.log(`[cbmsc:validate] ${result.exists ? 'OK' : 'MISSING'} - ${result.file}`)
  }

  if (missing.length) {
    process.exitCode = 1
    return
  }

  console.log('[cbmsc:validate] Validação inicial concluída com sucesso.')
}

main().catch((error) => {
  console.error('[cbmsc:validate] Erro fatal:', error)
  process.exitCode = 1
})
