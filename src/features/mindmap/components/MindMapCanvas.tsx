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
  focusedRootId: string | null
  selectedNodeId: string | null
  detailPanelNode: MindMapNodeType | null
  expandedNodeIds: Set<string>
  onSelectNode: (id: string) => void
  onToggleExpandNode: (id: string) => void
  onDetailNode: (id: string) => void
  onOpenTopic: (id: string) => void
  onTrainNode: (id: string) => void
  onResetFocus: () => void
  onFocusRoot: (id: string) => void
}

export const MindMapCanvas = memo(({
  layout,
  branchColorById,
  performanceByNode,
  reviewedNodeIds,
  nodeLearningById,
  focusedRootId,
  selectedNodeId,
  detailPanelNode,
  expandedNodeIds,
  onSelectNode,
  onToggleExpandNode,
  onDetailNode,
  onOpenTopic,
  onTrainNode,
  onResetFocus,
  onFocusRoot
}: Props) => {
  return (
    <div className="mindmap-experience">
      <div className="mindmap-stage tree-stage">
        <div className="mindmap-controls modern">
          <button type="button" onClick={onResetFocus} className={!focusedRootId ? 'is-active' : ''}>Mapa completo</button>
          {focusedRootId ? <small>Filtro ativo: ramo específico</small> : <small>Visualização em árvore progressiva</small>}
        </div>

        <div className="mindmap-viewport fullscreen">
          <div className="mindmap-canvas tree-canvas" style={{ width: layout.canvasSize, height: layout.canvasSize }}>
            <svg width={layout.canvasSize} height={layout.canvasSize} className="mindmap-links" aria-hidden>
              {layout.edges.map((edge) => {
                const from = layout.map.get(edge.sourceId)
                const to = layout.map.get(edge.targetId)
                if (!from || !to) return null
                const color = branchColorById.get(to.branchId) ?? '#64748b'
                return <MindMapEdge key={edge.id} from={from} to={to} color={color} highlighted={selectedNodeId === to.node.id} />
              })}
            </svg>

            <div className="center-node study-center-node" style={{ left: 180, top: layout.canvasSize / 2 }}>
              <strong>Mapa Mental AprovAI</strong>
              <small>Comece pelos blocos principais e expanda por níveis para estudar.</small>
            </div>

            {layout.nodes.map((entry) => (
              <MindMapNode
                key={entry.node.id}
                entry={entry}
                status={performanceByNode.get(entry.node.id) ?? 'sem-dados'}
                reviewed={reviewedNodeIds.has(entry.node.id)}
                learning={nodeLearningById[entry.node.id]}
                branchColor={branchColorById.get(entry.branchId) ?? '#64748b'}
                selected={selectedNodeId === entry.node.id}
                expanded={expandedNodeIds.has(entry.node.id)}
                activeBranch={!focusedRootId || focusedRootId === entry.branchId}
                hasChildren={entry.node.childrenIds.length > 0}
                onSelect={onSelectNode}
                onToggleExpand={onToggleExpandNode}
                onDetail={onDetailNode}
              />
            ))}
          </div>
        </div>
      </div>

      <NodeExpandedPanel
        node={detailPanelNode}
        learning={detailPanelNode ? nodeLearningById[detailPanelNode.id] : undefined}
        status={detailPanelNode ? performanceByNode.get(detailPanelNode.id) ?? 'sem-dados' : 'sem-dados'}
        onOpenTopic={onOpenTopic}
        onTrainNode={onTrainNode}
        onFocusBranch={onFocusRoot}
      />
    </div>
  )
})

MindMapCanvas.displayName = 'MindMapCanvas'
