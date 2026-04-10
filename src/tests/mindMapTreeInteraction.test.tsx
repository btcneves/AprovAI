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

const clickExpandInsideCard = (title: string) => {
  const titleNode = screen.getAllByText(title).find((node) => node.tagName.toLowerCase() === 'h4') as HTMLElement
  const card = titleNode.closest('article') as HTMLElement
  fireEvent.click(within(card).getByRole('button', { name: /expandir|recolher/i }))
}

const clickTopbarButton = (name: string) => {
  const topbar = document.querySelector('.mindmap-topbar') as HTMLElement
  fireEvent.click(within(topbar).getByRole('button', { name }))
}

describe('MindMapTree interactions', () => {
  it('renderiza estado inicial didático com raiz e blocos, e expande/recolhe subníveis', () => {
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
    expect(screen.queryByText('Sintaxe')).toBeNull()
    expect(screen.queryByText('Concordância')).toBeNull()

    clickExpandInsideCard('Língua Portuguesa')
    expect(screen.getByText('Sintaxe')).toBeTruthy()

    clickExpandInsideCard('Sintaxe')
    expect(screen.getByText('Concordância')).toBeTruthy()

    clickExpandInsideCard('Sintaxe')
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

    clickExpandInsideCard('Língua Portuguesa')
    clickExpandInsideCard('Sintaxe')
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

    clickTopbarButton('Língua Portuguesa')
    expect(screen.getByText('Sintaxe')).toBeTruthy()
    expect(screen.queryByText('APH / ABCDE')).toBeNull()

    clickTopbarButton('Mapa completo')
    clickExpandInsideCard('Conhecimentos Específicos')
    expect(screen.getByText('APH / ABCDE')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Conteúdos CBMSC' })).toBeTruthy()
  })

  it('recolher tudo restaura o estado inicial coerente', () => {
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

    clickExpandInsideCard('Língua Portuguesa')
    expect(screen.getByText('Sintaxe')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'Recolher tudo' }))
    expect(screen.queryByText('Sintaxe')).toBeNull()
  })
})
