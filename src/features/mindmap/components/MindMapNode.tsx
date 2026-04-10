import { memo } from 'react'
import type { CSSProperties } from 'react'
import type { MindMapNode as MindMapNodeType } from '@/domain/types'
import { isCriticalNode, isNeglectedNode, type NodeLearningMap } from '@/domain/nodeLearningService'
import type { LayoutNode } from '@/features/mindmap/layout/RadialLayoutEngine'

type NodeStatus = 'forte' | 'atencao' | 'fraco' | 'sem-dados'

type Props = {
  entry: LayoutNode
  status: NodeStatus
  reviewed: boolean
  learning: NodeLearningMap[string]
  branchColor: string
  hovered: boolean
  selected: boolean
  deemphasized: boolean
  expanded: boolean
  hasChildren: boolean
  onHover: (nodeId: string | null) => void
  onSelect: (nodeId: string) => void
  onToggleExpand: (nodeId: string) => void
  onDetail: (nodeId: string) => void
}

const statusPillClass = {
  forte: 'status-strong',
  atencao: 'status-warn',
  fraco: 'status-weak',
  'sem-dados': 'status-neutral'
}

const truncate = (text: string, max: number) => (text.length > max ? `${text.slice(0, max).trimEnd()}…` : text)

const dedupeText = (lines: Array<string | null | undefined>) => {
  const seen = new Set<string>()
  const unique: string[] = []

  lines.forEach((line) => {
    const cleaned = line?.trim()
    if (!cleaned) return
    const key = cleaned.toLowerCase()
    if (seen.has(key)) return
    seen.add(key)
    unique.push(cleaned)
  })

  return unique
}

const scaleNodeByDepth = (depth: number) => {
  if (depth <= 1) return 1.2
  if (depth === 2) return 1
  if (depth === 3) return 0.9
  return 0.8
}

export const MindMapNode = memo(({
  entry,
  status,
  reviewed,
  learning,
  branchColor,
  hovered,
  selected,
  deemphasized,
  expanded,
  hasChildren,
  onHover,
  onSelect,
  onToggleExpand,
  onDetail
}: Props) => {
  const node: MindMapNodeType = entry.node
  const compactBullets = dedupeText([node.summary ?? node.descriptionShort, ...(node.examHighlights ?? []), ...(node.commonMistakes ?? [])])
    .slice(0, 2)
    .map((item) => truncate(item, 84))

  const critical = isCriticalNode(learning)
  const neglected = isNeglectedNode(learning)

  return (
    <article
      className={`mindmap-node-card depth-${Math.min(entry.depth, 4)} ${hovered ? 'is-hovered' : ''} ${selected ? 'is-selected' : ''} ${deemphasized ? 'is-deemphasized' : ''}`}
      style={{
        left: entry.x,
        top: entry.y,
        borderColor: branchColor,
        boxShadow: `0 12px 26px ${branchColor}20`,
        '--node-scale': scaleNodeByDepth(entry.depth)
      } as CSSProperties}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(node.id)}
    >
      <header>
        <h4>{node.title}</h4>
        <span className={`status-pill ${statusPillClass[status]}`}>{status}</span>
      </header>
      <ul>{compactBullets.map((item) => <li key={`${node.id}-${item}`}>{item}</li>)}</ul>
      <footer>
        {reviewed ? <small>Revisado</small> : null}
        {critical ? <small>Crítico</small> : null}
        {neglected ? <small>Negligenciado</small> : null}
      </footer>
      <div className="node-card-actions">
        {hasChildren ? (
          <button
            type="button"
            className="expand-node-btn secondary"
            onClick={(event) => {
              event.stopPropagation()
              onToggleExpand(node.id)
            }}
          >
            {expanded ? 'Recolher' : 'Expandir'}
          </button>
        ) : null}
        <button
          type="button"
          className="expand-node-btn"
          onClick={(event) => {
            event.stopPropagation()
            onDetail(node.id)
          }}
        >
          Detalhar
        </button>
      </div>
    </article>
  )
})

MindMapNode.displayName = 'MindMapNode'
