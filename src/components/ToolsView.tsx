import { useState } from 'react'
import type { ToolCategory } from '../types'
import { TOOLS } from '../data/tools'
import { ToolCard } from './ToolCard'

const CATEGORIES: ToolCategory[] = [
  'Audit & Analysis',
  'Creative & Ideation',
  'AI Research',
  'Reporting & Automation',
]

export function ToolsView() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'All'>('All')

  const filtered =
    activeCategory === 'All'
      ? TOOLS
      : TOOLS.filter(t => t.category === activeCategory)

  return (
    <div className="tools-view">
      <div className="tools-view__header">
        <h2 className="tools-view__title">Tool Library</h2>
        <p className="tools-view__sub">
          Browse all AI Labs tools by category. Click any tool to open it directly
          or access its training materials.
        </p>
      </div>

      <div className="category-filter">
        <button
          className={`cat-pill ${activeCategory === 'All' ? 'cat-pill--active' : ''}`}
          onClick={() => setActiveCategory('All')}
        >
          All Tools
          <span className="cat-pill__count">{TOOLS.length}</span>
        </button>
        {CATEGORIES.map(cat => {
          const count = TOOLS.filter(t => t.category === cat).length
          return (
            <button
              key={cat}
              className={`cat-pill ${activeCategory === cat ? 'cat-pill--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              <span className="cat-pill__count">{count}</span>
            </button>
          )
        })}
      </div>

      <div className="tool-grid">
        {filtered.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}
