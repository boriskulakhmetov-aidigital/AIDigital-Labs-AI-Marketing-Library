import type { ThemeConfig } from '@boriskulakhmetov-aidigital/design-system';
import { LogoRenderer, StatusBadge, ScorePill, ProgressBar } from '@boriskulakhmetov-aidigital/design-system';

interface Props {
  config: ThemeConfig;
}

function surfaceStyle(config: ThemeConfig, mode: 'dark' | 'light'): React.CSSProperties {
  const s = mode === 'dark' ? config.dark : config.light;
  return {
    '--bg': s.bg,
    '--surface': s.surface,
    '--surface2': s.surface2,
    '--border': s.border,
    '--text': s.text,
    '--text-muted': s.textMuted,
    '--accent': s.accent,
    '--accent-hover': s.accentHover,
    '--accent-dim': s.accentDim,
    '--accent-border': s.accentBorder,
    '--brand-blue': config.colors.blue,
    '--brand-green': config.colors.green,
    '--brand-pink': config.colors.pink,
    '--error': config.semantic.error,
    '--success': config.semantic.success,
    '--warning': config.semantic.warning,
    '--font-family': config.typography.bodyFamily,
    '--font-heading': config.typography.headingFamily,
    '--font-size-base': config.typography.baseSizePx + 'px',
    background: s.bg,
    color: s.text,
    fontFamily: config.typography.bodyFamily,
    fontSize: config.typography.baseSizePx * 0.85 + 'px',
  } as React.CSSProperties;
}

export function PreviewPanel({ config }: Props) {
  return (
    <div className="te-preview">
      <h4 className="te-preview__title">Live Preview</h4>
      <div className="te-preview__modes">
        {(['dark', 'light'] as const).map(mode => (
          <div key={mode} className="te-preview__card" style={surfaceStyle(config, mode)}>
            <div className="te-preview__label">{mode}</div>

            {/* Header */}
            <div className="te-preview__header" style={{ borderBottom: `1px solid ${mode === 'dark' ? config.dark.border : config.light.border}` }}>
              <LogoRenderer logo={config.logo} size={16} variant={mode} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, marginLeft: 6 }}>AI Labs</span>
            </div>

            {/* Chat bubbles */}
            <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{
                alignSelf: 'flex-end', padding: '6px 10px', borderRadius: '8px 8px 2px 8px',
                background: mode === 'dark' ? config.dark.userMsgBg : config.light.userMsgBg,
                fontSize: '0.72rem', maxWidth: '75%',
              }}>
                Analyze my creative
              </div>
              <div style={{
                display: 'flex', gap: 6, alignItems: 'flex-start',
              }}>
                <span style={{
                  width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: (mode === 'dark' ? config.dark : config.light).accentDim,
                  border: `1px solid ${(mode === 'dark' ? config.dark : config.light).accentBorder}`,
                  fontSize: '0.5rem', fontWeight: 700, color: (mode === 'dark' ? config.dark : config.light).accent,
                }}>AI</span>
                <div style={{
                  padding: '6px 10px', borderRadius: '2px 8px 8px 8px',
                  background: mode === 'dark' ? config.dark.surface : config.light.surface,
                  border: `1px solid ${mode === 'dark' ? config.dark.border : config.light.border}`,
                  fontSize: '0.72rem', maxWidth: '75%',
                }}>
                  Running analysis...
                </div>
              </div>
            </div>

            {/* Components */}
            <div style={{ padding: '8px', display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
              <StatusBadge status="active" />
              <StatusBadge status="trial" />
              <StatusBadge status="error" />
              <ScorePill score={8.2} />
              <ScorePill score={5.5} />
              <ScorePill score={3.1} />
            </div>

            {/* Buttons */}
            <div style={{ padding: '8px', display: 'flex', gap: 6 }}>
              <button style={{
                background: config.colors.blue, color: '#fff', border: 'none',
                borderRadius: config.radius.sm, padding: '4px 12px', fontSize: '0.7rem', fontWeight: 600,
              }}>Primary</button>
              <button style={{
                background: 'transparent', color: (mode === 'dark' ? config.dark : config.light).textMuted,
                border: `1px solid ${(mode === 'dark' ? config.dark : config.light).border}`,
                borderRadius: config.radius.sm, padding: '4px 12px', fontSize: '0.7rem',
              }}>Ghost</button>
              <button style={{
                background: config.colors.green, color: config.colors.blue, border: 'none',
                borderRadius: config.radius.sm, padding: '4px 12px', fontSize: '0.7rem', fontWeight: 700,
              }}>CTA</button>
            </div>

            {/* Progress */}
            <div style={{ padding: '8px' }}>
              <ProgressBar value={0.72} label="72%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
