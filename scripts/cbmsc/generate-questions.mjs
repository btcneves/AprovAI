import fs from 'node:fs/promises'

const main = async () => {
  await fs.mkdir('src/data/questions', { recursive: true })
  const target = 'src/data/questions/generated-index.json'
  const payload = {
    generatedAt: new Date().toISOString(),
    banks: ['src/data/questions/cbmscQuestions.ts']
  }

  await fs.writeFile(target, `${JSON.stringify(payload, null, 2)}\n`, 'utf-8')
  console.log('[cbmsc:generate-questions] Índice inicial de questões atualizado.')
}

main().catch((error) => {
  console.error('[cbmsc:generate-questions] Erro fatal:', error)
  process.exitCode = 1
})
