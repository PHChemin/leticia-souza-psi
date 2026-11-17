/** Contatos da one-page. Artigo ainda sem URL — não entra na página. */
export const links = {
  whatsapp:
    "https://wa.me/5534997364975?text=" +
    encodeURIComponent(
      "Olá, Letícia. Vim pelo seu site e gostaria de conversar sobre atendimento.",
    ),
  email: "mailto:leticia.apst16@gmail.com",
  instagram: "https://www.instagram.com/leticia.souzapsi",
  lattes: "https://lattes.cnpq.br/1069249404080267",
} as const

export const nav = [
  { href: "#sobre", id: "sobre", label: "Sobre mim" },
  { href: "#abordagem", id: "abordagem", label: "Abordagem" },
  { href: "#servicos", id: "servicos", label: "Serviços" },
  { href: "#online", id: "online", label: "Atendimento" },
  { href: "#perguntas", id: "perguntas", label: "Perguntas" },
] as const
