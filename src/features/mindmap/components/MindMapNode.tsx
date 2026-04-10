import { memo } from 'react'
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
  onHover: (nodeId: string | null) => void
  onExpand: (nodeId: string) => void
}

const statusPillClass = {
  forte: 'status-strong',
  atencao: 'status-warn',
  fraco: 'status-weak',
  'sem-dados': 'status-neutral'
}

const truncate = (text: string, max: number) => (text.length > max ? `${text.slice(0, max).trimEnd()}…` : text)

export const MindMapNode = memo(({ entry, status, reviewed, learning, branchColor, hovered, selected, deemphasized, onHover, onExpand }: Props) => {
  const node: MindMapNodeType = entry.node
  const compactBullets = [node.summary ?? node.descriptionShort, ...(node.examHighlights ?? []), ...(node.commonMistakes ?? [])]
    .filter(Boolean)
    .slice(0, 3)
    .map((item) => truncate(item, 84))

  const critical = isCriticalNode(learning)
  const neglected = isNeglectedNode(learning)

  return (
    <article
      className={`mindmap-node-card depth-${Math.min(entry.depth, 3)} ${hovered ? 'is-hovered' : ''} ${selected ? 'is-selected' : ''} ${deemphasized ? 'is-deemphasized' : ''}`}
      style={{ left: entry.x, top: entry.y, borderColor: branchColor, boxShadow: `0 12px 26px ${branchColor}20` }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
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
      <button className="expand-node-btn" onClick={() => onExpand(node.id)}>Detalhar</button>
    </article>
  )
})

MindMapNode.displayName = 'MindMapNode'
