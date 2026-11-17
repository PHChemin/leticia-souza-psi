import { useSyncExternalStore } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY)
  media.addEventListener("change", onChange)
  return () => media.removeEventListener("change", onChange)
}

const getSnapshot = () => window.matchMedia(QUERY).matches

/** No pré-render não existe preferência: assume movimento e corrige na hidratação. */
const getServerSnapshot = () => false

/** Preferência do sistema por menos movimento. */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
