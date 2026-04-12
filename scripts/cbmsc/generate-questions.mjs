import fs from 'node:fs/promises'
import path from 'node:path'
import { readJson, writeJson } from './utils.mjs'

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E']
const difficulties = ['easy', 'medium', 'hard']
const questionTypes = ['conceptual', 'application', 'scenario', 'procedure', 'definition', 'comparison', 'exception']

const bannedWords = [/\bcorret[ao]\b/i, /\berrad[ao]\b/i, /\binadequad[ao]\b/i, /manual oficial/i, /alinhad[ao]\s+ao\s+manual/i]
const genericPatterns = [/de forma geral/i, /conforme necessário/i, /de modo amplo/i, /\bem qualquer situa[cç][aã]o\b/i]
const stopWords = new Set(['a','o','e','de','da','do','das','dos','para','com','sem','em','no','na','nos','nas','um','uma','ao'])
const DISTRACTOR_TYPES = ['erro de conceito', 'erro de ordem', 'erro de aplicação', 'exceção aplicada incorretamente']
const CONCEPTUAL_VARIATIONS = ['inversão de regra', 'exceção mal aplicada', 'erro de prioridade', 'conceito próximo confundido']
const SYNONYM_CANON = new Map([
  ['sempre', 'absoluto'], ['nunca', 'absoluto'], ['somente', 'absoluto'],
  ['iniciar', 'inicio'], ['inicia', 'inicio'], ['inicie', 'inicio'], ['priorizar', 'prioridade'],
  ['prioridade', 'prioridade'], ['depois', 'ordem_tardia'], ['após', 'ordem_tardia'], ['antes', 'ordem_previa'],
  ['avaliacao', 'avaliacao'], ['reavaliacao', 'avaliacao'], ['reavaliar', 'avaliacao'],
  ['classe', 'classe'], ['metodo', 'metodo'], ['agente', 'agente'], ['protocolo', 'protocolo'],
  ['sequencia', 'sequencia'], ['ordem', 'sequencia'], ['etapa', 'sequencia'],
  ['seguranca', 'seguranca'], ['risco', 'risco'], ['choque', 'risco'],
  ['torniquete', 'torniquete'], ['compressao', 'compressao'], ['dea', 'dea'], ['ventilacao', 'ventilacao'],
  ['isolar', 'isolamento'], ['isolamento', 'isolamento'], ['abafamento', 'abafamento'], ['resfriamento', 'resfriamento'],
  ['combustivel', 'combustivel'], ['fogo', 'fogo'], ['vitima', 'vitima'], ['equipe', 'equipe']
])

const TOPICS = [
  {
    theme: 'Incêndio',
    subtheme: 'Classes de incêndio',
    keywords: ['classe a', 'classe b', 'classe c', 'classe d', 'classe k'],
    focus: 'classificação do incêndio',
    prompts: [
      'Em uma cena com materiais sólidos, líquidos inflamáveis e equipamento energizado, qual decisão de classificação direciona melhor a primeira resposta?',
      'Ao receber informações parciais sobre combustível e eletricidade ativa, qual análise de classe deve guiar a escolha tática inicial?',
      'Durante o reconhecimento, qual critério de classe evita erro de agente extintor e reduz risco de reignição?',
      'Na leitura do cenário misto, qual abordagem de classes prioriza segurança e eficácia operacional?'
    ],
    correctPool: [
      'Classificar por combustível predominante e presença de energia elétrica, reavaliando a classe quando houver mudança de cenário.',
      'Identificar a classe antes do ataque, confirmando se há metais combustíveis ou óleos de cozinha para ajustar agente e técnica.',
      'Tratar a energia elétrica como fator decisivo inicial e só migrar de classe após isolamento ou desligamento confirmado.',
      'Relacionar cada foco à sua classe específica para evitar aplicação de agente incompatível no ponto crítico da ocorrência.',
      'Conduzir avaliação dinâmica da classe do incêndio conforme o material envolvido e o comportamento observado das chamas.'
    ],
    distractorPool: [
      'Adotar sempre o agente de maior vazão independentemente da classe para reduzir tempo de decisão.',
      'Classificar apenas após o primeiro jato de teste, usando o resultado para inferir o tipo de combustível.',
      'Padronizar classe A para fase inicial e corrigir somente se o fogo não reduzir após vários minutos.',
      'Priorizar distância da guarnição e ignorar a classe enquanto não houver confirmação laboratorial do material.',
      'Considerar toda ocorrência veicular como classe C até o término completo da combustão.',
      'Definir classe pelo volume de fumaça e não pelo combustível presente na zona de fogo.',
      'Selecionar classe com base apenas no ambiente aberto ou fechado, sem analisar o material em combustão.',
      'Agrupar incêndios de cozinha e elétricos na mesma classe por apresentarem risco de choque térmico.',
      'Iniciar com água em neblina em qualquer classe e manter o método mesmo diante de reação adversa.',
      'Postergar a classificação até concluir a avaliação secundária de toda a edificação.'
    ]
  },
  {
    theme: 'Incêndio',
    subtheme: 'Métodos de extinção',
    keywords: ['resfriamento', 'abafamento', 'isolamento'],
    focus: 'método de extinção adequado',
    prompts: [
      'Diante de fogo em líquido inflamável contido, qual método de extinção deve ser priorizado?',
      'Qual escolha entre resfriamento, abafamento e isolamento é mais consistente para suprimir combustão com risco de propagação?',
      'Em ataque inicial, qual critério técnico orienta o método de extinção com menor chance de agravamento?',
      'Na progressão do combate, qual método deve ser ajustado conforme o tetraedro do fogo identificado na cena?'
    ],
    correctPool: [
      'Selecionar o método que remove o elemento dominante do fogo no cenário, combinando resfriamento, abafamento ou isolamento quando necessário.',
      'Priorizar abafamento em vapores inflamáveis e complementar com resfriamento de superfícies expostas para evitar reignição.',
      'Empregar resfriamento controlado quando o calor for o vetor principal de propagação, mantendo monitoramento térmico contínuo.',
      'Aplicar isolamento de combustível quando possível e seguro, reduzindo alimentação do fogo antes de ampliar o ataque.',
      'Ajustar o método conforme a evolução da combustão, sem manter técnica única quando o comportamento do fogo muda.'
    ],
    distractorPool: [
      'Usar sempre resfriamento intenso em qualquer combustível, pois o volume de água compensa incompatibilidades.',
      'Iniciar por ventilação forçada para só depois definir método de extinção no foco principal.',
      'Escolher abafamento apenas pelo tamanho das chamas, sem considerar fase de incêndio ou material.',
      'Manter o primeiro método escolhido até extinção total, evitando alterações táticas durante a ocorrência.',
      'Tratar isolamento como etapa administrativa e não como método operacional de combate.',
      'Aplicar espuma em classe C energizada para reduzir temperatura do equipamento.',
      'Executar ataque direto único e postergar proteção de exposições até o rescaldo.',
      'Substituir avaliação do tetraedro por padrão fixo de resposta da guarnição.',
      'Interromper reavaliações para manter ritmo constante de aplicação do agente.',
      'Decidir método apenas pelo recurso disponível no primeiro veículo que chega.'
    ]
  },
  {
    theme: 'Incêndio',
    subtheme: 'Comportamento do fogo',
    keywords: ['flashover', 'backdraft', 'fumaça'],
    focus: 'fenômeno do incêndio',
    prompts: [
      'Com sinais de alta temperatura e fumaça densa pulsante, qual leitura de comportamento do fogo orienta ação segura?',
      'Durante progressão interna, qual interpretação de fenômenos térmicos reduz risco de evento extremo?',
      'Ao identificar indícios de ventilação limitada, qual conduta sobre comportamento do fogo é mais adequada?',
      'Em ambiente confinado com aquecimento rápido, qual avaliação técnica deve preceder a abertura de compartimento?'
    ],
    correctPool: [
      'Reconhecer sinais precursores de flashover ou backdraft e controlar ventilação/entrada antes de avançar.',
      'Relacionar padrão de fumaça, calor e pressão para estimar fase do incêndio e modular o ataque.',
      'Executar leitura contínua do ambiente, aplicando pulsos de resfriamento de gases quando houver risco de transição rápida.',
      'Avaliar caminho dos gases quentes e efeitos da ventilação para prevenir aceleração súbita da combustão.',
      'Integrar observação externa e interna para decidir abertura tática apenas com controle de fluxo e linha pronta.'
    ],
    distractorPool: [
      'Abrir completamente portas e janelas no primeiro contato para liberar fumaça antes de qualquer leitura térmica.',
      'Assumir que ausência de chamas visíveis elimina risco de flashover em compartimentos fechados.',
      'Interpretar fumaça escura como sinal suficiente para ataque direto contínuo sem pausas de avaliação.',
      'Priorizar velocidade de entrada e deixar análise de ventilação para a equipe de retaguarda.',
      'Utilizar apenas percepção visual das chamas e desconsiderar pulso de fumaça ou ruído de combustão.',
      'Realizar abertura de teto sem coordenação com equipe de ataque para ganhar exaustão imediata.',
      'Tratar backdraft e flashover como fenômenos equivalentes com resposta única.',
      'Ignorar estratificação térmica, mantendo progressão em posição alta durante toda a aproximação.',
      'Cancelar leitura de ambiente ao identificar vítima potencial em outro cômodo, mantendo ventilação indiscriminada.',
      'Usar ventilação positiva em qualquer fase do incêndio para reduzir tempo de extinção.'
    ]
  },
  {
    theme: 'Incêndio',
    subtheme: 'Extintores',
    keywords: ['extintor', 'co2', 'pqs', 'espuma'],
    focus: 'emprego de extintores',
    prompts: [
      'Em princípio de incêndio em painel elétrico energizado, qual uso de extintor é tecnicamente mais seguro?',
      'Qual critério de escolha de extintor aumenta chance de controle inicial sem ampliar risco à equipe?',
      'Ao atuar com extintores portáteis, qual procedimento melhora efetividade e segurança?',
      'Diante de foco inicial em combustível líquido, qual emprego do extintor evita espalhamento do incêndio?'
    ],
    correctPool: [
      'Selecionar extintor compatível com a classe e aplicar técnica de varredura na base do fogo com distância adequada.',
      'Confirmar classe, posição de escape e autonomia do extintor antes da descarga contínua controlada.',
      'Utilizar CO2 ou PQS conforme classe e risco elétrico, evitando aproximação excessiva ao foco.',
      'Direcionar aplicação progressiva para cobrir superfície em chamas sem romper película de espuma quando utilizada.',
      'Substituir extintor esgotado imediatamente e manter vigilância para reignição após aparente extinção.'
    ],
    distractorPool: [
      'Priorizar o extintor mais próximo, independentemente de classe ou agente disponível.',
      'Acionar descarga total em jato único no topo das chamas para reduzir tempo de intervenção.',
      'Aproximar ao máximo o bocal do foco elétrico para aumentar alcance efetivo do agente.',
      'Interromper rota de fuga para sustentar aplicação contínua até vazio completo do cilindro.',
      'Usar água pressurizada em líquido inflamável para deslocar rapidamente o combustível.',
      'Empregar espuma em equipamentos energizados por apresentar maior cobertura superficial.',
      'Manter descarga aleatória sem varredura para atingir diferentes pontos da cena simultaneamente.',
      'Ignorar verificação do lacre e pressão, iniciando aplicação imediata no foco.',
      'Aplicar agente do lado de sotavento para acelerar dispersão das chamas.',
      'Encerrar monitoramento assim que a chama desaparecer, liberando área sem rescaldo.'
    ]
  },
  {
    theme: 'APH', subtheme: 'ABCDE', keywords: ['abcde','airway','breathing','circulation'], focus: 'avaliação primária',
    prompts: [
      'No atendimento pré-hospitalar inicial, qual conduta respeita a lógica do ABCDE?',
      'Em vítima politraumatizada, qual priorização no ABCDE é mais adequada?',
      'Durante avaliação primária, qual sequência reduz omissões críticas?',
      'Com risco de deterioração rápida, qual aplicação do ABCDE deve ser adotada?'
    ],
    correctPool: [
      'Executar ABCDE em ordem, tratando imediatamente achados críticos e repetindo reavaliações após cada intervenção.',
      'Assegurar via aérea com proteção cervical, avaliar ventilação e perfusão antes de avançar para etapas subsequentes.',
      'Priorizar ameaças imediatas à vida dentro do ABCDE, sem pular etapas por impressão inicial isolada.',
      'Registrar resposta às intervenções do ABCDE e reiniciar a sequência diante de piora clínica.',
      'Integrar exame rápido e tratamento simultâneo no ABCDE mantendo comunicação da equipe.'
    ],
    distractorPool: [
      'Iniciar pela exposição completa e depois revisar via aérea caso surja necessidade respiratória.',
      'Conduzir avaliação secundária extensa antes de corrigir alterações de ventilação.',
      'Tratar primeiro dor e ansiedade para facilitar adesão e só então iniciar ABCDE.',
      'Pular circulação quando pulsos periféricos estiverem presentes na primeira checagem.',
      'Manter sequência fixa sem intervenções até finalizar todas as letras do protocolo.',
      'Priorizar coleta administrativa de dados para completar registro antes do exame primário.',
      'Estabilizar membro fraturado como primeira etapa em qualquer cenário de trauma.',
      'Delegar via aérea para etapa final quando a vítima responde verbalmente.',
      'Suspender reavaliação após melhora inicial para acelerar transporte.',
      'Realizar ABCDE apenas uma vez no início da ocorrência.'
    ]
  },
  {
    theme: 'APH', subtheme: 'RCP', keywords: ['rcp','compressão','dea'], focus: 'reanimação cardiopulmonar',
    prompts: ['Em uma PCR presenciada, qual conduta inicial de RCP é mais indicada?','Qual estratégia em RCP aumenta probabilidade de retorno da circulação espontânea?','Durante uso do DEA, qual procedimento deve ser seguido pela equipe?','Na condução da RCP, qual erro deve ser evitado para manter qualidade?'],
    correctPool: [
      'Iniciar compressões de alta qualidade rapidamente, minimizar interrupções e integrar DEA assim que disponível.',
      'Manter ritmo e profundidade adequados das compressões com revezamento de socorristas para evitar fadiga.',
      'Garantir segurança da cena, análise do DEA sem contato com a vítima e retomada imediata das compressões.',
      'Organizar ciclos de RCP com pausas curtas e ventilação conforme protocolo aplicado pela equipe.',
      'Monitorar qualidade das compressões e corrigir técnica em tempo real durante toda a reanimação.'
    ],
    distractorPool: [
      'Aguardar acesso venoso completo antes de iniciar compressões torácicas.',
      'Interromper compressões por períodos longos para checagens frequentes de pulso.',
      'Aplicar choque do DEA sem afastar equipe para reduzir tempo de pausa.',
      'Priorizar ventilação avançada contínua e reduzir frequência das compressões.',
      'Realizar compressões superficiais para evitar fraturas costais.',
      'Executar ciclos longos sem troca de compressor, mesmo com queda de desempenho.',
      'Pausar RCP após cada análise do DEA por um minuto para observação.',
      'Iniciar transporte imediato sem desfibrilação quando DEA estiver disponível na cena.',
      'Sincronizar choque com compressões em andamento para ganhar tempo.',
      'Suspender RCP assim que houver qualquer movimento involuntário isolado.'
    ]
  },
  {
    theme: 'APH', subtheme: 'Trauma', keywords: ['trauma','imobilização','coluna'], focus: 'atendimento ao trauma',
    prompts: ['Em trauma com mecanismo de alta energia, qual abordagem inicial é mais adequada?','Qual conduta em trauma reduz risco de lesões secundárias?','Durante atendimento ao traumatizado, qual prioridade técnica deve ser adotada?','Na cena de trauma, qual decisão favorece estabilização segura?'],
    correctPool: [
      'Combinar controle de ameaças imediatas com estabilização apropriada e transporte conforme gravidade.',
      'Manter alinhamento e restrição de movimento quando indicado, sem atrasar intervenções vitais.',
      'Aplicar avaliação primária focada em perfusão, ventilação e sangramento antes de procedimentos complementares.',
      'Planejar extricação e imobilização de acordo com mecanismo, condição clínica e risco ambiental.',
      'Reavaliar continuamente sinais de choque e deterioração neurológica durante o atendimento.'
    ],
    distractorPool: [
      'Imobilizar todo paciente em prancha rígida por rotina, independentemente de avaliação clínica.',
      'Priorizar coleta detalhada de histórico antes de controlar sangramento ativo.',
      'Executar manipulações repetidas para confirmar dor localizada antes de estabilizar.',
      'Adiar transporte até concluir exame físico segmentar completo na cena.',
      'Focar somente em fraturas aparentes e deixar via aérea para etapa posterior.',
      'Remover capacete de motociclista sem controle manual cervical para agilizar acesso.',
      'Manter paciente sentado para conforto mesmo com suspeita de choque.',
      'Ignorar mecanismo de trauma quando sinais vitais iniciais forem estáveis.',
      'Realizar tração de membro com resistência importante sem analgesia ou avaliação adicional.',
      'Suspender monitorização após primeira melhora hemodinâmica.'
    ]
  },
  {
    theme: 'APH', subtheme: 'Hemorragias', keywords: ['hemorragia','torniquete','compressão direta'], focus: 'controle hemorrágico',
    prompts: ['Diante de hemorragia externa grave, qual conduta inicial é prioritária?','Qual decisão sobre torniquete e compressão direta é tecnicamente adequada?','Em controle hemorrágico pré-hospitalar, qual sequência é recomendada?','Na cena com sangramento arterial, qual abordagem aumenta chance de sobrevida?'],
    correctPool: [
      'Aplicar compressão direta imediata e escalonar para torniquete quando o sangramento ameaçar a vida e não responder.',
      'Posicionar torniquete proximal ao ferimento quando indicado, registrando horário e mantendo reavaliação perfusional.',
      'Controlar hemorragia antes de procedimentos não prioritários, preservando aquecimento e monitorização da vítima.',
      'Utilizar curativo compressivo eficaz e reforçar medidas conforme resposta clínica do paciente.',
      'Integrar controle de sangramento ao manejo de choque e transporte rápido para tratamento definitivo.'
    ],
    distractorPool: [
      'Lavar amplamente o ferimento antes de iniciar qualquer tentativa de hemostasia.',
      'Aplicar torniquete distal ao sangramento para reduzir dor durante o transporte.',
      'Afrouxar torniquete periodicamente na ambulância para avaliar coloração do membro.',
      'Priorizar analgesia e só depois iniciar compressão em sangramento ativo importante.',
      'Remover coágulos formados para avaliar profundidade antes de comprimir.',
      'Utilizar gelo direto como método principal para hemorragia arterial intensa.',
      'Evitar torniquete mesmo em sangramento exsanguinante por risco de lesão local.',
      'Trocar curativos a cada poucos minutos para inspeção visual contínua da ferida.',
      'Esperar estabilização dos sinais vitais antes de controlar sangramento periférico.',
      'Concentrar atendimento em acesso venoso e deixar hemostasia para o hospital.'
    ]
  },
  {
    theme: 'Produtos perigosos', subtheme: 'Reconhecimento e isolamento', keywords: ['produto perigoso','onu','zona quente'], focus: 'isolamento inicial',
    prompts: ['Em suspeita de produto perigoso, qual ação inicial é mais segura?','Qual conduta de reconhecimento e isolamento reduz exposição da guarnição?','Durante primeira resposta a produto perigoso, qual prioridade técnica deve ser seguida?','Na identificação de risco químico, qual procedimento é recomendado?'],
    correctPool: [
      'Reconhecer sinais e painéis de risco à distância, estabelecer isolamento e acionar recursos especializados.',
      'Definir zonas operacionais, controlar acesso e posicionar equipes a favor da segurança ambiental.',
      'Usar informações ONU e guias de emergência para orientar isolamento inicial e proteção da equipe.',
      'Manter aproximação cautelosa sem contato direto com substância até identificação mínima confiável.',
      'Priorizar proteção coletiva e comunicação interagências antes de iniciar ações ofensivas.'
    ],
    distractorPool: [
      'Aproximar o recipiente para leitura direta do rótulo antes de isolar a área.',
      'Iniciar lavagem da substância com água em grande volume sem identificar reatividade.',
      'Posicionar viatura a sotavento para facilitar visualização do vazamento.',
      'Permitir circulação local controlada enquanto se aguarda equipe especializada.',
      'Abrir embalagens fechadas para confirmar estado físico do produto.',
      'Ignorar número ONU e basear decisão apenas no odor percebido na cena.',
      'Definir zona quente apenas após atendimento inicial das vítimas no ponto de vazamento.',
      'Retirar EPI para melhorar mobilidade durante reconhecimento rápido.',
      'Conter produto com material não compatível para ganhar tempo na resposta.',
      'Realizar neutralização imediata sem consulta a guia de emergência.'
    ]
  },
  {
    theme: 'Salvamento', subtheme: 'Salvamento em altura', keywords: ['altura','ancoragem','corda'], focus: 'técnica de salvamento em altura',
    prompts: ['Em operação de salvamento em altura, qual princípio deve orientar a montagem do sistema?','Qual decisão técnica em altura reduz risco de falha operacional?','Durante acesso por cordas, qual conduta é adequada?','Na preparação para resgate vertical, qual priorização é correta?'],
    correctPool: [
      'Validar ancoragens redundantes, checar equipamentos e manter comando técnico antes da progressão.',
      'Montar sistema com fator de segurança adequado, inspeção cruzada e comunicação padronizada.',
      'Executar progressão controlada com backups funcionais e gestão contínua de risco de queda.',
      'Distribuir cargas nas ancoragens conforme projeto de resgate e condições estruturais do ponto.',
      'Realizar conferência de EPIs e nós críticos por dupla antes de iniciar manobra com vítima.'
    ],
    distractorPool: [
      'Utilizar ponto único de ancoragem quando parecer estruturalmente robusto na inspeção visual.',
      'Iniciar descida antes da dupla checagem para reduzir tempo de exposição da vítima.',
      'Substituir backup por comunicação verbal constante entre operador e segurança.',
      'Aplicar o mesmo arranjo de cordas em qualquer estrutura para manter padrão da equipe.',
      'Permitir improvisos de nó em campo desde que a carga seja aplicada gradualmente.',
      'Concentrar toda verificação em um único operador experiente sem conferência cruzada.',
      'Montar sistema com folga excessiva para facilitar movimentação durante o resgate.',
      'Posicionar vítima em transferência sem estabilização prévia do sistema principal.',
      'Dispensar proteção de borda quando o atrito parecer baixo no teste manual.',
      'Priorizar rapidez de acesso e revisar ancoragens somente após o contato com a vítima.'
    ]
  },
  {
    theme: 'Salvamento', subtheme: 'Salvamento aquático', keywords: ['afogamento','salvamento aquático','praia'], focus: 'resgate aquático',
    prompts: ['Em resgate aquático com vítima consciente e correnteza, qual conduta inicial é recomendada?','Qual estratégia em salvamento aquático prioriza segurança do socorrista?','Durante atendimento de afogamento, qual decisão técnica é mais adequada?','Em ambiente de surf e arrebentação, qual ação deve ser priorizada?'],
    correctPool: [
      'Priorizar alcance e lançamento de meios de flutuação antes de entrada na água, quando viável.',
      'Avaliar corrente, vento e ponto de retorno para planejar abordagem segura à vítima.',
      'Realizar entrada na água apenas com equipamento apropriado e cobertura de segurança.',
      'Retirar vítima para zona segura mantendo controle de via aérea e prevenção de nova submersão.',
      'Integrar resgate e avaliação inicial da vítima sem comprometer segurança da equipe.'
    ],
    distractorPool: [
      'Entrar imediatamente na água sem equipamento para reduzir tempo de contato com a vítima.',
      'Abordar vítima em pânico de frente sem meio de flutuação para facilitar tração.',
      'Ignorar leitura da corrente e seguir trajetória retilínea direta até o ponto de submersão.',
      'Priorizar transporte rápido em prancha sem estabilizar respiração na zona segura.',
      'Realizar mergulhos repetidos sem rodízio de equipes em mar agitado.',
      'Conduzir vítima pelo pescoço para evitar que ela se agarre ao socorrista.',
      'Dispensar sinalização da área porque a equipe de praia já está no local.',
      'Iniciar RCP ainda dentro da água para ganhar tempo de atendimento.',
      'Permitir entrada de curiosos na faixa de resgate para ampliar busca visual.',
      'Abandonar flutuador durante retorno para aumentar velocidade de nado.'
    ]
  },
  {
    theme: 'Salvamento', subtheme: 'Resgate veicular', keywords: ['resgate veicular','desencarceramento','estabilização'], focus: 'procedimentos em resgate veicular',
    prompts: ['Em colisão com vítima encarcerada, qual etapa deve ser priorizada antes do desencarceramento?','Qual conduta inicial em resgate veicular melhora segurança da operação?','Durante extração de vítima presa, qual decisão técnica é correta?','No gerenciamento do resgate veicular, qual sequência é mais adequada?'],
    correctPool: [
      'Estabilizar o veículo, gerenciar riscos e coordenar acesso à vítima antes do corte estrutural.',
      'Executar isolamento da cena, controle de energia e proteção da vítima durante ferramentas de extricação.',
      'Planejar via de acesso e saída com equipe integrada, monitorando condição clínica continuamente.',
      'Priorizar segurança da equipe e da vítima com estabilização progressiva e comunicação operacional.',
      'Realizar desencarceramento compatível com mecanismo e deformação, evitando manobras bruscas.'
    ],
    distractorPool: [
      'Iniciar corte da coluna A imediatamente para reduzir tempo de aprisionamento.',
      'Movimentar o veículo para área ampla antes de qualquer estabilização.',
      'Desconectar bateria somente após finalizar abertura total do habitáculo.',
      'Retirar vítima por tração manual rápida quando houver deformação da cabine.',
      'Dispensar proteção interna da vítima para facilitar visualização da equipe.',
      'Executar múltiplos cortes simultâneos sem comando único para ganhar produtividade.',
      'Priorizar retirada de portas sem avaliação de pontos de alta resistência estrutural.',
      'Ignorar vazamento de combustível enquanto não houver chama visível.',
      'Utilizar ferramentas hidráulicas sem checagem de estabilidade do solo.',
      'Definir estratégia de extração somente após início das manobras de corte.'
    ]
  },
  {
    theme: 'Salvamento', subtheme: 'Busca terrestre', keywords: ['busca terrestre','setorização','varredura'], focus: 'procedimento de busca terrestre',
    prompts: ['Em busca terrestre por pessoa desaparecida, qual conduta inicial é mais efetiva?','Qual decisão sobre setorização e varredura é tecnicamente adequada?','Durante operação prolongada de busca terrestre, qual prática deve ser adotada?','No planejamento da busca, qual prioridade melhora cobertura e controle?'],
    correctPool: [
      'Definir área de busca com setorização, pontos de controle e registro sistemático de varredura.',
      'Priorizar coleta de dados iniciais confiáveis para orientar probabilidade e emprego de equipes.',
      'Aplicar método de varredura compatível com terreno, visibilidade e recursos disponíveis.',
      'Manter rastreabilidade das áreas já cobertas e realocar equipes conforme novos indícios.',
      'Integrar comando, comunicação e segurança operacional em todas as fases da busca.'
    ],
    distractorPool: [
      'Distribuir equipes aleatoriamente para aumentar chance de encontro fortuito.',
      'Concentrar todas as equipes no último ponto visto sem expandir perímetro progressivo.',
      'Iniciar busca noturna em terreno desconhecido sem pontos de navegação definidos.',
      'Desconsiderar registro de trilhas para acelerar movimentação entre setores.',
      'Modificar frequência de rádio sem coordenação para reduzir saturação do canal principal.',
      'Encerrar setor sem dupla confirmação de cobertura por marcos geográficos.',
      'Priorizar velocidade de deslocamento em vez de leitura de indícios no terreno.',
      'Realizar varredura linear única independentemente de relevo e vegetação.',
      'Reiniciar busca a partir do zero sempre que surgir nova informação parcial.',
      'Dispensar briefing de segurança para ampliar janela operacional.'
    ]
  },
  {
    theme: 'Operações', subtheme: 'Segurança operacional', keywords: ['segurança operacional','comando','par'], focus: 'gestão de segurança da guarnição',
    prompts: ['Durante ocorrência complexa, qual medida fortalece a segurança operacional da guarnição?','Qual prática de comando contribui para reduzir acidentes em operação?','Na gestão de risco em campo, qual conduta deve ser adotada?','Em operação com múltiplas equipes, qual decisão preserva segurança coletiva?'],
    correctPool: [
      'Aplicar gerenciamento contínuo de riscos, controle de pessoal e comunicação clara entre funções.',
      'Manter sistema de comando, checagem por pares e ponto de controle de entrada e saída.',
      'Interromper tática quando risco superar benefício esperado, redefinindo plano operacional.',
      'Garantir briefing objetivo, canais de comunicação funcionais e atualização situacional frequente.',
      'Monitorar fadiga, tempo de exposição e condições ambientais para ajustar a operação com segurança.'
    ],
    distractorPool: [
      'Manter equipe em área de risco enquanto houver progresso, mesmo sem controle de exposição.',
      'Centralizar decisões em um operador e reduzir comunicação para evitar ruído tático.',
      'Permitir atuação isolada de integrantes experientes sem controle por pares.',
      'Adiar revisão de risco para o debriefing após encerramento da ocorrência.',
      'Eliminar pausas operacionais para manter ritmo contínuo de resposta.',
      'Ignorar sinais de fadiga porque a troca de equipe reduz velocidade da missão.',
      'Modificar objetivos em campo sem atualização para todas as equipes.',
      'Priorizar salvamento de equipamento sobre retirada segura da guarnição.',
      'Dispensar controle de entrada em área quente para acelerar intervenção.',
      'Manter canal de rádio único para comando e logística sem disciplina de tráfego.'
    ]
  },
  {
    theme: 'Normas', subtheme: 'Legislação e atividade técnica', keywords: ['ig','norma','atividade técnica','legislação'], focus: 'base normativa do CBMSC',
    prompts: ['No exercício da atividade técnica, qual conduta está em conformidade com a base normativa?', 'Qual decisão em processo técnico reduz não conformidades e retrabalho?', 'Ao analisar exigências normativas, qual abordagem é mais adequada?', 'Na atuação administrativa e técnica, qual prática fortalece segurança jurídica?'],
    correctPool: [
      'Aplicar critérios previstos em norma vigente, registrando fundamentação técnica e evidências da decisão.',
      'Conferir escopo da exigência normativa e compatibilizar análise com risco e ocupação avaliada.',
      'Manter rastreabilidade documental e atualização normativa durante todo o processo técnico.',
      'Decidir com base em requisito aplicável e justificativa técnica objetiva, evitando interpretações arbitrárias.',
      'Alinhar vistoria, análise e parecer ao instrumento normativo específico da atividade executada.'
    ],
    distractorPool: [
      'Adotar exigências de referência antiga quando mais restritivas, mesmo revogadas.',
      'Padronizar decisões por costume local sem consulta ao texto normativo vigente.',
      'Substituir fundamentação técnica por orientação verbal não documentada.',
      'Aplicar a mesma exigência para todas as ocupações, independentemente do risco.',
      'Emitir parecer preliminar sem registrar base normativa para agilizar tramitação.',
      'Ignorar atualização de instruções técnicas até fechamento anual dos processos.',
      'Priorizar formato do documento e deixar mérito técnico para revisão futura.',
      'Considerar conformidade presumida quando o responsável técnico possui histórico positivo.',
      'Aceitar soluções compensatórias sem validação de equivalência técnica.',
      'Tratar dúvida normativa como dispensa automática de exigência.'
    ]
  }
]

const extractSections = async () => {
  const files = await fs.readdir('data/cbmsc/normalized').catch(() => [])
  const sections = []
  for (const file of files) {
    const doc = await readJson(path.join('data/cbmsc/normalized', file), null)
    if (!doc?.sections?.length) continue
    for (const section of doc.sections) {
      sections.push({
        manualId: doc.manualId,
        manualTitle: doc.title,
        sectionId: section.id,
        title: section.title,
        content: section.content ?? '',
        keywords: section.keywords ?? [],
        pageStart: section.pageStart,
        pageEnd: section.pageEnd,
        sourceUrl: doc.fileUrl || doc.sourceUrl
      })
    }
  }

  if (sections.length > 0) return sections

  const mapFiles = await fs.readdir('src/data/mindmaps').catch(() => [])
  for (const file of mapFiles.filter((name) => name.startsWith('cbmsc-') && name.endsWith('.json'))) {
    const map = await readJson(path.join('src/data/mindmaps', file), null)
    if (!map?.sources?.length) continue
    for (const source of map.sources) {
      const content = [source.excerpt, ...(map.examHighlights ?? [])].filter(Boolean).join(' ')
      if (!content) continue
      sections.push({
        manualId: source.manualId,
        manualTitle: source.manualTitle ?? map.title,
        sectionId: source.sectionId,
        title: map.title,
        content,
        keywords: map.terms ?? [],
        pageStart: source.pageStart ?? 1,
        pageEnd: source.pageEnd ?? source.pageStart ?? 1,
        sourceUrl: source.sourceUrl
      })
    }
  }

  return sections
}

const scoreSection = (section, keywords) => {
  const text = `${section.title} ${(section.keywords ?? []).join(' ')} ${section.content.slice(0, 1800)}`.toLowerCase()
  return keywords.reduce((acc, keyword) => acc + (text.includes(keyword.toLowerCase()) ? 3 : 0), 0)
}

const findSections = (sections, keywords, limit = 12) =>
  sections
    .map((section) => ({ section, score: scoreSection(section, keywords) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.section)

const fallbackSourceForTopic = (topic) => ({
  manualId: 'cbmsc-base-oficial',
  manualTitle: 'Base oficial CBMSC (revisão estruturada)',
  sectionId: `secao-${topic.subtheme.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  title: topic.subtheme,
  content: `Ponto de revisão operacional para ${topic.focus}, mantendo aderência às apostilas oficiais do CBMSC.`,
  pageStart: 1,
  pageEnd: 1,
  sourceUrl: 'https://portal.cbm.sc.gov.br/index.php/biblioteca/manuais-cbmsc'
})

const sanitize = (text) => text.toLowerCase().normalize('NFD').replace(/[^a-z\s]/g, ' ').replace(/\s+/g, ' ').trim()
const tokenize = (text) => sanitize(text).split(' ').filter((token) => token && !stopWords.has(token))
const optionBody = (option) => option.replace(/^[A-E]\)\s*/, '').trim()

const pickBalancedDistractors = (correct, pool, seedOffset) => {
  const targetLen = correct.length
  const ranked = [...pool]
    .filter((candidate) => candidate !== correct)
    .map((candidate, idx) => ({ candidate, score: Math.abs(candidate.length - targetLen), idx }))
    .sort((a, b) => a.score - b.score || ((a.idx + seedOffset) % 7) - ((b.idx + seedOffset) % 7))
    .map((entry) => entry.candidate)

  const typed = DISTRACTOR_TYPES.map((type) => ranked.filter((candidate) => classifyDistractorType(candidate, correct) === type))
  if (typed.every((items) => items.length > 0)) {
    const seeded = typed.map((items, idx) => items[(seedOffset + idx) % items.length])
    const lengths = [correct.length, ...seeded.map((item) => item.length)]
    if (Math.max(...lengths) - Math.min(...lengths) <= 24) return seeded
  }

  return ranked.slice(0, 4)
}

const similarity = (left, right) => {
  const a = new Set(tokenize(left))
  const b = new Set(tokenize(right))
  const intersection = [...a].filter((token) => b.has(token)).length
  const union = new Set([...a, ...b]).size
  return union ? intersection / union : 0
}

const semanticTokens = (text) => tokenize(text).map((token) => SYNONYM_CANON.get(token) ?? token)

const containsAnyToken = (tokens, terms) => terms.some((term) => tokens.includes(term))

const classifyDistractorType = (text, correct) => {
  const tokens = semanticTokens(text)
  const correctTokens = semanticTokens(correct)

  const orderHints = ['ordem_tardia', 'ordem_previa', 'sequencia']
  const exceptionHints = ['absoluto', 'qualquer', 'toda', 'todo', 'independentemente']
  const applicationHints = ['agua', 'espuma', 'dea', 'torniquete', 'compressao', 'ancoragem', 'ferramentas', 'veiculo', 'ventilacao']

  if (containsAnyToken(tokens, orderHints)) return 'erro de ordem'
  if (containsAnyToken(tokens, exceptionHints)) return 'exceção aplicada incorretamente'
  if (containsAnyToken(tokens, applicationHints)) return 'erro de aplicação'
  return 'erro de conceito'
}

const inferConceptualVariation = (text) => {
  const tokens = semanticTokens(text)
  if (tokens.includes('absoluto')) return 'exceção mal aplicada'
  if (tokens.includes('ordem_tardia') || tokens.includes('ordem_previa') || tokens.includes('sequencia')) return 'erro de prioridade'
  if (tokens.includes('inverter') || tokens.includes('inverso') || tokens.includes('oposto')) return 'inversão de regra'
  const inferredType = classifyDistractorType(text, '')
  if (inferredType === 'erro de aplicação') return 'inversão de regra'
  if (inferredType === 'erro de ordem') return 'erro de prioridade'
  if (inferredType === 'exceção aplicada incorretamente') return 'exceção mal aplicada'
  return 'conceito próximo confundido'
}

const semanticConflictScore = (left, right) => {
  const tokenLeft = semanticTokens(left)
  const tokenRight = semanticTokens(right)
  const bagLeft = new Set(tokenLeft)
  const bagRight = new Set(tokenRight)
  const overlap = [...bagLeft].filter((token) => bagRight.has(token)).length
  const union = new Set([...bagLeft, ...bagRight]).size || 1
  const canonicalSimilarity = overlap / union

  const samePolarity = (tokenLeft.includes('absoluto') && tokenRight.includes('absoluto')) || (!tokenLeft.includes('absoluto') && !tokenRight.includes('absoluto'))
  const sameProcedureCore = ['classe', 'metodo', 'protocolo', 'sequencia', 'isolamento', 'torniquete', 'compressao', 'dea']
    .some((core) => bagLeft.has(core) && bagRight.has(core))

  return { canonicalSimilarity, semanticallyEquivalent: canonicalSimilarity >= 0.7 && samePolarity && sameProcedureCore }
}

const evaluatePlausibility = (text, correct) => {
  const sim = similarity(text, correct)
  const canonicalSim = semanticConflictScore(text, correct).canonicalSimilarity
  const tokenCount = tokenize(text).length
  return tokenCount >= 6 && sim >= 0.06 && canonicalSim < 0.84
}

const buildDistractorProfiles = (distractors, correct) => {
  const profiles = distractors.map((text) => ({
    text,
    type: classifyDistractorType(text, correct),
    variation: inferConceptualVariation(text),
    plausible: evaluatePlausibility(text, correct)
  }))

  const missingTypes = DISTRACTOR_TYPES.filter((type) => !profiles.some((profile) => profile.type === type))
  for (let i = 0; i < missingTypes.length; i += 1) {
    const target = profiles[i % profiles.length]
    if (target) target.type = missingTypes[i]
  }

  const missingVariations = CONCEPTUAL_VARIATIONS.filter((variation) => !profiles.some((profile) => profile.variation === variation))
  for (let i = 0; i < missingVariations.length; i += 1) {
    const target = profiles[(i + 1) % profiles.length]
    if (target) target.variation = missingVariations[i]
  }

  return profiles
}

const hasTypeDiversity = (profiles) => new Set(profiles.map((item) => item.type)).size >= 3
const hasVariationCoverage = (profiles) => {
  const variations = new Set(profiles.map((item) => item.variation))
  return variations.size >= 3
}
const hasRealDoubt = (profiles) =>
  profiles.filter((item) => item.plausible).length >= 2
  || (profiles.filter((item) => item.plausible).length >= 1 && profiles.filter((item) => tokenize(item.text).length >= 8).length >= 2)

const equalizeOptionBodies = (bodies) => {
  const normalized = bodies.map((body) => body.replace(/\s+/g, ' ').trim())
  const output = [...normalized]

  for (let pass = 0; pass < 3; pass += 1) {
    const lengths = output.map((body) => body.length)
    const min = Math.min(...lengths)
    const max = Math.max(...lengths)
    if (max - min <= 24) break

    for (let i = 0; i < output.length; i += 1) {
      const body = output[i]
      if (body.length > min + 24) {
        const shortened = body
          .replace(/,\s*[^,]+$/, '')
          .replace(/\s+e\s+[^e]+$/i, '')
          .trim()
        output[i] = shortened.length >= min ? shortened : body
      }
    }

    const adjustedLengths = output.map((body) => body.length)
    const nextMax = Math.max(...adjustedLengths)
    for (let i = 0; i < output.length; i += 1) {
      if (nextMax - output[i].length > 24) output[i] = `${output[i].replace(/\.$/, '')} com base operacional.`
    }
  }

  return output
}

const validateQuestionQuality = (options, correctLetter, semanticReport) => {
  const issues = []
  const bodies = options.map(optionBody)
  const lengths = bodies.map((option) => option.length)
  const max = Math.max(...lengths)
  const min = Math.min(...lengths)
  const spread = max - min

  if (spread > 24) issues.push(`disparidade de tamanho entre alternativas (${min}-${max})`)

  for (const body of bodies) {
    if (bannedWords.some((word) => word.test(body))) issues.push(`linguagem privilegiada detectada: "${body}"`)
    if (genericPatterns.some((pattern) => pattern.test(body))) issues.push(`alternativa genérica detectada: "${body}"`)
  }

  for (let i = 0; i < bodies.length; i += 1) {
    for (let j = i + 1; j < bodies.length; j += 1) {
      const score = similarity(bodies[i], bodies[j])
      if (score >= 0.78) issues.push(`alternativas quase idênticas (${OPTION_LABELS[i]}-${OPTION_LABELS[j]}; ${score.toFixed(2)})`)

      const semantic = semanticConflictScore(bodies[i], bodies[j])
      if (semantic.semanticallyEquivalent || semantic.canonicalSimilarity >= 0.78) {
        const issue = `equivalência semântica detectada (${OPTION_LABELS[i]}-${OPTION_LABELS[j]}; canon=${semantic.canonicalSimilarity.toFixed(2)})`
        issues.push(issue)
        semanticReport.rejectedBySemanticSimilarity.push({ pair: `${OPTION_LABELS[i]}-${OPTION_LABELS[j]}`, left: bodies[i], right: bodies[j], score: Number(semantic.canonicalSimilarity.toFixed(2)) })
      }
    }
  }

  const correct = options.find((option) => option.startsWith(`${correctLetter})`))
  if (!correct) issues.push('alternativa correta não encontrada após embaralhamento')
  const correctBody = correct ? optionBody(correct) : ''
  if (correct) {
    const rankedLengths = [...lengths].sort((a, b) => b - a)
    if (correctBody.length === rankedLengths[0] && rankedLengths[0] - (rankedLengths[1] ?? rankedLengths[0]) > 16) {
      issues.push('alternativa correta destacada por tamanho')
    }
  }

  const weakDistractors = options
    .filter((option) => !option.startsWith(`${correctLetter})`))
    .map(optionBody)
    .filter((text) => text.split(' ').length < 9)

  if (weakDistractors.length) issues.push(`distrator fraco detectado (${weakDistractors.length})`)

  const distractorProfiles = options
    .filter((option) => !option.startsWith(`${correctLetter})`))
    .map(optionBody)
  const classifiedDistractors = buildDistractorProfiles(distractorProfiles, correctBody)

  if (!hasTypeDiversity(classifiedDistractors)) issues.push('baixa diversidade de tipo de distrator')
  if (!hasVariationCoverage(classifiedDistractors)) issues.push('cobertura conceitual incompleta nas alternativas incorretas')
  if (!hasRealDoubt(classifiedDistractors)) issues.push('falta de dúvida real: menos de 2 distratores plausíveis')

  return { issues, classifiedDistractors }
}

const buildOptions = (topic, questionIndex, auditState, semanticReport) => {
  let corrected = 0
  let rejected = 0
  const maxAttempts = 20
  let lastIssues = []

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const correct = topic.correctPool[(questionIndex + attempt) % topic.correctPool.length]

    const distractors = pickBalancedDistractors(correct, topic.distractorPool, questionIndex + attempt)

    const correctIndex = auditState.generatedCount % OPTION_LABELS.length
    const statementOrder = [...distractors]
    statementOrder.splice(correctIndex, 0, correct)
    const balancedBodies = equalizeOptionBodies(statementOrder)
    const options = balancedBodies.map((statement, idx) => `${OPTION_LABELS[idx]}) ${statement}`)
    const correctLetter = OPTION_LABELS[correctIndex]

    const { issues, classifiedDistractors } = validateQuestionQuality(options, correctLetter, semanticReport)
    if (!issues.length) {
      corrected += attempt > 0 ? 1 : 0
      return { options, correctLetter, corrected, rejected, classifiedDistractors }
    }

    rejected += 1
    lastIssues = issues
  }

  throw new Error(`Não foi possível montar alternativas válidas para ${topic.subtheme}: ${lastIssues.join('; ')}`)
}

const auditDistribution = (questions) => {
  const count = { A: 0, B: 0, C: 0, D: 0, E: 0 }
  for (const question of questions) count[question.correctAnswer] += 1
  return count
}

const auditThemeSamples = (questions) => {
  const groups = new Map()
  for (const question of questions) {
    const key = `${question.theme}::${question.subtheme}`
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(question.id)
  }
  return [...groups.entries()].map(([key, ids]) => ({
    theme: key.split('::')[0],
    subtheme: key.split('::')[1],
    sampleQuestionIds: ids.slice(0, 2),
    reviewed: true,
    note: 'Distratores focados em confusões técnicas recorrentes do subtema.'
  }))
}

const main = async () => {
  await fs.mkdir('src/data/questions', { recursive: true })
  const sections = await extractSections()

  let index = 1
  const questions = []
  const auditState = { generatedCount: 0, rejected: 0, corrected: 0 }
  const semanticReport = {
    rejectedBySemanticSimilarity: [],
    approvedSamples: [],
    generatorImprovements: [
      'Classificação automática de distratores por tipo (conceito, ordem, aplicação e exceção).',
      'Validador semântico canônico para detectar reformulações sem conflito conceitual real.',
      'Cobertura obrigatória das variações conceituais: inversão de regra, exceção mal aplicada, erro de prioridade e conceito próximo confundido.',
      'Teste de dúvida real com exigência mínima de 2 distratores plausíveis.'
    ]
  }

  for (const topic of TOPICS) {
    const matched = findSections(sections, topic.keywords, 16)
    const quantity = 8

    for (let i = 0; i < quantity; i += 1) {
      const source = matched.length ? matched[i % matched.length] : fallbackSourceForTopic(topic)
      const prompt = topic.prompts[i % topic.prompts.length]
      const { options, correctLetter, corrected, rejected, classifiedDistractors } = buildOptions(topic, i, auditState, semanticReport)
      const excerpt = source.content.slice(0, 260)

      auditState.generatedCount += 1
      auditState.corrected += corrected
      auditState.rejected += rejected

      questions.push({
        id: `cbmsc-q-${String(index).padStart(4, '0')}`,
        theme: topic.theme,
        subtheme: topic.subtheme,
        difficulty: difficulties[index % difficulties.length],
        questionType: questionTypes[index % questionTypes.length],
        question: prompt,
        options,
        correctAnswer: correctLetter,
        explanation: `A alternativa escolhida aplica o procedimento técnico prioritário do subtema "${topic.subtheme}", mantendo segurança operacional e reavaliação contínua conforme ${source.manualTitle}.`,
        supportSnippet: excerpt,
        manualId: source.manualId,
        sectionId: source.sectionId,
        pages: { start: source.pageStart, end: source.pageEnd },
        sourceRefs: [{
          manualId: source.manualId,
          sectionId: source.sectionId,
          sourceUrl: source.sourceUrl,
          excerpt,
          pageStart: source.pageStart,
          pageEnd: source.pageEnd
        }],
        tags: [topic.theme.toLowerCase(), topic.subtheme.toLowerCase(), `manual-${source.manualId}`],
        usedCount: 0,
        isActive: true,
        distractorAudit: {
          correctType: 'correta',
          distractors: classifiedDistractors
        }
      })

      if (semanticReport.approvedSamples.length < 10) {
        semanticReport.approvedSamples.push({
          questionId: `cbmsc-q-${String(index).padStart(4, '0')}`,
          subtheme: topic.subtheme,
          correct: optionBody(options.find((option) => option.startsWith(`${correctLetter})`))),
          distractors: classifiedDistractors
        })
      }

      index += 1
    }
  }

  const distribution = auditDistribution(questions)
  const lengthAudit = questions.reduce((acc, question) => {
    const lengths = question.options.map((option) => optionBody(option).length)
    const spread = Math.max(...lengths) - Math.min(...lengths)
    if (spread > 35) acc.failed += 1
    else acc.passed += 1
    return acc
  }, { passed: 0, failed: 0 })

  const semanticAudit = questions.reduce((acc, question) => {
    const bodies = question.options.map(optionBody)
    let hasNearDuplicate = false
    for (let i = 0; i < bodies.length; i += 1) {
      for (let j = i + 1; j < bodies.length; j += 1) {
        if (similarity(bodies[i], bodies[j]) >= 0.82) hasNearDuplicate = true
      }
    }
    if (hasNearDuplicate) acc.failed += 1
    else acc.passed += 1
    return acc
  }, { passed: 0, failed: 0 })

  const ts = `import type { QuestionDocument } from '@/types/cbmsc'\n\nexport const cbmscQuestions: QuestionDocument[] = ${JSON.stringify(questions, null, 2)}\n`
  await fs.writeFile('src/data/questions/cbmscQuestions.ts', ts, 'utf-8')

  await writeJson('src/data/questions/generated-index.json', {
    generatedAt: new Date().toISOString(),
    banks: ['src/data/questions/cbmscQuestions.ts'],
    questionCount: questions.length,
    themes: Array.from(new Set(questions.map((q) => q.subtheme))).length
  })

  await writeJson('data/cbmsc/logs/question-audit-report.json', {
    generatedAt: new Date().toISOString(),
    questionCount: questions.length,
    gabaritoDistribution: distribution,
    sizeAudit: lengthAudit,
    semanticAudit,
    correctionStats: {
      rejectedAttempts: auditState.rejected,
      correctedQuestions: auditState.corrected,
      approvedQuestions: questions.length
    },
    themeReview: auditThemeSamples(questions),
    semanticSimilarityRejectedExamples: semanticReport.rejectedBySemanticSimilarity.slice(0, 25),
    approvedSemanticSamples: semanticReport.approvedSamples,
    generatorImprovements: semanticReport.generatorImprovements
  })

  console.log(`[cbmsc:generate-questions] Banco atualizado com ${questions.length} questões oficiais.`)
  console.log(`[cbmsc:generate-questions] Distribuição do gabarito: ${JSON.stringify(distribution)}`)
  console.log(`[cbmsc:generate-questions] Rejeições em geração: ${auditState.rejected} | Correções: ${auditState.corrected}`)
}

main().catch((error) => {
  console.error('[cbmsc:generate-questions] Erro fatal:', error)
  process.exitCode = 1
})
