import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { useAppState } from '@/app/AppStateContext'
import { activeQuestions } from '@/data/questionBank/questions'
import { mindMapNodes } from '@/data/content/mindMapNodes'
import { buildNodeAccuracy, buildNodeErrorFrequency, enrichMindMapNode, inferPerformanceStatus } from '@/domain/mindmapPedagogy'
import { isCriticalNode, isNeglectedNode, rankNodeRecommendations } from '@/domain/nodeLearningService'
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

  const recommendedNodes = useMemo(() => {
    const entries = enrichedNodes.map((node) => nodeLearningById[node.id]).filter(Boolean)
    return rankNodeRecommendations(entries).slice(0, 5)
  }, [enrichedNodes, nodeLearningById])

  const handleToggleReviewed = (nodeId: string) => {
    setReviewedNodes((prev) => {
      const next = new Set(prev)
      const becameReviewed = !next.has(nodeId)
      if (next.has(nodeId)) next.delete(nodeId)
      else next.add(nodeId)
      if (becameReviewed) {
        registerNodeReview(nodeId)
      }
      storage.setVersioned(REVIEWED_STORAGE_KEY, REVIEWED_STORAGE_VERSION, [...next])
      return next
    })
  }

  const handleOpenTopic = (nodeId: string) => {
    registerNodeView(nodeId)
    setSelectedNodeId(nodeId)
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

  const selectedNodeLearning = selectedNode ? nodeLearningById[selectedNode.id] : undefined

  return (
    <div className="grid-2">
      <Card title="Mapa mental">
        <div className="transformation-report">
          <p><strong>Antes vs depois</strong></p>
          <ul>
            <li><strong>Antes:</strong> árvore vertical com blocos longos e pouca separação visual.</li>
            <li><strong>Depois:</strong> canvas radial com nó central, níveis hierárquicos e foco por ramo.</li>
            <li><strong>Depois:</strong> cores por tema, badges pedagógicos e indicadores de performance por nó.</li>
          </ul>
          <p><strong>Exemplo de nó transformado</strong></p>
          <ul>
            <li>Título curto + bullets objetivos.</li>
            <li>Badges: 🔥 examHighlights · ❌ commonMistakes · ⚖️ criticalDifferences · 🪤 traps.</li>
            <li>Status visual: fraco (vermelho), atenção (amarelo), forte (verde).</li>
          </ul>
        </div>
        <MindMapTree
          nodes={enrichedNodes}
          onOpenTopic={handleOpenTopic}
          onTrainNode={handleTrainNode}
          onToggleReviewed={handleToggleReviewed}
          reviewedNodeIds={reviewedNodes}
          performanceByNode={performanceByNode}
          nodeLearningById={nodeLearningById}
        />
      </Card>
      <Card title="Revisão guiada de prova">
        {recommendedNodes.length ? (
          <>
            <p><strong>Recomendados para foco imediato</strong></p>
            <ul>
              {recommendedNodes.map((node) => (
                <li key={node.nodeId}>
                  <button className="link-button" onClick={() => handleOpenTopic(node.nodeId)}>
                    {enrichedNodes.find((item) => item.id === node.nodeId)?.title ?? node.nodeId}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : <p>Sem recomendações no momento. Continue revisando por ciclos.</p>}

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
            <p>
              <strong>Evolução do nó:</strong>{' '}
              {selectedNodeLearning
                ? `views ${selectedNodeLearning.viewCount} · revisões ${selectedNodeLearning.reviewCount} · acurácia ${selectedNodeLearning.accuracyRate}% · tendência ${selectedNodeLearning.trend}`
                : 'sem histórico ainda'}
            </p>
            <p>
              <strong>Sinais do nó:</strong>{' '}
              {isCriticalNode(selectedNodeLearning) ? '⚠️ crítico por erros recentes' : 'sem criticidade recente'} ·{' '}
              {isNeglectedNode(selectedNodeLearning) ? '🕒 negligenciado (sem revisão recente)' : 'revisão em dia'}
            </p>
            {selectedNodeLearning?.history?.length ? (
              <>
                <p><strong>Histórico resumido (últimas sessões)</strong></p>
                <ul>
                  {selectedNodeLearning.history.slice(-4).reverse().map((entry) => (
                    <li key={`${selectedNode.id}-${entry.at}`}>
                      {new Date(entry.at).toLocaleString('pt-BR')} · {entry.accuracyRate}% acerto
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

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
