# Mapas mentais e geração de dados

## Fontes de mapas no app

A UI de mapas (`MapasPage`) utiliza `mindMapNodes`, que agrega duas origens:

1. **Nós curados** em `src/data/content/mindMapNodes.ts` (estrutura principal por edital/CBAE).
2. **Nós gerados** em `src/data/content/generatedMindMapNodes.ts`, derivados de `src/data/mindmaps/*.json`.

## Pipeline de geração de mapas CBMSC

Script: `npm run cbmsc:generate-mindmaps` (`scripts/cbmsc/generate-mindmaps.mjs`).

Etapas:

1. Lê documentos normalizados em `data/cbmsc/normalized/`.
2. Extrai seções e pontua aderência por palavras-chave (scoring heurístico).
3. Monta um `MindMapDocument` por tópico definido em `TOPICS`.
4. Escreve arquivos `src/data/mindmaps/cbmsc-*.json`.
5. Atualiza `src/data/mindmaps/generated-index.json`.
6. Atualiza `data/cbmsc/knowledge_map.json` com temas, dependências e referências de seção.

## Contrato dos mapas gerados

Tipo: `MindMapDocument` (`src/types/cbmsc.ts`), incluindo:

- `id`, `title`, `summary`;
- nós principais/filhos (`nodes`);
- destaques (`examHighlights`);
- erros comuns (`commonMistakes`);
- termos (`terms`);
- fontes (`sources`) com referência de manual/seção/páginas.

## Conversão para nós de UI

`generatedMindMapNodes.ts` converte cada `MindMapDocument` em:

- um nó raiz (`gen-${map.id}`) anexado em `root-especificos`;
- nós filhos com descrição e tags sanitizadas.

Isso permite navegar os mapas gerados na mesma árvore dos mapas curados.

## Observações de manutenção

- Se atualizar `TOPICS` no script, validar impacto em `knowledge_map.json` e navegação da página de mapas.
- Se houver fontes sem `sourceUrl`, a UI ainda renderiza mapa, mas perde link externo de referência.
- Sempre versionar os JSONs gerados quando houver regeneração oficial de conteúdo.

## Experiência fullscreen (v3)

A visualização do mapa mental foi refatorada para um modo fullscreen navegável, com viewport desacoplado do mundo lógico do grafo.

### Arquitetura

- `MindMapTree`: orquestra filtros, busca, foco de ramo e expansão/recolhimento.
- `MindMapCanvas`: controla viewport (`offsetX`, `offsetY`, `scale`), zoom no cursor, pan por drag, reset e foco por ramo.
- `NodeExpandedPanel`: painel lateral fixo para detalhes pedagógicos (resumo, highlights, erros, diferenças, pegadinhas, métricas e ações).
- `RadialLayoutEngine`: calcula distribuição angular por peso de subárvore, ring gaps progressivos e anti-colisão multipasso.

### Viewport / Zoom / Pan

- Mundo virtual maior que a área visível.
- Transformação aplicada por `translate + scale`.
- Zoom com scroll centrado no cursor quando possível.
- Drag para pan com cursores `grab/grabbing`.
- Reset de vista centraliza novamente na raiz.

### Layout radial por peso

- Utiliza 360° completos.
- Cada subárvore recebe faixa angular proporcional ao `subtreeWeight`.
- Ramos de nível 1 possuem maior isolamento visual.
- Distância entre níveis usa `ringGap >= 300px` para leitura.

### Anti-colisão

- Bounding boxes reais com padding.
- Múltiplos passes de ajuste angular intra-nível.
- Expansão radial em colisões inter-nível.
- Fallback final para cenários extremos.
- `collisionReport` retorna `initialCollisions`, `resolvedCollisions`, `remainingCollisions` e número de passes.

### Integração com aprendizado por nó

Fluxos de analytics e aprendizagem permanecem ativos:

- `registerNodeView` ao abrir revisão do nó.
- `registerNodeReview` ao marcar revisado.
- Ação de treino mantém roteamento por `topic/subtopic`.
- Painel mostra métricas por nó (`viewCount`, `reviewCount`, `accuracyRate`).
