# Arquitetura de Conteúdo do AprovAI (CBMSC)

## Princípios
- Fonte primária: biblioteca oficial de manuais do CBMSC.
- Rastreabilidade por item (mapa e questão) via referências de origem.
- Tipagem forte para evolução segura do pipeline.

## Tipos principais (`src/types/cbmsc.ts`)
- `CBMSCManualIndexEntry`
- `CBMSCManualDocument`
- `CBMSCSection`
- `SourceRef`
- `MindMapDocument`
- `QuestionSourceRef`
- `QuestionDocument`

## Camadas
1. **Ingestão** (`scripts/cbmsc/*.mjs` + `src/features/content-ingestion`)
   - Descoberta de fontes
   - Download
   - Parse
   - Normalização

2. **Persistência de dados**
   - `data/cbmsc/*` para dados coletados/parseados/normalizados.
   - `src/data/mindmaps/*` para mapas mentais consumíveis pela UI.
   - `src/data/questions/*` para banco de questões versionado em código.

3. **Consumo pedagógico**
   - `MindMapDocument` com blocos de revisão (`examHighlights`, `commonMistakes`).
   - `QuestionDocument` com dificuldade, tipo de cobrança e `sourceRefs`.

## Estado atual da migração
- 1 mapa mental migrado para novo schema (`classes-incendio.json`).
- 10 questões migradas para novo schema (`cbmscQuestions.ts`).
- Pipeline básico funcional com scripts executáveis para indexação e etapas subsequentes.

## Gaps conhecidos
- Parse de PDF ainda está em modo inicial (stub com estrutura pronta).
- Questões migradas já estão no schema novo, porém parte dos `sourceRefs` ainda depende da indexação/parse final para manualId/sectionId definitivos.
