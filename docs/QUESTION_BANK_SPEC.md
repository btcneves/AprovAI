# QUESTION_BANK_SPEC

## Objetivo

Definir o padrão do banco de questões usado pelo simulador.

## Quantidade mínima

O projeto deve iniciar com mais de 100 questões.
Recomendação:
- 30+ questões de Língua Portuguesa
- 110+ questões de Conhecimentos Específicos

## Regras obrigatórias

- cada questão deve ter 5 alternativas
- apenas 1 alternativa correta
- enunciado claro
- explicação da correta obrigatória
- vínculo com tema do edital obrigatório
- dificuldade informada
- tags informadas
- estado ativo/inativo

## Schema recomendado

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

## Qualidade das explicações

As explicações devem:
- dizer por que a correta é correta
- evitar frases vagas
- apontar o conceito central
- ajudar na revisão imediata

## Distribuição recomendada

### Português
- interpretação
- ortografia
- acentuação
- pontuação
- crase
- concordância
- regência
- pronomes
- semântica
- figuras de linguagem

### Específicos
- CTB
- legislação de trânsito
- sinalização
- circulação
- penalidades
- habilitação
- primeiros socorros
- direção defensiva
- funcionamento do veículo
- transporte de urgência e emergência
- combate a incêndio estrutural
- atendimento básico a emergências
- serviço comunitário no CBMSC

## Armazenamento

No MVP, o banco pode ficar em:
- `src/data/questionBank/questions.ts`
ou
- `src/data/questionBank/questions.json`

Com tipagem e validação na camada de domínio.
