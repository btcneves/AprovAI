import type { StudyLayoutNode, StudyLayoutResult, StudyVisibleNode } from '@/features/mindmap/layout/StudyMindMapLayout'
import { buildStudyMindMapLayout } from '@/features/mindmap/layout/StudyMindMapLayout'

export type LayoutNode = StudyLayoutNode

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

export type CollisionReport = StudyLayoutResult['collisionReport']

export type LayoutResult = StudyLayoutResult & { clusters: LayoutCluster[] }

export const buildRadialLayout = (visibleNodes: StudyVisibleNode[]): LayoutResult => {
  const study = buildStudyMindMapLayout(visibleNodes)
  return {
    ...study,
    clusters: []
  }
}
