import type { Resource } from '../types'

/* ════════════════════════════════════════════════════════════
   Single source of truth — every tool, course, workshop, and
   prompt library referenced across the portal lives here.
   ════════════════════════════════════════════════════════════ */

export const RESOURCES: Resource[] = [
  // ══════════════════════════════════════════════════════════
  //  TOOLS
  // ══════════════════════════════════════════════════════════
  {
    id: 'website-audit',
    type: 'tool',
    name: 'Website Audit Tool',
    description:
      'Full technical and UX analysis of a client website — performance scores, structural issues, SEO signals, and conversion bottlenecks. Generate a client-ready report in minutes.',
    category: 'Audit & Analysis',
    status: 'live',
    icon: '🔍',
    url: '#',
    actionLabel: 'Open Tool',
  },
  {
    id: 'neuromarketing-audit',
    type: 'tool',
    name: 'Neuromarketing & Color Psychology Audit',
    description:
      'AI-powered audit of ad creative and landing pages against neuromarketing principles — attention, emotion, visual hierarchy, and colour psychology. Scored and exportable.',
    category: 'Audit & Analysis',
    status: 'live',
    icon: '🧠',
    url: 'https://aidigitallabs-neuromarketing-audit.netlify.app/',
    actionLabel: 'Open Tool',
  },
  {
    id: 'synthetic-focus-group',
    type: 'tool',
    name: 'Synthetic Focus Group',
    description:
      'Simulate audience reactions to concepts, messaging, and creative using AI personas calibrated to your target demographics — before spending a dollar on production.',
    category: 'AI Research',
    status: 'beta',
    icon: '👥',
    url: 'https://aidigitallabs-synthetic-focus-group.netlify.app/',
    actionLabel: 'Open Tool',
  },
  {
    id: 'scamper-ideation',
    type: 'tool',
    name: 'SCAMPER Ideation Tool',
    description:
      'Structured creative brainstorming inside Miro using the SCAMPER framework — Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse.',
    category: 'Creative & Ideation',
    status: 'live',
    icon: '⚡',
    url: '#',
    actionLabel: 'Open in Miro',
  },
  {
    id: 'aio-optimizer',
    type: 'tool',
    name: 'AIO Optimizer',
    description:
      "Evaluate a client's content and digital presence for inclusion potential in AI-generated search answers across ChatGPT, Perplexity, Google AI Overviews, and beyond.",
    category: 'AI Research',
    status: 'beta',
    icon: '🤖',
    url: '#',
    actionLabel: 'Open Tool',
  },
  {
    id: 'media-plan-builder',
    type: 'tool',
    name: 'Media Plan Builder',
    description:
      'Generate structured media plans with channel mix recommendations, budget allocation, and flight schedules — shareable as PDF or editable spreadsheet.',
    category: 'Reporting & Automation',
    status: 'coming-soon',
    icon: '📋',
  },
  {
    id: 'competitive-intelligence',
    type: 'tool',
    name: 'Competitive Intelligence Tool',
    description:
      'Map competitor ad activity, messaging patterns, and AI search presence — giving you the context to craft a sharper, more differentiated pitch or brief.',
    category: 'AI Research',
    status: 'coming-soon',
    icon: '🔭',
  },
  {
    id: 'reporting-automation',
    type: 'tool',
    name: 'Reporting & Automation Suite',
    description:
      'Automate campaign performance reports, client-ready decks, and recurring analytics summaries — connected to your ad platforms via API.',
    category: 'Reporting & Automation',
    status: 'coming-soon',
    icon: '📊',
  },

  // ══════════════════════════════════════════════════════════
  //  COURSES — Video & Static Learning Modules
  // ══════════════════════════════════════════════════════════
  {
    id: 'course-neuromarketing',
    type: 'course',
    name: 'Neuromarketing & Color Psychology Fundamentals',
    description:
      'Learn the behavioural science behind why people click, buy, and remember. Covers attention capture, emotional triggers, visual hierarchy, colour semantics, and how to apply them to ad creative and landing pages.',
    category: 'Audit & Analysis',
    status: 'live',
    icon: '🧠',
    url: '#',
    actionLabel: 'Start Course',
    duration: '45 min',
    format: 'Self-paced',
  },
  {
    id: 'course-website-audit',
    type: 'course',
    name: 'Website Audit Deep Dive',
    description:
      'Step-by-step walkthrough of the Website Audit Tool — how to interpret scores, prioritise fixes, and present technical findings in language clients understand.',
    category: 'Audit & Analysis',
    status: 'live',
    icon: '🔍',
    url: '#',
    actionLabel: 'Start Course',
    duration: '30 min',
    format: 'Self-paced',
  },
  {
    id: 'course-aio',
    type: 'course',
    name: 'AI Search Optimization (AIO) Masterclass',
    description:
      'Understand how AI search engines select, rank, and cite content. Learn to score a brand\'s AI search visibility and build an improvement roadmap that closes the gap before competitors.',
    category: 'AI Research',
    status: 'live',
    icon: '🤖',
    url: '#',
    actionLabel: 'Start Course',
    duration: '40 min',
    format: 'Self-paced',
  },
  {
    id: 'course-focus-group',
    type: 'course',
    name: 'Running Synthetic Focus Groups',
    description:
      'How to set up, calibrate, and interpret results from AI-powered synthetic focus groups. Covers persona design, question framing, response analysis, and presenting findings to clients.',
    category: 'AI Research',
    status: 'live',
    icon: '👥',
    url: '#',
    actionLabel: 'Start Course',
    duration: '35 min',
    format: 'Self-paced',
  },
  {
    id: 'course-scamper',
    type: 'course',
    name: 'SCAMPER Creative Methodology',
    description:
      'Master the SCAMPER framework for structured creative ideation — Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse. Includes facilitation guide for running sessions with teams.',
    category: 'Creative & Ideation',
    status: 'live',
    icon: '⚡',
    url: '#',
    actionLabel: 'Start Course',
    duration: '25 min',
    format: 'Self-paced',
  },
  {
    id: 'course-sales-prospecting',
    type: 'course',
    name: 'AI-Powered Prospecting & Sales',
    description:
      'From TAM scoring to next-best-action models — learn how to build an intelligence-led sales pipeline using AI tools. Covers prospect scoring, data-backed proposals, and consultative selling techniques.',
    category: 'Sales & Strategy',
    status: 'live',
    icon: '🎯',
    url: '#',
    actionLabel: 'Start Course',
    duration: '50 min',
    format: 'Self-paced',
  },
  {
    id: 'course-media-planning',
    type: 'course',
    name: 'Data-Driven Media Planning with AI',
    description:
      'Build defensible media plans grounded in audience intelligence and AI insights. Covers brief capture, audience validation, channel strategy, and creative briefing — end to end.',
    category: 'Sales & Strategy',
    status: 'live',
    icon: '📡',
    url: '#',
    actionLabel: 'Start Course',
    duration: '45 min',
    format: 'Self-paced',
  },
  {
    id: 'course-creative-effectiveness',
    type: 'course',
    name: 'Creative Effectiveness Analysis',
    description:
      'How to evaluate live campaign creative against neuromarketing principles — attention, emotion, hierarchy, recall. Learn to produce evidence-based creative reviews that transform subjective feedback cycles.',
    category: 'Creative & Ideation',
    status: 'live',
    icon: '🎨',
    url: '#',
    actionLabel: 'Start Course',
    duration: '35 min',
    format: 'Self-paced',
  },

  // ══════════════════════════════════════════════════════════
  //  WORKSHOPS — In-Person & Online Sessions
  // ══════════════════════════════════════════════════════════
  {
    id: 'workshop-spark',
    type: 'workshop',
    name: '30-min Spark Call',
    description:
      'An "art of the possible" expansion session — discover what AI Labs partnership can do for your team. We\'ll map your current workflow, identify quick wins, and paint a picture of what\'s possible with the full tool suite.',
    category: 'Discovery',
    status: 'live',
    icon: '✨',
    url: '#',
    actionLabel: 'Schedule Session',
    duration: '30 min',
    format: 'Online',
  },
  {
    id: 'workshop-enablement',
    type: 'workshop',
    name: 'AI Enablement Workshop',
    description:
      'A hands-on session of ideation and tool design specifically for your team. Walk through real use cases, run live tools on your own data, and leave with a prioritised adoption roadmap.',
    category: 'Enablement',
    status: 'live',
    icon: '🚀',
    url: '#',
    actionLabel: 'Schedule Session',
    duration: '60 min',
    format: 'Online',
  },
  {
    id: 'workshop-custom',
    type: 'workshop',
    name: 'Custom In-Person Workshop',
    description:
      'A live learning, ideation, and design session from which your team will come out with tools tailored for you, by you — right away. Covers the full AI Labs suite applied to your specific business challenges.',
    category: 'Enablement',
    status: 'live',
    icon: '🏢',
    url: '#',
    actionLabel: 'Schedule Session',
    duration: '3–4 hours',
    format: 'In-person',
  },
  {
    id: 'workshop-neuromarketing',
    type: 'workshop',
    name: 'Neuromarketing & Color Psychology Workshop',
    description:
      'Learn what lies behind the behavioural science of creatives and how to apply it in your work. Interactive session with live scoring of your own assets, colour psychology deep dive, and actionable takeaways.',
    category: 'Specialized',
    status: 'live',
    icon: '🧠',
    url: '#',
    actionLabel: 'Schedule Session',
    duration: '1 hour',
    format: 'Online',
  },
  {
    id: 'workshop-ai-search',
    type: 'workshop',
    name: 'AI Search & Outreach Improvement',
    description:
      'How AI search engines work, how they select and cite content, and what you can do to improve your clients\' visibility across ChatGPT, Perplexity, and Google AI Overviews.',
    category: 'Specialized',
    status: 'live',
    icon: '🔎',
    url: '#',
    actionLabel: 'Schedule Session',
    duration: '1 hour',
    format: 'Online',
  },
  {
    id: 'workshop-focus-groups',
    type: 'workshop',
    name: 'AI-Enabled Focus Groups',
    description:
      'How to run focus groups in AI-enabled environments — from persona calibration to result interpretation. Hands-on practice with the Synthetic Focus Group tool on your live briefs.',
    category: 'Specialized',
    status: 'live',
    icon: '👥',
    url: '#',
    actionLabel: 'Schedule Session',
    duration: '1 hour',
    format: 'Online',
  },
  {
    id: 'workshop-mmm',
    type: 'workshop',
    name: 'Marketing Mix Modelling for Campaigns',
    description:
      'How to best utilize marketing mix modelling in building successful campaigns. Covers data inputs, model interpretation, budget reallocation, and presenting MMM insights to clients.',
    category: 'Specialized',
    status: 'live',
    icon: '📈',
    url: '#',
    actionLabel: 'Schedule Session',
    duration: '1 hour',
    format: 'Online',
  },

  // ══════════════════════════════════════════════════════════
  //  PROMPT LIBRARIES & INTERACTIVE TOOLS
  // ══════════════════════════════════════════════════════════
  {
    id: 'prompt-sales-coach',
    type: 'prompt-library',
    name: 'AI Sales Coach',
    description:
      'A virtual counterpart for your sales team to practice pitches and objection handling in a safe environment. Simulates client personas, scores your pitch, and provides real-time coaching on messaging, tone, and closing techniques.',
    category: 'Sales & Enablement',
    status: 'beta',
    icon: '🎙️',
    url: '#',
    actionLabel: 'Try It',
  },
  {
    id: 'prompt-tech-agent',
    type: 'prompt-library',
    name: 'AI Technical Agent — Open Garden',
    description:
      'An AI agent that helps your teams answer any question about AIDigital\'s programmatic offering "Open Garden" — capabilities, targeting options, inventory, integrations, and technical specs.',
    category: 'Sales & Enablement',
    status: 'beta',
    icon: '🤖',
    url: '#',
    actionLabel: 'Try It',
  },
  {
    id: 'prompt-pptx',
    type: 'prompt-library',
    name: 'PowerPoint Creation Prompts',
    description:
      'A curated prompt library for efficient PowerPoint document creation — from proposal decks to performance reports. Structured templates that turn raw data and briefs into presentation-ready slides.',
    category: 'Productivity',
    status: 'live',
    icon: '📑',
    url: '#',
    actionLabel: 'Open Library',
  },
  {
    id: 'prompt-audience-research',
    type: 'prompt-library',
    name: 'Customer Audience Research Prompts',
    description:
      'Prompt library for conducting deep customer audience research with AI — persona development, behavioural segmentation, need-state mapping, and competitive audience analysis.',
    category: 'Research',
    status: 'live',
    icon: '🔬',
    url: '#',
    actionLabel: 'Open Library',
  },
]

/* ── Lookup helpers ── */

export const RESOURCE_MAP: Record<string, Resource> = Object.fromEntries(
  RESOURCES.map(r => [r.id, r]),
)

export function getResourcesByType(type: Resource['type']): Resource[] {
  return RESOURCES.filter(r => r.type === type)
}

export function getToolCategories(): string[] {
  const cats = new Set(RESOURCES.filter(r => r.type === 'tool').map(r => r.category))
  return [...cats]
}
