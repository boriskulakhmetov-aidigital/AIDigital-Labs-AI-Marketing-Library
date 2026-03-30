import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider, SignIn, UserButton, useAuth } from '@clerk/clerk-react'
import { applyTheme, aiLabsTheme } from '@AiDigital-com/design-system'
import '@AiDigital-com/design-system/style.css'
import App from './App'
import './index.css'

applyTheme(aiLabsTheme)

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkKey}>
      <App auth={{ SignIn, UserButton, useAuth }} />
    </ClerkProvider>
  </React.StrictMode>
)
