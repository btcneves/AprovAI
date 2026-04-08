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

  const themeList = useMemo(() => {
    const parents = nodes.filter((node) => node.parentId === 'root-especificos' || node.parentId === 'root-portugues')
    return parents
      .map((parent) => ({
        theme: parent.title,
        id: parent.id,
        subthemes: parent.childrenIds
          .map((id) => nodes.find((node) => node.id === id)?.title)
          .filter(Boolean) as string[]
      }))
      .sort((a, b) => a.theme.localeCompare(b.theme))
  }, [nodes])

  return (
    <div className="grid-2">
      <Card title="Mapa mental">
        <MindMapTree nodes={nodes} onOpenTopic={setSelectedNodeId} />
      </Card>
      <Card title="Navegação por tema e revisão guiada">
        <p><strong>Temas e subtemas</strong></p>
        <ul>
          {themeList.map((item) => (
            <li key={item.id}>
              <button className="link-button" onClick={() => setSelectedNodeId(item.id)}>{item.theme}</button>
              {item.subthemes.length ? (
                <ul>
                  {item.subthemes.map((subtheme) => <li key={`${item.id}-${subtheme}`}>{subtheme}</li>)}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>

        {selectedNode ? (
          <>
            <p>
              Foco atual: <strong>{selectedNode.title}</strong>
            </p>
            <p>{selectedNode.summary ?? selectedNode.descriptionDetailed}</p>
            <p>
              <strong>Referência no edital:</strong> {selectedNode.editalReference}
            </p>
            <p>
              <strong>Prioridade:</strong> {selectedNode.priority}
            </p>
            {selectedNode.examHighlights?.length ? (
              <>
                <p><strong>Pontos que mais caem</strong></p>
                <ul>
                  {selectedNode.examHighlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            ) : null}
            {selectedNode.commonMistakes?.length ? (
              <>
                <p><strong>Erros comuns</strong></p>
                <ul>
                  {selectedNode.commonMistakes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            ) : null}
            {selectedNode.sources?.length ? (
              <>
                <p><strong>Fontes reais do manual</strong></p>
                <ul>
                  {selectedNode.sources.map((source) => (
                    <li key={`${source.manualId}-${source.sectionId ?? 'n/a'}`}>
                      {source.manualTitle ?? source.manualId}
                      {source.sectionId ? ` | ${source.sectionId}` : ''}
                      {source.pageStart ? ` | p. ${source.pageStart}${source.pageEnd && source.pageEnd !== source.pageStart ? `-${source.pageEnd}` : ''}` : ''}
                      {' '}
                      <a href={source.sourceUrl} target="_blank" rel="noreferrer">abrir</a>
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
