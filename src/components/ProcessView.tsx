import { useState, useRef, useEffect } from 'react'
import type { Resource } from '../types'
import type { NavigateToStep } from '../App'
import { PROCESSES } from '../data/processes'
import { RESOURCE_MAP } from '../data/resources'

const STATUS_LABEL: Record<Resource['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
}

const TYPE_LABEL: Record<Resource['type'], { icon: string; label: string }> = {
  tool:            { icon: '🧰', label: 'Tools' },
  course:          { icon: '📚', label: 'Courses & Modules' },
  workshop:        { icon: '🏫', label: 'Workshops' },
  'ai-learning':    { icon: '🤖', label: 'AI-Assisted Learning' },
}

const ACTION_DEFAULTS: Record<Resource['type'], string> = {
  tool: 'Open Tool',
  course: 'Start Course',
  workshop: 'Schedule Session',
  'ai-learning': 'Try It',
}

/* ── Arrow connector SVG ── */
function StepConnector({ active }: { active: boolean }) {
  return (
    <div className={`flow-connector ${active ? 'flow-connector--active' : ''}`}>
      <div className="flow-connector__line" />
      <svg className="flow-connector__arrow" viewBox="0 0 7 11" fill="none">
        <path d="M1 1l5 4.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

interface Props {
  navTarget: NavigateToStep | null
  onNavConsumed: () => void
}

export function ProcessView({ navTarget, onNavConsumed }: Props) {
  const [activeProcessId, setActiveProcessId] = useState(PROCESSES[0].id)
  const [activeStepId, setActiveStepId] = useState(PROCESSES[0].steps[0].id)
  const detailRef = useRef<HTMLDivElement>(null)

  // Handle deep-link from Learning tab
  useEffect(() => {
    if (navTarget) {
      setActiveProcessId(navTarget.processId)
      setActiveStepId(navTarget.stepId)
      onNavConsumed()
    }
  }, [navTarget, onNavConsumed])

  const activeProcess = PROCESSES.find(p => p.id === activeProcessId)!
  const activeStep = activeProcess.steps.find(s => s.id === activeStepId)!

  const handleProcessChange = (id: string) => {
    const p = PROCESSES.find(p => p.id === id)!
    setActiveProcessId(id)
    setActiveStepId(p.steps[0].id)
  }

  useEffect(() => {
    if (window.innerWidth < 768 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeStepId])

  // Resolve and group resources by type
  const allResources = activeStep.resourceIds.map(id => RESOURCE_MAP[id]).filter(Boolean)
  const tools = allResources.filter(r => r.type === 'tool')
  const learning = allResources.filter(r => r.type !== 'tool')

  return (
    <div className="process-view">
      {/* ── Process Tabs ── */}
      <div className="process-tabs">
        {PROCESSES.map(p => (
          <button
            key={p.id}
            className={`process-tab ${activeProcessId === p.id ? 'process-tab--active' : ''}`}
            onClick={() => handleProcessChange(p.id)}
          >
            <span className="process-tab__icon">{p.icon}</span>
            <span className="process-tab__label">{p.shortTitle}</span>
          </button>
        ))}
      </div>

      {/* ── Flow Diagram ── */}
      <div className="flow-area">
        <div className="flow-track">
          {activeProcess.steps.map((step, i) => {
            const isActive = step.id === activeStepId
            const isPast = step.number < activeStep.number
            return (
              <div key={step.id} className="flow-step-group">
                <button
                  className={`flow-node ${isActive ? 'flow-node--active' : ''} ${isPast ? 'flow-node--past' : ''}`}
                  onClick={() => setActiveStepId(step.id)}
                  aria-pressed={isActive}
                >
                  <div className="flow-node__badge">{step.number}</div>
                  <div className="flow-node__icon">{step.nodeIcon}</div>
                  <div className="flow-node__label">{step.nodeLabel}</div>
                </button>
                {i < activeProcess.steps.length - 1 && (
                  <StepConnector active={isPast || isActive} />
                )}
              </div>
            )
          })}
        </div>
        <div className="flow-progress">
          <div
            className="flow-progress__fill"
            style={{
              width: `${((activeStep.number - 1) / (activeProcess.steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* ── Step Detail Panel ── */}
      <div className="step-detail" ref={detailRef}>
        <div className="step-detail__inner">
          <div className="step-detail__header">
            <div className="step-detail__num">Step {activeStep.number}</div>
            <h2 className="step-detail__title">{activeStep.title}</h2>
            <p className="step-detail__desc">{activeStep.description}</p>
          </div>

          <div className="step-detail__body">
            {/* Tools column */}
            <div className="step-detail__section">
              <div className="step-section-label">
                <span className="step-section-label__icon">🧰</span>
                Tools for this step
              </div>
              {tools.length > 0 ? (
                <div className="step-tool-list">
                  {tools.map(r => (
                    <ResourceCard key={r.id} resource={r} />
                  ))}
                </div>
              ) : (
                <div className="step-no-tools">
                  No specific tools required — this step is process and judgement work.
                </div>
              )}
            </div>

            {/* Learning resources column */}
            {learning.length > 0 && (
              <div className="step-detail__section">
                <div className="step-section-label">
                  <span className="step-section-label__icon">📚</span>
                  Learning & Resources
                </div>
                <div className="step-tool-list">
                  {learning.map(r => (
                    <ResourceCard key={r.id} resource={r} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Step navigation */}
          <div className="step-nav">
            <button
              className="step-nav__btn"
              disabled={activeStep.number === 1}
              onClick={() => {
                const prev = activeProcess.steps[activeStep.number - 2]
                if (prev) setActiveStepId(prev.id)
              }}
            >
              ← Previous
            </button>
            <span className="step-nav__count">
              {activeStep.number} / {activeProcess.steps.length}
            </span>
            <button
              className="step-nav__btn step-nav__btn--next"
              disabled={activeStep.number === activeProcess.steps.length}
              onClick={() => {
                const next = activeProcess.steps[activeStep.number]
                if (next) setActiveStepId(next.id)
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Shared resource card used in step detail ── */
function ResourceCard({ resource: r }: { resource: Resource }) {
  const isAvailable = r.status !== 'coming-soon'
  const typeInfo = TYPE_LABEL[r.type]

  return (
    <div className={`step-tool-card ${!isAvailable ? 'step-tool-card--dim' : ''}`}>
      <div className="step-tool-card__top">
        <span className="step-tool-card__icon">{r.icon}</span>
        <div className="step-tool-card__info">
          <div className="step-tool-card__name">{r.name}</div>
          <div className="step-tool-card__cat">
            {typeInfo.icon} {typeInfo.label} · {r.category}
            {r.duration && <> · {r.duration}</>}
          </div>
        </div>
        <span className={`step-tool-badge step-tool-badge--${r.status}`}>
          {STATUS_LABEL[r.status]}
        </span>
      </div>
      {isAvailable && (
        <div className="step-tool-card__actions">
          {r.url && (
            <a className="step-btn-tool" href={r.url} target="_blank" rel="noreferrer">
              {r.actionLabel ?? ACTION_DEFAULTS[r.type]} ↗
            </a>
          )}
        </div>
      )}
    </div>
  )
}
