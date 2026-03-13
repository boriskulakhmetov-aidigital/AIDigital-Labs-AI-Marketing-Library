/**
 * AIDigital Labs — Pseudo-CMS Design System
 * ==========================================
 * Single source of truth for all brand design tokens.
 * Edit this file to retheme the entire application.
 *
 * Colors sourced directly from aidigital.com/ai-digital-labs
 */

// ── Brand Colors ─────────────────────────────────────────────────────────────
// Fixed — same in both light and dark mode.

export const BRAND_COLORS = {
  blue:  '#0009e4',   // Electric blue — primary brand, logos, primary actions
  green: '#aef33e',   // Neon lime green — CTAs, active states, confirmations
  pink:  '#e771de',   // Vibrant pink — secondary accent, section highlights
  black: '#080808',   // Carbon black — dark mode background
  white: '#ffffff',
} as const;

// ── Dark Theme Tokens ─────────────────────────────────────────────────────────
// Mirrors the dark sections of aidigital.com/ai-digital-labs

export const DARK_THEME = {
  bg:           '#080808',
  surface:      '#0f0f0f',
  surface2:     '#1a1a1a',
  border:       'rgba(255, 255, 255, 0.08)',
  text:         '#ffffff',
  textMuted:    '#888888',
  accent:       '#aef33e',                    // Neon green — active states, CTAs
  accentHover:  '#95d932',
  accentDim:    'rgba(174, 243, 62, 0.08)',
  accentBorder: 'rgba(174, 243, 62, 0.2)',
} as const;

// ── Light Theme Tokens ────────────────────────────────────────────────────────
// Mirrors the light sections of aidigital.com

export const LIGHT_THEME = {
  bg:           '#f1f1f1',
  surface:      '#ffffff',
  surface2:     '#e8e8e8',
  border:       'rgba(0, 0, 0, 0.1)',
  text:         '#080808',
  textMuted:    '#666666',
  accent:       '#0009e4',                    // Blue as readable accent in light mode
  accentHover:  '#0007b5',
  accentDim:    'rgba(0, 9, 228, 0.06)',
  accentBorder: 'rgba(0, 9, 228, 0.2)',
} as const;

// ── Shared Semantic Colors ────────────────────────────────────────────────────

export const SEMANTIC = {
  error:   '#f56565',
  success: '#48bb78',
  warning: '#f6ad55',
} as const;

// ── Tool Status Colors ────────────────────────────────────────────────────────

export const STATUS_COLORS = {
  live:        { text: '#aef33e', bg: 'rgba(174, 243, 62, 0.08)',  border: 'rgba(174, 243, 62, 0.2)' },
  beta:        { text: '#f6ad55', bg: 'rgba(246, 173, 85, 0.10)', border: 'rgba(246, 173, 85, 0.25)' },
  comingSoon:  { text: '#888888', bg: 'transparent',               border: 'rgba(255, 255, 255, 0.08)' },
} as const;

// ── Training Material Type Colors ─────────────────────────────────────────────

export const TRAINING_COLORS = {
  video:    { text: '#f87171', bg: 'rgba(248, 113, 113, 0.10)', border: 'rgba(248, 113, 113, 0.25)' },
  guide:    { text: '#0009e4', bg: 'rgba(0,   9,  228, 0.10)', border: 'rgba(0,   9, 228, 0.25)'  },
  template: { text: '#aef33e', bg: 'rgba(174, 243,  62, 0.08)', border: 'rgba(174, 243, 62, 0.2)'  },
  playbook: { text: '#e771de', bg: 'rgba(231, 113, 222, 0.10)', border: 'rgba(231, 113, 222, 0.25)' },
} as const;

// ── Shape ─────────────────────────────────────────────────────────────────────

export const RADIUS = {
  xs:   '4px',
  sm:   '8px',
  md:   '12px',
  full: '999px',
} as const;

// ── Shadows & Glows ───────────────────────────────────────────────────────────
// Blue glow is the AIDigital Labs signature hover effect on cards.

export const GLOWS = {
  blue:  '0 0 20px rgba(0, 9, 200, 0.35)',    // Card hover shadow (dark)
  blueSoft: '0 0 20px rgba(0, 9, 200, 0.15)', // Card hover shadow (light)
  green: '0 0 16px rgba(174, 243, 62, 0.25)', // Active node glow
} as const;

// ── Transitions ───────────────────────────────────────────────────────────────

export const TRANSITIONS = {
  fast:    '0.15s ease',
  default: '0.4s ease-in',
  button:  '0.5s ease',
  spring:  'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
} as const;

// ── Typography ────────────────────────────────────────────────────────────────

export const TYPOGRAPHY = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  monoFamily: '"JetBrains Mono", "Fira Code", "SF Mono", Monaco, monospace',
  baseSizePx: 15,
  lineHeight: 1.6,
} as const;
