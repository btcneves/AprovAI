import { Card } from '@/components/ui/Card'
import { editalContent } from '@/data/content/editalContent'

const TopicTree = ({ id, title, summary, reference, children }: (typeof editalContent)[number]) => (
  <li key={id}>
    <strong>{title}</strong> — {summary} <em>({reference})</em>
    {children ? <ul>{children.map((child) => <TopicTree key={child.id} {...child} />)}</ul> : null}
  </li>
)

export const ConteudoPage = () => (
  <Card title="Conteúdo navegável do edital">
    <ul className="content-tree">
      {editalContent.map((topic) => (
        <TopicTree key={topic.id} {...topic} />
      ))}
    </ul>
  </Card>
)
