import https from 'https';
import fs from 'fs';

const token = 'sDNBuf4kwijx8tlBJd39Owtt-156000709598523-B8xBm6KsdVft6zJG_Zxf';
const spaceId = '291225026905135';

function api(method, path, body) {
  return new Promise((ok, fail) => {
    const opts = {
      hostname: 'mapi.storyblok.com',
      path: `/v1/spaces/${spaceId}${path}`,
      method,
      headers: { Authorization: token, 'Content-Type': 'application/json' },
    };
    const req = https.request(opts, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => {
        try { ok({ status: res.statusCode, ...JSON.parse(d) }); }
        catch { ok({ status: res.statusCode, raw: d }); }
      });
    });
    req.on('error', fail);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function createFolder(name, parentId) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const res = await api('POST', '/stories', {
    story: { name, slug, is_folder: true, parent_id: parentId || 0, default_root: 'resource' },
  });
  if (res.story) { console.log('Folder:', name, '->', res.story.id); return res.story.id; }
  console.log('Folder error:', name, JSON.stringify(res).slice(0, 200));
  return null;
}

async function createResource(slug, data, parentId) {
  const res = await api('POST', '/stories', {
    story: {
      name: data.name,
      slug,
      parent_id: parentId,
      content: {
        component: 'resource',
        resource_type: data.resource_type,
        name: data.name,
        description: data.description,
        category: data.category,
        status: data.status,
        icon: data.icon || '',
        url: data.url || '',
        action_label: data.action_label || '',
        duration: data.duration || '',
        format: data.format || '',
      },
    },
    publish: 1,
  });
  if (res.story) { console.log('  +', data.name, `(${data.status})`); return res.story.uuid; }
  console.log('  ERROR', data.name, JSON.stringify(res).slice(0, 300));
  return null;
}

async function run() {
  // Create folders
  const toolsFolder = await createFolder('Tools'); await sleep(300);
  const coursesFolder = await createFolder('Courses'); await sleep(300);
  const workshopsFolder = await createFolder('Workshops'); await sleep(300);
  const aiLearningFolder = await createFolder('AI-Assisted Learning'); await sleep(300);
  const processesFolder = await createFolder('Processes'); await sleep(300);

  const uuids = {};

  // ── TOOLS ──
  console.log('\n--- Tools ---');
  const tools = [
    { slug: 'website-audit', name: 'Website Audit Tool', resource_type: 'tool', description: 'Full technical and UX analysis of a client website — performance scores, structural issues, SEO signals, and conversion bottlenecks. Generate a client-ready report in minutes.', category: 'Audit & Analysis', status: 'live', icon: '🔍', url: 'https://website-audit.apps.aidigitallabs.com/', action_label: 'Open Tool' },
    { slug: 'neuromarketing-audit', name: 'Neuromarketing & Color Psychology Audit', resource_type: 'tool', description: 'AI-powered audit of ad creative and landing pages against neuromarketing principles — attention, emotion, visual hierarchy, and colour psychology. Scored and exportable.', category: 'Audit & Analysis', status: 'live', icon: '🧠', url: 'https://neuromarketing-audit.apps.aidigitallabs.com/', action_label: 'Open Tool' },
    { slug: 'synthetic-focus-group', name: 'Synthetic Focus Group', resource_type: 'tool', description: 'Simulate audience reactions to concepts, messaging, and creative using AI personas calibrated to your target demographics — before spending a dollar on production.', category: 'AI Research', status: 'live', icon: '👥', url: 'https://synthetic-focus-group.apps.aidigitallabs.com/', action_label: 'Open Tool' },
    { slug: 'scamper-ideation', name: 'SCAMPER Ideation Tool', resource_type: 'tool', description: 'Structured creative brainstorming inside Miro using the SCAMPER framework — Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse.', category: 'Creative & Ideation', status: 'coming-soon', icon: '⚡' },
    { slug: 'aio-optimizer', name: 'AIO Optimizer', resource_type: 'tool', description: 'Audits AI engine awareness of a product or brand and provides recommendations to improve visibility across ChatGPT, Perplexity, Google AI Overviews, and beyond.', category: 'AI Research', status: 'live', icon: '🤖', url: 'https://aio-optimization.apps.aidigitallabs.com/', action_label: 'Open Tool' },
    { slug: 'ideation-synthesizer', name: 'Ideation Synthesizer', resource_type: 'tool', description: 'Collects scattered notes from Miro boards and docs, and outputs a structured, prioritised idea list. Integrated as a Miro app for seamless in-board use.', category: 'Creative & Ideation', status: 'live', icon: '💡', url: 'https://ideation-toolkit.apps.aidigitallabs.com/', action_label: 'Open Tool' },
    { slug: 'rapid-prototyper', name: 'Rapid Prototyper', resource_type: 'tool', description: 'Instantly mocks up ideas during brainstorms so the team can react to something tangible. Runs as a Miro app — turn any sticky note into a visual prototype in seconds.', category: 'Creative & Ideation', status: 'live', icon: '🎨', url: 'https://ideation-toolkit.apps.aidigitallabs.com/', action_label: 'Open Tool' },
    { slug: 'prompt-engineering-assistant', name: 'Prompt Engineering Assistant', resource_type: 'tool', description: 'Helps users craft or fine-tune prompts while testing for consistency, hallucinations and drift. Your copilot for getting reliable, repeatable outputs from any LLM.', category: 'AI Research', status: 'live', icon: '✏️', url: 'https://prompt-engineer.apps.aidigitallabs.com/', action_label: 'Open Tool' },
    { slug: 'smart-prospecting-agent', name: 'Smart Prospecting Agent', resource_type: 'tool', description: 'Scan LinkedIn, CapIQ, and CRM data to surface high-potential leads ranked by propensity score via ML model. Turns hours of manual prospecting into a prioritised shortlist.', category: 'Sales & Strategy', status: 'beta', icon: '🎯', url: '#', action_label: 'Open Tool' },
    { slug: 'prospect-scanner-agent', name: 'Prospect Scanner Agent', resource_type: 'tool', description: "Create sellers' cheat sheet with key verticals, use-cases, and platform breakdown by scrubbing pixels and social media. Walk into every meeting fully briefed.", category: 'Sales & Strategy', status: 'beta', icon: '📡', url: '#', action_label: 'Open Tool' },
    { slug: 'case-study-builder', name: 'Case Study Builder', resource_type: 'tool', description: 'Pull performance data from Elevate and brand guidelines to auto-produce polished client case studies. From raw numbers to client-ready narrative in minutes.', category: 'Sales & Strategy', status: 'coming-soon', icon: '📝' },
    { slug: 'pitch-deck-scorer', name: 'Pitch Deck Scorer', resource_type: 'tool', description: 'Review finished decks through proven sales techniques, flagging weaknesses and suggesting fixes. Catch gaps before the client does.', category: 'Sales & Strategy', status: 'coming-soon', icon: '📊' },
    { slug: 'document-logic-check', name: 'Document Logic Check', resource_type: 'tool', description: 'Advanced proofreading layer across all outgoing documents to check copy and document logic including process compliance and MECE. Your last line of defence before send.', category: 'Audit & Analysis', status: 'coming-soon', icon: '📋' },
    { slug: 'multipurpose-coaching-bot', name: 'Multipurpose Coaching Bot', resource_type: 'tool', description: 'Interactive multipurpose agent for reps to practice sales techniques and AIDigital process handling. Safe environment to rehearse before the real thing.', category: 'Sales & Strategy', status: 'coming-soon', icon: '🏋️' },
    { slug: 'technical-assistant', name: 'Technical Assistant', resource_type: 'tool', description: 'On-demand resource helping reps answer deep technical or value-based questions during live calls. Never get caught off-guard on product specs again.', category: 'Sales & Strategy', status: 'coming-soon', icon: '🔧' },
    { slug: 'dsp-performance-agent', name: 'DSP Agnostic Performance Assessment Agent', resource_type: 'tool', description: 'Performance reporting integrated across AIDigital and competitor DSPs within client landscape. One view across all platforms.', category: 'Reporting & Automation', status: 'coming-soon', icon: '📈' },
  ];
  for (const t of tools) { await sleep(250); uuids[t.slug] = await createResource(t.slug, t, toolsFolder); }

  // ── COURSES ──
  console.log('\n--- Courses ---');
  const courses = [
    { slug: 'course-neuromarketing', name: 'Neuromarketing & Color Psychology Fundamentals', resource_type: 'course', description: 'Learn the behavioural science behind why people click, buy, and remember.', category: 'Audit & Analysis', status: 'coming-soon', icon: '🧠', duration: '45 min', format: 'Self-paced' },
    { slug: 'course-website-audit', name: 'Website Audit Deep Dive', resource_type: 'course', description: 'Step-by-step walkthrough of the Website Audit Tool — how to interpret scores, prioritise fixes, and present technical findings.', category: 'Audit & Analysis', status: 'coming-soon', icon: '🔍', duration: '30 min', format: 'Self-paced' },
    { slug: 'course-aio', name: 'AI Search Optimization (AIO) Masterclass', resource_type: 'course', description: "Understand how AI search engines select, rank, and cite content.", category: 'AI Research', status: 'coming-soon', icon: '🤖', duration: '40 min', format: 'Self-paced' },
    { slug: 'course-focus-group', name: 'Running Synthetic Focus Groups', resource_type: 'course', description: 'How to set up, calibrate, and interpret results from AI-powered synthetic focus groups.', category: 'AI Research', status: 'coming-soon', icon: '👥', duration: '35 min', format: 'Self-paced' },
    { slug: 'course-scamper', name: 'SCAMPER Creative Methodology', resource_type: 'course', description: 'Master the SCAMPER framework for structured creative ideation.', category: 'Creative & Ideation', status: 'coming-soon', icon: '⚡', duration: '25 min', format: 'Self-paced' },
    { slug: 'course-sales-prospecting', name: 'AI-Powered Prospecting & Sales', resource_type: 'course', description: 'From TAM scoring to next-best-action models — learn how to build an intelligence-led sales pipeline using AI tools.', category: 'Sales & Strategy', status: 'coming-soon', icon: '🎯', duration: '50 min', format: 'Self-paced' },
    { slug: 'course-media-planning', name: 'Data-Driven Media Planning with AI', resource_type: 'course', description: 'Build defensible media plans grounded in audience intelligence and AI insights.', category: 'Sales & Strategy', status: 'coming-soon', icon: '📡', duration: '45 min', format: 'Self-paced' },
    { slug: 'course-creative-effectiveness', name: 'Creative Effectiveness Analysis', resource_type: 'course', description: 'How to evaluate live campaign creative against neuromarketing principles.', category: 'Creative & Ideation', status: 'coming-soon', icon: '🎨', duration: '35 min', format: 'Self-paced' },
  ];
  for (const c of courses) { await sleep(250); uuids[c.slug] = await createResource(c.slug, c, coursesFolder); }

  // ── WORKSHOPS ──
  console.log('\n--- Workshops ---');
  const workshops = [
    { slug: 'workshop-spark', name: '30-min Spark Call', resource_type: 'workshop', description: 'An "art of the possible" expansion session — discover what AI Labs partnership can do for your team.', category: 'Discovery', status: 'live', icon: '✨', url: '#', action_label: 'Schedule Session', duration: '30 min', format: 'Online' },
    { slug: 'workshop-enablement', name: 'Online Ideation Workshop', resource_type: 'workshop', description: 'A hands-on session of ideation and tool design specifically for your team.', category: 'Enablement', status: 'beta', icon: '🚀', url: '#', action_label: 'Schedule Session', duration: '60 min', format: 'Online' },
    { slug: 'workshop-custom', name: 'Custom In-Person Workshop', resource_type: 'workshop', description: 'A live learning, ideation, and design session — your team comes out with tools tailored for you, by you.', category: 'Enablement', status: 'live', icon: '🏢', url: '#', action_label: 'Schedule Session', duration: '3–4 hours', format: 'In-person' },
    { slug: 'workshop-neuromarketing', name: 'Neuromarketing & Color Psychology Workshop', resource_type: 'workshop', description: 'Learn what lies behind the behavioural science of creatives and how to apply it in your work.', category: 'Specialized', status: 'beta', icon: '🧠', url: '#', action_label: 'Schedule Session', duration: '1 hour', format: 'Online' },
    { slug: 'workshop-ai-search', name: 'AI Search & Outreach Improvement', resource_type: 'workshop', description: "How AI search engines work and what you can do to improve your clients' visibility.", category: 'Specialized', status: 'coming-soon', icon: '🔎', duration: '1 hour', format: 'Online' },
    { slug: 'workshop-focus-groups', name: 'AI-Enabled Focus Groups', resource_type: 'workshop', description: 'How to run focus groups in AI-enabled environments — from persona calibration to result interpretation.', category: 'Specialized', status: 'coming-soon', icon: '👥', duration: '1 hour', format: 'Online' },
    { slug: 'workshop-mmm', name: 'Marketing Mix Modelling for Campaigns', resource_type: 'workshop', description: 'How to best utilize marketing mix modelling in building successful campaigns.', category: 'Specialized', status: 'coming-soon', icon: '📈', duration: '1 hour', format: 'Online' },
  ];
  for (const w of workshops) { await sleep(250); uuids[w.slug] = await createResource(w.slug, w, workshopsFolder); }

  // ── AI-ASSISTED LEARNING ──
  console.log('\n--- AI-Assisted Learning ---');
  const ailearning = [
    { slug: 'agent-chatbots-llms', name: 'Chatbots and LLMs', resource_type: 'ai-learning', description: 'An interactive chatbot that teaches you the fundamentals of large language models and conversational AI.', category: 'AI Foundations', status: 'live', icon: '💬', url: '#', action_label: 'Start Chat', format: 'Chatbot' },
    { slug: 'agent-spark-blaze', name: 'SPARK and BLAZE Frameworks', resource_type: 'ai-learning', description: 'A guided chatbot that walks you through the SPARK and BLAZE frameworks.', category: 'AI Foundations', status: 'live', icon: '🔥', url: '#', action_label: 'Start Chat', format: 'Chatbot' },
    { slug: 'prompt-hallucination', name: 'Mitigating Hallucination & Source-Checking', resource_type: 'ai-learning', description: 'A prompt library and reference guide for identifying, mitigating, and source-checking AI hallucinations.', category: 'AI Foundations', status: 'live', icon: '🛡️', url: '#', action_label: 'Open Library', format: 'Prompt Library' },
    { slug: 'prompt-sales-coach', name: 'AI Sales Coach', resource_type: 'ai-learning', description: 'A virtual counterpart for your sales team to practice pitches and objection handling.', category: 'Sales & Enablement', status: 'coming-soon', icon: '🎙️', format: 'AI Agent' },
    { slug: 'prompt-tech-agent', name: 'AI Technical Agent — Open Garden', resource_type: 'ai-learning', description: "An AI agent that helps your teams answer any question about AIDigital's programmatic offering Open Garden.", category: 'Sales & Enablement', status: 'coming-soon', icon: '🤖', format: 'AI Agent' },
    { slug: 'prompt-pptx', name: 'PowerPoint Creation Prompts', resource_type: 'ai-learning', description: 'A curated prompt library for efficient PowerPoint document creation.', category: 'Productivity', status: 'coming-soon', icon: '📑', format: 'Prompt Library' },
    { slug: 'prompt-audience-research', name: 'Customer Audience Research Prompts', resource_type: 'ai-learning', description: 'Prompt library for conducting deep customer audience research with AI.', category: 'Research', status: 'coming-soon', icon: '🔬', format: 'Prompt Library' },
  ];
  for (const a of ailearning) { await sleep(250); uuids[a.slug] = await createResource(a.slug, a, aiLearningFolder); }

  // Save UUIDs for process linking
  fs.writeFileSync('c:/Users/Greyh/storyblok_uuids.json', JSON.stringify(uuids, null, 2));
  console.log(`\nTotal resources created: ${Object.keys(uuids).length}`);
  console.log('UUID map saved to c:/Users/Greyh/storyblok_uuids.json');
  console.log('Processes folder ID:', processesFolder);
  fs.writeFileSync('c:/Users/Greyh/storyblok_folders.json', JSON.stringify({ toolsFolder, coursesFolder, workshopsFolder, aiLearningFolder, processesFolder }, null, 2));
}

run().catch(console.error);
