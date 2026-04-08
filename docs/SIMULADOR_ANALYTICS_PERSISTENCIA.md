# Simulador, revisão pós-simulado, analytics e persistência

## 1) Simulador

Implementação central: `src/domain/simuladoService.ts`.

## 1.1 Modo oficial (`full`)

- 35 questões totais.
- Distribuição fixa: 5 Português + 30 Específicos.
- Deduplicação canônica por enunciado normalizado.
- Anti-repetição com janela de bloqueio de 5 tentativas recentes (`BLOCK_WINDOW = 5`) quando houver estoque.
- Balanceamento adicional em específicos:
  - limite de até 4 questões por tópico/subtópico;
  - meta por dificuldade (10 fácil, 10 média, 10 difícil) antes de fallback.

## 1.2 Modo de estudo inteligente

Disponível em `SimuladoPage`:

- `weak-topics`: recorta 3 piores subtemas por erro histórico.
- `subtopic`: treino filtrado por subtema.
- `difficulty`: treino por dificuldade específica.
- `recent-wrong`: prioriza questões erradas nas últimas 8 tentativas.

Quantidade padrão em modos inteligentes: 20 questões.

## 2) Correção e revisão pós-simulado

Ao finalizar sessão:

1. `evaluateSimulado` calcula acertos/erros e score ponderado.
2. Score atual implementado: `ptCorrect * 0.2 + specificCorrect * 0.3`.
3. `ResultPanel` mostra:
   - nota,
   - percentuais,
   - comparação resposta marcada vs correta,
   - explicação,
   - trecho de apoio (`supportSnippet`) quando disponível,
   - link para mapa mental relacionado (`/mapas?focus=...`).
4. `buildErrorFollowUp` orienta revisão focada após erros.

## 3) Analytics persistente

Implementação central: `src/domain/analyticsService.ts`.

## 3.1 Enriquecimento da tentativa

`enrichAttemptWithAnalytics` adiciona:

- `themes` e `subthemes` treinados;
- `difficulty` da sessão (ou `mista`);
- `wrongQuestionRefs` para revisão;
- `themeSnapshot` com total/certos/erros/taxa por tema;
- `accuracyRate` e `totalQuestions`.

## 3.2 Análise temporal

`buildTemporalAnalysis` calcula métricas por janela:

- 7 dias;
- 14 dias;
- 30 dias.

Por tema: taxa média, frequência de erro, número de tentativas e tendência (`melhorando|piorando|estavel`).

## 3.3 Recomendações adaptativas

`buildRecommendations` gera até 6 recomendações priorizadas:

- `weak-recent`
- `falling`
- `undertrained`
- `recent-errors-review`

`DashboardPage` apresenta recomendações com prioridade (`Pxx`).

## 4) Persistência

Persistência de histórico de estudo:

- chave: `imarui_simulados`;
- mecanismo: `localStorage` via `src/lib/storage.ts`;
- acesso por `loadAttempts`/`saveAttempt` (`historyService`).

Ao carregar app, tentativas antigas são hidratadas (`hydrateAttempt`) para manter compatibilidade com registros sem campos novos.

## 5) Limitações atuais

- Persistência local apenas no navegador (sem backend/sync em nuvem).
- Não há autenticação ou múltiplos perfis de usuário.
- Limpeza de histórico depende do usuário (sem política automática de retenção).
