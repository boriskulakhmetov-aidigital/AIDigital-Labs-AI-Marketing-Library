import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { ProcessView } from './components/ProcessView'
import { ToolsView } from './components/ToolsView'
import './App.css'

type View = 'process' | 'tools'

export default function App() {
  const [view, setView] = useState<View>('process')

  return (
    <div className="portal">
      <Navbar view={view} onViewChange={setView} />
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
