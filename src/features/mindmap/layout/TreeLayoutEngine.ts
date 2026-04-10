import type { StudyLayoutNode, StudyVisibleNode } from '@/features/mindmap/layout/StudyMindMapLayout'
import { buildStudyMindMapLayout } from '@/features/mindmap/layout/StudyMindMapLayout'

export type TreeLayoutNode = StudyLayoutNode

export type TreeLayoutEdge = {
  id: string
  sourceId: string
  targetId: string
}

export type TreeLayoutResult = {
  nodes: TreeLayoutNode[]
  edges: TreeLayoutEdge[]
  map: Map<string, TreeLayoutNode>
  canvasWidth: number
  canvasHeight: number
  collisionCount: number
}

export const buildTreeLayout = (visibleNodes: StudyVisibleNode[]): TreeLayoutResult => {
  const layout = buildStudyMindMapLayout(visibleNodes)
  return {
    nodes: layout.nodes,
    edges: layout.edges,
    map: layout.map,
    canvasWidth: layout.canvasSize,
    canvasHeight: layout.canvasSize,
    collisionCount: layout.collisionReport.remainingCollisions
  }
}
