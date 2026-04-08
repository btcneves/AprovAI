# SIMULADO_SPEC

## Estrutura obrigatória da prova

Cada simulado deve conter exatamente:
- 5 questões de Língua Portuguesa
- 30 questões de Conhecimentos Específicos

Total:
- 35 questões

## Regras do gerador

1. carregar apenas questões ativas
2. separar por disciplina
3. escolher 5 de português
4. escolher 30 de específicos
5. impedir repetição na mesma tentativa
6. priorizar não repetir questões usadas recentemente
7. embaralhar ordem final das questões
8. opcionalmente embaralhar alternativas mantendo a correta consistente

## Histórico e bloqueio de repetição

Implementar uma janela de histórico recente. Exemplo:
- bloquear questões das últimas 3 ou 5 tentativas quando houver estoque suficiente

Se não houver estoque suficiente:
- reduzir a janela de bloqueio
- nunca quebrar a regra 5 + 30

## Correção

Ao finalizar, mostrar:
- nota final
- acertos
- erros
- percentual
- acertos em português
- acertos em específicos
- lista das erradas
- resposta marcada
- resposta correta
- explicação da correta
- link para revisar o tópico do mapa mental

## Cálculo de nota

```ts
score = (portugueseCorrect * 0.2) + (specificCorrect * 0.3)
```

## Entidade recomendada

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

## UX da prova

- cabeçalho com progresso
- contador de respondidas
- marcação para revisar
- navegação entre questões
- confirmação antes de finalizar
- tela premium de resultado
