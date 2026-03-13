import { useState } from 'react'
import type { Resource, ResourceType } from '../types'
import { getResourcesByType } from '../data/resources'
import { PROCESSES } from '../data/processes'

type SubTab = 'courses' | 'workshops' | 'prompts'

const SUB_TABS: { id: SubTab; label: string; icon: string; type: ResourceType }[] = [
  { id: 'courses', label: 'Courses & Modules', icon: '📚', type: 'course' },
  { id: 'workshops', label: 'Workshops', icon: '🏫', type: 'workshop' },
  { id: 'prompts', label: 'AI-Assisted Learning', icon: '🤖', type: 'ai-learning' },
]

const STATUS_LABEL: Record<Resource['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
}

interface Props {
  onNavigateToStep: (processId: string, stepId: string) => void
}

/** Find all process steps that reference a given resource */
function getProcessRefs(resourceId: string) {
  const refs: { processId: string; processTitle: string; stepId: string; stepLabel: string; stepNumber: number }[] = []
  for (const p of PROCESSES) {
    for (const s of p.steps) {
      if (s.resourceIds.includes(resourceId)) {
        refs.push({
          processId: p.id,
          processTitle: p.shortTitle,
          stepId: s.id,
          stepLabel: s.nodeLabel,
          stepNumber: s.number,
        })
      }
    }
  }
  return refs
}

export function LearningView({ onNavigateToStep }: Props) {
  const [activeTab, setActiveTab] = useState<SubTab>('courses')
  const currentTab = SUB_TABS.find(t => t.id === activeTab)!
  const resources = getResourcesByType(currentTab.type)

  return (
    <div className="learning-view">
      <div className="learning-view__header">
        <h2 className="learning-view__title">Learning Resources</h2>
        <p className="learning-view__sub">
          Self-paced courses, live workshops, and interactive prompt libraries — all linked to the
          processes and tools you use every day.
        </p>
      </div>

      {/* Sub-tabs */}
      <div className="learning-tabs">
        {SUB_TABS.map(tab => (
          <button
            key={tab.id}
            className={`learning-tab ${activeTab === tab.id ? 'learning-tab--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="learning-tab__icon">{tab.icon}</span>
            <span>{tab.label}</span>
            <span className="learning-tab__count">
              {getResourcesByType(tab.type).length}
            </span>
          </button>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="learning-grid">
        {resources.map(r => {
          const refs = getProcessRefs(r.id)
          const isAvailable = r.status !== 'coming-soon'

          return (
            <div key={r.id} className={`learning-card ${!isAvailable ? 'learning-card--dim' : ''}`}>
              {/* Status */}
              <div className={`learning-card__status learning-card__status--${r.status}`}>
                {STATUS_LABEL[r.status]}
              </div>

              {/* Header */}
              <div className="learning-card__top">
                <span className="learning-card__icon">{r.icon}</span>
                <div className="learning-card__meta">
                  <div className="learning-card__name">{r.name}</div>
                  <div className="learning-card__tags">
                    {r.duration && <span className="learning-card__tag">{r.duration}</span>}
                    {r.format && <span className="learning-card__tag">{r.format}</span>}
                    <span className="learning-card__tag">{r.category}</span>
                  </div>
                </div>
              </div>

              <p className="learning-card__desc">{r.description}</p>

              {/* Process cross-references */}
              {refs.length > 0 && (
                <div className="learning-card__refs">
                  <span className="learning-card__refs-label">Used in:</span>
                  {refs.map((ref, i) => (
                    <button
                      key={i}
                      className="learning-card__ref-pill"
                      onClick={() => onNavigateToStep(ref.processId, ref.stepId)}
                      title={`${ref.processTitle} → Step ${ref.stepNumber}: ${ref.stepLabel}`}
                    >
                      {ref.processTitle} · {ref.stepLabel}
                    </button>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="learning-card__actions">
                {isAvailable && r.url ? (
                  <a
                    className="btn-learning-primary"
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {r.actionLabel ?? 'Open'} ↗
                  </a>
                ) : !isAvailable ? (
                  <span className="btn-tool-disabled">Coming Soon</span>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
