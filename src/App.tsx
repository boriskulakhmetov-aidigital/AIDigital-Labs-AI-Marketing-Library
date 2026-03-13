import { useState, useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { ProcessView } from './components/ProcessView'
import { ToolsView } from './components/ToolsView'
import { LearningView } from './components/LearningView'
import './App.css'

export type View = 'process' | 'tools' | 'learning'

export interface NavigateToStep {
  processId: string
  stepId: string
}

export default function App() {
  const [view, setView] = useState<View>('process')
  const { theme, toggle } = useTheme()

  // Lifted state so Learning tab can deep-link into Process tab
  const [navTarget, setNavTarget] = useState<NavigateToStep | null>(null)

  const navigateToStep = useCallback((processId: string, stepId: string) => {
    setNavTarget({ processId, stepId })
    setView('process')
  }, [])

  // Clear nav target after ProcessView consumes it
  const clearNavTarget = useCallback(() => setNavTarget(null), [])

  return (
    <div className="portal">
      <Navbar view={view} onViewChange={setView} theme={theme} onThemeToggle={toggle} />
      <main className="portal__main">
        {view === 'process' && (
          <ProcessView navTarget={navTarget} onNavConsumed={clearNavTarget} />
        )}
        {view === 'tools' && <ToolsView />}
        {view === 'learning' && <LearningView onNavigateToStep={navigateToStep} />}
      </main>
      <footer className="portal-footer">
        <span>© {new Date().getFullYear()} AIDigital Labs · Smart Tools Portal</span>
        <span className="portal-footer__sep">·</span>
        <span>For existing AI Labs customers</span>
      </footer>
    </div>
  )
}
