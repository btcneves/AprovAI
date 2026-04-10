import type { MindMapNode as MindMapNodeType } from '@/domain/types'

export type TreeLayoutNode = {
  node: MindMapNodeType
  depth: number
  branchId: string
  x: number
  y: number
  width: number
  height: number
}

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

type VisibleNode = { node: MindMapNodeType; depth: number; branchId: string }

type Config = {
  columnWidth?: number
  rowHeight?: number
  nodeWidth?: number
  nodeHeight?: number
  marginX?: number
  marginY?: number
}

const intersects = (a: TreeLayoutNode, b: TreeLayoutNode) => {
  const ax1 = a.x - a.width / 2
  const ax2 = a.x + a.width / 2
  const ay1 = a.y - a.height / 2
  const ay2 = a.y + a.height / 2

  const bx1 = b.x - b.width / 2
  const bx2 = b.x + b.width / 2
  const by1 = b.y - b.height / 2
  const by2 = b.y + b.height / 2

  return ax1 < bx2 && ax2 > bx1 && ay1 < by2 && ay2 > by1
}

export const buildTreeLayout = (visibleNodes: VisibleNode[], config: Config = {}): TreeLayoutResult => {
  const columnWidth = config.columnWidth ?? 340
  const rowHeight = config.rowHeight ?? 186
  const nodeWidth = config.nodeWidth ?? 280
  const nodeHeight = config.nodeHeight ?? 138
  const marginX = config.marginX ?? 110
  const marginY = config.marginY ?? 80

  const nodesByDepth = new Map<number, VisibleNode[]>()
  visibleNodes.forEach((entry) => {
    const list = nodesByDepth.get(entry.depth) ?? []
    list.push(entry)
    nodesByDepth.set(entry.depth, list)
  })

  const sortedDepths = Array.from(nodesByDepth.keys()).sort((a, b) => a - b)
  const maxNodesInLevel = Math.max(1, ...Array.from(nodesByDepth.values()).map((list) => list.length))
  const canvasWidth = marginX * 2 + (sortedDepths.length || 1) * columnWidth
  const canvasHeight = marginY * 2 + maxNodesInLevel * rowHeight

  const nodes: TreeLayoutNode[] = []

  sortedDepths.forEach((depth, depthIndex) => {
    const levelNodes = [...(nodesByDepth.get(depth) ?? [])].sort((a, b) => a.node.title.localeCompare(b.node.title, 'pt-BR'))
    const usedHeight = levelNodes.length * rowHeight
    const startY = marginY + (canvasHeight - marginY * 2 - usedHeight) / 2 + rowHeight / 2

    levelNodes.forEach((entry, index) => {
      nodes.push({
        node: entry.node,
        depth: entry.depth,
        branchId: entry.branchId,
        x: marginX + depthIndex * columnWidth + columnWidth / 2,
        y: startY + index * rowHeight,
        width: nodeWidth,
        height: nodeHeight
      })
    })
  })

  const map = new Map(nodes.map((node) => [node.node.id, node]))
  const edges = nodes
    .filter((node) => node.node.parentId && map.has(node.node.parentId))
    .map((node) => ({
      id: `${node.node.parentId}-${node.node.id}`,
      sourceId: node.node.parentId as string,
      targetId: node.node.id
    }))

  let collisionCount = 0
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      if (intersects(nodes[i], nodes[j])) collisionCount += 1
    }
  }

  return { nodes, edges, map, canvasWidth, canvasHeight, collisionCount }
}
