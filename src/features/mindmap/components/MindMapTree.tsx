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

const themePalette = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2', '#be123c']

const getChildrenByParent = (nodes: MindMapNodeType[]) => {
  const map = new Map<string, MindMapNodeType[]>()
  nodes.forEach((node) => {
    if (!node.parentId) return
    const children = map.get(node.parentId) ?? []
    children.push(node)
    map.set(node.parentId, children)
  })
  return map
}

const getDescendants = (nodeId: string, childrenByParent: Map<string, MindMapNodeType[]>) => {
  const descendants: string[] = []
  const stack = [...(childrenByParent.get(nodeId) ?? []).map((child) => child.id)]

  while (stack.length) {
    const current = stack.pop() as string
    descendants.push(current)
    const children = childrenByParent.get(current) ?? []
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
  const [focusedRootId, setFocusedRootId] = useState<string | null>(null)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [detailPanelNodeId, setDetailPanelNodeId] = useState<string | null>(null)
  const [expandedNodeIds, setExpandedNodeIds] = useState<Set<string>>(() => new Set())

  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes])
  const rootNodes = useMemo(() => nodes.filter((node) => node.parentId === null), [nodes])
  const childrenByParent = useMemo(() => getChildrenByParent(nodes), [nodes])

  const rootByNodeId = useMemo(() => {
    const map = new Map<string, string>()
    const visit = (node: MindMapNodeType, rootId: string) => {
      map.set(node.id, rootId)
      ;(childrenByParent.get(node.id) ?? []).forEach((child) => visit(child, rootId))
    }
    rootNodes.forEach((root) => visit(root, root.id))
    return map
  }, [childrenByParent, rootNodes])

  const branchColorById = useMemo(
    () => new Map(rootNodes.map((root, index) => [root.id, themePalette[index % themePalette.length]])),
    [rootNodes]
  )

  const visible = useMemo(() => {
    const list: Array<{ node: MindMapNodeType; depth: number; branchId: string }> = []
    const allowedRoots = focusedRootId ? rootNodes.filter((root) => root.id === focusedRootId) : rootNodes

    const visit = (node: MindMapNodeType, depth: number, branchId: string) => {
      list.push({ node, depth, branchId })
      if (!expandedNodeIds.has(node.id)) return
      ;(childrenByParent.get(node.id) ?? []).forEach((child) => visit(child, depth + 1, branchId))
    }

    allowedRoots.forEach((root) => visit(root, 1, root.id))
    return list
  }, [childrenByParent, expandedNodeIds, focusedRootId, rootNodes])

  const layout = useMemo(() => buildRadialLayout(visible), [visible])
  const detailPanelNode = detailPanelNodeId ? nodeMap.get(detailPanelNodeId) ?? null : null

  const handleToggleExpand = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    setExpandedNodeIds((prev) => {
      const next = new Set(prev)
      if (next.has(nodeId)) {
        next.delete(nodeId)
        getDescendants(nodeId, childrenByParent).forEach((id) => next.delete(id))
      } else {
        next.add(nodeId)
      }
      return next
    })
  }

  const handleSetFocusedRoot = (rootId: string | null) => {
    setFocusedRootId(rootId)
    setExpandedNodeIds((prev) => {
      const next = new Set(prev)
      if (rootId) next.add(rootId)
      return next
    })
  }

  const handleDetailNode = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    setDetailPanelNodeId(nodeId)
    onOpenTopic(nodeId)
  }

  const collapseAll = () => {
    setExpandedNodeIds(new Set())
    setSelectedNodeId(null)
  }

  return (
    <div className="mindmap-fullscreen-layout">
      <div className="mindmap-topbar">
        <div className="actions-row mindmap-toolbar">
          <button className={`root-filter-btn ${focusedRootId === null ? 'is-active' : ''}`} onClick={() => handleSetFocusedRoot(null)}>
            Mapa completo
          </button>
          {rootNodes.map((root) => (
            <button
              key={root.id}
              className={`root-filter-btn ${focusedRootId === root.id ? 'is-active' : ''}`}
              onClick={() => handleSetFocusedRoot(root.id)}
            >
              {root.title === 'Conhecimentos Específicos' ? 'Conteúdos CBMSC' : root.title}
            </button>
          ))}
          <button onClick={collapseAll}>Recolher tudo</button>
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
        expandedNodeIds={expandedNodeIds}
        onSelectNode={setSelectedNodeId}
        onToggleExpandNode={handleToggleExpand}
        onDetailNode={handleDetailNode}
        onOpenTopic={handleDetailNode}
        onTrainNode={onTrainNode}
        onFocusRoot={(nodeId) => handleSetFocusedRoot(rootByNodeId.get(nodeId) ?? null)}
        onResetFocus={() => handleSetFocusedRoot(null)}
        onCollapseAll={collapseAll}
      />
    </div>
  )
}
