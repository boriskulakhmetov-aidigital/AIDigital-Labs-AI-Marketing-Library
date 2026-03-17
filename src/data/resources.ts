import type { Resource } from '../types'

/* ════════════════════════════════════════════════════════════
   Single source of truth — every tool, course, workshop, and
   AI-assisted learning referenced across the portal lives here.
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
    status: 'live',
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
    status: 'coming-soon',
    icon: '⚡',
  },
  {
    id: 'aio-optimizer',
    type: 'tool',
    name: 'AIO Optimizer',
    description:
      "Audits AI engine awareness of a product or brand and provides recommendations to improve visibility across ChatGPT, Perplexity, Google AI Overviews, and beyond.",
    category: 'AI Research',
    status: 'live',
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
  {
    id: 'ideation-synthesizer',
    type: 'tool',
    name: 'Ideation Synthesizer',
    description:
      'Collects scattered notes from Miro boards and docs, and outputs a structured, prioritised idea list. Integrated as a Miro app for seamless in-board use.',
    category: 'Creative & Ideation',
    status: 'live',
    icon: '💡',
    url: '#',
    actionLabel: 'Open Tool',
  },
  {
    id: 'rapid-prototyper',
    type: 'tool',
    name: 'Rapid Prototyper',
    description:
      'Instantly mocks up ideas during brainstorms so the team can react to something tangible. Runs as a Miro app — turn any sticky note into a visual prototype in seconds.',
    category: 'Creative & Ideation',
    status: 'live',
    icon: '🎨',
    url: '#',
    actionLabel: 'Open Tool',
  },
  {
    id: 'prompt-engineering-assistant',
    type: 'tool',
    name: 'Prompt Engineering Assistant',
    description:
      'Helps users craft or fine-tune prompts while testing for consistency, hallucinations and drift. Your copilot for getting reliable, repeatable outputs from any LLM.',
    category: 'AI Research',
    status: 'live',
    icon: '✏️',
    url: '#',
    actionLabel: 'Open Tool',
  },
  {
    id: 'smart-prospecting-agent',
    type: 'tool',
    name: 'Smart Prospecting Agent',
    description:
      'Scan LinkedIn, CapIQ, and CRM data to surface high-potential leads ranked by propensity score via ML model. Turns hours of manual prospecting into a prioritised shortlist.',
    category: 'Sales & Strategy',
    status: 'beta',
    icon: '🎯',
    url: '#',
    actionLabel: 'Open Tool',
  },
  {
    id: 'prospect-scanner-agent',
    type: 'tool',
    name: 'Prospect Scanner Agent',
    description:
      "Create sellers' cheat sheet with key verticals, use-cases, and platform breakdown by scrubbing pixels and social media. Walk into every meeting fully briefed.",
    category: 'Sales & Strategy',
    status: 'beta',
    icon: '📡',
    url: '#',
    actionLabel: 'Open Tool',
  },
  {
    id: 'case-study-builder',
    type: 'tool',
    name: 'Case Study Builder',
    description:
      'Pull performance data from Elevate and brand guidelines to auto-produce polished client case studies. From raw numbers to client-ready narrative in minutes.',
    category: 'Sales & Strategy',
    status: 'coming-soon',
    icon: '📝',
  },
  {
    id: 'pitch-deck-scorer',
    type: 'tool',
    name: 'Pitch Deck Scorer',
    description:
      'Review finished decks through proven sales techniques, flagging weaknesses and suggesting fixes. Catch gaps before the client does.',
    category: 'Sales & Strategy',
    status: 'coming-soon',
    icon: '📊',
  },
  {
    id: 'document-logic-check',
    type: 'tool',
    name: 'Document Logic Check',
    description:
      'Advanced proofreading layer across all outgoing documents to check copy and document logic including process compliance and MECE. Your last line of defence before send.',
    category: 'Audit & Analysis',
    status: 'coming-soon',
    icon: '📋',
  },
  {
    id: 'multipurpose-coaching-bot',
    type: 'tool',
    name: 'Multipurpose Coaching Bot',
    description:
      'Interactive multipurpose agent for reps to practice sales techniques and AIDigital process handling. Safe environment to rehearse before the real thing.',
    category: 'Sales & Strategy',
    status: 'coming-soon',
    icon: '🏋️',
  },
  {
    id: 'technical-assistant',
    type: 'tool',
    name: 'Technical Assistant',
    description:
      'On-demand resource helping reps answer deep technical or value-based questions during live calls. Never get caught off-guard on product specs again.',
    category: 'Sales & Strategy',
    status: 'coming-soon',
    icon: '🔧',
  },
  {
    id: 'dsp-performance-agent',
    type: 'tool',
    name: 'DSP Agnostic Performance Assessment Agent',
    description:
      'Performance reporting integrated across AIDigital and competitor DSPs within client landscape. One view across all platforms.',
    category: 'Reporting & Automation',
    status: 'coming-soon',
    icon: '📈',
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
    status: 'coming-soon',
    icon: '🧠',
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
    status: 'coming-soon',
    icon: '🔍',
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
    status: 'coming-soon',
    icon: '🤖',
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
    status: 'coming-soon',
    icon: '👥',
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
    status: 'coming-soon',
    icon: '⚡',
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
    status: 'coming-soon',
    icon: '🎯',
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
    status: 'coming-soon',
    icon: '📡',
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
    status: 'coming-soon',
    icon: '🎨',
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
    name: 'Online Ideation Workshop',
    description:
      'A hands-on session of ideation and tool design specifically for your team. Walk through real use cases, run live tools on your own data, and leave with a prioritised adoption roadmap.',
    category: 'Enablement',
    status: 'beta',
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
    status: 'beta',
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
    status: 'coming-soon',
    icon: '🔎',
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
    status: 'coming-soon',
    icon: '👥',
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
    status: 'coming-soon',
    icon: '📈',
    duration: '1 hour',
    format: 'Online',
  },

  // ══════════════════════════════════════════════════════════
  //  AI-ASSISTED LEARNING — Chatbots, AI Agents & Prompt Libraries
  // ══════════════════════════════════════════════════════════
  {
    id: 'agent-chatbots-llms',
    type: 'ai-learning',
    name: 'Chatbots and LLMs',
    description:
      'An interactive chatbot that teaches you the fundamentals of large language models and conversational AI — how they work, what they can and can\'t do, and how to use them effectively in a marketing context.',
    category: 'AI Foundations',
    status: 'live',
    icon: '💬',
    url: '#',
    actionLabel: 'Start Chat',
    format: 'Chatbot',
  },
  {
    id: 'agent-spark-blaze',
    type: 'ai-learning',
    name: 'SPARK and BLAZE Frameworks',
    description:
      'A guided chatbot that walks you through the SPARK (prompt engineering) and BLAZE (agent orchestration) frameworks — learn to write effective prompts and design multi-step AI workflows through conversation.',
    category: 'AI Foundations',
    status: 'live',
    icon: '🔥',
    url: '#',
    actionLabel: 'Start Chat',
    format: 'Chatbot',
  },
  {
    id: 'prompt-hallucination',
    type: 'ai-learning',
    name: 'Mitigating Hallucination & Source-Checking',
    description:
      'A prompt library and reference guide for identifying, mitigating, and source-checking AI hallucinations. Learn practical techniques to verify AI outputs, design hallucination-resistant prompts, and build trust in AI-assisted workflows.',
    category: 'AI Foundations',
    status: 'live',
    icon: '🛡️',
    url: '#',
    actionLabel: 'Open Library',
    format: 'Prompt Library',
  },
  {
    id: 'prompt-sales-coach',
    type: 'ai-learning',
    name: 'AI Sales Coach',
    description:
      'A virtual counterpart for your sales team to practice pitches and objection handling in a safe environment. Simulates client personas, scores your pitch, and provides real-time coaching on messaging, tone, and closing techniques.',
    category: 'Sales & Enablement',
    status: 'coming-soon',
    icon: '🎙️',
    format: 'AI Agent',
  },
  {
    id: 'prompt-tech-agent',
    type: 'ai-learning',
    name: 'AI Technical Agent — Open Garden',
    description:
      'An AI agent that helps your teams answer any question about AIDigital\'s programmatic offering "Open Garden" — capabilities, targeting options, inventory, integrations, and technical specs.',
    category: 'Sales & Enablement',
    status: 'coming-soon',
    icon: '🤖',
    format: 'AI Agent',
  },
  {
    id: 'prompt-pptx',
    type: 'ai-learning',
    name: 'PowerPoint Creation Prompts',
    description:
      'A curated prompt library for efficient PowerPoint document creation — from proposal decks to performance reports. Structured templates that turn raw data and briefs into presentation-ready slides.',
    category: 'Productivity',
    status: 'coming-soon',
    icon: '📑',
    format: 'Prompt Library',
  },
  {
    id: 'prompt-audience-research',
    type: 'ai-learning',
    name: 'Customer Audience Research Prompts',
    description:
      'Prompt library for conducting deep customer audience research with AI — persona development, behavioural segmentation, need-state mapping, and competitive audience analysis.',
    category: 'Research',
    status: 'coming-soon',
    icon: '🔬',
    format: 'Prompt Library',
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
