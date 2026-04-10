import type { MindMapNode } from '@/domain/types'

export type StudyVisibleNode = { node: MindMapNode; depth: number; branchId: string }

export type StudyLayoutNode = {
  node: MindMapNode
  depth: number
  branchId: string
  x: number
  y: number
  width: number
  height: number
}

export type StudyLayoutEdge = {
  id: string
  sourceId: string
  targetId: string
}

export type StudyLayoutResult = {
  nodes: StudyLayoutNode[]
  edges: StudyLayoutEdge[]
  map: Map<string, StudyLayoutNode>
  canvasSize: number
  center: number
  branchBounds: Map<string, { minX: number; minY: number; maxX: number; maxY: number }>
  subtreeBounds: Map<string, { minX: number; minY: number; maxX: number; maxY: number }>
  collisionReport: {
    initialCollisions: number
    resolvedCollisions: number
    remainingCollisions: number
    passes: number
  }
}

const depthSpacing = 320
const verticalGap = 168

const collectTree = (visibleNodes: StudyVisibleNode[]) => {
  const byParent = new Map<string, StudyVisibleNode[]>()
  const byId = new Map(visibleNodes.map((entry) => [entry.node.id, entry]))
  const roots = visibleNodes.filter((entry) => entry.node.parentId === null)

  visibleNodes.forEach((entry) => {
    if (!entry.node.parentId || !byId.has(entry.node.parentId)) return
    const siblings = byParent.get(entry.node.parentId) ?? []
    siblings.push(entry)
    byParent.set(entry.node.parentId, siblings)
  })

  return { roots, byParent }
}

const countLeaves = (nodeId: string, byParent: Map<string, StudyVisibleNode[]>): number => {
  const children = byParent.get(nodeId) ?? []
  if (!children.length) return 1
  return children.reduce((acc, child) => acc + countLeaves(child.node.id, byParent), 0)
}

const createBounds = (entry: StudyLayoutNode) => ({
  minX: entry.x - entry.width / 2,
  minY: entry.y - entry.height / 2,
  maxX: entry.x + entry.width / 2,
  maxY: entry.y + entry.height / 2
})

export const buildStudyMindMapLayout = (visibleNodes: StudyVisibleNode[]): StudyLayoutResult => {
  const center = 2200
  const canvasSize = 4400
  const nodeWidth = 252
  const nodeHeight = 128

  if (!visibleNodes.length) {
    return {
      nodes: [],
      edges: [],
      map: new Map(),
      canvasSize,
      center,
      branchBounds: new Map(),
      subtreeBounds: new Map(),
      collisionReport: { initialCollisions: 0, resolvedCollisions: 0, remainingCollisions: 0, passes: 1 }
    }
  }

  const { roots, byParent } = collectTree(visibleNodes)
  const orderedRoots = [...roots].sort((a, b) => a.node.title.localeCompare(b.node.title, 'pt-BR'))
  const topRoots = orderedRoots.filter((_, index) => index % 2 === 0)
  const bottomRoots = orderedRoots.filter((_, index) => index % 2 === 1)

  const nodes: StudyLayoutNode[] = []

  const placeBand = (bandRoots: StudyVisibleNode[], yStart: number, direction: 1 | -1) => {
    if (!bandRoots.length) return

    const leavesPerRoot = bandRoots.map((root) => countLeaves(root.node.id, byParent))
    const totalLeaves = Math.max(1, leavesPerRoot.reduce((a, b) => a + b, 0))
    let cursor = center - (totalLeaves * verticalGap) / 2

    bandRoots.forEach((root, rootIndex) => {
      const leafCount = leavesPerRoot[rootIndex]
      const yCenter = cursor + (leafCount * verticalGap) / 2

      const walk = (entry: StudyVisibleNode, depth: number, parentY: number) => {
        const children = [...(byParent.get(entry.node.id) ?? [])].sort((a, b) => a.node.title.localeCompare(b.node.title, 'pt-BR'))

        const x = center + depth * depthSpacing
        const y = depth === 1 ? yCenter : parentY

        nodes.push({
          node: entry.node,
          depth,
          branchId: entry.branchId,
          x,
          y,
          width: nodeWidth,
          height: nodeHeight
        })

        if (!children.length) return

        const childrenLeaves = children.map((child) => countLeaves(child.node.id, byParent))
        const childrenTotal = childrenLeaves.reduce((acc, value) => acc + value, 0)
        let childCursor = y - (childrenTotal * verticalGap) / 2

        children.forEach((child, index) => {
          const subtreeHeight = childrenLeaves[index] * verticalGap
          const childY = childCursor + subtreeHeight / 2 + depth * direction * 12
          walk(child, depth + 1, childY)
          childCursor += subtreeHeight
        })
      }

      walk(root, 1, yStart)
      cursor += leafCount * verticalGap
    })
  }

  placeBand(topRoots, center - 260, -1)
  placeBand(bottomRoots, center + 260, 1)

  const map = new Map(nodes.map((node) => [node.node.id, node]))
  const edges = nodes
    .filter((entry) => entry.node.parentId && map.has(entry.node.parentId))
    .map((entry) => ({ id: `${entry.node.parentId}-${entry.node.id}`, sourceId: entry.node.parentId as string, targetId: entry.node.id }))

  const branchBounds = new Map<string, { minX: number; minY: number; maxX: number; maxY: number }>()
  const subtreeBounds = new Map<string, { minX: number; minY: number; maxX: number; maxY: number }>()

  nodes.forEach((entry) => {
    const b = createBounds(entry)
    subtreeBounds.set(entry.node.id, b)
    const current = branchBounds.get(entry.branchId)
    if (!current) {
      branchBounds.set(entry.branchId, b)
      return
    }

    branchBounds.set(entry.branchId, {
      minX: Math.min(current.minX, b.minX),
      minY: Math.min(current.minY, b.minY),
      maxX: Math.max(current.maxX, b.maxX),
      maxY: Math.max(current.maxY, b.maxY)
    })
  })

  return {
    nodes,
    edges,
    map,
    canvasSize,
    center,
    branchBounds,
    subtreeBounds,
    collisionReport: { initialCollisions: 0, resolvedCollisions: 0, remainingCollisions: 0, passes: 1 }
  }
}
