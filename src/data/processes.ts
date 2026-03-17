import type { Process } from '../types'

export const PROCESSES: Process[] = [
  {
    id: 'prospecting',
    title: 'Prospecting & Selling Digital Advertising',
    shortTitle: 'Prospecting & Selling',
    icon: '🎯',
    description:
      'A structured, intelligence-led sales process for winning digital advertising budgets from agencies and their clients.',
    steps: [
      {
        id: 'tam-research',
        number: 1,
        nodeLabel: 'Research & Score TAM',
        nodeIcon: '🗺️',
        title: 'Research & Score Total Addressable Market',
        description:
          'Map the total addressable market for digital advertising in your territory. Identify the competitive landscape, benchmark spend levels, and score opportunities by vertical, size, and timing. This gives your team a prioritised universe to work from — not a random list.',
        resourceIds: [
          'website-audit', 'aio-optimizer', 'competitive-intelligence',
          'smart-prospecting-agent', 'prospect-scanner-agent',
          'course-sales-prospecting', 'course-aio',
          'workshop-spark',
        ],
      },
      {
        id: 'prospect-scoring',
        number: 2,
        nodeLabel: 'Identify & Score Prospects',
        nodeIcon: '🎯',
        title: 'Identify & Score Prospects with Next-Best-Action Models',
        description:
          'Apply next-best-action scoring to identify which prospects are most likely to convert and when. Combine digital footprint data (website health, AI search visibility, creative quality) with firmographic signals to build a prioritised pipeline with clear outreach rationale for each account.',
        resourceIds: [
          'website-audit', 'neuromarketing-audit', 'aio-optimizer',
          'smart-prospecting-agent', 'prospect-scanner-agent',
          'course-sales-prospecting', 'course-website-audit',
          'prompt-audience-research',
        ],
      },
      {
        id: 'build-proposal',
        number: 3,
        nodeLabel: 'Build Proposal',
        nodeIcon: '📄',
        title: 'Build a Comprehensive, Data-Backed Proposal',
        description:
          'Construct a proposal grounded in the prospect\'s own data. Lead with their documented gaps — website weaknesses, AI search invisibility, creative ineffectiveness — then present a tailored solution with channel mix, budget allocation, and projected outcomes.',
        resourceIds: [
          'neuromarketing-audit', 'aio-optimizer', 'media-plan-builder', 'reporting-automation',
          'case-study-builder', 'pitch-deck-scorer', 'document-logic-check',
          'course-media-planning',
          'prompt-pptx',
        ],
      },
      {
        id: 'sales-conversation',
        number: 4,
        nodeLabel: 'Run Sales Conversation',
        nodeIcon: '🤝',
        title: 'Prepare & Run the Sales Conversation',
        description:
          'Prepare the pitch using the audit outputs as a narrative spine — show the prospect what they\'re missing in terms they recognise. Run the conversation as a consultative diagnostic: listen first, confirm the pain, then present the solution.',
        resourceIds: [
          'neuromarketing-audit', 'synthetic-focus-group', 'reporting-automation',
          'multipurpose-coaching-bot', 'technical-assistant',
          'course-sales-prospecting',
          'workshop-enablement',
          'prompt-sales-coach',
        ],
      },
    ],
  },
  {
    id: 'media-plan',
    title: 'Media Plan Development',
    shortTitle: 'Media Planning',
    icon: '📡',
    description:
      'Build defensible, insight-driven media plans that connect audience intelligence to channel strategy — not just gut feel and historical allocations.',
    steps: [
      {
        id: 'client-brief',
        number: 1,
        nodeLabel: 'Client Brief',
        nodeIcon: '📋',
        title: 'Capture Client Brief & Objectives',
        description:
          'Document the client\'s campaign objectives, KPIs, budget envelope, flight dates, and constraints. Align on success metrics upfront so every downstream decision can be traced back to the brief.',
        resourceIds: [
          'course-media-planning',
          'prompt-pptx',
        ],
      },
      {
        id: 'audience-research',
        number: 2,
        nodeLabel: 'Audience Research',
        nodeIcon: '👥',
        title: 'Define & Validate Audience with Synthetic Research',
        description:
          'Define target personas and pressure-test your assumptions using a synthetic focus group before any budget commitment. Validate which messages resonate, which channels the audience trusts, and which creative approaches land.',
        resourceIds: [
          'synthetic-focus-group', 'competitive-intelligence',
          'course-focus-group',
          'prompt-audience-research',
        ],
      },
      {
        id: 'channel-strategy',
        number: 3,
        nodeLabel: 'Channel Strategy',
        nodeIcon: '📡',
        title: 'Channel & Format Strategy',
        description:
          'Map validated audience insights to channel mix and ad formats. Factor in AI search visibility to understand where the client\'s organic presence supports or undermines the paid strategy.',
        resourceIds: [
          'aio-optimizer', 'media-plan-builder',
          'course-aio', 'course-media-planning',
        ],
      },
      {
        id: 'creative-brief',
        number: 4,
        nodeLabel: 'Creative Brief',
        nodeIcon: '🎨',
        title: 'Develop the Creative Brief',
        description:
          'Translate audience and channel insights into a creative brief with neuromarketing guardrails. Specify the emotional hooks, visual hierarchy principles, colour direction, and messaging hierarchy informed by evidence.',
        resourceIds: [
          'neuromarketing-audit', 'scamper-ideation',
          'course-neuromarketing', 'course-scamper',
        ],
      },
      {
        id: 'plan-signoff',
        number: 5,
        nodeLabel: 'Plan Sign-off',
        nodeIcon: '✅',
        title: 'Present, Revise & Sign Off the Plan',
        description:
          'Package the complete plan — audience rationale, channel mix, creative brief, budget allocation, flight schedule — for client presentation. Address feedback with data rather than opinion.',
        resourceIds: [
          'media-plan-builder', 'reporting-automation',
          'prompt-pptx',
        ],
      },
    ],
  },
  {
    id: 'creative',
    title: 'Creative Development',
    shortTitle: 'Creative Dev',
    icon: '🎨',
    description:
      'A structured creative development process that builds in audience validation and neuromarketing review — fewer revisions, stronger work.',
    steps: [
      {
        id: 'strategic-brief',
        number: 1,
        nodeLabel: 'Strategic Brief',
        nodeIcon: '🧭',
        title: 'Strategic Brief & Foundation',
        description:
          'Establish the strategic foundation before any creative work begins. Review the client brief, audience context, competitive landscape, and success criteria.',
        resourceIds: [
          'synthetic-focus-group',
          'course-focus-group', 'course-creative-effectiveness',
        ],
      },
      {
        id: 'ideation-sprint',
        number: 2,
        nodeLabel: 'Ideation Sprint',
        nodeIcon: '⚡',
        title: 'Structured Ideation Sprint',
        description:
          'Run a facilitated SCAMPER ideation session inside Miro to generate a wide range of creative concepts before converging on the strongest directions. Diverge before you converge.',
        resourceIds: [
          'scamper-ideation', 'ideation-synthesizer', 'rapid-prototyper',
          'course-scamper',
          'workshop-custom',
        ],
      },
      {
        id: 'concept-validation',
        number: 3,
        nodeLabel: 'Concept Validation',
        nodeIcon: '🔬',
        title: 'Validate Concepts with Synthetic Audience',
        description:
          'Test shortlisted concepts against a synthetic focus group calibrated to your target demographic before committing to production.',
        resourceIds: [
          'synthetic-focus-group', 'neuromarketing-audit',
          'course-focus-group', 'course-neuromarketing',
        ],
      },
      {
        id: 'creative-production',
        number: 4,
        nodeLabel: 'Produce & Review',
        nodeIcon: '🧠',
        title: 'Creative Production & Neuromarketing Review',
        description:
          'Produce the selected creative executions against the validated direction. Before the client sees anything, run a neuromarketing audit to score each asset against attention capture, visual hierarchy, colour psychology, and emotional resonance.',
        resourceIds: [
          'neuromarketing-audit',
          'course-neuromarketing', 'course-creative-effectiveness',
          'workshop-neuromarketing',
        ],
      },
      {
        id: 'approve-handoff',
        number: 5,
        nodeLabel: 'Approve & Handoff',
        nodeIcon: '🚀',
        title: 'Final Approval & Production Handoff',
        description:
          'Present final creative with neuromarketing scores and audience validation data attached. Obtain approval, document all production specifications, and hand off to the delivery team.',
        resourceIds: [
          'reporting-automation',
          'prompt-pptx',
        ],
      },
    ],
  },
  {
    id: 'audit',
    title: 'Account Performance Evaluation & Audit',
    shortTitle: 'Performance Audit',
    icon: '📊',
    description:
      'A comprehensive account review that goes beyond vanity metrics — connecting digital presence, AI search readiness, and creative effectiveness into a single actionable narrative.',
    steps: [
      {
        id: 'scope-baseline',
        number: 1,
        nodeLabel: 'Scope & Baseline',
        nodeIcon: '📐',
        title: 'Define Scope & Establish Baselines',
        description:
          'Define the audit scope with the client — which accounts, campaigns, channels, and assets are in scope. Establish the performance baseline: current KPIs, benchmarks against industry norms, and the business context behind the numbers.',
        resourceIds: [
          'course-website-audit',
        ],
      },
      {
        id: 'digital-presence',
        number: 2,
        nodeLabel: 'Digital Presence',
        nodeIcon: '🌐',
        title: 'Digital Presence & Website Analysis',
        description:
          'Audit the client\'s website and digital footprint for technical health, UX quality, page speed, and SEO signals. Performance campaigns land on pages — if the landing experience is broken, no amount of media spend will fix conversion rates.',
        resourceIds: [
          'website-audit',
          'course-website-audit',
        ],
      },
      {
        id: 'ai-visibility',
        number: 3,
        nodeLabel: 'AI Search Visibility',
        nodeIcon: '🤖',
        title: 'AI Search Readiness & Visibility Score',
        description:
          'Score the client\'s content and brand for inclusion in AI-generated search answers across ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot. This is the new frontier of organic visibility.',
        resourceIds: [
          'aio-optimizer', 'competitive-intelligence', 'prompt-engineering-assistant',
          'course-aio',
          'workshop-ai-search',
        ],
      },
      {
        id: 'creative-effectiveness',
        number: 4,
        nodeLabel: 'Creative Effectiveness',
        nodeIcon: '🎨',
        title: 'Creative Effectiveness Review',
        description:
          'Score live and recent creative assets against neuromarketing principles — attention capture, emotional impact, visual hierarchy, colour psychology, and message recall.',
        resourceIds: [
          'neuromarketing-audit',
          'course-neuromarketing', 'course-creative-effectiveness',
          'workshop-neuromarketing',
        ],
      },
      {
        id: 'recommendations',
        number: 5,
        nodeLabel: 'Action Roadmap',
        nodeIcon: '🗺️',
        title: 'Strategic Recommendations & Action Roadmap',
        description:
          'Compile all findings into a structured client report with prioritised action items across digital presence, AI visibility, and creative effectiveness.',
        resourceIds: [
          'neuromarketing-audit', 'reporting-automation', 'dsp-performance-agent',
          'prompt-pptx',
        ],
      },
    ],
  },
]
