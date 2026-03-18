import type { Dispatch } from 'react';
import type { EditorAction, EditorState } from './types';
import { ColorInput } from './ColorInput';

interface Props {
  state: EditorState;
  dispatch: Dispatch<EditorAction>;
}

const COLOR_KEYS = [
  { key: 'blue', label: 'Primary Blue' },
  { key: 'green', label: 'Accent Green' },
  { key: 'pink', label: 'Secondary Pink' },
  { key: 'black', label: 'Dark Background' },
  { key: 'white', label: 'Light Background' },
] as const;

const SURFACE_KEYS = [
  { key: 'bg', label: 'Background' },
  { key: 'surface', label: 'Surface' },
  { key: 'surface2', label: 'Surface 2' },
  { key: 'text', label: 'Text' },
  { key: 'textMuted', label: 'Text Muted' },
  { key: 'accent', label: 'Accent' },
  { key: 'accentHover', label: 'Accent Hover' },
] as const;

const SEMANTIC_KEYS = [
  { key: 'error', label: 'Error' },
  { key: 'success', label: 'Success' },
  { key: 'warning', label: 'Warning' },
] as const;

export function ColorSection({ state, dispatch }: Props) {
  const { config } = state;

  return (
    <div className="te-section">
      <h3 className="te-section__title">Brand Colors</h3>
      <div className="te-section__grid">
        {COLOR_KEYS.map(({ key, label }) => (
          <ColorInput
            key={key}
            label={label}
            value={(config.colors as unknown as Record<string, string>)[key]}
            onChange={v => dispatch({ type: 'SET_COLOR', key, value: v })}
          />
        ))}
      </div>

      <h4 className="te-section__subtitle">Dark Theme</h4>
      <div className="te-section__grid">
        {SURFACE_KEYS.map(({ key, label }) => (
          <ColorInput
            key={`dark-${key}`}
            label={label}
            value={(config.dark as unknown as Record<string, string>)[key]}
            onChange={v => dispatch({ type: 'SET_DARK', key, value: v })}
          />
        ))}
      </div>

      <h4 className="te-section__subtitle">Light Theme</h4>
      <div className="te-section__grid">
        {SURFACE_KEYS.map(({ key, label }) => (
          <ColorInput
            key={`light-${key}`}
            label={label}
            value={(config.light as unknown as Record<string, string>)[key]}
            onChange={v => dispatch({ type: 'SET_LIGHT', key, value: v })}
          />
        ))}
      </div>

      <h4 className="te-section__subtitle">Semantic</h4>
      <div className="te-section__grid">
        {SEMANTIC_KEYS.map(({ key, label }) => (
          <ColorInput
            key={key}
            label={label}
            value={(config.semantic as unknown as Record<string, string>)[key]}
            onChange={v => dispatch({ type: 'SET_SEMANTIC', key, value: v })}
          />
        ))}
      </div>
    </div>
  );
}
