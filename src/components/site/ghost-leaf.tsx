import { cn } from "@/lib/utils"

/**
 * Folha fantasma, como as do fundo da capa da identidade (PDF):
 * silhueta grande, quase transparente, cortada pela borda da seção.
 */
export function GhostLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 210"
      className={cn("pointer-events-none absolute", className)}
      fill="currentColor"
      aria-hidden
    >
      <defs>
        <mask id="ghost-leaf-vein">
          <rect width="260" height="210" fill="#fff" />
          <path d="M6 198C70 150 150 90 236 24" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />
        </mask>
      </defs>
      <path
        mask="url(#ghost-leaf-vein)"
        d="M0 205C8 90 90 6 258 4C262 120 170 214 0 205Z"
      />
    </svg>
  )
}
