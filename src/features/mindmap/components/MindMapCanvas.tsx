import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
  focusedRootId: string | null
  selectedNodeId: string | null
  detailPanelNode: MindMapNodeType | null
  hoveredNodeId: string | null
  expandedNodeIds: Set<string>
  onHoverNode: (id: string | null) => void
  onSelectNode: (id: string) => void
  onToggleExpandNode: (id: string) => void
  onDetailNode: (id: string) => void
  onOpenTopic: (id: string) => void
  onTrainNode: (id: string) => void
  onResetFocus: () => void
  onFocusRoot: (id: string) => void
}

type ViewportState = { offsetX: number; offsetY: number; scale: number }
type DragState = {
  isDragging: boolean
  startClientX: number
  startClientY: number
  originOffsetX: number
  originOffsetY: number
} | null

const MIN_SCALE = 0.45
const MAX_SCALE = 2.1
const DEFAULT_SCALE = 0.9
const TAU = Math.PI * 2

const normalizeAngle = (angle: number) => {
  const normalized = angle % TAU
  return normalized >= 0 ? normalized : normalized + TAU
}


export const computeZoomViewport = (
  current: ViewportState,
  mouseX: number,
  mouseY: number,
  zoomFactor: number
): ViewportState => {
  const worldX = (mouseX - current.offsetX) / current.scale
  const worldY = (mouseY - current.offsetY) / current.scale
  const nextScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, current.scale * zoomFactor))

  if (Math.abs(nextScale - current.scale) < 0.0001) return current

  return {
    scale: nextScale,
    offsetX: mouseX - worldX * nextScale,
    offsetY: mouseY - worldY * nextScale
  }
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
  focusedRootId,
  selectedNodeId,
  detailPanelNode,
  hoveredNodeId,
  expandedNodeIds,
  onHoverNode,
  onSelectNode,
  onToggleExpandNode,
  onDetailNode,
  onOpenTopic,
  onTrainNode,
  onResetFocus,
  onFocusRoot
}: Props) => {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [viewportState, setViewportState] = useState<ViewportState>({ offsetX: 0, offsetY: 0, scale: 1 })
  const [dragState, setDragState] = useState<DragState>(null)
  const dragStateRef = useRef<DragState>(null)

  const activeId = hoveredNodeId ?? selectedNodeId ?? detailPanelNode?.id ?? null

  const centerCanvas = useCallback((scale = viewportState.scale) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const targetOffsetX = viewport.clientWidth / 2 - layout.center * scale
    const targetOffsetY = viewport.clientHeight / 2 - layout.center * scale
    setViewportState({ offsetX: targetOffsetX, offsetY: targetOffsetY, scale })
  }, [layout.center, viewportState.scale])

  useEffect(() => {
    centerCanvas(DEFAULT_SCALE)
  }, [layout.center, centerCanvas])

  useEffect(() => {
    dragStateRef.current = dragState
  }, [dragState])

  const zoomAtPoint = useCallback((zoomFactor: number, clientX?: number, clientY?: number) => {
    const viewport = viewportRef.current
    if (!viewport) return

    const rect = viewport.getBoundingClientRect()
    const mouseX = (clientX ?? rect.left + rect.width / 2) - rect.left
    const mouseY = (clientY ?? rect.top + rect.height / 2) - rect.top

    setViewportState((current) => computeZoomViewport(current, mouseX, mouseY, zoomFactor))
  }, [])

  const fitToBranch = useCallback((branchId: string) => {
    const viewport = viewportRef.current
    const bounds = layout.subtreeBounds.get(branchId) ?? layout.branchBounds.get(branchId)
    if (!viewport || !bounds) return

    const contentWidth = bounds.maxX - bounds.minX
    const contentHeight = bounds.maxY - bounds.minY
    const padding = 180
    const fitScale = Math.min(
      MAX_SCALE,
      Math.max(
        MIN_SCALE,
        Math.min(
          (viewport.clientWidth - padding) / Math.max(contentWidth, 1),
          (viewport.clientHeight - padding) / Math.max(contentHeight, 1)
        )
      )
    )

    const centerX = bounds.minX + contentWidth / 2
    const centerY = bounds.minY + contentHeight / 2

    setViewportState({
      scale: fitScale,
      offsetX: viewport.clientWidth / 2 - centerX * fitScale,
      offsetY: viewport.clientHeight / 2 - centerY * fitScale
    })
  }, [layout.branchBounds, layout.subtreeBounds])

  useEffect(() => {
    if (!focusedRootId) {
      centerCanvas(DEFAULT_SCALE)
      return
    }
    fitToBranch(focusedRootId)
  }, [centerCanvas, fitToBranch, focusedRootId])

  const onWheel = useCallback((event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    const direction = Math.sign(event.deltaY) || 1
    const intensity = Math.min(0.24, Math.abs(event.deltaY) * 0.0015)
    const zoomFactor = direction > 0 ? 1 - intensity : 1 + intensity
    zoomAtPoint(zoomFactor, event.clientX, event.clientY)
  }, [zoomAtPoint])

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !viewportRef.current) return
    if ('setPointerCapture' in event.currentTarget) {
      event.currentTarget.setPointerCapture(event.pointerId)
    }
    setDragState({
      isDragging: true,
      startClientX: event.clientX,
      startClientY: event.clientY,
      originOffsetX: viewportState.offsetX,
      originOffsetY: viewportState.offsetY
    })
  }, [viewportState.offsetX, viewportState.offsetY])

  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const activeDrag = dragStateRef.current
    if (!activeDrag || !activeDrag.isDragging) return
    const deltaX = event.clientX - activeDrag.startClientX
    const deltaY = event.clientY - activeDrag.startClientY
    setViewportState((current) => ({
      ...current,
      offsetX: activeDrag.originOffsetX + deltaX,
      offsetY: activeDrag.originOffsetY + deltaY
    }))
  }, [])

  const onPointerUp = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if ('hasPointerCapture' in event.currentTarget && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    setDragState(null)
  }, [])

  const transformedStyle = useMemo(() => ({
    width: layout.canvasSize,
    height: layout.canvasSize,
    transform: `translate(${viewportState.offsetX}px, ${viewportState.offsetY}px) scale(${viewportState.scale})`,
    transformOrigin: '0 0'
  }), [layout.canvasSize, viewportState.offsetX, viewportState.offsetY, viewportState.scale])

  return (
    <div className="mindmap-experience">
      <div className="mindmap-stage">
        <div className="mindmap-controls modern">
          <button type="button" onClick={() => zoomAtPoint(1.12)}>+</button>
          <button type="button" onClick={() => zoomAtPoint(0.88)}>-</button>
          <button type="button" onClick={() => centerCanvas(DEFAULT_SCALE)}>Reset view</button>
          <button type="button" onClick={onResetFocus} disabled={!focusedRootId}>Mapa completo</button>
          {detailPanelNode ? <button type="button" onClick={() => onFocusRoot(detailPanelNode.id)}>Focar ramo</button> : null}
          <small>Zoom {Math.round(viewportState.scale * 100)}% · Drag para pan · Scroll para zoom</small>
        </div>

        <div
          ref={viewportRef}
          className={`mindmap-viewport fullscreen ${dragState?.isDragging ? 'is-dragging' : ''}`}
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div className="mindmap-canvas" style={transformedStyle}>
            <svg width={layout.canvasSize} height={layout.canvasSize} className="mindmap-links" aria-hidden>
              {layout.clusters.map((cluster) => {
                const color = branchColorById.get(cluster.branchId) ?? '#94a3b8'
                const faded = focusedRootId && cluster.branchId !== focusedRootId
                return (
                  <path
                    key={`cluster-${cluster.branchId}`}
                    d={clusterArcPath(cluster, layout.center)}
                    className="mindmap-cluster-bg"
                    fill={`${color}${faded ? '0a' : '16'}`}
                    stroke={`${color}${faded ? '30' : '55'}`}
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
              <strong>Mapa Mental AprovAI</strong>
              <small>Raiz conceitual. Navegue por zoom/pan para revisão progressiva.</small>
            </div>

            {layout.nodes.map((entry) => {
              const status = performanceByNode.get(entry.node.id) ?? 'sem-dados'
              const deemphasized = focusedRootId !== null && entry.branchId !== focusedRootId
              return (
                <MindMapNode
                  key={entry.node.id}
                  entry={entry}
                  status={status}
                  reviewed={reviewedNodeIds.has(entry.node.id)}
                  learning={nodeLearningById[entry.node.id]}
                  branchColor={branchColorById.get(entry.branchId) ?? '#64748b'}
                  hovered={hoveredNodeId === entry.node.id}
                  selected={selectedNodeId === entry.node.id}
                  deemphasized={deemphasized}
                  expanded={expandedNodeIds.has(entry.node.id)}
                  hasChildren={entry.node.childrenIds.length > 0}
                  onHover={onHoverNode}
                  onSelect={onSelectNode}
                  onToggleExpand={onToggleExpandNode}
                  onDetail={onDetailNode}
                />
              )
            })}
          </div>
        </div>
      </div>

      <NodeExpandedPanel
        node={detailPanelNode}
        learning={detailPanelNode ? nodeLearningById[detailPanelNode.id] : undefined}
        status={detailPanelNode ? performanceByNode.get(detailPanelNode.id) ?? 'sem-dados' : 'sem-dados'}
        collisions={layout.collisionReport}
        onOpenTopic={onOpenTopic}
        onTrainNode={onTrainNode}
        onFocusBranch={onFocusRoot}
      />
    </div>
  )
})

MindMapCanvas.displayName = 'MindMapCanvas'
