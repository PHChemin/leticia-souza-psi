import { asset } from "@/lib/asset"
import { cn } from "@/lib/utils"

type PhotoProps = {
  /** Nome do arquivo em public/images (sem extensão). */
  name: string
  alt: string
  landscape?: boolean
  /**
   * soft: cantos bem arredondados · arch: topo em arco (uma vez, no contato)
   * hero: encosta na borda e arredonda só o lado de dentro.
   */
  shape?: "soft" | "arch" | "hero" | "circle"
  /** Classe do bloco de cor deslocado atrás da foto (só em soft/arch). */
  backing?: string
  className?: string
  imgClassName?: string
  priority?: boolean
}

const radius = {
  soft: "rounded-[1.75rem] lg:rounded-[2.25rem]",
  arch: "rounded-t-[999px] rounded-b-[1.75rem]",
  hero: "lg:rounded-l-[4rem]",
  circle: "rounded-full",
} as const

/** Foto da cliente: cantos macios e, se pedido, um bloco de cor deslocado atrás. */
export function Photo({
  name,
  alt,
  landscape,
  shape = "soft",
  backing,
  className,
  imgClassName,
  priority,
}: PhotoProps) {
  return (
    <div className={cn("relative", className)}>
      {backing ? (
        <span
          className={cn("absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5", radius[shape], backing)}
          aria-hidden
        />
      ) : null}
      <img
        src={asset(`images/${name}.webp`)}
        alt={alt}
        width={landscape ? 1600 : 1067}
        height={landscape ? 1067 : 1600}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("relative size-full object-cover", radius[shape], imgClassName)}
      />
    </div>
  )
}
