import type { AlternativeId, Difficulty, Discipline, Question } from '@/domain/types'

type Blueprint = {
  discipline: Discipline
  area: string
  topic: string
  subtopic: string
  nodeId: string
  baseStatement: string
  correctConcept: string
  distractors: [string, string, string, string]
  explanation: string
  reference: string
  tags: string[]
  difficulty: Difficulty
}

const ptBlueprints: Blueprint[] = [
  { discipline: 'portugues', area: 'Língua Portuguesa', topic: 'Interpretação', subtopic: 'Compreensão textual', nodeId: 'pt-interp', baseStatement: 'No contexto de análise textual, qual estratégia favorece inferência correta?', correctConcept: 'Relacionar pistas linguísticas com o objetivo comunicativo do texto.', distractors: ['Ignorar o gênero textual e focar apenas em palavras isoladas.', 'Priorizar opinião pessoal sem evidência textual.', 'Substituir ideias centrais por sinônimos aleatórios.', 'Ler apenas o título e concluir o tema integral.'], explanation: 'Inferir exige combinar marcas linguísticas e finalidade discursiva do enunciado.', reference: 'Edital 1.1', tags: ['interpretação', 'inferência'], difficulty: 'media' },
  { discipline: 'portugues', area: 'Língua Portuguesa', topic: 'Ortografia', subtopic: 'Uso dos porquês', nodeId: 'pt-escrita', baseStatement: 'Assinale a alternativa com uso correto dos porquês em frase interrogativa indireta.', correctConcept: 'Utiliza-se “por que” em perguntas diretas ou indiretas.', distractors: ['“Porque” em início de pergunta direta.', '“Porquê” como conjunção causal.', '“Por quê” sem pausa antes.', '“Porque” para indicar motivo com artigo.'], explanation: '“Por que” é a forma correta em interrogativas diretas e indiretas.', reference: 'Edital 1.2', tags: ['ortografia', 'porquês'], difficulty: 'facil' },
  { discipline: 'portugues', area: 'Língua Portuguesa', topic: 'Sintaxe', subtopic: 'Concordância verbal', nodeId: 'pt-sintaxe', baseStatement: 'Quanto à concordância verbal, qual construção está adequada à norma padrão?', correctConcept: 'O verbo concorda com o núcleo do sujeito simples.', distractors: ['O verbo concorda sempre com o termo mais próximo.', 'A concordância é opcional em textos formais.', 'Sujeito composto exige verbo no singular obrigatório.', 'Verbo impessoal aceita sujeito determinado.'], explanation: 'A regra central é a concordância do verbo com o núcleo do sujeito.', reference: 'Edital 1.5', tags: ['concordância'], difficulty: 'media' },
  { discipline: 'portugues', area: 'Língua Portuguesa', topic: 'Semântica', subtopic: 'Relações de sentido', nodeId: 'pt-semantica', baseStatement: 'Em semântica lexical, qual relação representa palavras de sentido oposto?', correctConcept: 'Antonímia indica oposição de significados.', distractors: ['Sinonímia indica oposição de significados.', 'Paronímia é equivalência total de sentido.', 'Homonímia define palavras com grafia diferente e sentido igual.', 'Polissemia elimina qualquer ambiguidade.'], explanation: 'Antônimos apresentam sentidos opostos em determinado contexto.', reference: 'Edital 1.4', tags: ['semântica'], difficulty: 'facil' },
  { discipline: 'portugues', area: 'Língua Portuguesa', topic: 'Expressividade', subtopic: 'Pontuação', nodeId: 'pt-expressividade', baseStatement: 'Qual efeito principal da vírgula quando isola aposto explicativo?', correctConcept: 'Destacar informação acessória sobre termo anterior.', distractors: ['Transformar oração em interrogativa.', 'Eliminar o sujeito da oração principal.', 'Indicar obrigatoriamente ideia de oposição.', 'Substituir a concordância nominal.'], explanation: 'Aposto explicativo é termo acessório isolado por vírgulas.', reference: 'Edital 1.6', tags: ['pontuação'], difficulty: 'media' }
]

const espBlueprints: Blueprint[] = [
  { discipline: 'especificos', area: 'Trânsito', topic: 'Legislação', subtopic: 'CTB e SNT', nodeId: 'esp-ctb', baseStatement: 'No Sistema Nacional de Trânsito, qual princípio orienta a atuação integrada dos órgãos?', correctConcept: 'Coordenação para segurança viária e cumprimento uniforme da legislação.', distractors: ['Autonomia absoluta sem cooperação entre órgãos.', 'Prioridade exclusiva de arrecadação de multas.', 'Atuação sem base legal comum.', 'Fiscalização opcional em vias urbanas.'], explanation: 'O SNT existe para integrar competências e promover segurança no trânsito.', reference: 'Edital 2.1', tags: ['ctb', 'snt'], difficulty: 'media' },
  { discipline: 'especificos', area: 'Trânsito', topic: 'Sinalização', subtopic: 'Interpretação de sinais', nodeId: 'esp-sinal', baseStatement: 'A sinalização de regulamentação tem como objetivo principal:', correctConcept: 'Indicar proibições, obrigações ou restrições de uso da via.', distractors: ['Apenas orientar pontos turísticos.', 'Substituir a fiscalização presencial em qualquer situação.', 'Divulgar campanhas institucionais sem força normativa.', 'Indicar exclusivamente distâncias entre cidades.'], explanation: 'Sinais de regulamentação vinculam conduta do condutor na via.', reference: 'Edital 2.1', tags: ['sinalização'], difficulty: 'facil' },
  { discipline: 'especificos', area: 'Trânsito', topic: 'Direção defensiva', subtopic: 'Prevenção', nodeId: 'esp-defensiva', baseStatement: 'Direção defensiva é caracterizada por:', correctConcept: 'Antecipar riscos e adotar condutas preventivas para evitar sinistros.', distractors: ['Conduzir sempre no limite de velocidade máxima.', 'Reagir apenas após o risco se concretizar.', 'Confiar exclusivamente na habilidade própria.', 'Desconsiderar condições meteorológicas.'], explanation: 'Direção defensiva baseia-se em prevenção e leitura antecipada do ambiente.', reference: 'Edital 2.1', tags: ['direção defensiva'], difficulty: 'facil' },
  { discipline: 'especificos', area: 'Incêndio estrutural', topic: 'Teoria do fogo', subtopic: 'Classes', nodeId: 'esp-fogo', baseStatement: 'A classificação de incêndios é necessária para:', correctConcept: 'Selecionar agente extintor e tática adequada ao material combustível.', distractors: ['Definir a escala de plantão da guarnição.', 'Escolher aleatoriamente o método de combate.', 'Aumentar o tempo de resposta da equipe.', 'Dispensar uso de EPI em cenários simples.'], explanation: 'Cada classe exige estratégia compatível com o combustível em combustão.', reference: 'Manual CBMSC', tags: ['fogo', 'classes'], difficulty: 'media' },
  { discipline: 'especificos', area: 'Incêndio estrutural', topic: 'Extinção', subtopic: 'Métodos', nodeId: 'esp-extincao', baseStatement: 'No método de extinção por abafamento, busca-se:', correctConcept: 'Reduzir o contato do combustível com o comburente.', distractors: ['Aumentar a ventilação interna.', 'Elevar a temperatura do foco.', 'Adicionar combustível para controle.', 'Remover todos os equipamentos da cena.'], explanation: 'Abafamento limita oxigênio disponível para manter a combustão.', reference: 'Manual CBMSC', tags: ['extinção'], difficulty: 'media' },
  { discipline: 'especificos', area: 'Incêndio estrutural', topic: 'Segurança', subtopic: 'EPI e EPC', nodeId: 'esp-equip', baseStatement: 'Antes da entrada em ambiente sinistrado, é indispensável:', correctConcept: 'Conferir integridade do EPI e alinhamento operacional da guarnição.', distractors: ['Reduzir o uso de EPI para ganhar mobilidade.', 'Iniciar ataque sem avaliar riscos estruturais.', 'Dispensar comunicação entre equipes.', 'Atuar isoladamente em ambiente desconhecido.'], explanation: 'Segurança operacional depende de EPI adequado e coordenação tática.', reference: 'Manual CBMSC', tags: ['epi', 'segurança'], difficulty: 'media' },
  { discipline: 'especificos', area: 'Emergências', topic: 'Avaliação inicial', subtopic: 'Cena e biossegurança', nodeId: 'esp-cena', baseStatement: 'Na chegada ao local, a primeira ação é:', correctConcept: 'Avaliar segurança da cena e riscos para equipe e vítima.', distractors: ['Movimentar a vítima imediatamente.', 'Iniciar transporte antes de avaliação primária.', 'Remover EPI para agilizar atendimento.', 'Aplicar medicação sem protocolo.'], explanation: 'Sem segurança da cena, o socorro pode gerar novas vítimas.', reference: 'Manual ABE', tags: ['cena', 'biossegurança'], difficulty: 'facil' },
  { discipline: 'especificos', area: 'Emergências', topic: 'ABCDE', subtopic: 'Vias aéreas e ventilação', nodeId: 'esp-abc', baseStatement: 'No protocolo ABCDE, a prioridade da letra A corresponde a:', correctConcept: 'Garantir via aérea pérvia e proteção cervical quando indicado.', distractors: ['Controlar hemorragia sem avaliar consciência.', 'Medir glicemia antes de qualquer abordagem.', 'Registrar ocorrência sem tocar na vítima.', 'Iniciar transporte sem estabilização inicial.'], explanation: 'A via aérea é prioridade por impacto direto na oxigenação.', reference: 'Manual ABE', tags: ['abcde'], difficulty: 'media' },
  { discipline: 'especificos', area: 'Emergências', topic: 'Trauma', subtopic: 'Hemorragias e imobilização', nodeId: 'esp-trauma', baseStatement: 'No controle inicial de hemorragia externa grave, a conduta prioritária é:', correctConcept: 'Compressão direta eficaz e rápida no local do sangramento.', distractors: ['Aguardar cessar espontaneamente.', 'Aplicar calor local intenso.', 'Priorizar perguntas administrativas.', 'Movimentar membro lesionado repetidamente.'], explanation: 'Compressão direta reduz perda sanguínea e risco de choque.', reference: 'Manual ABE', tags: ['hemorragia', 'trauma'], difficulty: 'media' },
  { discipline: 'especificos', area: 'Serviço comunitário', topic: 'Atribuições', subtopic: 'Limites operacionais', nodeId: 'esp-atribuicoes', baseStatement: 'Quanto ao serviço comunitário no CBMSC, a atuação deve:', correctConcept: 'Respeitar atribuições definidas e limites da norma institucional.', distractors: ['Substituir integralmente funções privativas de bombeiro militar.', 'Ignorar cadeia de comando em ocorrências simples.', 'Atuar sem registro das atividades.', 'Executar procedimentos não autorizados por protocolo.'], explanation: 'A IG estabelece escopo e limites para atuação segura e legal.', reference: 'IG 10-03-BM', tags: ['atribuições', 'limites'], difficulty: 'media' }
]

const alternativesFrom = (correct: string, distractors: [string, string, string, string], rotation: number) => {
  const ids: AlternativeId[] = ['A', 'B', 'C', 'D', 'E']
  const pool = [correct, ...distractors]
  const rotated = pool.map((_, index) => pool[(index + rotation) % pool.length])
  const correctIndex = rotated.findIndex((item) => item === correct)

  return {
    alternatives: ids.map((id, index) => ({ id, text: rotated[index] })),
    correctAlternativeId: ids[correctIndex]
  }
}

const materializeQuestions = (blueprints: Blueprint[], variants: number, prefix: string): Question[] =>
  blueprints.flatMap((bp, index) =>
    Array.from({ length: variants }, (_, variantIndex) => {
      const rotation = (index + variantIndex) % 5
      const { alternatives, correctAlternativeId } = alternativesFrom(bp.correctConcept, bp.distractors, rotation)
      const suffix = variantIndex + 1
      return {
        id: `${prefix}-${index + 1}-${suffix}`,
        discipline: bp.discipline,
        area: bp.area,
        topic: bp.topic,
        subtopic: bp.subtopic,
        difficulty: bp.difficulty,
        sourceType: 'inspirada',
        statement: `${bp.baseStatement} (variação ${suffix})`,
        alternatives,
        correctAlternativeId,
        explanation: bp.explanation,
        whyOthersAreWrong: bp.distractors.map((text) => `Incorreta: ${text}`),
        editalReference: bp.reference,
        tags: [...bp.tags, `variação-${suffix}`],
        relatedMindMapNodeId: bp.nodeId,
        isActive: true
      } satisfies Question
    })
  )

export const questions: Question[] = [
  ...materializeQuestions(ptBlueprints, 8, 'PT'),
  ...materializeQuestions(espBlueprints, 11, 'ESP')
]

export const activeQuestions = questions.filter((question) => question.isActive)
