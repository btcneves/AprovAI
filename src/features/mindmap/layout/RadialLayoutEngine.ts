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

export type LayoutCluster = {
  branchId: string
  startTheta: number
  endTheta: number
  innerRadius: number
  outerRadius: number
}

export type LayoutResult = {
  nodes: LayoutNode[]
  edges: LayoutEdge[]
  clusters: LayoutCluster[]
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
  maxIterations?: number
}

const NODE_WIDTH = 260
const NODE_MIN_HEIGHT = 122
const TAU = Math.PI * 2

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

const normalizeAngle = (angle: number) => {
  const normalized = angle % TAU
  return normalized >= 0 ? normalized : normalized + TAU
}

const shortestAngularDistance = (from: number, to: number) => {
  const delta = normalizeAngle(to - from)
  return delta > Math.PI ? delta - TAU : delta
}

const circularSpan = (angles: number[]) => {
  if (!angles.length) return { start: 0, end: TAU }
  if (angles.length === 1) {
    const center = normalizeAngle(angles[0])
    return { start: normalizeAngle(center - 0.24), end: normalizeAngle(center + 0.24) }
  }

  const sorted = angles.map(normalizeAngle).sort((a, b) => a - b)
  let largestGap = -1
  let largestGapIndex = 0

  for (let index = 0; index < sorted.length; index += 1) {
    const current = sorted[index]
    const next = sorted[(index + 1) % sorted.length]
    const gap = index === sorted.length - 1 ? TAU - current + next : next - current
    if (gap > largestGap) {
      largestGap = gap
      largestGapIndex = index
    }
  }

  return {
    start: sorted[(largestGapIndex + 1) % sorted.length],
    end: sorted[largestGapIndex]
  }
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
  const maxIterations = Math.max(12, config.maxIterations ?? 20)

  const levels = new Map<number, Array<{ node: MindMapNodeType; branchId: string }>>()
  visibleNodes.forEach(({ node, depth, branchId }) => {
    const list = levels.get(depth) ?? []
    list.push({ node, branchId })
    levels.set(depth, list)
  })

  const levelRadius = new Map<number, number>()
  let previousRingRadius = 0

  Array.from(levels.keys())
    .sort((a, b) => a - b)
    .forEach((depth) => {
      const count = Math.max(1, levels.get(depth)?.length ?? 1)
      const rByDepth = baseRadius + (depth - 1) * ringGap
      const rByDensity = (count * minNodeArc) / TAU
      const chosen = Math.max(rByDepth, rByDensity, previousRingRadius + ringGap)
      levelRadius.set(depth, chosen)
      previousRingRadius = chosen
    })

  const visibleById = new Map(visibleNodes.map(({ node, depth, branchId }) => [node.id, { node, depth, branchId }]))
  const childrenByParent = new Map<string, string[]>()

  visibleNodes.forEach(({ node }) => {
    if (!node.parentId || !visibleById.has(node.parentId)) return
    const list = childrenByParent.get(node.parentId) ?? []
    list.push(node.id)
    childrenByParent.set(node.parentId, list)
  })

  const subtreeMemo = new Map<string, number>()
  const subtreeWeight = (nodeId: string): number => {
    if (subtreeMemo.has(nodeId)) return subtreeMemo.get(nodeId) as number
    const children = childrenByParent.get(nodeId) ?? []
    const descendants = children.reduce((acc, childId) => acc + subtreeWeight(childId), 0)
    const weight = 1 + descendants
    subtreeMemo.set(nodeId, weight)
    return weight
  }

  const nodes: LayoutNode[] = []
  const placeNode = (nodeId: string, thetaStart: number, thetaEnd: number) => {
    const entry = visibleById.get(nodeId)
    if (!entry) return

    const { node, depth, branchId } = entry
    const radius = levelRadius.get(depth) ?? baseRadius + depth * ringGap
    const theta = thetaStart + shortestAngularDistance(thetaStart, thetaEnd) / 2
    nodes.push({
      node,
      depth,
      theta,
      r: radius,
      x: radius * Math.cos(theta),
      y: radius * Math.sin(theta),
      width: NODE_WIDTH,
      height: estimateNodeHeight(node, depth),
      branchId
    })

    const children = childrenByParent.get(nodeId) ?? []
    if (!children.length) return

    const span = Math.max(0.24, Math.abs(shortestAngularDistance(thetaStart, thetaEnd)))
    const dynamicPadding = Math.min(0.28, 0.06 + children.length * 0.01)
    const usableSpan = Math.max(0.16, span - dynamicPadding * 2)
    const totalWeight = children.reduce((acc, childId) => acc + subtreeWeight(childId), 0) || 1

    let cursor = theta - usableSpan / 2
    children.forEach((childId) => {
      const childSpan = usableSpan * (subtreeWeight(childId) / totalWeight)
      placeNode(childId, cursor, cursor + childSpan)
      cursor += childSpan
    })
  }

  const roots = visibleNodes
    .filter(({ node }) => !node.parentId || !visibleById.has(node.parentId))
    .map(({ node }) => node.id)

  const rootWeight = roots.reduce((acc, rootId) => acc + subtreeWeight(rootId), 0) || 1
  let rootCursor = -Math.PI / 2
  roots.forEach((rootId) => {
    const span = TAU * (subtreeWeight(rootId) / rootWeight)
    const branchGap = Math.min(0.2, span * 0.12)
    placeNode(rootId, rootCursor + branchGap / 2, rootCursor + span - branchGap / 2)
    rootCursor += span
  })

  for (let pass = 0; pass < maxIterations; pass += 1) {
    let collisions = 0

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i]
        const b = nodes[j]
        if (!intersects(a, b, nodePadding)) continue

        collisions += 1
        if (a.depth === b.depth) {
          const sign = shortestAngularDistance(a.theta, b.theta) >= 0 ? 1 : -1
          const push = 0.024 + pass * 0.006
          a.theta -= push * sign
          b.theta += push * sign
        } else {
          const deeper = a.depth > b.depth ? a : b
          deeper.r += 16 + pass * 5
        }
      }
    }

    if (collisions > 0) {
      const grouped = new Map<string, LayoutNode[]>()
      nodes.forEach((entry) => {
        const list = grouped.get(entry.branchId) ?? []
        list.push(entry)
        grouped.set(entry.branchId, list)
      })

      const compression = Math.max(0.84, 1 - pass * 0.01)
      grouped.forEach((branchNodes) => {
        const meanX = branchNodes.reduce((acc, entry) => acc + Math.cos(entry.theta), 0) / branchNodes.length
        const meanY = branchNodes.reduce((acc, entry) => acc + Math.sin(entry.theta), 0) / branchNodes.length
        const anchor = Math.atan2(meanY, meanX)

        branchNodes.forEach((entry) => {
          const delta = shortestAngularDistance(anchor, entry.theta)
          entry.theta = anchor + delta * compression
        })
      })
    }

    nodes.forEach((entry) => {
      entry.x = entry.r * Math.cos(entry.theta)
      entry.y = entry.r * Math.sin(entry.theta)
    })

    if (collisions === 0) break

    if (pass === maxIterations - 1) {
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i]
          const b = nodes[j]
          if (!intersects(a, b, nodePadding)) continue
          const target = a.depth >= b.depth ? a : b
          target.r += 140
        }
      }

      nodes.forEach((entry) => {
        entry.x = entry.r * Math.cos(entry.theta)
        entry.y = entry.r * Math.sin(entry.theta)
      })
    }
  }

  for (let pass = 0; pass < 60; pass += 1) {
    let collisions = 0
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i]
        const b = nodes[j]
        if (!intersects(a, b, nodePadding)) continue
        collisions += 1

        const distance = shortestAngularDistance(a.theta, b.theta)
        const sign = distance >= 0 ? 1 : -1
        const anglePush = 0.01 + pass * 0.0008
        a.theta -= anglePush * sign
        b.theta += anglePush * sign
        a.r += 18
        b.r += 18
      }
    }

    nodes.forEach((entry) => {
      entry.x = entry.r * Math.cos(entry.theta)
      entry.y = entry.r * Math.sin(entry.theta)
    })

    if (collisions === 0) break
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
  const clusters: LayoutCluster[] = Array.from(new Set(nodes.map((entry) => entry.branchId))).map((branchId) => {
    const branchNodes = nodes.filter((entry) => entry.branchId === branchId)
    const span = circularSpan(branchNodes.map((entry) => entry.theta))
    const maxRadius = Math.max(...branchNodes.map((entry) => entry.r + entry.height / 2))

    return {
      branchId,
      startTheta: span.start,
      endTheta: span.end,
      innerRadius: Math.max(140, baseRadius - 40),
      outerRadius: maxRadius + 150
    }
  })

  return {
    nodes,
    edges,
    clusters,
    map,
    canvasSize: center * 2,
    center
  }
}
