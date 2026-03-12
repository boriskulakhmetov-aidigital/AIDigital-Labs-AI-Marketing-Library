import type { Tool } from '../types'

interface ToolCardProps {
  tool: Tool
}

const STATUS_LABELS: Record<Tool['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
}

export function ToolCard({ tool }: ToolCardProps) {
  const isAvailable = tool.status !== 'coming-soon'

  return (
    <div className={`tool-card ${!isAvailable ? 'tool-card--dim' : ''}`}>
      <div className={`tool-card__status tool-card__status--${tool.status}`}>
        {STATUS_LABELS[tool.status]}
      </div>

      <div className="tool-card__top">
        <div className="tool-card__icon">{tool.icon}</div>
        <div className="tool-card__meta">
          <div className="tool-card__name">{tool.name}</div>
          <div className="tool-card__category">{tool.category}</div>
        </div>
      </div>

      <p className="tool-card__desc">{tool.description}</p>

      <div className="tool-card__actions">
        {isAvailable && tool.toolUrl ? (
          <a
            className="btn-tool"
            href={tool.toolUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open Tool ↗
          </a>
        ) : !isAvailable ? (
          <span className="btn-tool-disabled">Notify me</span>
        ) : null}

        {isAvailable && tool.trainingUrl && (
          <a
            className="btn-training"
            href={tool.trainingUrl}
            target="_blank"
            rel="noreferrer"
          >
            {tool.trainingLabel ?? 'Training'} ↗
          </a>
        )}
      </div>
    </div>
  )
}
