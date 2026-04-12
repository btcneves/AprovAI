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
      "D) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão com base operacional.",
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos com base operacional."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
    "pages": {
      "start": 13,
      "end": 14
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Classe A: sólidos combustíveis com form",
        "pageStart": 13,
        "pageEnd": 14
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos com base operacional.",
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
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos com base operacional."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM COMBATE A INCÊNDIO ESTRUTURAL.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-a1af9389",
    "pages": {
      "start": 16,
      "end": 16
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-a1af9389",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=754:manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 16,
        "pageEnd": 16
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural"
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
          "plausible": true
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-7f1f49f2",
    "pages": {
      "start": 861,
      "end": 861
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-7f1f49f2",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 861,
        "pageEnd": 861
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
          "plausible": true
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFS 2020.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020-sec-f7065879",
    "pages": {
      "start": 487,
      "end": 487
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020-sec-f7065879",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=783:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 487,
        "pageEnd": 487
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM COMBATE A INCÊNDIO ESTRUTURAL.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-e4a98d18",
    "pages": {
      "start": 29,
      "end": 29
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-e4a98d18",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=754:manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 29,
        "pageEnd": 29
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural"
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
      "D) Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão com base operacional.",
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos com base operacional."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-ee1139ac",
    "pages": {
      "start": 74,
      "end": 74
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-ee1139ac",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 74,
        "pageEnd": 74
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
          "text": "Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos com base operacional.",
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
      "E) Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos com base operacional."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE FORMAÇÃO DE COMBATE A INCÊNDIOS.",
    "supportSnippet": "3 COMBATE A INCÊNDIO “CLASSE C” 3.1 MATERIAIS ENERGIZADOS Este tipo de incêndio pode ser extinto após o corte da energia elétrica, tornando-se classe “A” ou “B”. Deve-se utilizar agentes extintores não condutores, como P Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-893e893b",
    "pages": {
      "start": 153,
      "end": 153
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-893e893b",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=755:curso-de-formacao-de-combate-a-incendios",
        "excerpt": "3 COMBATE A INCÊNDIO “CLASSE C” 3.1 MATERIAIS ENERGIZADOS Este tipo de incêndio pode ser extinto após o corte da energia elétrica, tornando-se classe “A” ou “B”. Deve-se utilizar agentes extintores não condutores, como P Classe A: sólidos combustíveis com form",
        "pageStart": 153,
        "pageEnd": 153
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios"
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
          "plausible": true
        },
        {
          "text": "Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Classes de incêndio\", mantendo segurança operacional e reavaliação contínua conforme TÓPICOS ESPECIAIS: INCÊNDIO EM VEÍCULOS.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos-sec-22893ce2",
    "pages": {
      "start": 21,
      "end": 21
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos-sec-22893ce2",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=741:topicos-especiais-incendio-em-veiculos",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 21,
        "pageEnd": 21
      }
    ],
    "tags": [
      "incêndio",
      "classes de incêndio",
      "manual-incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos"
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
          "plausible": true
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
      "D) Selecionar o método que remove o elemento dominante do fogo no cenário, combinando resfriamento",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-58214283",
    "pages": {
      "start": 68,
      "end": 68
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-58214283",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
        "pageStart": 68,
        "pageEnd": 68
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
          "plausible": true
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
          "plausible": true
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
      "D) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional.",
      "E) Aplicar isolamento de combustível quando possível e seguro, reduzindo alimentação do fogo antes de ampliar o ataque."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-907eafa5",
    "pages": {
      "start": 69,
      "end": 69
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-907eafa5",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
        "pageStart": 69,
        "pageEnd": 69
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional.",
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
      "A) Aplicar isolamento de combustível quando possível e seguro, reduzindo alimentação do fogo antes de ampliar o ataque.",
      "B) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "C) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "D) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-49881a22",
    "pages": {
      "start": 71,
      "end": 71
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-49881a22",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
        "pageStart": 71,
        "pageEnd": 71
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional.",
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
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Reduz temperatura abaixo do ponto de ig",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
    "pages": {
      "start": 13,
      "end": 14
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Reduz temperatura abaixo do ponto de ig",
        "pageStart": 13,
        "pageEnd": 14
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional.",
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
      "A) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "B) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "C) Ajustar o método conforme a evolução da combustão, sem manter técnica única quando o comportamento do fogo muda.",
      "D) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Seção Branca: informações e orientações gerais 2. Seção Amarela: produtos perigosos em ordem numérica e crescente 3. Seção Azul: produtos em ordem alfabética 4. Seção Alaranjada: relação com 62 guias de emergências com r Reduz temperatura abaixo do ponto de ig",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-f243c4c6",
    "pages": {
      "start": 1118,
      "end": 1120
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-f243c4c6",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Seção Branca: informações e orientações gerais 2. Seção Amarela: produtos perigosos em ordem numérica e crescente 3. Seção Azul: produtos em ordem alfabética 4. Seção Alaranjada: relação com 62 guias de emergências com r Reduz temperatura abaixo do ponto de ig",
        "pageStart": 1118,
        "pageEnd": 1120
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
          "plausible": true
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
      "D) Selecionar o método que remove o elemento dominante do fogo no cenário, combinando resfriamento",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "2.4 Acidente com Produto Perigoso Evento repentino e não desejado, onde a liberação de substâncias químicas perigosas em forma de incêndio, explosão, derrame ou vazamento, que pode causar danos as pessoas, propriedades o Reduz temperatura abaixo do ponto de ig",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-695026c4",
    "pages": {
      "start": 20,
      "end": 22
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-695026c4",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "2.4 Acidente com Produto Perigoso Evento repentino e não desejado, onde a liberação de substâncias químicas perigosas em forma de incêndio, explosão, derrame ou vazamento, que pode causar danos as pessoas, propriedades o Reduz temperatura abaixo do ponto de ig",
        "pageStart": 20,
        "pageEnd": 22
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
          "plausible": true
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
          "plausible": true
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
      "D) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional.",
      "E) Aplicar isolamento de combustível quando possível e seguro, reduzindo alimentação do fogo antes de ampliar o ataque."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "1 O sistema de classificação da ONU Devido ao crescente número de acidentes envolvendo produtos perigosos e à falta de padronização dos mesmos, a Organização das Nações Unidas (ONU) atribuiu a cada produto perigoso um nú Reduz temperatura abaixo do ponto de ig",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-0c894f81",
    "pages": {
      "start": 29,
      "end": 29
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-0c894f81",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "1 O sistema de classificação da ONU Devido ao crescente número de acidentes envolvendo produtos perigosos e à falta de padronização dos mesmos, a Organização das Nações Unidas (ONU) atribuiu a cada produto perigoso um nú Reduz temperatura abaixo do ponto de ig",
        "pageStart": 29,
        "pageEnd": 29
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional.",
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
      "A) Aplicar isolamento de combustível quando possível e seguro, reduzindo alimentação do fogo antes de ampliar o ataque.",
      "B) Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.",
      "C) Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.",
      "D) Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.",
      "E) Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Métodos de extinção\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "2.2 Painel de Segurança É um retângulo de cor laranja com duas numerações na cor preta, na parte superior, o número de identificação do risco do produto químico e na parte inferior o número da ONU, que identifica qual é  Reduz temperatura abaixo do ponto de ig",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-735afeae",
    "pages": {
      "start": 51,
      "end": 52
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-735afeae",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "2.2 Painel de Segurança É um retângulo de cor laranja com duas numerações na cor preta, na parte superior, o número de identificação do risco do produto químico e na parte inferior o número da ONU, que identifica qual é  Reduz temperatura abaixo do ponto de ig",
        "pageStart": 51,
        "pageEnd": 52
      }
    ],
    "tags": [
      "incêndio",
      "métodos de extinção",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
          "text": "Iniciar por ventilação forçada para só depois definir método de extinção no foco principal com base operacional.",
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
      "A) Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
      "B) Executar leitura contínua do ambiente, aplicando pulsos de resfriamento de gases quando houver risco de transição rápida.",
      "C) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "D) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "E) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE FORMAÇÃO DE COMBATE A INCÊNDIOS.",
    "supportSnippet": "1.2 IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da queima, em virtude da elevação da temperatura do ambiente, entram em ignição simultaneamente, com efeitos similares aos Cor, volume e velocidade da fumaça orie",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-83952d47",
    "pages": {
      "start": 58,
      "end": 59
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-83952d47",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=755:curso-de-formacao-de-combate-a-incendios",
        "excerpt": "1.2 IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da queima, em virtude da elevação da temperatura do ambiente, entram em ignição simultaneamente, com efeitos similares aos Cor, volume e velocidade da fumaça orie",
        "pageStart": 58,
        "pageEnd": 59
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
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
    "id": "cbmsc-q-0018",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "easy",
    "questionType": "definition",
    "question": "Durante progressão interna, qual interpretação de fenômenos térmicos reduz risco de evento extremo?",
    "options": [
      "A) Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
      "B) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "C) Executar leitura contínua do ambiente, aplicando pulsos de resfriamento de gases quando houver risco de transição rápida.",
      "D) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "E) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE FORMAÇÃO DE COMBATE A INCÊNDIOS.",
    "supportSnippet": "1 FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária) são difíceis de traduzir para a língua portuguesa com a fidelidade conceitual necessária, ainda não temos nenhuma publicação cientí Cor, volume e velocidade da fumaça orie",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-853d101e",
    "pages": {
      "start": 57,
      "end": 57
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-853d101e",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=755:curso-de-formacao-de-combate-a-incendios",
        "excerpt": "1 FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária) são difíceis de traduzir para a língua portuguesa com a fidelidade conceitual necessária, ainda não temos nenhuma publicação cientí Cor, volume e velocidade da fumaça orie",
        "pageStart": 57,
        "pageEnd": 57
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
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
    "id": "cbmsc-q-0019",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "medium",
    "questionType": "comparison",
    "question": "Ao identificar indícios de ventilação limitada, qual conduta sobre comportamento do fogo é mais adequada?",
    "options": [
      "A) Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
      "B) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "C) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "D) Executar leitura contínua do ambiente, aplicando pulsos de resfriamento de gases quando houver risco de transição rápida.",
      "E) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE FORMAÇÃO DE COMBATE A INCÊNDIOS.",
    "supportSnippet": "2.1 VISUALIZAÇÃO DO FOCO DO INCÊNDIO Uma ventilação adequada retirará do ambiente os produtos da combustão que impedem a visualização, permitindo que o bombeiro tenha uma boa visão do foco do incêndio, e assim, atingindo Cor, volume e velocidade da fumaça orie",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-c7930192",
    "pages": {
      "start": 158,
      "end": 159
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-c7930192",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=755:curso-de-formacao-de-combate-a-incendios",
        "excerpt": "2.1 VISUALIZAÇÃO DO FOCO DO INCÊNDIO Uma ventilação adequada retirará do ambiente os produtos da combustão que impedem a visualização, permitindo que o bombeiro tenha uma boa visão do foco do incêndio, e assim, atingindo Cor, volume e velocidade da fumaça orie",
        "pageStart": 158,
        "pageEnd": 159
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
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
    "id": "cbmsc-q-0020",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "hard",
    "questionType": "exception",
    "question": "Em ambiente confinado com aquecimento rápido, qual avaliação técnica deve preceder a abertura de compartimento?",
    "options": [
      "A) Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
      "B) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "C) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "D) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.",
      "E) Executar leitura contínua do ambiente, aplicando pulsos de resfriamento de gases quando houver risco de transição rápida."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM COMBATE A INCÊNDIO ESTRUTURAL.",
    "supportSnippet": "Foco: flashover. Foco: backdraft. Foco: fumaça. IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da.... – FLASHOVER É um momento em que os gases combustíveis resultantes da qu Cor, volume e velocidade da fumaça orie",
    "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-59d68342",
    "pages": {
      "start": 20,
      "end": 20
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-59d68342",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=754:manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "excerpt": "Foco: flashover. Foco: backdraft. Foco: fumaça. IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da.... – FLASHOVER É um momento em que os gases combustíveis resultantes da qu Cor, volume e velocidade da fumaça orie",
        "pageStart": 20,
        "pageEnd": 20
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
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
    "id": "cbmsc-q-0021",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "easy",
    "questionType": "conceptual",
    "question": "Com sinais de alta temperatura e fumaça densa pulsante, qual leitura de comportamento do fogo orienta ação segura?",
    "options": [
      "A) Executar leitura contínua do ambiente, aplicando pulsos de resfriamento de gases quando houver risco de transição rápida.",
      "B) Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
      "C) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "D) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "E) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: flashover. Foco: backdraft. Foco: fumaça. IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da.... – FLASHOVER É um momento em que os gases combustíveis resultantes da qu Cor, volume e velocidade da fumaça orie",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
    "pages": {
      "start": 75,
      "end": 75
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: flashover. Foco: backdraft. Foco: fumaça. IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da.... – FLASHOVER É um momento em que os gases combustíveis resultantes da qu Cor, volume e velocidade da fumaça orie",
        "pageStart": 75,
        "pageEnd": 75
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
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
      "A) Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
      "B) Executar leitura contínua do ambiente, aplicando pulsos de resfriamento de gases quando houver risco de transição rápida.",
      "C) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "D) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "E) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Cor, volume e velocidade da fumaça orie",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
    "pages": {
      "start": 13,
      "end": 14
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Cor, volume e velocidade da fumaça orie",
        "pageStart": 13,
        "pageEnd": 14
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
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
    "id": "cbmsc-q-0023",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "hard",
    "questionType": "scenario",
    "question": "Ao identificar indícios de ventilação limitada, qual conduta sobre comportamento do fogo é mais adequada?",
    "options": [
      "A) Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
      "B) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "C) Executar leitura contínua do ambiente, aplicando pulsos de resfriamento de gases quando houver risco de transição rápida.",
      "D) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "E) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM COMBATE A INCÊNDIO ESTRUTURAL.",
    "supportSnippet": "Foco: flashover. Foco: backdraft. Foco: fumaça. IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da.... – FLASHOVER É um momento em que os gases combustíveis resultantes da qu Cor, volume e velocidade da fumaça orie",
    "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-a1af9389",
    "pages": {
      "start": 16,
      "end": 16
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-a1af9389",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=754:manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "excerpt": "Foco: flashover. Foco: backdraft. Foco: fumaça. IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da.... – FLASHOVER É um momento em que os gases combustíveis resultantes da qu Cor, volume e velocidade da fumaça orie",
        "pageStart": 16,
        "pageEnd": 16
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
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
    "id": "cbmsc-q-0024",
    "theme": "Incêndio",
    "subtheme": "Comportamento do fogo",
    "difficulty": "easy",
    "questionType": "procedure",
    "question": "Em ambiente confinado com aquecimento rápido, qual avaliação técnica deve preceder a abertura de compartimento?",
    "options": [
      "A) Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
      "B) Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
      "C) Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.",
      "D) Executar leitura contínua do ambiente, aplicando pulsos de resfriamento de gases quando houver risco de transição rápida.",
      "E) Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Comportamento do fogo\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: flashover. Foco: backdraft. Foco: fumaça. IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da.... – FLASHOVER É um momento em que os gases combustíveis resultantes da qu Cor, volume e velocidade da fumaça orie",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-7f1f49f2",
    "pages": {
      "start": 861,
      "end": 861
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-7f1f49f2",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: flashover. Foco: backdraft. Foco: fumaça. IGNIÇÃO SÚBITA GENERALIZADA – FLASHOVER É um momento em que os gases combustíveis resultantes da.... – FLASHOVER É um momento em que os gases combustíveis resultantes da qu Cor, volume e velocidade da fumaça orie",
        "pageStart": 861,
        "pageEnd": 861
      }
    ],
    "tags": [
      "incêndio",
      "comportamento do fogo",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": true
        },
        {
          "text": "Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.",
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
      "E) Confirmar classe, posição de escape e autonomia do extintor antes da descarga contínua controlada."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
    "pages": {
      "start": 13,
      "end": 14
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Classe A: sólidos combustíveis com form",
        "pageStart": 13,
        "pageEnd": 14
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM COMBATE A INCÊNDIO ESTRUTURAL.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-a1af9389",
    "pages": {
      "start": 16,
      "end": 16
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-a1af9389",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=754:manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 16,
        "pageEnd": 16
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural"
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
      "B) Confirmar classe, posição de escape e autonomia do extintor antes da descarga contínua controlada.",
      "C) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "D) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-7f1f49f2",
    "pages": {
      "start": 861,
      "end": 861
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-7f1f49f2",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 861,
        "pageEnd": 861
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "id": "cbmsc-q-0028",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "medium",
    "questionType": "conceptual",
    "question": "Diante de foco inicial em combustível líquido, qual emprego do extintor evita espalhamento do incêndio?",
    "options": [
      "A) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "B) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "C) Confirmar classe, posição de escape e autonomia do extintor antes da descarga contínua controlada.",
      "D) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFS 2020.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020-sec-f7065879",
    "pages": {
      "start": 487,
      "end": 487
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020-sec-f7065879",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=783:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 487,
        "pageEnd": 487
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfs-2020"
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
    "id": "cbmsc-q-0029",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "hard",
    "questionType": "application",
    "question": "Em princípio de incêndio em painel elétrico energizado, qual uso de extintor é tecnicamente mais seguro?",
    "options": [
      "A) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "B) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "C) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "D) Confirmar classe, posição de escape e autonomia do extintor antes da descarga contínua controlada.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM COMBATE A INCÊNDIO ESTRUTURAL.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-e4a98d18",
    "pages": {
      "start": 29,
      "end": 29
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-e4a98d18",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=754:manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 29,
        "pageEnd": 29
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural"
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
    "id": "cbmsc-q-0030",
    "theme": "Incêndio",
    "subtheme": "Extintores",
    "difficulty": "easy",
    "questionType": "scenario",
    "question": "Qual critério de escolha de extintor aumenta chance de controle inicial sem ampliar risco à equipe?",
    "options": [
      "A) Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.",
      "B) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "C) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "D) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.",
      "E) Confirmar classe, posição de escape e autonomia do extintor antes da descarga contínua controlada."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-ee1139ac",
    "pages": {
      "start": 74,
      "end": 74
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-ee1139ac",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 74,
        "pageEnd": 74
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE FORMAÇÃO DE COMBATE A INCÊNDIOS.",
    "supportSnippet": "3 COMBATE A INCÊNDIO “CLASSE C” 3.1 MATERIAIS ENERGIZADOS Este tipo de incêndio pode ser extinto após o corte da energia elétrica, tornando-se classe “A” ou “B”. Deve-se utilizar agentes extintores não condutores, como P Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-893e893b",
    "pages": {
      "start": 153,
      "end": 153
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios-sec-893e893b",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=755:curso-de-formacao-de-combate-a-incendios",
        "excerpt": "3 COMBATE A INCÊNDIO “CLASSE C” 3.1 MATERIAIS ENERGIZADOS Este tipo de incêndio pode ser extinto após o corte da energia elétrica, tornando-se classe “A” ou “B”. Deve-se utilizar agentes extintores não condutores, como P Classe A: sólidos combustíveis com form",
        "pageStart": 153,
        "pageEnd": 153
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-formacao-de-combate-a-incendios"
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
      "B) Confirmar classe, posição de escape e autonomia do extintor antes da descarga contínua controlada.",
      "C) Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.",
      "D) Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.",
      "E) Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Extintores\", mantendo segurança operacional e reavaliação contínua conforme TÓPICOS ESPECIAIS: INCÊNDIO EM VEÍCULOS.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
    "manualId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos-sec-22893ce2",
    "pages": {
      "start": 21,
      "end": 21
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos-sec-22893ce2",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=741:topicos-especiais-incendio-em-veiculos",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Classe A: sólidos combustíveis com form",
        "pageStart": 21,
        "pageEnd": 21
      }
    ],
    "tags": [
      "incêndio",
      "extintores",
      "manual-incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos"
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
          "plausible": true
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
      "D) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
    "pages": {
      "start": 12,
      "end": 12
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 12,
        "pageEnd": 12
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
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
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional.",
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
      "B) Priorizar coleta administrativa de dados para completar registro antes do exame primário com base operacional.",
      "C) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
      "D) Assegurar via aérea com proteção cervical, avaliar ventilação e perfusão antes de avançar para etapas subsequentes.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios: Atendimento Pré-Hospitalar no CBMSC 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
    "pages": {
      "start": 30,
      "end": 30
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=900:aph-ti-atendimento-pre-hospitalar-no-cbmsc-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 30,
        "pageEnd": 30
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022"
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
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional.",
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
      "A) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "B) Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
      "C) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.",
      "D) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.",
      "E) Registrar resposta às intervenções do ABCDE e reiniciar a sequência diante de piora clínica."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
    "pages": {
      "start": 75,
      "end": 75
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 75,
        "pageEnd": 75
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-b65ccd27",
    "pages": {
      "start": 9,
      "end": 9
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-b65ccd27",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 9,
        "pageEnd": 9
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
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
      "A) Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.",
      "B) Executar ABCDE em ordem, tratando imediatamente achados críticos e repetindo reavaliações após cada intervenção.",
      "C) Priorizar coleta administrativa de dados para completar registro antes do exame primário.",
      "D) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
    "pages": {
      "start": 118,
      "end": 118
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 118,
        "pageEnd": 118
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
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
      "D) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
    "pages": {
      "start": 11,
      "end": 11
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 11,
        "pageEnd": 11
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional.",
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
      "B) Priorizar coleta administrativa de dados para completar registro antes do exame primário com base operacional.",
      "C) Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
      "D) Assegurar via aérea com proteção cervical, avaliar ventilação e perfusão antes de avançar para etapas subsequentes.",
      "E) Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
    "pages": {
      "start": 43,
      "end": 43
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 43,
        "pageEnd": 43
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
          "text": "Priorizar coleta administrativa de dados para completar registro antes do exame primário com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem com base operacional.",
          "type": "erro de conceito",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo com base operacional.",
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
      "E) Registrar resposta às intervenções do ABCDE e reiniciar a sequência diante de piora clínica."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"ABCDE\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
    "pages": {
      "start": 49,
      "end": 49
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 49,
        "pageEnd": 49
      }
    ],
    "tags": [
      "aph",
      "abcde",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
    "id": "cbmsc-q-0041",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "hard",
    "questionType": "exception",
    "question": "Em uma PCR presenciada, qual conduta inicial de RCP é mais indicada?",
    "options": [
      "A) Iniciar compressões de alta qualidade rapidamente, minimizar interrupções e integrar DEA assim que disponível.",
      "B) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena com base operacional.",
      "C) Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
      "D) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-90a9ec98",
    "pages": {
      "start": 53,
      "end": 53
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-90a9ec98",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
        "pageStart": 53,
        "pageEnd": 53
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena com base operacional.",
          "type": "erro de ordem",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional.",
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
      "A) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "B) Manter ritmo e profundidade adequados das compressões com revezamento de socorristas para evitar fadiga.",
      "C) Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
      "D) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-61b5b954",
    "pages": {
      "start": 56,
      "end": 56
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-61b5b954",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
        "pageStart": 56,
        "pageEnd": 56
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
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
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
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
      "A) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "B) Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
      "C) Garantir segurança da cena, análise do DEA sem contato com a vítima e retomada imediata das compressões.",
      "D) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme ATENDIMENTO PRÉ-HOSPITALAR CFSd 2018.",
    "supportSnippet": "81 Resumo dos componentes de um RCP de alta qualidade para profissionais do SBV Componente Adultos e adolescentes Crianças (1 ano de idade à puberdade) Bebês (menos de 1 ano de idade, excluindo recém-nascidos) Segurança  Reconhecer PCR e iniciar compressões se",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-atendimento-pre-hospitalar-cfsd-2018",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-atendimento-pre-hospitalar-cfsd-2018-sec-ea6f8871",
    "pages": {
      "start": 81,
      "end": 81
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-atendimento-pre-hospitalar-cfsd-2018",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-atendimento-pre-hospitalar-cfsd-2018-sec-ea6f8871",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=745:atendimento-pre-hospitalar-cfsd-2018",
        "excerpt": "81 Resumo dos componentes de um RCP de alta qualidade para profissionais do SBV Componente Adultos e adolescentes Crianças (1 ano de idade à puberdade) Bebês (menos de 1 ano de idade, excluindo recém-nascidos) Segurança  Reconhecer PCR e iniciar compressões se",
        "pageStart": 81,
        "pageEnd": 81
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-atendimento-pre-hospitalar-cfsd-2018"
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
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
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
      "A) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "B) Interromper compressões por períodos longos para checagens frequentes de pulso.",
      "C) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.",
      "D) Monitorar qualidade das compressões e corrigir técnica em tempo real durante toda a reanimação.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "82 Resumo dos componentes de um RCP de alta qualidade para profissionais do SBV Componente Adultos e adolescentes Crianças (1 ano de idade à puberdade) Bebês (menos de 1 ano de idade, excluindo recém-nascidos) Segurança  Reconhecer PCR e iniciar compressões se",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-df2ba215",
    "pages": {
      "start": 188,
      "end": 188
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-df2ba215",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "82 Resumo dos componentes de um RCP de alta qualidade para profissionais do SBV Componente Adultos e adolescentes Crianças (1 ano de idade à puberdade) Bebês (menos de 1 ano de idade, excluindo recém-nascidos) Segurança  Reconhecer PCR e iniciar compressões se",
        "pageStart": 188,
        "pageEnd": 188
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
      "E) Monitorar qualidade das compressões e corrigir técnica em tempo real durante toda a reanimação."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
    "pages": {
      "start": 118,
      "end": 118
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
        "pageStart": 118,
        "pageEnd": 118
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
    "id": "cbmsc-q-0046",
    "theme": "APH",
    "subtheme": "RCP",
    "difficulty": "medium",
    "questionType": "definition",
    "question": "Qual estratégia em RCP aumenta probabilidade de retorno da circulação espontânea?",
    "options": [
      "A) Iniciar compressões de alta qualidade rapidamente, minimizar interrupções e integrar DEA assim que disponível.",
      "B) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena com base operacional.",
      "C) Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
      "D) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
    "pages": {
      "start": 11,
      "end": 11
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
        "pageStart": 11,
        "pageEnd": 11
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena com base operacional.",
          "type": "erro de ordem",
          "variation": "inversão de regra",
          "plausible": true
        },
        {
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional.",
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
      "C) Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
      "D) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
    "pages": {
      "start": 43,
      "end": 43
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
        "pageStart": 43,
        "pageEnd": 43
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional.",
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
      "A) Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.",
      "B) Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
      "C) Garantir segurança da cena, análise do DEA sem contato com a vítima e retomada imediata das compressões.",
      "D) Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
      "E) Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"RCP\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
    "pages": {
      "start": 49,
      "end": 49
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: rcp. Foco: compressão. Foco: desfibrilação. Foco: rcp. Foco: compressão. Foco: desfibrilação. comando de incidentes.. Controle de hemorragia com compressão direta imediata.. Reconhecer PCR e iniciar compressões sem Reconhecer PCR e iniciar compressões se",
        "pageStart": 49,
        "pageEnd": 49
      }
    ],
    "tags": [
      "aph",
      "rcp",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
          "text": "Interromper compressões por períodos longos para checagens frequentes de pulso com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Priorizar ventilação avançada contínua e reduzir frequência das compressões com base operacional.",
          "type": "erro de conceito",
          "variation": "conceito próximo confundido",
          "plausible": true
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
      "C) Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
      "D) Planejar extricação e imobilização de acordo com mecanismo, condição clínica e risco ambiental.",
      "E) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
    "pages": {
      "start": 12,
      "end": 12
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 12,
        "pageEnd": 12
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
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
    "id": "cbmsc-q-0050",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "hard",
    "questionType": "application",
    "question": "Qual conduta em trauma reduz risco de lesões secundárias?",
    "options": [
      "A) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "B) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "C) Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
      "D) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
      "E) Planejar extricação e imobilização de acordo com mecanismo, condição clínica e risco ambiental."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios: Atendimento Pré-Hospitalar no CBMSC 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
    "pages": {
      "start": 30,
      "end": 30
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=900:aph-ti-atendimento-pre-hospitalar-no-cbmsc-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 30,
        "pageEnd": 30
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022"
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
    "id": "cbmsc-q-0051",
    "theme": "APH",
    "subtheme": "Trauma",
    "difficulty": "easy",
    "questionType": "scenario",
    "question": "Durante atendimento ao traumatizado, qual prioridade técnica deve ser adotada?",
    "options": [
      "A) Planejar extricação e imobilização de acordo com mecanismo, condição clínica e risco ambiental.",
      "B) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "C) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "D) Remover capacete de motociclista sem controle manual cervical para agilizar acesso.",
      "E) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
    "pages": {
      "start": 75,
      "end": 75
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 75,
        "pageEnd": 75
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-b65ccd27",
    "pages": {
      "start": 9,
      "end": 9
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-b65ccd27",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 9,
        "pageEnd": 9
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
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
      "C) Planejar extricação e imobilização de acordo com mecanismo, condição clínica e risco ambiental.",
      "D) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
      "E) Remover capacete de motociclista sem controle manual cervical para agilizar acesso."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
    "pages": {
      "start": 118,
      "end": 118
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 118,
        "pageEnd": 118
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
      "D) Planejar extricação e imobilização de acordo com mecanismo, condição clínica e risco ambiental.",
      "E) Remover capacete de motociclista sem controle manual cervical para agilizar acesso."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
    "pages": {
      "start": 11,
      "end": 11
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 11,
        "pageEnd": 11
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
      "E) Planejar extricação e imobilização de acordo com mecanismo, condição clínica e risco ambiental."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
    "pages": {
      "start": 43,
      "end": 43
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 43,
        "pageEnd": 43
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
      "A) Planejar extricação e imobilização de acordo com mecanismo, condição clínica e risco ambiental.",
      "B) Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.",
      "C) Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.",
      "D) Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.",
      "E) Remover capacete de motociclista sem controle manual cervical para agilizar acesso."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Trauma\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
    "pages": {
      "start": 49,
      "end": 49
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 49,
        "pageEnd": 49
      }
    ],
    "tags": [
      "aph",
      "trauma",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
      "A) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
      "B) Aplicar compressão direta imediata e escalonar para torniquete quando o sangramento ameaçar a vida e não responder.",
      "C) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
      "D) Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
      "E) Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
    "pages": {
      "start": 12,
      "end": 12
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 12,
        "pageEnd": 12
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
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
      "A) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
      "B) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
      "C) Controlar hemorragia antes de procedimentos não prioritários, preservando aquecimento e monitorização da vítima.",
      "D) Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
      "E) Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios: Atendimento Pré-Hospitalar no CBMSC 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
    "pages": {
      "start": 30,
      "end": 30
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=900:aph-ti-atendimento-pre-hospitalar-no-cbmsc-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 30,
        "pageEnd": 30
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
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
      "A) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
      "B) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
      "C) Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
      "D) Controlar hemorragia antes de procedimentos não prioritários, preservando aquecimento e monitorização da vítima.",
      "E) Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
    "pages": {
      "start": 75,
      "end": 75
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 75,
        "pageEnd": 75
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
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
      "A) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
      "B) Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
      "C) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
      "D) Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional.",
      "E) Aplicar compressão direta imediata e escalonar para torniquete quando o sangramento ameaçar a vida e não responder."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-b65ccd27",
    "pages": {
      "start": 9,
      "end": 9
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-b65ccd27",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 9,
        "pageEnd": 9
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
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
      "A) Aplicar compressão direta imediata e escalonar para torniquete quando o sangramento ameaçar a vida e não responder.",
      "B) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
      "C) Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
      "D) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
      "E) Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
    "pages": {
      "start": 118,
      "end": 118
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 118,
        "pageEnd": 118
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
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
      "A) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
      "B) Aplicar compressão direta imediata e escalonar para torniquete quando o sangramento ameaçar a vida e não responder.",
      "C) Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
      "D) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
      "E) Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
    "pages": {
      "start": 11,
      "end": 11
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 11,
        "pageEnd": 11
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
        },
        {
          "text": "Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
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
      "A) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
      "B) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
      "C) Controlar hemorragia antes de procedimentos não prioritários, preservando aquecimento e monitorização da vítima.",
      "D) Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
      "E) Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
    "pages": {
      "start": 43,
      "end": 43
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 43,
        "pageEnd": 43
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
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
      "A) Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
      "B) Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
      "C) Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
      "D) Controlar hemorragia antes de procedimentos não prioritários, preservando aquecimento e monitorização da vítima.",
      "E) Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Hemorragias\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
    "pages": {
      "start": 49,
      "end": 49
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 49,
        "pageEnd": 49
      }
    ],
    "tags": [
      "aph",
      "hemorragias",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": false
        },
        {
          "text": "Esperar estabilização dos sinais vitais antes de controlar sangramento periférico com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": true
        },
        {
          "text": "Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro com base operacional.",
          "type": "erro de aplicação",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia com base operacional.",
          "type": "erro de ordem",
          "variation": "erro de prioridade",
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
      "E) Manter aproximação cautelosa sem contato direto com substância até identificação mínima confiável."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-58214283",
    "pages": {
      "start": 68,
      "end": 68
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-58214283",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
        "pageStart": 68,
        "pageEnd": 68
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
    "id": "cbmsc-q-0066",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "easy",
    "questionType": "procedure",
    "question": "Qual conduta de reconhecimento e isolamento reduz exposição da guarnição?",
    "options": [
      "A) Manter aproximação cautelosa sem contato direto com substância até identificação mínima confiável.",
      "B) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "C) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "D) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-907eafa5",
    "pages": {
      "start": 69,
      "end": 69
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-907eafa5",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
        "pageStart": 69,
        "pageEnd": 69
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
    "id": "cbmsc-q-0067",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "medium",
    "questionType": "definition",
    "question": "Durante primeira resposta a produto perigoso, qual prioridade técnica deve ser seguida?",
    "options": [
      "A) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "B) Manter aproximação cautelosa sem contato direto com substância até identificação mínima confiável.",
      "C) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "D) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-49881a22",
    "pages": {
      "start": 71,
      "end": 71
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-49881a22",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "informações e orientações gerais 2.. produtos perigosos em ordem numérica e crescente 3.. produtos em ordem alfabética 4.. informações e orientações gerais 2... produtos perigosos em ordem numérica e crescente 3... produ Reduz temperatura abaixo do ponto de ig",
        "pageStart": 71,
        "pageEnd": 71
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Reduz temperatura abaixo do ponto de ig",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
    "pages": {
      "start": 13,
      "end": 14
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Reduz temperatura abaixo do ponto de ig",
        "pageStart": 13,
        "pageEnd": 14
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
      "D) Manter aproximação cautelosa sem contato direto com substância até identificação mínima confiável.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Seção Branca: informações e orientações gerais 2. Seção Amarela: produtos perigosos em ordem numérica e crescente 3. Seção Azul: produtos em ordem alfabética 4. Seção Alaranjada: relação com 62 guias de emergências com r Reduz temperatura abaixo do ponto de ig",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-f243c4c6",
    "pages": {
      "start": 1118,
      "end": 1120
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-f243c4c6",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Seção Branca: informações e orientações gerais 2. Seção Amarela: produtos perigosos em ordem numérica e crescente 3. Seção Azul: produtos em ordem alfabética 4. Seção Alaranjada: relação com 62 guias de emergências com r Reduz temperatura abaixo do ponto de ig",
        "pageStart": 1118,
        "pageEnd": 1120
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
      "E) Manter aproximação cautelosa sem contato direto com substância até identificação mínima confiável."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "2.4 Acidente com Produto Perigoso Evento repentino e não desejado, onde a liberação de substâncias químicas perigosas em forma de incêndio, explosão, derrame ou vazamento, que pode causar danos as pessoas, propriedades o Reduz temperatura abaixo do ponto de ig",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-695026c4",
    "pages": {
      "start": 20,
      "end": 22
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-695026c4",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "2.4 Acidente com Produto Perigoso Evento repentino e não desejado, onde a liberação de substâncias químicas perigosas em forma de incêndio, explosão, derrame ou vazamento, que pode causar danos as pessoas, propriedades o Reduz temperatura abaixo do ponto de ig",
        "pageStart": 20,
        "pageEnd": 22
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
    "id": "cbmsc-q-0071",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "hard",
    "questionType": "application",
    "question": "Durante primeira resposta a produto perigoso, qual prioridade técnica deve ser seguida?",
    "options": [
      "A) Manter aproximação cautelosa sem contato direto com substância até identificação mínima confiável.",
      "B) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "C) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "D) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "1 O sistema de classificação da ONU Devido ao crescente número de acidentes envolvendo produtos perigosos e à falta de padronização dos mesmos, a Organização das Nações Unidas (ONU) atribuiu a cada produto perigoso um nú Reduz temperatura abaixo do ponto de ig",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-0c894f81",
    "pages": {
      "start": 29,
      "end": 29
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-0c894f81",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "1 O sistema de classificação da ONU Devido ao crescente número de acidentes envolvendo produtos perigosos e à falta de padronização dos mesmos, a Organização das Nações Unidas (ONU) atribuiu a cada produto perigoso um nú Reduz temperatura abaixo do ponto de ig",
        "pageStart": 29,
        "pageEnd": 29
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
    "id": "cbmsc-q-0072",
    "theme": "Produtos perigosos",
    "subtheme": "Reconhecimento e isolamento",
    "difficulty": "easy",
    "questionType": "scenario",
    "question": "Na identificação de risco químico, qual procedimento é recomendado?",
    "options": [
      "A) Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.",
      "B) Manter aproximação cautelosa sem contato direto com substância até identificação mínima confiável.",
      "C) Iniciar lavagem da substância com água em grande volume sem identificar reatividade.",
      "D) Permitir circulação local controlada enquanto se aguarda equipe especializada.",
      "E) Aproximar o recipiente para leitura direta do rótulo antes de isolar a área."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Reconhecimento e isolamento\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "2.2 Painel de Segurança É um retângulo de cor laranja com duas numerações na cor preta, na parte superior, o número de identificação do risco do produto químico e na parte inferior o número da ONU, que identifica qual é  Reduz temperatura abaixo do ponto de ig",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-735afeae",
    "pages": {
      "start": 51,
      "end": 52
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-735afeae",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "2.2 Painel de Segurança É um retângulo de cor laranja com duas numerações na cor preta, na parte superior, o número de identificação do risco do produto químico e na parte inferior o número da ONU, que identifica qual é  Reduz temperatura abaixo do ponto de ig",
        "pageStart": 51,
        "pageEnd": 52
      }
    ],
    "tags": [
      "produtos perigosos",
      "reconhecimento e isolamento",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
    "id": "cbmsc-q-0073",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "medium",
    "questionType": "procedure",
    "question": "Em operação de salvamento em altura, qual princípio deve orientar a montagem do sistema?",
    "options": [
      "A) Dispensar proteção de borda quando o atrito parecer baixo no teste manual.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Realizar conferência de EPIs e nós críticos por dupla antes de iniciar manobra com vítima.",
      "D) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "E) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. F Priorizar alcance e lançamento antes da",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-70d92952",
    "pages": {
      "start": 50,
      "end": 50
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-70d92952",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. F Priorizar alcance e lançamento antes da",
        "pageStart": 50,
        "pageEnd": 50
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
    "id": "cbmsc-q-0074",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "hard",
    "questionType": "definition",
    "question": "Qual decisão técnica em altura reduz risco de falha operacional?",
    "options": [
      "A) Dispensar proteção de borda quando o atrito parecer baixo no teste manual.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "D) Realizar conferência de EPIs e nós críticos por dupla antes de iniciar manobra com vítima.",
      "E) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - ASPIRANTES 2014.",
    "supportSnippet": "171 Compêndio de Turma – Aspirantes 201 4 ESTILO AUSTRALIANO – INSTRUÇÃO COM PRANCHAS A Academia de Bombeiro Militar proporcionou nas últimas semanas aos cadetes do 4ºCFO, sob a supervisão e orientação do 2º Ten BM Frega Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014-sec-e6541f4b",
    "pages": {
      "start": 171,
      "end": 171
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014-sec-e6541f4b",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=781:compendio-de-turma-aspirantes-2014",
        "excerpt": "171 Compêndio de Turma – Aspirantes 201 4 ESTILO AUSTRALIANO – INSTRUÇÃO COM PRANCHAS A Academia de Bombeiro Militar proporcionou nas últimas semanas aos cadetes do 4ºCFO, sob a supervisão e orientação do 2º Ten BM Frega Priorizar alcance e lançamento antes da",
        "pageStart": 171,
        "pageEnd": 171
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014"
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
    "id": "cbmsc-q-0075",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "easy",
    "questionType": "comparison",
    "question": "Durante acesso por cordas, qual conduta é adequada?",
    "options": [
      "A) Dispensar proteção de borda quando o atrito parecer baixo no teste manual.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "D) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima.",
      "E) Realizar conferência de EPIs e nós críticos por dupla antes de iniciar manobra com vítima."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "1.1 Avaliação das condições do mar Após a observação das condições gerais do ambiente aquático e o reconhecimento dos perigos, o guarda vidas deve sinalizar o local e seus pontos críticos, tais como Para isto faz-se uso, Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-e006c92f",
    "pages": {
      "start": 1296,
      "end": 1302
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-e006c92f",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "1.1 Avaliação das condições do mar Após a observação das condições gerais do ambiente aquático e o reconhecimento dos perigos, o guarda vidas deve sinalizar o local e seus pontos críticos, tais como Para isto faz-se uso, Priorizar alcance e lançamento antes da",
        "pageStart": 1296,
        "pageEnd": 1302
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "id": "cbmsc-q-0076",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "medium",
    "questionType": "exception",
    "question": "Na preparação para resgate vertical, qual priorização é correta?",
    "options": [
      "A) Realizar conferência de EPIs e nós críticos por dupla antes de iniciar manobra com vítima.",
      "B) Dispensar proteção de borda quando o atrito parecer baixo no teste manual.",
      "C) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "D) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "E) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "7.1 A importância da atividade de salvamento aquático O guarda-vidas não está nas praias somente para salvar vidas, mas principalmente para guardá-las, atuando continuamente na prevenção, evitando que o banhista seja arr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-611b52d7",
    "pages": {
      "start": 1385,
      "end": 1385
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-611b52d7",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "7.1 A importância da atividade de salvamento aquático O guarda-vidas não está nas praias somente para salvar vidas, mas principalmente para guardá-las, atuando continuamente na prevenção, evitando que o banhista seja arr Priorizar alcance e lançamento antes da",
        "pageStart": 1385,
        "pageEnd": 1385
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-af217067",
    "pages": {
      "start": 603,
      "end": 604
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-af217067",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
        "pageStart": 603,
        "pageEnd": 604
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
      "A) Dispensar proteção de borda quando o atrito parecer baixo no teste manual.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Realizar conferência de EPIs e nós críticos por dupla antes de iniciar manobra com vítima.",
      "D) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "E) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-d907a1cf",
    "pages": {
      "start": 606,
      "end": 606
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-d907a1cf",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
        "pageStart": 606,
        "pageEnd": 606
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "id": "cbmsc-q-0079",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "medium",
    "questionType": "scenario",
    "question": "Durante acesso por cordas, qual conduta é adequada?",
    "options": [
      "A) Dispensar proteção de borda quando o atrito parecer baixo no teste manual.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "D) Realizar conferência de EPIs e nós críticos por dupla antes de iniciar manobra com vítima.",
      "E) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-87318f38",
    "pages": {
      "start": 609,
      "end": 609
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-87318f38",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
        "pageStart": 609,
        "pageEnd": 609
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "id": "cbmsc-q-0080",
    "theme": "Salvamento",
    "subtheme": "Salvamento em altura",
    "difficulty": "hard",
    "questionType": "procedure",
    "question": "Na preparação para resgate vertical, qual priorização é correta?",
    "options": [
      "A) Dispensar proteção de borda quando o atrito parecer baixo no teste manual.",
      "B) Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.",
      "C) Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.",
      "D) Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima.",
      "E) Realizar conferência de EPIs e nós críticos por dupla antes de iniciar manobra com vítima."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento em altura\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-993bb80e",
    "pages": {
      "start": 612,
      "end": 612
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-993bb80e",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
        "pageStart": 612,
        "pageEnd": 612
      }
    ],
    "tags": [
      "salvamento",
      "salvamento em altura",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "id": "cbmsc-q-0081",
    "theme": "Salvamento",
    "subtheme": "Salvamento aquático",
    "difficulty": "easy",
    "questionType": "definition",
    "question": "Em resgate aquático com vítima consciente e correnteza, qual conduta inicial é recomendada?",
    "options": [
      "A) Avaliar corrente, vento e ponto de retorno para planejar abordagem segura à vítima.",
      "B) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "C) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
      "D) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "E) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. F Priorizar alcance e lançamento antes da",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-70d92952",
    "pages": {
      "start": 50,
      "end": 50
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-70d92952",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. F Priorizar alcance e lançamento antes da",
        "pageStart": 50,
        "pageEnd": 50
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - ASPIRANTES 2014.",
    "supportSnippet": "171 Compêndio de Turma – Aspirantes 201 4 ESTILO AUSTRALIANO – INSTRUÇÃO COM PRANCHAS A Academia de Bombeiro Militar proporcionou nas últimas semanas aos cadetes do 4ºCFO, sob a supervisão e orientação do 2º Ten BM Frega Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014-sec-e6541f4b",
    "pages": {
      "start": 171,
      "end": 171
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014-sec-e6541f4b",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=781:compendio-de-turma-aspirantes-2014",
        "excerpt": "171 Compêndio de Turma – Aspirantes 201 4 ESTILO AUSTRALIANO – INSTRUÇÃO COM PRANCHAS A Academia de Bombeiro Militar proporcionou nas últimas semanas aos cadetes do 4ºCFO, sob a supervisão e orientação do 2º Ten BM Frega Priorizar alcance e lançamento antes da",
        "pageStart": 171,
        "pageEnd": 171
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-aspirantes-2014"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "1.1 Avaliação das condições do mar Após a observação das condições gerais do ambiente aquático e o reconhecimento dos perigos, o guarda vidas deve sinalizar o local e seus pontos críticos, tais como Para isto faz-se uso, Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-e006c92f",
    "pages": {
      "start": 1296,
      "end": 1302
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-e006c92f",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "1.1 Avaliação das condições do mar Após a observação das condições gerais do ambiente aquático e o reconhecimento dos perigos, o guarda vidas deve sinalizar o local e seus pontos críticos, tais como Para isto faz-se uso, Priorizar alcance e lançamento antes da",
        "pageStart": 1296,
        "pageEnd": 1302
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "7.1 A importância da atividade de salvamento aquático O guarda-vidas não está nas praias somente para salvar vidas, mas principalmente para guardá-las, atuando continuamente na prevenção, evitando que o banhista seja arr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-611b52d7",
    "pages": {
      "start": 1385,
      "end": 1385
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-611b52d7",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "7.1 A importância da atividade de salvamento aquático O guarda-vidas não está nas praias somente para salvar vidas, mas principalmente para guardá-las, atuando continuamente na prevenção, evitando que o banhista seja arr Priorizar alcance e lançamento antes da",
        "pageStart": 1385,
        "pageEnd": 1385
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-af217067",
    "pages": {
      "start": 603,
      "end": 604
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-af217067",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
        "pageStart": 603,
        "pageEnd": 604
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
      "A) Avaliar corrente, vento e ponto de retorno para planejar abordagem segura à vítima.",
      "B) Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.",
      "C) Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.",
      "D) Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.",
      "E) Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-d907a1cf",
    "pages": {
      "start": 606,
      "end": 606
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-d907a1cf",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
        "pageStart": 606,
        "pageEnd": 606
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-87318f38",
    "pages": {
      "start": 609,
      "end": 609
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-87318f38",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
        "pageStart": 609,
        "pageEnd": 609
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Salvamento aquático\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-993bb80e",
    "pages": {
      "start": 612,
      "end": 612
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-993bb80e",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: altura. Foco: corda. Foco: ancoragem. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Foco: salvamento aquático. Foco: afogamento. Foco: praia. Pr Priorizar alcance e lançamento antes da",
        "pageStart": 612,
        "pageEnd": 612
      }
    ],
    "tags": [
      "salvamento",
      "salvamento aquático",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
      "B) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "C) Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
      "D) Estabilizar o veículo, gerenciar riscos e coordenar acesso à vítima antes do corte estrutural.",
      "E) Retirar vítima por tração manual rápida quando houver deformação da cabine."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-a2de5b60",
    "pages": {
      "start": 490,
      "end": 490
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-a2de5b60",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
        "pageStart": 490,
        "pageEnd": 490
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Retirar vítima por tração manual rápida quando houver deformação da cabine.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
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
      "A) Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
      "B) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "C) Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento com base operacional.",
      "D) Retirar vítima por tração manual rápida quando houver deformação da cabine com base operacional.",
      "E) Executar isolamento da cena, controle de energia e proteção da vítima durante ferramentas de extricação."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM RESGATE VEICULAR - 1ª EDIÇÃO.",
    "supportSnippet": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
    "manualId": "salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-1-edicao",
    "sectionId": "salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-1-edicao-sec-9f5e33b1",
    "pages": {
      "start": 94,
      "end": 94
    },
    "sourceRefs": [
      {
        "manualId": "salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-1-edicao",
        "sectionId": "salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-1-edicao-sec-9f5e33b1",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/102-salvamento-busca-resgate?download=780:manual-de-capacitacao-em-resgate-veicular-1-edicao",
        "excerpt": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
        "pageStart": 94,
        "pageEnd": 94
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-1-edicao"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Retirar vítima por tração manual rápida quando houver deformação da cabine com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
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
      "A) Priorizar segurança da equipe e da vítima com estabilização progressiva e comunicação operacional.",
      "B) Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
      "C) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "D) Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
      "E) Dispensar proteção interna da vítima para facilitar visualização da equipe."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM RESGATE VEICULAR - 2ª EDIÇÃO.",
    "supportSnippet": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
    "manualId": "salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-2-edicao",
    "sectionId": "salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-2-edicao-sec-17728edc",
    "pages": {
      "start": 92,
      "end": 92
    },
    "sourceRefs": [
      {
        "manualId": "salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-2-edicao",
        "sectionId": "salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-2-edicao-sec-17728edc",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/102-salvamento-busca-resgate?download=779:manual-de-capacitacao-em-resgate-veicular",
        "excerpt": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
        "pageStart": 92,
        "pageEnd": 92
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-salvamento-busca-resgate-manual-de-capacitacao-em-resgate-veicular-2-edicao"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Dispensar proteção interna da vítima para facilitar visualização da equipe.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
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
      "A) Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
      "B) Priorizar segurança da equipe e da vítima com estabilização progressiva e comunicação operacional.",
      "C) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "D) Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
      "E) Dispensar proteção interna da vítima para facilitar visualização da equipe."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme TÓPICOS ESPECIAIS: INCÊNDIO EM VEÍCULOS.",
    "supportSnippet": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
    "manualId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos-sec-1bc0e491",
    "pages": {
      "start": 16,
      "end": 16
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos-sec-1bc0e491",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=741:topicos-especiais-incendio-em-veiculos",
        "excerpt": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
        "pageStart": 16,
        "pageEnd": 16
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-incendios-produtos-perigosos-defesa-civil-topicos-especiais-incendio-em-veiculos"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Dispensar proteção interna da vítima para facilitar visualização da equipe.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
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
      "A) Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
      "B) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "C) Estabilizar o veículo, gerenciar riscos e coordenar acesso à vítima antes do corte estrutural.",
      "D) Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
      "E) Retirar vítima por tração manual rápida quando houver deformação da cabine."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-7b00b8cc",
    "pages": {
      "start": 478,
      "end": 478
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-7b00b8cc",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: resgate veicular. Foco: desencarceramento. Foco: estabilização. desencarceramento.. desencarceramento.. comando de incidentes... FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária Sinalizar, isolar e eliminar riscos adi",
        "pageStart": 478,
        "pageEnd": 478
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Retirar vítima por tração manual rápida quando houver deformação da cabine.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
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
      "A) Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
      "B) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "C) Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
      "D) Estabilizar o veículo, gerenciar riscos e coordenar acesso à vítima antes do corte estrutural.",
      "E) Retirar vítima por tração manual rápida quando houver deformação da cabine."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM EMERGÊNCIAS COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "Foco: segurança operacional. Foco: comando de incidentes. Foco: par. desencarceramento.. comando de incidentes.. FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária) são difíceis.... des Sinalizar, isolar e eliminar riscos adi",
    "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-emergencias-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-emergencias-com-produtos-perigosos-sec-92945b47",
    "pages": {
      "start": 153,
      "end": 153
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-emergencias-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-emergencias-com-produtos-perigosos-sec-92945b47",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=777:manual-de-capacitacao-em-emergencias-com-produtos-perigosos",
        "excerpt": "Foco: segurança operacional. Foco: comando de incidentes. Foco: par. desencarceramento.. comando de incidentes.. FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária) são difíceis.... des Sinalizar, isolar e eliminar riscos adi",
        "pageStart": 153,
        "pageEnd": 153
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-emergencias-com-produtos-perigosos"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Retirar vítima por tração manual rápida quando houver deformação da cabine.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
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
      "B) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "C) Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento com base operacional.",
      "D) Retirar vítima por tração manual rápida quando houver deformação da cabine com base operacional.",
      "E) Executar isolamento da cena, controle de energia e proteção da vítima durante ferramentas de extricação."
    ],
    "correctAnswer": "E",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: segurança operacional. Foco: comando de incidentes. Foco: par. desencarceramento.. comando de incidentes.. FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária) são difíceis.... des Sinalizar, isolar e eliminar riscos adi",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-0346bad7",
    "pages": {
      "start": 477,
      "end": 477
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-0346bad7",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: segurança operacional. Foco: comando de incidentes. Foco: par. desencarceramento.. comando de incidentes.. FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária) são difíceis.... des Sinalizar, isolar e eliminar riscos adi",
        "pageStart": 477,
        "pageEnd": 477
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Retirar vítima por tração manual rápida quando houver deformação da cabine com base operacional.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
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
      "A) Priorizar segurança da equipe e da vítima com estabilização progressiva e comunicação operacional.",
      "B) Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
      "C) Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
      "D) Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
      "E) Retirar vítima por tração manual rápida quando houver deformação da cabine."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Resgate veicular\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Foco: segurança operacional. Foco: comando de incidentes. Foco: par. desencarceramento.. comando de incidentes.. FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária) são difíceis.... des Sinalizar, isolar e eliminar riscos adi",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-778146cc",
    "pages": {
      "start": 840,
      "end": 840
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-778146cc",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Foco: segurança operacional. Foco: comando de incidentes. Foco: par. desencarceramento.. comando de incidentes.. FENÔMENOS DE INCÊNDIOS INTERIORES Os termos utilizados em inglês (doutrina originária) são difíceis.... des Sinalizar, isolar e eliminar riscos adi",
        "pageStart": 840,
        "pageEnd": 840
      }
    ],
    "tags": [
      "salvamento",
      "resgate veicular",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
    ],
    "usedCount": 0,
    "isActive": true,
    "distractorAudit": {
      "correctType": "correta",
      "distractors": [
        {
          "text": "Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.",
          "type": "erro de ordem",
          "variation": "conceito próximo confundido",
          "plausible": false
        },
        {
          "text": "Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Retirar vítima por tração manual rápida quando houver deformação da cabine.",
          "type": "erro de conceito",
          "variation": "erro de prioridade",
          "plausible": true
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas.... Controle de tempo/ar no ambiente ho Setorizar área com base no último ponto",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-e011e946",
    "pages": {
      "start": 95,
      "end": 95
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-e011e946",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas.... Controle de tempo/ar no ambiente ho Setorizar área com base no último ponto",
        "pageStart": 95,
        "pageEnd": 95
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
      "C) Manter rastreabilidade das áreas já cobertas e realocar equipes conforme novos indícios.",
      "D) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme BUSCA TERRESTRE - MANUAL DO ALUNO - CURSO DE FORMAÇÃO DE SOLDADOS.",
    "supportSnippet": "5.4.4 Técnicas de busca: Também chamadas de processos de busca. São as técnicas ou as formas como as equipes de busca terrestre deslocam-se pelo terreno dentro da área de busca, com a finalidade de localizar vestígios e  Setorizar área com base no último ponto",
    "manualId": "salvamento-busca-resgate-busca-terrestre-manual-do-aluno-curso-de-formacao-de-soldados",
    "sectionId": "salvamento-busca-resgate-busca-terrestre-manual-do-aluno-curso-de-formacao-de-soldados-sec-bd973a9e",
    "pages": {
      "start": 60,
      "end": 61
    },
    "sourceRefs": [
      {
        "manualId": "salvamento-busca-resgate-busca-terrestre-manual-do-aluno-curso-de-formacao-de-soldados",
        "sectionId": "salvamento-busca-resgate-busca-terrestre-manual-do-aluno-curso-de-formacao-de-soldados-sec-bd973a9e",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/102-salvamento-busca-resgate?download=747:busca-terrestre-manual-do-aluno-curso-de-formacao-de-soldados",
        "excerpt": "5.4.4 Técnicas de busca: Também chamadas de processos de busca. São as técnicas ou as formas como as equipes de busca terrestre deslocam-se pelo terreno dentro da área de busca, com a finalidade de localizar vestígios e  Setorizar área com base no último ponto",
        "pageStart": 60,
        "pageEnd": 61
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-salvamento-busca-resgate-busca-terrestre-manual-do-aluno-curso-de-formacao-de-soldados"
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
      "D) Manter rastreabilidade das áreas já cobertas e realocar equipes conforme novos indícios.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM BUSCA TERRESTRE.",
    "supportSnippet": "Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas.... Controle de tempo/ar no ambiente ho Setorizar área com base no último ponto",
    "manualId": "salvamento-busca-resgate-manual-de-capacitacao-em-busca-terrestre",
    "sectionId": "salvamento-busca-resgate-manual-de-capacitacao-em-busca-terrestre-sec-1b1bcc0a",
    "pages": {
      "start": 91,
      "end": 91
    },
    "sourceRefs": [
      {
        "manualId": "salvamento-busca-resgate-manual-de-capacitacao-em-busca-terrestre",
        "sectionId": "salvamento-busca-resgate-manual-de-capacitacao-em-busca-terrestre-sec-1b1bcc0a",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/102-salvamento-busca-resgate?download=746:manual-de-capacitacao-em-busca-terrestre",
        "excerpt": "Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas.... Controle de tempo/ar no ambiente ho Setorizar área com base no último ponto",
        "pageStart": 91,
        "pageEnd": 91
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-salvamento-busca-resgate-manual-de-capacitacao-em-busca-terrestre"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas.... Controle de tempo/ar no ambiente ho Setorizar área com base no último ponto",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-d4481919",
    "pages": {
      "start": 77,
      "end": 77
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-d4481919",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas.... Controle de tempo/ar no ambiente ho Setorizar área com base no último ponto",
        "pageStart": 77,
        "pageEnd": 77
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Manual de Combate a Incêndio Estrutural (fallback).",
    "supportSnippet": "Marcação de ambientes evita duplicidade e áreas não varridas.. Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente host Setorizar área com base no último ponto",
    "manualId": "combate-incendio-estrutural-manual",
    "sectionId": "cbmsc-salvamento-busca-resgate-fallback-sec-1",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "combate-incendio-estrutural-manual",
        "sectionId": "cbmsc-salvamento-busca-resgate-fallback-sec-1",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc",
        "excerpt": "Marcação de ambientes evita duplicidade e áreas não varridas.. Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente host Setorizar área com base no último ponto",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-combate-incendio-estrutural-manual"
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
          "plausible": true
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme Manual de Atendimento Básico a Emergências (fallback).",
    "supportSnippet": "Marcação de ambientes evita duplicidade e áreas não varridas.. Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente host Setorizar área com base no último ponto",
    "manualId": "atendimento-basico-emergencias-manual",
    "sectionId": "cbmsc-salvamento-busca-resgate-fallback-sec-2",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-basico-emergencias-manual",
        "sectionId": "cbmsc-salvamento-busca-resgate-fallback-sec-2",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc",
        "excerpt": "Marcação de ambientes evita duplicidade e áreas não varridas.. Controle de tempo/ar no ambiente hostil é obrigatório.. Marcação de ambientes evita duplicidade e áreas não varridas... Controle de tempo/ar no ambiente host Setorizar área com base no último ponto",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-atendimento-basico-emergencias-manual"
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
      "C) Manter rastreabilidade das áreas já cobertas e realocar equipes conforme novos indícios.",
      "D) Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme CURSO DE ATENDIMENTO A EMERGÊNCIA COM PRODUTOS PERIGOSOS.",
    "supportSnippet": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Setorizar área com base no último ponto",
    "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
    "pages": {
      "start": 13,
      "end": 14
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos-sec-3fbcecfa",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=778:curso-de-atendimento-a-emergencia-com-produtos-perigosos",
        "excerpt": "3.5 Produtos da combustão Se classificam em quatro categorias :  Gases da combustão;  Chama;  Calor;  Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, em : CURSO DE ATENDIMENT Setorizar área com base no último ponto",
        "pageStart": 13,
        "pageEnd": 14
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-incendios-produtos-perigosos-defesa-civil-curso-de-atendimento-a-emergencia-com-produtos-perigosos"
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
      "D) Manter rastreabilidade das áreas já cobertas e realocar equipes conforme novos indícios.",
      "E) Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Busca terrestre\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM COMBATE A INCÊNDIO ESTRUTURAL.",
    "supportSnippet": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Setorizar área com base no último ponto",
    "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
    "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-a1af9389",
    "pages": {
      "start": 16,
      "end": 16
    },
    "sourceRefs": [
      {
        "manualId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "sectionId": "incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural-sec-a1af9389",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/101-incendios-produtos-perigosos-defesa-civil?download=754:manual-de-capacitacao-em-combate-a-incendio-estrutural",
        "excerpt": "Foco: classe a. Foco: classe b. Foco: classe c. Produtos da combustão Se classificam em quatro categorias :. Gases da combustão. Fumaça. 3.6 Classificação dos Incêndios Se classificam, segundo o material que se queima, e Setorizar área com base no último ponto",
        "pageStart": 16,
        "pageEnd": 16
      }
    ],
    "tags": [
      "salvamento",
      "busca terrestre",
      "manual-incendios-produtos-perigosos-defesa-civil-manual-de-capacitacao-em-combate-a-incendio-estrutural"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
    "pages": {
      "start": 12,
      "end": 12
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 12,
        "pageEnd": 12
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios: Atendimento Pré-Hospitalar no CBMSC 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
    "pages": {
      "start": 30,
      "end": 30
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=900:aph-ti-atendimento-pre-hospitalar-no-cbmsc-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 30,
        "pageEnd": 30
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022"
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
      "B) Aplicar gerenciamento contínuo de riscos, controle de pessoal e comunicação clara entre funções.",
      "C) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "D) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
    "pages": {
      "start": 75,
      "end": 75
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-e9ab0b70",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 75,
        "pageEnd": 75
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
    "id": "cbmsc-q-0108",
    "theme": "Operações",
    "subtheme": "Segurança operacional",
    "difficulty": "easy",
    "questionType": "procedure",
    "question": "Em operação com múltiplas equipes, qual decisão preserva segurança coletiva?",
    "options": [
      "A) Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.",
      "B) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "C) Aplicar gerenciamento contínuo de riscos, controle de pessoal e comunicação clara entre funções.",
      "D) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-b65ccd27",
    "pages": {
      "start": 9,
      "end": 9
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-b65ccd27",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "Foco: abcde. Foco: airway. Foco: breathing. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea com proteção cer A: via aérea com proteção cervical quan",
        "pageStart": 9,
        "pageEnd": 9
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
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
      "D) Aplicar gerenciamento contínuo de riscos, controle de pessoal e comunicação clara entre funções.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "D",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme MANUAL DE CAPACITAÇÃO EM ATENDIMENTO BÁSICO A EMERGÊNCIAS.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
    "pages": {
      "start": 118,
      "end": 118
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias-sec-8ab1b82c",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=751:manual-de-capacitacao-em-atendimento-basico-a-emergencias",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 118,
        "pageEnd": 118
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-manual-de-capacitacao-em-atendimento-basico-a-emergencias"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
    "pages": {
      "start": 11,
      "end": 11
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-5fa2fa32",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 11,
        "pageEnd": 11
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
    "pages": {
      "start": 43,
      "end": 43
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-b65f1def",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 43,
        "pageEnd": 43
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
      "B) Aplicar gerenciamento contínuo de riscos, controle de pessoal e comunicação clara entre funções.",
      "C) Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.",
      "D) Manter canal de rádio único para comando e logística sem disciplina de tráfego.",
      "E) Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Segurança operacional\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Emergências Traumáticas 2022.",
    "supportSnippet": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
    "pages": {
      "start": 49,
      "end": 49
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022-sec-10e40126",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=901:aph-ti-emergencias-traumaticas-2022",
        "excerpt": "Foco: hemorragia. Foco: torniquete. Foco: compressão direta. comando de incidentes.. comando de incidentes.. compressão direta.. comando de incidentes. Controle de hemorragia com compressão direta imediata.. A: via aérea A: via aérea com proteção cervical quan",
        "pageStart": 49,
        "pageEnd": 49
      }
    ],
    "tags": [
      "operações",
      "segurança operacional",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-emergencias-traumaticas-2022"
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
    "id": "cbmsc-q-0113",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "hard",
    "questionType": "application",
    "question": "No exercício da atividade técnica, qual conduta está em conformidade com a base normativa?",
    "options": [
      "A) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "B) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "C) Conferir escopo da exigência normativa e compatibilizar análise com risco e ocupação avaliada.",
      "D) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "E) Padronizar decisões por costume local sem consulta ao texto normativo vigente."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme ORGANIZAÇÃO E ADMINISTRAÇÃO DE BOMBEIRO.",
    "supportSnippet": "3.6 FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso (FCS) é aquela que diz que “são pressupostos essenciais para o alcance dos objetivos que contribuem para o sucesso d Aplicar instruções e normas vigentes ao",
    "manualId": "gestao-ensino-lideranca-saude-do-bombeiro-organizacao-e-administracao-de-bombeiro",
    "sectionId": "gestao-ensino-lideranca-saude-do-bombeiro-organizacao-e-administracao-de-bombeiro-sec-b4951640",
    "pages": {
      "start": 25,
      "end": 27
    },
    "sourceRefs": [
      {
        "manualId": "gestao-ensino-lideranca-saude-do-bombeiro-organizacao-e-administracao-de-bombeiro",
        "sectionId": "gestao-ensino-lideranca-saude-do-bombeiro-organizacao-e-administracao-de-bombeiro-sec-b4951640",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/103-gestao-ensino-lideranca-saude-do-bombeiro?download=775:organizacao-e-administracao-de-bombeiro",
        "excerpt": "3.6 FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso (FCS) é aquela que diz que “são pressupostos essenciais para o alcance dos objetivos que contribuem para o sucesso d Aplicar instruções e normas vigentes ao",
        "pageStart": 25,
        "pageEnd": 27
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-gestao-ensino-lideranca-saude-do-bombeiro-organizacao-e-administracao-de-bombeiro"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso.... CTB e IG 1 Aplicar instruções e normas vigentes ao",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-559f859a",
    "pages": {
      "start": 1251,
      "end": 1251
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-559f859a",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso.... CTB e IG 1 Aplicar instruções e normas vigentes ao",
        "pageStart": 1251,
        "pageEnd": 1251
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "SEÇÃO DE ATIVIDADE TÉCNICA (SAT) A SAT tem como função primordial supervisio- nar se as normas provenientes da DAT e Comando Geral são cumpridas pelas edificações instaladas em suas jurisdições. Essa conferência é realiz Aplicar instruções e normas vigentes ao",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-6df2e742",
    "pages": {
      "start": 1253,
      "end": 1253
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-6df2e742",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "SEÇÃO DE ATIVIDADE TÉCNICA (SAT) A SAT tem como função primordial supervisio- nar se as normas provenientes da DAT e Comando Geral são cumpridas pelas edificações instaladas em suas jurisdições. Essa conferência é realiz Aplicar instruções e normas vigentes ao",
        "pageStart": 1253,
        "pageEnd": 1253
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
      "C) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação com base operacional.",
      "D) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas com base operacional.",
      "E) Ignorar atualização de instruções técnicas até fechamento anual dos processos com base operacional."
    ],
    "correctAnswer": "A",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme COMPÊNDIO DE TURMA - CFC 2020.",
    "supportSnippet": "CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso.... CTB e IG 1 Aplicar instruções e normas vigentes ao",
    "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
    "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-3064f988",
    "pages": {
      "start": 1259,
      "end": 1259
    },
    "sourceRefs": [
      {
        "manualId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020",
        "sectionId": "normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020-sec-3064f988",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/104-normas-legislacao-atividade-tecnica-formacao-militar?download=793:compendio-de-turma-cfc-2020",
        "excerpt": "CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso.... CTB e IG 1 Aplicar instruções e normas vigentes ao",
        "pageStart": 1259,
        "pageEnd": 1259
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-normas-legislacao-atividade-tecnica-formacao-militar-compendio-de-turma-cfc-2020"
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
          "text": "Emitir parecer preliminar sem registrar base normativa para agilizar tramitação com base operacional.",
          "type": "erro de aplicação",
          "variation": "inversão de regra",
          "plausible": false
        },
        {
          "text": "Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas com base operacional.",
          "type": "exceção aplicada incorretamente",
          "variation": "exceção mal aplicada",
          "plausible": false
        },
        {
          "text": "Ignorar atualização de instruções técnicas até fechamento anual dos processos com base operacional.",
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
      "B) Conferir escopo da exigência normativa e compatibilizar análise com risco e ocupação avaliada.",
      "C) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "D) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "E) Padronizar decisões por costume local sem consulta ao texto normativo vigente."
    ],
    "correctAnswer": "B",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Manual de Combate a Incêndio Estrutural (fallback).",
    "supportSnippet": "CTB e IG 10-03-BM aparecem recorrentemente em provas.. Cumprimento de POP e ICS reduz erro operacional.. CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES C Aplicar instruções e normas vigentes ao",
    "manualId": "combate-incendio-estrutural-manual",
    "sectionId": "cbmsc-normas-e-legislacao-basica-fallback-sec-1",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "combate-incendio-estrutural-manual",
        "sectionId": "cbmsc-normas-e-legislacao-basica-fallback-sec-1",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc",
        "excerpt": "CTB e IG 10-03-BM aparecem recorrentemente em provas.. Cumprimento de POP e ICS reduz erro operacional.. CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES C Aplicar instruções e normas vigentes ao",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-combate-incendio-estrutural-manual"
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
    "id": "cbmsc-q-0118",
    "theme": "Normas",
    "subtheme": "Legislação e atividade técnica",
    "difficulty": "medium",
    "questionType": "exception",
    "question": "Qual decisão em processo técnico reduz não conformidades e retrabalho?",
    "options": [
      "A) Considerar conformidade presumida quando o responsável técnico possui histórico positivo.",
      "B) Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.",
      "C) Conferir escopo da exigência normativa e compatibilizar análise com risco e ocupação avaliada.",
      "D) Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.",
      "E) Padronizar decisões por costume local sem consulta ao texto normativo vigente."
    ],
    "correctAnswer": "C",
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme Manual de Atendimento Básico a Emergências (fallback).",
    "supportSnippet": "CTB e IG 10-03-BM aparecem recorrentemente em provas.. Cumprimento de POP e ICS reduz erro operacional.. CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES C Aplicar instruções e normas vigentes ao",
    "manualId": "atendimento-basico-emergencias-manual",
    "sectionId": "cbmsc-normas-e-legislacao-basica-fallback-sec-2",
    "pages": {
      "start": 1,
      "end": 1
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-basico-emergencias-manual",
        "sectionId": "cbmsc-normas-e-legislacao-basica-fallback-sec-2",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc",
        "excerpt": "CTB e IG 10-03-BM aparecem recorrentemente em provas.. Cumprimento de POP e ICS reduz erro operacional.. CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES C Aplicar instruções e normas vigentes ao",
        "pageStart": 1,
        "pageEnd": 1
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-atendimento-basico-emergencias-manual"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios : Suporte Básico a Vida 2022.",
    "supportSnippet": "CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso.... CTB e IG 1 Aplicar instruções e normas vigentes ao",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
    "pages": {
      "start": 12,
      "end": 12
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022-sec-a7eb9e35",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=902:aph-ti-suporte-basico-a-vida-2022",
        "excerpt": "CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso.... CTB e IG 1 Aplicar instruções e normas vigentes ao",
        "pageStart": 12,
        "pageEnd": 12
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-suporte-basico-a-vida-2022"
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
    "explanation": "A alternativa escolhida aplica o procedimento técnico prioritário do subtema \"Legislação e atividade técnica\", mantendo segurança operacional e reavaliação contínua conforme APH - Tópicos Introdutórios: Atendimento Pré-Hospitalar no CBMSC 2022.",
    "supportSnippet": "CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso.... CTB e IG 1 Aplicar instruções e normas vigentes ao",
    "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
    "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
    "pages": {
      "start": 30,
      "end": 30
    },
    "sourceRefs": [
      {
        "manualId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022",
        "sectionId": "atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022-sec-99e7d76d",
        "sourceUrl": "https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc/category/99-manuais-teoricos-de-pesquisa?download=900:aph-ti-atendimento-pre-hospitalar-no-cbmsc-2022",
        "excerpt": "CTB e IG 10-03-BM aparecem recorrentemente em provas... Cumprimento de POP e ICS reduz erro operacional.. FATORES CRÍTICOS DE SUCESSO CORPORATIVOS A definição mais clássica para fatores críticos de sucesso.... CTB e IG 1 Aplicar instruções e normas vigentes ao",
        "pageStart": 30,
        "pageEnd": 30
      }
    ],
    "tags": [
      "normas",
      "legislação e atividade técnica",
      "manual-atendimento-pre-hospitalar-primeiros-socorros-aph-topicos-introdutorios-atendimento-pre-hospitalar-no-cbmsc-2022"
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
