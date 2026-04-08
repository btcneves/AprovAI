# MINDMAP_SPEC

## Objetivo

Criar uma experiência de mapa mental profissional para estudo de todo o conteúdo do edital.

## Funcionalidades obrigatórias

- mapa por disciplina
- mapa por tópico
- expansão e recolhimento de nós
- modo resumo
- modo detalhado
- busca por termo
- destaque visual por importância
- vínculo com questões do banco
- status de estudo por tópico

## Modelo recomendado

```ts
export type MindMapNode = {
  id: string
  title: string
  discipline: 'portugues' | 'especificos'
  descriptionShort: string
  descriptionDetailed: string
  parentId: string | null
  childrenIds: string[]
  tags: string[]
  editalReference: string
  relatedQuestionIds: string[]
}
```

## Regras de UX

- a leitura deve ser clara
- o usuário deve entender a hierarquia imediatamente
- o detalhamento não pode ser excessivamente longo na visão inicial
- o mapa deve servir tanto para revisão rápida quanto para aprofundamento

## Modos de visualização

### 1. Visão árvore
Estrutura vertical com expansão de ramos.

### 2. Visão cards
Cards por tema e subtópico.

### 3. Visão conectada
Nós com relações entre assuntos correlatos.

## Integração com o simulador

Quando o usuário errar uma questão, o sistema deve oferecer atalho para:
- abrir o tópico correspondente no mapa mental
- revisar questões parecidas
