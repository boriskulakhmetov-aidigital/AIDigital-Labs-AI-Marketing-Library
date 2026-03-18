# AIDigital Labs — Marketing Library Portal

> Auto-loaded by Claude Code. Provides full context for this app.

## What This App Does

Customer engagement portal for AIDigital Labs' existing clients. Three views:
- **Process Guide** — Interactive flow diagrams for 4 business processes with tools/resources
- **Tool Library** — Grid of 17 AI-powered tools with category filtering and status badges
- **Learning Resources** — Courses, workshops, AI-assisted learning with process cross-references

This is a **static SPA** — no backend, no auth, no database. Content is hardcoded in `src/data/`.

## URLs

- **Live:** https://marketing-library.apps.aidigitallabs.com
- **Netlify site ID:** `c7f2fc20-03a6-4053-871a-c35cb9099cd9`
- **GitHub:** `boriskulakhmetov-aidigital/AIDigital-Labs-AI-Marketing-Library`
- **Deploy:** `npx netlify-cli deploy --prod --dir=dist --site=c7f2fc20-03a6-4053-871a-c35cb9099cd9`

## Tech Stack

- React 19 + Vite 8 + TypeScript
- `@boriskulakhmetov-aidigital/design-system` v5.0.1 (shared components + theme)
- Netlify static hosting (no functions)
- No auth (public portal)

## Design System Integration

```typescript
// main.tsx
import { applyTheme, aiLabsTheme } from '@boriskulakhmetov-aidigital/design-system'
import '@boriskulakhmetov-aidigital/design-system/style.css'
applyTheme(aiLabsTheme)
```

Components used from design system: `BrandMark`, `ThemeToggle`, `useTheme`

## Project Structure

```
src/
  main.tsx          — Entry point, theme setup
  App.tsx           — 3-view router (process/tools/learning)
  App.css           — All component styles (~630 lines)
  index.css         — Global reset + app-specific CSS variable aliases
  types.ts          — Resource, Process, ProcessStep types
  data/
    resources.ts    — 17 tools + 22 learning resources (single source of truth)
    processes.ts    — 4 business processes with steps referencing resourceIds
  components/
    Navbar.tsx      — Top nav with 3 view buttons + BrandMark + ThemeToggle
    ProcessView.tsx — Flow diagrams with step detail panels
    ToolsView.tsx   — Tool cards with category filter pills
    LearningView.tsx— 4 sub-tabs (All, Courses, Workshops, AI-Learning)
    ToolCard.tsx    — Individual tool/resource card
```

## Data Model

```typescript
type ResourceType = 'tool' | 'course' | 'workshop' | 'ai-learning'
type ResourceStatus = 'live' | 'beta' | 'coming-soon'

interface Resource {
  id: string; type: ResourceType; name: string; description: string;
  category: string; status: ResourceStatus; icon: string;
  url?: string; actionLabel?: string; duration?: string; format?: string;
}

interface ProcessStep {
  id: string; number: number; nodeLabel: string; nodeIcon: string;
  title: string; description: string; resourceIds: string[];
}
```

## CSS Notes

- Uses `--surface-2` (hyphenated) — aliased to `--surface2` in index.css
- App-specific vars: `--yellow`, `--yellow-dim`, `--card-hover-shadow`, `--border-hover`
- All theme variables come from `applyTheme()` — do NOT hardcode theme vars in index.css

## NPM Authentication

`.npmrc` at repo root:
```
@boriskulakhmetov-aidigital:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

For local dev: set `NPM_TOKEN` env var to the GitHub PAT (see design system CLAUDE.md for the token).

## Architecture Reference

This app is part of the AIDigital Labs portfolio. For the full architecture (all apps, design system, theme system, conventions), see `CLAUDE.md` in the design system repo: `AIDigital-Labs-Design-System`.
