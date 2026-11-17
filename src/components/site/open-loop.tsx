import { cn } from "@/lib/utils"

/**
 * Um laço que não se fecha: a linha dá a volta e segue em caminho até a luz lavanda.
 * Desenha ao entrar na tela (dentro de um `Reveal`), por recorte, sem dasharray.
 */
export function OpenLoop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 64"
      fill="none"
      overflow="visible"
      className={cn("open-loop h-auto w-full", className)}
      aria-hidden
    >
      <path
        className="open-loop-line"
        d="M32 52A20 20 0 1 1 52 32C52 46 60 54 76 52S100 40 120 44S150 52 170 46S200 38 222 42"
        stroke="var(--color-terracota)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle className="open-loop-light" cx="230" cy="42" r="5" fill="var(--color-lavanda)" />
    </svg>
  )
}
