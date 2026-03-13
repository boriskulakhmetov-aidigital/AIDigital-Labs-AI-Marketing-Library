import { useState } from 'react'
import { getResourcesByType, getToolCategories } from '../data/resources'
import { ToolCard } from './ToolCard'

export function ToolsView() {
  const tools = getResourcesByType('tool')
  const categories = getToolCategories()
  const [activeCategory, setActiveCategory] = useState<string | 'All'>('All')

  const filtered =
    activeCategory === 'All'
      ? tools
      : tools.filter(t => t.category === activeCategory)

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
          <span className="cat-pill__count">{tools.length}</span>
        </button>
        {categories.map(cat => {
          const count = tools.filter(t => t.category === cat).length
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
          <ToolCard key={tool.id} resource={tool} />
        ))}
      </div>
    </div>
  )
}
