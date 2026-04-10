import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAppState } from '@/app/AppStateContext'
import { activeQuestions } from '@/data/questionBank/questions'
import { mindMapNodes } from '@/data/content/mindMapNodes'
import { buildNodeAccuracy, buildNodeErrorFrequency, enrichMindMapNode, inferPerformanceStatus } from '@/domain/mindmapPedagogy'
import { MindMapTree } from '@/features/mindmap/components/MindMapTree'
import { storage } from '@/lib/storage'

const REVIEWED_STORAGE_KEY = 'aprovai_map_reviewed_nodes'
const REVIEWED_STORAGE_VERSION = 1

const loadReviewed = (): Set<string> => {
  const envelope = storage.getVersioned<string[]>(REVIEWED_STORAGE_KEY, {
    version: REVIEWED_STORAGE_VERSION,
    fallback: [],
    isValid: (value): value is string[] => Array.isArray(value) && value.every((item) => typeof item === 'string'),
    migrate: {
      0: (legacy) => (Array.isArray(legacy) ? legacy.filter((item): item is string => typeof item === 'string') : [])
    }
  })

  return new Set<string>(envelope.data)
}

export const MapasPage = () => {
  const { attempts, nodeLearningById, registerNodeReview, registerNodeView } = useAppState()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const focusNodeId = params.get('focus')

  const nodes = useMemo(() => mindMapNodes, [])
  const [reviewedNodes, setReviewedNodes] = useState<Set<string>>(() => loadReviewed())

  const errorFrequency = useMemo(() => buildNodeErrorFrequency(attempts, activeQuestions), [attempts])
  const nodeAccuracy = useMemo(() => buildNodeAccuracy(attempts, activeQuestions), [attempts])

  const enrichedNodes = useMemo(() => {
    return nodes.map((node) => {
      const linkedQuestions = activeQuestions.filter((question) => question.relatedMindMapNodeId === node.id)
      return enrichMindMapNode(node, linkedQuestions, errorFrequency.get(node.id) ?? 0)
    })
  }, [errorFrequency, nodes])

  const performanceByNode = useMemo(
    () => new Map(enrichedNodes.map((node) => [node.id, inferPerformanceStatus(nodeAccuracy.get(node.id))])),
    [enrichedNodes, nodeAccuracy]
  )

  const handleToggleReviewed = (nodeId: string) => {
    setReviewedNodes((prev) => {
      const next = new Set(prev)
      const becameReviewed = !next.has(nodeId)
      if (next.has(nodeId)) next.delete(nodeId)
      else next.add(nodeId)
      if (becameReviewed) registerNodeReview(nodeId)
      storage.setVersioned(REVIEWED_STORAGE_KEY, REVIEWED_STORAGE_VERSION, [...next])
      return next
    })
  }

  const handleOpenTopic = (nodeId: string) => {
    registerNodeView(nodeId)
  }

  const handleTrainNode = (nodeId: string) => {
    const linked = activeQuestions.find((question) => question.relatedMindMapNodeId === nodeId)
    if (!linked) {
      navigate('/simulado?mode=weak-topics')
      return
    }

    const query = new URLSearchParams({ mode: linked.subtopic ? 'subtopic' : 'topic', topic: linked.topic })
    if (linked.subtopic) query.set('subtopic', linked.subtopic)
    navigate(`/simulado?${query.toString()}`)
  }

  return (
    <div className="mapas-fullscreen-page" data-focus-node-id={focusNodeId ?? ''}>
      <MindMapTree
        nodes={enrichedNodes}
        onOpenTopic={handleOpenTopic}
        onTrainNode={handleTrainNode}
        onToggleReviewed={handleToggleReviewed}
        reviewedNodeIds={reviewedNodes}
        performanceByNode={performanceByNode}
        nodeLearningById={nodeLearningById}
      />
    </div>
  )
}
