import type { QuestionDocument } from '@/types/cbmsc'

export const cbmscQuestions: QuestionDocument[] = [
  {
    "id": "cbmsc-q-0001",
    "theme": "Incêndio",
    "subtheme": "Classes de incêndio",
    "difficulty": "medium",
    "questionType": "application",
    "question": "Em uma cena com materiais sólidos, líquidos inflamáveis e equipamento energizado, qual decisão de classificação direciona melhor a primeira resposta?",
    "options": [
      "A) Classificar por combustível predominante e presença de energia elétrica, reavaliando a classe quando houver mudança de cenário.",
      "B) Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
      "C) Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
      "D) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para classificação do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-classes-de-inc-ndio",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-classes-de-inc-ndio",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para classificação do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0002",
    "theme": "Incêndio",
    "subtheme": "Classes de incêndio",
    "difficulty": "hard",
    "questionType": "scenario",
    "question": "Ao receber informações parciais sobre combustível e eletricidade ativa, qual análise de classe deve guiar a escolha tática inicial?",
    "options": [
      "A) Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
      "B) Identificar a classe antes do ataque, confirmando se há metais combustíveis ou óleos de cozinha para ajustar agente e técnica.",
      "C) Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
      "D) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para classificação do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-classes-de-inc-ndio",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-classes-de-inc-ndio",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para classificação do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0003",
    "theme": "Incêndio",
    "subtheme": "Classes de incêndio",
    "difficulty": "easy",
    "questionType": "procedure",
    "question": "Durante o reconhecimento, qual critério de classe evita erro de agente extintor e reduz risco de reignição?",
    "options": [
      "A) Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
      "B) Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
      "C) Tratar a energia elétrica como fator decisivo inicial e só migrar de classe após isolamento ou desligamento confirmado.",
      "D) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para classificação do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-classes-de-inc-ndio",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-classes-de-inc-ndio",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para classificação do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0004",
    "theme": "Incêndio",
    "subtheme": "Classes de incêndio",
    "difficulty": "medium",
    "questionType": "definition",
    "question": "Na leitura do cenário misto, qual abordagem de classes prioriza segurança e eficácia operacional?",
    "options": [
      "A) Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
      "B) Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
      "C) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
      "D) Relacionar cada foco à sua classe específica para evitar aplicação de agente incompatível no ponto crítico da ocorrência.",
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para classificação do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-classes-de-inc-ndio",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-classes-de-inc-ndio",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para classificação do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0005",
    "theme": "Incêndio",
    "subtheme": "Classes de incêndio",
    "difficulty": "hard",
    "questionType": "comparison",
    "question": "Em uma cena com materiais sólidos, líquidos inflamáveis e equipamento energizado, qual decisão de classificação direciona melhor a primeira resposta?",
    "options": [
      "A) Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
      "B) Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
      "C) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
      "D) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.",
      "E) Conduzir avaliação dinâmica da classe do incêndio conforme o material envolvido e o comportamento observado das chamas."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para classificação do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-classes-de-inc-ndio",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-classes-de-inc-ndio",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para classificação do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0006",
    "theme": "Incêndio",
    "subtheme": "Classes de incêndio",
    "difficulty": "easy",
    "questionType": "exception",
    "question": "Ao receber informações parciais sobre combustível e eletricidade ativa, qual análise de classe deve guiar a escolha tática inicial?",
    "options": [
      "A) Classificar por combustível predominante e presença de energia elétrica, reavaliando a classe quando houver mudança de cenário.",
      "B) Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
      "C) Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
      "D) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para classificação do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-classes-de-inc-ndio",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-classes-de-inc-ndio",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para classificação do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0007",
    "theme": "Incêndio",
    "subtheme": "Classes de incêndio",
    "difficulty": "medium",
    "questionType": "conceptual",
    "question": "Durante o reconhecimento, qual critério de classe evita erro de agente extintor e reduz risco de reignição?",
    "options": [
      "A) Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
      "B) Identificar a classe antes do ataque, confirmando se há metais combustíveis ou óleos de cozinha para ajustar agente e técnica.",
      "C) Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
      "D) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para classificação do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-classes-de-inc-ndio",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-classes-de-inc-ndio",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para classificação do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0008",
    "theme": "Incêndio",
    "subtheme": "Classes de incêndio",
    "difficulty": "hard",
    "questionType": "application",
    "question": "Na leitura do cenário misto, qual abordagem de classes prioriza segurança e eficácia operacional?",
    "options": [
      "A) Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
      "B) Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
      "C) Tratar a energia elétrica como fator decisivo inicial e só migrar de classe após isolamento ou desligamento confirmado.",
      "D) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para classificação do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-classes-de-inc-ndio",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-classes-de-inc-ndio",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para classificação do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0009",
    "theme": "Incêndio",
    "subtheme": "Métodos de extinção",
    "difficulty": "easy",
    "questionType": "scenario",
    "question": "Diante de fogo em líquido inflamável contido, qual método de extinção deve ser priorizado?",
    "options": [
      "A) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "B) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "C) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "D) Priorizar abafamento em vapores inflamáveis e complementar com resfriamento de superfícies expostas para evitar reignição.",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para método de extinção adequado.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-m-todos-de-extin-o",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-m-todos-de-extin-o",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para método de extinção adequado.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0010",
    "theme": "Incêndio",
    "subtheme": "Métodos de extinção",
    "difficulty": "medium",
    "questionType": "procedure",
    "question": "Qual escolha entre resfriamento, abafamento e isolamento é mais consistente para suprimir combustão com risco de propagação?",
    "options": [
      "A) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "B) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "C) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "D) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.",
      "E) Priorizar abafamento em vapores inflamáveis e complementar com resfriamento de superfícies expostas para evitar reignição."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para método de extinção adequado.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-m-todos-de-extin-o",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-m-todos-de-extin-o",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para método de extinção adequado.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0011",
    "theme": "Incêndio",
    "subtheme": "Métodos de extinção",
    "difficulty": "hard",
    "questionType": "definition",
    "question": "Em ataque inicial, qual critério técnico orienta o método de extinção com menor chance de agravamento?",
    "options": [
      "A) Empregar resfriamento controlado quando o calor for o vetor principal de propagação, mantendo monitoramento térmico contínuo.",
      "B) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "C) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "D) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para método de extinção adequado.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-m-todos-de-extin-o",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-m-todos-de-extin-o",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para método de extinção adequado.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0012",
    "theme": "Incêndio",
    "subtheme": "Métodos de extinção",
    "difficulty": "easy",
    "questionType": "comparison",
    "question": "Na progressão do combate, qual método deve ser ajustado conforme o tetraedro do fogo identificado na cena?",
    "options": [
      "A) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "B) Aplicar isolamento de combustível quando possível e seguro, reduzindo alimentação do fogo antes de ampliar o ataque.",
      "C) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "D) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para método de extinção adequado.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-m-todos-de-extin-o",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-m-todos-de-extin-o",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para método de extinção adequado.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0013",
    "theme": "Incêndio",
    "subtheme": "Métodos de extinção",
    "difficulty": "medium",
    "questionType": "exception",
    "question": "Diante de fogo em líquido inflamável contido, qual método de extinção deve ser priorizado?",
    "options": [
      "A) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "B) Tratar isolamento como etapa administrativa e não como método operacional de combate.",
      "C) Ajustar o método conforme a evolução da combustão, sem manter técnica única quando o comportamento do fogo muda.",
      "D) Aplicar espuma em classe C energizada para reduzir temperatura do equipamento.",
      "E) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para método de extinção adequado.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-m-todos-de-extin-o",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-m-todos-de-extin-o",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para método de extinção adequado.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Tratar isolamento como etapa administrativa e não como método operacional de combate.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Aplicar espuma em classe C energizada para reduzir temperatura do equipamento.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0014",
    "theme": "Incêndio",
    "subtheme": "Métodos de extinção",
    "difficulty": "hard",
    "questionType": "conceptual",
    "question": "Qual escolha entre resfriamento, abafamento e isolamento é mais consistente para suprimir combustão com risco de propagação?",
    "options": [
      "A) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "B) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "C) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "D) Priorizar abafamento em vapores inflamáveis e complementar com resfriamento de superfícies expostas para evitar reignição.",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para método de extinção adequado.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-m-todos-de-extin-o",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-m-todos-de-extin-o",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para método de extinção adequado.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0015",
    "theme": "Incêndio",
    "subtheme": "Métodos de extinção",
    "difficulty": "easy",
    "questionType": "application",
    "question": "Em ataque inicial, qual critério técnico orienta o método de extinção com menor chance de agravamento?",
    "options": [
      "A) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "B) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "C) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "D) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.",
      "E) Priorizar abafamento em vapores inflamáveis e complementar com resfriamento de superfícies expostas para evitar reignição."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para método de extinção adequado.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-m-todos-de-extin-o",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-m-todos-de-extin-o",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para método de extinção adequado.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0016",
    "theme": "Incêndio",
    "subtheme": "Métodos de extinção",
    "difficulty": "medium",
    "questionType": "scenario",
    "question": "Na progressão do combate, qual método deve ser ajustado conforme o tetraedro do fogo identificado na cena?",
    "options": [
      "A) Empregar resfriamento controlado quando o calor for o vetor principal de propagação, mantendo monitoramento térmico contínuo.",
      "B) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "C) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "D) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para método de extinção adequado.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-m-todos-de-extin-o",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-m-todos-de-extin-o",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para método de extinção adequado.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0017",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "hard",
    "questionType": "procedure",
    "question": "Com sinais de alta temperatura e fumaça densa pulsante, qual leitura de comportamento do fogo orienta ação segura?",
    "options": [
      "A) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "B) Reconhecer sinais precursores de flashover ou backdraft e controlar ventilação/entrada antes de avançar.",
      "C) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
      "D) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "E) Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para fenômeno do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-comportamento-do-fogo",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-comportamento-do-fogo",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para fenômeno do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0018",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "easy",
    "questionType": "definition",
    "question": "Durante progressão interna, qual interpretação de fenômenos térmicos reduz risco de evento extremo?",
    "options": [
      "A) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "B) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
      "C) Avaliar caminho dos gases quentes e efeitos da ventilação para prevenir aceleração súbita da combustão.",
      "D) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "E) Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para fenômeno do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-comportamento-do-fogo",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-comportamento-do-fogo",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para fenômeno do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0019",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "medium",
    "questionType": "comparison",
    "question": "Ao identificar indícios de ventilação limitada, qual conduta sobre comportamento do fogo é mais adequada?",
    "options": [
      "A) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "B) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
      "C) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "D) Avaliar caminho dos gases quentes e efeitos da ventilação para prevenir aceleração súbita da combustão.",
      "E) Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para fenômeno do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-comportamento-do-fogo",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-comportamento-do-fogo",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para fenômeno do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0020",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "hard",
    "questionType": "exception",
    "question": "Em ambiente confinado com aquecimento rápido, qual avaliação técnica deve preceder a abertura de compartimento?",
    "options": [
      "A) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "B) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
      "C) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "D) Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação.",
      "E) Avaliar caminho dos gases quentes e efeitos da ventilação para prevenir aceleração súbita da combustão."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para fenômeno do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-comportamento-do-fogo",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-comportamento-do-fogo",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para fenômeno do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0021",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "easy",
    "questionType": "conceptual",
    "question": "Com sinais de alta temperatura e fumaça densa pulsante, qual leitura de comportamento do fogo orienta ação segura?",
    "options": [
      "A) Integrar observação externa e interna para decidir abertura tática apenas com controle de fluxo e linha pronta.",
      "B) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "C) Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
      "D) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "E) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para fenômeno do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-comportamento-do-fogo",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-comportamento-do-fogo",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para fenômeno do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
          "type": "erro de aplicação",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0022",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "medium",
    "questionType": "application",
    "question": "Durante progressão interna, qual interpretação de fenômenos térmicos reduz risco de evento extremo?",
    "options": [
      "A) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "B) Reconhecer sinais precursores de flashover ou backdraft e controlar ventilação/entrada antes de avançar.",
      "C) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
      "D) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "E) Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para fenômeno do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-comportamento-do-fogo",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-comportamento-do-fogo",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para fenômeno do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0023",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "hard",
    "questionType": "scenario",
    "question": "Ao identificar indícios de ventilação limitada, qual conduta sobre comportamento do fogo é mais adequada?",
    "options": [
      "A) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "B) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
      "C) Avaliar caminho dos gases quentes e efeitos da ventilação para prevenir aceleração súbita da combustão.",
      "D) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "E) Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para fenômeno do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-comportamento-do-fogo",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-comportamento-do-fogo",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para fenômeno do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0024",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "easy",
    "questionType": "procedure",
    "question": "Em ambiente confinado com aquecimento rápido, qual avaliação técnica deve preceder a abertura de compartimento?",
    "options": [
      "A) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "B) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
      "C) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "D) Avaliar caminho dos gases quentes e efeitos da ventilação para prevenir aceleração súbita da combustão.",
      "E) Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para fenômeno do incêndio.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-comportamento-do-fogo",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-comportamento-do-fogo",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para fenômeno do incêndio.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0025",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "medium",
    "questionType": "definition",
    "question": "Em princípio de incêndio em painel elétrico energizado, qual uso de extintor é tecnicamente mais seguro?",
    "options": [
      "A) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "B) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "C) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "D) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
      "E) Selecionar extintor compatível com a classe e aplicar técnica de varredura na base do fogo com distância adequada."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para emprego de extintores.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-extintores",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-extintores",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para emprego de extintores.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0026",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "hard",
    "questionType": "comparison",
    "question": "Qual critério de escolha de extintor aumenta chance de controle inicial sem ampliar risco à equipe?",
    "options": [
      "A) Confirmar classe, posição de escape e autonomia do extintor antes da descarga contínua controlada.",
      "B) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "C) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "D) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para emprego de extintores.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-extintores",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-extintores",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para emprego de extintores.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0027",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "easy",
    "questionType": "exception",
    "question": "Ao atuar com extintores portáteis, qual procedimento melhora efetividade e segurança?",
    "options": [
      "A) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "B) Utilizar CO2 ou PQS conforme classe e risco elétrico, evitando aproximação excessiva ao foco.",
      "C) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "D) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para emprego de extintores.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-extintores",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-extintores",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para emprego de extintores.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0028",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "medium",
    "questionType": "conceptual",
    "question": "Diante de foco inicial em combustível líquido, qual emprego do extintor evita espalhamento do incêndio?",
    "options": [
      "A) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "B) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "C) Direcionar aplicação progressiva para cobrir superfície em chamas sem romper película de espuma quando utilizada.",
      "D) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para emprego de extintores.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-extintores",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-extintores",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para emprego de extintores.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0029",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "hard",
    "questionType": "application",
    "question": "Em princípio de incêndio em painel elétrico energizado, qual uso de extintor é tecnicamente mais seguro?",
    "options": [
      "A) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "B) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "C) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "D) Substituir extintor esgotado imediatamente e manter vigilância para reignição após aparente extinção.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para emprego de extintores.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-extintores",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-extintores",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para emprego de extintores.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0030",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "easy",
    "questionType": "scenario",
    "question": "Qual critério de escolha de extintor aumenta chance de controle inicial sem ampliar risco à equipe?",
    "options": [
      "A) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "B) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "C) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "D) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
      "E) Selecionar extintor compatível com a classe e aplicar técnica de varredura na base do fogo com distância adequada."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para emprego de extintores.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-extintores",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-extintores",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para emprego de extintores.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0031",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "medium",
    "questionType": "procedure",
    "question": "Ao atuar com extintores portáteis, qual procedimento melhora efetividade e segurança?",
    "options": [
      "A) Confirmar classe, posição de escape e autonomia do extintor antes da descarga contínua controlada.",
      "B) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "C) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "D) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para emprego de extintores.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-extintores",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-extintores",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para emprego de extintores.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0032",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "hard",
    "questionType": "definition",
    "question": "Diante de foco inicial em combustível líquido, qual emprego do extintor evita espalhamento do incêndio?",
    "options": [
      "A) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "B) Utilizar CO2 ou PQS conforme classe e risco elétrico, evitando aproximação excessiva ao foco.",
      "C) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "D) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para emprego de extintores.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-extintores",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-extintores",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para emprego de extintores.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0033",
    "theme": "APH",
    "subtheme": "ABCDE",
    "difficulty": "easy",
    "questionType": "comparison",
    "question": "No atendimento pré-hospitalar inicial, qual conduta respeita a lógica do ABCDE?",
    "options": [
      "A) Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
      "B) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "C) Executar ABCDE em ordem, tratando imediatamente achados críticos e repetindo reavaliações após cada intervenção.",
      "D) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para avaliação primária.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-abcde",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-abcde",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para avaliação primária.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
          "type": "erro de aplicação",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0034",
    "theme": "APH",
    "subtheme": "ABCDE",
    "difficulty": "medium",
    "questionType": "exception",
    "question": "Em vítima politraumatizada, qual priorização no ABCDE é mais adequada?",
    "options": [
      "A) Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
      "B) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "C) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
      "D) Assegurar via aérea com proteção cervical, avaliar ventilação e perfusão antes de avançar para etapas subsequentes.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para avaliação primária.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-abcde",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-abcde",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para avaliação primária.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
          "type": "erro de aplicação",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0035",
    "theme": "APH",
    "subtheme": "ABCDE",
    "difficulty": "hard",
    "questionType": "conceptual",
    "question": "Durante avaliação primária, qual sequência reduz omissões críticas?",
    "options": [
      "A) Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
      "B) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "C) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
      "D) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
      "E) Priorizar ameaças imediatas à vida dentro do ABCDE, sem pular etapas por impressão inicial isolada."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para avaliação primária.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-abcde",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-abcde",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para avaliação primária.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
          "type": "erro de aplicação",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0036",
    "theme": "APH",
    "subtheme": "ABCDE",
    "difficulty": "easy",
    "questionType": "application",
    "question": "Com risco de deterioração rápida, qual aplicação do ABCDE deve ser adotada?",
    "options": [
      "A) Registrar resposta às intervenções do ABCDE e reiniciar a sequência diante de piora clínica.",
      "B) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "C) Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
      "D) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para avaliação primária.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-abcde",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-abcde",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para avaliação primária.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
          "type": "erro de aplicação",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0037",
    "theme": "APH",
    "subtheme": "ABCDE",
    "difficulty": "medium",
    "questionType": "scenario",
    "question": "No atendimento pré-hospitalar inicial, qual conduta respeita a lógica do ABCDE?",
    "options": [
      "A) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
      "B) Integrar exame rápido e tratamento simultâneo no ABCDE mantendo comunicação da equipe.",
      "C) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "D) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
      "E) Conduzir avaliação secundária extensa antes de corrigir alterações de ventilação."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para avaliação primária.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-abcde",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-abcde",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para avaliação primária.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Conduzir avaliação secundária extensa antes de corrigir alterações de ventilação.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0038",
    "theme": "APH",
    "subtheme": "ABCDE",
    "difficulty": "hard",
    "questionType": "procedure",
    "question": "Em vítima politraumatizada, qual priorização no ABCDE é mais adequada?",
    "options": [
      "A) Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
      "B) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "C) Executar ABCDE em ordem, tratando imediatamente achados críticos e repetindo reavaliações após cada intervenção.",
      "D) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para avaliação primária.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-abcde",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-abcde",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para avaliação primária.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
          "type": "erro de aplicação",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0039",
    "theme": "APH",
    "subtheme": "ABCDE",
    "difficulty": "easy",
    "questionType": "definition",
    "question": "Durante avaliação primária, qual sequência reduz omissões críticas?",
    "options": [
      "A) Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
      "B) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "C) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
      "D) Assegurar via aérea com proteção cervical, avaliar ventilação e perfusão antes de avançar para etapas subsequentes.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para avaliação primária.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-abcde",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-abcde",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para avaliação primária.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
          "type": "erro de aplicação",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0040",
    "theme": "APH",
    "subtheme": "ABCDE",
    "difficulty": "medium",
    "questionType": "comparison",
    "question": "Com risco de deterioração rápida, qual aplicação do ABCDE deve ser adotada?",
    "options": [
      "A) Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
      "B) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "C) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
      "D) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
      "E) Priorizar ameaças imediatas à vida dentro do ABCDE, sem pular etapas por impressão inicial isolada."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para avaliação primária.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-abcde",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-abcde",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para avaliação primária.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
          "type": "erro de aplicação",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0041",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "hard",
    "questionType": "exception",
    "question": "Em uma PCR presenciada, qual conduta inicial de RCP é mais indicada?",
    "options": [
      "A) Iniciar compressões de alta qualidade rapidamente, minimizar interrupções e integrar DEA assim que disponível.",
      "B) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "C) Interromper compressões por períodos longos para checagens frequentes de pulso.",
      "D) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para reanimação cardiopulmonar.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-rcp",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-rcp",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para reanimação cardiopulmonar.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
          "type": "erro de ordem",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0042",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "easy",
    "questionType": "conceptual",
    "question": "Qual estratégia em RCP aumenta probabilidade de retorno da circulação espontânea?",
    "options": [
      "A) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
      "B) Manter ritmo e profundidade adequados das compressões com revezamento de socorristas para evitar fadiga.",
      "C) Aguardar acesso venoso completo antes de iniciar compressões torácicas.",
      "D) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "E) Suspender RCP assim que houver qualquer movimento involuntário isolado."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para reanimação cardiopulmonar.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-rcp",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-rcp",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para reanimação cardiopulmonar.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Aguardar acesso venoso completo antes de iniciar compressões torácicas.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Suspender RCP assim que houver qualquer movimento involuntário isolado.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0043",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "medium",
    "questionType": "application",
    "question": "Durante uso do DEA, qual procedimento deve ser seguido pela equipe?",
    "options": [
      "A) Priorizar ventilação avançada contínua e reduzir frequência das compressões.",
      "B) Aguardar acesso venoso completo antes de iniciar compressões torácicas.",
      "C) Garantir segurança da cena, análise do DEA sem contato com a vítima e retomada imediata das compressões.",
      "D) Aplicar choque do DEA sem afastar equipe para reduzir tempo de pausa.",
      "E) Suspender RCP assim que houver qualquer movimento involuntário isolado."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para reanimação cardiopulmonar.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-rcp",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-rcp",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para reanimação cardiopulmonar.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Aguardar acesso venoso completo antes de iniciar compressões torácicas.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Aplicar choque do DEA sem afastar equipe para reduzir tempo de pausa.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Suspender RCP assim que houver qualquer movimento involuntário isolado.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0044",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "hard",
    "questionType": "scenario",
    "question": "Na condução da RCP, qual erro deve ser evitado para manter qualidade?",
    "options": [
      "A) Sincronizar choque com compressões em andamento para ganhar tempo.",
      "B) Aguardar acesso venoso completo antes de iniciar compressões torácicas.",
      "C) Pausar RCP após cada análise do DEA por um minuto para observação.",
      "D) Organizar ciclos de RCP com pausas curtas e ventilação conforme protocolo aplicado pela equipe.",
      "E) Suspender RCP assim que houver qualquer movimento involuntário isolado."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para reanimação cardiopulmonar.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-rcp",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-rcp",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para reanimação cardiopulmonar.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Sincronizar choque com compressões em andamento para ganhar tempo.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Aguardar acesso venoso completo antes de iniciar compressões torácicas.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Pausar RCP após cada análise do DEA por um minuto para observação.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Suspender RCP assim que houver qualquer movimento involuntário isolado.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0045",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "easy",
    "questionType": "procedure",
    "question": "Em uma PCR presenciada, qual conduta inicial de RCP é mais indicada?",
    "options": [
      "A) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "B) Interromper compressões por períodos longos para checagens frequentes de pulso.",
      "C) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
      "D) Priorizar ventilação avançada contínua e reduzir frequência das compressões.",
      "E) Iniciar compressões de alta qualidade rapidamente, minimizar interrupções e integrar DEA assim que disponível."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para reanimação cardiopulmonar.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-rcp",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-rcp",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para reanimação cardiopulmonar.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
          "type": "erro de ordem",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0046",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "medium",
    "questionType": "definition",
    "question": "Qual estratégia em RCP aumenta probabilidade de retorno da circulação espontânea?",
    "options": [
      "A) Iniciar compressões de alta qualidade rapidamente, minimizar interrupções e integrar DEA assim que disponível.",
      "B) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "C) Interromper compressões por períodos longos para checagens frequentes de pulso.",
      "D) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para reanimação cardiopulmonar.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-rcp",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-rcp",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para reanimação cardiopulmonar.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
          "type": "erro de ordem",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0047",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "hard",
    "questionType": "comparison",
    "question": "Durante uso do DEA, qual procedimento deve ser seguido pela equipe?",
    "options": [
      "A) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "B) Manter ritmo e profundidade adequados das compressões com revezamento de socorristas para evitar fadiga.",
      "C) Interromper compressões por períodos longos para checagens frequentes de pulso.",
      "D) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para reanimação cardiopulmonar.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-rcp",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-rcp",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para reanimação cardiopulmonar.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
          "type": "erro de ordem",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0048",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "easy",
    "questionType": "exception",
    "question": "Na condução da RCP, qual erro deve ser evitado para manter qualidade?",
    "options": [
      "A) Priorizar ventilação avançada contínua e reduzir frequência das compressões.",
      "B) Aguardar acesso venoso completo antes de iniciar compressões torácicas.",
      "C) Garantir segurança da cena, análise do DEA sem contato com a vítima e retomada imediata das compressões.",
      "D) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "E) Suspender RCP assim que houver qualquer movimento involuntário isolado."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para reanimação cardiopulmonar.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-rcp",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-rcp",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para reanimação cardiopulmonar.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Aguardar acesso venoso completo antes de iniciar compressões torácicas.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Suspender RCP assim que houver qualquer movimento involuntário isolado.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0049",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "medium",
    "questionType": "conceptual",
    "question": "Em trauma com mecanismo de alta energia, qual abordagem inicial é mais adequada?",
    "options": [
      "A) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "B) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "C) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
      "D) Combinar controle de ameaças imediatas com estabilização apropriada e transporte conforme gravidade.",
      "E) Remover capacete de motociclista sem controle manual cervical para agilizar acesso."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para atendimento ao trauma.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-trauma",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-trauma",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para atendimento ao trauma.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0050",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "hard",
    "questionType": "application",
    "question": "Qual conduta em trauma reduz risco de lesões secundárias?",
    "options": [
      "A) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "B) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "C) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
      "D) Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
      "E) Manter alinhamento e restrição de movimento quando indicado, sem atrasar intervenções vitais."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para atendimento ao trauma.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-trauma",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-trauma",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para atendimento ao trauma.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0051",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "easy",
    "questionType": "scenario",
    "question": "Durante atendimento ao traumatizado, qual prioridade técnica deve ser adotada?",
    "options": [
      "A) Aplicar avaliação primária focada em perfusão, ventilação e sangramento antes de procedimentos complementares.",
      "B) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "C) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "D) Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
      "E) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para atendimento ao trauma.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-trauma",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-trauma",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para atendimento ao trauma.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0052",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "medium",
    "questionType": "procedure",
    "question": "Na cena de trauma, qual decisão favorece estabilização segura?",
    "options": [
      "A) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "B) Planejar extricação e imobilização de acordo com mecanismo, condição clínica e risco ambiental.",
      "C) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "D) Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
      "E) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para atendimento ao trauma.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-trauma",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-trauma",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para atendimento ao trauma.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0053",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "hard",
    "questionType": "definition",
    "question": "Em trauma com mecanismo de alta energia, qual abordagem inicial é mais adequada?",
    "options": [
      "A) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "B) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "C) Combinar controle de ameaças imediatas com estabilização apropriada e transporte conforme gravidade.",
      "D) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
      "E) Remover capacete de motociclista sem controle manual cervical para agilizar acesso."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para atendimento ao trauma.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-trauma",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-trauma",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para atendimento ao trauma.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0054",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "easy",
    "questionType": "comparison",
    "question": "Qual conduta em trauma reduz risco de lesões secundárias?",
    "options": [
      "A) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "B) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "C) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
      "D) Combinar controle de ameaças imediatas com estabilização apropriada e transporte conforme gravidade.",
      "E) Remover capacete de motociclista sem controle manual cervical para agilizar acesso."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para atendimento ao trauma.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-trauma",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-trauma",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para atendimento ao trauma.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0055",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "medium",
    "questionType": "exception",
    "question": "Durante atendimento ao traumatizado, qual prioridade técnica deve ser adotada?",
    "options": [
      "A) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "B) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "C) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
      "D) Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
      "E) Manter alinhamento e restrição de movimento quando indicado, sem atrasar intervenções vitais."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para atendimento ao trauma.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-trauma",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-trauma",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para atendimento ao trauma.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0056",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "hard",
    "questionType": "conceptual",
    "question": "Na cena de trauma, qual decisão favorece estabilização segura?",
    "options": [
      "A) Aplicar avaliação primária focada em perfusão, ventilação e sangramento antes de procedimentos complementares.",
      "B) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "C) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "D) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
      "E) Remover capacete de motociclista sem controle manual cervical para agilizar acesso."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para atendimento ao trauma.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-trauma",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-trauma",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para atendimento ao trauma.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
          "type": "erro de aplicação",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
          "type": "erro de conceito",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0057",
    "theme": "APH",
    "subtheme": "Hemorragias",
    "difficulty": "easy",
    "questionType": "application",
    "question": "Diante de hemorragia externa grave, qual conduta inicial é prioritária?",
    "options": [
      "A) Concentrar atendimento em acesso venoso e deixar hemostasia para o hospital.",
      "B) Utilizar curativo compressivo eficaz e reforçar medidas conforme resposta clínica do paciente.",
      "C) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante.",
      "D) Evitar torniquete mesmo em sangramento exsanguinante por risco de lesão local.",
      "E) Utilizar gelo direto como método principal para hemorragia arterial intensa."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para controle hemorrágico.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-hemorragias",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-hemorragias",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para controle hemorrágico.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Concentrar atendimento em acesso venoso e deixar hemostasia para o hospital.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Evitar torniquete mesmo em sangramento exsanguinante por risco de lesão local.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Utilizar gelo direto como método principal para hemorragia arterial intensa.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0058",
    "theme": "APH",
    "subtheme": "Hemorragias",
    "difficulty": "medium",
    "questionType": "scenario",
    "question": "Qual decisão sobre torniquete e compressão direta é tecnicamente adequada?",
    "options": [
      "A) Concentrar atendimento em acesso venoso e deixar hemostasia para o hospital.",
      "B) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante.",
      "C) Utilizar curativo compressivo eficaz e reforçar medidas conforme resposta clínica do paciente.",
      "D) Evitar torniquete mesmo em sangramento exsanguinante por risco de lesão local.",
      "E) Utilizar gelo direto como método principal para hemorragia arterial intensa."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para controle hemorrágico.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-hemorragias",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-hemorragias",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para controle hemorrágico.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Concentrar atendimento em acesso venoso e deixar hemostasia para o hospital.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Evitar torniquete mesmo em sangramento exsanguinante por risco de lesão local.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Utilizar gelo direto como método principal para hemorragia arterial intensa.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0059",
    "theme": "APH",
    "subtheme": "Hemorragias",
    "difficulty": "hard",
    "questionType": "procedure",
    "question": "Em controle hemorrágico pré-hospitalar, qual sequência é recomendada?",
    "options": [
      "A) Concentrar atendimento em acesso venoso e deixar hemostasia para o hospital.",
      "B) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante.",
      "C) Evitar torniquete mesmo em sangramento exsanguinante por risco de lesão local.",
      "D) Utilizar curativo compressivo eficaz e reforçar medidas conforme resposta clínica do paciente.",
      "E) Utilizar gelo direto como método principal para hemorragia arterial intensa."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para controle hemorrágico.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-hemorragias",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-hemorragias",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para controle hemorrágico.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Concentrar atendimento em acesso venoso e deixar hemostasia para o hospital.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Evitar torniquete mesmo em sangramento exsanguinante por risco de lesão local.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Utilizar gelo direto como método principal para hemorragia arterial intensa.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0060",
    "theme": "APH",
    "subtheme": "Hemorragias",
    "difficulty": "easy",
    "questionType": "definition",
    "question": "Na cena com sangramento arterial, qual abordagem aumenta chance de sobrevida?",
    "options": [
      "A) Concentrar atendimento em acesso venoso e deixar hemostasia para o hospital.",
      "B) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante.",
      "C) Evitar torniquete mesmo em sangramento exsanguinante por risco de lesão local.",
      "D) Utilizar gelo direto como método principal para hemorragia arterial intensa.",
      "E) Utilizar curativo compressivo eficaz e reforçar medidas conforme resposta clínica do paciente."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para controle hemorrágico.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-hemorragias",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-hemorragias",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para controle hemorrágico.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Concentrar atendimento em acesso venoso e deixar hemostasia para o hospital.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Evitar torniquete mesmo em sangramento exsanguinante por risco de lesão local.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Utilizar gelo direto como método principal para hemorragia arterial intensa.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0061",
    "theme": "APH",
    "subtheme": "Hemorragias",
    "difficulty": "medium",
    "questionType": "comparison",
    "question": "Diante de hemorragia externa grave, qual conduta inicial é prioritária?",
    "options": [
      "A) Integrar controle de sangramento ao manejo de choque e transporte rápido para tratamento definitivo.",
      "B) Trocar curativos a cada poucos minutos para inspeção visual contínua da ferida.",
      "C) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico.",
      "D) Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro.",
      "E) Utilizar gelo direto como método principal para hemorragia arterial intensa."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para controle hemorrágico.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-hemorragias",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-hemorragias",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para controle hemorrágico.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Trocar curativos a cada poucos minutos para inspeção visual contínua da ferida.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Utilizar gelo direto como método principal para hemorragia arterial intensa.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0062",
    "theme": "APH",
    "subtheme": "Hemorragias",
    "difficulty": "hard",
    "questionType": "exception",
    "question": "Qual decisão sobre torniquete e compressão direta é tecnicamente adequada?",
    "options": [
      "A) Trocar curativos a cada poucos minutos para inspeção visual contínua da ferida.",
      "B) Utilizar curativo compressivo eficaz e reforçar medidas conforme resposta clínica do paciente.",
      "C) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico.",
      "D) Aplicar torniquete distal ao sangramento para reduzir dor durante o transporte.",
      "E) Utilizar gelo direto como método principal para hemorragia arterial intensa."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para controle hemorrágico.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-hemorragias",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-hemorragias",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para controle hemorrágico.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Trocar curativos a cada poucos minutos para inspeção visual contínua da ferida.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Aplicar torniquete distal ao sangramento para reduzir dor durante o transporte.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Utilizar gelo direto como método principal para hemorragia arterial intensa.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0063",
    "theme": "APH",
    "subtheme": "Hemorragias",
    "difficulty": "easy",
    "questionType": "conceptual",
    "question": "Em controle hemorrágico pré-hospitalar, qual sequência é recomendada?",
    "options": [
      "A) Trocar curativos a cada poucos minutos para inspeção visual contínua da ferida.",
      "B) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico.",
      "C) Utilizar curativo compressivo eficaz e reforçar medidas conforme resposta clínica do paciente.",
      "D) Aplicar torniquete distal ao sangramento para reduzir dor durante o transporte.",
      "E) Utilizar gelo direto como método principal para hemorragia arterial intensa."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para controle hemorrágico.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-hemorragias",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-hemorragias",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para controle hemorrágico.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Trocar curativos a cada poucos minutos para inspeção visual contínua da ferida.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Aplicar torniquete distal ao sangramento para reduzir dor durante o transporte.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Utilizar gelo direto como método principal para hemorragia arterial intensa.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0064",
    "theme": "APH",
    "subtheme": "Hemorragias",
    "difficulty": "medium",
    "questionType": "application",
    "question": "Na cena com sangramento arterial, qual abordagem aumenta chance de sobrevida?",
    "options": [
      "A) Trocar curativos a cada poucos minutos para inspeção visual contínua da ferida.",
      "B) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico.",
      "C) Aplicar torniquete distal ao sangramento para reduzir dor durante o transporte.",
      "D) Utilizar curativo compressivo eficaz e reforçar medidas conforme resposta clínica do paciente.",
      "E) Utilizar gelo direto como método principal para hemorragia arterial intensa."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para controle hemorrágico.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-hemorragias",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-hemorragias",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para controle hemorrágico.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Trocar curativos a cada poucos minutos para inspeção visual contínua da ferida.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Aplicar torniquete distal ao sangramento para reduzir dor durante o transporte.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Utilizar gelo direto como método principal para hemorragia arterial intensa.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0065",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "hard",
    "questionType": "scenario",
    "question": "Em suspeita de produto perigoso, qual ação inicial é mais segura?",
    "options": [
      "A) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "B) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "C) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "D) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
      "E) Reconhecer sinais e painéis de risco à distância, estabelecer isolamento e acionar recursos especializados."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para isolamento inicial.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-reconhecimento-e-isolamento",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-reconhecimento-e-isolamento",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para isolamento inicial.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Permitir circulação local controlada enquanto se aguarda equipe especializada.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0066",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "easy",
    "questionType": "procedure",
    "question": "Qual conduta de reconhecimento e isolamento reduz exposição da guarnição?",
    "options": [
      "A) Definir zonas operacionais, controlar acesso e posicionar equipes a favor da segurança ambiental.",
      "B) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "C) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "D) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para isolamento inicial.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-reconhecimento-e-isolamento",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-reconhecimento-e-isolamento",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para isolamento inicial.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Permitir circulação local controlada enquanto se aguarda equipe especializada.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0067",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "medium",
    "questionType": "definition",
    "question": "Durante primeira resposta a produto perigoso, qual prioridade técnica deve ser seguida?",
    "options": [
      "A) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "B) Usar informações ONU e guias de emergência para orientar isolamento inicial e proteção da equipe.",
      "C) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "D) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para isolamento inicial.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-reconhecimento-e-isolamento",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-reconhecimento-e-isolamento",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para isolamento inicial.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Permitir circulação local controlada enquanto se aguarda equipe especializada.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0068",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "hard",
    "questionType": "comparison",
    "question": "Na identificação de risco químico, qual procedimento é recomendado?",
    "options": [
      "A) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "B) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "C) Manter aproximação cautelosa sem contato direto com substância até identificação mínima confiável.",
      "D) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para isolamento inicial.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-reconhecimento-e-isolamento",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-reconhecimento-e-isolamento",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para isolamento inicial.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Permitir circulação local controlada enquanto se aguarda equipe especializada.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0069",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "easy",
    "questionType": "exception",
    "question": "Em suspeita de produto perigoso, qual ação inicial é mais segura?",
    "options": [
      "A) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "B) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "C) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "D) Priorizar proteção coletiva e comunicação interagências antes de iniciar ações ofensivas.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para isolamento inicial.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-reconhecimento-e-isolamento",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-reconhecimento-e-isolamento",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para isolamento inicial.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Permitir circulação local controlada enquanto se aguarda equipe especializada.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0070",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "medium",
    "questionType": "conceptual",
    "question": "Qual conduta de reconhecimento e isolamento reduz exposição da guarnição?",
    "options": [
      "A) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "B) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "C) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "D) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
      "E) Reconhecer sinais e painéis de risco à distância, estabelecer isolamento e acionar recursos especializados."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para isolamento inicial.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-reconhecimento-e-isolamento",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-reconhecimento-e-isolamento",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para isolamento inicial.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Permitir circulação local controlada enquanto se aguarda equipe especializada.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0071",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "hard",
    "questionType": "application",
    "question": "Durante primeira resposta a produto perigoso, qual prioridade técnica deve ser seguida?",
    "options": [
      "A) Definir zonas operacionais, controlar acesso e posicionar equipes a favor da segurança ambiental.",
      "B) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "C) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "D) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para isolamento inicial.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-reconhecimento-e-isolamento",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-reconhecimento-e-isolamento",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para isolamento inicial.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Permitir circulação local controlada enquanto se aguarda equipe especializada.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0072",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "easy",
    "questionType": "scenario",
    "question": "Na identificação de risco químico, qual procedimento é recomendado?",
    "options": [
      "A) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "B) Usar informações ONU e guias de emergência para orientar isolamento inicial e proteção da equipe.",
      "C) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "D) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para isolamento inicial.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-reconhecimento-e-isolamento",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-reconhecimento-e-isolamento",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para isolamento inicial.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Permitir circulação local controlada enquanto se aguarda equipe especializada.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0073",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "medium",
    "questionType": "procedure",
    "question": "Em operação de salvamento em altura, qual princípio deve orientar a montagem do sistema?",
    "options": [
      "A) Posicionar vítima em transferência sem estabilização prévia do sistema principal.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Validar ancoragens redundantes, checar equipamentos e manter comando técnico antes da progressão.",
      "D) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "E) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para técnica de salvamento em altura.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-em-altura",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-em-altura",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para técnica de salvamento em altura.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Posicionar vítima em transferência sem estabilização prévia do sistema principal.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0074",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "hard",
    "questionType": "definition",
    "question": "Qual decisão técnica em altura reduz risco de falha operacional?",
    "options": [
      "A) Posicionar vítima em transferência sem estabilização prévia do sistema principal.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "D) Montar sistema com fator de segurança adequado, inspeção cruzada e comunicação padronizada.",
      "E) Aplicar o mesmo arranjo de cordas em qualquer estrutura para manter padrão da equipe."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para técnica de salvamento em altura.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-em-altura",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-em-altura",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para técnica de salvamento em altura.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Posicionar vítima em transferência sem estabilização prévia do sistema principal.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Aplicar o mesmo arranjo de cordas em qualquer estrutura para manter padrão da equipe.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0075",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "easy",
    "questionType": "comparison",
    "question": "Durante acesso por cordas, qual conduta é adequada?",
    "options": [
      "A) Permitir improvisos de nó em campo desde que a carga seja aplicada gradualmente.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "D) Concentrar toda verificação em um único operador experiente sem conferência cruzada.",
      "E) Executar progressão controlada com backups funcionais e gestão contínua de risco de queda."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para técnica de salvamento em altura.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-em-altura",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-em-altura",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para técnica de salvamento em altura.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Permitir improvisos de nó em campo desde que a carga seja aplicada gradualmente.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Concentrar toda verificação em um único operador experiente sem conferência cruzada.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0076",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "medium",
    "questionType": "exception",
    "question": "Na preparação para resgate vertical, qual priorização é correta?",
    "options": [
      "A) Distribuir cargas nas ancoragens conforme projeto de resgate e condições estruturais do ponto.",
      "B) Substituir backup por comunicação verbal constante entre operador e segurança.",
      "C) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "D) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "E) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para técnica de salvamento em altura.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-em-altura",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-em-altura",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para técnica de salvamento em altura.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Substituir backup por comunicação verbal constante entre operador e segurança.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0077",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "hard",
    "questionType": "conceptual",
    "question": "Em operação de salvamento em altura, qual princípio deve orientar a montagem do sistema?",
    "options": [
      "A) Dispensar proteção de borda quando o atrito parecer baixo no teste manual.",
      "B) Realizar conferência de EPIs e nós críticos por dupla antes de iniciar manobra com vítima.",
      "C) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "D) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "E) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para técnica de salvamento em altura.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-em-altura",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-em-altura",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para técnica de salvamento em altura.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Dispensar proteção de borda quando o atrito parecer baixo no teste manual.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0078",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "easy",
    "questionType": "application",
    "question": "Qual decisão técnica em altura reduz risco de falha operacional?",
    "options": [
      "A) Montar sistema com folga excessiva para facilitar movimentação durante o resgate.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Validar ancoragens redundantes, checar equipamentos e manter comando técnico antes da progressão.",
      "D) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "E) Concentrar toda verificação em um único operador experiente sem conferência cruzada."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para técnica de salvamento em altura.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-em-altura",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-em-altura",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para técnica de salvamento em altura.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Montar sistema com folga excessiva para facilitar movimentação durante o resgate.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Concentrar toda verificação em um único operador experiente sem conferência cruzada.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0079",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "medium",
    "questionType": "scenario",
    "question": "Durante acesso por cordas, qual conduta é adequada?",
    "options": [
      "A) Posicionar vítima em transferência sem estabilização prévia do sistema principal.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "D) Montar sistema com fator de segurança adequado, inspeção cruzada e comunicação padronizada.",
      "E) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para técnica de salvamento em altura.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-em-altura",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-em-altura",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para técnica de salvamento em altura.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Posicionar vítima em transferência sem estabilização prévia do sistema principal.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0080",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "hard",
    "questionType": "procedure",
    "question": "Na preparação para resgate vertical, qual priorização é correta?",
    "options": [
      "A) Permitir improvisos de nó em campo desde que a carga seja aplicada gradualmente.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "D) Aplicar o mesmo arranjo de cordas em qualquer estrutura para manter padrão da equipe.",
      "E) Executar progressão controlada com backups funcionais e gestão contínua de risco de queda."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para técnica de salvamento em altura.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-em-altura",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-em-altura",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para técnica de salvamento em altura.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Permitir improvisos de nó em campo desde que a carga seja aplicada gradualmente.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Aplicar o mesmo arranjo de cordas em qualquer estrutura para manter padrão da equipe.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0081",
    "theme": "Salvamento",
    "subtheme": "Salvamento aquático",
    "difficulty": "easy",
    "questionType": "definition",
    "question": "Em resgate aquático com vítima consciente e correnteza, qual conduta inicial é recomendada?",
    "options": [
      "A) Priorizar alcance e lançamento de meios de flutuação antes de entrada na água, quando viável.",
      "B) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
      "C) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "D) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "E) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para resgate aquático.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-aqu-tico",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-aqu-tico",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para resgate aquático.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0082",
    "theme": "Salvamento",
    "subtheme": "Salvamento aquático",
    "difficulty": "medium",
    "questionType": "comparison",
    "question": "Qual estratégia em salvamento aquático prioriza segurança do socorrista?",
    "options": [
      "A) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "B) Avaliar corrente, vento e ponto de retorno para planejar abordagem segura à vítima.",
      "C) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
      "D) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "E) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para resgate aquático.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-aqu-tico",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-aqu-tico",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para resgate aquático.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0083",
    "theme": "Salvamento",
    "subtheme": "Salvamento aquático",
    "difficulty": "hard",
    "questionType": "exception",
    "question": "Durante atendimento de afogamento, qual decisão técnica é mais adequada?",
    "options": [
      "A) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "B) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "C) Realizar entrada na água apenas com equipamento apropriado e cobertura de segurança.",
      "D) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
      "E) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para resgate aquático.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-aqu-tico",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-aqu-tico",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para resgate aquático.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0084",
    "theme": "Salvamento",
    "subtheme": "Salvamento aquático",
    "difficulty": "easy",
    "questionType": "conceptual",
    "question": "Em ambiente de surf e arrebentação, qual ação deve ser priorizada?",
    "options": [
      "A) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
      "B) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "C) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "D) Retirar vítima para zona segura mantendo controle de via aérea e prevenção de nova submersão.",
      "E) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para resgate aquático.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-aqu-tico",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-aqu-tico",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para resgate aquático.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0085",
    "theme": "Salvamento",
    "subtheme": "Salvamento aquático",
    "difficulty": "medium",
    "questionType": "application",
    "question": "Em resgate aquático com vítima consciente e correnteza, qual conduta inicial é recomendada?",
    "options": [
      "A) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "B) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
      "C) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "D) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
      "E) Integrar resgate e avaliação inicial da vítima sem comprometer segurança da equipe."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para resgate aquático.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-aqu-tico",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-aqu-tico",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para resgate aquático.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0086",
    "theme": "Salvamento",
    "subtheme": "Salvamento aquático",
    "difficulty": "hard",
    "questionType": "scenario",
    "question": "Qual estratégia em salvamento aquático prioriza segurança do socorrista?",
    "options": [
      "A) Priorizar alcance e lançamento de meios de flutuação antes de entrada na água, quando viável.",
      "B) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
      "C) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "D) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "E) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para resgate aquático.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-aqu-tico",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-aqu-tico",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para resgate aquático.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0087",
    "theme": "Salvamento",
    "subtheme": "Salvamento aquático",
    "difficulty": "easy",
    "questionType": "procedure",
    "question": "Durante atendimento de afogamento, qual decisão técnica é mais adequada?",
    "options": [
      "A) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "B) Avaliar corrente, vento e ponto de retorno para planejar abordagem segura à vítima.",
      "C) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
      "D) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "E) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para resgate aquático.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-aqu-tico",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-aqu-tico",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para resgate aquático.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0088",
    "theme": "Salvamento",
    "subtheme": "Salvamento aquático",
    "difficulty": "medium",
    "questionType": "definition",
    "question": "Em ambiente de surf e arrebentação, qual ação deve ser priorizada?",
    "options": [
      "A) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "B) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "C) Realizar entrada na água apenas com equipamento apropriado e cobertura de segurança.",
      "D) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
      "E) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para resgate aquático.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-salvamento-aqu-tico",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-salvamento-aqu-tico",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para resgate aquático.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0089",
    "theme": "Salvamento",
    "subtheme": "Resgate veicular",
    "difficulty": "hard",
    "questionType": "comparison",
    "question": "Em colisão com vítima encarcerada, qual etapa deve ser priorizada antes do desencarceramento?",
    "options": [
      "A) Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
      "B) Movimentar o veículo para área ampla antes de qualquer estabilização.",
      "C) Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
      "D) Estabilizar o veículo, gerenciar riscos e coordenar acesso à vítima antes do corte estrutural.",
      "E) Desconectar bateria somente após finalizar abertura total do habitáculo."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimentos em resgate veicular.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-resgate-veicular",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-resgate-veicular",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimentos em resgate veicular.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Movimentar o veículo para área ampla antes de qualquer estabilização.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Desconectar bateria somente após finalizar abertura total do habitáculo.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0090",
    "theme": "Salvamento",
    "subtheme": "Resgate veicular",
    "difficulty": "easy",
    "questionType": "exception",
    "question": "Qual conduta inicial em resgate veicular melhora segurança da operação?",
    "options": [
      "A) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "B) Movimentar o veículo para área ampla antes de qualquer estabilização.",
      "C) Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
      "D) Definir estratégia de extração somente após início das manobras de corte.",
      "E) Executar isolamento da cena, controle de energia e proteção da vítima durante ferramentas de extricação."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimentos em resgate veicular.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-resgate-veicular",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-resgate-veicular",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimentos em resgate veicular.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Movimentar o veículo para área ampla antes de qualquer estabilização.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Definir estratégia de extração somente após início das manobras de corte.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0091",
    "theme": "Salvamento",
    "subtheme": "Resgate veicular",
    "difficulty": "medium",
    "questionType": "conceptual",
    "question": "Durante extração de vítima presa, qual decisão técnica é correta?",
    "options": [
      "A) Planejar via de acesso e saída com equipe integrada, monitorando condição clínica continuamente.",
      "B) Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
      "C) Movimentar o veículo para área ampla antes de qualquer estabilização.",
      "D) Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
      "E) Desconectar bateria somente após finalizar abertura total do habitáculo."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimentos em resgate veicular.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-resgate-veicular",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-resgate-veicular",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimentos em resgate veicular.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Movimentar o veículo para área ampla antes de qualquer estabilização.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Desconectar bateria somente após finalizar abertura total do habitáculo.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0092",
    "theme": "Salvamento",
    "subtheme": "Resgate veicular",
    "difficulty": "hard",
    "questionType": "application",
    "question": "No gerenciamento do resgate veicular, qual sequência é mais adequada?",
    "options": [
      "A) Dispensar proteção interna da vítima para facilitar visualização da equipe.",
      "B) Priorizar segurança da equipe e da vítima com estabilização progressiva e comunicação operacional.",
      "C) Movimentar o veículo para área ampla antes de qualquer estabilização.",
      "D) Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
      "E) Definir estratégia de extração somente após início das manobras de corte."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimentos em resgate veicular.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-resgate-veicular",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-resgate-veicular",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimentos em resgate veicular.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Dispensar proteção interna da vítima para facilitar visualização da equipe.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Movimentar o veículo para área ampla antes de qualquer estabilização.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Definir estratégia de extração somente após início das manobras de corte.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0093",
    "theme": "Salvamento",
    "subtheme": "Resgate veicular",
    "difficulty": "easy",
    "questionType": "scenario",
    "question": "Em colisão com vítima encarcerada, qual etapa deve ser priorizada antes do desencarceramento?",
    "options": [
      "A) Dispensar proteção interna da vítima para facilitar visualização da equipe.",
      "B) Movimentar o veículo para área ampla antes de qualquer estabilização.",
      "C) Realizar desencarceramento compatível com mecanismo e deformação, evitando manobras bruscas.",
      "D) Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
      "E) Desconectar bateria somente após finalizar abertura total do habitáculo."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimentos em resgate veicular.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-resgate-veicular",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-resgate-veicular",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimentos em resgate veicular.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Dispensar proteção interna da vítima para facilitar visualização da equipe.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Movimentar o veículo para área ampla antes de qualquer estabilização.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Desconectar bateria somente após finalizar abertura total do habitáculo.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0094",
    "theme": "Salvamento",
    "subtheme": "Resgate veicular",
    "difficulty": "medium",
    "questionType": "procedure",
    "question": "Qual conduta inicial em resgate veicular melhora segurança da operação?",
    "options": [
      "A) Ignorar vazamento de combustível enquanto não houver chama visível.",
      "B) Movimentar o veículo para área ampla antes de qualquer estabilização.",
      "C) Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
      "D) Estabilizar o veículo, gerenciar riscos e coordenar acesso à vítima antes do corte estrutural.",
      "E) Definir estratégia de extração somente após início das manobras de corte."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimentos em resgate veicular.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-resgate-veicular",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-resgate-veicular",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimentos em resgate veicular.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Ignorar vazamento de combustível enquanto não houver chama visível.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Movimentar o veículo para área ampla antes de qualquer estabilização.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Definir estratégia de extração somente após início das manobras de corte.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0095",
    "theme": "Salvamento",
    "subtheme": "Resgate veicular",
    "difficulty": "hard",
    "questionType": "definition",
    "question": "Durante extração de vítima presa, qual decisão técnica é correta?",
    "options": [
      "A) Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
      "B) Movimentar o veículo para área ampla antes de qualquer estabilização.",
      "C) Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
      "D) Desconectar bateria somente após finalizar abertura total do habitáculo.",
      "E) Executar isolamento da cena, controle de energia e proteção da vítima durante ferramentas de extricação."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimentos em resgate veicular.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-resgate-veicular",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-resgate-veicular",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimentos em resgate veicular.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Movimentar o veículo para área ampla antes de qualquer estabilização.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Desconectar bateria somente após finalizar abertura total do habitáculo.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0096",
    "theme": "Salvamento",
    "subtheme": "Resgate veicular",
    "difficulty": "easy",
    "questionType": "comparison",
    "question": "No gerenciamento do resgate veicular, qual sequência é mais adequada?",
    "options": [
      "A) Planejar via de acesso e saída com equipe integrada, monitorando condição clínica continuamente.",
      "B) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "C) Movimentar o veículo para área ampla antes de qualquer estabilização.",
      "D) Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
      "E) Definir estratégia de extração somente após início das manobras de corte."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimentos em resgate veicular.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-resgate-veicular",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-resgate-veicular",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimentos em resgate veicular.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Movimentar o veículo para área ampla antes de qualquer estabilização.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Definir estratégia de extração somente após início das manobras de corte.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0097",
    "theme": "Salvamento",
    "subtheme": "Busca terrestre",
    "difficulty": "medium",
    "questionType": "exception",
    "question": "Em busca terrestre por pessoa desaparecida, qual conduta inicial é mais efetiva?",
    "options": [
      "A) Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
      "B) Definir área de busca com setorização, pontos de controle e registro sistemático de varredura.",
      "C) Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
      "D) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimento de busca terrestre.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-busca-terrestre",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-busca-terrestre",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimento de busca terrestre.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0098",
    "theme": "Salvamento",
    "subtheme": "Busca terrestre",
    "difficulty": "hard",
    "questionType": "conceptual",
    "question": "Qual decisão sobre setorização e varredura é tecnicamente adequada?",
    "options": [
      "A) Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
      "B) Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
      "C) Priorizar coleta de dados iniciais confiáveis para orientar probabilidade e emprego de equipes.",
      "D) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimento de busca terrestre.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-busca-terrestre",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-busca-terrestre",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimento de busca terrestre.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0099",
    "theme": "Salvamento",
    "subtheme": "Busca terrestre",
    "difficulty": "easy",
    "questionType": "application",
    "question": "Durante operação prolongada de busca terrestre, qual prática deve ser adotada?",
    "options": [
      "A) Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
      "B) Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
      "C) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "D) Aplicar método de varredura compatível com terreno, visibilidade e recursos disponíveis.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimento de busca terrestre.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-busca-terrestre",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-busca-terrestre",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimento de busca terrestre.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0100",
    "theme": "Salvamento",
    "subtheme": "Busca terrestre",
    "difficulty": "medium",
    "questionType": "scenario",
    "question": "No planejamento da busca, qual prioridade melhora cobertura e controle?",
    "options": [
      "A) Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
      "B) Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
      "C) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "D) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
      "E) Manter rastreabilidade das áreas já cobertas e realocar equipes conforme novos indícios."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimento de busca terrestre.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-busca-terrestre",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-busca-terrestre",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimento de busca terrestre.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0101",
    "theme": "Salvamento",
    "subtheme": "Busca terrestre",
    "difficulty": "hard",
    "questionType": "procedure",
    "question": "Em busca terrestre por pessoa desaparecida, qual conduta inicial é mais efetiva?",
    "options": [
      "A) Integrar comando, comunicação e segurança operacional em todas as fases da busca.",
      "B) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "C) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
      "D) Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
      "E) Distribuir equipes aleatoriamente para aumentar chance de encontro fortuito."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimento de busca terrestre.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-busca-terrestre",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-busca-terrestre",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimento de busca terrestre.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Distribuir equipes aleatoriamente para aumentar chance de encontro fortuito.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0102",
    "theme": "Salvamento",
    "subtheme": "Busca terrestre",
    "difficulty": "easy",
    "questionType": "definition",
    "question": "Qual decisão sobre setorização e varredura é tecnicamente adequada?",
    "options": [
      "A) Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
      "B) Definir área de busca com setorização, pontos de controle e registro sistemático de varredura.",
      "C) Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
      "D) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimento de busca terrestre.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-busca-terrestre",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-busca-terrestre",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimento de busca terrestre.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0103",
    "theme": "Salvamento",
    "subtheme": "Busca terrestre",
    "difficulty": "medium",
    "questionType": "comparison",
    "question": "Durante operação prolongada de busca terrestre, qual prática deve ser adotada?",
    "options": [
      "A) Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
      "B) Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
      "C) Priorizar coleta de dados iniciais confiáveis para orientar probabilidade e emprego de equipes.",
      "D) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimento de busca terrestre.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-busca-terrestre",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-busca-terrestre",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimento de busca terrestre.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0104",
    "theme": "Salvamento",
    "subtheme": "Busca terrestre",
    "difficulty": "hard",
    "questionType": "exception",
    "question": "No planejamento da busca, qual prioridade melhora cobertura e controle?",
    "options": [
      "A) Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
      "B) Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
      "C) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "D) Aplicar método de varredura compatível com terreno, visibilidade e recursos disponíveis.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para procedimento de busca terrestre.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-busca-terrestre",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-busca-terrestre",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para procedimento de busca terrestre.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0105",
    "theme": "Operações",
    "subtheme": "Segurança operacional",
    "difficulty": "easy",
    "questionType": "conceptual",
    "question": "Durante ocorrência complexa, qual medida fortalece a segurança operacional da guarnição?",
    "options": [
      "A) Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
      "B) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "C) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "D) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
      "E) Aplicar gerenciamento contínuo de riscos, controle de pessoal e comunicação clara entre funções."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para gestão de segurança da guarnição.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-seguran-a-operacional",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-seguran-a-operacional",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para gestão de segurança da guarnição.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0106",
    "theme": "Operações",
    "subtheme": "Segurança operacional",
    "difficulty": "medium",
    "questionType": "application",
    "question": "Qual prática de comando contribui para reduzir acidentes em operação?",
    "options": [
      "A) Manter sistema de comando, checagem por pares e ponto de controle de entrada e saída.",
      "B) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "C) Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
      "D) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para gestão de segurança da guarnição.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-seguran-a-operacional",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-seguran-a-operacional",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para gestão de segurança da guarnição.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0107",
    "theme": "Operações",
    "subtheme": "Segurança operacional",
    "difficulty": "hard",
    "questionType": "scenario",
    "question": "Na gestão de risco em campo, qual conduta deve ser adotada?",
    "options": [
      "A) Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
      "B) Interromper tática quando risco superar benefício esperado, redefinindo plano operacional.",
      "C) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "D) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para gestão de segurança da guarnição.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-seguran-a-operacional",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-seguran-a-operacional",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para gestão de segurança da guarnição.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0108",
    "theme": "Operações",
    "subtheme": "Segurança operacional",
    "difficulty": "easy",
    "questionType": "procedure",
    "question": "Em operação com múltiplas equipes, qual decisão preserva segurança coletiva?",
    "options": [
      "A) Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
      "B) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "C) Garantir briefing objetivo, canais de comunicação funcionais e atualização situacional frequente.",
      "D) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para gestão de segurança da guarnição.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-seguran-a-operacional",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-seguran-a-operacional",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para gestão de segurança da guarnição.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0109",
    "theme": "Operações",
    "subtheme": "Segurança operacional",
    "difficulty": "medium",
    "questionType": "definition",
    "question": "Durante ocorrência complexa, qual medida fortalece a segurança operacional da guarnição?",
    "options": [
      "A) Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
      "B) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "C) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "D) Monitorar fadiga, tempo de exposição e condições ambientais para ajustar a operação com segurança.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para gestão de segurança da guarnição.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-seguran-a-operacional",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-seguran-a-operacional",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para gestão de segurança da guarnição.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0110",
    "theme": "Operações",
    "subtheme": "Segurança operacional",
    "difficulty": "hard",
    "questionType": "comparison",
    "question": "Qual prática de comando contribui para reduzir acidentes em operação?",
    "options": [
      "A) Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
      "B) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "C) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "D) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
      "E) Aplicar gerenciamento contínuo de riscos, controle de pessoal e comunicação clara entre funções."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para gestão de segurança da guarnição.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-seguran-a-operacional",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-seguran-a-operacional",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para gestão de segurança da guarnição.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0111",
    "theme": "Operações",
    "subtheme": "Segurança operacional",
    "difficulty": "easy",
    "questionType": "exception",
    "question": "Na gestão de risco em campo, qual conduta deve ser adotada?",
    "options": [
      "A) Manter sistema de comando, checagem por pares e ponto de controle de entrada e saída.",
      "B) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "C) Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
      "D) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para gestão de segurança da guarnição.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-seguran-a-operacional",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-seguran-a-operacional",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para gestão de segurança da guarnição.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0112",
    "theme": "Operações",
    "subtheme": "Segurança operacional",
    "difficulty": "medium",
    "questionType": "conceptual",
    "question": "Em operação com múltiplas equipes, qual decisão preserva segurança coletiva?",
    "options": [
      "A) Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
      "B) Interromper tática quando risco superar benefício esperado, redefinindo plano operacional.",
      "C) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "D) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para gestão de segurança da guarnição.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-seguran-a-operacional",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-seguran-a-operacional",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para gestão de segurança da guarnição.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0113",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "hard",
    "questionType": "application",
    "question": "No exercício da atividade técnica, qual conduta está em conformidade com a base normativa?",
    "options": [
      "A) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "B) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "C) Aplicar critérios previstos em norma vigente, registrando fundamentação técnica e evidências da decisão.",
      "D) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "E) Padronizar decisões por costume local sem consulta ao texto normativo vigente."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para base normativa do CBMSC.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-legisla-o-e-atividade-t-cnica",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-legisla-o-e-atividade-t-cnica",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para base normativa do CBMSC.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Padronizar decisões por costume local sem consulta ao texto normativo vigente.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0114",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "easy",
    "questionType": "scenario",
    "question": "Qual decisão em processo técnico reduz não conformidades e retrabalho?",
    "options": [
      "A) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "B) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "C) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "D) Conferir escopo da exigência normativa e compatibilizar análise com risco e ocupação avaliada.",
      "E) Padronizar decisões por costume local sem consulta ao texto normativo vigente."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para base normativa do CBMSC.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-legisla-o-e-atividade-t-cnica",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-legisla-o-e-atividade-t-cnica",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para base normativa do CBMSC.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Padronizar decisões por costume local sem consulta ao texto normativo vigente.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0115",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "medium",
    "questionType": "procedure",
    "question": "Ao analisar exigências normativas, qual abordagem é mais adequada?",
    "options": [
      "A) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "B) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "C) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "D) Ignorar atualização de instruções técnicas até fechamento anual dos processos.",
      "E) Manter rastreabilidade documental e atualização normativa durante todo o processo técnico."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para base normativa do CBMSC.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-legisla-o-e-atividade-t-cnica",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-legisla-o-e-atividade-t-cnica",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para base normativa do CBMSC.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar atualização de instruções técnicas até fechamento anual dos processos.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0116",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "hard",
    "questionType": "definition",
    "question": "Na atuação administrativa e técnica, qual prática fortalece segurança jurídica?",
    "options": [
      "A) Decidir com base em requisito aplicável e justificativa técnica objetiva, evitando interpretações arbitrárias.",
      "B) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "C) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "D) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "E) Ignorar atualização de instruções técnicas até fechamento anual dos processos."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para base normativa do CBMSC.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-legisla-o-e-atividade-t-cnica",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-legisla-o-e-atividade-t-cnica",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para base normativa do CBMSC.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar atualização de instruções técnicas até fechamento anual dos processos.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0117",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "easy",
    "questionType": "comparison",
    "question": "No exercício da atividade técnica, qual conduta está em conformidade com a base normativa?",
    "options": [
      "A) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "B) Alinhar vistoria, análise e parecer ao instrumento normativo específico da atividade executada.",
      "C) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "D) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "E) Aplicar a mesma exigência para todas as ocupações, independentemente do risco."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para base normativa do CBMSC.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-legisla-o-e-atividade-t-cnica",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-legisla-o-e-atividade-t-cnica",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para base normativa do CBMSC.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Aplicar a mesma exigência para todas as ocupações, independentemente do risco.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0118",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "medium",
    "questionType": "exception",
    "question": "Qual decisão em processo técnico reduz não conformidades e retrabalho?",
    "options": [
      "A) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "B) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "C) Aplicar critérios previstos em norma vigente, registrando fundamentação técnica e evidências da decisão.",
      "D) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "E) Aplicar a mesma exigência para todas as ocupações, independentemente do risco."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para base normativa do CBMSC.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-legisla-o-e-atividade-t-cnica",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-legisla-o-e-atividade-t-cnica",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para base normativa do CBMSC.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Aplicar a mesma exigência para todas as ocupações, independentemente do risco.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0119",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "hard",
    "questionType": "conceptual",
    "question": "Ao analisar exigências normativas, qual abordagem é mais adequada?",
    "options": [
      "A) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "B) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "C) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "D) Conferir escopo da exigência normativa e compatibilizar análise com risco e ocupação avaliada.",
      "E) Padronizar decisões por costume local sem consulta ao texto normativo vigente."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para base normativa do CBMSC.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-legisla-o-e-atividade-t-cnica",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-legisla-o-e-atividade-t-cnica",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para base normativa do CBMSC.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Padronizar decisões por costume local sem consulta ao texto normativo vigente.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  },
  {
    "id": "cbmsc-q-0120",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "easy",
    "questionType": "application",
    "question": "Na atuação administrativa e técnica, qual prática fortalece segurança jurídica?",
    "options": [
      "A) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "B) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "C) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "D) Padronizar decisões por costume local sem consulta ao texto normativo vigente.",
      "E) Manter rastreabilidade documental e atualização normativa durante todo o processo técnico."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Referencial CBMSC Consolidado.",
    "supportSnippet": "Referência operacional para base normativa do CBMSC.",
    "manualId": "cbmsc-referencia-geral",
    "sectionId": "secao-legisla-o-e-atividade-t-cnica",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "cbmsc-referencia-geral",
        "sectionId": "secao-legisla-o-e-atividade-t-cnica",
        "sourceUrl": "https://www.cbm.sc.gov.br",
        "excerpt": "Referência operacional para base normativa do CBMSC.",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-cbmsc-referencia-geral"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Padronizar decisões por costume local sem consulta ao texto normativo vigente.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        }
      ]
    }
  }
]
