# Bombeiro Imaruí 2026

Plataforma de estudos para o Concurso Público nº 001/2026 (Bombeiro Comunitário de Imaruí/SC), desenvolvida em React + TypeScript + Vite.

## Funcionalidades implementadas

- Conteúdo do edital em árvore navegável.
- Mapas mentais com busca, expansão/recolhimento de nós e atalho de revisão.
- Banco tipado com 150 questões ativas (40 de Português, 110 de Específicos).
- Gerador de simulado oficial: 35 questões (5 + 30), sem repetição na mesma prova.
- Evita repetição de questões recentes (janela de 5 tentativas quando houver estoque).
- Correção completa com nota, acertos, erros, percentual, marcada x correta e explicações.
- Histórico persistido em `localStorage` e revisão por erros.
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
