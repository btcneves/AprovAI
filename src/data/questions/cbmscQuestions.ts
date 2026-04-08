import type { QuestionDocument } from '@/types/cbmsc'

export const cbmscQuestions: QuestionDocument[] = [
  {
    id: 'cbmsc-q-0001',
    theme: 'Incêndio',
    subtheme: 'Classes de incêndio',
    difficulty: 'medium',
    question: 'A classificação de incêndios é usada principalmente para qual finalidade operacional?',
    options: [
      'A) Definir escala de serviço da guarnição.',
      'B) Escolher agente extintor e tática conforme o combustível.',
      'C) Substituir a avaliação de risco estrutural.',
      'D) Reduzir a necessidade de comando de incidente.'
    ],
    correctAnswer: 'B',
    explanation: 'A classificação por classes orienta a seleção de agente extintor e do método de combate, evitando técnicas incompatíveis com o combustível envolvido.',
    sourceRefs: [{ excerpt: 'Classificação de incêndios associada ao agente extintor.', manualId: 'a-definir', sectionId: 'a-definir', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['incêndio', 'classes', 'extintores'],
    questionType: 'definition',
    usedCount: 0,
    isActive: true
  },
  {
    id: 'cbmsc-q-0002',
    theme: 'Incêndio',
    subtheme: 'Teoria do fogo',
    difficulty: 'easy',
    question: 'No tetraedro do fogo, qual elemento foi acrescentado ao modelo tradicional do triângulo?',
    options: [
      'A) Reação em cadeia.',
      'B) Pressão atmosférica.',
      'C) Umidade relativa.',
      'D) Radiação térmica.'
    ],
    correctAnswer: 'A',
    explanation: 'O tetraedro acrescenta a reação em cadeia como elemento de manutenção da combustão.',
    sourceRefs: [{ excerpt: 'Tetraedro do fogo: combustível, comburente, calor e reação em cadeia.', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['fogo', 'tetraedro'],
    questionType: 'conceptual',
    usedCount: 0,
    isActive: true
  },
  {
    id: 'cbmsc-q-0003',
    theme: 'APH',
    subtheme: 'Segurança da cena',
    difficulty: 'easy',
    question: 'Na chegada a uma ocorrência pré-hospitalar, a primeira decisão técnica deve ser:',
    options: [
      'A) Iniciar remoção imediata da vítima.',
      'B) Avaliar segurança da cena para equipe e vítima.',
      'C) Solicitar documentos pessoais da vítima.',
      'D) Realizar transporte antes da avaliação primária.'
    ],
    correctAnswer: 'B',
    explanation: 'A segurança da cena é prioridade inicial para evitar novas vítimas e garantir atendimento seguro.',
    sourceRefs: [{ excerpt: 'Primeira etapa do APH: segurança da cena.', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['aph', 'biossegurança'],
    questionType: 'procedure',
    usedCount: 0,
    isActive: true
  },
  {
    id: 'cbmsc-q-0004',
    theme: 'APH',
    subtheme: 'ABCDE',
    difficulty: 'medium',
    question: 'No protocolo ABCDE, a letra C prioriza qual intervenção em hemorragia grave?',
    options: [
      'A) Aplicar calor local para vasodilatação.',
      'B) Compressão direta eficaz no ponto de sangramento.',
      'C) Aguardar estabilização espontânea.',
      'D) Realizar transporte sem controle hemorrágico.'
    ],
    correctAnswer: 'B',
    explanation: 'Na etapa C (circulação), o controle precoce de hemorragia grave é central para prevenção de choque.',
    sourceRefs: [{ excerpt: 'Etapa C do ABCDE com foco em circulação e hemorragia.', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['abcde', 'hemorragia'],
    questionType: 'application',
    usedCount: 0,
    isActive: true
  },
  {
    id: 'cbmsc-q-0005',
    theme: 'Salvamento',
    subtheme: 'Busca em incêndio estrutural',
    difficulty: 'medium',
    question: 'Durante busca de vítimas em incêndio estrutural, qual prática reduz risco operacional?',
    options: [
      'A) Progressão isolada sem comunicação de rádio.',
      'B) Busca sistemática com marcação de áreas varridas.',
      'C) Retirada imediata de EPI para aumentar mobilidade.',
      'D) Priorizar bens materiais antes da varredura de vítimas.'
    ],
    correctAnswer: 'B',
    explanation: 'Busca sistemática com controle de rota e comunicação reduz retrabalho e aumenta segurança da equipe.',
    sourceRefs: [{ excerpt: 'Busca e salvamento com técnica sistemática.', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['busca', 'salvamento', 'incêndio'],
    questionType: 'scenario',
    usedCount: 0,
    isActive: true
  },
  {
    id: 'cbmsc-q-0006',
    theme: 'Normas e legislação',
    subtheme: 'Serviço comunitário',
    difficulty: 'medium',
    question: 'No contexto da IG 10-03-BM, a atuação do bombeiro comunitário deve observar:',
    options: [
      'A) Autonomia plena sem supervisão institucional.',
      'B) Atribuições, protocolos e limites operacionais previstos em norma.',
      'C) Substituição integral da estrutura militar em serviço.',
      'D) Atuação sem vínculo com cadeia de comando.'
    ],
    correctAnswer: 'B',
    explanation: 'A norma delimita escopo de atuação, deveres e limites, garantindo segurança técnica e jurídica.',
    sourceRefs: [{ excerpt: 'Atribuições e limites operacionais do serviço comunitário.', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['ig-10-03', 'legislação'],
    questionType: 'definition',
    usedCount: 0,
    isActive: true
  },
  {
    id: 'cbmsc-q-0007',
    theme: 'Incêndio',
    subtheme: 'Métodos de extinção',
    difficulty: 'medium',
    question: 'O método de abafamento atua principalmente por qual mecanismo?',
    options: [
      'A) Redução da temperatura abaixo do ponto de ignição.',
      'B) Isolamento da reação em cadeia por catalisador.',
      'C) Redução do contato do combustível com o comburente.',
      'D) Aumento da ventilação para dissipar fumaça.'
    ],
    correctAnswer: 'C',
    explanation: 'No abafamento, o objetivo é reduzir a disponibilidade de comburente para sustentar a combustão.',
    sourceRefs: [{ excerpt: 'Método de abafamento interrompe oferta de oxigênio.', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['extinção', 'abafamento'],
    questionType: 'conceptual',
    usedCount: 0,
    isActive: true
  },
  {
    id: 'cbmsc-q-0008',
    theme: 'APH',
    subtheme: 'RCP',
    difficulty: 'medium',
    question: 'Na PCR, qual componente caracteriza RCP de melhor qualidade no suporte básico?',
    options: [
      'A) Interrupções frequentes e longas das compressões.',
      'B) Compressões eficazes com mínimas interrupções.',
      'C) Ventilação isolada sem compressões torácicas.',
      'D) Ritmo variável sem troca de socorrista.'
    ],
    correctAnswer: 'B',
    explanation: 'RCP efetiva exige compressões de qualidade e redução máxima das interrupções.',
    sourceRefs: [{ excerpt: 'RCP de qualidade com compressões eficazes.', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['rcp', 'suporte básico'],
    questionType: 'procedure',
    usedCount: 0,
    isActive: true
  },
  {
    id: 'cbmsc-q-0009',
    theme: 'Defesa civil e operação',
    subtheme: 'Comando de incidentes',
    difficulty: 'hard',
    question: 'No comando de incidentes em incêndio, qual efeito é esperado da setorização?',
    options: [
      'A) Redução da coordenação por descentralização sem protocolo.',
      'B) Organização de recursos e prioridades com maior controle operacional.',
      'C) Eliminação da comunicação entre equipes para ganho de velocidade.',
      'D) Transferência integral da decisão para cada dupla de combate.'
    ],
    correctAnswer: 'B',
    explanation: 'A setorização no comando de incidentes organiza recursos e responsabilidades para resposta mais segura e eficiente.',
    sourceRefs: [{ excerpt: 'Comando de incidentes estrutura setores e prioridades.', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['comando', 'incidentes'],
    questionType: 'comparison',
    usedCount: 0,
    isActive: true
  },
  {
    id: 'cbmsc-q-0010',
    theme: 'Trânsito operacional',
    subtheme: 'Direção defensiva',
    difficulty: 'easy',
    question: 'A direção defensiva, no contexto de serviço, prioriza:',
    options: [
      'A) Antecipação de riscos e condutas preventivas.',
      'B) Condução no limite da via para ganhar tempo.',
      'C) Reação apenas após ocorrência de risco efetivo.',
      'D) Menor atenção em vias conhecidas pela guarnição.'
    ],
    correctAnswer: 'A',
    explanation: 'Direção defensiva é orientada por antecipação de risco e prevenção contínua durante toda a condução.',
    sourceRefs: [{ excerpt: 'Direção defensiva baseada em prevenção.', sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc' }],
    tags: ['trânsito', 'direção defensiva'],
    questionType: 'conceptual',
    usedCount: 0,
    isActive: true
  }
]
