import type { Tool } from '../types'

export const TOOLS: Tool[] = [
  {
    id: 'website-audit',
    name: 'Website Audit Tool',
    description:
      'Full technical and UX analysis of a client website — performance scores, structural issues, SEO signals, and conversion bottlenecks. Generate a client-ready report in minutes.',
    category: 'Audit & Analysis',
    status: 'live',
    icon: '🔍',
    toolUrl: '#',
    trainingUrl: '#',
    trainingLabel: 'Watch walkthrough',
  },
  {
    id: 'neuromarketing-audit',
    name: 'Neuromarketing & Color Psychology Audit',
    description:
      'AI-powered audit of ad creative and landing pages against neuromarketing principles — attention, emotion, visual hierarchy, and colour psychology. Scored and exportable.',
    category: 'Audit & Analysis',
    status: 'live',
    icon: '🧠',
    toolUrl: 'https://ai-labs-neuromarketing-audit.netlify.app',
    trainingUrl: '#',
    trainingLabel: 'Watch walkthrough',
  },
  {
    id: 'synthetic-focus-group',
    name: 'Synthetic Focus Group',
    description:
      'Simulate audience reactions to concepts, messaging, and creative using AI personas calibrated to your target demographics — before spending a dollar on production.',
    category: 'AI Research',
    status: 'beta',
    icon: '👥',
    toolUrl: '#',
    trainingUrl: '#',
    trainingLabel: 'View guide',
  },
  {
    id: 'scamper-ideation',
    name: 'SCAMPER Ideation Tool',
    description:
      'Structured creative brainstorming inside Miro using the SCAMPER framework — Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse. Runs as a facilitated session.',
    category: 'Creative & Ideation',
    status: 'live',
    icon: '⚡',
    toolUrl: '#',
    trainingUrl: '#',
    trainingLabel: 'Open in Miro',
  },
  {
    id: 'aio-optimizer',
    name: 'AIO Optimizer',
    description:
      "Evaluate a client's content and digital presence for inclusion potential in AI-generated search answers across ChatGPT, Perplexity, Google AI Overviews, and beyond.",
    category: 'AI Research',
    status: 'beta',
    icon: '🤖',
    toolUrl: '#',
    trainingUrl: '#',
    trainingLabel: 'Read guide',
  },
  {
    id: 'media-plan-builder',
    name: 'Media Plan Builder',
    description:
      'Generate structured media plans with channel mix recommendations, budget allocation, and flight schedules — shareable as PDF or editable spreadsheet.',
    category: 'Reporting & Automation',
    status: 'coming-soon',
    icon: '📋',
  },
  {
    id: 'competitive-intelligence',
    name: 'Competitive Intelligence Tool',
    description:
      'Map competitor ad activity, messaging patterns, and AI search presence — giving you the context to craft a sharper, more differentiated pitch or brief.',
    category: 'AI Research',
    status: 'coming-soon',
    icon: '🔭',
  },
  {
    id: 'reporting-automation',
    name: 'Reporting & Automation Suite',
    description:
      'Automate campaign performance reports, client-ready decks, and recurring analytics summaries — connected to your ad platforms via API.',
    category: 'Reporting & Automation',
    status: 'coming-soon',
    icon: '📊',
  },
]

export const TOOL_MAP: Record<string, Tool> = Object.fromEntries(
  TOOLS.map(t => [t.id, t])
)
