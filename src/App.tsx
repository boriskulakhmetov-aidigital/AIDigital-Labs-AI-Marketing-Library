import { useState, useCallback } from 'react'
import { AppShell } from '@AiDigital-com/design-system'
import { createClient } from '@supabase/supabase-js'
import { ProcessView } from './components/ProcessView'
import { ToolsView } from './components/ToolsView'
import { LearningView } from './components/LearningView'
import './App.css'

export type View = 'process' | 'tools' | 'learning'

export interface NavigateToStep {
  processId: string
  stepId: string
}

interface AppProps {
  auth: {
    SignIn: React.ComponentType<any>
    UserButton: React.ComponentType
    useAuth: (...args: any[]) => any
  }
}

const supabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  createClient,
}

export default function App({ auth }: AppProps) {
  const [view, setView] = useState<View>('process')

  // Lifted state so Learning tab can deep-link into Process tab
  const [navTarget, setNavTarget] = useState<NavigateToStep | null>(null)

  const navigateToStep = useCallback((processId: string, stepId: string) => {
    setNavTarget({ processId, stepId })
    setView('process')
  }, [])

  // Clear nav target after ProcessView consumes it
  const clearNavTarget = useCallback(() => setNavTarget(null), [])

  return (
    <AppShell
      appTitle="Marketing Library"
      activityLabel="Visit"
      auth={auth}
      supabaseConfig={supabaseConfig}
    >
      {() => (
        <div className="portal">
          <div className="portal-nav-tabs">
            <div className="view-toggle">
              <button
                className={`view-toggle__btn ${view === 'process' ? 'view-toggle__btn--active' : ''}`}
                onClick={() => setView('process')}
              >
                <span className="view-toggle__icon">🗺️</span>
                <span>Process Guide</span>
              </button>
              <button
                className={`view-toggle__btn ${view === 'tools' ? 'view-toggle__btn--active' : ''}`}
                onClick={() => setView('tools')}
              >
                <span className="view-toggle__icon">🧰</span>
                <span>Tool Library</span>
              </button>
              <button
                className={`view-toggle__btn ${view === 'learning' ? 'view-toggle__btn--active' : ''}`}
                onClick={() => setView('learning')}
              >
                <span className="view-toggle__icon">🎓</span>
                <span>Learning</span>
              </button>
            </div>
          </div>

          <main className="portal__main">
            {view === 'process' && (
              <ProcessView navTarget={navTarget} onNavConsumed={clearNavTarget} />
            )}
            {view === 'tools' && <ToolsView />}
            {view === 'learning' && <LearningView onNavigateToStep={navigateToStep} />}
          </main>

          <footer className="portal-footer">
            <span>&copy; {new Date().getFullYear()} AIDigital Labs &middot; Smart Tools Portal</span>
            <span className="portal-footer__sep">&middot;</span>
            <span>For existing AI Labs customers</span>
          </footer>
        </div>
      )}
    </AppShell>
  )
}
