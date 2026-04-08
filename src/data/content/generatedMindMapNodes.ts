import { cbmscMindmaps } from '@/data/mindmaps'
import type { MindMapNode } from '@/domain/types'

const sanitize = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const discipline: MindMapNode['discipline'] = 'especificos'

export const generatedMindMapNodes: MindMapNode[] = cbmscMindmaps.flatMap((map) => {
  const rootId = `gen-${map.id}`
  const childIds = map.nodes.map((node) => `gen-${map.id}-${sanitize(node.id)}`)

  const root: MindMapNode = {
    id: rootId,
    title: map.title,
    discipline,
    descriptionShort: map.summary,
    descriptionDetailed: `${map.summary} Destaques: ${map.examHighlights.join(' | ')}`,
    parentId: 'root-especificos',
    childrenIds: childIds,
    tags: map.terms.slice(0, 6).map((term) => sanitize(term)),
    editalReference: 'CBMSC - Base documental indexada',
    relatedQuestionIds: [],
    priority: 'media'
  }

  const children: MindMapNode[] = map.nodes.map((node) => ({
    id: `gen-${map.id}-${sanitize(node.id)}`,
    title: node.label,
    discipline,
    descriptionShort: `Tópico de ${map.title}`,
    descriptionDetailed: `${node.label}: ${(node.children ?? []).map((item) => item.label).join('; ')}`,
    parentId: rootId,
    childrenIds: [],
    tags: [sanitize(node.label)],
    editalReference: 'CBMSC - Mapa mental gerado',
    relatedQuestionIds: [],
    priority: 'media'
  }))

  return [root, ...children]
})
