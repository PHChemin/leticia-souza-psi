# Direção de arte

Identidade já aprovada pela cliente (SVG em `leticia-souza-psi-bio/identidade/`, só local; pranchas em `identidade/4.png` a `identidade/8.png` neste repo, também só local). A one-page herda a direção da bio (`leticia-souza-psi-bio`, aprovada em 2026-11-05 e ajustada em 8 rodadas). Não há paleta alternativa: lavanda, oliva, terracota, baunilha e ameixa, com Lora e Poppins, estão fechadas. O trabalho aqui é estender essa linguagem para várias seções sem perder a leveza da bio.

## Hipóteses

- Esta página é a one-page institucional, em `www.psicologaleticiasouza.com.br`. A bio fica em `links.psicologaleticiasouza.com.br`.
- Público: adolescentes, adultos e idosos que procuram atendimento online.
- Tom pedido: acolhedora, marcante, nítida.
- Não pode parecer fria, carregada de informação ou confusa. Numa página com scroll isso pesa mais: poucas seções, uma função por seção, muito respiro.
- Clima de referência: a luz que entra no jardim do Shopping Galleria, em Campinas. Clareza e cores que conversam, como no Instagram da Maitê Sartori.
- Faixa de preço não informada. CRP 06/229667, no rodapé. E-mail não informado.
- Artigo ainda sem URL — fica de fora até existir.
- Seções confirmadas pela cliente: Sobre mim, Formação, Abordagem, Meus serviços, Para quem é o atendimento, Como funciona o atendimento, Atendimento online, Perguntas frequentes, Contato. São nove: o risco de "carregada de informações" é real, então cada seção tem uma função e "Para quem", "Como funciona" e "Atendimento online" podem ficar próximas ou se fundir visualmente. Textos ainda a receber.
- Diferente da bio, a one-page tem fotos: ensaio de 11 fotos em `public/images/`. Fundo bege e luz quente lateral, que conversam com a baunilha e com a "luz que entra" do Galleria. As fotos são dela, não de banco, então entram sem ferir a restrição de elementos figurativos.
- O livro nas fotos (*Fundamentos de Clínica Fenomenológica*) sugere abordagem fenomenológica — confirmar com o texto de Abordagem antes de usar.
- Respostas visuais da cliente para a one-page conferem com as da bio (mesmas três palavras, mesmo "não", Galleria, Maitê Sartori, mesmos clichês a evitar).
- Lavanda, terracota e oliva não servem para texto pequeno: contraste insuficiente sobre a baunilha. Texto e botão principal usam o ameixa ou os derivados escuros.

## Universo do tema

| Objetos | Materiais / texturas | Gestos / processos | Lugares / luz | Vocabulário |
| --- | --- | --- | --- | --- |
| broto, duas folhas, chão ondulado | papel baunilha, folha de oliva, terra | chegar, conversar, permanecer, crescer da raiz | jardim interno do Galleria, luz de dia | atendimento online, adolescentes, adultos, idosos, psicóloga clínica |

**Clichê do segmento a evitar:** cérebro, quebra-cabeça, desenho de psicólogo desenmaranhando pensamentos, fundo lilás. A lavanda aparece só em traço fino e em luz de canto, nunca como fundo.

Na one-page isso vale para todas as seções, não só o hero: nada de ilustração, ícone ou foto de banco que remeta a esses clichês em serviços, abordagem ou FAQ.

**Restrição da cliente:** nada de elementos figurativos (símbolos, objetos, ícones decorativos). Só linha, luz e tipografia. Ícones só quando funcionais (WhatsApp, Instagram, Lattes).

**Ideia central:** a luz que entra no jardim, e o símbolo dela — uma planta crescendo da raiz — como história da página. A cliente gosta dessa leitura do símbolo.

## Direção escolhida (herdada da bio)

- **Conceito:** um claro de jardim. Na bio, o broto no centro e o contato logo abaixo; na one-page, o mesmo claro abre o hero e as seções seguem como caminhos do jardim, com muito respiro entre elas.
- **Paleta:** `#FFFFFF` (fundo) · `#F4E8D8` baunilha (superfícies fora do fundo) · `#59444C` ameixa (texto) · `#798467` oliva · `#C58E7C` terracota · `#BDA7D5` lavanda. Derivados para contraste: `#5F6B4F` oliva funda (botão WhatsApp e "Psicóloga clínica", 4,7:1 com baunilha), `#4C5640` oliva noite (hover do WhatsApp) e `#F0D6C9` blush (terracota clara, hover dos botões secundários, 5,4:1 com ameixa). Lavanda: linhas finas e luz de canto.
- **Tipografia:** Lora no nome (grande, uma linha) e Lora itálico em frases. Poppins em caixa alta espaçada em rótulos e funções ("Psicóloga clínica", "Entre em contato!"), Poppins nos botões e no corpo. Fontes locais via `@fontsource` (Lora 500 e 400 itálico; Poppins 400, 500 e 600) — sem Google Fonts.
- **Voz dos textos:** como no Instagram da Maitê Sartori — explicação técnica, mas curta e acessível; nem maçante, nem simplista. Os textos são da cliente; nós harmonizamos tamanho, ritmo e termos entre as seções (títulos curtos em Lora, corpo em Poppins com parágrafos de 2–4 linhas, termo técnico seguido de uma frase que o traduz). Títulos com a voz dela, não "Nossos serviços" / "Saiba mais".
- **Hero:** full-bleed, com símbolo, Letícia Souza, Psicóloga clínica, a frase dela e o CTA do WhatsApp. Na one-page o hero deixa de concentrar os três links: WhatsApp é o CTA principal; Instagram e Lattes podem descer para o rodapé ou para a seção de contato.
- **Momento assinatura:** o mesmo da bio. Duas linhas lavanda no alto, amplitude baixa, respirando juntas num ciclo de 48 s. Por trás, o símbolo em 17% de opacidade cresce da raiz uma vez na chegada (chão abre, caule sobe, folhas abrem da junção, a luz lavanda chega por último, ~7 s) e depois balança devagar. Peças recortadas das máscaras originais do vetor em `leticia-souza-psi-bio/public/grow/` (`ground`, `stem`, `leaf-left`, `leaf-right`). Já portado para este repo (`src/components/site/growing-mark.tsx`, `public/grow/`, classes `.grow-*` em `src/styles/main.css`). Onde usar ainda está em aberto: fundo fixo como na bio, só no hero, ou numa seção específica (ex.: Sobre mim). Em qualquer caso, aparece em um só lugar — não se repete pelas seções.
- **Botões:** pílula. WhatsApp em oliva funda com uma onda de oliva noite no pé; no hover a onda sobe e preenche. Secundários (Instagram, Lattes) com borda terracota e ícone em traço (Instagram, capelo para o Lattes); no hover sobe uma onda blush. Divisores usam a mesma onda em traço.
- **Componentes a portar da bio** (`leticia-souza-psi-bio/src/components/site/`; `GrowingMark` e `asset.ts` já vieram): `FlowLines`, `WhatsAppCta`, `LinkButton`, `link-icons`, `Reveal`, mais `src/lib/asset.ts`, `src/lib/links.ts` e os tokens de `src/styles/main.css`. Sem partículas, grade, carrossel ou cards decorativos — isso carregaria a página.
- **Risco:** a baunilha com serifa pode lembrar página genérica de bem-estar, e numa página longa esse risco cresce. O símbolo, o ameixa no texto e o oliva no CTA seguram a marca dela. Se ficar claro demais, aumentar o broto ou a presença da tipografia, não acrescentar seções nem efeitos.

## Aprendizados da bio (valem aqui)

- Movimento agitado gera nervosismo: poucas linhas, amplitude baixa, mesmo ritmo para todas, sem ondulação secundária.
- Linhas e faixas na parte de baixo poluíram; o único "chão" é o do próprio símbolo.
- Fundo branco puro (`#FFFFFF`), não off-white.
- Mobile: elementos de fundo passam da largura da tela — usar `overflow-x: clip` no `html`/`body`, `overflow="hidden"` no SVG e `contain: paint` nas camadas de fundo. Evitar `pathLength`/`vector-effect` em SVG animado (falham no Safari do iPhone). Manter linhas fora do notch e da barra do navegador.
- Explorar o verde e o rosa da paleta, senão o site fica só baunilha e marrom.

## Escolhida

Direção: identidade aprovada, claro de jardim (herdada da bio). Motivo: paleta, fontes e linguagem visual já aprovadas na bio; a one-page muda só o necessário para ter seções. Data: 2026-11-10.

## Histórico de feedback

Histórico completo da bio (8 rodadas) em `leticia-souza-psi-bio/docs/ART_DIRECTION.md`.

| Rodada | Cliente disse | O que mudou | Resultado |
| --- | --- | --- | --- |
| 1 | (interno) Manter a direção visual da bio, mudando só o necessário para one-page. | Docs preenchidos a partir da bio. | Aguardando briefing da one-page. |
| 2 | Briefing da one-page: mesmas respostas visuais da bio; nove seções (sem valores, convênios, horários, localização). (interno) Textos técnicos sem ser maçantes, no tom da Maitê Sartori; evitar clichês em todas as seções; trazer a animação do símbolo. | Seções e voz dos textos registradas; `GrowingMark` portado com as peças e o CSS; paleta da cliente nos tokens. | Aguardando textos e decisão de onde usar a animação. |
| 3 | (interno) Versão alpha da one-page: seções, visual e fotos, com texto provisório para a cliente reagir ao layout. | Hero com foto à direita e borda ondulada (o "chão" do símbolo); `GrowingMark` e `FlowLines` só no hero; faixas com borda ondulada em ameixa (Abordagem), baunilha (Para quem) e verde-claro `#E9EDE0` (Atendimento online); fotos com borda inferior ondulada; Formação como linha com a "luz" lavanda no último item; FAQ em acordeão; textos em `src/content.ts`. | Aguardando feedback e textos. |
| 4 | (interno, PH) Ondas repetidas nas fotos e faixas não davam acolhimento; ondulado nos títulos era detalhe da bio, não pedido dela; textos mal escritos; WhatsApp repetido e solto em Serviços; faltavam redes no Sobre mim; header sem nome. | Ondas removidas de fotos, faixas e títulos. Fotos com cantos macios e um bloco de cor deslocado atrás (arco só no contato); faixas viram painéis arredondados; título com um ponto lavanda (a "luz" do símbolo); header só com o símbolo; Formação e Perguntas com coluna esquerda fixa; WhatsApp em Serviços virou link de texto; Sobre mim ganhou links discretos (Instagram, Lattes, WhatsApp); textos viraram recados para a Letícia. | Aguardando feedback. |
| 5 | (interno, PH) Espaçamento exagerado; faixas devem ir de borda a borda; rodapé estranho; ponto nos títulos ruim; Lattes só na Formação; fade no fim do hero; fotos repetitivas; inspirar-se no PDF da identidade. | Espaços reduzidos (~18% menos altura). Faixas de ponta a ponta; rodapé ameixa compacto. Cada título ganha um glifo (eu, ↑, “, +, &, ↓, @, ?, !). Folhas fantasma e círculos de fundo, como na capa do PDF; cartões altos de topo arredondado em Para quem, como as amostras de cor. Fotos: hero com fade, Sobre com foto + círculo, Abordagem em círculo com anéis e o ponto lavanda, Online maior, Contato em arco. Lattes só na Formação. | Aguardando feedback. |

## Apostas da versão alpha (validar com a cliente)

- Onda do chão do símbolo ficou só nos botões (hover); fora disso não se repete mais.
- Animação do broto só no hero, atrás do nome, e não de fundo fixo como na bio (as faixas coloridas esconderiam um fundo fixo).
- Faixa ameixa cheia na Abordagem: é a seção mais escura e a de maior contraste da página.
- Cor extra derivada: verde-claro `#E9EDE0` (oliva diluído) só na faixa de Atendimento online.
- Foto do livro em Abordagem: sugere fenomenologia, a confirmar com o texto dela.
- Fotos não usadas: `img-6394`, `img-6424`, `img-6426`, `img-6435`, `img-6442`, `img-6443`.
