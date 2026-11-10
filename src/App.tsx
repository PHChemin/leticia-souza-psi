import type { CSSProperties } from "react"

import { GhostLeaf } from "@/components/site/ghost-leaf"
import { FlowLines } from "@/components/site/flow-lines"
import { GrowingMark } from "@/components/site/growing-mark"
import { InstagramIcon, LattesIcon, WhatsAppIcon } from "@/components/site/link-icons"
import { LinkButton } from "@/components/site/link-button"
import { Photo } from "@/components/site/photo"
import { Reveal } from "@/components/site/reveal"
import { Body, Section, SectionHead, TextLink } from "@/components/site/section"
import { SiteHeader } from "@/components/site/site-header"
import { WhatsAppCta } from "@/components/site/whatsapp-cta"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  abordagem,
  como,
  contato,
  faq,
  formacao,
  hero,
  online,
  paraQuem,
  servicos,
  sobre,
} from "@/content"
import { asset } from "@/lib/asset"
import { links, nav } from "@/lib/links"

const step = (n: number) => ({ "--step": n }) as CSSProperties

export default function App() {
  const year = new Date().getFullYear()

  return (
    <div className="relative isolate overflow-x-clip bg-neve text-ameixa">
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ameixa focus:px-4 focus:py-2 focus:text-neve"
      >
        Ir para o conteúdo
      </a>

      <SiteHeader
        brand={
          <>
            <img src={asset("logo-mark.png")} alt="" width={64} height={64} className="size-8" />
            <span className="sr-only">Letícia Souza, psicóloga clínica. Ir para o início</span>
          </>
        }
        links={nav}
        cta={<WhatsAppCta size="md" />}
        menuDescription="Navegue pelas seções"
      />

      {/* ——— Hero ——— */}
      <header id="conteudo" className="hero-light relative flex min-h-svh flex-col overflow-hidden lg:flex-row lg:items-center">
        <FlowLines />
        <div className="pointer-events-none absolute inset-0 overflow-hidden [contain:paint]" aria-hidden>
          <GrowingMark className="bottom-[4%] -left-[14%] w-[128%] lg:-left-[6%] lg:bottom-[2%] lg:h-[84%] lg:w-auto" />
        </div>

        <div className="rise hero-photo-fade relative z-10 h-[46svh] w-full shrink-0 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[46%]">
          <Photo
            name="img-6399"
            alt="Letícia Souza, psicóloga clínica, sorrindo e olhando para cima."
            shape="hero"
            priority
            className="size-full"
            imgClassName="object-[50%_18%] lg:object-[50%_20%]"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pt-4 pb-14 text-center lg:items-start lg:px-10 lg:pr-[48%] lg:pt-24 lg:pb-20 lg:text-left">
          <h1
            className="rise font-display text-[clamp(2.75rem,12.4vw,4.75rem)] leading-[0.95] font-medium tracking-[-0.025em] whitespace-nowrap lg:text-[clamp(4rem,6.6vw,7rem)]"
            style={step(1)}
          >
            Letícia Souza
          </h1>
          <p
            className="rise mt-4 text-[0.68rem] font-semibold tracking-[0.42em] text-oliva-funda uppercase sm:text-[0.8rem] lg:mt-6"
            style={step(2)}
          >
            {hero.role}
          </p>
          <p
            className="rise mt-6 max-w-[19rem] font-display text-[1.3rem] leading-snug italic sm:max-w-[24rem] sm:text-2xl lg:mt-9 lg:text-[1.75rem]"
            style={step(3)}
          >
            {hero.phrase}
          </p>
          <div className="rise mt-8 flex w-full max-w-xs flex-col gap-3 lg:mt-11 lg:max-w-sm" style={step(4)}>
            <WhatsAppCta label={hero.cta} className="w-full" />
          </div>
        </div>
        <div className="hero-blur" aria-hidden />
        <div className="hero-fade" aria-hidden />
      </header>

      <main>
        {/* ——— Sobre mim ——— */}
        <Section
          id="sobre"
          deco={<GhostLeaf className="-right-28 -top-10 w-[30rem] rotate-[8deg] text-lavanda/15" />}
        >
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <Photo
                name="img-6409"
                alt="Letícia sentada em blocos brancos, de casaco claro, sorrindo."
                backing="bg-baunilha"
                className="aspect-[4/5] w-full"
                imgClassName="object-[50%_30%]"
              />
            </Reveal>
            <div className="lg:col-span-7">
              <SectionHead title={sobre.title} />
              <Reveal delay={80} className="mt-6 flex max-w-xl flex-col gap-4">
                {sobre.paragraphs.map((p) => (
                  <Body key={p}>{p}</Body>
                ))}
              </Reveal>
              <Reveal delay={140}>
                <dl className="mt-8 grid max-w-xl grid-cols-1 gap-5 border-t border-ameixa/15 pt-6 sm:grid-cols-3">
                  {sobre.facts.map((f) => (
                    <div key={f.label}>
                      <dt className="text-[0.68rem] font-semibold tracking-[0.3em] text-oliva-funda uppercase">
                        {f.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-lg leading-snug">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={200} className="mt-6 flex flex-wrap gap-x-7 gap-y-4 text-ameixa">
                <TextLink href={links.instagram} icon={<InstagramIcon />}>
                  Instagram
                </TextLink>
                <TextLink href={links.whatsapp} icon={<WhatsAppIcon />}>
                  WhatsApp
                </TextLink>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ——— Formação ——— */}
        <Section
          id="formacao"
          deco={<GhostLeaf className="top-1/3 -left-40 w-[24rem] -scale-x-100 text-oliva/[0.08]" />}
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionHead title={formacao.title} />
                <Reveal delay={80} className="mt-4 max-w-sm">
                  <Body>{formacao.intro}</Body>
                </Reveal>
                <Reveal delay={120} className="mt-6">
                  <TextLink href={links.lattes} icon={<LattesIcon />}>
                    {formacao.lattes}
                  </TextLink>
                </Reveal>
              </div>
            </div>
            <ol className="relative lg:col-span-7">
              <span className="absolute top-3 bottom-3 left-[0.45rem] w-px bg-oliva/60" aria-hidden />
              {formacao.items.map((item, i) => {
                const last = i === formacao.items.length - 1
                return (
                  <Reveal as="li" key={item.title} delay={i * 90} className="relative pb-7 pl-10 last:pb-0">
                    <span
                      className={
                        last
                          ? "absolute top-1.5 left-0 size-[0.95rem] rounded-full bg-lavanda"
                          : "absolute top-2 left-[0.12rem] size-[0.65rem] rounded-full bg-oliva"
                      }
                      aria-hidden
                    />
                    <p className="text-[0.7rem] font-semibold tracking-[0.3em] text-oliva-funda uppercase">
                      {item.year}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl leading-tight font-medium sm:text-[1.7rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.98rem] leading-relaxed">{item.note}</p>
                  </Reveal>
                )
              })}
            </ol>
          </div>
        </Section>

        {/* ——— Abordagem ——— */}
        <Section
          id="abordagem"
          band="ameixa"
          deco={
            <>
              <GhostLeaf className="-bottom-10 -left-24 w-[24rem] text-baunilha/[0.06]" />
              <span className="absolute -top-28 -right-28 size-80 rounded-full bg-terracota/15" />
            </>
          }
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:order-2 lg:col-span-5">
              <Reveal>
                {/* Anéis em volta da foto, como ondas de uma gota, e o ponto lavanda do símbolo. */}
                <div className="relative mx-auto aspect-square w-[78%] max-w-[26rem] lg:w-[88%]">
                  <span className="absolute -inset-[7%] rounded-full border border-terracota/60" aria-hidden />
                  <span className="absolute -inset-[15%] rounded-full border border-lavanda/35" aria-hidden />
                  <span className="absolute -inset-[24%] rounded-full border border-baunilha/10" aria-hidden />
                  <Photo
                    name="img-6437"
                    alt="Letícia sorrindo atrás do livro Fundamentos de Clínica Fenomenológica."
                    shape="circle"
                    className="size-full"
                    imgClassName="object-[44%_38%]"
                  />
                  <span
                    className="absolute top-[3%] right-[6%] size-9 rounded-full bg-lavanda shadow-[0_0_0_6px_var(--color-ameixa)] lg:size-11"
                    aria-hidden
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:order-1 lg:col-span-7">
              <SectionHead title={abordagem.title} glyph="“" glyphClassName="text-lavanda" />
              <Reveal delay={80}>
                <p className="mt-6 max-w-lg font-display text-[1.5rem] leading-snug text-blush italic sm:text-[1.85rem]">
                  {abordagem.quote}
                </p>
              </Reveal>
              <Reveal delay={140} className="mt-6 flex max-w-xl flex-col gap-4">
                {abordagem.paragraphs.map((p) => (
                  <Body key={p} className="text-baunilha/90">
                    {p}
                  </Body>
                ))}
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ——— Meus serviços ——— */}
        <Section id="servicos">
          <SectionHead title={servicos.title} />
          <ol className="mt-8 border-t border-ameixa/15">
            {servicos.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 80}
                className="grid gap-2 border-b border-ameixa/15 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-x-6 lg:grid-cols-[5rem_1fr_1.2fr] lg:items-baseline lg:gap-10"
              >
                <span className="font-display text-3xl leading-none text-terracota italic lg:text-4xl" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.65rem] leading-tight font-medium sm:text-3xl">{item.title}</h3>
                <p className="text-[1rem] leading-[1.75] sm:col-start-2 lg:col-start-auto">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* ——— Para quem é o atendimento ——— */}
        <Section
          id="para-quem"
          deco={<GhostLeaf className="-top-6 -left-32 w-[24rem] -scale-x-100 rotate-[10deg] text-oliva/[0.07]" />}
        >
          <SectionHead title={paraQuem.title} />
          {/* Cartões altos de topo arredondado, como as amostras de cor do manual da marca. */}
          <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-5">
            {paraQuem.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 100}>
                <div
                  className="h-full rounded-t-[3rem] rounded-b-[1.25rem] px-7 pt-9 pb-8"
                  style={{ background: `color-mix(in srgb, ${item.color} ${item.tint}%, transparent)` }}
                >
                  <span className="block size-3.5 rounded-full" style={{ background: item.color }} aria-hidden />
                  <h3 className="mt-5 font-display text-[clamp(2rem,3.6vw,2.8rem)] leading-none font-medium tracking-[-0.02em]">
                    {item.name}
                  </h3>
                  <p className="mt-4 max-w-sm text-[0.98rem] leading-[1.7]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ——— Como funciona ——— */}
        <Section id="como-funciona" className="lg:pt-6">
          <SectionHead title={como.title} />
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {como.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90}>
                <span className="font-display text-5xl leading-none text-oliva italic" aria-hidden>
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-tight font-medium">{s.title}</h3>
                <p className="mt-2 max-w-[16rem] text-[0.98rem] leading-[1.7]">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* ——— Atendimento online ——— */}
        <Section
          id="online"
          band="folha"
          deco={
            <>
              <span className="absolute -top-24 -left-24 size-72 rounded-full bg-baunilha/90" />
              {/* Ondas de sinal saindo do canto, como uma chamada que chega de longe. */}
              <span className="absolute -right-24 -bottom-24 size-[16rem] rounded-full border border-oliva/25" />
              <span className="absolute -right-40 -bottom-40 size-[26rem] rounded-full border border-oliva/20" />
              <span className="absolute -right-56 -bottom-56 size-[36rem] rounded-full border border-terracota/25" />
              <span className="absolute -right-72 -bottom-72 size-[46rem] rounded-full border border-lavanda/40" />
            </>
          }
        >
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHead title={online.title} />
              <Reveal delay={80} className="mt-6 max-w-lg">
                <Body>{online.paragraph}</Body>
              </Reveal>
              <Reveal delay={140}>
                <dl className="mt-7 max-w-lg divide-y divide-ameixa/15 border-y border-ameixa/15">
                  {online.facts.map((f) => (
                    <div key={f.label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
                      <dt className="text-[0.68rem] font-semibold tracking-[0.3em] text-oliva-funda uppercase sm:pt-1.5">
                        {f.label}
                      </dt>
                      <dd className="font-display text-lg leading-snug">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <Reveal className="lg:col-span-7" delay={60}>
              <Photo
                name="img-6430"
                alt="Letícia sentada no chão do estúdio, com uma caneca nas mãos e livros ao lado."
                landscape
                shape="soft"
                className="aspect-[4/3] w-full lg:aspect-[16/11] lg:-mr-10"
                imgClassName="object-[50%_62%]"
              />
            </Reveal>
          </div>
        </Section>

        {/* ——— Perguntas frequentes ——— */}
        <Section id="perguntas">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionHead title={faq.title} />
              </div>
            </div>
            <Reveal className="lg:col-span-7" delay={80}>
              <Accordion type="single" collapsible className="border-t border-ameixa/15">
                {faq.items.map((item, i) => (
                  <AccordionItem key={item.q} value={`q${i}`} className="border-b border-ameixa/15">
                    <AccordionTrigger className="items-center py-5 font-display text-[1.25rem] leading-snug font-medium hover:no-underline sm:text-[1.4rem]">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pr-8 pb-5 text-[1rem] leading-[1.75]">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </Section>

        {/* ——— Contato ——— */}
        <Section id="contato" className="contact-light">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <Photo
                name="img-6425"
                alt="Letícia sentada, com a mão no queixo, sorrindo para a câmera."
                shape="arch"
                backing="bg-blush"
                className="mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none"
                imgClassName="object-[50%_25%]"
              />
            </Reveal>
            <div className="text-center lg:col-span-7 lg:text-left">
              <SectionHead title={contato.headline} className="lg:text-left" center />
              <Reveal delay={80}>
                <p className="mx-auto mt-5 max-w-md font-display text-[1.3rem] leading-snug italic sm:text-2xl lg:mx-0">
                  {contato.text}
                </p>
              </Reveal>
              <Reveal delay={140} className="mx-auto mt-7 flex max-w-xs flex-col gap-3 lg:mx-0">
                <WhatsAppCta className="w-full" />
                <LinkButton href={links.instagram} icon={<InstagramIcon />}>
                  Instagram
                </LinkButton>
              </Reveal>
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative overflow-clip bg-ameixa text-baunilha">
        <GhostLeaf className="-left-16 -bottom-10 w-[18rem] -scale-x-100 text-baunilha/[0.06]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5">
            <img src={asset("logo-mark.png")} alt="" width={64} height={64} className="size-12 rounded-full bg-neve p-1.5" />
            <div>
              <p className="font-display text-xl leading-tight">Letícia Souza</p>
              <p className="mt-1 text-xs tracking-wide text-baunilha/80">
                Psicóloga clínica · CRP 06/229667 · {year}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 lg:items-end">
            <div className="flex gap-6 text-baunilha">
              <TextLink href={links.instagram} icon={<InstagramIcon />} className="border-baunilha/50 hover:border-baunilha focus-visible:ring-baunilha focus-visible:ring-offset-ameixa">
                Instagram
              </TextLink>
              <TextLink href={links.whatsapp} icon={<WhatsAppIcon />} className="border-baunilha/50 hover:border-baunilha focus-visible:ring-baunilha focus-visible:ring-offset-ameixa">
                WhatsApp
              </TextLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
