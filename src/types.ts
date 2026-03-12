export type ToolStatus = 'live' | 'beta' | 'coming-soon'

export type ToolCategory =
  | 'Audit & Analysis'
  | 'Creative & Ideation'
  | 'AI Research'
  | 'Reporting & Automation'

export type TrainingType = 'video' | 'guide' | 'template' | 'playbook'

export interface TrainingMaterial {
  label: string
  type: TrainingType
  url: string
}

export interface Tool {
  id: string
  name: string
  description: string
  category: ToolCategory
  status: ToolStatus
  icon: string
  toolUrl?: string
  trainingUrl?: string
  trainingLabel?: string
}

export interface ProcessStep {
  id: string
  number: number
  /** Short label for the flow node (2–4 words) */
  nodeLabel: string
  /** Node icon emoji */
  nodeIcon: string
  /** Full step title for the detail panel */
  title: string
  description: string
  toolIds: string[]
  trainingMaterials: TrainingMaterial[]
}

export interface Process {
  id: string
  title: string
  shortTitle: string
  icon: string
  description: string
  steps: ProcessStep[]
}
