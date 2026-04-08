import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { mindMapNodes } from '@/data/content/mindMapNodes'
import { MindMapTree } from '@/features/mindmap/components/MindMapTree'

export const MapasPage = () => {
  const [params] = useSearchParams()
  const focusNodeId = params.get('focus')

  const nodes = useMemo(() => mindMapNodes, [])
  const focusFromQuery = useMemo(() => nodes.find((node) => node.id === focusNodeId) ?? null, [focusNodeId, nodes])
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(focusNodeId)

  const selectedNode = useMemo(
    () => nodes.find((node) => node.id === (selectedNodeId ?? focusFromQuery?.id ?? '')) ?? focusFromQuery,
    [focusFromQuery, nodes, selectedNodeId]
  )

  const childTitles = useMemo(() => {
    if (!selectedNode) {
      return []
    }
    return selectedNode.childrenIds.map((id) => nodes.find((node) => node.id === id)?.title).filter(Boolean) as string[]
  }, [nodes, selectedNode])

  return (
    <div className="grid-2">
      <Card title="Mapa mental">
        <MindMapTree nodes={nodes} onOpenTopic={setSelectedNodeId} />
      </Card>
      <Card title="Resumo detalhado">
        {selectedNode ? (
          <>
            <p>
              Foco atual: <strong>{selectedNode.title}</strong>
            </p>
            <p>{selectedNode.descriptionDetailed}</p>
            <p>
              <strong>Referência no edital:</strong> {selectedNode.editalReference}
            </p>
            <p>
              <strong>Prioridade:</strong> {selectedNode.priority}
            </p>
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
            {selectedNode.studyChecklist?.length ? (
              <>
                <p><strong>Roteiro de estudo</strong></p>
                <ul>
                  {selectedNode.studyChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {selectedNode.studyReferences?.length ? (
              <>
                <p><strong>Referências complementares</strong></p>
                <ul>
                  {selectedNode.studyReferences.map((reference) => (
                    <li key={reference.label}>
                      <span>{reference.label}</span>
                      {reference.url ? (
                        <>
                          {' '}
                          —{' '}
                          <a href={reference.url} target="_blank" rel="noreferrer">
                            acessar
                          </a>
                        </>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </>
        ) : (
          <p>Selecione um tema para revisão orientada por erros de simulado.</p>
        )}
        <p>Use a busca para localizar termos e expanda/recolha ramos conforme sua necessidade.</p>
      </Card>
    </div>
  )
}
