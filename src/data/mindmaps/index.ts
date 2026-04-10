import type { MindMapDocument } from '@/types/cbmsc'
import classesIncendio from './classes-incendio.json'

const generatedModules = import.meta.glob('./cbmsc-*.json', { eager: true }) as Record<string, { default: MindMapDocument }>

const dedupeText = (lines: Array<string | null | undefined>, limit?: number) => {
  const seen = new Set<string>()
  const unique: string[] = []

  lines.forEach((line) => {
    const normalized = line?.trim()
    if (!normalized) return
    const key = normalized.toLowerCase()
    if (seen.has(key)) return
    seen.add(key)
    unique.push(normalized)
  })

  return limit ? unique.slice(0, limit) : unique
}

const normalizeMindmap = (map: MindMapDocument): MindMapDocument => ({
  ...map,
  summary: dedupeText([map.summary])[0] ?? map.summary,
  examHighlights: dedupeText([...(map.examHighlights ?? []), map.summary], 4),
  commonMistakes: dedupeText(map.commonMistakes ?? [], 4),
  nodes: map.nodes.map((node) => {
    const seen = new Set<string>()
    return {
      ...node,
      children: (node.children ?? []).filter((child) => {
        const key = child.label.trim().toLowerCase()
        if (!key || seen.has(key)) return false
        seen.add(key)
        return true
      }).slice(0, 4)
    }
  })
})

const generatedMaps = Object.values(generatedModules).map((module) => normalizeMindmap(module.default))

export const cbmscMindmaps: MindMapDocument[] = [normalizeMindmap(classesIncendio as MindMapDocument), ...generatedMaps]
