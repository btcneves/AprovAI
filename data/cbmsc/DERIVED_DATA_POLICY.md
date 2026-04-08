# Política de persistência dos dados derivados (CBMSC)

## Decisão técnica adotada
A estratégia oficial do projeto passa a ser **versionar artefatos finais e manifests reprodutíveis**, sem depender de um único workspace local.

### O que fica preservado no repositório
- `src/data/questions/cbmscQuestions.ts`: banco final de questões usado pelo app.
- `src/data/mindmaps/cbmsc-*.json` e `src/data/mindmaps/generated-index.json`: mapas mentais finais usados pelo app.
- `data/cbmsc/manual_index.json`: catálogo oficial dos manuais coletados.
- `data/cbmsc/knowledge_map.json`: índice normalizado de conhecimento.
- `data/cbmsc/logs/*.json`: logs de ingestão, parse e indexação para auditoria.

### O que é reproduzível por script (não versionado)
- `data/cbmsc/raw/*`: downloads brutos (PDF/HTML) recuperáveis por `scripts/cbmsc/download.mjs`.
- `data/cbmsc/parsed/*`: extrações intermediárias geradas por `scripts/cbmsc/parse.mjs`.
- `data/cbmsc/normalized/*`: seções intermediárias geradas por `scripts/cbmsc/normalize.mjs`.

### Garantia de portabilidade
Qualquer ambiente novo consegue reconstruir os intermediários executando o pipeline (`index -> download -> parse -> normalize -> generate-*`) porque os artefatos finais e índices versionados preservam a base canônica do app.
