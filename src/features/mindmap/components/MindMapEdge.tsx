import { memo } from 'react'
import type { LayoutNode } from '@/features/mindmap/layout/RadialLayoutEngine'

type Props = {
  from: LayoutNode
  to: LayoutNode
  color: string
  highlighted: boolean
  muted: boolean
}

export const MindMapEdge = memo(({ from, to, color, highlighted, muted }: Props) => {
  const bend = Math.abs(to.y - from.y) * 0.45 + 36
  const cx1 = from.x + (to.x - from.x) * 0.35
  const cy1 = from.y + (to.y > from.y ? bend : -bend) * 0.18
  const cx2 = from.x + (to.x - from.x) * 0.7
  const cy2 = to.y - (to.y > from.y ? bend : -bend) * 0.14

  return (
    <path
      className={`mindmap-edge ${highlighted ? 'is-highlighted' : ''} ${muted ? 'is-muted' : ''}`}
      d={`M ${from.x} ${from.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${to.x} ${to.y}`}
      stroke={color}
      strokeOpacity={highlighted ? 0.74 : muted ? 0.15 : 0.35}
      strokeWidth={highlighted ? 3 : 2}
      fill="none"
    />
  )
})

MindMapEdge.displayName = 'MindMapEdge'
