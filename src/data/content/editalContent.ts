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
    summary: 'Conteúdo completo do Anexo I (nível médio), incluindo gramática, sintaxe, semântica, estilística e literatura brasileira.',
    reference: 'Edital 001/2026 — Anexo I, item 1.1.1',
    children: [
      { id: 'pt-interpretacao', title: 'Análise e interpretação de texto', summary: 'Compreensão global, inferência, tese e intenção comunicativa.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-vocabulario', title: 'Vocabulário e níveis de linguagem', summary: 'Precisão lexical, registro formal/informal e adequação ao contexto.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-ortografia', title: 'Ortografia e nova ortografia', summary: 'Grafia oficial, acentuação gráfica, prosódia e usos dos porquês.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-morfologia', title: 'Estrutura e formação de palavras', summary: 'Derivação, composição e classes gramaticais (emprego e flexões).', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-adjetivos', title: 'Adjetivos eruditos e pátrios', summary: 'Formação e emprego semântico em contexto formal.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-verbal', title: 'Conjugação verbal', summary: 'Tempos, modos, vozes e correlação verbal.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-semantica', title: 'Semântica lexical', summary: 'Sinônimos, antônimos, homônimos e parônimos.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-sintaxe', title: 'Sintaxe normativa', summary: 'Regência verbal/nominal, crase, concordância e colocação pronominal.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-pronomes', title: 'Emprego dos pronomes e formas de tratamento', summary: 'Pronomes pessoais, demonstrativos, relativos e tratamento formal.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-oracoes', title: 'Termos da oração e período composto', summary: 'Termos essenciais, integrantes, acessórios, coordenadas e subordinadas.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-estilistica', title: 'Pontuação, vícios de linguagem e estilística', summary: 'Figuras de linguagem e efeitos de sentido em textos.', reference: 'Anexo I - 1.1.1' },
      { id: 'pt-literatura', title: 'Literatura Brasileira', summary: 'Noções gerais de escolas, autores e características principais.', reference: 'Anexo I - 1.1.1' }
    ]
  },
  {
    id: 'especificos',
    title: 'Conhecimentos Específicos',
    summary: 'Conteúdo oficial do Anexo I para Bombeiro Comunitário: trânsito + manuais CBMSC + IG 10-03-BM.',
    reference: 'Edital 001/2026 — Anexo I, item 1.2',
    children: [
      {
        id: 'esp-transito',
        title: 'Legislação de Trânsito e condução',
        summary: 'Código de Trânsito Brasileiro, SNT, circulação, penalidades e transporte de emergência.',
        reference: 'Anexo I - 1.2(a)',
        children: [
          { id: 'esp-ctb', title: 'CTB e demais legislações', summary: 'Base legal da condução de veículos e competências dos órgãos.', reference: 'Anexo I - 1.2(a)' },
          { id: 'esp-snt', title: 'Sistema Nacional de Trânsito', summary: 'Estrutura, integração institucional e atribuições.', reference: 'Anexo I - 1.2(a)' },
          { id: 'esp-circulacao', title: 'Normas e regras de circulação', summary: 'Preferências, ultrapassagem, parada/estacionamento e conduta segura.', reference: 'Anexo I - 1.2(a)' },
          { id: 'esp-sinalizacao', title: 'Sinalização viária', summary: 'Sinais, marcas viárias, dispositivos e interpretação.', reference: 'Anexo I - 1.2(a)' },
          { id: 'esp-veiculos', title: 'Veículos, licenciamento e habilitação', summary: 'Regularidade do veículo, documentação e categorias de CNH.', reference: 'Anexo I - 1.2(a)' },
          { id: 'esp-infracoes', title: 'Deveres, proibições, infrações e penalidades', summary: 'Tipificação, medidas administrativas e recursos.', reference: 'Anexo I - 1.2(a)' },
          { id: 'esp-defensiva', title: 'Direção defensiva e primeiros socorros', summary: 'Prevenção de sinistros e resposta inicial em ocorrências.', reference: 'Anexo I - 1.2(a)' },
          { id: 'esp-ambiental', title: 'Meio ambiente e cidadania no trânsito', summary: 'Preservação ambiental, direitos humanos e cidadania viária.', reference: 'Anexo I - 1.2(a)' },
          { id: 'esp-funcionamento', title: 'Funcionamento do veículo e transporte de urgência', summary: 'Noções mecânicas e condução em emergência.', reference: 'Anexo I - 1.2(a)' }
        ]
      },
      { id: 'esp-cie', title: 'Manual CBMSC de Capacitação em Combate a Incêndio Estrutural (1ª edição revisada)', summary: 'Teoria do fogo, classes, agentes extintores, progressão, ventilação, comando e segurança operacional.', reference: 'Anexo I - 1.2(b)' },
      { id: 'esp-abe', title: 'Manual CBMSC de Capacitação em Atendimento Básico a Emergências', summary: 'Avaliação da cena, ABCDE, trauma, suporte básico e transporte.', reference: 'Anexo I - 1.2(c)' },
      { id: 'esp-ig', title: 'IG 10-03-BM — Serviço Comunitário no CBMSC', summary: 'Finalidade, organização, atribuições, limites e deveres disciplinares.', reference: 'Anexo I - 1.2(d)' }
    ]
  }
]
