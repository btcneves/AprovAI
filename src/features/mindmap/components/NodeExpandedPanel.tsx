import type { NodeLearningStats } from '@/domain/nodeLearningService'
import type { MindMapNode as MindMapNodeType } from '@/domain/types'
import type { CollisionReport } from '@/features/mindmap/layout/RadialLayoutEngine'

type NodeStatus = 'forte' | 'atencao' | 'fraco' | 'sem-dados'

type Props = {
  node: MindMapNodeType | null
  learning?: NodeLearningStats
  status: NodeStatus
  collisions: CollisionReport
  onOpenTopic: (id: string) => void
  onTrainNode: (id: string) => void
  onFocusBranch: (id: string) => void
}

const renderList = (title: string, values?: string[]) => {
  if (!values?.length) return null
  return (
    <section>
      <h5>{title}</h5>
      <ul>{values.map((item) => <li key={`${title}-${item}`}>{item}</li>)}</ul>
    </section>
  )
}

export const NodeExpandedPanel = ({ node, learning, status, collisions, onOpenTopic, onTrainNode, onFocusBranch }: Props) => (
  <aside className="node-expanded-panel docked">
    {node ? (
      <>
        <header className="panel-header">
          <h4>{node.title}</h4>
          <p className="panel-subtitle">{node.descriptionShort}</p>
        </header>
        <section>
          <h5>Resumo pedagógico</h5>
          <p>{node.descriptionDetailed}</p>
        </section>
        <section>
          <h5>Status de aprendizagem</h5>
          <p><strong>Status atual:</strong> {status}</p>
          <p>
            <strong>Métricas:</strong>{' '}
            {learning
              ? `views ${learning.viewCount} · revisões ${learning.reviewCount} · acurácia ${learning.accuracyRate}%`
              : 'sem histórico'}
          </p>
        </section>
        {renderList('Resumo de estudo', node.summary ? [node.summary] : undefined)}
        {renderList('Pontos principais', node.studyChecklist)}
        {renderList('O que mais cai', node.examHighlights)}
        {renderList('Erros comuns', node.commonMistakes)}
        {renderList('Diferenças críticas', node.criticalDifferences)}
        {renderList('Pegadinhas', node.traps)}
        <div className="actions-row panel-actions">
          <button onClick={() => onOpenTopic(node.id)}>Revisar</button>
          <button onClick={() => onTrainNode(node.id)}>Treinar</button>
          <button onClick={() => onFocusBranch(node.id)}>Focar ramo</button>
        </div>
      </>
    ) : (
      <>
        <h4>Painel de estudo</h4>
        <p>Selecione um tópico e use “Expandir” para abrir subníveis ou “Detalhar” para ver o conteúdo completo.</p>
      </>
    )}

    <div className="collision-report">
      <h5>QA layout</h5>
      <p>Colisões iniciais: {collisions.initialCollisions}</p>
      <p>Evitadas: {collisions.resolvedCollisions}</p>
      <p>Restantes: {collisions.remainingCollisions}</p>
    </div>
  </aside>
)
