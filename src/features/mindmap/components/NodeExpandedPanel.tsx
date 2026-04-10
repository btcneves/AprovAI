import type { NodeLearningStats } from '@/domain/nodeLearningService'
import type { MindMapNode as MindMapNodeType } from '@/domain/types'

type NodeStatus = 'forte' | 'atencao' | 'fraco' | 'sem-dados'

type Props = {
  node: MindMapNodeType | null
  learning?: NodeLearningStats
  status: NodeStatus
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

export const NodeExpandedPanel = ({ node, learning, status, onOpenTopic, onTrainNode, onFocusBranch }: Props) => (
  <aside className="node-expanded-panel docked">
    {node ? (
      <>
        <header className="panel-header">
          <h4>{node.title}</h4>
          <p className="panel-subtitle">{node.descriptionShort}</p>
        </header>
        <section>
          <h5>Resumo</h5>
          <p>{node.descriptionDetailed}</p>
        </section>
        {renderList('Bullets principais', node.studyChecklist?.slice(0, 6))}
        {renderList('Exam highlights', node.examHighlights)}
        {renderList('Erros comuns', node.commonMistakes)}
        {renderList('Diferenças críticas', node.criticalDifferences)}
        {renderList('Pegadinhas', node.traps)}
        <section className="learning-status-card">
          <h5>Métricas de aprendizagem</h5>
          <p><strong>Status:</strong> {status}</p>
          <p>
            <strong>Histórico:</strong>{' '}
            {learning
              ? `visualizações ${learning.viewCount} · revisões ${learning.reviewCount} · acurácia ${learning.accuracyRate}%`
              : 'sem histórico'}
          </p>
        </section>
        <div className="actions-row panel-actions">
          <button onClick={() => onOpenTopic(node.id)}>Revisar</button>
          <button onClick={() => onTrainNode(node.id)}>Treinar</button>
          <button onClick={() => onFocusBranch(node.id)}>Focar</button>
        </div>
      </>
    ) : (
      <>
        <h4>Painel de estudo</h4>
        <p>Selecione “Detalhar” em qualquer nó para ver o conteúdo completo, métricas e ações de estudo.</p>
      </>
    )}
  </aside>
)
