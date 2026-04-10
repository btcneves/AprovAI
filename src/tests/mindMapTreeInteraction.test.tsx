import { fireEvent, render, screen, within } from '@testing-library/react'
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
    childrenIds: ['pt-concordancia'],
    tags: [],
    editalReference: '1.1',
    relatedQuestionIds: [],
    priority: 'media'
  },
  {
    id: 'pt-concordancia',
    title: 'Concordância',
    discipline: 'portugues',
    descriptionShort: 'Concordância nominal',
    descriptionDetailed: 'Detalhes concordância',
    parentId: 'pt-sintaxe',
    childrenIds: [],
    tags: [],
    editalReference: '1.1.1',
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
  it('renderiza raízes e primeiro nível por padrão, e expande/recolhe subníveis', () => {
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
    expect(screen.getByText('Sintaxe')).toBeTruthy()
    expect(screen.queryByText('Concordância')).toBeNull()

    fireEvent.click(screen.getAllByRole('button', { name: 'Expandir' })[0])
    expect(screen.getByText('Concordância')).toBeTruthy()

    const sintaxeCard = screen.getByText('Sintaxe').closest('article') as HTMLElement
    fireEvent.click(within(sintaxeCard).getByRole('button', { name: 'Recolher' }))
    expect(screen.queryByText('Concordância')).toBeNull()
  })

  it('detalhar abre painel correto e não conflita com expansão', () => {
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

    fireEvent.click(screen.getAllByRole('button', { name: 'Expandir' })[0])
    expect(screen.getByText('Concordância')).toBeTruthy()

    fireEvent.click(screen.getAllByRole('button', { name: 'Detalhar' })[0])
    expect(screen.getByText('Detalhes português')).toBeTruthy()
    expect(screen.getByText('Concordância')).toBeTruthy()

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

    fireEvent.click(screen.getByRole('button', { name: 'Língua Portuguesa' }))
    expect(screen.getByText('Sintaxe')).toBeTruthy()
    expect(screen.queryByText('APH / ABCDE')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Mapa completo' }))
    expect(screen.getByText('APH / ABCDE')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Conteúdos CBMSC' })).toBeTruthy()
  })
})
