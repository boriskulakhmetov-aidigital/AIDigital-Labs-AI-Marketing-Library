/* ════════════════════════════════════════════════════════════
   Unified Resource Model — single type for tools, courses,
   workshops, and prompt libraries.
   ════════════════════════════════════════════════════════════ */

export type ResourceType = 'tool' | 'course' | 'workshop' | 'ai-learning'
export type ResourceStatus = 'live' | 'beta' | 'coming-soon'

export interface Resource {
  id: string
  type: ResourceType
  name: string
  description: string
  category: string
  status: ResourceStatus
  icon: string
  /** Primary action URL (open tool, start course, schedule, try prompt) */
  url?: string
  /** Label override for the primary action button */
  actionLabel?: string
  /** Duration label (e.g. "30 min", "3–4 hours") */
  duration?: string
  /** Format label (e.g. "Online", "In-person", "Self-paced") */
  format?: string
}

/* ── Process Model ── */

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
  /** IDs referencing any resource type: tools, courses, workshops, prompts */
  resourceIds: string[]
}

export interface Process {
  id: string
  title: string
  shortTitle: string
  icon: string
  description: string
  steps: ProcessStep[]
}
