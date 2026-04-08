import React, { useMemo, useState } from 'react'
import type { MindMapNode } from '@/domain/types'

type NodeStatus = 'forte' | 'atencao' | 'fraco' | 'sem-dados'

type Props = {
  nodes: MindMapNode[]
  onOpenTopic: (nodeId: string) => void
  onTrainNode: (nodeId: string) => void
  onToggleReviewed: (nodeId: string) => void
  reviewedNodeIds: Set<string>
  performanceByNode: Map<string, NodeStatus>
}

const statusLabel: Record<NodeStatus, string> = {
  forte: '🟢 forte',
  atencao: '🟡 atenção',
  fraco: '🔴 fraco',
  'sem-dados': '⚪ sem dados'
}

export const MindMapTree = ({ nodes, onOpenTopic, onTrainNode, onToggleReviewed, reviewedNodeIds, performanceByNode }: Props) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [query, setQuery] = useState('')

  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes])
  const roots = useMemo(() => nodes.filter((node) => node.parentId === null), [nodes])

  const matches = (node: MindMapNode) =>
    [node.title, node.descriptionShort, ...node.tags].join(' ').toLowerCase().includes(query.toLowerCase())

  const hasMatchInChildren = (node: MindMapNode): boolean =>
    node.childrenIds.some((id) => {
      const child = nodeMap.get(id)
      return child ? matches(child) || hasMatchInChildren(child) : false
    })

  const renderNode = (node: MindMapNode, depth: number): React.JSX.Element | null => {
    if (query && !matches(node) && !hasMatchInChildren(node)) {
      return null
    }
    const isExpanded = expanded[node.id] ?? true
    const status = performanceByNode.get(node.id) ?? 'sem-dados'
    const reviewed = reviewedNodeIds.has(node.id)

    return (
      <div key={node.id} style={{ marginLeft: depth * 14 }} className={`tree-node ${status}`}>
        <button className="tree-title" onClick={() => setExpanded((prev) => ({ ...prev, [node.id]: !isExpanded }))}>
          {isExpanded ? '▾' : '▸'} {node.title}
        </button>
        {isExpanded ? <p>{node.summary ?? node.descriptionShort}</p> : null}
        <div className="tree-badges">
          <small className="status-badge">{statusLabel[status]}</small>
          {node.examHighlights?.length ? <small>🔥 {node.examHighlights[0]}</small> : null}
        </div>
        <div className="tree-actions">
          <button onClick={() => onOpenTopic(node.id)}>Revisar tema</button>
          <button onClick={() => onTrainNode(node.id)}>Treinar este tema</button>
          <button className={reviewed ? 'reviewed' : ''} onClick={() => onToggleReviewed(node.id)}>
            {reviewed ? 'Revisado ✓' : 'Marcar revisado'}
          </button>
        </div>
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
