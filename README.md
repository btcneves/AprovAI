# Bombeiro Imaruí 2026

Plataforma de estudos para o Concurso Público nº 001/2026 (Bombeiro Comunitário de Imaruí/SC), desenvolvida em React + TypeScript + Vite.

## Funcionalidades implementadas

- Conteúdo do edital em árvore navegável.
- Mapas mentais com busca, lista por tema/subtema, expansão/recolhimento, pontos que mais caem, erros comuns e fontes reais do manual.
- Banco tipado com 320 questões ativas (200 sintéticas balanceadas + 120 rastreáveis do CBMSC).
- Gerador de simulado oficial: 35 questões (5 + 30), sem repetição na mesma prova.
- Evita repetição de questões recentes (janela de 5 tentativas quando houver estoque).
- Correção completa com nota, acertos, erros, percentual, marcada x correta, explicação, trecho de apoio e link para mapa relacionado.
- Histórico persistido em `localStorage`, revisão por erros e dashboard com indicadores por tema/dificuldade.
- Testes mínimos de fluxos críticos (motor de simulado e consistência do banco).

## Scripts

```bash
npm install
npm run dev
npm run test
npm run lint
npm run build
```


## Pipeline CBMSC (primeira entrega)

```bash
npm run cbmsc:index
npm run cbmsc:download
npm run cbmsc:parse
npm run cbmsc:normalize
npm run cbmsc:generate-mindmaps
npm run cbmsc:generate-questions
npm run cbmsc:validate
```


## Persistência de dados derivados

A política oficial de persistência/reprodutibilidade está em `data/cbmsc/DERIVED_DATA_POLICY.md`.
