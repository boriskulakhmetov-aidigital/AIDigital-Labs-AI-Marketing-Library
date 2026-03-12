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
        toolIds: ['website-audit', 'aio-optimizer', 'competitive-intelligence'],
        trainingMaterials: [
          { label: 'TAM Scoring Framework', type: 'guide', url: '#' },
          { label: 'Competitive Landscape Walkthrough', type: 'video', url: '#' },
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
        toolIds: ['website-audit', 'neuromarketing-audit', 'aio-optimizer'],
        trainingMaterials: [
          { label: 'Next-Best-Action Scoring Guide', type: 'guide', url: '#' },
          { label: 'Prospect Scoring Template', type: 'template', url: '#' },
        ],
      },
      {
        id: 'build-proposal',
        number: 3,
        nodeLabel: 'Build Proposal',
        nodeIcon: '📄',
        title: 'Build a Comprehensive, Data-Backed Proposal',
        description:
          'Construct a proposal grounded in the prospect\'s own data. Lead with their documented gaps — website weaknesses, AI search invisibility, creative ineffectiveness — then present a tailored solution with channel mix, budget allocation, and projected outcomes. The proposal should feel like a diagnosis before a prescription.',
        toolIds: ['neuromarketing-audit', 'aio-optimizer', 'media-plan-builder', 'reporting-automation'],
        trainingMaterials: [
          { label: 'Proposal Deck Template', type: 'template', url: '#' },
          { label: 'ROI Framing Playbook', type: 'playbook', url: '#' },
          { label: 'Proposal Walkthrough Video', type: 'video', url: '#' },
        ],
      },
      {
        id: 'sales-conversation',
        number: 4,
        nodeLabel: 'Run Sales Conversation',
        nodeIcon: '🤝',
        title: 'Prepare & Run the Sales Conversation',
        description:
          'Prepare the pitch using the audit outputs as a narrative spine — show the prospect what they\'re missing in terms they recognise. Run the conversation as a consultative diagnostic: listen first, confirm the pain, then present the solution. Use the synthetic focus group and neuromarketing data to demonstrate depth and differentiation.',
        toolIds: ['neuromarketing-audit', 'synthetic-focus-group', 'reporting-automation'],
        trainingMaterials: [
          { label: 'Sales Conversation Playbook', type: 'playbook', url: '#' },
          { label: 'Objection Handling Guide', type: 'guide', url: '#' },
          { label: 'Live Pitch Demo Walkthrough', type: 'video', url: '#' },
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
          'Document the client\'s campaign objectives, KPIs, budget envelope, flight dates, and constraints. Align on success metrics upfront so every downstream decision can be traced back to the brief. A weak brief produces a weak plan — invest the time here.',
        toolIds: [],
        trainingMaterials: [
          { label: 'Brief Capture Template', type: 'template', url: '#' },
          { label: 'KPI Alignment Guide', type: 'guide', url: '#' },
        ],
      },
      {
        id: 'audience-research',
        number: 2,
        nodeLabel: 'Audience Research',
        nodeIcon: '👥',
        title: 'Define & Validate Audience with Synthetic Research',
        description:
          'Define target personas and pressure-test your assumptions using a synthetic focus group before any budget commitment. Validate which messages resonate, which channels the audience trusts, and which creative approaches land — all before spending a dollar on production or media.',
        toolIds: ['synthetic-focus-group', 'competitive-intelligence'],
        trainingMaterials: [
          { label: 'Persona Development Guide', type: 'guide', url: '#' },
          { label: 'Synthetic Research Walkthrough', type: 'video', url: '#' },
        ],
      },
      {
        id: 'channel-strategy',
        number: 3,
        nodeLabel: 'Channel Strategy',
        nodeIcon: '📡',
        title: 'Channel & Format Strategy',
        description:
          'Map validated audience insights to channel mix and ad formats. Factor in AI search visibility to understand where the client\'s organic presence supports or undermines the paid strategy. Build the recommended mix with documented rationale — each channel choice should be defensible.',
        toolIds: ['aio-optimizer', 'media-plan-builder'],
        trainingMaterials: [
          { label: 'Channel Mix Framework', type: 'guide', url: '#' },
          { label: 'AIO + Paid Alignment Guide', type: 'guide', url: '#' },
        ],
      },
      {
        id: 'creative-brief',
        number: 4,
        nodeLabel: 'Creative Brief',
        nodeIcon: '🎨',
        title: 'Develop the Creative Brief',
        description:
          'Translate audience and channel insights into a creative brief with neuromarketing guardrails. Specify the emotional hooks, visual hierarchy principles, colour direction, and messaging hierarchy informed by evidence — not creative intuition alone. Use SCAMPER to explore executional directions before locking the brief.',
        toolIds: ['neuromarketing-audit', 'scamper-ideation'],
        trainingMaterials: [
          { label: 'Creative Brief Template', type: 'template', url: '#' },
          { label: 'Neuromarketing Brief Guide', type: 'guide', url: '#' },
        ],
      },
      {
        id: 'plan-signoff',
        number: 5,
        nodeLabel: 'Plan Sign-off',
        nodeIcon: '✅',
        title: 'Present, Revise & Sign Off the Plan',
        description:
          'Package the complete plan — audience rationale, channel mix, creative brief, budget allocation, flight schedule — for client presentation. Address feedback with data rather than opinion. Generate the final approved plan document for handoff to execution teams.',
        toolIds: ['media-plan-builder', 'reporting-automation'],
        trainingMaterials: [
          { label: 'Plan Presentation Playbook', type: 'playbook', url: '#' },
          { label: 'Client Sign-off Checklist', type: 'template', url: '#' },
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
          'Establish the strategic foundation before any creative work begins. Review the client brief, audience context, competitive landscape, and success criteria. Define what "good" looks like and how you will measure it. A clear creative brief is the single biggest predictor of strong output.',
        toolIds: ['synthetic-focus-group'],
        trainingMaterials: [
          { label: 'Creative Strategy Guide', type: 'guide', url: '#' },
          { label: 'Brief Review Checklist', type: 'template', url: '#' },
        ],
      },
      {
        id: 'ideation-sprint',
        number: 2,
        nodeLabel: 'Ideation Sprint',
        nodeIcon: '⚡',
        title: 'Structured Ideation Sprint',
        description:
          'Run a facilitated SCAMPER ideation session inside Miro to generate a wide range of creative concepts before converging on the strongest directions. Use the SCAMPER framework to systematically explore variations — Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse. Diverge before you converge.',
        toolIds: ['scamper-ideation'],
        trainingMaterials: [
          { label: 'SCAMPER Facilitation Guide', type: 'guide', url: '#' },
          { label: 'Ideation Sprint Walkthrough', type: 'video', url: '#' },
        ],
      },
      {
        id: 'concept-validation',
        number: 3,
        nodeLabel: 'Concept Validation',
        nodeIcon: '🔬',
        title: 'Validate Concepts with Synthetic Audience',
        description:
          'Test shortlisted concepts against a synthetic focus group calibrated to your target demographic before committing to production. Identify which concepts resonate, which messages land, and which elements provoke the intended emotional response — at near-zero cost and in hours rather than weeks.',
        toolIds: ['synthetic-focus-group', 'neuromarketing-audit'],
        trainingMaterials: [
          { label: 'Concept Testing Guide', type: 'guide', url: '#' },
          { label: 'Synthetic Focus Group Setup', type: 'video', url: '#' },
        ],
      },
      {
        id: 'creative-production',
        number: 4,
        nodeLabel: 'Produce & Review',
        nodeIcon: '🧠',
        title: 'Creative Production & Neuromarketing Review',
        description:
          'Produce the selected creative executions against the validated direction. Before the client sees anything, run a neuromarketing audit to score each asset against attention capture, visual hierarchy, colour psychology, and emotional resonance. Fix issues internally — not in a client revision cycle.',
        toolIds: ['neuromarketing-audit'],
        trainingMaterials: [
          { label: 'Neuromarketing Scoring Guide', type: 'guide', url: '#' },
          { label: 'Creative Review Checklist', type: 'template', url: '#' },
        ],
      },
      {
        id: 'approve-handoff',
        number: 5,
        nodeLabel: 'Approve & Handoff',
        nodeIcon: '🚀',
        title: 'Final Approval & Production Handoff',
        description:
          'Present final creative with neuromarketing scores and audience validation data attached. This transforms a subjective creative review into an evidence-based conversation. Obtain approval, document all production specifications, and hand off to the delivery team with full context and no ambiguity.',
        toolIds: ['reporting-automation'],
        trainingMaterials: [
          { label: 'Client Presentation Playbook', type: 'playbook', url: '#' },
          { label: 'Production Handoff Template', type: 'template', url: '#' },
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
          'Define the audit scope with the client — which accounts, campaigns, channels, and assets are in scope. Establish the performance baseline: current KPIs, benchmarks against industry norms, and the business context behind the numbers. What do the results need to achieve, and for whom?',
        toolIds: [],
        trainingMaterials: [
          { label: 'Audit Scoping Template', type: 'template', url: '#' },
          { label: 'Baseline Benchmarking Guide', type: 'guide', url: '#' },
        ],
      },
      {
        id: 'digital-presence',
        number: 2,
        nodeLabel: 'Digital Presence',
        nodeIcon: '🌐',
        title: 'Digital Presence & Website Analysis',
        description:
          'Audit the client\'s website and digital footprint for technical health, UX quality, page speed, and SEO signals. Performance campaigns land on pages — if the landing experience is broken, no amount of media spend will fix conversion rates. Diagnose before you optimise.',
        toolIds: ['website-audit'],
        trainingMaterials: [
          { label: 'Website Audit Guide', type: 'guide', url: '#' },
          { label: 'Technical Health Checklist', type: 'template', url: '#' },
        ],
      },
      {
        id: 'ai-visibility',
        number: 3,
        nodeLabel: 'AI Search Visibility',
        nodeIcon: '🤖',
        title: 'AI Search Readiness & Visibility Score',
        description:
          'Score the client\'s content and brand for inclusion in AI-generated search answers across ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot. This is the new frontier of organic visibility — and most advertisers are not yet measuring it. Identify the gap before competitors do.',
        toolIds: ['aio-optimizer', 'competitive-intelligence'],
        trainingMaterials: [
          { label: 'AIO Scoring Explained', type: 'video', url: '#' },
          { label: 'AI Visibility Benchmarks', type: 'guide', url: '#' },
        ],
      },
      {
        id: 'creative-effectiveness',
        number: 4,
        nodeLabel: 'Creative Effectiveness',
        nodeIcon: '🎨',
        title: 'Creative Effectiveness Review',
        description:
          'Score live and recent creative assets against neuromarketing principles — attention capture, emotional impact, visual hierarchy, colour psychology, and message recall. Identify which executions are working at a neurological level and which are wasting spend. Evidence-based creative critique.',
        toolIds: ['neuromarketing-audit'],
        trainingMaterials: [
          { label: 'Creative Effectiveness Rubric', type: 'guide', url: '#' },
          { label: 'Neuromarketing Scoring Walkthrough', type: 'video', url: '#' },
        ],
      },
      {
        id: 'recommendations',
        number: 5,
        nodeLabel: 'Action Roadmap',
        nodeIcon: '🗺️',
        title: 'Strategic Recommendations & Action Roadmap',
        description:
          'Compile all findings into a structured client report with prioritised action items across digital presence, AI visibility, and creative effectiveness. Frame every recommendation in terms of business impact, estimated effort, and implementation priority. The audit should prompt a follow-up conversation — not end one.',
        toolIds: ['neuromarketing-audit', 'reporting-automation'],
        trainingMaterials: [
          { label: 'Recommendations Report Template', type: 'template', url: '#' },
          { label: 'Roadmap Presentation Playbook', type: 'playbook', url: '#' },
        ],
      },
    ],
  },
]
