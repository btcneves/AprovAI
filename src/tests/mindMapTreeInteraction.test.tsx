import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { MindMapNode } from '@/domain/types'
import { MindMapTree } from '@/features/mindmap/components/MindMapTree'

const nodes: MindMapNode[] = [
  {
    id: 'root-portugues',
    title: 'Língua Portuguesa',
    discipline: 'portugues',
    descriptionShort: 'Base',
    descriptionDetailed: 'Detalhes português',
    parentId: null,
    childrenIds: ['pt-sintaxe'],
    tags: [],
    editalReference: '1',
    relatedQuestionIds: [],
    priority: 'alta'
  },
  {
    id: 'pt-sintaxe',
    title: 'Sintaxe',
    discipline: 'portugues',
    descriptionShort: 'Sintaxe base',
    descriptionDetailed: 'Detalhes sintaxe',
    parentId: 'root-portugues',
    childrenIds: [],
    tags: [],
    editalReference: '1.1',
    relatedQuestionIds: [],
    priority: 'media'
  },
  {
    id: 'root-especificos',
    title: 'Conhecimentos Específicos',
    discipline: 'especificos',
    descriptionShort: 'CBMSC',
    descriptionDetailed: 'Detalhes cbmsc',
    parentId: null,
    childrenIds: ['esp-aph'],
    tags: [],
    editalReference: '2',
    relatedQuestionIds: [],
    priority: 'alta'
  },
  {
    id: 'esp-aph',
    title: 'APH / ABCDE',
    discipline: 'especificos',
    descriptionShort: 'Atendimento',
    descriptionDetailed: 'Detalhes APH',
    parentId: 'root-especificos',
    childrenIds: [],
    tags: [],
    editalReference: '2.1',
    relatedQuestionIds: [],
    priority: 'alta'
  }
]

describe('MindMapTree interactions', () => {
  it('expande e recolhe ramos por etapas', () => {
    render(
      <MindMapTree
        nodes={nodes}
        onOpenTopic={() => {}}
        onTrainNode={() => {}}
        onToggleReviewed={() => {}}
        reviewedNodeIds={new Set()}
        performanceByNode={new Map()}
        nodeLearningById={{}}
      />
    )

    expect(screen.queryByText('Sintaxe')).toBeNull()

    fireEvent.click(screen.getAllByRole('button', { name: 'Expandir' })[0])
    expect(screen.getByText('Sintaxe')).toBeTruthy()

    fireEvent.click(screen.getAllByRole('button', { name: 'Recolher' })[0])
    expect(screen.queryByText('Sintaxe')).toBeNull()
  })

  it('detalhar abre painel correto e treinar permanece funcional', () => {
    const onTrainNode = vi.fn()

    render(
      <MindMapTree
        nodes={nodes}
        onOpenTopic={() => {}}
        onTrainNode={onTrainNode}
        onToggleReviewed={() => {}}
        reviewedNodeIds={new Set()}
        performanceByNode={new Map()}
        nodeLearningById={{}}
      />
    )

    fireEvent.click(screen.getAllByRole('button', { name: 'Detalhar' })[0])
    expect(screen.getByText('Detalhes português')).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: 'Treinar' }))
    expect(onTrainNode).toHaveBeenCalledWith('root-portugues')
  })

  it('mantém blocos raiz de Português e Conteúdos CBMSC separados por filtro', () => {
    render(
      <MindMapTree
        nodes={nodes}
        onOpenTopic={() => {}}
        onTrainNode={() => {}}
        onToggleReviewed={() => {}}
        reviewedNodeIds={new Set()}
        performanceByNode={new Map()}
        nodeLearningById={{}}
      />
    )

    expect(screen.getByRole('button', { name: 'Língua Portuguesa' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Conteúdos CBMSC' })).toBeTruthy()
  })
})
