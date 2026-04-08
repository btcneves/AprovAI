import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { mindMapNodes } from '@/data/content/mindMapNodes'
import { MindMapTree } from '@/features/mindmap/components/MindMapTree'

export const MapasPage = () => {
  const [params] = useSearchParams()
  const focusNode = params.get('focus')

  const nodes = useMemo(() => mindMapNodes, [])

  return (
    <div className="grid-2">
      <Card title="Mapa mental">
        <MindMapTree nodes={nodes} onOpenTopic={() => undefined} />
      </Card>
      <Card title="Resumo detalhado">
        {focusNode ? (
          <p>
            Foco atual: <strong>{nodes.find((node) => node.id === focusNode)?.title ?? 'Tópico não encontrado'}</strong>
          </p>
        ) : (
          <p>Selecione um tema para revisão orientada por erros de simulado.</p>
        )}
        <p>Use a busca para localizar termos e expanda/recolha ramos conforme sua necessidade.</p>
      </Card>
    </div>
  )
}
