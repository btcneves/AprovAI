import { memo } from 'react'
import type { LayoutNode } from '@/features/mindmap/layout/RadialLayoutEngine'

type Props = {
  from: LayoutNode
  to: LayoutNode
  color: string
  highlighted: boolean
}

export const MindMapEdge = memo(({ from, to, color, highlighted }: Props) => {
  const cx1 = from.x + (to.x - from.x) * 0.25
  const cy1 = from.y + (to.y - from.y) * 0.12
  const cx2 = from.x + (to.x - from.x) * 0.75
  const cy2 = to.y - (to.y - from.y) * 0.12

  return (
    <path
      className={`mindmap-edge ${highlighted ? "is-highlighted" : ""}`}
      d={`M ${from.x} ${from.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${to.x} ${to.y}`}
      stroke={color}
      strokeOpacity={highlighted ? 0.56 : 0.2}
      strokeWidth={highlighted ? 2.6 : 1.35}
      fill="none"
    />
  )
})

MindMapEdge.displayName = 'MindMapEdge'
