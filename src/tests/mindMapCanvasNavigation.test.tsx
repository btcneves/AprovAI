import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { MindMapNode } from '@/domain/types'
import { MindMapCanvas } from '@/features/mindmap/components/MindMapCanvas'
import type { LayoutResult } from '@/features/mindmap/layout/RadialLayoutEngine'

const baseNode: MindMapNode = {
  id: 'n1',
  title: 'Nó',
  discipline: 'especificos',
  descriptionShort: 'Resumo',
  descriptionDetailed: 'Detalhe',
  parentId: null,
  childrenIds: [],
  tags: [],
  editalReference: 'edital',
  relatedQuestionIds: [],
  priority: 'media'
}

const baseLayout = (): LayoutResult => ({
  nodes: [
    {
      node: baseNode,
      depth: 1,
      branchId: 'n1',
      x: 420,
      y: 260,
      width: 280,
      height: 138
    }
  ],
  edges: [],
  clusters: [],
  map: new Map(),
  canvasSize: 1000,
  center: 0,
  branchBounds: new Map(),
  subtreeBounds: new Map(),
  collisionReport: { initialCollisions: 0, resolvedCollisions: 0, remainingCollisions: 0, passes: 1 }
})

describe('MindMapCanvas study tree', () => {
  it('renderiza núcleo central, nó e painel de detalhe', () => {
    render(
      <MindMapCanvas
        layout={baseLayout()}
        branchColorById={new Map([['n1', '#2563eb']])}
        performanceByNode={new Map([['n1', 'sem-dados']])}
        reviewedNodeIds={new Set()}
        nodeLearningById={{}}
        focusedRootId={null}
        selectedNodeId={null}
        detailPanelNode={baseNode}
        expandedNodeIds={new Set()}
        onSelectNode={() => {}}
        onToggleExpandNode={() => {}}
        onDetailNode={() => {}}
        onOpenTopic={() => {}}
        onTrainNode={() => {}}
        onResetFocus={() => {}}
        onFocusRoot={() => {}}
      />
    )

    expect(screen.getByText('Mapa Mental AprovAI')).toBeTruthy()
    expect(screen.getAllByText('Nó').length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'Treinar' })).toBeTruthy()
  })
})
