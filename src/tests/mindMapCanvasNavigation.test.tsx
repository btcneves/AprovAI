import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { MindMapNode } from '@/domain/types'
import { computeZoomViewport, MindMapCanvas } from '@/features/mindmap/components/MindMapCanvas'
import type { LayoutResult } from '@/features/mindmap/layout/RadialLayoutEngine'

const parseTransform = (transform: string) => {
  const match = /translate\(([-\d.]+)px, ([-\d.]+)px\) scale\(([-\d.]+)\)/.exec(transform)
  if (!match) {
    throw new Error(`transform inválido: ${transform}`)
  }
  return {
    offsetX: Number(match[1]),
    offsetY: Number(match[2]),
    scale: Number(match[3])
  }
}

const baseLayout = (): LayoutResult => ({
  nodes: [],
  edges: [],
  clusters: [],
  map: new Map(),
  canvasSize: 1200,
  center: 500,
  branchBounds: new Map([['branch-a', { minX: 120, minY: 130, maxX: 540, maxY: 560 }]]),
  collisionReport: { initialCollisions: 0, resolvedCollisions: 0, remainingCollisions: 0, passes: 0 }
})

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

const renderCanvas = () => {
  const result = render(
    <MindMapCanvas
      layout={baseLayout()}
      branchColorById={new Map([['branch-a', '#1d4ed8']])}
      performanceByNode={new Map()}
      reviewedNodeIds={new Set()}
      nodeLearningById={{}}
      focusedRootId={null}
      selectedNodeId={baseNode.id}
      detailPanelNode={baseNode}
      hoveredNodeId={null}
      expandedNodeIds={new Set()}
      onHoverNode={() => {}}
      onSelectNode={() => {}}
      onToggleExpandNode={() => {}}
      onDetailNode={() => {}}
      onOpenTopic={() => {}}
      onTrainNode={() => {}}
      onResetFocus={() => {}}
      onFocusRoot={() => {}}
    />
  )

  const viewport = result.container.querySelector('.mindmap-viewport.fullscreen') as HTMLDivElement
  const canvas = result.container.querySelector('.mindmap-canvas') as HTMLDivElement

  Object.defineProperty(viewport, 'clientWidth', { configurable: true, value: 1000 })
  Object.defineProperty(viewport, 'clientHeight', { configurable: true, value: 800 })
  viewport.getBoundingClientRect = () => ({
    width: 1000,
    height: 800,
    left: 0,
    top: 0,
    right: 1000,
    bottom: 800,
    x: 0,
    y: 0,
    toJSON: () => ({})
  })

  return { viewport, canvas }
}

describe('MindMapCanvas navigation', () => {
  it('mantém ponto do cursor estável na transformação de zoom e aplica clamp', () => {
    const state = { offsetX: 120, offsetY: -80, scale: 1 }
    const mouseX = 420
    const mouseY = 320

    const zoomed = computeZoomViewport(state, mouseX, mouseY, 1.4)
    const beforeWorldX = (mouseX - state.offsetX) / state.scale
    const beforeWorldY = (mouseY - state.offsetY) / state.scale
    const afterWorldX = (mouseX - zoomed.offsetX) / zoomed.scale
    const afterWorldY = (mouseY - zoomed.offsetY) / zoomed.scale

    expect(afterWorldX).toBeCloseTo(beforeWorldX, 6)
    expect(afterWorldY).toBeCloseTo(beforeWorldY, 6)

    const clamped = computeZoomViewport({ offsetX: 0, offsetY: 0, scale: 2.4 }, mouseX, mouseY, 1.2)
    expect(clamped.scale).toBe(2.5)
  })

  it('inicia drag, move e finaliza sem quebrar em pointermove após pointerup', async () => {
    const { viewport, canvas } = renderCanvas()

    await waitFor(() => {
      expect(parseTransform(canvas.style.transform).scale).toBeCloseTo(0.82, 2)
    })
    const before = parseTransform(canvas.style.transform)

    fireEvent.pointerDown(viewport, { button: 0, pointerId: 5, clientX: 300, clientY: 260 })
    fireEvent.pointerMove(viewport, { pointerId: 5, clientX: 360, clientY: 320 })
    const moved = parseTransform(canvas.style.transform)
    expect(moved.offsetX).toBeCloseTo(before.offsetX + 60, 3)
    expect(moved.offsetY).toBeCloseTo(before.offsetY + 60, 3)

    fireEvent.pointerUp(viewport, { pointerId: 5, clientX: 360, clientY: 320 })
    const afterUp = parseTransform(canvas.style.transform)
    fireEvent.pointerMove(viewport, { pointerId: 5, clientX: 430, clientY: 390 })
    const afterFreeMove = parseTransform(canvas.style.transform)
    expect(afterFreeMove.offsetX).toBeCloseTo(afterUp.offsetX, 3)
    expect(afterFreeMove.offsetY).toBeCloseTo(afterUp.offsetY, 3)
  })

  it('aplica zoom por wheel e reseta com botão', async () => {
    const { viewport, canvas } = renderCanvas()

    await waitFor(() => {
      expect(parseTransform(canvas.style.transform).scale).toBeCloseTo(0.82, 2)
    })

    fireEvent.wheel(viewport, { deltaY: -120, clientX: 500, clientY: 400 })
    const zoomedIn = parseTransform(canvas.style.transform)
    expect(Number.isFinite(zoomedIn.scale)).toBe(true)

    fireEvent.wheel(viewport, { deltaY: 120, clientX: 500, clientY: 400 })
    const zoomedOut = parseTransform(canvas.style.transform)
    expect(Number.isFinite(zoomedOut.scale)).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: '+' }))
    const buttonZoomIn = parseTransform(canvas.style.transform)
    expect(Number.isFinite(buttonZoomIn.scale)).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: '-' }))
    const buttonZoomOut = parseTransform(canvas.style.transform)
    expect(Number.isFinite(buttonZoomOut.scale)).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: 'Reset view' }))
    const reset = parseTransform(canvas.style.transform)
    expect(reset.scale).toBeCloseTo(0.82, 2)
  })
})
