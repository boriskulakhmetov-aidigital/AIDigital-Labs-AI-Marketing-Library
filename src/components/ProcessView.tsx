import { useState, useRef, useEffect } from 'react'
import type { Tool } from '../types'
import { PROCESSES } from '../data/processes'
import { TOOL_MAP } from '../data/tools'

const STATUS_DOT: Record<Tool['status'], string> = {
  live: 'dot--live',
  beta: 'dot--beta',
  'coming-soon': 'dot--soon',
}

const STATUS_LABEL: Record<Tool['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
}

export function ProcessView() {
  const [activeId, setActiveId] = useState(PROCESSES[0].id)
  const stepListRef = useRef<HTMLDivElement>(null)

  const activeProcess = PROCESSES.find(p => p.id === activeId)!

  useEffect(() => {
    if (stepListRef.current) {
      stepListRef.current.scrollTop = 0
    }
  }, [activeId])

  return (
    <div className="process-view">
      {/* Process tab bar */}
      <div className="process-tabs">
        {PROCESSES.map(p => (
          <button
            key={p.id}
            className={`process-tab ${activeId === p.id ? 'process-tab--active' : ''}`}
            onClick={() => setActiveId(p.id)}
          >
            <span className="process-tab__icon">{p.icon}</span>
            <span className="process-tab__label">{p.shortTitle}</span>
          </button>
        ))}
      </div>

      {/* Process content */}
      <div className="process-content" ref={stepListRef}>
        <div className="process-hero">
          <h2 className="process-hero__title">
            {activeProcess.icon} {activeProcess.title}
          </h2>
          <p className="process-hero__desc">{activeProcess.description}</p>
        </div>

        <div className="step-list">
          {activeProcess.steps.map(step => {
            const tools = step.toolIds
              .map(id => TOOL_MAP[id])
              .filter(Boolean)

            return (
              <div key={step.id} className="step-card">
                <div className="step-card__header">
                  <div className="step-badge">{step.number}</div>
                  <h3 className="step-card__title">{step.title}</h3>
                  {step.trainingUrl && (
                    <a
                      className="step-training-link"
                      href={step.trainingUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {step.trainingLabel ?? 'Training'} ↗
                    </a>
                  )}
                </div>
                <p className="step-card__desc">{step.description}</p>

                {tools.length > 0 && (
                  <div className="step-tools">
                    <div className="step-tools__label">Tools for this step</div>
                    <div className="step-tools__list">
                      {tools.map(tool => (
                        <div
                          key={tool.id}
                          className={`tool-row ${tool.status === 'coming-soon' ? 'tool-row--dim' : ''}`}
                        >
                          <span className="tool-row__icon">{tool.icon}</span>
                          <div className="tool-row__info">
                            <span className="tool-row__name">{tool.name}</span>
                            <span className="tool-row__cat">{tool.category}</span>
                          </div>
                          <div className="tool-row__right">
                            <span className={`status-dot ${STATUS_DOT[tool.status]}`} />
                            <span className="tool-row__status">{STATUS_LABEL[tool.status]}</span>
                            {tool.status !== 'coming-soon' && (
                              <>
                                {tool.toolUrl && (
                                  <a
                                    className="tool-row__link"
                                    href={tool.toolUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Open ↗
                                  </a>
                                )}
                                {tool.trainingUrl && (
                                  <a
                                    className="tool-row__link tool-row__link--training"
                                    href={tool.trainingUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {tool.trainingLabel ?? 'Training'} ↗
                                  </a>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
