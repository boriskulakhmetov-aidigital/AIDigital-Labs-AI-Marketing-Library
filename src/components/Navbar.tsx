type View = 'process' | 'tools'

interface NavbarProps {
  view: View
  onViewChange: (v: View) => void
}

export function Navbar({ view, onViewChange }: NavbarProps) {
  return (
    <header className="portal-nav">
      <div className="portal-nav__brand">
        <span className="portal-nav__logo">AIDigital Labs</span>
        <span className="portal-nav__divider" />
        <span className="portal-nav__product">Smart Tools</span>
      </div>

      <div className="view-toggle">
        <button
          className={`view-toggle__btn ${view === 'process' ? 'view-toggle__btn--active' : ''}`}
          onClick={() => onViewChange('process')}
        >
          <span className="view-toggle__icon">🗺️</span>
          Process Guide
        </button>
        <button
          className={`view-toggle__btn ${view === 'tools' ? 'view-toggle__btn--active' : ''}`}
          onClick={() => onViewChange('tools')}
        >
          <span className="view-toggle__icon">🧰</span>
          Tool Library
        </button>
      </div>

      <nav className="portal-nav__links">
        <a
          href="https://github.com/boriskulakhmetov-aidigital/AIDigital-Labs-AI-Marketing-Library"
          target="_blank"
          rel="noreferrer"
          className="portal-nav__ext"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  )
}
