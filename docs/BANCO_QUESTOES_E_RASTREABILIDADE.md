# Banco de questões e rastreabilidade

## Visão geral

O app utiliza um banco ativo unificado (`activeQuestions`) composto por duas origens:

1. **Questões sintéticas balanceadas** geradas em `src/data/questionBank/questions.ts`.
2. **Questões CBMSC derivadas do pipeline** em `src/data/questions/cbmscQuestions.ts`.

No estado atual:

- 200 sintéticas (8 blueprints PT × 8 variações + 34 blueprints ESP × 4 variações).
- 120 CBMSC derivadas (geradas por script).
- Total ativo esperado: **320**.

## Contrato de dados (nível app)

Tipo principal: `Question` (`src/domain/types.ts`), com campos obrigatórios para renderização, avaliação e analytics:

- identificação e classificação (`id`, `discipline`, `topic`, `subtopic`, `difficulty`);
- enunciado e alternativas;
- gabarito e explicação;
- vínculo com mapa mental (`relatedMindMapNodeId`);
- status (`isActive`);
- rastreabilidade opcional (`sourceRefs`, `supportSnippet`).

## Rastreabilidade com fonte oficial

As questões CBMSC incorporadas ao app preservam rastreabilidade via:

- `sourceRefs[].manualId`
- `sourceRefs[].sectionId`
- `sourceRefs[].sourceUrl`
- `sourceRefs[].excerpt`
- `sourceRefs[].pageStart/pageEnd`

A conversão para o formato de app ocorre em `toLegacyQuestion` (`src/data/questionBank/questions.ts`).

## Regras de qualidade já implementadas

Cobertas por testes em `src/tests/questionBank.test.ts`:

1. mínimo de 200 questões ativas;
2. 5 alternativas por questão;
3. 4 justificativas de alternativas incorretas;
4. controle de spread de tamanho de alternativa (reduzir acerto por heurística superficial);
5. mínimo de 120 questões com `sourceRefs`.

## Pontos de manutenção

- Se alterar schema de `QuestionDocument` ou `Question`, ajustar conversão em `toLegacyQuestion`.
- Se regenerar banco CBMSC, versionar `src/data/questions/cbmscQuestions.ts` e `generated-index.json` no mesmo commit.
- Sempre rodar `npm run test` após qualquer alteração no banco.
