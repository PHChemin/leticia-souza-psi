import type { ComponentProps, ReactNode } from "react"

import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  children: ReactNode
  /** Faixa de cor de ponta a ponta da tela. */
  band?: "ameixa" | "baunilha" | "folha"
  /** Camada decorativa atrás do conteúdo (folhas fantasma, círculos). */
  deco?: ReactNode
  className?: string
  innerClassName?: string
}

/** Uma função por seção. Faixas de cor vão de borda a borda. */
export function Section({ id, children, band, deco, className, innerClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-4 overflow-clip",
        band && `band band-${band}`,
        band === "ameixa" && "text-baunilha",
        className,
      )}
    >
      {deco ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {deco}
        </div>
      ) : null}
      <div className={cn("relative z-10 mx-auto w-full max-w-6xl px-6 py-14 lg:px-10 lg:py-20", innerClassName)}>
        {children}
      </div>
    </section>
  )
}

type HeadProps = {
  title: string
  /** Glifo tipográfico opcional (só a Abordagem usa). */
  glyph?: string
  glyphClassName?: string
  center?: boolean
  className?: string
}

/** Glifo grande em Lora itálico + título curto. Cada seção ganha o seu. */
export function SectionHead({ title, glyph, glyphClassName = "text-terracota", center, className }: HeadProps) {
  return (
    <Reveal className={cn(center && "text-center", className)}>
      {glyph ? (
        <span
          className={cn("block font-display text-[3.4rem] leading-[0.7] font-medium italic select-none", glyphClassName)}
          aria-hidden
        >
          {glyph}
        </span>
      ) : null}
      <h2 className={cn(glyph && "mt-4", "font-display text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.02em]")}>
        {title}
      </h2>
    </Reveal>
  )
}

/** Parágrafo de corpo: Poppins, 2–4 linhas. */
export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-[1.02rem] leading-[1.75] sm:text-[1.08rem]", className)}>{children}</p>
}

/** Link discreto: texto com sublinhado terracota. Para contatos que não pedem destaque. */
export function TextLink({
  icon,
  children,
  className,
  ...props
}: ComponentProps<"a"> & { icon?: ReactNode }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 border-b border-terracota/70 pb-0.5 text-[0.95rem] transition-colors hover:border-ameixa",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ameixa focus-visible:ring-offset-2 focus-visible:ring-offset-neve",
        className,
      )}
      {...props}
    >
      {icon ? <span className="shrink-0 [&>svg]:size-[1rem]">{icon}</span> : null}
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  )
}
