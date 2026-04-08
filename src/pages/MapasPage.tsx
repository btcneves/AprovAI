import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { useAppState } from '@/app/AppStateContext'
import { activeQuestions } from '@/data/questionBank/questions'
import { mindMapNodes } from '@/data/content/mindMapNodes'
import { buildNodeAccuracy, buildNodeErrorFrequency, enrichMindMapNode, inferPerformanceStatus } from '@/domain/mindmapPedagogy'
import { MindMapTree } from '@/features/mindmap/components/MindMapTree'

const REVIEWED_STORAGE_KEY = 'aprovai_map_reviewed_nodes'

const loadReviewed = (): Set<string> => {
  const raw = localStorage.getItem(REVIEWED_STORAGE_KEY)
  if (!raw) return new Set<string>()
  try {
    return new Set<string>(JSON.parse(raw))
  } catch {
    return new Set<string>()
  }
}

export const MapasPage = () => {
  const { attempts } = useAppState()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const focusNodeId = params.get('focus')

  const nodes = useMemo(() => mindMapNodes, [])
  const [reviewedNodes, setReviewedNodes] = useState<Set<string>>(() => loadReviewed())
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(focusNodeId)

  const errorFrequency = useMemo(() => buildNodeErrorFrequency(attempts, activeQuestions), [attempts])
  const nodeAccuracy = useMemo(() => buildNodeAccuracy(attempts, activeQuestions), [attempts])

  const enrichedNodes = useMemo(() => {
    return nodes.map((node) => {
      const linkedQuestions = activeQuestions.filter((question) => question.relatedMindMapNodeId === node.id)
      return enrichMindMapNode(node, linkedQuestions, errorFrequency.get(node.id) ?? 0)
    })
  }, [errorFrequency, nodes])

  const focusFromQuery = useMemo(() => enrichedNodes.find((node) => node.id === focusNodeId) ?? null, [enrichedNodes, focusNodeId])

  const performanceByNode = useMemo(
    () =>
      new Map(
        enrichedNodes.map((node) => [node.id, inferPerformanceStatus(nodeAccuracy.get(node.id))])
      ),
    [enrichedNodes, nodeAccuracy]
  )

  const selectedNode = useMemo(
    () => enrichedNodes.find((node) => node.id === (selectedNodeId ?? focusFromQuery?.id ?? '')) ?? focusFromQuery,
    [enrichedNodes, focusFromQuery, selectedNodeId]
  )

  const childTitles = useMemo(() => {
    if (!selectedNode) {
      return []
    }
    return selectedNode.childrenIds.map((id) => nodes.find((node) => node.id === id)?.title).filter(Boolean) as string[]
  }, [nodes, selectedNode])

  const weakNodes = useMemo(
    () => enrichedNodes.filter((node) => performanceByNode.get(node.id) === 'fraco').slice(0, 5),
    [enrichedNodes, performanceByNode]
  )

  const handleToggleReviewed = (nodeId: string) => {
    setReviewedNodes((prev) => {
      const next = new Set(prev)
      if (next.has(nodeId)) next.delete(nodeId)
      else next.add(nodeId)
      localStorage.setItem(REVIEWED_STORAGE_KEY, JSON.stringify([...next]))
      return next
    })
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
    <div className="grid-2">
      <Card title="Mapa mental">
        <MindMapTree
          nodes={enrichedNodes}
          onOpenTopic={setSelectedNodeId}
          onTrainNode={handleTrainNode}
          onToggleReviewed={handleToggleReviewed}
          reviewedNodeIds={reviewedNodes}
          performanceByNode={performanceByNode}
        />
      </Card>
      <Card title="Revisão guiada de prova">
        {weakNodes.length ? (
          <>
            <p><strong>Temas fracos detectados</strong></p>
            <ul>
              {weakNodes.map((node) => (
                <li key={node.id}>
                  <button className="link-button" onClick={() => setSelectedNodeId(node.id)}>{node.title}</button>
                </li>
              ))}
            </ul>
          </>
        ) : <p>Sem temas fracos no momento. Continue revisando por ciclos.</p>}

        {selectedNode ? (
          <>
            <p>
              Foco atual: <strong>{selectedNode.title}</strong>
            </p>
            <p>{selectedNode.shortExplanation}</p>
            <div className="actions-row" style={{ justifyContent: 'flex-start' }}>
              <button onClick={() => handleTrainNode(selectedNode.id)}>Treinar este tema</button>
              <button className={reviewedNodes.has(selectedNode.id) ? 'reviewed' : ''} onClick={() => handleToggleReviewed(selectedNode.id)}>
                {reviewedNodes.has(selectedNode.id) ? 'Revisado ✓' : 'Marcar como revisado'}
              </button>
            </div>
            <p><strong>Referência no edital:</strong> {selectedNode.editalReference}</p>
            <p><strong>Status de desempenho:</strong> {performanceByNode.get(selectedNode.id) ?? 'sem-dados'}</p>

            <p><strong>O que mais cai</strong></p>
            <ul>{selectedNode.examHighlights.map((item) => <li key={item}>{item}</li>)}</ul>

            <p><strong>Erros comuns</strong></p>
            <ul>{selectedNode.commonMistakes.map((item) => <li key={item}>{item}</li>)}</ul>

            <p><strong>Diferenças críticas</strong></p>
            <ul>{selectedNode.criticalDifferences.map((item) => <li key={item}>{item}</li>)}</ul>

            <p><strong>Pegadinhas de prova</strong></p>
            <ul>{selectedNode.traps.map((item) => <li key={item}>{item}</li>)}</ul>

            {selectedNode.linkedQuestions.length ? (
              <>
                <p><strong>Integração mapa ↔ questões</strong></p>
                <ul>
                  {selectedNode.linkedQuestions.slice(0, 3).map((question) => (
                    <li key={question.id}>
                      {question.topic} {question.subtopic ? `› ${question.subtopic}` : ''} · <Link to={`/simulado?mode=subtopic&topic=${encodeURIComponent(question.topic)}&subtopic=${encodeURIComponent(question.subtopic ?? '')}`}>treinar agora</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {childTitles.length ? (
              <>
                <p><strong>Subtópicos diretos</strong></p>
                <ul>
                  {childTitles.map((title) => (
                    <li key={title}>{title}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </>
        ) : (
          <p>Selecione um tema para revisão orientada por erros de simulado.</p>
        )}
      </Card>
    </div>
  )
}
