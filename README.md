# Bombeiro Imaruí 2026

Plataforma web de estudo para o Concurso Público nº 001/2026 (Bombeiro Comunitário de Imaruí/SC), com foco em três frentes: revisão de conteúdo, simulados com correção detalhada e ciclo de estudo orientado por dados.

## Estado atual do projeto

- **Aplicação SPA** em React + TypeScript + Vite.
- **Banco ativo com 320 questões**:
  - 200 questões sintéticas balanceadas (Português + Específicos).
  - 120 questões derivadas de pipeline CBMSC com `sourceRefs` rastreáveis.
- **Mapas mentais híbridos**:
  - nós curados/manualmente (estrutura de edital + CBAE);
  - nós gerados a partir de artefatos CBMSC (`src/data/mindmaps/cbmsc-*.json`).
- **Simulado oficial 5 + 30** (Português + Específicos), com filtros anti-repetição e pontuação ponderada.
- **Modo de estudo inteligente** (temas fracos, subtema, dificuldade, revisão de erros recentes).
- **Analytics persistente em `localStorage`** com schema versionado (`{ version, data }`), migração automática, validação de integridade, snapshots por tema, janelas temporais (7/14/30 dias) e recomendações adaptativas com decaimento temporal.

## Stack real

- **Frontend:** React 19, React Router 7, TypeScript 5, Vite 7.
- **Animações/UI:** framer-motion (uso pontual), CSS global.
- **Testes:** Vitest + Testing Library + JSDOM.
- **Qualidade:** ESLint (flat config).
- **Pipeline de dados CBMSC:** scripts Node.js (`scripts/cbmsc/*.mjs`) + `pdfjs-dist` para parse de PDF.

## Arquitetura resumida

- `src/pages/*`: páginas de produto (`Dashboard`, `Conteúdo`, `Mapas`, `Simulado`, `Histórico`).
- `src/domain/*`: regras de negócio (simulado, analytics, histórico).
- `src/data/*`: base de conteúdo (questões, mapas, edital).
- `scripts/cbmsc/*`: pipeline de ingestão/normalização/geração.
- `data/cbmsc/*`: artefatos de ingestão, logs e índices auxiliares.

Documentação detalhada:

- `docs/ARQUITETURA_CONTEUDO.md`
- `docs/PIPELINE_INGESTAO_CBMSC.md`
- `docs/BANCO_QUESTOES_E_RASTREABILIDADE.md`
- `docs/SIMULADOR_ANALYTICS_PERSISTENCIA.md`

## Setup

### Pré-requisitos

- Node.js 20+
- npm 10+

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Testes

```bash
npm run test
```

### Lint

```bash
npm run lint
```

### Build de produção

```bash
npm run build
npm run preview
```

## Scripts disponíveis

### App

- `npm run dev` — sobe ambiente local com Vite.
- `npm run build` — compila TypeScript e gera bundle.
- `npm run preview` — serve build localmente.
- `npm run test` — executa suíte de testes (run único via Vitest).
- `npm run test:watch` — executa testes em watch mode.
- `npm run lint` — valida código com ESLint.

### Pipeline CBMSC

- `npm run cbmsc:index` — indexa biblioteca CBMSC e atualiza `manual_index.json`.
- `npm run cbmsc:download` — baixa arquivos para `data/cbmsc/raw/`.
- `npm run cbmsc:parse` — extrai texto de PDFs e gera JSON parseado em `data/cbmsc/parsed/`.
- `npm run cbmsc:normalize` — normaliza seções em `data/cbmsc/normalized/`.
- `npm run cbmsc:generate-mindmaps` — gera mapas `src/data/mindmaps/cbmsc-*.json` + `knowledge_map.json`.
- `npm run cbmsc:generate-questions` — gera `src/data/questions/cbmscQuestions.ts`.
- `npm run cbmsc:validate` — valida artefatos mínimos esperados.

## Pipeline CBMSC (fluxo atual)

```text
index -> download -> parse (PDF real) -> normalize -> generate-mindmaps -> generate-questions -> validate
```

Observação importante: o parse **não está em stub**; hoje já usa `pdfjs-dist` para extração por página e montagem de seções técnicas.

## Como funciona o simulador

- **Modo oficial (`full`)**:
  - 35 questões por sessão;
  - 5 de Português + 30 de Específicos;
  - deduplicação canônica por enunciado (remove variações equivalentes);
  - bloqueio de repetição com janela recente (`BLOCK_WINDOW = 5` tentativas) quando houver estoque.
- **Modos de estudo inteligente**:
  - `weak-topics`: recorta temas com maior erro no histórico.
  - `subtopic`: treino por subtema específico.
  - `difficulty`: treino por dificuldade (`facil|media|dificil`).
  - `recent-wrong`: revisão de questões erradas nas últimas sessões.
- **Correção**:
  - nota calculada por peso oficial atual implementado (`0.2` Português, `0.3` Específicos);
  - detalhamento por acertos/erros e feedback por questão.

## Como funcionam analytics e recomendações

Após finalizar sessão, o app:

1. enriquece tentativa com snapshot por tema/subtema e taxa de acerto;
2. persiste a tentativa em `localStorage` (`imarui_simulados`);
3. atualiza análises temporais (7, 14 e 30 dias) com peso maior para eventos recentes (decay temporal);
4. produz recomendações adaptativas por prioridade:
   - fraqueza recente (`weak-recent`),
   - tendência de queda (`falling`),
   - tema subtreinado (`undertrained`),
   - revisão de erros recentes (`recent-errors-review`).

## Política de persistência de dados

- Política oficial: `data/cbmsc/DERIVED_DATA_POLICY.md`.
- O repositório **versiona artefatos finais e manifests**.
- Artefatos intermediários (`raw`, `parsed`, `normalized`) são reproduzíveis por script e não precisam ser versionados integralmente.
- Persistência de uso do aluno (histórico/analytics/mapas revisados/nós de aprendizagem) é local no navegador via `localStorage` com envelope versionado e migrações seguras.

## Estrutura principal de pastas

```text
src/
  app/
  components/
  data/
    content/
    mindmaps/
    questionBank/
    questions/
  domain/
  features/
  pages/
  tests/
scripts/
  cbmsc/
data/
  cbmsc/
docs/
```

## Limitações conhecidas (estado real)

- Persistência de progresso é apenas local (não há backend/cloud no estado atual).
- `cbmsc:validate` ainda verifica um conjunto mínimo de arquivos; não cobre validações semânticas profundas.
- Build atual gera chunk JS único grande (aviso de >500kB no Vite).

## Contribuição

Não existe `CONTRIBUTING.md` no estado atual. Até criação de guia formal, siga:

1. mantenha mudanças pequenas e rastreáveis;
2. rode `npm run lint`, `npm run test` e `npm run build`;
3. atualize docs afetadas na mesma PR.
