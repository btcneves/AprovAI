import type { MindMapNode as MindMapNodeType } from '@/domain/types'

type Props = {
  node: MindMapNodeType
  onOpenTopic: (id: string) => void
  onTrainNode: (id: string) => void
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

export const NodeExpandedPanel = ({ node, onOpenTopic, onTrainNode }: Props) => (
  <aside className="node-expanded-panel">
    <h4>{node.title}</h4>
    <p>{node.descriptionDetailed}</p>
    {renderList('O que mais cai', node.examHighlights)}
    {renderList('Erros comuns', node.commonMistakes)}
    {renderList('Diferenças críticas', node.criticalDifferences)}
    {renderList('Pegadinhas', node.traps)}
    <div className="actions-row" style={{ justifyContent: 'flex-start' }}>
      <button onClick={() => onOpenTopic(node.id)}>Revisar</button>
      <button onClick={() => onTrainNode(node.id)}>Treinar</button>
    </div>
  </aside>
)
