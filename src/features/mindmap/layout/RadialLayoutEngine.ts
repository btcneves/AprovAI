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
  collisionReport: CollisionReport
}

export type LayoutConfig = {
  baseRadius?: number
  ringGap?: number
  minNodeArc?: number
  nodePadding?: number
  centerSize?: number
  maxIterations?: number
}

const NODE_WIDTH = 264
const NODE_MIN_HEIGHT = 120
const TAU = Math.PI * 2

const normalizeAngle = (angle: number) => {
  const normalized = angle % TAU
  return normalized >= 0 ? normalized : normalized + TAU
}

const shortestAngularDistance = (from: number, to: number) => {
  const delta = normalizeAngle(to - from)
  return delta > Math.PI ? delta - TAU : delta
}

const estimateNodeHeight = (node: MindMapNodeType, depth: number) => {
  const bullets = [node.summary ?? node.descriptionShort, ...(node.examHighlights ?? []), ...(node.commonMistakes ?? [])]
  const score = Math.min(4, bullets.filter(Boolean).length)
  return NODE_MIN_HEIGHT + score * 14 + Math.min(20, depth * 4)
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

const countCollisions = (nodes: LayoutNode[], padding: number) => {
  let collisions = 0
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      if (intersects(nodes[i], nodes[j], padding)) collisions += 1
    }
  }
  return collisions
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
  const baseRadius = config.baseRadius ?? 220
  const ringGap = Math.max(300, config.ringGap ?? 320)
  const minNodeArc = Math.max(220, config.minNodeArc ?? 240)
  const nodePadding = Math.max(24, config.nodePadding ?? 28)
  const centerSize = config.centerSize ?? 340
  const maxIterations = Math.max(20, config.maxIterations ?? 30)

  const levels = new Map<number, Array<{ node: MindMapNodeType; branchId: string }>>()
  visibleNodes.forEach(({ node, depth, branchId }) => {
    const list = levels.get(depth) ?? []
    list.push({ node, branchId })
    levels.set(depth, list)
  })

  const levelRadius = new Map<number, number>()
  let previousRingRadius = 0

  Array.from(levels.keys()).sort((a, b) => a - b).forEach((depth) => {
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
    const children = childrenByParent.get(node.parentId) ?? []
    children.push(node.id)
    childrenByParent.set(node.parentId, children)
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
    const theta = thetaStart + shortestAngularDistance(thetaStart, thetaEnd) / 2
    const r = levelRadius.get(depth) ?? baseRadius + depth * ringGap

    nodes.push({
      node,
      depth,
      theta,
      r,
      x: r * Math.cos(theta),
      y: r * Math.sin(theta),
      width: NODE_WIDTH,
      height: estimateNodeHeight(node, depth),
      branchId
    })

    const children = childrenByParent.get(nodeId) ?? []
    if (!children.length) return

    const angularSpan = Math.max(0.2, Math.abs(shortestAngularDistance(thetaStart, thetaEnd)))
    const clusterGap = Math.min(0.3, 0.08 + children.length * 0.012)
    const usableSpan = Math.max(0.18, angularSpan - clusterGap * 2)
    const totalWeight = children.reduce((acc, childId) => acc + subtreeWeight(childId), 0) || 1

    let cursor = theta - usableSpan / 2
    children.forEach((childId) => {
      const childWeight = subtreeWeight(childId)
      const childSpan = usableSpan * (childWeight / totalWeight)
      placeNode(childId, cursor, cursor + childSpan)
      cursor += childSpan
    })
  }

  const roots = visibleNodes
    .filter(({ node }) => !node.parentId || !visibleById.has(node.parentId))
    .map(({ node }) => node.id)

  const totalRootWeight = roots.reduce((acc, rootId) => acc + subtreeWeight(rootId), 0) || 1
  let rootCursor = -Math.PI / 2

  roots.forEach((rootId) => {
    const span = TAU * (subtreeWeight(rootId) / totalRootWeight)
    const branchGap = Math.min(0.22, span * 0.1)
    placeNode(rootId, rootCursor + branchGap / 2, rootCursor + span - branchGap / 2)
    rootCursor += span
  })

  const initialCollisions = countCollisions(nodes, nodePadding)

  let passUsed = 0
  for (let pass = 0; pass < maxIterations; pass += 1) {
    passUsed = pass + 1
    let collisionsInPass = 0

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i]
        const b = nodes[j]
        if (!intersects(a, b, nodePadding)) continue
        collisionsInPass += 1

        const sameDepth = a.depth === b.depth
        const sameBranch = a.branchId === b.branchId

        if (sameDepth) {
          const sign = shortestAngularDistance(a.theta, b.theta) >= 0 ? 1 : -1
          const angularPush = (sameBranch ? 0.018 : 0.028) + pass * 0.0012
          a.theta -= angularPush * sign
          b.theta += angularPush * sign
        }

        if (!sameDepth || sameBranch) {
          const deeper = a.depth >= b.depth ? a : b
          deeper.r += 22 + pass * 1.4
        }
      }
    }

    const branchGroups = new Map<string, LayoutNode[]>()
    nodes.forEach((item) => {
      const list = branchGroups.get(item.branchId) ?? []
      list.push(item)
      branchGroups.set(item.branchId, list)
    })

    branchGroups.forEach((branchNodes) => {
      if (branchNodes.length < 3) return
      const meanX = branchNodes.reduce((acc, item) => acc + Math.cos(item.theta), 0) / branchNodes.length
      const meanY = branchNodes.reduce((acc, item) => acc + Math.sin(item.theta), 0) / branchNodes.length
      const anchor = Math.atan2(meanY, meanX)

      branchNodes.forEach((item) => {
        const delta = shortestAngularDistance(anchor, item.theta)
        item.theta = anchor + delta * 0.98
      })
    })

    nodes.forEach((item) => {
      item.x = item.r * Math.cos(item.theta)
      item.y = item.r * Math.sin(item.theta)
    })

    if (collisionsInPass === 0) break
  }

  // fallback definitivo para cenários extremos
  for (let pass = 0; pass < 80; pass += 1) {
    let collisions = 0
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i]
        const b = nodes[j]
        if (!intersects(a, b, nodePadding)) continue
        collisions += 1
        const sign = shortestAngularDistance(a.theta, b.theta) >= 0 ? 1 : -1
        a.theta -= (0.008 + pass * 0.0004) * sign
        b.theta += (0.008 + pass * 0.0004) * sign
        const deeper = a.depth >= b.depth ? a : b
        deeper.r += 18
      }
    }
    nodes.forEach((item) => {
      item.x = item.r * Math.cos(item.theta)
      item.y = item.r * Math.sin(item.theta)
    })
    if (collisions === 0) break
  }

  const remainingCollisions = countCollisions(nodes, nodePadding)
  const maxExtent = nodes.reduce((acc, node) => {
    const extX = Math.abs(node.x) + node.width / 2 + 180
    const extY = Math.abs(node.y) + node.height / 2 + 180
    return Math.max(acc, extX, extY)
  }, centerSize)

  const center = Math.max(900, maxExtent + centerSize / 2)
  nodes.forEach((item) => {
    item.x += center
    item.y += center
  })

  const map = new Map(nodes.map((node) => [node.node.id, node]))

  const edges = nodes
    .filter((entry) => entry.node.parentId && map.has(entry.node.parentId))
    .map((entry) => ({
      id: `${entry.node.parentId}-${entry.node.id}`,
      sourceId: entry.node.parentId as string,
      targetId: entry.node.id
    }))

  const branchBounds = new Map<string, { minX: number; minY: number; maxX: number; maxY: number }>()

  nodes.forEach((entry) => {
    const current = branchBounds.get(entry.branchId)
    const bounds = {
      minX: entry.x - entry.width / 2 - 90,
      minY: entry.y - entry.height / 2 - 90,
      maxX: entry.x + entry.width / 2 + 90,
      maxY: entry.y + entry.height / 2 + 90
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

  const clusters: LayoutCluster[] = Array.from(new Set(nodes.map((node) => node.branchId))).map((branchId) => {
    const branchNodes = nodes.filter((node) => node.branchId === branchId)
    const span = circularSpan(branchNodes.map((node) => node.theta))
    const maxRadius = Math.max(...branchNodes.map((node) => node.r + node.height / 2))

    return {
      branchId,
      startTheta: span.start,
      endTheta: span.end,
      innerRadius: Math.max(170, baseRadius - 30),
      outerRadius: maxRadius + 180
    }
  })

  return {
    nodes,
    edges,
    clusters,
    map,
    canvasSize: center * 2,
    center,
    branchBounds,
    collisionReport: {
      initialCollisions,
      resolvedCollisions: Math.max(0, initialCollisions - remainingCollisions),
      remainingCollisions,
      passes: passUsed
    }
  }
}
