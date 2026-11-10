/**
 * VERSÃO ALPHA — os textos de corpo abaixo são recados para a Letícia
 * (o que ela pode escrever em cada espaço). Os textos reais vêm dela.
 * Os títulos são os nomes de seção que ela escolheu.
 * Para trocar um texto, basta editar aqui.
 */

export const hero = {
  role: "Psicóloga clínica",
  phrase: "Atendimentos online para adolescentes, adultos e idosos.",
  cta: "Entre em contato!",
}

export const sobre = {
  title: "Sobre mim",
  paragraphs: [
    "Aqui você pode contar quem é a Letícia por trás do consultório: de onde veio, o que a levou até a psicologia e o que te move no dia a dia. Escreva como se estivesse conversando com alguém que acabou de chegar.",
    "Se quiser, aproveite também para dizer o que a pessoa pode esperar de você logo no primeiro contato. Dois ou três parágrafos curtos já bastam.",
  ],
  facts: [
    { label: "Registro", value: "CRP 06/229667" },
    { label: "Atuação", value: "Psicologia clínica" },
    { label: "Formato", value: "Atendimento online" },
  ],
}

export const formacao = {
  title: "Formação",
  intro:
    "Use este espaço para listar sua graduação, suas especializações e os cursos que você considera importantes. Pode ser uma lista curta ou longa.",
  items: [
    { year: "Ano", title: "Graduação em Psicologia", note: "Aqui entram o curso e a instituição." },
    { year: "Ano", title: "Especialização", note: "Conte qual foi e onde você fez, se quiser." },
    { year: "Ano", title: "Pós-graduação ou mestrado", note: "Se não houver, é só tirarmos este bloco." },
    { year: "Ano", title: "Cursos de aperfeiçoamento", note: "Os que você quer destacar para quem está chegando." },
    { year: "Ano", title: "Supervisão e grupos de estudo", note: "Aqui cabe o que você faz para continuar aprendendo." },
  ],
  lattes: "Ver currículo Lattes",
}

export const abordagem = {
  title: "Abordagem",
  quote: "Aqui vai uma frase sua que resuma como você trabalha.",
  paragraphs: [
    "Conte qual abordagem você segue e como ela aparece nas sessões. Pode usar o termo técnico, desde que logo depois explique em uma frase o que ele significa.",
    "Pense em quem está lendo: alguém que talvez nunca tenha feito terapia e quer entender, sem pressa, como é trabalhar com você.",
  ],
}

export const servicos = {
  title: "Meus serviços",
  items: [
    {
      title: "Seu serviço principal",
      text: "Descreva aqui o que você oferece, para quem e como é o acompanhamento. Duas ou três linhas já são suficientes.",
    },
    {
      title: "Outro serviço, se houver",
      text: "Use este espaço para um segundo tipo de atendimento. Se você oferece só um, podemos tirar este bloco.",
    },
    {
      title: "Mais um, se fizer sentido",
      text: "Mesma ideia: nome curto e uma explicação simples do que a pessoa recebe.",
    },
  ],
}

export const paraQuem = {
  title: "Para quem é o atendimento",
  items: [
    {
      name: "Adolescentes",
      color: "var(--color-lavanda)",
      tint: 38,
      text: "Aqui você pode falar do que costuma trazer quem chega nessa fase e de como o seu atendimento se adapta a ela.",
    },
    {
      name: "Adultos",
      color: "var(--color-oliva)",
      tint: 24,
      text: "Conte que momentos costumam levar um adulto a procurar terapia e o que ele encontra no seu atendimento.",
    },
    {
      name: "Idosos",
      color: "var(--color-terracota)",
      tint: 30,
      text: "Fale do cuidado que essa fase pede e de como o formato online funciona para quem tem mais de 60 anos.",
    },
  ],
}

export const como = {
  title: "Como funciona o atendimento",
  steps: [
    { title: "Primeiro contato", text: "Conte como a pessoa começa: pelo WhatsApp, por indicação ou por outro caminho." },
    { title: "Conversa inicial", text: "Explique o que acontece no primeiro encontro e o que a pessoa precisa levar." },
    { title: "Sessões", text: "Fale da duração e da frequência, ou diga que vocês combinam juntas." },
    { title: "Acompanhamento", text: "Diga como vocês revisam o caminho ao longo do tempo." },
  ],
}

export const online = {
  title: "Atendimento online",
  paragraph:
    "Fale aqui como funciona o atendimento online: por qual plataforma, o que a pessoa precisa ter em casa e o que você faz para que a sessão seja tão acolhedora quanto uma presencial.",
  facts: [
    { label: "Plataforma", value: "Você informa" },
    { label: "Duração da sessão", value: "Você informa" },
    { label: "O que a pessoa precisa", value: "Internet estável e um canto reservado" },
  ],
}

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "Como é a primeira sessão?",
      a: "Escreva aqui a sua resposta, em poucas linhas e sem termos difíceis. As perguntas são sugestões: pode trocar, tirar ou incluir outras.",
    },
    {
      q: "Quanto tempo dura cada sessão?",
      a: "Escreva aqui a sua resposta, em poucas linhas e sem termos difíceis.",
    },
    {
      q: "O atendimento online funciona mesmo?",
      a: "Escreva aqui a sua resposta. Vale explicar com calma, sem simplificar demais.",
    },
    {
      q: "Atende adolescentes e idosos?",
      a: "Escreva aqui a sua resposta, contando o que muda no atendimento de cada fase.",
    },
    {
      q: "As sessões são sigilosas?",
      a: "Escreva aqui a sua resposta, com base no código de ética da profissão.",
    },
  ],
}

export const contato = {
  title: "Contato",
  headline: "Entre em contato!",
  text: "Aqui cabe uma frase sua de convite, no tom que você quiser. Se preferir, tiramos esse texto e deixamos só os botões.",
}
