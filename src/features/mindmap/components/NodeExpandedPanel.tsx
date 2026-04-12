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
    <section className="panel-section">
      <h5>{title}</h5>
      <ul>{values.map((item) => <li key={`${title}-${item}`}>{item}</li>)}</ul>
    </section>
  )
}

export const NodeExpandedPanel = ({ node, learning, status, onOpenTopic, onTrainNode, onFocusBranch }: Props) => (
  <aside className="node-expanded-panel docked premium">
    {node ? (
      <>
        <header className="panel-hero-header">
          <small>Trilha de estudo</small>
          <h4>{node.title}</h4>
          <p>{node.descriptionShort}</p>
        </header>
        <section className="panel-section">
          <h5>Resumo didático</h5>
          <p>{node.descriptionDetailed}</p>
        </section>
        {renderList('Roteiro de revisão rápida', node.studyChecklist?.slice(0, 8))}
        {renderList('Pontos-chave de prova', node.examHighlights)}
        {renderList('Erros comuns', node.commonMistakes)}
        {renderList('Diferenças críticas', node.criticalDifferences)}
        {renderList('Pegadinhas', node.traps)}

        <section className="learning-metrics">
          <h5>Métricas de aprendizagem</h5>
          <div className="metric-grid">
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Visualizações:</strong> {learning?.viewCount ?? 0}</p>
            <p><strong>Revisões:</strong> {learning?.reviewCount ?? 0}</p>
            <p><strong>Acurácia:</strong> {learning?.accuracyRate ?? 0}%</p>
          </div>
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
        <p>Selecione um nó para abrir o modo detalhe com resumo, pontos de prova e ações de revisão.</p>
      </>
    )}
  </aside>
)
