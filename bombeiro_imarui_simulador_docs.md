# Bombeiro Imaruí 2026 — Especificação do Repositório para IA/Codex

## 1. Objetivo do projeto
Criar uma aplicação web moderna, responsiva e profissional para estudo do Concurso Público 01/2026 de Bombeiro Comunitário do Município de Imaruí/SC.

A aplicação deve ter dois pilares principais:

1. **Mapas mentais completos do edital**, organizados por disciplina, tópicos, subtópicos e conexões visuais entre os conteúdos.
2. **Simulado realista da prova objetiva**, com exatamente **35 questões por tentativa**, sendo:
   - **5 questões de Língua Portuguesa**
   - **30 questões de Conhecimentos Específicos**

O projeto deve ser desenvolvido para ser escalável, limpo, testável e fácil de evoluir com IA/Codex.

---

## 2. Base oficial do conteúdo
Todo o conteúdo programático deve ser fundamentado no edital do Concurso Público nº 001/2026 de Imaruí/SC para o cargo de **Bombeiro Comunitário**.

### Estrutura oficial da prova objetiva
- Prova objetiva com **35 questões**
- **5 questões de Língua Portuguesa**
- **30 questões de Conhecimentos Específicos**
- Questões com **5 alternativas**, sendo apenas **1 correta**
- Nota mínima para classificação na prova objetiva: **5,0 pontos**
- Pontuação por questão:
  - Língua Portuguesa: **0,20 por questão**
  - Conhecimentos Específicos: **0,30 por questão**

### Conteúdo oficial — Língua Portuguesa
- Análise e interpretação de texto
- Vocabulário
- Ortografia
- Nova ortografia
- Usos dos porquês
- Pontuação
- Acentuação gráfica
- Prosódia
- Estrutura e formação de palavras
- Classes gramaticais: classificação, empregos e flexões
- Adjetivos eruditos
- Adjetivos pátrios
- Conjugação verbal
- Semântica: sinônimos, antônimos, homônimos e parônimos
- Regência verbal e nominal
- Crase
- Concordância verbal e nominal
- Colocação pronominal
- Emprego dos pronomes
- Pronomes e formas de tratamento
- Níveis de linguagem
- Funções da linguagem
- Vícios de linguagem
- Termos essenciais, integrantes e acessórios da oração
- Orações coordenadas
- Orações subordinadas
- Estilística: figuras de linguagem
- Literatura Brasileira

### Conteúdo oficial — Conhecimentos Específicos
#### Núcleo 1 — Trânsito e condução
- Legislação de Trânsito
- Código de Trânsito Brasileiro
- Demais legislações referentes à condução de veículos
- Sistema Nacional de Trânsito
- Normas Gerais de Circulação
- Sinalização
- Veículos, licenciamento e habilitação
- Regras de circulação
- Deveres e proibições
- Infrações e penalidades
- Medidas e processos administrativos
- Direção defensiva
- Primeiros socorros
- Preservação do meio ambiente
- Direitos Humanos e Cidadania no trânsito
- Noções sobre funcionamento do veículo
- Transporte de urgência e emergência

#### Núcleo 2 — Combate a incêndio estrutural
Basear no manual:
- **Manual de Capacitação em Combate a Incêndio Estrutural — CBMSC — 1ª edição revisada**

#### Núcleo 3 — Atendimento básico a emergências
Basear no manual:
- **Manual de Capacitação em Atendimento Básico a Emergências — CBMSC**

#### Núcleo 4 — Serviço comunitário no CBMSC
Basear na norma:
- **Instrução Geral do Serviço Comunitário no Corpo de Bombeiros Militar de Santa Catarina — IG 10-03-BM**

---

## 3. Objetivos funcionais

### 3.1 Mapa mental profissional
O sistema deve possuir uma área dedicada a mapas mentais de estudo, com:

- mapa mental por disciplina
- mapa mental por subtema
- navegação por árvore de tópicos
- visão resumida e visão detalhada
- destaques visuais para assuntos mais cobrados
- conexões entre assuntos relacionados
- busca por tema
- filtros por disciplina
- status de estudo por tópico
- progresso por assunto
- versão mobile e desktop

### 3.2 Simulado realista
O sistema deve possuir um modo de simulado que replique a lógica do concurso:

- exatamente 35 questões por simulado
- 5 de português
- 30 de específicos
- alternativas A, B, C, D e E
- ordem das questões embaralhada
- ordem das alternativas embaralhada quando possível
- seleção automática de questões sem repetição dentro do mesmo simulado
- tentativa de evitar repetição entre simulados anteriores
- cronômetro opcional
- tela final com desempenho detalhado

### 3.3 Correção inteligente
Ao finalizar o simulado, o sistema deve mostrar:

- nota final
- total de acertos
- total de erros
- percentual de aproveitamento
- desempenho por disciplina
- lista das questões erradas
- alternativa marcada pelo usuário
- alternativa correta
- explicação objetiva do motivo da correta
- referência do tópico do edital relacionado
- sugestão de revisão do mapa mental correspondente

---

## 4. Requisitos de produto

### 4.1 Experiência do usuário
A aplicação deve parecer produto premium, não protótipo.

Diretrizes:
- interface limpa e moderna
- tipografia bem hierarquizada
- layout com ótimo espaçamento
- foco em legibilidade
- navegação intuitiva
- feedback visual claro
- acessibilidade básica
- carregamento rápido
- comportamento responsivo real

### 4.2 Regras pedagógicas
- o mapa mental deve traduzir o edital para linguagem clara
- o sistema não deve apenas listar tópicos: deve explicar de forma resumida e útil
- cada questão precisa estar vinculada a um tópico do edital
- cada erro precisa gerar aprendizado imediato
- o usuário deve conseguir revisar rapidamente os pontos fracos

### 4.3 Regras de banco de questões
- o banco deve iniciar com **mais de 100 questões válidas**, preferencialmente 140+
- distribuição mínima recomendada:
  - 30+ questões de Língua Portuguesa
  - 110+ questões de Conhecimentos Específicos
- cada questão deve conter metadados completos
- nenhuma questão pode ter duas respostas corretas
- explicações não podem ser genéricas
- não repetir a mesma pergunta no mesmo simulado
- ao gerar novo simulado, priorizar questões ainda não utilizadas nas últimas tentativas

---

## 5. Stack técnica recomendada

### Front-end
- React
- TypeScript
- Vite
- CSS Modules ou Tailwind CSS
- React Router
- Zustand ou Context API para estado leve
- TanStack Query opcional para dados
- Framer Motion para microinterações

### Back-end
Escolher uma das abordagens:

#### Opção A — Front-end first com banco local/mock
Para MVP inicial:
- JSON versionado no repositório
- persistência local com LocalStorage ou IndexedDB

#### Opção B — Full stack recomendada
- Node.js
- TypeScript
- Fastify ou Express
- Prisma ORM
- SQLite no MVP
- possibilidade futura de PostgreSQL

### Testes
- Vitest
- React Testing Library
- Playwright para fluxos críticos

### Qualidade
- ESLint
- Prettier
- Husky
- lint-staged

---

## 6. Arquitetura do projeto

```text
bombeiro-imarui-2026/
  docs/
    PROJECT_OVERVIEW.md
    PRODUCT_REQUIREMENTS.md
    IA_CODEX_INSTRUCTIONS.md
    CONTENT_MAP.md
    QUESTION_BANK_SPEC.md
    MINDMAP_SPEC.md
    SIMULADO_SPEC.md
    UI_UX_GUIDELINES.md
    ROADMAP.md
  public/
  src/
    app/
      router/
      providers/
      store/
    components/
      layout/
      ui/
      mindmap/
      quiz/
      results/
      progress/
    features/
      dashboard/
      edital/
      mindmaps/
      simulado/
      revisao/
      historico/
      desempenho/
    domain/
      entities/
      services/
      repositories/
      rules/
    data/
      questionBank/
      edital/
      mindmaps/
    hooks/
    lib/
    pages/
    styles/
    tests/
  package.json
  tsconfig.json
  vite.config.ts
  README.md
```

---

## 7. Modelagem de dados

### 7.1 Entidade de questão
```ts
export type Discipline = 'portugues' | 'especificos'

export type Question = {
  id: string
  discipline: Discipline
  area: string
  topic: string
  subtopic?: string
  difficulty: 'facil' | 'media' | 'dificil'
  sourceType: 'original' | 'adaptada' | 'inspirada'
  statement: string
  alternatives: {
    id: 'A' | 'B' | 'C' | 'D' | 'E'
    text: string
  }[]
  correctAlternativeId: 'A' | 'B' | 'C' | 'D' | 'E'
  explanation: string
  whyOthersAreWrong?: string[]
  editalReference: string
  tags: string[]
  isActive: boolean
}
```

### 7.2 Histórico de simulados
```ts
export type SimuladoAttempt = {
  id: string
  createdAt: string
  questionIds: string[]
  answers: {
    questionId: string
    selectedAlternativeId: 'A' | 'B' | 'C' | 'D' | 'E' | null
    isCorrect: boolean
  }[]
  score: number
  correctCount: number
  wrongCount: number
  portugueseCorrect: number
  specificCorrect: number
  durationInSeconds?: number
}
```

### 7.3 Nó do mapa mental
```ts
export type MindMapNode = {
  id: string
  title: string
  discipline: 'portugues' | 'especificos'
  descriptionShort: string
  descriptionDetailed: string
  parentId: string | null
  childrenIds: string[]
  tags: string[]
  editalReference: string
  relatedQuestionIds: string[]
}
```

---

## 8. Regras do gerador de simulados

### 8.1 Regras obrigatórias
O gerador deve:

1. selecionar exatamente 5 questões de português
2. selecionar exatamente 30 questões de específicos
3. impedir duplicidade de questão dentro da mesma tentativa
4. priorizar questões ainda não usadas recentemente
5. embaralhar a ordem final das 35 questões
6. opcionalmente embaralhar alternativas sem alterar a correta
7. validar consistência antes de iniciar

### 8.2 Estratégia recomendada
Implementar um algoritmo que:

- carregue o banco completo
- filtre apenas questões ativas
- separe por disciplina
- elimine questões usadas nas últimas X tentativas, quando houver estoque suficiente
- sorteie 5 de português
- sorteie 30 de específicos
- una os dois blocos
- embaralhe o resultado
- registre os IDs utilizados

### 8.3 Regras de fallback
Se o histórico de exclusão ficar muito restritivo:
- reduzir a janela de bloqueio
- permitir reaproveitamento controlado
- nunca quebrar a estrutura 5 + 30

---

## 9. Cálculo de nota
A correção deve respeitar o edital:

- cada acerto em português = **0,20**
- cada acerto em específicos = **0,30**
- nota máxima = **10,0**

### Fórmula
```ts
score = (portugueseCorrect * 0.2) + (specificCorrect * 0.3)
```

### Exibição final
- nota com uma ou duas casas decimais
- acertos totais
- erros totais
- percentual geral
- desempenho por bloco
- status indicativo visual

---

## 10. Módulos do sistema

### 10.1 Dashboard
- visão geral
- progresso acumulado
- atalho para iniciar simulado
- atalho para revisar erros
- estatísticas pessoais

### 10.2 Conteúdo do edital
- visão estruturada do edital
- tópicos organizados
- filtros por disciplina
- links entre tópicos e questões

### 10.3 Mapas mentais
- visão em árvore
- visão em cards
- expansão e recolhimento
- marcação de concluído
- busca por termos

### 10.4 Simulado
- seleção de prova
- execução da prova
- navegação entre questões
- marcar para revisar
- contador de respondidas
- envio final

### 10.5 Resultado
- nota
- acertos e erros
- explicações das incorretas
- revisão por tópico
- botão para refazer com novas questões

### 10.6 Histórico
- lista de tentativas
- evolução de nota
- taxa de acerto por disciplina
- tópicos com maior incidência de erro

### 10.7 Revisão inteligente
- ranking dos assuntos em que o usuário mais erra
- acesso direto ao mapa mental do assunto
- seleção de questões focadas naquele tópico

---

## 11. Requisitos visuais

### 11.1 Estilo
- design moderno
- aparência sólida e profissional
- sem excesso de cores gritantes
- foco em azul escuro, vermelho discreto, cinzas e branco
- visual compatível com estudo sério e concurso

### 11.2 Componentes importantes
- sidebar organizada
- cards de progresso
- barra de desempenho
- mapa mental interativo
- bloco de questão com alto contraste
- tela final de correção premium

### 11.3 Responsividade
- desktop prioritário
- tablet bem suportado
- mobile funcional

---

## 12. Regras de conteúdo para IA/Codex
A IA deve gerar o projeto obedecendo rigorosamente estas diretrizes:

1. não criar conteúdo genérico ou superficial
2. manter separação clara entre português e específicos
3. vincular cada questão a um tema do edital
4. gerar explicações corretivas úteis
5. não usar textos confusos ou prolixos
6. manter código limpo, modular e tipado
7. evitar gambiarra, duplicação e componentes gigantes
8. preferir arquitetura escalável
9. garantir experiência premium
10. preparar base para crescimento futuro

---

## 13. Critérios de aceite do MVP
O MVP só será considerado pronto quando atender estes critérios:

- aplicação inicia sem erros
- rotas principais funcionam
- há mapa mental navegável
- há banco com mais de 100 questões
- o simulado sempre gera 35 questões na estrutura correta
- não há repetição dentro da mesma tentativa
- o resultado final mostra nota, acertos, erros e explicações das incorretas
- histórico de tentativas funciona
- layout é responsivo
- testes mínimos passam

---

## 14. Roadmap de execução para IA/Codex

### Fase 1 — Fundação
- criar repositório
- configurar Vite + React + TypeScript
- configurar lint, format e estrutura base
- criar roteamento
- criar layout principal

### Fase 2 — Domínio e dados
- modelar entidades
- criar banco inicial em JSON
- criar serviço de leitura de questões
- criar serviço de geração de simulado

### Fase 3 — Conteúdo e mapas mentais
- estruturar tópicos do edital
- gerar mapas mentais por disciplina
- criar telas de navegação e busca

### Fase 4 — Simulado
- tela de instruções
- execução de prova
- seleção de respostas
- revisão antes de enviar
- correção final

### Fase 5 — Resultado e histórico
- tela detalhada de correção
- histórico de simulados
- estatísticas e evolução

### Fase 6 — Refino
- responsividade
- animações leves
- testes
- revisão final de UX

---

## 15. Arquivos que devem existir no repositório

### README.md
Deve conter:
- visão geral do projeto
- stack
- instalação
- scripts
- estrutura de pastas
- roadmap

### docs/PROJECT_OVERVIEW.md
Resumo executivo do sistema.

### docs/PRODUCT_REQUIREMENTS.md
Requisitos funcionais e não funcionais completos.

### docs/IA_CODEX_INSTRUCTIONS.md
Prompt operacional para a IA/Codex construir o projeto com disciplina técnica.

### docs/CONTENT_MAP.md
Mapa completo do conteúdo do edital dividido em áreas, tópicos e subtópicos.

### docs/QUESTION_BANK_SPEC.md
Especificação do banco de questões, schema, regras de qualidade e distribuição.

### docs/MINDMAP_SPEC.md
Especificação dos mapas mentais, navegação, relacionamentos e UX.

### docs/SIMULADO_SPEC.md
Fluxo do simulado, regras do algoritmo e cálculo de nota.

### docs/UI_UX_GUIDELINES.md
Guia visual e de experiência do usuário.

### docs/ROADMAP.md
Ordem recomendada de implementação.

---

## 16. Prompt-base para IA/Codex

```md
Você é um engenheiro de software sênior especializado em React, TypeScript, arquitetura front-end escalável, UX premium e produtos educacionais.

Sua tarefa é construir o projeto completo deste repositório com base nos arquivos de documentação em /docs.

Objetivo:
Criar uma plataforma web profissional para estudo do concurso Bombeiro Comunitário Imaruí 2026, com mapas mentais completos do edital e sistema de simulado realista com 35 questões por prova.

Regras obrigatórias:
- usar React + TypeScript
- manter código limpo, modular e fortemente tipado
- evitar arquivos gigantes
- criar componentes reutilizáveis
- implementar simulado com 5 questões de português e 30 de específicos
- impedir repetição dentro da mesma prova
- priorizar não repetição entre simulados
- exibir nota final, acertos, erros, percentual e explicação das incorretas
- vincular cada questão a um tópico do edital
- criar navegação clara entre mapa mental e revisão dos erros
- entregar experiência visual premium
- testar fluxos críticos

Processo:
1. leia toda a pasta /docs
2. proponha a estrutura final de pastas
3. implemente primeiro as entidades e serviços centrais
4. depois implemente layout, rotas e páginas
5. em seguida implemente mapas mentais e simulado
6. finalize com histórico, revisão e refinamento visual
7. nunca remova requisitos sem justificativa técnica
8. ao criar dados de exemplo, mantenha aderência ao edital
```

---

## 17. Banco de questões — política mínima
Cada questão deve conter:
- enunciado claro
- 5 alternativas
- 1 única correta
- explicação da correta
- disciplina
- tópico
- subtópico opcional
- referência do edital
- nível de dificuldade
- tags

### Distribuição sugerida do banco inicial
#### Português
- interpretação de texto
- ortografia
- acentuação
- crase
- concordância
- regência
- classes gramaticais
- pontuação
- semântica
- figuras de linguagem

#### Específicos
- CTB e legislação de trânsito
- sinalização
- circulação e conduta
- infrações, penalidades e medidas administrativas
- licenciamento e habilitação
- direção defensiva
- primeiros socorros
- meio ambiente no trânsito
- cidadania no trânsito
- funcionamento do veículo
- transporte de urgência e emergência
- combate a incêndio estrutural
- atendimento básico a emergências
- serviço comunitário no CBMSC

---

## 18. Funcionalidades futuras já previstas
- modo treino por assunto
- ranking pessoal
- exportação de desempenho em PDF
- trilha de estudos por fraqueza
- painel administrativo para cadastrar novas questões
- autenticação
- sincronização em nuvem

---

## 19. Padrão de qualidade esperado
Este projeto não deve ser tratado como protótipo simples. A expectativa é:

- organização de repositório profissional
- documentação clara
- código pronto para evolução
- UX forte
- conteúdo orientado ao edital
- comportamento confiável
- aparência de produto real

---

## 20. Entrega esperada da IA/Codex
A IA/Codex deve entregar:

- estrutura inicial pronta
- páginas principais funcionais
- dados iniciais consistentes
- sistema de simulado operacional
- tela de resultado detalhada
- mapas mentais navegáveis
- documentação mantida e coerente com a implementação

---

## 21. Sugestão de README inicial

```md
# Bombeiro Imaruí 2026

Plataforma de estudos para o Concurso Público 01/2026 de Bombeiro Comunitário do Município de Imaruí/SC.

## Recursos principais
- mapas mentais completos do edital
- simulados realistas com 35 questões
- banco com mais de 100 questões
- correção detalhada com explicações
- histórico de desempenho
- revisão por tópicos

## Stack
- React
- TypeScript
- Vite
- CSS/Tailwind
- Vitest
- Playwright

## Objetivo
Entregar uma experiência premium de estudo orientada ao edital, com foco em aprendizado, revisão estratégica e melhoria de desempenho.
```

---

## 22. Observação importante para implementação
A base oficial do conteúdo deve seguir estritamente o edital e os manuais/normas citados nele. A IA não deve inventar conteúdo jurídico/normativo sem marcar como material complementar. Em caso de dúvida, manter aderência ao edital como fonte principal.

