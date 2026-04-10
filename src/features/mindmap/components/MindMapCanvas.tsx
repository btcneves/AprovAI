import { memo, useMemo, useState } from 'react'
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
  onCollapseAll: () => void
}

const INITIAL_VIEW = { scale: 0.42, x: -830, y: -1320 }

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
  onFocusRoot,
  onCollapseAll
}: Props) => {
  const [view, setView] = useState(INITIAL_VIEW)

  const selectedBranchId = selectedNodeId ? layout.map.get(selectedNodeId)?.branchId ?? null : null

  const handleZoom = (delta: number) => {
    setView((prev) => ({ ...prev, scale: Math.min(1.15, Math.max(0.3, prev.scale + delta)) }))
  }

  const moveCanvas = (dx: number, dy: number) => {
    setView((prev) => ({ ...prev, x: prev.x + dx, y: prev.y + dy }))
  }

  const fitBranch = useMemo(() => {
    if (!selectedBranchId) return null
    const bounds = layout.branchBounds.get(selectedBranchId)
    if (!bounds) return null
    return () => {
      const scale = 0.52
      const x = -(bounds.minX - 240)
      const y = -(bounds.minY - 240)
      setView({ scale, x, y })
    }
  }, [layout.branchBounds, selectedBranchId])

  return (
    <div className="mindmap-experience">
      <div className="mindmap-stage tree-stage">
        <div className="mindmap-controls modern">
          <button type="button" onClick={onResetFocus} className={!focusedRootId ? 'is-active' : ''}>Mapa completo</button>
          <button type="button" onClick={onCollapseAll}>Recolher tudo</button>
          <button type="button" onClick={() => handleZoom(0.08)}>Zoom +</button>
          <button type="button" onClick={() => handleZoom(-0.08)}>Zoom -</button>
          <button type="button" onClick={() => setView(INITIAL_VIEW)}>Reset visão</button>
          <button type="button" disabled={!fitBranch} onClick={() => fitBranch?.()}>Ajustar ramo</button>
          {focusedRootId ? <small>Filtro ativo</small> : <small>Núcleo central + ramificações progressivas</small>}
        </div>

        <div className="study-map-board">
          <div className="nav-pad">
            <button onClick={() => moveCanvas(0, 160)}>↑</button>
            <div>
              <button onClick={() => moveCanvas(160, 0)}>←</button>
              <button onClick={() => moveCanvas(-160, 0)}>→</button>
            </div>
            <button onClick={() => moveCanvas(0, -160)}>↓</button>
          </div>
          <div className="mindmap-canvas tree-canvas" style={{ width: layout.canvasSize, height: layout.canvasSize, transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}>
            <svg width={layout.canvasSize} height={layout.canvasSize} className="mindmap-links" aria-hidden>
              {layout.edges.map((edge) => {
                const from = layout.map.get(edge.sourceId)
                const to = layout.map.get(edge.targetId)
                if (!from || !to) return null
                const color = branchColorById.get(to.branchId) ?? '#64748b'
                const highlighted = selectedNodeId === to.node.id || selectedNodeId === from.node.id
                const muted = !!selectedBranchId && to.branchId !== selectedBranchId
                return <MindMapEdge key={edge.id} from={from} to={to} color={color} highlighted={highlighted} muted={muted} />
              })}
            </svg>

            <div className="study-center-node" style={{ left: layout.center, top: layout.center }}>
              <strong>Mapa Mental AprovAI</strong>
              <small>Parta do centro, expanda os blocos e avance por níveis.</small>
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
                activeBranch={!selectedBranchId || selectedBranchId === entry.branchId}
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
