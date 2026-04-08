import fs from 'node:fs/promises'
import path from 'node:path'
import { readJson, writeJson } from './utils.mjs'

const slugify = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const mapBlueprints = [
  {
    title: 'Classes de incêndio',
    summary: 'Classificação por tipo de combustível orienta agente extintor e estratégia operacional.',
    highlights: ['Classe K envolve óleos e gorduras de cozinha, exige agente saponificante.', 'Classe D não deve receber água em metais reativos.'],
    mistakes: ['Confundir classe C com método de extinção.', 'Aplicar água em incêndio classe B com líquido inflamável.'],
    branches: [
      { label: 'Classe A', children: ['Materiais sólidos comuns', 'Agente prioritário: água nebulizada'] },
      { label: 'Classe B', children: ['Líquidos inflamáveis', 'Espuma e abafamento'] },
      { label: 'Classe C', children: ['Equipamento energizado', 'Desenergizar antes do ataque final'] },
      { label: 'Classe D/K', children: ['Metais pirofóricos e óleos de cozinha', 'Agentes especiais'] }
    ]
  },
  {
    title: 'Métodos de extinção',
    summary: 'Resfriamento, abafamento, isolamento e quebra de reação em cadeia compõem os métodos-base.',
    highlights: ['Abafamento reduz concentração de oxigênio.', 'Isolamento remove combustível disponível.'],
    mistakes: ['Usar método único sem avaliar classe do incêndio.', 'Ventilar antes de coordenar ataque.'],
    branches: [
      { label: 'Resfriamento', children: ['Retira calor', 'Água em padrão adequado'] },
      { label: 'Abafamento', children: ['Reduz comburente', 'Espuma e cobertores'] },
      { label: 'Isolamento', children: ['Interrompe suprimento de combustível', 'Fechamento de válvulas'] },
      { label: 'Quebra em cadeia', children: ['Interfere reação química', 'PQS e agentes halogenados permitidos'] }
    ]
  },
  {
    title: 'Comportamento do fogo',
    summary: 'Fenômenos térmicos e dinâmica de fumaça orientam leitura de risco e tomada de decisão.',
    highlights: ['Flashover é transição rápida para combustão generalizada.', 'Backdraft depende de ambiente confinado e ventilação súbita.'],
    mistakes: ['Ignorar estratificação térmica no avanço.', 'Abrir ventilação sem linha carregada.'],
    branches: [
      { label: 'Transferência de calor', children: ['Condução', 'Convecção', 'Radiação'] },
      { label: 'Fenômenos críticos', children: ['Flashover', 'Backdraft'] },
      { label: 'Leitura de fumaça', children: ['Volume', 'Velocidade', 'Cor', 'Densidade'] }
    ]
  },
  {
    title: 'APH / ABCDE',
    summary: 'Sequência de avaliação primária para atendimento inicial com foco em ameaças imediatas à vida.',
    highlights: ['A prioriza via aérea com proteção cervical quando necessário.', 'C inclui controle de hemorragia exsanguinante.'],
    mistakes: ['Inverter sequência sem justificativa clínica.', 'Pular reavaliação após intervenção.'],
    branches: [
      { label: 'A - Airway', children: ['Via aérea pérvia', 'Proteção cervical'] },
      { label: 'B - Breathing', children: ['Expansão torácica', 'Ventilação eficaz'] },
      { label: 'C - Circulation', children: ['Pulso e perfusão', 'Controle de hemorragia'] },
      { label: 'D/E', children: ['Avaliação neurológica rápida', 'Exposição com prevenção de hipotermia'] }
    ]
  },
  {
    title: 'RCP',
    summary: 'Suporte básico em parada cardiorrespiratória exige compressões de alta qualidade e mínima interrupção.',
    highlights: ['Frequência alvo de 100-120 compressões/min em adulto.', 'Desfibrilação precoce aumenta chance de ROSC.'],
    mistakes: ['Interrupções longas para checagens desnecessárias.', 'Ventilações excessivas.'],
    branches: [
      { label: 'Cadeia de sobrevivência', children: ['Reconhecimento precoce', 'RCP imediata', 'DEA'] },
      { label: 'Compressões', children: ['Profundidade adequada', 'Retorno completo do tórax'] },
      { label: 'Ventilação', children: ['Relação 30:2 sem via avançada', 'Evitar hiperventilação'] }
    ]
  },
  {
    title: 'Produtos perigosos',
    summary: 'Identificação e isolamento inicial reduzem risco em eventos com substâncias perigosas.',
    highlights: ['Reconhecimento por ONU, rótulo de risco e painéis de segurança.', 'Zonas quente, morna e fria devem ser delimitadas.'],
    mistakes: ['Acessar zona quente sem EPI químico compatível.', 'Desconsiderar direção do vento.'],
    branches: [
      { label: 'Identificação', children: ['Número ONU', 'Classe/subclasse de risco'] },
      { label: 'Ações iniciais', children: ['Isolamento', 'Evacuação', 'Acionamento especializado'] },
      { label: 'Segurança da equipe', children: ['EPI adequado', 'Monitoramento de contaminação'] }
    ]
  },
  {
    title: 'Salvamento / busca / resgate',
    summary: 'Busca sistemática e extração segura priorizam vítimas e preservam a guarnição.',
    highlights: ['Marcação de ambientes evita duplicidade e áreas não varridas.', 'Controle de tempo/ar no ambiente hostil é obrigatório.'],
    mistakes: ['Perder referência de rota de saída.', 'Separar dupla em ambiente IDLH.'],
    branches: [
      { label: 'Busca', children: ['Primária x secundária', 'Padrões de progressão'] },
      { label: 'Resgate', children: ['Técnicas de arraste', 'Proteção de via aérea da vítima'] },
      { label: 'Comando', children: ['Setorização', 'Prestação de contas (PAR)'] }
    ]
  },
  {
    title: 'Normas e legislação básica',
    summary: 'Base normativa orienta limites operacionais, disciplina e responsabilidade da atuação CBMSC.',
    highlights: ['CTB e IG 10-03-BM aparecem recorrentemente em provas.', 'Cumprimento de POP e ICS reduz erro operacional.'],
    mistakes: ['Confundir norma interna com lei federal.', 'Atuar fora de escopo institucional.'],
    branches: [
      { label: 'Legislação federal', children: ['CTB', 'Normas de APH correlatas'] },
      { label: 'Normas CBMSC', children: ['IG 10-03-BM', 'Manuais operacionais'] },
      { label: 'Governança operacional', children: ['Cadeia de comando', 'Responsabilidade técnica'] }
    ]
  }
]

const createMindMap = (blueprint, manualIndex) => {
  const id = `cbmsc-${slugify(blueprint.title)}`
  const nodes = blueprint.branches.map((branch) => ({
    id: `${id}-${slugify(branch.label)}`,
    label: branch.label,
    type: 'main',
    children: branch.children.map((child) => ({ id: `${id}-${slugify(branch.label)}-${slugify(child)}`, label: child, type: 'child' }))
  }))

  const sources = manualIndex.slice(0, 4).map((manual) => ({
    manualId: manual.id,
    manualTitle: manual.title,
    category: manual.category,
    sourcePage: manual.sourcePage,
    sourceUrl: manual.fileUrl || manual.sourcePage,
    collectedAt: manual.collectedAt
  }))

  return {
    id,
    title: blueprint.title,
    summary: blueprint.summary,
    nodes,
    examHighlights: blueprint.highlights,
    commonMistakes: blueprint.mistakes,
    terms: blueprint.branches.flatMap((branch) => [branch.label, ...branch.children]),
    sources
  }
}

const main = async () => {
  await fs.mkdir('src/data/mindmaps', { recursive: true })

  const manualIndex = await readJson('data/cbmsc/manual_index.json', [])
  const maps = mapBlueprints.map((blueprint) => createMindMap(blueprint, manualIndex))

  for (const map of maps) {
    await fs.writeFile(path.join('src/data/mindmaps', `${map.id}.json`), `${JSON.stringify(map, null, 2)}\n`, 'utf-8')
  }

  await writeJson('src/data/mindmaps/generated-index.json', {
    generatedAt: new Date().toISOString(),
    maps: maps.map((map) => `src/data/mindmaps/${map.id}.json`)
  })

  const knowledgeThemes = maps.map((map) => ({
    theme: map.title,
    subtheme: map.nodes.map((node) => node.label),
    priority: ['classes de incêndio', 'aph / abcde', 'rcp'].includes(map.title.toLowerCase()) ? 'alta' : 'media',
    manuals: Array.from(new Set(map.sources.map((source) => source.manualId))),
    baseSections: map.nodes.map((node) => node.label),
    dependencies: map.title === 'RCP' ? ['APH / ABCDE'] : map.title === 'Métodos de extinção' ? ['Classes de incêndio'] : []
  }))

  await writeJson('data/cbmsc/knowledge_map.json', {
    generatedAt: new Date().toISOString(),
    themes: knowledgeThemes
  })

  console.log(`[cbmsc:generate-mindmaps] ${maps.length} mapa(s) gerado(s) e knowledge_map atualizado.`)
}

main().catch((error) => {
  console.error('[cbmsc:generate-mindmaps] Erro fatal:', error)
  process.exitCode = 1
})
