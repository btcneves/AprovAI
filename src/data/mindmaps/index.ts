import type { MindMapDocument } from '@/types/cbmsc'
import classesIncendio from './classes-incendio.json'

const generatedModules = import.meta.glob('./cbmsc-*.json', { eager: true }) as Record<string, { default: MindMapDocument }>
const generatedMaps = Object.values(generatedModules).map((module) => module.default)

export const cbmscMindmaps: MindMapDocument[] = [classesIncendio as MindMapDocument, ...generatedMaps]
