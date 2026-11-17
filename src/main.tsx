import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { MotionConfig } from 'motion/react'
import App from './App'
import '@fontsource/lora/latin-500.css'
import '@fontsource/lora/latin-400-italic.css'
import '@fontsource/poppins/latin-400.css'
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-600.css'
import './styles/main.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

const app = (
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>
)

// Build: o HTML já vem pré-renderizado (scripts/prerender.mjs) → hidrata.
// Dev: #root só tem o marcador → renderiza do zero.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
