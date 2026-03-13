import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { ProcessView } from './components/ProcessView'
import { ToolsView } from './components/ToolsView'
import './App.css'

type View = 'process' | 'tools'

export default function App() {
  const [view, setView] = useState<View>('process')
  const { theme, toggle } = useTheme()

  return (
    <div className="portal">
      <Navbar view={view} onViewChange={setView} theme={theme} onThemeToggle={toggle} />
      <main className="portal__main">
        {view === 'process' ? <ProcessView /> : <ToolsView />}
      </main>
      <footer className="portal-footer">
        <span>© {new Date().getFullYear()} AIDigital Labs · Smart Tools Portal</span>
        <span className="portal-footer__sep">·</span>
        <span>For existing AI Labs customers</span>
      </footer>
    </div>
  )
}
