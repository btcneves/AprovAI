import { memo } from 'react'
import type { MindMapNode as MindMapNodeType } from '@/domain/types'
import type { NodeLearningMap } from '@/domain/nodeLearningService'
import { MindMapEdge } from '@/features/mindmap/components/MindMapEdge'
import { MindMapNode } from '@/features/mindmap/components/MindMapNode'
import { NodeExpandedPanel } from '@/features/mindmap/components/NodeExpandedPanel'
import type { LayoutResult } from '@/features/mindmap/layout/RadialLayoutEngine'

type NodeStatus = 'forte' | 'atencao' | 'fraco' | 'sem-dados'

type Props = {
  layout: LayoutResult
  branchColorById: Map<string, string>
  performanceByNode: Map<string, NodeStatus>
  reviewedNodeIds: Set<string>
  nodeLearningById: NodeLearningMap
  focusedBranchNode?: MindMapNodeType | null
  selectedNode: MindMapNodeType | null
  hoveredNodeId: string | null
  onHoverNode: (id: string | null) => void
  onExpandNode: (id: string) => void
  onOpenTopic: (id: string) => void
  onTrainNode: (id: string) => void
}

export const MindMapCanvas = memo(({
  layout,
  branchColorById,
  performanceByNode,
  reviewedNodeIds,
  nodeLearningById,
  focusedBranchNode,
  selectedNode,
  hoveredNodeId,
  onHoverNode,
  onExpandNode,
  onOpenTopic,
  onTrainNode
}: Props) => {
  const activeId = hoveredNodeId ?? selectedNode?.id ?? null

  return (
    <div className="mindmap-canvas-wrap modern">
      <div className="mindmap-canvas" style={{ width: layout.canvasSize, height: layout.canvasSize }}>
        <svg width={layout.canvasSize} height={layout.canvasSize} className="mindmap-links" aria-hidden>
          {layout.edges.map((edge) => {
            const from = layout.map.get(edge.sourceId)
            const to = layout.map.get(edge.targetId)
            if (!from || !to) return null
            const color = branchColorById.get(to.branchId) ?? '#94a3b8'
            const highlighted = activeId === edge.sourceId || activeId === edge.targetId
            return <MindMapEdge key={edge.id} from={from} to={to} color={color} highlighted={highlighted} />
          })}
        </svg>

        <div className="center-node modern" style={{ left: layout.center, top: layout.center }}>
          <strong>{focusedBranchNode?.title ?? 'Mapa Mental AprovAI'}</strong>
          <small>{focusedBranchNode ? 'Ramo em foco para estudo direcionado.' : 'Visual radial limpo para revisão rápida.'}</small>
        </div>

        {layout.nodes.map((entry) => {
          const status = performanceByNode.get(entry.node.id) ?? 'sem-dados'
          return (
            <MindMapNode
              key={entry.node.id}
              entry={entry}
              status={status}
              reviewed={reviewedNodeIds.has(entry.node.id)}
              learning={nodeLearningById[entry.node.id]}
              branchColor={branchColorById.get(entry.branchId) ?? '#64748b'}
              hovered={hoveredNodeId === entry.node.id}
              selected={selectedNode?.id === entry.node.id}
              onHover={onHoverNode}
              onExpand={onExpandNode}
            />
          )
        })}

        {selectedNode ? <NodeExpandedPanel node={selectedNode} onOpenTopic={onOpenTopic} onTrainNode={onTrainNode} /> : null}
      </div>
    </div>
  )
})

MindMapCanvas.displayName = 'MindMapCanvas'
