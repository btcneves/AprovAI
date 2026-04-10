import { memo, useCallback, useMemo, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from 'react'
import type { MindMapNode as MindMapNodeType } from '@/domain/types'
import type { NodeLearningMap } from '@/domain/nodeLearningService'
import { MindMapEdge } from '@/features/mindmap/components/MindMapEdge'
import { MindMapNode } from '@/features/mindmap/components/MindMapNode'
import { NodeExpandedPanel } from '@/features/mindmap/components/NodeExpandedPanel'
import type { LayoutCluster, LayoutResult } from '@/features/mindmap/layout/RadialLayoutEngine'

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

const TAU = Math.PI * 2
const normalizeAngle = (angle: number) => {
  const normalized = angle % TAU
  return normalized >= 0 ? normalized : normalized + TAU
}

const clusterArcPath = (cluster: LayoutCluster, center: number) => {
  const start = normalizeAngle(cluster.startTheta)
  const end = normalizeAngle(cluster.endTheta)
  const sweep = start <= end ? end - start : TAU - start + end
  const largeArcFlag = sweep > Math.PI ? 1 : 0

  const outerStartX = center + cluster.outerRadius * Math.cos(start)
  const outerStartY = center + cluster.outerRadius * Math.sin(start)
  const outerEndX = center + cluster.outerRadius * Math.cos(start + sweep)
  const outerEndY = center + cluster.outerRadius * Math.sin(start + sweep)

  const innerStartX = center + cluster.innerRadius * Math.cos(start)
  const innerStartY = center + cluster.innerRadius * Math.sin(start)
  const innerEndX = center + cluster.innerRadius * Math.cos(start + sweep)
  const innerEndY = center + cluster.innerRadius * Math.sin(start + sweep)

  return [
    `M ${outerStartX} ${outerStartY}`,
    `A ${cluster.outerRadius} ${cluster.outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}`,
    `L ${innerEndX} ${innerEndY}`,
    `A ${cluster.innerRadius} ${cluster.innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}`,
    'Z'
  ].join(' ')
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
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef<{ x: number; y: number } | null>(null)

  const onWheel = useCallback((event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    const direction = event.deltaY > 0 ? -1 : 1
    setZoom((current) => Math.min(2.2, Math.max(0.5, current + direction * 0.08)))
  }, [])

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return
    setDragging(true)
    dragRef.current = { x: event.clientX - offset.x, y: event.clientY - offset.y }
  }, [offset.x, offset.y])

  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return
    setOffset({ x: event.clientX - dragRef.current.x, y: event.clientY - dragRef.current.y })
  }, [])

  const onPointerUp = useCallback(() => {
    dragRef.current = null
    setDragging(false)
  }, [])

  const transformedStyle = useMemo(() => ({
    width: layout.canvasSize,
    height: layout.canvasSize,
    transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
    transformOrigin: `${layout.center}px ${layout.center}px`
  }), [layout.canvasSize, layout.center, offset.x, offset.y, zoom])

  return (
    <div className="mindmap-canvas-wrap modern">
      <div className="mindmap-controls">
        <button type="button" onClick={() => setZoom((value) => Math.min(2.2, value + 0.12))}>Zoom +</button>
        <button type="button" onClick={() => setZoom((value) => Math.max(0.5, value - 0.12))}>Zoom -</button>
        <button type="button" onClick={() => { setZoom(1); setOffset({ x: 0, y: 0 }) }}>Reset vista</button>
        <small>Arraste para mover o canvas · Scroll para zoom ({Math.round(zoom * 100)}%)</small>
      </div>

      <div
        className={`mindmap-viewport ${dragging ? 'is-dragging' : ''}`}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className="mindmap-canvas" style={transformedStyle}>
          <svg width={layout.canvasSize} height={layout.canvasSize} className="mindmap-links" aria-hidden>
            {layout.clusters.map((cluster) => {
              const color = branchColorById.get(cluster.branchId) ?? '#94a3b8'
              return (
                <path
                  key={`cluster-${cluster.branchId}`}
                  d={clusterArcPath(cluster, layout.center)}
                  className="mindmap-cluster-bg"
                  fill={`${color}20`}
                  stroke={`${color}70`}
                />
              )
            })}

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
    </div>
  )
})

MindMapCanvas.displayName = 'MindMapCanvas'
