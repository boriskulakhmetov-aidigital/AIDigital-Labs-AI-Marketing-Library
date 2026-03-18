import { BrandMark, ThemeToggle } from '@boriskulakhmetov-aidigital/design-system'
import type { Theme } from '@boriskulakhmetov-aidigital/design-system'
import type { View } from '../App'

interface NavbarProps {
  view: View
  onViewChange: (v: View) => void
  theme: Theme
  onThemeToggle: () => void
}

export function Navbar({ view, onViewChange, theme, onThemeToggle }: NavbarProps) {
  return (
    <header className="portal-nav">
      <div className="portal-nav__brand">
        <BrandMark size={24} />
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
          <span>Process Guide</span>
        </button>
        <button
          className={`view-toggle__btn ${view === 'tools' ? 'view-toggle__btn--active' : ''}`}
          onClick={() => onViewChange('tools')}
        >
          <span className="view-toggle__icon">🧰</span>
          <span>Tool Library</span>
        </button>
        <button
          className={`view-toggle__btn ${view === 'learning' ? 'view-toggle__btn--active' : ''}`}
          onClick={() => onViewChange('learning')}
        >
          <span className="view-toggle__icon">🎓</span>
          <span>Learning</span>
        </button>
      </div>

      <div className="portal-nav__right">
        <a
          href="https://github.com/boriskulakhmetov-aidigital/AIDigital-Labs-AI-Marketing-Library"
          target="_blank"
          rel="noreferrer"
          className="portal-nav__ext"
        >
          GitHub ↗
        </a>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </header>
  )
}
