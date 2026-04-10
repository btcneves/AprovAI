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
  const [expandedNodeIds, setExpandedNodeIds] = useState<Set<string>>(() => new Set())
  const [query, setQuery] = useState('')
  const [focusedRootId, setFocusedRootId] = useState<string | null>(null)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [detailPanelNodeId, setDetailPanelNodeId] = useState<string | null>(null)
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null)

  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes])

  const rootByNodeId = useMemo(() => {
    const result = new Map<string, string>()
    const roots = nodes.filter((node) => node.parentId === null)

    const walk = (node: MindMapNodeType, rootId: string) => {
      result.set(node.id, rootId)
      node.childrenIds.forEach((childId) => {
        const child = nodeMap.get(childId)
        if (child) walk(child, rootId)
      })
    }

    roots.forEach((root) => walk(root, root.id))
    return result
  }, [nodeMap, nodes])

  const branchColorById = useMemo(() => {
    const rootIds = Array.from(new Set(rootByNodeId.values()))
    return new Map(rootIds.map((id, index) => [id, themePalette[index % themePalette.length]]))
  }, [rootByNodeId])

  const roots = useMemo(() => nodes.filter((node) => node.parentId === null), [nodes])
  const loweredQuery = query.trim().toLowerCase()

  const rootNodes = useMemo(
    () => roots.filter((node) => (focusedRootId ? node.id === focusedRootId : true)),
    [focusedRootId, roots]
  )

  const buildPathToRoot = (nodeId: string): string[] => {
    const path: string[] = []
    let current: MindMapNodeType | undefined = nodeMap.get(nodeId)
    while (current) {
      path.unshift(current.id)
      if (!current.parentId) break
      current = nodeMap.get(current.parentId)
    }
    return path
  }

  const collapseToPath = (nodeId: string): Set<string> => {
    const path = new Set(buildPathToRoot(nodeId))
    const rootId = rootByNodeId.get(nodeId)
    const next = new Set<string>()
    for (const expandedId of expandedNodeIds) {
      const expandedRootId = rootByNodeId.get(expandedId)
      if (!expandedRootId || expandedRootId !== rootId) {
        next.add(expandedId)
        continue
      }
      if (path.has(expandedId)) next.add(expandedId)
    }
    return next
  }

  const handleToggleExpand = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    setExpandedNodeIds((prev) => {
      const current = new Set(prev)
      if (current.has(nodeId)) {
        current.delete(nodeId)
        return current
      }
      const collapsed = collapseToPath(nodeId)
      collapsed.add(nodeId)
      return collapsed
    })
  }

  const handleDetailNode = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    setDetailPanelNodeId(nodeId)
    onOpenTopic(nodeId)
  }

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
      const expanded = expandedNodeIds.has(node.id) || Boolean(loweredQuery)
      if (!expanded) return

      node.childrenIds.forEach((childId) => {
        const child = nodeMap.get(childId)
        if (child) visit(child, depth + 1, branchId)
      })
    }

    rootNodes.forEach((root) => visit(root, 1, root.id))
    return list
  }, [expandedNodeIds, loweredQuery, nodeMap, rootNodes])

  const layout = useMemo(
    () => buildRadialLayout(visible, { ringGap: 320, minNodeArc: 240, nodePadding: 28, maxIterations: 36 }),
    [visible]
  )

  const detailPanelNode = detailPanelNodeId ? nodeMap.get(detailPanelNodeId) ?? null : null

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
          {roots.map((root) => (
            <button
              key={root.id}
              className={`root-filter-btn ${focusedRootId === root.id ? 'is-active' : ''}`}
              onClick={() => setFocusedRootId((current) => (current === root.id ? null : root.id))}
            >
              {root.title === 'Conhecimentos Específicos' ? 'Conteúdos CBMSC' : root.title}
            </button>
          ))}
          <button onClick={() => setExpandedNodeIds(new Set())}>Recolher tudo</button>
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
        onHoverNode={setHoveredNodeId}
        onSelectNode={setSelectedNodeId}
        onToggleExpandNode={handleToggleExpand}
        onDetailNode={handleDetailNode}
        onOpenTopic={handleDetailNode}
        onTrainNode={onTrainNode}
        onFocusRoot={(nodeId) => setFocusedRootId(rootByNodeId.get(nodeId) ?? null)}
        onResetFocus={() => setFocusedRootId(null)}
      />
    </div>
  )
}
