import './App.css'

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <span className="logo">AIDigital Labs</span>
        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a
            className="nav-cta"
            href="https://github.com/boriskulakhmetov-aidigital/AIDigital-Labs-AI-Marketing-Library"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-badge">Coming Soon</div>
          <h1>
            AI Marketing <span className="gradient-text">Library</span>
          </h1>
          <p className="hero-sub">
            A curated collection of AI-powered tools, components, and workflows
            for modern digital marketing teams.
          </p>
          <div className="hero-actions">
            <a
              className="btn-primary"
              href="https://github.com/boriskulakhmetov-aidigital/AIDigital-Labs-AI-Marketing-Library"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
            <a className="btn-ghost" href="#features">
              Learn More
            </a>
          </div>
        </section>

        <section className="features" id="features">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Neuromarketing Insights</h3>
            <p>
              AI-driven analysis of consumer psychology and attention patterns
              to optimise campaigns.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Campaign Automation</h3>
            <p>
              Automate A/B testing, creative generation, and performance
              reporting with LLM agents.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Audit &amp; Analytics</h3>
            <p>
              Deep audits of ad accounts, landing pages, and content with
              actionable recommendations.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <span>
          © {new Date().getFullYear()} AIDigital Labs · AI Marketing Library
        </span>
      </footer>
    </div>
  )
}

export default App
