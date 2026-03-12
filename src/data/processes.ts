import type { Process } from '../types'

export const PROCESSES: Process[] = [
  {
    id: 'prospecting',
    title: 'Prospecting & Selling Digital Advertising',
    shortTitle: 'Prospecting & Selling',
    icon: '🎯',
    description:
      "Walk a prospect through a data-driven pitch that leads with their own gaps — and closes with a clear path to results. Every step is backed by AI-generated evidence from the client's own digital presence.",
    steps: [
      {
        id: 'qualify',
        number: 1,
        title: 'Qualify the Prospect',
        description:
          "Audit the advertiser's digital presence and existing creative to identify gaps, missed opportunities, and compelling talking points for your pitch. Go in knowing more than they expect.",
        toolIds: ['website-audit', 'neuromarketing-audit'],
        trainingUrl: '#',
        trainingLabel: 'Prospecting playbook',
      },
      {
        id: 'narrative',
        number: 2,
        title: 'Build the Value Narrative',
        description:
          "Use AI search readiness scores to show the prospect exactly where they're invisible — and why that's costing them. Frame the problem before you introduce the solution.",
        toolIds: ['aio-optimizer'],
      },
      {
        id: 'competitive',
        number: 3,
        title: 'Run Competitive Intelligence',
        description:
          'Show where competitors are winning in AI-generated search results and paid media. Give the prospect a concrete reason to act with urgency rather than defer.',
        toolIds: ['aio-optimizer', 'competitive-intelligence'],
      },
      {
        id: 'pitch',
        number: 4,
        title: 'Present the Pitch',
        description:
          'Deliver a structured audit deck the prospect can take away. Lead with their documented issues, close with your specific roadmap and expected outcomes.',
        toolIds: ['neuromarketing-audit', 'reporting-automation'],
        trainingUrl: '#',
        trainingLabel: 'Pitch deck template',
      },
    ],
  },
  {
    id: 'media-plan',
    title: 'Media Plan Development',
    shortTitle: 'Media Planning',
    icon: '📡',
    description:
      'Build a defensible, insight-driven media plan that connects audience intelligence directly to channel strategy and creative brief — not just gut feel and spreadsheets.',
    steps: [
      {
        id: 'audience',
        number: 1,
        title: 'Audience Research',
        description:
          'Define and pressure-test target personas with a synthetic focus group before committing budget to any channel. Validate assumptions early — not after the plan is sold.',
        toolIds: ['synthetic-focus-group'],
        trainingUrl: '#',
        trainingLabel: 'Audience research guide',
      },
      {
        id: 'channels',
        number: 2,
        title: 'Channel & Format Selection',
        description:
          'Map audience insights to formats — display, video, native, AI search — and build the recommended channel mix with clear rationale the client can follow and approve.',
        toolIds: ['aio-optimizer', 'media-plan-builder'],
      },
      {
        id: 'brief',
        number: 3,
        title: 'Creative Brief',
        description:
          'Translate audience findings into a creative brief with neuromarketing guardrails — colour palette, tone, visual hierarchy, and emotional triggers informed by evidence.',
        toolIds: ['neuromarketing-audit', 'scamper-ideation'],
        trainingUrl: '#',
        trainingLabel: 'Brief template',
      },
      {
        id: 'delivery',
        number: 4,
        title: 'Plan Documentation & Delivery',
        description:
          'Package the plan with rationale, flight dates, and budget breakdowns — structured for client approval or internal review without back-and-forth.',
        toolIds: ['media-plan-builder', 'reporting-automation'],
      },
    ],
  },
  {
    id: 'creative',
    title: 'Creative Development',
    shortTitle: 'Creative Dev',
    icon: '🎨',
    description:
      'Move from brief to production-ready creative with structured ideation, audience validation, and neuromarketing review built into every step — fewer revisions, stronger output.',
    steps: [
      {
        id: 'ideation',
        number: 1,
        title: 'Ideation Sprint',
        description:
          'Generate and explore creative concepts using SCAMPER methodology inside Miro — diverge wide before converging on the strongest directions. Structured, not chaotic.',
        toolIds: ['scamper-ideation'],
        trainingUrl: '#',
        trainingLabel: 'SCAMPER facilitation guide',
      },
      {
        id: 'validation',
        number: 2,
        title: 'Audience Validation',
        description:
          'Test preliminary concepts against a synthetic focus group before committing to production. Kill weak ideas before they cost time and money.',
        toolIds: ['synthetic-focus-group'],
      },
      {
        id: 'visual-audit',
        number: 3,
        title: 'Visual & Neuromarketing Audit',
        description:
          'Score shortlisted creative against neuromarketing principles — attention capture, colour psychology, emotional resonance, and visual hierarchy. Get a scorecard before the client sees it.',
        toolIds: ['neuromarketing-audit'],
        trainingUrl: '#',
        trainingLabel: 'Scoring criteria explained',
      },
      {
        id: 'handoff',
        number: 4,
        title: 'Final Review & Handoff',
        description:
          'Document creative decisions, annotations, and production specs — then hand off to the client or fulfilment team with full context and no ambiguity.',
        toolIds: ['reporting-automation'],
      },
    ],
  },
  {
    id: 'audit',
    title: 'Account Performance Evaluation & Audit',
    shortTitle: 'Performance Audit',
    icon: '📊',
    description:
      "Run a comprehensive account review that goes beyond vanity metrics — covering digital presence, AI search readiness, and creative effectiveness in a single structured workflow.",
    steps: [
      {
        id: 'digital-scan',
        number: 1,
        title: 'Digital Presence Scan',
        description:
          "Audit the client's website for technical health, UX quality, page speed, and SEO signals. Establish the baseline before drawing any conclusions about campaign performance.",
        toolIds: ['website-audit'],
        trainingUrl: '#',
        trainingLabel: 'Website audit guide',
      },
      {
        id: 'ai-readiness',
        number: 2,
        title: 'AI Search Readiness',
        description:
          "Score the client's content and brand for inclusion in AI-generated search answers. This is the new frontier of organic visibility — and most advertisers are not yet measuring it.",
        toolIds: ['aio-optimizer'],
        trainingUrl: '#',
        trainingLabel: 'AIO scoring explained',
      },
      {
        id: 'creative-review',
        number: 3,
        title: 'Creative Effectiveness Review',
        description:
          'Score live creative assets against neuromarketing principles — measure attention, emotional impact, and message recall to understand what is and is not working.',
        toolIds: ['neuromarketing-audit'],
      },
      {
        id: 'report',
        number: 4,
        title: 'Reporting & Recommendations',
        description:
          'Compile all findings into a structured client report with prioritised action items, score breakdowns, and ROI framing. Designed to prompt a follow-up conversation.',
        toolIds: ['neuromarketing-audit', 'reporting-automation'],
        trainingUrl: '#',
        trainingLabel: 'Report template',
      },
    ],
  },
]
