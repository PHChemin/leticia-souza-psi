import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { MotionConfig } from 'motion/react'
import App from './App'

/** Usado só no build (scripts/prerender.mjs). Mesma árvore do main.tsx. */
export function render() {
  return renderToString(
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </StrictMode>,
  )
}
