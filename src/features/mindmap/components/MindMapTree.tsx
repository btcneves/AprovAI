import { useMemo, useState } from 'react'
import type { MindMapNode as MindMapNodeType } from '@/domain/types'
import type { NodeLearningMap } from '@/domain/nodeLearningService'
import { MindMapCanvas } from '@/features/mindmap/components/MindMapCanvas'
import { buildRadialLayout } from '@/features/mindmap/layout/RadialLayoutEngine'

type NodeStatus = 'forte' | 'atencao' | 'fraco' | 'sem-dados'

type Props = {
  nodes: MindMapNodeType[]
  onOpenTopic: (nodeId: string) => void
  onTrainNode: (nodeId: string) => void
  onToggleReviewed: (nodeId: string) => void
  reviewedNodeIds: Set<string>
  performanceByNode: Map<string, NodeStatus>
  nodeLearningById: NodeLearningMap
}

const themePalette = ['#2563eb', '#7c3aed', '#db2777', '#ea580c', '#0891b2', '#16a34a', '#4f46e5', '#be123c']

export const MindMapTree = ({
  nodes,
  onOpenTopic,
  onTrainNode,
  onToggleReviewed,
  reviewedNodeIds,
  performanceByNode,
  nodeLearningById
}: Props) => {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({})
  const [query, setQuery] = useState('')
  const [focusedBranchId, setFocusedBranchId] = useState<string | null>(null)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null)

  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes])

  const rootByNodeId = useMemo(() => {
    const result = new Map<string, string>()
    const roots = nodes.filter((node) => node.parentId === null)

    const traverse = (node: MindMapNodeType, rootId: string) => {
      result.set(node.id, rootId)
      node.childrenIds.forEach((childId) => {
        const child = nodeMap.get(childId)
        if (child) traverse(child, rootId)
      })
    }

    roots.forEach((root) => traverse(root, root.id))
    return result
  }, [nodeMap, nodes])

  const branchColorById = useMemo(() => {
    const rootIds = Array.from(new Set(rootByNodeId.values()))
    return new Map(rootIds.map((id, index) => [id, themePalette[index % themePalette.length]]))
  }, [rootByNodeId])

  const roots = useMemo(() => {
    if (!focusedBranchId) return nodes.filter((node) => node.parentId === null)
    const focused = nodeMap.get(focusedBranchId)
    return focused ? [focused] : nodes.filter((node) => node.parentId === null)
  }, [focusedBranchId, nodeMap, nodes])

  const loweredQuery = query.trim().toLowerCase()

  const visible = useMemo(() => {
    const list: Array<{ node: MindMapNodeType; depth: number; branchId: string }> = []

    const nodeMatches = (node: MindMapNodeType) =>
      [node.title, node.descriptionShort, node.summary ?? '', ...node.tags].join(' ').toLowerCase().includes(loweredQuery)

    const descendantsMatch = (node: MindMapNodeType): boolean =>
      node.childrenIds.some((childId) => {
        const child = nodeMap.get(childId)
        return child ? nodeMatches(child) || descendantsMatch(child) : false
      })

    const visit = (node: MindMapNodeType, depth: number, branchId: string) => {
      if (loweredQuery && !nodeMatches(node) && !descendantsMatch(node)) return
      list.push({ node, depth, branchId })

      const expanded = expandedMap[node.id] ?? true
      if (!expanded) return

      node.childrenIds.forEach((childId) => {
        const child = nodeMap.get(childId)
        if (child) visit(child, depth + 1, branchId)
      })
    }

    roots.forEach((root) => visit(root, 1, root.id))
    return list
  }, [expandedMap, loweredQuery, nodeMap, roots])

  const layout = useMemo(() => buildRadialLayout(visible, { ringGap: 220, minNodeArc: 200, nodePadding: 24 }), [visible])

  const selectedNode = selectedNodeId ? nodeMap.get(selectedNodeId) ?? null : null
  const focusedBranchNode = focusedBranchId ? nodeMap.get(focusedBranchId) ?? null : null

  return (
    <div>
      <input
        placeholder="Buscar tópico, tag ou termo"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="input"
      />

      <div className="actions-row mindmap-toolbar">
        <button onClick={() => setFocusedBranchId(null)} disabled={!focusedBranchId}>Voltar para mapa completo</button>
        <button onClick={() => selectedNodeId && setFocusedBranchId(selectedNodeId)} disabled={!selectedNodeId}>Focar ramo</button>
        <button onClick={() => setExpandedMap({})}>Expandir todos</button>
        <button onClick={() => setExpandedMap(Object.fromEntries(nodes.map((node) => [node.id, false])))}>Recolher todos</button>
        {selectedNodeId ? (
          <button className={reviewedNodeIds.has(selectedNodeId) ? 'reviewed' : ''} onClick={() => onToggleReviewed(selectedNodeId)}>
            {reviewedNodeIds.has(selectedNodeId) ? 'Revisado ✓' : 'Marcar revisado'}
          </button>
        ) : null}
      </div>

      <MindMapCanvas
        layout={layout}
        branchColorById={branchColorById}
        performanceByNode={performanceByNode}
        reviewedNodeIds={reviewedNodeIds}
        nodeLearningById={nodeLearningById}
        focusedBranchNode={focusedBranchNode}
        selectedNode={selectedNode}
        hoveredNodeId={hoveredNodeId}
        onHoverNode={setHoveredNodeId}
        onExpandNode={setSelectedNodeId}
        onOpenTopic={onOpenTopic}
        onTrainNode={onTrainNode}
      />
    </div>
  )
}
