import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

type LinkButtonProps = Omit<ComponentProps<"a">, "children"> & {
  icon: ReactNode
  children: ReactNode
  /** Redes abrem em nova aba. Mailto fica na mesma, porque abre o app de e-mail. */
  external?: boolean
}

/** Botão secundário em pílula (borda terracota, onda blush no hover). Âncora real. */
export function LinkButton({ icon, children, className, external = true, ...props }: LinkButtonProps) {
  return (
    <a
      {...(external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {})}
      className={cn(
        "wave-btn wave-btn-quiet inline-flex min-h-13 w-full items-center justify-center rounded-full border border-terracota/60 px-6 text-[0.95rem] font-medium tracking-wide text-ameixa",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ameixa focus-visible:ring-offset-2 focus-visible:ring-offset-neve",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2.5">
        <span className="shrink-0 [&>svg]:size-[1.05rem]">{icon}</span>
        {children}
        {external ? <span className="sr-only"> (abre em nova aba)</span> : null}
      </span>
    </a>
  )
}
