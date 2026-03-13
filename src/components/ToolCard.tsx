import type { Resource } from '../types'

interface ToolCardProps {
  resource: Resource
}

const STATUS_LABELS: Record<Resource['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
}

export function ToolCard({ resource: r }: ToolCardProps) {
  const isAvailable = r.status !== 'coming-soon'

  return (
    <div className={`tool-card ${!isAvailable ? 'tool-card--dim' : ''}`}>
      <div className={`tool-card__status tool-card__status--${r.status}`}>
        {STATUS_LABELS[r.status]}
      </div>

      <div className="tool-card__top">
        <div className="tool-card__icon">{r.icon}</div>
        <div className="tool-card__meta">
          <div className="tool-card__name">{r.name}</div>
          <div className="tool-card__category">{r.category}</div>
        </div>
      </div>

      <p className="tool-card__desc">{r.description}</p>

      <div className="tool-card__actions">
        {isAvailable && r.url ? (
          <a className="btn-tool" href={r.url} target="_blank" rel="noreferrer">
            {r.actionLabel ?? 'Open Tool'} ↗
          </a>
        ) : !isAvailable ? (
          <span className="btn-tool-disabled">Notify me</span>
        ) : null}
      </div>
    </div>
  )
}
