# Pipeline de ingestão CBMSC (estado atual)

## Objetivo

Atualizar a base documental CBMSC e gerar artefatos consumidos pelo app:

- mapas mentais gerados (`src/data/mindmaps/cbmsc-*.json`);
- banco de questões derivadas (`src/data/questions/cbmscQuestions.ts`);
- índices de rastreabilidade (`data/cbmsc/manual_index.json`, `data/cbmsc/knowledge_map.json`).

## Etapas implementadas

## 1) Indexação — `npm run cbmsc:index`

- Coleta categorias e itens da biblioteca CBMSC.
- Resolve URLs de download diretas e por página de detalhe.
- Deduplica resultados.
- Mantém fallback quando coleta online falha (não interrompe pipeline).
- Saídas:
  - `data/cbmsc/manual_index.json`
  - `data/cbmsc/logs/index-log.json`

## 2) Download — `npm run cbmsc:download`

- Lê `manual_index.json`.
- Baixa arquivos para `data/cbmsc/raw/`.
- Reaproveita cache local (não baixa novamente arquivo já existente).
- Saída de auditoria: `data/cbmsc/logs/download-log.json`.

## 3) Parse de PDF real — `npm run cbmsc:parse`

- Usa `pdfjs-dist` para extrair texto por página.
- Constrói seções técnicas com heurística de heading/blocos.
- Calcula indicadores de qualidade textual por documento (`lowTextPages`, média de chars, `requiresOcrReview`).
- Inclui `sourceRefs` com páginas e trechos por seção.
- Saídas:
  - `data/cbmsc/parsed/*.json`
  - `data/cbmsc/logs/parse-log.json`

> Observação: arquivos não-PDF são ignorados no parse atual (`status: skipped`, `unsupported_extension`).

## 4) Normalização — `npm run cbmsc:normalize`

- Normaliza whitespace e keywords em cada seção.
- Gera cópia normalizada com `normalizedAt`.
- Saída: `data/cbmsc/normalized/*.json`.

## 5) Geração de mapas — `npm run cbmsc:generate-mindmaps`

- Cruza tópicos-alvo com seções normalizadas por score de palavras-chave.
- Gera mapas em JSON para uso direto no app.
- Atualiza `knowledge_map.json` com dependências, temas e seções relacionadas.
- Saídas:
  - `src/data/mindmaps/cbmsc-*.json`
  - `src/data/mindmaps/generated-index.json`
  - `data/cbmsc/knowledge_map.json`

## 6) Geração de questões — `npm run cbmsc:generate-questions`

- Cruza tópicos-alvo com seções normalizadas.
- Gera questões com:
  - tema/subtema;
  - dificuldade (`easy|medium|hard`);
  - tipo de questão;
  - trecho de suporte e `sourceRefs`.
- Saídas:
  - `src/data/questions/cbmscQuestions.ts`
  - `src/data/questions/generated-index.json`

## 7) Validação mínima — `npm run cbmsc:validate`

Valida presença de arquivos canônicos mínimos:

- `data/cbmsc/manual_index.json`
- `data/cbmsc/knowledge_map.json`
- `src/data/mindmaps/classes-incendio.json`
- `src/data/questions/cbmscQuestions.ts`

## Execução completa recomendada

```bash
npm run cbmsc:index
npm run cbmsc:download
npm run cbmsc:parse
npm run cbmsc:normalize
npm run cbmsc:generate-mindmaps
npm run cbmsc:generate-questions
npm run cbmsc:validate
```

## Limitações conhecidas

- Parse atual cobre PDF; extensões DOC/XLS/PPT não são parseadas.
- A validação atual é estrutural (presença de arquivos), não valida qualidade pedagógica.
- Heurísticas de seção/score por keywords ainda podem exigir revisão manual de resultados.
