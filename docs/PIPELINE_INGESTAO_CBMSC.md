# Pipeline de Ingestão CBMSC (Primeira Entrega Funcional)

## Objetivo
Estabelecer o fluxo reutilizável de atualização de conteúdo com base na biblioteca oficial do CBMSC.

## Etapas implementadas
1. **Indexação** (`npm run cbmsc:index`)
   - Acessa a página principal da biblioteca CBMSC.
   - Descobre links de categorias automaticamente.
   - Percorre cada categoria e coleta links de documentos (PDF/DOC/DOCX/XLS/XLSX/PPT/PPTX).
   - Salva saída em `data/cbmsc/manual_index.json`.

2. **Download inicial** (`npm run cbmsc:download`)
   - Lê o índice e baixa os arquivos para `data/cbmsc/raw/`.
   - Evita baixar novamente arquivos já existentes.

3. **Parse inicial (stub funcional)** (`npm run cbmsc:parse`)
   - Converte cada arquivo bruto em documento JSON base em `data/cbmsc/parsed/`.
   - Estrutura já compatível com `CBMSCManualDocument`.

4. **Normalização inicial** (`npm run cbmsc:normalize`)
   - Limpa espaços e padroniza `keywords`.
   - Gera saída em `data/cbmsc/normalized/`.

5. **Geração de índices auxiliares**
   - `npm run cbmsc:generate-mindmaps`
   - `npm run cbmsc:generate-questions`

6. **Validação estrutural mínima** (`npm run cbmsc:validate`)
   - Confere arquivos obrigatórios da primeira entrega.

## Estrutura de diretórios
- `data/cbmsc/raw/`
- `data/cbmsc/parsed/`
- `data/cbmsc/normalized/`
- `data/cbmsc/manual_index.json`
- `data/cbmsc/knowledge_map.json`

## Próximo incremento técnico
- Substituir parser stub por extração real de PDF com preservação de seções/páginas.
- Relacionar seções normalizadas com temas em `knowledge_map.json`.
- Enriquecer `sourceRefs` com `manualId` e `sectionId` definitivos.
