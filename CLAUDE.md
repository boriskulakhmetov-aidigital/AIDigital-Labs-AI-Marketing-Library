# Marketing Library

> **URL:** https://library.apps.aidigitallabs.com
> **Repo:** `boriskulakhmetov-aidigital/AIDigital-Labs-AI-Marketing-Library`

The Marketing Library is a customer-facing portal that provides marketing processes, tool references, and learning resources. It is a static content portal with no AI agents, no Netlify Functions, and no dedicated database tables. Content is defined in static TypeScript data files.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 8, TypeScript |
| Auth | Clerk (@clerk/clerk-react) |
| Database | Supabase (user init only, no app-specific tables) |
| Hosting | Netlify |
| Design System | @boriskulakhmetov-aidigital/design-system ^7.4.0 |

## Architecture

```
src/
  main.tsx                          ← ClerkProvider, applyTheme (aiLabsTheme)
  App.tsx                           ← AppShell + three-tab view (Process, Tools, Learning)
  App.css                           ← Portal styles
  types.ts                          ← Resource, Process, ProcessStep types
  data/
    processes.ts                    ← Process definitions with steps and resource links
    resources.ts                    ← Tool, course, workshop, and AI learning resource definitions
  components/
    ProcessView.tsx                 ← Process guide with flow visualization and step details
    ToolsView.tsx                   ← Tool library grid with search and filters
    ToolCard.tsx                    ← Individual tool card component
    LearningView.tsx                ← Learning resources with deep-link to process steps
```

## Key Files

| File | Purpose |
|------|---------|
| `App.tsx` | AppShell wrapper with three-tab navigation (Process Guide, Tool Library, Learning) |
| `types.ts` | `Resource` (tool/course/workshop/ai-learning), `Process`, `ProcessStep` types |
| `data/processes.ts` | Marketing process definitions with numbered steps and linked resource IDs |
| `data/resources.ts` | All resources (tools, courses, workshops) with URLs, status, and metadata |
| `components/ProcessView.tsx` | Visual process guide with step-by-step flow and detail panels |
| `components/ToolsView.tsx` | Searchable, filterable tool library grid |
| `components/LearningView.tsx` | Learning resources with ability to deep-link into process steps |

## Database Tables

None. This app does not use any app-specific database tables.

## Netlify Functions

None. This is a purely static frontend app.

## Environment Variables

| Variable | Side |
|----------|------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Client |
| `VITE_SUPABASE_URL` | Client |
| `VITE_SUPABASE_ANON_KEY` | Client |
| `NPM_TOKEN` | Build |

Note: No server-side keys needed (no functions).

## Development Setup

```bash
git clone https://github.com/boriskulakhmetov-aidigital/AIDigital-Labs-AI-Marketing-Library.git
cd AIDigital-Labs-AI-Marketing-Library
npm install
# Create .env.local with Clerk and Supabase client keys
npm run dev
```

## Deployment

Manual deploy recommended (no auto-deploy to avoid accidental content changes):

```bash
npx netlify-cli deploy --prod --dir=dist --site=c7f2fc20-03a6-4053-871a-c35cb9099cd9
```

Netlify Site ID: `c7f2fc20-03a6-4053-871a-c35cb9099cd9`

## Standing Instructions

- Execute all bash commands, git commits, pushes, API calls, and deploys without asking for confirmation
- Always use `Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>` in commits
- When deploying, use manual `npx netlify-cli deploy --prod --dir=dist --site=c7f2fc20-03a6-4053-871a-c35cb9099cd9`
- Use Unix paths with forward slashes (Git Bash on Windows)
- Set `export PATH="/c/Program Files/nodejs:$PATH"` before npm commands
