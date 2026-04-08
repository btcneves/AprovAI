# Bombeiro Imaruí 2026

Plataforma de estudos para o Concurso Público nº 001/2026 de Bombeiro Comunitário do Município de Imaruí/SC.

## Objetivo

Construir uma aplicação web moderna, profissional e escalável para estudo orientado ao edital, com dois pilares centrais:

- mapas mentais completos de todo o conteúdo cobrado
- simulados realistas com 35 questões por prova

## Estrutura oficial da prova

Conforme o edital, a prova objetiva do cargo de Bombeiro Comunitário possui:

- 35 questões no total
- 5 questões de Língua Portuguesa
- 30 questões de Conhecimentos Específicos
- 5 alternativas por questão, com apenas 1 correta
- pontuação de 0,20 por questão de Português
- pontuação de 0,30 por questão de Conhecimentos Específicos
- nota mínima de 5,0 para classificação na prova objetiva

## Recursos do sistema

- mapa mental profissional por disciplina, tema e subtópico
- busca por conteúdo do edital
- simulador de prova com 35 questões
- banco de dados com 100+ questões
- regra de não repetição dentro do mesmo simulado
- tentativa de evitar repetição entre simulados recentes
- correção completa ao final
- nota final automática
- total de acertos e erros
- explicação das questões erradas
- indicação da resposta correta e do motivo
- histórico de tentativas
- revisão por tópicos com base nos erros

## Stack recomendada

### Front-end
- React
- TypeScript
- Vite
- Tailwind CSS ou CSS Modules
- React Router
- Zustand ou Context API
- Framer Motion

### Testes e qualidade
- Vitest
- React Testing Library
- Playwright
- ESLint
- Prettier
- Husky
- lint-staged

### Dados
- JSON tipado no MVP
- persistência local com LocalStorage ou IndexedDB
- possibilidade futura de backend com Node.js + Prisma + SQLite/PostgreSQL

## Estrutura sugerida

```text
bombeiro-imarui-2026/
  docs/
  public/
  src/
    app/
    components/
    features/
    domain/
    data/
    hooks/
    lib/
    pages/
    styles/
    tests/
  README.md
  package.json
  tsconfig.json
  vite.config.ts
```

## Fluxo de implementação recomendado

1. Ler toda a pasta `docs/`
2. Criar a base do projeto com React + TypeScript + Vite
3. Modelar entidades e serviços centrais
4. Implementar conteúdo do edital
5. Implementar mapas mentais
6. Implementar motor de simulados
7. Implementar correção, histórico e revisão
8. Refinar UX, testes e responsividade

## Observação crítica

Toda a modelagem de conteúdo deve seguir estritamente o edital e os manuais/normas citados nele. Conteúdo complementar deve ser marcado como complementar, nunca como oficial.
