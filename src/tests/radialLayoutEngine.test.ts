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
  b: { x: number; y: number; width: number; height: number }
) => {
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

describe('treeLayoutEngine compatibility wrapper', () => {
  it('renderiza layout hierárquico por profundidade crescente', () => {
    const root = makeNode('root', null, ['a', 'b'])
    const a = makeNode('a', 'root', ['a-1'])
    const b = makeNode('b', 'root')
    const a1 = makeNode('a-1', 'a')

    const visible = [root, a, b, a1].map((node) => ({
      node,
      depth: node.parentId === null ? 1 : node.parentId === 'root' ? 2 : 3,
      branchId: 'root'
    }))

    const layout = buildRadialLayout(visible)
    const rootNode = layout.map.get('root')!
    const childNode = layout.map.get('a')!
    const grandChildNode = layout.map.get('a-1')!

    expect(rootNode.x).toBeLessThan(childNode.x)
    expect(childNode.x).toBeLessThan(grandChildNode.x)
  })

  it('não cria sobreposição no cenário denso do layout em árvore', () => {
    const root = makeNode('root', null, Array.from({ length: 10 }, (_, index) => `c-${index}`))
    const children = root.childrenIds.map((id) => makeNode(id, 'root'))

    const visible = [root, ...children].map((node) => ({
      node,
      depth: node.parentId ? 2 : 1,
      branchId: 'root'
    }))

    const layout = buildRadialLayout(visible)

    let collisions = 0
    for (let i = 0; i < layout.nodes.length; i += 1) {
      for (let j = i + 1; j < layout.nodes.length; j += 1) {
        if (intersects(layout.nodes[i], layout.nodes[j])) collisions += 1
      }
    }

    expect(layout.collisionReport.remainingCollisions).toBe(0)
    expect(collisions).toBe(0)
    expect(layout.edges.length).toBe(children.length)
  })
})
