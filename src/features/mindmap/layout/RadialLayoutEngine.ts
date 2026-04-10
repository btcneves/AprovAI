import type { MindMapNode as MindMapNodeType } from '@/domain/types'
import { buildTreeLayout } from '@/features/mindmap/layout/TreeLayoutEngine'

export type LayoutNode = {
  node: MindMapNodeType
  depth: number
  branchId: string
  x: number
  y: number
  width: number
  height: number
}

export type LayoutEdge = {
  id: string
  sourceId: string
  targetId: string
}

export type LayoutCluster = {
  branchId: string
  startTheta: number
  endTheta: number
  innerRadius: number
  outerRadius: number
}

export type CollisionReport = {
  initialCollisions: number
  resolvedCollisions: number
  remainingCollisions: number
  passes: number
}

export type LayoutResult = {
  nodes: LayoutNode[]
  edges: LayoutEdge[]
  clusters: LayoutCluster[]
  map: Map<string, LayoutNode>
  canvasSize: number
  center: number
  branchBounds: Map<string, { minX: number; minY: number; maxX: number; maxY: number }>
  subtreeBounds: Map<string, { minX: number; minY: number; maxX: number; maxY: number }>
  collisionReport: CollisionReport
}

export type LayoutConfig = {
  columnWidth?: number
  rowHeight?: number
  nodeWidth?: number
  nodeHeight?: number
  marginX?: number
  marginY?: number
}

export const buildRadialLayout = (
  visibleNodes: Array<{ node: MindMapNodeType; depth: number; branchId: string }>,
  config: LayoutConfig = {}
): LayoutResult => {
  const tree = buildTreeLayout(visibleNodes, config)

  const canvasSize = Math.max(tree.canvasWidth, tree.canvasHeight)
  const branchBounds = new Map<string, { minX: number; minY: number; maxX: number; maxY: number }>()

  tree.nodes.forEach((entry) => {
    const current = branchBounds.get(entry.branchId)
    const bounds = {
      minX: entry.x - entry.width / 2 - 36,
      minY: entry.y - entry.height / 2 - 36,
      maxX: entry.x + entry.width / 2 + 36,
      maxY: entry.y + entry.height / 2 + 36
    }

    if (!current) {
      branchBounds.set(entry.branchId, bounds)
      return
    }

    branchBounds.set(entry.branchId, {
      minX: Math.min(current.minX, bounds.minX),
      minY: Math.min(current.minY, bounds.minY),
      maxX: Math.max(current.maxX, bounds.maxX),
      maxY: Math.max(current.maxY, bounds.maxY)
    })
  })

  const subtreeBounds = new Map<string, { minX: number; minY: number; maxX: number; maxY: number }>()
  tree.nodes.forEach((entry) => {
    subtreeBounds.set(entry.node.id, {
      minX: entry.x - entry.width / 2,
      minY: entry.y - entry.height / 2,
      maxX: entry.x + entry.width / 2,
      maxY: entry.y + entry.height / 2
    })
  })

  return {
    nodes: tree.nodes,
    edges: tree.edges,
    clusters: [],
    map: tree.map,
    canvasSize,
    center: 0,
    branchBounds,
    subtreeBounds,
    collisionReport: {
      initialCollisions: tree.collisionCount,
      resolvedCollisions: 0,
      remainingCollisions: tree.collisionCount,
      passes: 1
    }
  }
}
