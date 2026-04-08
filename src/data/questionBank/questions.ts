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

const pt = (data: Omit<Blueprint, 'discipline' | 'area'>): Blueprint => ({
  discipline: 'portugues',
  area: 'Língua Portuguesa',
  ...data
})

const esp = (data: Omit<Blueprint, 'discipline' | 'area'>): Blueprint => ({
  discipline: 'especificos',
  area: 'Conhecimentos Específicos',
  ...data
})

const ptBlueprints: Blueprint[] = [
  pt({ topic: 'Interpretação', subtopic: 'Compreensão textual', nodeId: 'pt-interp', baseStatement: 'Na interpretação de texto, qual estratégia melhora a inferência correta?', correctConcept: 'Relacionar evidências linguísticas com o objetivo comunicativo.', distractors: ['Ignorar o gênero textual.', 'Considerar só opinião pessoal.', 'Analisar apenas o título.', 'Substituir ideias por achismos.'], explanation: 'Inferência depende de pistas textuais e contexto.', reference: 'Anexo I - 1.1.1', tags: ['interpretação', 'inferência'], difficulty: 'media' }),
  pt({ topic: 'Ortografia', subtopic: 'Uso dos porquês', nodeId: 'pt-escrita', baseStatement: 'Em frase interrogativa indireta, qual forma é adequada?', correctConcept: 'Utiliza-se “por que” em perguntas diretas e indiretas.', distractors: ['“Porque” no início de pergunta.', '“Porquê” como conjunção.', '“Por quê” sem pausa.', '“Porque” com artigo.'], explanation: '“Por que” é a forma interrogativa.', reference: 'Anexo I - 1.1.1', tags: ['ortografia', 'porquês'], difficulty: 'facil' }),
  pt({ topic: 'Sintaxe', subtopic: 'Concordância verbal', nodeId: 'pt-sintaxe', baseStatement: 'Quanto à concordância verbal na norma padrão, assinale a correta.', correctConcept: 'O verbo concorda com o núcleo do sujeito.', distractors: ['Concorda com termo mais próximo sempre.', 'É opcional em prova formal.', 'Sujeito composto exige singular.', 'Verbo impessoal aceita sujeito.'], explanation: 'Regra-base: núcleo do sujeito.', reference: 'Anexo I - 1.1.1', tags: ['concordância'], difficulty: 'media' }),
  pt({ topic: 'Semântica', subtopic: 'Relações de sentido', nodeId: 'pt-semantica', baseStatement: 'Qual relação semântica representa oposição de significados?', correctConcept: 'Antonímia representa oposição de sentidos.', distractors: ['Sinonímia representa oposição.', 'Paronímia é igualdade total.', 'Homonímia sempre tem grafia diferente.', 'Polissemia elimina ambiguidade.'], explanation: 'Antônimos exprimem oposição contextual.', reference: 'Anexo I - 1.1.1', tags: ['semântica'], difficulty: 'facil' }),
  pt({ topic: 'Expressividade', subtopic: 'Pontuação', nodeId: 'pt-expressividade', baseStatement: 'Quando a vírgula isola aposto explicativo, qual efeito principal?', correctConcept: 'Destacar informação acessória ligada ao termo anterior.', distractors: ['Transformar frase em pergunta.', 'Eliminar o sujeito.', 'Indicar oposição obrigatória.', 'Substituir concordância.'], explanation: 'Aposto explicativo é termo acessório.', reference: 'Anexo I - 1.1.1', tags: ['pontuação'], difficulty: 'media' }),
  pt({ topic: 'Morfologia', subtopic: 'Formação de palavras', nodeId: 'pt-estrutura', baseStatement: 'No estudo da formação de palavras, qual alternativa está correta?', correctConcept: 'Derivação e composição são processos de formação lexical.', distractors: ['Só flexão cria palavras novas.', 'Composição dispensa radicais.', 'Derivação só ocorre em verbos.', 'Prefixo nunca altera sentido.'], explanation: 'Derivação e composição ampliam o léxico.', reference: 'Anexo I - 1.1.1', tags: ['morfologia'], difficulty: 'media' }),
  pt({ topic: 'Sintaxe', subtopic: 'Colocação pronominal', nodeId: 'pt-sintaxe', baseStatement: 'Sobre colocação pronominal na norma culta, assinale a correta.', correctConcept: 'Próclise ocorre com palavras atrativas antes do verbo.', distractors: ['Mesóclise é obrigatória em qualquer frase.', 'Ênclise é proibida no início.', 'Próclise ocorre só em textos literários.', 'Colocação pronominal é livre.'], explanation: 'Palavras atrativas exigem próclise.', reference: 'Anexo I - 1.1.1', tags: ['pronomes'], difficulty: 'media' }),
  pt({ topic: 'Estilística', subtopic: 'Figuras de linguagem', nodeId: 'pt-expressividade', baseStatement: 'Qual alternativa descreve corretamente uma figura de linguagem?', correctConcept: 'Metáfora estabelece relação implícita de semelhança.', distractors: ['Pleonasmo sempre é erro.', 'Ironia elimina duplo sentido.', 'Antítese equivale a metáfora.', 'Hipérbole reduz intensidade.'], explanation: 'Metáfora cria sentido figurado por aproximação.', reference: 'Anexo I - 1.1.1', tags: ['figuras', 'estilística'], difficulty: 'facil' })
]

const espBlueprints: Blueprint[] = [
  esp({ topic: 'Trânsito', subtopic: 'CTB e SNT', nodeId: 'esp-ctb', baseStatement: 'No Sistema Nacional de Trânsito, qual diretriz é central?', correctConcept: 'Integração de órgãos para segurança viária e cumprimento da lei.', distractors: ['Autonomia sem coordenação.', 'Foco exclusivo arrecadatório.', 'Atuação sem base legal.', 'Fiscalização facultativa.'], explanation: 'O SNT articula competências para segurança.', reference: 'Anexo I - 1.2(a)', tags: ['ctb', 'snt'], difficulty: 'media' }),
  esp({ topic: 'Trânsito', subtopic: 'Normas gerais de circulação', nodeId: 'esp-circ', baseStatement: 'As normas gerais de circulação visam prioritariamente:', correctConcept: 'Organizar o fluxo e reduzir riscos aos usuários da via.', distractors: ['Substituir sinalização horizontal.', 'Eliminar penalidades administrativas.', 'Priorizar veículos sem critério.', 'Dispensar atenção do condutor.'], explanation: 'Normas padronizam condutas seguras no trânsito.', reference: 'Anexo I - 1.2(a)', tags: ['circulação'], difficulty: 'facil' }),
  esp({ topic: 'Trânsito', subtopic: 'Sinalização', nodeId: 'esp-sinal', baseStatement: 'A sinalização de regulamentação tem função principal de:', correctConcept: 'Determinar proibições, obrigações e restrições na via.', distractors: ['Indicar apenas turismo.', 'Substituir agente de trânsito.', 'Divulgar campanhas sem norma.', 'Informar distâncias interestaduais.'], explanation: 'Sinalização de regulamentação impõe conduta.', reference: 'Anexo I - 1.2(a)', tags: ['sinalização'], difficulty: 'facil' }),
  esp({ topic: 'Trânsito', subtopic: 'Habilitação', nodeId: 'esp-habilitacao', baseStatement: 'Quanto à habilitação para condução, é correto afirmar que:', correctConcept: 'Conduzir sem CNH válida configura infração e medida administrativa.', distractors: ['CNH vencida não gera sanção.', 'PPD equivale a CNH definitiva em tudo.', 'Categoria D dispensa exame médico.', 'Documento digital não tem validade.'], explanation: 'Regularidade da habilitação é requisito legal.', reference: 'Anexo I - 1.2(a)', tags: ['habilitação'], difficulty: 'media' }),
  esp({ topic: 'Trânsito', subtopic: 'Licenciamento', nodeId: 'esp-licenciamento', baseStatement: 'O licenciamento anual do veículo comprova:', correctConcept: 'Regularidade do veículo para circular em via pública.', distractors: ['Quitação de IPVA futuro.', 'Aptidão do condutor.', 'Dispensa de vistoria sempre.', 'Isenção de multas anteriores.'], explanation: 'CRLV indica aptidão legal de circulação.', reference: 'Anexo I - 1.2(a)', tags: ['licenciamento'], difficulty: 'facil' }),
  esp({ topic: 'Trânsito', subtopic: 'Deveres e proibições', nodeId: 'esp-deveres', baseStatement: 'No trânsito, dever do condutor é:', correctConcept: 'Dirigir com atenção e cuidados indispensáveis à segurança.', distractors: ['Dirigir ao celular em baixa velocidade.', 'Ignorar pedestres na faixa.', 'Ultrapassar em local proibido.', 'Parar em pista sem sinalização.'], explanation: 'A condução deve priorizar segurança coletiva.', reference: 'Anexo I - 1.2(a)', tags: ['deveres'], difficulty: 'facil' }),
  esp({ topic: 'Trânsito', subtopic: 'Infrações e penalidades', nodeId: 'esp-penal', baseStatement: 'As penalidades do CTB têm como finalidade:', correctConcept: 'Reprimir condutas de risco e promover comportamento seguro.', distractors: ['Apenas arrecadar recursos.', 'Punir sem processo.', 'Substituir educação no trânsito.', 'Eliminar fiscalização eletrônica.'], explanation: 'Penalidade possui caráter educativo e coercitivo.', reference: 'Anexo I - 1.2(a)', tags: ['infrações'], difficulty: 'media' }),
  esp({ topic: 'Trânsito', subtopic: 'Processo administrativo', nodeId: 'esp-processo', baseStatement: 'No processo administrativo de trânsito, é assegurado ao condutor:', correctConcept: 'Direito ao contraditório e à ampla defesa.', distractors: ['Punição sem notificação.', 'Recurso apenas judicial.', 'Prazo recursal inexistente.', 'Defesa oral obrigatória.'], explanation: 'O CTB prevê garantias processuais ao administrado.', reference: 'Anexo I - 1.2(a)', tags: ['processo'], difficulty: 'media' }),
  esp({ topic: 'Trânsito', subtopic: 'Direção defensiva', nodeId: 'esp-defensiva', baseStatement: 'Direção defensiva caracteriza-se por:', correctConcept: 'Antecipar riscos e adotar condutas preventivas.', distractors: ['Dirigir no limite sempre.', 'Confiar só na experiência.', 'Reagir apenas após colisão.', 'Desconsiderar clima.'], explanation: 'A prevenção é o núcleo da direção defensiva.', reference: 'Anexo I - 1.2(a)', tags: ['direção defensiva'], difficulty: 'facil' }),
  esp({ topic: 'Trânsito', subtopic: 'Primeiros socorros', nodeId: 'esp-socorros', baseStatement: 'Em primeiros socorros no trânsito, a prioridade inicial é:', correctConcept: 'Garantir segurança da cena e acionar serviço especializado.', distractors: ['Retirar vítima sem avaliação.', 'Oferecer medicação imediata.', 'Mover coluna cervical sem técnica.', 'Liberar via aérea sem cautela.'], explanation: 'Sem segurança da cena há risco de novas vítimas.', reference: 'Anexo I - 1.2(a)', tags: ['primeiros socorros'], difficulty: 'media' }),
  esp({ topic: 'Trânsito', subtopic: 'Meio ambiente', nodeId: 'esp-meio-ambiente', baseStatement: 'A preservação ambiental no trânsito envolve:', correctConcept: 'Condução responsável, manutenção e descarte correto de resíduos.', distractors: ['Aceleração brusca contínua.', 'Manutenção irregular do motor.', 'Descarte de óleo em solo.', 'Uso de combustível adulterado.'], explanation: 'Condução e manutenção reduzem impacto ambiental.', reference: 'Anexo I - 1.2(a)', tags: ['meio ambiente'], difficulty: 'facil' }),
  esp({ topic: 'Trânsito', subtopic: 'Direitos humanos', nodeId: 'esp-direitos', baseStatement: 'Direitos humanos e cidadania no trânsito pressupõem:', correctConcept: 'Respeito à dignidade, acessibilidade e convivência segura.', distractors: ['Prioridade por força física.', 'Desconsiderar mobilidade reduzida.', 'Tratar pedestre como obstáculo.', 'Aceitar discriminação no atendimento.'], explanation: 'A cidadania no trânsito exige respeito a todos.', reference: 'Anexo I - 1.2(a)', tags: ['direitos humanos'], difficulty: 'facil' }),
  esp({ topic: 'Trânsito', subtopic: 'Funcionamento do veículo', nodeId: 'esp-veiculo', baseStatement: 'Noções de funcionamento do veículo são importantes para:', correctConcept: 'Prevenir falhas mecânicas e conduzir com segurança.', distractors: ['Dispensar manutenção preventiva.', 'Confiar apenas em pane elétrica.', 'Usar peças sem especificação.', 'Ignorar sinais de superaquecimento.'], explanation: 'Conhecimento básico reduz risco operacional.', reference: 'Anexo I - 1.2(a)', tags: ['veículo'], difficulty: 'media' }),
  esp({ topic: 'Trânsito', subtopic: 'Transporte de urgência', nodeId: 'esp-transporte-urgencia', baseStatement: 'No transporte de urgência e emergência, deve-se:', correctConcept: 'Conduzir com técnica, segurança e observância da prioridade legal.', distractors: ['Aumentar risco para ganhar tempo.', 'Dispensar sinalização sonora/luminosa.', 'Transportar sem estabilização mínima.', 'Ignorar comunicação com central.'], explanation: 'Eficiência não pode comprometer segurança.', reference: 'Anexo I - 1.2(a)', tags: ['transporte'], difficulty: 'media' }),

  esp({ topic: 'Incêndio estrutural', subtopic: 'Tetraedro do fogo', nodeId: 'esp-fogo', baseStatement: 'O tetraedro do fogo inclui como elementos:', correctConcept: 'Combustível, comburente, calor e reação em cadeia.', distractors: ['Água, fumaça e brasas.', 'Somente oxigênio e calor.', 'Pressão e umidade.', 'Ventilação, espuma e CO2.'], explanation: 'O modelo explica manutenção da combustão.', reference: 'Anexo I - 1.2(b)', tags: ['fogo'], difficulty: 'facil' }),
  esp({ topic: 'Incêndio estrutural', subtopic: 'Classes de incêndio', nodeId: 'esp-classes', baseStatement: 'A classificação de incêndios é usada para:', correctConcept: 'Escolher agente extintor e tática adequados ao combustível.', distractors: ['Definir escala de serviço.', 'Escolher tática aleatória.', 'Dispensar EPI.', 'Aumentar tempo de resposta.'], explanation: 'Cada classe exige método apropriado.', reference: 'Anexo I - 1.2(b)', tags: ['classes'], difficulty: 'media' }),
  esp({ topic: 'Incêndio estrutural', subtopic: 'Métodos de extinção', nodeId: 'esp-extincao', baseStatement: 'No método de abafamento, busca-se:', correctConcept: 'Reduzir contato entre combustível e comburente.', distractors: ['Elevar temperatura do foco.', 'Aumentar ventilação interna.', 'Adicionar combustível.', 'Aplicar água em todo cenário.'], explanation: 'Abafamento interrompe oferta de oxigênio.', reference: 'Anexo I - 1.2(b)', tags: ['extinção'], difficulty: 'media' }),
  esp({ topic: 'Incêndio estrutural', subtopic: 'Resfriamento', nodeId: 'esp-resfriamento', baseStatement: 'A extinção por resfriamento atua principalmente por:', correctConcept: 'Redução da temperatura abaixo do ponto de combustão.', distractors: ['Aumento da reação química.', 'Supressão da gravidade.', 'Elevação do comburente.', 'Isolamento de energia elétrica.'], explanation: 'Retira calor do sistema em combustão.', reference: 'Anexo I - 1.2(b)', tags: ['resfriamento'], difficulty: 'facil' }),
  esp({ topic: 'Incêndio estrutural', subtopic: 'Progressão', nodeId: 'esp-progressao', baseStatement: 'Na progressão em ambiente com fumaça densa, é essencial:', correctConcept: 'Manter equipe coesa, comunicação e leitura de riscos.', distractors: ['Atuar isoladamente.', 'Desligar comunicação.', 'Entrar sem reconhecimento.', 'Retirar EPI para mobilidade.'], explanation: 'Progressão segura depende de coordenação.', reference: 'Anexo I - 1.2(b)', tags: ['progressão'], difficulty: 'media' }),
  esp({ topic: 'Incêndio estrutural', subtopic: 'Ventilação operacional', nodeId: 'esp-ventilacao', baseStatement: 'A ventilação tática em incêndio estrutural deve:', correctConcept: 'Ser coordenada com ataque para não intensificar o fogo.', distractors: ['Ser aberta sem planejamento.', 'Ocorrer após evacuação total sempre.', 'Substituir linha de ataque.', 'Ser executada por uma pessoa sem comando.'], explanation: 'Ventilação mal coordenada piora cenário térmico.', reference: 'Anexo I - 1.2(b)', tags: ['ventilação'], difficulty: 'media' }),
  esp({ topic: 'Incêndio estrutural', subtopic: 'EPI/EPR', nodeId: 'esp-equip', baseStatement: 'Antes da entrada em ambiente sinistrado é indispensável:', correctConcept: 'Checar integridade do EPI/EPR e alinhamento da guarnição.', distractors: ['Reduzir proteção para agilidade.', 'Entrar sem avaliação estrutural.', 'Dispensar dupla de segurança.', 'Operar sem comando.'], explanation: 'Segurança operacional começa na checagem prévia.', reference: 'Anexo I - 1.2(b)', tags: ['epi', 'epr'], difficulty: 'media' }),
  esp({ topic: 'Incêndio estrutural', subtopic: 'Risco de colapso', nodeId: 'esp-colapso', baseStatement: 'Sinais de possível colapso estrutural exigem:', correctConcept: 'Reavaliação tática imediata e controle do setor de risco.', distractors: ['Acelerar entrada interna.', 'Permanecer sem monitoramento.', 'Ignorar deformações estruturais.', 'Dispensar isolamento de área.'], explanation: 'Preservação da equipe é prioridade operacional.', reference: 'Anexo I - 1.2(b)', tags: ['colapso'], difficulty: 'media' }),
  esp({ topic: 'Incêndio estrutural', subtopic: 'Busca e salvamento', nodeId: 'esp-salv', baseStatement: 'Na busca de vítimas em incêndio estrutural, deve-se:', correctConcept: 'Empregar técnica sistemática com controle de tempo e rota.', distractors: ['Buscar sem comunicação.', 'Priorizar bens sobre vidas.', 'Avançar sem linha de segurança.', 'Ignorar marcação de áreas varridas.'], explanation: 'Busca organizada reduz risco e retrabalho.', reference: 'Anexo I - 1.2(b)', tags: ['salvamento'], difficulty: 'media' }),
  esp({ topic: 'Incêndio estrutural', subtopic: 'Comando de incidentes', nodeId: 'esp-comando', baseStatement: 'O comando de incidentes em incêndio visa:', correctConcept: 'Organizar recursos, setores e prioridades de forma coordenada.', distractors: ['Atuação individual sem comando.', 'Decisão descentralizada sem protocolo.', 'Desconsiderar segurança da cena.', 'Eliminar comunicação de rádio.'], explanation: 'Comando estrutura resposta eficiente e segura.', reference: 'Anexo I - 1.2(b)', tags: ['comando'], difficulty: 'media' }),

  esp({ topic: 'Atendimento básico', subtopic: 'Segurança da cena', nodeId: 'esp-cena', baseStatement: 'Na chegada ao local de emergência, a primeira conduta é:', correctConcept: 'Avaliar segurança da cena para equipe e vítima.', distractors: ['Iniciar remoção sem análise.', 'Oferecer fármaco imediato.', 'Dispensar EPI.', 'Priorizar burocracia.'], explanation: 'Cena insegura amplia dano e número de vítimas.', reference: 'Anexo I - 1.2(c)', tags: ['cena'], difficulty: 'facil' }),
  esp({ topic: 'Atendimento básico', subtopic: 'ABCDE - A', nodeId: 'esp-abc', baseStatement: 'No protocolo ABCDE, a letra A prioriza:', correctConcept: 'Via aérea pérvia com proteção cervical quando indicado.', distractors: ['Medir glicemia primeiro.', 'Iniciar transporte imediato.', 'Tratar ferimento estético.', 'Coletar documentos.'], explanation: 'A via aérea é prioridade vital no APH.', reference: 'Anexo I - 1.2(c)', tags: ['abcde'], difficulty: 'media' }),
  esp({ topic: 'Atendimento básico', subtopic: 'ABCDE - B', nodeId: 'esp-abc-b', baseStatement: 'Na etapa B do ABCDE, avalia-se prioritariamente:', correctConcept: 'Ventilação e respiração efetiva da vítima.', distractors: ['Pupilas e glicemia.', 'Histórico familiar.', 'Lesões antigas cicatrizadas.', 'Documentação pessoal.'], explanation: 'A respiração adequada mantém oxigenação tecidual.', reference: 'Anexo I - 1.2(c)', tags: ['abcde', 'respiração'], difficulty: 'facil' }),
  esp({ topic: 'Atendimento básico', subtopic: 'ABCDE - C', nodeId: 'esp-abc-c', baseStatement: 'Na etapa C do ABCDE, conduta inicial em hemorragia grave é:', correctConcept: 'Compressão direta eficaz no foco de sangramento.', distractors: ['Aguardar cessar espontaneamente.', 'Aplicar calor local.', 'Movimentar segmento lesionado.', 'Elevar cabeça sem critério.'], explanation: 'Controle hemorrágico precoce previne choque.', reference: 'Anexo I - 1.2(c)', tags: ['hemorragia'], difficulty: 'media' }),
  esp({ topic: 'Atendimento básico', subtopic: 'Trauma', nodeId: 'esp-trauma', baseStatement: 'No atendimento ao trauma, a imobilização tem objetivo de:', correctConcept: 'Prevenir agravamento de lesões durante manejo e transporte.', distractors: ['Aumentar dor para avaliação.', 'Substituir avaliação primária.', 'Dispensar monitorização.', 'Evitar uso de prancha sempre.'], explanation: 'Imobilização adequada reduz dano secundário.', reference: 'Anexo I - 1.2(c)', tags: ['trauma'], difficulty: 'media' }),
  esp({ topic: 'Atendimento básico', subtopic: 'RCP básica', nodeId: 'esp-rcp', baseStatement: 'Na parada cardiorrespiratória, a RCP de qualidade exige:', correctConcept: 'Compressões eficazes, mínimas interrupções e ritmo adequado.', distractors: ['Interrupções longas frequentes.', 'Ventilar sem compressão.', 'Compressão superficial contínua.', 'Troca de socorrista sem critério.'], explanation: 'Qualidade da RCP impacta sobrevida.', reference: 'Anexo I - 1.2(c)', tags: ['rcp'], difficulty: 'media' }),
  esp({ topic: 'Atendimento básico', subtopic: 'Transporte', nodeId: 'esp-transp', baseStatement: 'No transporte de vítima, é correto:', correctConcept: 'Escolher método conforme quadro clínico e segurança da remoção.', distractors: ['Remover sempre em alta velocidade.', 'Ignorar fixação em prancha.', 'Dispensar monitoramento.', 'Transportar sem comunicação à regulação.'], explanation: 'Transporte deve equilibrar tempo e estabilidade.', reference: 'Anexo I - 1.2(c)', tags: ['transporte'], difficulty: 'media' }),

  esp({ topic: 'Serviço Comunitário', subtopic: 'Finalidade', nodeId: 'esp-finalidade', baseStatement: 'Segundo a IG 10-03-BM, o serviço comunitário deve:', correctConcept: 'Apoiar a atividade bombeiril com disciplina e observância normativa.', distractors: ['Substituir integralmente militar.', 'Atuar sem supervisão.', 'Ignorar cadeia de comando.', 'Operar sem registro.'], explanation: 'A IG define escopo, limites e vinculação institucional.', reference: 'Anexo I - 1.2(d)', tags: ['ig-10-03'], difficulty: 'media' }),
  esp({ topic: 'Serviço Comunitário', subtopic: 'Atribuições', nodeId: 'esp-atribuicoes', baseStatement: 'A atuação do bombeiro comunitário deve respeitar:', correctConcept: 'Atribuições, protocolos e limites operacionais previstos em norma.', distractors: ['Procedimentos não autorizados.', 'Comando informal paralelo.', 'Escala sem coordenação.', 'Atuação sem EPI obrigatório.'], explanation: 'Limites operacionais garantem segurança jurídica e técnica.', reference: 'Anexo I - 1.2(d)', tags: ['atribuições'], difficulty: 'media' }),
  esp({ topic: 'Serviço Comunitário', subtopic: 'Conduta e disciplina', nodeId: 'esp-disciplina', baseStatement: 'No serviço comunitário do CBMSC, é obrigatório:', correctConcept: 'Manter disciplina, ética e respeito à hierarquia institucional.', distractors: ['Quebrar protocolo em ocorrências simples.', 'Divulgar dados sensíveis da ocorrência.', 'Recusar treinamento obrigatório.', 'Desrespeitar comando do serviço.'], explanation: 'Disciplina e ética sustentam a confiabilidade do serviço.', reference: 'Anexo I - 1.2(d)', tags: ['disciplina'], difficulty: 'facil' })
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

const alternativeComplements = [
  'considerando os procedimentos previstos na norma.',
  'de acordo com a situação descrita no enunciado.',
  'à luz dos princípios técnicos aplicáveis ao tema.',
  'no contexto operacional apresentado.',
  'conforme critérios recorrentes em provas oficiais.'
] as const

const normalizeAlternativeText = (text: string): string => text.trim().replace(/\.+$/g, '')

const buildContextLabel = (topic: string, subtopic: string): string => {
  const normalizedTopic = topic.toLowerCase()
  const normalizedSubtopic = subtopic.toLowerCase()
  return `no tema de ${normalizedTopic}, especialmente em ${normalizedSubtopic}`
}

const balanceAlternatives = (
  alternatives: { id: AlternativeId; text: string }[],
  topic: string,
  subtopic: string
): { id: AlternativeId; text: string }[] => {
  const contextLabel = buildContextLabel(topic, subtopic)

  const enriched = alternatives.map((alternative, index) => {
    const base = normalizeAlternativeText(alternative.text)
    const complement = alternativeComplements[index % alternativeComplements.length]
    return {
      ...alternative,
      text: `${base}, ${contextLabel}, ${complement}`
    }
  })

  const lengths = enriched.map((alternative) => alternative.text.length)
  const target = Math.round(lengths.reduce((sum, value) => sum + value, 0) / lengths.length)

  const padded = enriched.map((alternative, index) => {
    if (alternative.text.length >= target - 8) {
      return { ...alternative, text: `${alternative.text[0].toUpperCase()}${alternative.text.slice(1)}` }
    }

    const complement = alternativeComplements[(index + 2) % alternativeComplements.length]
    return {
      ...alternative,
      text: `${alternative.text} ${complement[0].toUpperCase()}${complement.slice(1)}`
    }
  })

  const equalizationSnippet = ' complemento técnico contextual.'
  const maxLength = Math.max(...padded.map((alternative) => alternative.text.length))

  return padded.map((alternative) => {
    const allowedMinimum = maxLength - 30
    if (alternative.text.length >= allowedMinimum) {
      return {
        ...alternative,
        text: `${alternative.text[0].toUpperCase()}${alternative.text.slice(1)}`
      }
    }

    const missing = allowedMinimum - alternative.text.length
    const repetitions = Math.ceil(missing / equalizationSnippet.length)
    const extra = equalizationSnippet.repeat(repetitions).slice(0, missing)

    return {
      ...alternative,
      text: `${alternative.text}${extra}`
    }
  })
}

const materializeQuestions = (blueprints: Blueprint[], variants: number, prefix: string): Question[] =>
  blueprints.flatMap((bp, index) =>
    Array.from({ length: variants }, (_, variantIndex) => {
      const rotation = (index + variantIndex) % 5
      const { alternatives, correctAlternativeId } = alternativesFrom(bp.correctConcept, bp.distractors, rotation)
      const balancedAlternatives = balanceAlternatives(alternatives, bp.topic, bp.subtopic)
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
        alternatives: balancedAlternatives,
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

export const questions: Question[] = [...materializeQuestions(ptBlueprints, 8, 'PT'), ...materializeQuestions(espBlueprints, 4, 'ESP')]

export const activeQuestions = questions.filter((question) => question.isActive)
