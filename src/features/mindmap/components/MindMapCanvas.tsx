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
  focusedBranchId: string | null
  selectedNode: MindMapNodeType | null
  hoveredNodeId: string | null
  onHoverNode: (id: string | null) => void
  onExpandNode: (id: string) => void
  onOpenTopic: (id: string) => void
  onTrainNode: (id: string) => void
  onResetFocus: () => void
  onFocusBranch: (id: string) => void
}

type ViewportState = { offsetX: number; offsetY: number; scale: number }

const MIN_SCALE = 0.4
const MAX_SCALE = 2.4
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
  focusedBranchId,
  selectedNode,
  hoveredNodeId,
  onHoverNode,
  onExpandNode,
  onOpenTopic,
  onTrainNode,
  onResetFocus,
  onFocusBranch
}: Props) => {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [dragging, setDragging] = useState(false)
  const [viewportState, setViewportState] = useState<ViewportState>({ offsetX: 0, offsetY: 0, scale: 1 })
  const dragStartRef = useRef<{ x: number; y: number; offsetX: number; offsetY: number } | null>(null)

  const activeId = hoveredNodeId ?? selectedNode?.id ?? null

  const centerCanvas = useCallback((scale = viewportState.scale) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const targetOffsetX = viewport.clientWidth / 2 - layout.center * scale
    const targetOffsetY = viewport.clientHeight / 2 - layout.center * scale
    setViewportState({ offsetX: targetOffsetX, offsetY: targetOffsetY, scale })
  }, [layout.center, viewportState.scale])

  useEffect(() => {
    centerCanvas(0.82)
  }, [layout.center, centerCanvas])

  const zoomAtPoint = useCallback((nextScale: number, clientX?: number, clientY?: number) => {
    const viewport = viewportRef.current
    if (!viewport) return

    const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, nextScale))
    if (Math.abs(clamped - viewportState.scale) < 0.0001) return

    const rect = viewport.getBoundingClientRect()
    const px = (clientX ?? rect.left + rect.width / 2) - rect.left
    const py = (clientY ?? rect.top + rect.height / 2) - rect.top

    const worldX = (px - viewportState.offsetX) / viewportState.scale
    const worldY = (py - viewportState.offsetY) / viewportState.scale

    setViewportState({
      scale: clamped,
      offsetX: px - worldX * clamped,
      offsetY: py - worldY * clamped
    })
  }, [viewportState.offsetX, viewportState.offsetY, viewportState.scale])

  const fitToBranch = useCallback((branchId: string) => {
    const viewport = viewportRef.current
    const bounds = layout.branchBounds.get(branchId)
    if (!viewport || !bounds) return

    const contentWidth = bounds.maxX - bounds.minX
    const contentHeight = bounds.maxY - bounds.minY
    const padding = 120
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
  }, [layout.branchBounds])

  useEffect(() => {
    if (!focusedBranchId) {
      centerCanvas(0.82)
      return
    }
    fitToBranch(focusedBranchId)
  }, [centerCanvas, fitToBranch, focusedBranchId])

  const onWheel = useCallback((event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    const ratio = event.deltaY > 0 ? 0.92 : 1.08
    zoomAtPoint(viewportState.scale * ratio, event.clientX, event.clientY)
  }, [viewportState.scale, zoomAtPoint])

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return
    setDragging(true)
    dragStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      offsetX: viewportState.offsetX,
      offsetY: viewportState.offsetY
    }
  }, [viewportState.offsetX, viewportState.offsetY])

  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) return
    const deltaX = event.clientX - dragStartRef.current.x
    const deltaY = event.clientY - dragStartRef.current.y
    setViewportState((current) => ({ ...current, offsetX: dragStartRef.current!.offsetX + deltaX, offsetY: dragStartRef.current!.offsetY + deltaY }))
  }, [])

  const onPointerUp = useCallback(() => {
    dragStartRef.current = null
    setDragging(false)
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
          <button type="button" onClick={() => zoomAtPoint(viewportState.scale * 1.14)}>+</button>
          <button type="button" onClick={() => zoomAtPoint(viewportState.scale * 0.88)}>-</button>
          <button type="button" onClick={() => centerCanvas(0.82)}>Reset view</button>
          <button type="button" onClick={onResetFocus} disabled={!focusedBranchId}>Mapa completo</button>
          {selectedNode ? <button type="button" onClick={() => onFocusBranch(selectedNode.id)}>Focar ramo</button> : null}
          <small>Zoom {Math.round(viewportState.scale * 100)}% · Drag para pan · Scroll para zoom</small>
        </div>

        <div
          ref={viewportRef}
          className={`mindmap-viewport fullscreen ${dragging ? 'is-dragging' : ''}`}
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
                const faded = focusedBranchId && cluster.branchId !== focusedBranchId
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
              const deemphasized = focusedBranchId !== null && entry.branchId !== focusedBranchId
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
                  deemphasized={deemphasized}
                  onHover={onHoverNode}
                  onExpand={onExpandNode}
                />
              )
            })}
          </div>
        </div>
      </div>

      <NodeExpandedPanel
        node={selectedNode}
        learning={selectedNode ? nodeLearningById[selectedNode.id] : undefined}
        status={selectedNode ? performanceByNode.get(selectedNode.id) ?? 'sem-dados' : 'sem-dados'}
        collisions={layout.collisionReport}
        onOpenTopic={onOpenTopic}
        onTrainNode={onTrainNode}
        onFocusBranch={onFocusBranch}
      />
    </div>
  )
})

MindMapCanvas.displayName = 'MindMapCanvas'
