import { useMemo, useState } from 'react'
import type { MindMapNode } from '@/domain/types'
import { isCriticalNode, isNeglectedNode, type NodeLearningMap } from '@/domain/nodeLearningService'

type NodeStatus = 'forte' | 'atencao' | 'fraco' | 'sem-dados'

type Props = {
  nodes: MindMapNode[]
  onOpenTopic: (nodeId: string) => void
  onTrainNode: (nodeId: string) => void
  onToggleReviewed: (nodeId: string) => void
  reviewedNodeIds: Set<string>
  performanceByNode: Map<string, NodeStatus>
  nodeLearningById: NodeLearningMap
}

type PositionedNode = {
  node: MindMapNode
  level: number
  x: number
  y: number
  angle: number
}

const statusLabel: Record<NodeStatus, string> = {
  forte: '🟢 forte',
  atencao: '🟡 atenção',
  fraco: '🔴 fraco',
  'sem-dados': '⚪ sem dados'
}

const themePalette = ['#2563eb', '#7c3aed', '#db2777', '#ea580c', '#0891b2', '#16a34a', '#4f46e5', '#be123c']

const dedupe = (items: string[]) => [...new Set(items.map((item) => item.trim()).filter(Boolean))]

const smartTruncate = (text: string, maxLen: number) => {
  if (text.length <= maxLen) return text
  const sliced = text.slice(0, maxLen)
  const lastSpace = sliced.lastIndexOf(' ')
  if (lastSpace > Math.floor(maxLen * 0.55)) {
    return `${sliced.slice(0, lastSpace)}…`
  }
  return `${sliced.trimEnd()}…`
}

const compact = (items: string[], max = 3, maxLen = 96) =>
  dedupe(items)
    .slice(0, max)
    .map((item) => smartTruncate(item, maxLen))

export const MindMapTree = ({
  nodes,
  onOpenTopic,
  onTrainNode,
  onToggleReviewed,
  reviewedNodeIds,
  performanceByNode,
  nodeLearningById
}: Props) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [query, setQuery] = useState('')
  const [focusedBranchId, setFocusedBranchId] = useState<string | null>(null)

  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes])

  const roots = useMemo(() => {
    if (!focusedBranchId) {
      return nodes.filter((node) => node.parentId === null)
    }
    const focused = nodeMap.get(focusedBranchId)
    return focused ? [focused] : nodes.filter((node) => node.parentId === null)
  }, [focusedBranchId, nodeMap, nodes])

  const rootByNodeId = useMemo(() => {
    const map = new Map<string, string>()
    const walk = (node: MindMapNode, rootId: string) => {
      map.set(node.id, rootId)
      node.childrenIds.forEach((childId) => {
        const child = nodeMap.get(childId)
        if (child) walk(child, rootId)
      })
    }
    nodes.filter((item) => item.parentId === null).forEach((root) => walk(root, root.id))
    if (focusedBranchId && nodeMap.get(focusedBranchId)) {
      const focused = nodeMap.get(focusedBranchId)
      if (focused) {
        const mark = (node: MindMapNode) => {
          map.set(node.id, focused.id)
          node.childrenIds.forEach((childId) => {
            const child = nodeMap.get(childId)
            if (child) mark(child)
          })
        }
        mark(focused)
      }
    }
    return map
  }, [nodes, nodeMap, focusedBranchId])

  const themeColorByRootId = useMemo(() => {
    const rootIds = Array.from(new Set(Array.from(rootByNodeId.values())))
    return new Map(rootIds.map((rootId, index) => [rootId, themePalette[index % themePalette.length]]))
  }, [rootByNodeId])

  const visibleNodes = useMemo(() => {
    const list: Array<{ node: MindMapNode; level: number }> = []
    const loweredQuery = query.toLowerCase()

    const matches = (node: MindMapNode) =>
      [node.title, node.descriptionShort, node.summary ?? '', ...node.tags].join(' ').toLowerCase().includes(loweredQuery)

    const hasMatchInChildren = (node: MindMapNode): boolean =>
      node.childrenIds.some((id) => {
        const child = nodeMap.get(id)
        return child ? matches(child) || hasMatchInChildren(child) : false
      })

    const visit = (node: MindMapNode, level: number) => {
      if (query && !matches(node) && !hasMatchInChildren(node)) {
        return
      }

      list.push({ node, level })
      const isExpanded = expanded[node.id] ?? true
      if (!isExpanded) return

      node.childrenIds.forEach((childId) => {
        const child = nodeMap.get(childId)
        if (child) visit(child, level + 1)
      })
    }

    roots.forEach((root) => visit(root, 1))

    return list
  }, [expanded, nodeMap, query, roots])

  const layout = useMemo(() => {
    const levels = new Map<number, MindMapNode[]>()
    visibleNodes.forEach(({ node, level }) => {
      const existing = levels.get(level) ?? []
      existing.push(node)
      levels.set(level, existing)
    })

    const minRingGap = 188
    const minNodeArc = 258
    const baseRadius = 170
    const levelRadius = new Map<number, number>()
    let previousRadius = 0

    Array.from(levels.entries())
      .sort((a, b) => a[0] - b[0])
      .forEach(([level, levelNodes]) => {
        const count = Math.max(1, levelNodes.length)
        const requestedByLevel = baseRadius + (level - 1) * minRingGap
        const requestedByDensity = (count * minNodeArc) / (2 * Math.PI)
        const radius = Math.max(requestedByLevel, requestedByDensity, previousRadius + minRingGap)
        levelRadius.set(level, radius)
        previousRadius = radius
      })

    const outerRadius = Math.max(...Array.from(levelRadius.values(), (value) => value))
    const size = Math.max(1300, outerRadius * 2 + 420)
    const center = size / 2

    const positioned: PositionedNode[] = []

    Array.from(levels.entries())
      .sort((a, b) => a[0] - b[0])
      .forEach(([level, levelNodes]) => {
        const radius = levelRadius.get(level) ?? baseRadius * level
        const count = Math.max(1, levelNodes.length)
        levelNodes.forEach((node, index) => {
          const angle = ((Math.PI * 2) / count) * index - Math.PI / 2
          const x = center + radius * Math.cos(angle)
          const y = center + radius * Math.sin(angle)
          positioned.push({ node, level, x, y, angle })
        })
      })

    const map = new Map(positioned.map((entry) => [entry.node.id, entry]))
    return { positioned, map, size, center }
  }, [visibleNodes])

  return (
    <div>
      <input placeholder="Buscar tópico, tag ou termo" value={query} onChange={(event) => setQuery(event.target.value)} className="input" />
      <div className="actions-row">
        <button onClick={() => setFocusedBranchId(null)} disabled={!focusedBranchId}>Mostrar mapa completo</button>
        <button onClick={() => setExpanded({})}>Expandir tudo</button>
        <button onClick={() => setExpanded(Object.fromEntries(nodes.map((node) => [node.id, false])))}>Recolher tudo</button>
      </div>

      <div className="mindmap-canvas-wrap">
        <div className="mindmap-canvas" style={{ width: layout.size, height: layout.size }}>
          <svg width={layout.size} height={layout.size} className="mindmap-links" aria-hidden>
            {layout.positioned.map(({ node }) => {
              const parent = node.parentId ? layout.map.get(node.parentId) : undefined
              const current = layout.map.get(node.id)
              if (!parent || !current) return null
              const rootId = rootByNodeId.get(node.id) ?? node.id
              const stroke = themeColorByRootId.get(rootId) ?? '#94a3b8'
              return <line key={`${node.id}-link`} x1={parent.x} y1={parent.y} x2={current.x} y2={current.y} stroke={stroke} strokeOpacity={0.45} strokeWidth={2} />
            })}
          </svg>

          <div className="center-node" style={{ left: layout.center, top: layout.center }}>
            <strong>{focusedBranchId ? nodeMap.get(focusedBranchId)?.title ?? 'Ramo em foco' : 'Mapa Mental AprovAI'}</strong>
            <small>{focusedBranchId ? 'Navegação focada no ramo selecionado.' : 'Estrutura radial por níveis com foco pedagógico.'}</small>
          </div>

          {layout.positioned.map(({ node, level, x, y }) => {
            const status = performanceByNode.get(node.id) ?? 'sem-dados'
            const reviewed = reviewedNodeIds.has(node.id)
            const learning = nodeLearningById[node.id]
            const critical = isCriticalNode(learning)
            const neglected = isNeglectedNode(learning)
            const rootId = rootByNodeId.get(node.id) ?? node.id
            const branchColor = themeColorByRootId.get(rootId) ?? '#64748b'

            const conciseBullets = compact([
              node.summary ?? node.descriptionShort,
              ...(node.examHighlights ?? []),
              ...(node.commonMistakes ?? [])
            ])

            return (
              <article
                key={node.id}
                className={`radial-node ${status} level-${Math.min(level, 4)} ${critical ? 'critical' : ''} ${neglected ? 'neglected' : ''}`}
                style={{ left: x, top: y, borderColor: branchColor, boxShadow: `0 8px 24px ${branchColor}22` }}
              >
                <button className="tree-title" onClick={() => setExpanded((prev) => ({ ...prev, [node.id]: !(prev[node.id] ?? true) }))}>
                  {(expanded[node.id] ?? true) ? '▾' : '▸'} {node.title}
                </button>

                <ul>
                  {conciseBullets.map((item) => <li key={`${node.id}-${item}`}>{item}</li>)}
                </ul>

                <div className="tree-badges">
                  <small className="status-badge">{statusLabel[status]}</small>
                  {learning ? <small className="status-badge">🎯 {learning.accuracyRate}%</small> : null}
                  {critical ? <small className="status-badge">⚠️ crítico</small> : null}
                  {neglected ? <small className="status-badge">🕒 negligenciado</small> : null}
                  {reviewed ? <small className="status-badge">✅ revisado</small> : null}
                </div>

                <div className="pedagogy-row">
                  <span className="ped-tag">🔥 {node.examHighlights?.length ?? 0}</span>
                  <span className="ped-tag">❌ {node.commonMistakes?.length ?? 0}</span>
                  <span className="ped-tag">⚖️ {node.criticalDifferences?.length ?? 0}</span>
                  <span className="ped-tag">🪤 {node.traps?.length ?? 0}</span>
                </div>

                <div className="tree-actions">
                  <button onClick={() => onOpenTopic(node.id)}>Revisar</button>
                  <button onClick={() => onTrainNode(node.id)}>Treinar</button>
                  <button onClick={() => setFocusedBranchId(node.id)}>Focar ramo</button>
                  <button className={reviewed ? 'reviewed' : ''} onClick={() => onToggleReviewed(node.id)}>
                    {reviewed ? 'Revisado ✓' : 'Revisar'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
