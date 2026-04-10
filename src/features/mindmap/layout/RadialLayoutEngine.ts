import type { MindMapNode as MindMapNodeType } from '@/domain/types'

export type LayoutNode = {
  node: MindMapNodeType
  depth: number
  theta: number
  r: number
  x: number
  y: number
  width: number
  height: number
  branchId: string
}

export type LayoutEdge = {
  id: string
  sourceId: string
  targetId: string
}

export type LayoutResult = {
  nodes: LayoutNode[]
  edges: LayoutEdge[]
  map: Map<string, LayoutNode>
  canvasSize: number
  center: number
}

export type LayoutConfig = {
  baseRadius?: number
  ringGap?: number
  minNodeArc?: number
  nodePadding?: number
  centerSize?: number
}

const NODE_WIDTH = 260
const NODE_MIN_HEIGHT = 122

const estimateNodeHeight = (node: MindMapNodeType, depth: number) => {
  const bulletSource = [
    node.summary ?? node.descriptionShort,
    ...(node.examHighlights ?? []),
    ...(node.commonMistakes ?? [])
  ]
  const bulletCount = Math.min(3, bulletSource.filter(Boolean).length)
  const densityPenalty = Math.min(26, depth * 6)
  return NODE_MIN_HEIGHT + bulletCount * 18 + densityPenalty
}

const intersects = (a: LayoutNode, b: LayoutNode, padding: number) => {
  const ax1 = a.x - a.width / 2 - padding
  const ax2 = a.x + a.width / 2 + padding
  const ay1 = a.y - a.height / 2 - padding
  const ay2 = a.y + a.height / 2 + padding

  const bx1 = b.x - b.width / 2 - padding
  const bx2 = b.x + b.width / 2 + padding
  const by1 = b.y - b.height / 2 - padding
  const by2 = b.y + b.height / 2 + padding

  return ax1 < bx2 && ax2 > bx1 && ay1 < by2 && ay2 > by1
}

export const buildRadialLayout = (
  visibleNodes: Array<{ node: MindMapNodeType; depth: number; branchId: string }>,
  config: LayoutConfig = {}
): LayoutResult => {
  const baseRadius = config.baseRadius ?? 180
  const ringGap = Math.max(220, config.ringGap ?? 220)
  const minNodeArc = Math.max(200, config.minNodeArc ?? 200)
  const nodePadding = Math.max(24, config.nodePadding ?? 24)
  const centerSize = config.centerSize ?? 280

  const levels = new Map<number, Array<{ node: MindMapNodeType; branchId: string }>>()
  visibleNodes.forEach(({ node, depth, branchId }) => {
    const list = levels.get(depth) ?? []
    list.push({ node, branchId })
    levels.set(depth, list)
  })

  const nodes: LayoutNode[] = []
  let previousRingRadius = 0
  const levelRadius = new Map<number, number>()

  Array.from(levels.keys())
    .sort((a, b) => a - b)
    .forEach((depth) => {
      const count = Math.max(1, levels.get(depth)?.length ?? 1)
      const rByDepth = baseRadius + (depth - 1) * ringGap
      const rByDensity = (count * minNodeArc) / (2 * Math.PI)
      const chosen = Math.max(rByDepth, rByDensity, previousRingRadius + ringGap)
      levelRadius.set(depth, chosen)
      previousRingRadius = chosen
    })

  Array.from(levels.entries())
    .sort((a, b) => a[0] - b[0])
    .forEach(([depth, levelNodes]) => {
      const radius = levelRadius.get(depth) ?? baseRadius + depth * ringGap
      const count = Math.max(1, levelNodes.length)
      levelNodes.forEach(({ node, branchId }, index) => {
        const theta = (Math.PI * 2 * index) / count - Math.PI / 2
        const x = radius * Math.cos(theta)
        const y = radius * Math.sin(theta)
        nodes.push({
          node,
          depth,
          theta,
          r: radius,
          x,
          y,
          width: NODE_WIDTH,
          height: estimateNodeHeight(node, depth),
          branchId
        })
      })
    })

  for (let pass = 0; pass < 8; pass += 1) {
    let hasCollision = false

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i]
        const b = nodes[j]
        if (!intersects(a, b, nodePadding)) continue

        hasCollision = true
        if (a.depth === b.depth) {
          const push = 0.05 + pass * 0.012
          a.theta -= push
          b.theta += push
        } else {
          const deeper = a.depth > b.depth ? a : b
          deeper.r += 24 + pass * 8
        }
      }
    }

    nodes.forEach((entry) => {
      entry.x = entry.r * Math.cos(entry.theta)
      entry.y = entry.r * Math.sin(entry.theta)
    })

    if (!hasCollision) break
  }

  const maxExtent = nodes.reduce((acc, item) => {
    const extentX = Math.abs(item.x) + item.width / 2 + 140
    const extentY = Math.abs(item.y) + item.height / 2 + 140
    return Math.max(acc, extentX, extentY)
  }, centerSize)

  const center = Math.max(700, maxExtent + centerSize / 2)
  nodes.forEach((entry) => {
    entry.x += center
    entry.y += center
  })

  const edges = nodes
    .filter((entry) => entry.node.parentId)
    .map((entry) => ({
      id: `${entry.node.parentId}-${entry.node.id}`,
      sourceId: entry.node.parentId as string,
      targetId: entry.node.id
    }))

  const map = new Map(nodes.map((entry) => [entry.node.id, entry]))

  return {
    nodes,
    edges,
    map,
    canvasSize: center * 2,
    center
  }
}
