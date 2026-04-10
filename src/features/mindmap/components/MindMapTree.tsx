import { useEffect, useMemo, useState } from 'react'
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

const getRootNodes = (nodes: MindMapNodeType[]) => nodes.filter((node) => node.parentId === null)

const getChildrenByParent = (nodes: MindMapNodeType[]) => {
  const map = new Map<string, MindMapNodeType[]>()
  nodes.forEach((node) => {
    if (!node.parentId) return
    const current = map.get(node.parentId) ?? []
    current.push(node)
    map.set(node.parentId, current)
  })
  return map
}

const getDescendants = (nodeId: string, childrenByParent: Map<string, MindMapNodeType[]>) => {
  const descendants: string[] = []
  const stack = [...(childrenByParent.get(nodeId) ?? []).map((child) => child.id)]

  while (stack.length) {
    const currentId = stack.pop() as string
    descendants.push(currentId)
    const children = childrenByParent.get(currentId) ?? []
    children.forEach((child) => stack.push(child.id))
  }

  return descendants
}

export const MindMapTree = ({
  nodes,
  onOpenTopic,
  onTrainNode,
  onToggleReviewed,
  reviewedNodeIds,
  performanceByNode,
  nodeLearningById
}: Props) => {
  const [query, setQuery] = useState('')
  const [focusedRootId, setFocusedRootId] = useState<string | null>(null)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [detailPanelNodeId, setDetailPanelNodeId] = useState<string | null>(null)
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null)

  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes])
  const rootNodes = useMemo(() => getRootNodes(nodes), [nodes])
  const childrenByParent = useMemo(() => getChildrenByParent(nodes), [nodes])

  const [expandedNodeIds, setExpandedNodeIds] = useState<Set<string>>(() => new Set())

  useEffect(() => {
    setExpandedNodeIds(new Set(rootNodes.map((node) => node.id)))
  }, [rootNodes])

  const rootByNodeId = useMemo(() => {
    const result = new Map<string, string>()

    const walk = (node: MindMapNodeType, rootId: string) => {
      result.set(node.id, rootId)
      const children = childrenByParent.get(node.id) ?? []
      children.forEach((child) => walk(child, rootId))
    }

    rootNodes.forEach((root) => walk(root, root.id))
    return result
  }, [childrenByParent, rootNodes])

  const branchColorById = useMemo(() => {
    const rootIds = Array.from(new Set(rootByNodeId.values()))
    return new Map(rootIds.map((id, index) => [id, themePalette[index % themePalette.length]]))
  }, [rootByNodeId])

  const loweredQuery = query.trim().toLowerCase()

  const searchableContent = (node: MindMapNodeType) =>
    [node.title, node.descriptionShort, node.summary ?? '', ...node.tags].join(' ').toLowerCase()

  const visible = useMemo(() => {
    const list: Array<{ node: MindMapNodeType; depth: number; branchId: string }> = []
    const allowedRootIds = new Set((focusedRootId ? rootNodes.filter((node) => node.id === focusedRootId) : rootNodes).map((node) => node.id))

    const nodeMatches = (node: MindMapNodeType) => searchableContent(node).includes(loweredQuery)

    const descendantsMatch = (nodeId: string): boolean => {
      const children = childrenByParent.get(nodeId) ?? []
      return children.some((child) => nodeMatches(child) || descendantsMatch(child.id))
    }

    const visit = (node: MindMapNodeType, depth: number, branchId: string) => {
      if (loweredQuery && !nodeMatches(node) && !descendantsMatch(node.id)) return
      list.push({ node, depth, branchId })

      const shouldExpand = loweredQuery ? true : expandedNodeIds.has(node.id)
      if (!shouldExpand) return

      const children = childrenByParent.get(node.id) ?? []
      children.forEach((child) => visit(child, depth + 1, branchId))
    }

    rootNodes.forEach((root) => {
      if (!allowedRootIds.has(root.id)) return
      visit(root, 1, root.id)
    })

    return list
  }, [childrenByParent, expandedNodeIds, focusedRootId, loweredQuery, rootNodes])

  const layout = useMemo(
    () => buildRadialLayout(visible, { ringGap: 320, minNodeArc: 240, nodePadding: 28, maxIterations: 36 }),
    [visible]
  )

  const detailPanelNode = detailPanelNodeId ? nodeMap.get(detailPanelNodeId) ?? null : null

  const handleToggleExpand = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    setExpandedNodeIds((prev) => {
      const next = new Set(prev)
      if (next.has(nodeId)) {
        next.delete(nodeId)
        getDescendants(nodeId, childrenByParent).forEach((descendantId) => next.delete(descendantId))
        return next
      }

      next.add(nodeId)
      return next
    })
  }

  const handleSetFocusedRoot = (nodeId: string | null) => {
    if (!nodeId) {
      setFocusedRootId(null)
      return
    }

    const rootId = rootByNodeId.get(nodeId)
    if (!rootId) return

    setFocusedRootId(rootId)
    setExpandedNodeIds((prev) => {
      const next = new Set(prev)
      next.add(rootId)
      return next
    })
  }

  const handleDetailNode = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    setDetailPanelNodeId(nodeId)
    onOpenTopic(nodeId)
  }

  return (
    <div className="mindmap-fullscreen-layout">
      <div className="mindmap-topbar">
        <input
          placeholder="Buscar tópico, tag ou termo"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="input"
        />
        <div className="actions-row mindmap-toolbar">
          {rootNodes.map((root) => (
            <button
              key={root.id}
              className={`root-filter-btn ${focusedRootId === root.id ? 'is-active' : ''}`}
              onClick={() => handleSetFocusedRoot(focusedRootId === root.id ? null : root.id)}
            >
              {root.title === 'Conhecimentos Específicos' ? 'Conteúdos CBMSC' : root.title}
            </button>
          ))}
          <button onClick={() => setExpandedNodeIds(new Set(rootNodes.map((node) => node.id)))}>Recolher tudo</button>
          {selectedNodeId ? (
            <button className={reviewedNodeIds.has(selectedNodeId) ? 'reviewed' : ''} onClick={() => onToggleReviewed(selectedNodeId)}>
              {reviewedNodeIds.has(selectedNodeId) ? 'Revisado ✓' : 'Marcar revisado'}
            </button>
          ) : null}
        </div>
      </div>

      <MindMapCanvas
        layout={layout}
        branchColorById={branchColorById}
        performanceByNode={performanceByNode}
        reviewedNodeIds={reviewedNodeIds}
        nodeLearningById={nodeLearningById}
        focusedRootId={focusedRootId}
        selectedNodeId={selectedNodeId}
        detailPanelNode={detailPanelNode}
        hoveredNodeId={hoveredNodeId}
        expandedNodeIds={expandedNodeIds}
        onHoverNode={setHoveredNodeId}
        onSelectNode={setSelectedNodeId}
        onToggleExpandNode={handleToggleExpand}
        onDetailNode={handleDetailNode}
        onOpenTopic={handleDetailNode}
        onTrainNode={onTrainNode}
        onFocusRoot={(nodeId) => handleSetFocusedRoot(nodeId)}
        onResetFocus={() => handleSetFocusedRoot(null)}
      />
    </div>
  )
}
