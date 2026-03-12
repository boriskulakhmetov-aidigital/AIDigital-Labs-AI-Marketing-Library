import { useState, useRef, useEffect } from 'react'
import type { Tool, TrainingType } from '../types'
import { PROCESSES } from '../data/processes'
import { TOOL_MAP } from '../data/tools'

/* ── Training type metadata ── */
const TRAINING_META: Record<TrainingType, { icon: string; color: string }> = {
  video:    { icon: '▶', color: 'training--video' },
  guide:    { icon: '📖', color: 'training--guide' },
  template: { icon: '📄', color: 'training--template' },
  playbook: { icon: '📚', color: 'training--playbook' },
}

const STATUS_LABEL: Record<Tool['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
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

export function ProcessView() {
  const [activeProcessId, setActiveProcessId] = useState(PROCESSES[0].id)
  const [activeStepId, setActiveStepId] = useState(PROCESSES[0].steps[0].id)
  const detailRef = useRef<HTMLDivElement>(null)

  const activeProcess = PROCESSES.find(p => p.id === activeProcessId)!
  const activeStep = activeProcess.steps.find(s => s.id === activeStepId)!

  // When switching processes, reset to first step
  const handleProcessChange = (id: string) => {
    const p = PROCESSES.find(p => p.id === id)!
    setActiveProcessId(id)
    setActiveStepId(p.steps[0].id)
  }

  // When switching steps, scroll detail panel into view on mobile
  useEffect(() => {
    if (window.innerWidth < 768 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeStepId])

  const tools = activeStep.toolIds.map(id => TOOL_MAP[id]).filter(Boolean)

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
                {/* Step node */}
                <button
                  className={`flow-node ${isActive ? 'flow-node--active' : ''} ${isPast ? 'flow-node--past' : ''}`}
                  onClick={() => setActiveStepId(step.id)}
                  aria-pressed={isActive}
                >
                  <div className="flow-node__badge">{step.number}</div>
                  <div className="flow-node__icon">{step.nodeIcon}</div>
                  <div className="flow-node__label">{step.nodeLabel}</div>
                </button>

                {/* Connector to next step */}
                {i < activeProcess.steps.length - 1 && (
                  <StepConnector active={isPast || isActive} />
                )}
              </div>
            )
          })}
        </div>

        {/* Progress bar under the track */}
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
          {/* Header */}
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
                  {tools.map(tool => (
                    <div
                      key={tool.id}
                      className={`step-tool-card ${tool.status === 'coming-soon' ? 'step-tool-card--dim' : ''}`}
                    >
                      <div className="step-tool-card__top">
                        <span className="step-tool-card__icon">{tool.icon}</span>
                        <div className="step-tool-card__info">
                          <div className="step-tool-card__name">{tool.name}</div>
                          <div className="step-tool-card__cat">{tool.category}</div>
                        </div>
                        <span className={`step-tool-badge step-tool-badge--${tool.status}`}>
                          {STATUS_LABEL[tool.status]}
                        </span>
                      </div>
                      {tool.status !== 'coming-soon' && (
                        <div className="step-tool-card__actions">
                          {tool.toolUrl && (
                            <a className="step-btn-tool" href={tool.toolUrl} target="_blank" rel="noreferrer">
                              Open Tool ↗
                            </a>
                          )}
                          {tool.trainingUrl && (
                            <a className="step-btn-training" href={tool.trainingUrl} target="_blank" rel="noreferrer">
                              {tool.trainingLabel ?? 'Training'} ↗
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="step-no-tools">No specific tools required — this step is process and judgement work.</div>
              )}
            </div>

            {/* Training materials column */}
            {activeStep.trainingMaterials.length > 0 && (
              <div className="step-detail__section">
                <div className="step-section-label">
                  <span className="step-section-label__icon">📚</span>
                  Training & Guides
                </div>
                <div className="step-training-list">
                  {activeStep.trainingMaterials.map((m, i) => {
                    const meta = TRAINING_META[m.type]
                    return (
                      <a
                        key={i}
                        className={`step-training-card ${meta.color}`}
                        href={m.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="step-training-card__icon">{meta.icon}</span>
                        <span className="step-training-card__label">{m.label}</span>
                        <span className="step-training-card__type">{m.type}</span>
                        <span className="step-training-card__arrow">↗</span>
                      </a>
                    )
                  })}
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
