# Arquitetura real do projeto

Este documento descreve a arquitetura **atual** do repositório (código + dados + pipeline), sem assumir funcionalidades futuras.

## 1) Visão em camadas

### 1.1 Camada de apresentação (UI)

- `src/pages/*`: composição de telas (`DashboardPage`, `ConteudoPage`, `MapasPage`, `SimuladoPage`, `HistoricoPage`).
- `src/components/*`: shell/layout e componentes visuais reutilizáveis.
- `src/features/*`: componentes de domínio por feature (`mindmap`, `simulado`).

### 1.2 Camada de domínio

- `src/domain/simuladoService.ts`
  - geração de simulados (modo oficial e inteligente);
  - deduplicação canônica de enunciados;
  - estratégia anti-repetição;
  - avaliação e cálculo de nota.
- `src/domain/analyticsService.ts`
  - enriquecimento de tentativas com snapshots;
  - análise temporal 7/14/30 dias;
  - recomendações adaptativas.
- `src/domain/historyService.ts`
  - hidratação e persistência do histórico.

### 1.3 Camada de dados de produto

- `src/data/questionBank/questions.ts`
  - combina questões sintéticas + banco CBMSC gerado (`cbmscQuestions.ts`).
- `src/data/content/*`
  - árvore de conteúdo do edital;
  - mapeamento de nós mentais gerados e curados.
- `src/data/mindmaps/*`
  - mapas gerados no pipeline + mapa curado (`classes-incendio.json`).

### 1.4 Camada de ingestão CBMSC

- `scripts/cbmsc/*.mjs`
  - indexação, download, parse, normalização, geração e validação.
- `data/cbmsc/*`
  - artefatos intermediários/reprodutíveis, índices e logs.

## 2) Fluxos principais da aplicação

## 2.1 Fluxo de simulado

1. Usuário inicia sessão em `SimuladoPage`.
2. `buildSimulado` seleciona questões conforme modo.
3. Usuário responde e finaliza.
4. `evaluateSimulado` calcula score/acertos/erros.
5. `enrichAttemptWithAnalytics` anexa métricas (temas, snapshots, taxa).
6. `saveAttempt` persiste no `localStorage`.
7. Dashboard/Histórico consomem tentativas persistidas.

## 2.2 Fluxo de mapas mentais

1. Nós estáticos + gerados são agregados em `mindMapNodes`.
2. `MapasPage` apresenta árvore navegável.
3. Ao selecionar nó, exibe resumo, destaques de prova, erros comuns e fontes quando disponíveis.

## 2.3 Fluxo de analytics

1. Histórico é hidratado ao carregar app (`hydrateAttempt`).
2. `DashboardPage` calcula indicadores agregados.
3. `buildTemporalAnalysis` produz métricas por janela.
4. `buildRecommendations` prioriza ações de estudo.

## 3) Estrutura de diretórios relevante

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
scripts/cbmsc/
data/cbmsc/
docs/
```

## 4) Decisões arquiteturais vigentes

- Frontend sem backend: estado de usuário persiste localmente.
- Dados pedagógicos finais versionados no repositório para reproducibilidade.
- Pipeline CBMSC separado do runtime da SPA (scripts Node).
- Tipagem explícita para contratos de questão, tentativa, mapa e documentos CBMSC.

## 5) Pontos de atenção

- Não há sincronização multi-dispositivo (sem API/cloud).
- Não há camada de banco externo no estado atual.
- `cbmsc:validate` cobre presença de artefatos mínimos, não qualidade semântica completa.
