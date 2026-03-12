export type ToolStatus = 'live' | 'beta' | 'coming-soon'

export type ToolCategory =
  | 'Audit & Analysis'
  | 'Creative & Ideation'
  | 'AI Research'
  | 'Reporting & Automation'

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
  title: string
  description: string
  toolIds: string[]
  trainingUrl?: string
  trainingLabel?: string
}

export interface Process {
  id: string
  title: string
  shortTitle: string
  icon: string
  description: string
  steps: ProcessStep[]
}
