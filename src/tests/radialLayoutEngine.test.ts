import { describe, expect, it } from 'vitest'
import type { MindMapNode } from '@/domain/types'
import { buildRadialLayout } from '@/features/mindmap/layout/RadialLayoutEngine'

const makeNode = (id: string, parentId: string | null, childrenIds: string[] = []): MindMapNode => ({
  id,
  title: `Node ${id}`,
  discipline: 'especificos',
  descriptionShort: 'Resumo rápido',
  descriptionDetailed: 'Descrição longa',
  parentId,
  childrenIds,
  tags: [],
  editalReference: '1.1',
  relatedQuestionIds: [],
  priority: 'media'
})

const intersects = (
  a: { x: number; y: number; width: number; height: number },
  b: { x: number; y: number; width: number; height: number },
  padding: number
) => {
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

describe('radialLayoutEngine', () => {
  it('distribui maior faixa angular para ramos com mais descendentes', () => {
    const rootA = makeNode('root-a', null, ['a-1', 'a-2', 'a-3', 'a-4'])
    const rootB = makeNode('root-b', null, ['b-1'])
    const children = [
      makeNode('a-1', 'root-a'),
      makeNode('a-2', 'root-a'),
      makeNode('a-3', 'root-a'),
      makeNode('a-4', 'root-a'),
      makeNode('b-1', 'root-b')
    ]

    const visible = [rootA, rootB, ...children].map((node) => ({
      node,
      depth: node.parentId ? 2 : 1,
      branchId: node.parentId ? (node.parentId === 'root-a' ? 'root-a' : 'root-b') : node.id
    }))

    const layout = buildRadialLayout(visible)
    const clusters = new Map(layout.clusters.map((cluster) => [cluster.branchId, cluster]))
    const clusterA = clusters.get('root-a')
    const clusterB = clusters.get('root-b')

    expect(clusterA).toBeDefined()
    expect(clusterB).toBeDefined()

    const span = (start: number, end: number) => {
      const delta = (end - start + Math.PI * 2) % (Math.PI * 2)
      return delta === 0 ? Math.PI * 2 : delta
    }

    expect(span(clusterA!.startTheta, clusterA!.endTheta)).toBeGreaterThan(span(clusterB!.startTheta, clusterB!.endTheta))
  })

  it('mantém legibilidade em cenário grande sem sobreposição crítica', () => {
    const roots = Array.from({ length: 5 }, (_, index) => makeNode(`r-${index}`, null, Array.from({ length: 10 }, (_, c) => `r-${index}-c-${c}`)))
    const children = roots.flatMap((root) =>
      root.childrenIds.map((childId) => makeNode(childId, root.id, Array.from({ length: 2 }, (_, i) => `${childId}-d-${i}`)))
    )
    const leaves = children.flatMap((child) => child.childrenIds.map((leafId) => makeNode(leafId, child.id)))

    const all = [...roots, ...children, ...leaves]
    const byId = new Map(all.map((node) => [node.id, node]))

    const depthOf = (node: MindMapNode): number => {
      let depth = 1
      let current = node
      while (current.parentId) {
        depth += 1
        current = byId.get(current.parentId) as MindMapNode
      }
      return depth
    }

    const visible = all.map((node) => ({
      node,
      depth: depthOf(node),
      branchId: node.parentId ? node.parentId.split('-c-')[0] : node.id
    }))

    const layout = buildRadialLayout(visible, { maxIterations: 24 })

    let collisions = 0
    for (let i = 0; i < layout.nodes.length; i += 1) {
      for (let j = i + 1; j < layout.nodes.length; j += 1) {
        if (intersects(layout.nodes[i], layout.nodes[j], 10)) collisions += 1
      }
    }

    expect(layout.nodes.length).toBe(all.length)
    expect(collisions).toBe(0)
  })
})
