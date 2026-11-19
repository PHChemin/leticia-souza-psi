/**
 * Textos da one-page, na voz da Letícia.
 * Para trocar um texto, basta editar aqui.
 */

export const hero = {
  role: "Psicóloga clínica",
  phrase:
    "Um espaço seguro de escuta, cuidado e acolhimento. Tratamento para TOC e ansiedade.",
  cta: "Entre em contato!",
};

export const sobre = {
  title: "Sobre mim",
  paragraphs: [
    "Olá! Prazer em ter você aqui. Meu nome é Letícia Souza, sou psicóloga graduada pela Universidade Federal do Triângulo Mineiro (UFTM). Sou pós-graduanda em Psicologia Clínica Fenomenológica-Existencial pelo Instituto NUCAFE. Também sou pós-graduada em Psicologia da Saúde e Rede de Atenção Psicossocial pela Faculdade Iguaçu.",
    "Meu trabalho é orientado pela escuta atenta e qualificada e pelo respeito à história de vida de cada pessoa, sem julgamentos de qualquer tipo. Na minha trajetória, tenho ampla experiência com TOC, transtornos ansiosos e comportamentos repetitivos voltados ao corpo (BFRBs, em inglês).",
  ],
  facts: [
    { label: "Registro", value: "CRP 06/229667" },
    { label: "Atuação", value: "Psicologia clínica" },
    { label: "Formato", value: "Atendimento online" },
  ],
};

export const formacao = {
  title: "Meu itinerário acadêmico-profissional",
  lattes: "Ver currículo Lattes",
  items: [
    {
      title: "Graduação em Psicologia",
      notes: [
        "Universidade Federal do Triângulo Mineiro (UFTM)",
        "Pesquisa acadêmica concluída sobre TOC e gênero, na perspectiva interseccional.",
      ],
    },
    {
      title: "Pós-graduanda em Psicologia Clínica Fenomenológica-Existencial",
      notes: ["Instituto NUCAFE"],
    },
    {
      title: "Especialização em Psicologia da Saúde",
      notes: ["Faculdade Iguaçu"],
    },
    {
      title:
        "Especialização em Rede de Atenção Psicossocial com Enfoque em Centros de Atenção Psicossocial",
      notes: ["Faculdade Iguaçu"],
    },
  ],
};

export const abordagem = {
  title: "Abordagem",
  quote: "Fenomenologia-existencial",
  paragraphs: [
    "No meu trabalho, eu me oriento pela Psicologia Fenomenológico-Existencial. Esta abordagem compreende cada pessoa como única, buscando aproximar-se do modo como cada sujeito vivencia suas possibilidades de escolha na existência. É uma abordagem sensível, cuja principal característica se volta em despir-se dos pré-julgamentos sobre o outro.",
    "A terapia, assim, é um espaço de acolhimento e transformação, onde você pode olhar para suas experiências, compreender seus sentimentos e construir novas significações, respeitando seu próprio tempo e particularidades. Um convite ao experienciar!",
  ],
};

export const servicos = {
  title: "Meus serviços",
  items: [
    {
      title: "Atendimento psicológico online",
      text: "Sessões semanais ou quinzenais para pessoas a partir dos 14 anos.",
    },
    {
      title: "Tratamento para TOC",
      text: "Acompanhamento personalizado com foco no transtorno, oferecendo escuta qualificada e ferramentas para alcançar mais qualidade de vida.",
    },
    {
      title: "Palestras para escolas, empresas e demais instituições",
      text: "Ofereço palestras e rodas de conversa para públicos de diferentes faixas etárias, versando sobre temas como saúde mental e autocuidado.",
    },
  ],
};

/** Seção própria, logo depois de Meus serviços. "Para quem é o tratamento" fica de fora por enquanto. */
export const tratamento = {
  title: "Tratamento para TOC",
  paragraphs: [
    "Sabemos quantos estigmas e quantas ideias errôneas permeiam o Transtorno Obsessivo-Compulsivo (TOC), que pode se tornar extremamente incapacitante para quem o vivencia.",
    "Aqui, estabelecemos um ambiente sem julgamentos, com empatia e ciência. O tratamento se dá de maneira individualizada, compreendendo a maneira que seu TOC se manifesta. Construiremos estratégias para enfrentar os medos, com muito respeito aos seus limites e identificando suas potências no processo.",
  ],
  manifestacoesTitle: "Como o TOC pode se manifestar?",
  manifestacoes: [
    {
      name: "Contaminação e limpeza",
      text: "Medo intenso de germes, doenças, sujeira ou contaminação, acompanhado ou não de lavagens e limpezas excessivas.",
    },
    {
      name: "Verificação",
      text: "Necessidade repetitiva de conferir portas, tomadas, aparelhos, tarefas ou situações.",
    },
    {
      name: "Pensamentos intrusivos e obsessões de conteúdo agressivo ou sexual",
      text: "Pensamentos, imagens, palavras ou ideias que não condizem com valores pessoais e que aparecem com frequência, levando a sofrimento e medos.",
    },
    {
      name: "Culpa intensa e medo de causar danos",
      text: "Preocupação persistente e responsabilidade excessiva, apresentando medo de ter cometido algum erro ou prejudicado alguém.",
    },
    {
      name: "Dúvidas e necessidade de certeza",
      text: "Questionamentos, revisões de pensamentos/ ações e busca por garantias, por medo de ter cometido alguma falha, sendo esta intolerável para si.",
    },
    {
      name: "Compulsões mentais",
      text: "Rituais realizados internamente, como repetir frases, contar, rezar ou revisar mentalmente acontecimentos.",
    },
  ],
};

export const paraQuem = {
  title: "Para quem é o atendimento",
  items: [
    {
      name: "Adolescentes",
      color: "var(--color-lavanda)",
      tint: 38,
      text: "A adolescência é repleta de transformações pessoais e descobertas. É um momento em que surgem novas vivências, questionamentos e desafios relacionados à identidade, às relações e ao lugar que se ocupa no mundo. A psicoterapia é um espaço potente para acolher tais transformações e explorar novas possibilidades do ser. Um espaço em que é possível se permitir questionar e construir seus próprios caminhos.",
    },
    {
      name: "Adultos",
      color: "var(--color-oliva)",
      tint: 24,
      text: "A vida adulta é atravessada por escolhas, responsabilidades e mudanças que podem despertar diferentes sentimentos e dúvidas. A psicoterapia é um espaço para falar sobre aquilo que incomoda, compreender novas e antigas experiências e encontrar caminhos possíveis, respeitando sua singularidade.",
    },
    {
      name: "Idosos",
      color: "var(--color-terracota)",
      tint: 30,
      text: "O envelhecimento é uma fase marcada por novos desafios, sejam eles relacionados à saúde, às relações familiares e até a mudanças na rotina. Também abrem-se novas possibilidades de construção de sentidos. O acompanhamento psicológico olhará para suas potencialidades e dificuldades, valorizando sua história e oferecendo suporte em todo processo terapêutico.",
    },
  ],
};

export const como = {
  title: "Como funciona o atendimento",
  steps: [
    {
      title: "Primeiro contato",
      text: "Você entra em contato comigo através do WhatsApp ou e-mail e eu tiro todas as suas dúvidas sobre as sessões. Conversamos sobre expectativas acerca do atendimento, valores e disponibilidade de horários e agendamos sua sessão.",
    },
    {
      title: "Preenchimento de formulário",
      text: "Após o primeiro contato, eu envio um formulário para que você responda com dados sobre você e para que os horários sejam formalizados. Com essas respostas, organizo nosso contrato.",
    },
    {
      title: "Primeira sessão e acompanhamento",
      text: "A primeira sessão é um momento em que nos conhecemos e você me conta a sua demanda de forma detalhada. Detalhamos também a frequência das sessões.",
    },
  ],
};

export const online = {
  title: "Atendimento online",
  paragraph:
    "Os atendimentos online funcionam de forma semelhante ao atendimento presencial. Definimos o melhor horário e, com 10 minutos de antecedência, eu envio o link para a chamada. Não é necessário ter câmera e microfones profissionais, o que é realmente preciso é que consigamos interagir de forma compreensível para ambas(os).",
  facts: [
    { label: "Plataforma", value: "Google Meet" },
    { label: "Duração da sessão", value: "50 minutos a 1 hora" },
    {
      label: "O que a pessoa precisa",
      value: "Internet estável, espaço com privacidade, câmera e microfone.",
    },
  ],
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "Como funcionam os atendimentos?",
      a: "Trabalho com psicoterapia na modalidade online. As sessões podem ser semanais ou quinzenais, a depender das necessidades e das particularidades de cada pessoa.",
    },
    {
      q: "Como é a primeira sessão?",
      a: "Na primeira sessão, vamos nos conhecer. Você me conta as suas demandas, angústias e os motivos por ter buscado a psicoterapia. Eu me apresento, tiro todas as suas dúvidas e entenderemos como o processo terapêutico se desenhará a partir daí.",
    },
    {
      q: "Quanto tempo dura cada sessão?",
      a: "As sessões têm duração de 50 minutos a 1 hora.",
    },
    {
      q: "O atendimento online funciona mesmo?",
      a: "Sim! O atendimento online é extremamente viável e apresenta os mesmos efeitos de um atendimento presencial para a grande maioria dos casos. É necessário apenas que você tenha Internet estável e um lugar com privacidade em que possa falar com tranquilidade.",
    },
    {
      q: "Atende adolescentes?",
      a: "Sim, atendo o público que se encontra na faixa etária dos 14 a 17 anos. É preciso destacar, nesse sentido, que, para realizar o atendimento a adolescentes, é necessária uma autorização formal e por escrito de pelo menos uma/um responsável legal, conforme estabelece o Artigo 8º do Código de Ética e a Resolução CFP nº 13/2022. Cabe ressaltar também que o sigilo profissional é direito de crianças e adolescentes e deve ser preservado. Quando a quebra de sigilo se fizer necessária, deve acontecer com o único objetivo de proteger a pessoa atendida.",
    },
    {
      q: "As sessões são sigilosas?",
      a: "Sim, com certeza! Enquanto psicóloga, tenho o dever de garantir o sigilo das sessões e de tudo o que é relatado. O que você conta fica só entre a gente e de forma alguma assumirei uma postura de julgamento, em nenhum momento.",
    },
  ],
};

export const contato = {
  title: "Contato",
  headline: "Entre em contato!",
  text: "Estou aqui para te ouvir!",
};
