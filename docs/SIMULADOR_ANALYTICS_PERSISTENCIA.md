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

- `weak-topics`: prioriza nós críticos/fracos do `nodeLearningService`.
- `topic`: treino filtrado por tema.
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
   - percentual com feedback visual,
   - comparação resposta marcada vs correta,
   - explicação,
   - trecho de apoio (`supportSnippet`) quando disponível,
   - link para mapa mental relacionado (`/mapas?focus=...`).
4. `buildErrorFollowUp` orienta revisão focada após erros.

## 3) Analytics adaptativo com decay temporal

Implementação central: `src/domain/analyticsService.ts` + `src/domain/learningMetrics.ts`.

### 3.1 Enriquecimento da tentativa

`enrichAttemptWithAnalytics` adiciona:

- `themes` e `subthemes` treinados;
- `difficulty` da sessão (ou `mista`);
- `wrongQuestionRefs` para revisão;
- `themeSnapshot` com total/certos/erros/taxa por tema;
- `accuracyRate` e `totalQuestions`.

### 3.2 Análise temporal

`buildTemporalAnalysis` calcula métricas por janela (7, 14 e 30 dias) com **peso temporal**:

- evento recente (hoje) ≈ peso 1.0;
- evento de ~7 dias ≈ peso 0.5;
- evento de ~30 dias ou mais ≈ peso 0.1.

Por tema: taxa média ponderada, frequência de erro ponderada, número de tentativas e tendência (`melhorando|piorando|estavel`).

### 3.3 Recomendações adaptativas

`buildRecommendations` gera até 6 recomendações priorizadas:

- `weak-recent`
- `falling`
- `undertrained`
- `recent-errors-review`

`DashboardPage` apresenta recomendações por prioridade (`Pxx`).

## 4) Persistência robusta (versionamento + migração)

### 4.1 Envelope versionado

Todos os domínios críticos usam envelope:

```json
{
  "version": 1,
  "data": { "...": "..." }
}
```

### 4.2 Migração e integridade

Implementado em `src/lib/storage.ts`:

- `getVersioned` com validação (`isValid`);
- migração automática de legado (`migrate[0]` para formato antigo sem envelope);
- fallback seguro para estrutura mínima quando houver dado inválido/corrompido.

Aplicações atuais:

- histórico de tentativas (`historyService` → `imarui_simulados`);
- progresso por nó (`nodeLearningService` → `aprovai_node_learning_v1`);
- nós revisados em mapas (`MapasPage` → `aprovai_map_reviewed_nodes`).

## 5) Compatibilidade retroativa

- Tentativas antigas sem snapshots são hidratadas via `hydrateAttempt`.
- Stores legadas sem `version` são migradas automaticamente na leitura.
- Dados inválidos não derrubam execução: sistema faz fallback para estrutura segura.

## 6) Limitações atuais

- Persistência local apenas no navegador (sem backend/sync em nuvem).
- Não há autenticação ou múltiplos perfis de usuário.
- Limpeza de histórico depende do usuário (sem política automática de retenção).
