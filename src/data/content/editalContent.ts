export type ContentTopic = {
  id: string
  title: string
  summary: string
  reference: string
  children?: ContentTopic[]
}

export const editalContent: ContentTopic[] = [
  {
    id: 'portugues',
    title: 'Língua Portuguesa',
    summary: 'Interpretação, gramática, semântica, sintaxe e expressividade.',
    reference: 'Edital 001/2026 — Conteúdo Programático de Língua Portuguesa',
    children: [
      {
        id: 'portugues-interpretacao',
        title: 'Interpretação e compreensão',
        summary: 'Leitura crítica e análise de sentido textual.',
        reference: 'Item 1.1',
        children: [
          { id: 'pt-analise', title: 'Análise e interpretação de texto', summary: 'Compreender tese, inferências e coesão.', reference: 'Item 1.1' },
          { id: 'pt-vocabulario', title: 'Vocabulário', summary: 'Sentido contextual e precisão lexical.', reference: 'Item 1.1' },
          { id: 'pt-niveis', title: 'Níveis de linguagem', summary: 'Adequação da linguagem ao contexto.', reference: 'Item 1.1' },
          { id: 'pt-funcoes', title: 'Funções da linguagem', summary: 'Reconhecer intenção comunicativa.', reference: 'Item 1.1' }
        ]
      },
      {
        id: 'portugues-escrita', title: 'Escrita correta', summary: 'Normas de ortografia e acentuação.', reference: 'Item 1.2',
        children: [
          { id: 'pt-ortografia', title: 'Ortografia e nova ortografia', summary: 'Grafia conforme acordo ortográfico.', reference: 'Item 1.2' },
          { id: 'pt-porque', title: 'Usos dos porquês', summary: 'Emprego correto das formas.', reference: 'Item 1.2' },
          { id: 'pt-acentuacao', title: 'Acentuação e prosódia', summary: 'Regras acentuais e tonicidade.', reference: 'Item 1.2' }
        ]
      },
      {
        id: 'portugues-sintaxe', title: 'Sintaxe e estrutura da língua', summary: 'Formação de palavras, classes e relações sintáticas.', reference: 'Itens 1.3 e 1.5'
      },
      {
        id: 'portugues-semantica', title: 'Relações semânticas', summary: 'Sinônimos, antônimos, homônimos e parônimos.', reference: 'Item 1.4'
      },
      {
        id: 'portugues-expressividade', title: 'Expressividade', summary: 'Pontuação, vícios de linguagem, estilística e figuras.', reference: 'Item 1.6'
      }
    ]
  },
  {
    id: 'especificos',
    title: 'Conhecimentos Específicos',
    summary: 'Trânsito, incêndio estrutural, emergências e serviço comunitário.',
    reference: 'Edital 001/2026 — Conteúdo Programático de Conhecimentos Específicos',
    children: [
      { id: 'esp-transito', title: 'Trânsito e condução', summary: 'CTB, sinalização, circulação, penalidades e socorros.', reference: 'Item 2.1' },
      { id: 'esp-incendio', title: 'Combate a incêndio estrutural', summary: 'Teoria do fogo, extinção, segurança e operações iniciais.', reference: 'Item 2.2 + Manual CBMSC' },
      { id: 'esp-emergencias', title: 'Atendimento básico a emergências', summary: 'Avaliação da cena, ABC, trauma, transporte e suporte básico.', reference: 'Item 2.3 + Manual CBMSC' },
      { id: 'esp-servico', title: 'Serviço comunitário no CBMSC', summary: 'Finalidade, estrutura, atribuições, limites e condutas.', reference: 'Item 2.4 + IG 10-03-BM' }
    ]
  }
]
