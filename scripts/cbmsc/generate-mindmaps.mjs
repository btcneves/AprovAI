import fs from 'node:fs/promises'

const main = async () => {
  await fs.mkdir('src/data/mindmaps', { recursive: true })
  const target = 'src/data/mindmaps/generated-index.json'
  const payload = {
    generatedAt: new Date().toISOString(),
    maps: ['src/data/mindmaps/classes-incendio.json']
  }

  await fs.writeFile(target, `${JSON.stringify(payload, null, 2)}\n`, 'utf-8')
  console.log('[cbmsc:generate-mindmaps] Índice inicial de mapas atualizado.')
}

main().catch((error) => {
  console.error('[cbmsc:generate-mindmaps] Erro fatal:', error)
  process.exitCode = 1
})
