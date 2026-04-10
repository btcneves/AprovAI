import { memo } from 'react'
import type { CSSProperties } from 'react'
import type { NodeLearningMap } from '@/domain/nodeLearningService'
import type { LayoutNode } from '@/features/mindmap/layout/RadialLayoutEngine'

type NodeStatus = 'forte' | 'atencao' | 'fraco' | 'sem-dados'

type Props = {
  entry: LayoutNode
  status: NodeStatus
  reviewed: boolean
  learning: NodeLearningMap[string]
  branchColor: string
  selected: boolean
  expanded: boolean
  activeBranch: boolean
  hasChildren: boolean
  onSelect: (nodeId: string) => void
  onToggleExpand: (nodeId: string) => void
  onDetail: (nodeId: string) => void
}

const statusLabel: Record<NodeStatus, string> = {
  forte: 'Forte',
  atencao: 'Atenção',
  fraco: 'Fraco',
  'sem-dados': 'Sem dados'
}

export const MindMapNode = memo(({
  entry,
  status,
  reviewed,
  learning,
  branchColor,
  selected,
  expanded,
  activeBranch,
  hasChildren,
  onSelect,
  onToggleExpand,
  onDetail
}: Props) => {
  const compactBullets = [entry.node.summary, ...(entry.node.examHighlights ?? []), ...(entry.node.commonMistakes ?? [])].filter(Boolean).slice(0, 2)

  return (
    <article
      className={`study-tree-node ${selected ? 'is-selected' : ''} ${activeBranch ? 'is-active-branch' : ''}`}
      style={{
        left: entry.x,
        top: entry.y,
        borderColor: branchColor,
        '--branch-color': branchColor
      } as CSSProperties}
      onClick={() => onSelect(entry.node.id)}
    >
      <header>
        <h4>{entry.node.title}</h4>
        <span className={`status-pill status-${status}`}>{statusLabel[status]}</span>
      </header>
      <ul>
        {compactBullets.map((item) => (
          <li key={`${entry.node.id}-${item}`}>{item}</li>
        ))}
      </ul>
      <footer>
        {reviewed ? <small>Revisado</small> : null}
        {learning ? <small>Acurácia: {learning.accuracyRate}%</small> : <small>Sem histórico</small>}
      </footer>
      <div className="node-card-actions">
        {hasChildren ? (
          <button
            type="button"
            className="expand-node-btn secondary"
            onClick={(event) => {
              event.stopPropagation()
              onToggleExpand(entry.node.id)
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
            onDetail(entry.node.id)
          }}
        >
          Detalhar
        </button>
      </div>
    </article>
  )
})

MindMapNode.displayName = 'MindMapNode'
