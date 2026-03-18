import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { applyTheme, aiLabsTheme } from '@boriskulakhmetov-aidigital/design-system'
import '@boriskulakhmetov-aidigital/design-system/style.css'
import './index.css'
import App from './App.tsx'

applyTheme(aiLabsTheme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
