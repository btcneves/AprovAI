# PRODUCT_REQUIREMENTS

## 1. Requisitos funcionais

### RF-01 — Estrutura do edital
O sistema deve conter uma área de conteúdo organizada por:
- disciplina
- área
- tópico
- subtópico
- referência oficial

### RF-02 — Mapas mentais
O sistema deve gerar mapas mentais completos e navegáveis de todo o conteúdo cobrado no edital.

### RF-03 — Busca
O usuário deve conseguir pesquisar por termos, tópicos, subtópicos e palavras-chave.

### RF-04 — Simulado oficial
O sistema deve gerar simulados com exatamente:
- 5 questões de Língua Portuguesa
- 30 questões de Conhecimentos Específicos

### RF-05 — Banco de questões
O sistema deve iniciar com mais de 100 questões válidas.

### RF-06 — Não repetição no mesmo simulado
Nenhuma questão pode aparecer duas vezes na mesma prova.

### RF-07 — Repetição reduzida entre simulados
O sistema deve priorizar questões ainda não utilizadas nas últimas tentativas, quando houver estoque suficiente.

### RF-08 — Correção final
Ao concluir um simulado, o sistema deve mostrar:
- nota final
- acertos
- erros
- percentual
- desempenho por disciplina
- questões erradas com explicação

### RF-09 — Revisão
O usuário deve poder revisar as questões erradas e abrir diretamente o mapa mental do tema relacionado.

### RF-10 — Histórico
O sistema deve registrar histórico de simulados e evolução do desempenho.

## 2. Requisitos não funcionais

### RNF-01 — Stack
O sistema deve ser implementado em React + TypeScript.

### RNF-02 — Arquitetura
O código deve ser modular, tipado, testável e preparado para evolução.

### RNF-03 — UX
A interface deve ser moderna, limpa, responsiva e com alto foco em legibilidade.

### RNF-04 — Performance
O carregamento inicial deve ser rápido e o sistema deve funcionar bem mesmo com 100+ questões.

### RNF-05 — Qualidade
O repositório deve conter lint, formatação e testes mínimos para fluxos críticos.

## 3. Regras pedagógicas

- cada questão deve estar vinculada a um tópico do edital
- mapas mentais não devem apenas listar tópicos, devem resumir o conteúdo
- correções devem gerar aprendizado prático
- o sistema deve indicar o que revisar com base no erro cometido
