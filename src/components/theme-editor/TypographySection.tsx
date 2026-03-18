import type { Dispatch } from 'react';
import type { EditorAction, EditorState } from './types';

interface Props {
  state: EditorState;
  dispatch: Dispatch<EditorAction>;
}

const FONT_OPTIONS = [
  { label: 'System Default', value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  { label: 'Inter', value: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' },
  { label: 'Barlow Semi Condensed', value: '"Barlow Semi Condensed", "Barlow", sans-serif' },
  { label: 'Roboto', value: '"Roboto", sans-serif' },
  { label: 'Open Sans', value: '"Open Sans", sans-serif' },
  { label: 'Poppins', value: '"Poppins", sans-serif' },
  { label: 'DM Sans', value: '"DM Sans", sans-serif' },
];

export function TypographySection({ state, dispatch }: Props) {
  const { typography } = state.config;

  return (
    <div className="te-section">
      <h3 className="te-section__title">Typography</h3>

      <div className="te-field">
        <label className="te-field__label">Heading Font</label>
        <select
          className="te-field__select"
          value={typography.headingFamily}
          onChange={e => dispatch({ type: 'SET_TYPOGRAPHY', key: 'headingFamily', value: e.target.value })}
        >
          {FONT_OPTIONS.map(f => <option key={f.label} value={f.value}>{f.label}</option>)}
        </select>
      </div>

      <div className="te-field">
        <label className="te-field__label">Body Font</label>
        <select
          className="te-field__select"
          value={typography.bodyFamily}
          onChange={e => dispatch({ type: 'SET_TYPOGRAPHY', key: 'bodyFamily', value: e.target.value })}
        >
          {FONT_OPTIONS.map(f => <option key={f.label} value={f.value}>{f.label}</option>)}
        </select>
      </div>

      <div className="te-field">
        <label className="te-field__label">Base Font Size (px)</label>
        <input
          type="range"
          min={12} max={20} step={1}
          className="te-field__slider"
          value={typography.baseSizePx}
          onChange={e => dispatch({ type: 'SET_TYPOGRAPHY', key: 'baseSizePx', value: Number(e.target.value) })}
        />
        <span className="te-field__value">{typography.baseSizePx}px</span>
      </div>

      <div className="te-field">
        <label className="te-field__label">Line Height</label>
        <input
          type="range"
          min={1.2} max={2.0} step={0.1}
          className="te-field__slider"
          value={typography.lineHeight}
          onChange={e => dispatch({ type: 'SET_TYPOGRAPHY', key: 'lineHeight', value: Number(e.target.value) })}
        />
        <span className="te-field__value">{typography.lineHeight}</span>
      </div>

      <div className="te-field">
        <label className="te-field__label">Font URLs (one per line)</label>
        <textarea
          className="te-field__textarea"
          rows={2}
          value={(typography.fontUrls ?? []).join('\n')}
          onChange={e => dispatch({
            type: 'SET_TYPOGRAPHY',
            key: 'fontUrls',
            value: e.target.value.split('\n').filter(Boolean) as unknown as string,
          })}
          placeholder="https://fonts.googleapis.com/css2?family=..."
        />
      </div>
    </div>
  );
}
