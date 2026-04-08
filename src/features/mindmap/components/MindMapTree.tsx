import React, { useMemo, useState } from 'react'
import type { MindMapNode } from '@/domain/types'

type Props = {
  nodes: MindMapNode[]
  onOpenTopic: (nodeId: string) => void
}

export const MindMapTree = ({ nodes, onOpenTopic }: Props) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [query, setQuery] = useState('')

  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes])
  const roots = useMemo(() => nodes.filter((node) => node.parentId === null), [nodes])

  const matches = (node: MindMapNode) =>
    [node.title, node.descriptionShort, ...node.tags].join(' ').toLowerCase().includes(query.toLowerCase())

  const hasMatchInChildren = (node: MindMapNode) =>
    node.childrenIds.some((id) => {
      const child = nodeMap.get(id)
      return child ? matches(child) : false
    })

  const renderNode = (node: MindMapNode, depth: number): React.JSX.Element | null => {
    if (query && !matches(node) && !hasMatchInChildren(node)) {
      return null
    }
    const isExpanded = expanded[node.id] ?? true
    return (
      <div key={node.id} style={{ marginLeft: depth * 14 }} className="tree-node">
        <button className="tree-title" onClick={() => setExpanded((prev) => ({ ...prev, [node.id]: !isExpanded }))}>
          {isExpanded ? '▾' : '▸'} {node.title}
        </button>
        <p>{node.descriptionShort}</p>
        <div className="tree-actions">
          <button onClick={() => onOpenTopic(node.id)}>Revisar tema</button>
          <small>{node.editalReference}</small>
          {node.examHighlights?.length ? <small>🔥 {node.examHighlights.length} pontos de prova</small> : null}
          {node.commonMistakes?.length ? <small>⚠️ {node.commonMistakes.length} erros comuns</small> : null}
        </div>
        {isExpanded
          ? node.childrenIds.map((id) => nodeMap.get(id)).filter(Boolean).map((child) => renderNode(child!, depth + 1))
          : null}
      </div>
    )
  }

  return (
    <div>
      <input placeholder="Buscar tópico, tag ou termo" value={query} onChange={(event) => setQuery(event.target.value)} className="input" />
      <div className="actions-row">
        <button onClick={() => setExpanded({})}>Expandir tudo</button>
        <button onClick={() => setExpanded(Object.fromEntries(nodes.map((node) => [node.id, false])))}>Recolher tudo</button>
      </div>
      <div>{roots.map((root) => renderNode(root, 0))}</div>
    </div>
  )
}
