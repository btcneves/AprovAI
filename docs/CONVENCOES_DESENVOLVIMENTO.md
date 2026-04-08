# Convenções de desenvolvimento e manutenção

## Objetivo

Padronizar contribuições para manter consistência entre código, dados e documentação.

## 1) Requisitos de validação antes de merge

Executar localmente:

```bash
npm run lint
npm run test
npm run build
```

Se alterar pipeline CBMSC ou artefatos derivados, executar também:

```bash
npm run cbmsc:validate
```

## 2) Convenções de código

- Usar alias `@/` para imports de `src/`.
- Tipar contratos de domínio em `src/domain/types.ts` e `src/types/cbmsc.ts`.
- Regras de negócio ficam em `src/domain/*`; páginas devem apenas orquestrar fluxo/UI.
- Evitar acoplamento de scripts CBMSC com runtime React.

## 3) Convenções de dados

- Não editar manualmente JSONs de `data/cbmsc/parsed` e `data/cbmsc/normalized` gerados por script.
- Ao regenerar perguntas/mapas CBMSC, versionar também arquivos de índice (`generated-index.json`).
- Manter rastreabilidade (`sourceRefs`) sempre que houver fonte oficial disponível.

## 4) Convenções de documentação

- README: visão geral, setup e comandos reais.
- `docs/*`: detalhes técnicos por área.
- Nunca documentar feature futura como implementada.
- Quando remover/alterar comportamento, atualizar docs no mesmo commit.

## 5) Mudanças que exigem revisão documental obrigatória

- alteração em scripts do `package.json`;
- alteração em estrutura de pastas/chaves de persistência;
- alteração em regras de seleção/avaliação de simulado;
- alteração em pipeline CBMSC ou política de artefatos derivados.
