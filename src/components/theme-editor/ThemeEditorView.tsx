import { useReducer, useEffect } from 'react';
import { applyTheme, aiLabsTheme } from '@boriskulakhmetov-aidigital/design-system';
import './ThemeEditor.css';
import { editorReducer, type EditorState } from './types';
import { ColorSection } from './ColorSection';
import { TypographySection } from './TypographySection';
import { LogoSection } from './LogoSection';
import { PreviewPanel } from './PreviewPanel';
import { ExportBar } from './ExportBar';

const STORAGE_KEY = 'aidl-theme-editor-draft';

function loadDraft(): EditorState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const config = JSON.parse(raw);
      return { config, isDirty: true, presetBase: config.name };
    }
  } catch { /* ignore */ }
  return { config: { ...aiLabsTheme }, isDirty: false, presetBase: 'AI Digital Labs' };
}

export function ThemeEditorView() {
  const [state, dispatch] = useReducer(editorReducer, undefined, loadDraft);

  // Persist draft to localStorage
  useEffect(() => {
    if (state.isDirty) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.config));
    }
  }, [state.config, state.isDirty]);

  // Apply theme live as user edits
  useEffect(() => {
    applyTheme(state.config);
    return () => { applyTheme(aiLabsTheme); }; // restore on unmount
  }, [state.config]);

  return (
    <div className="theme-editor">
      <ExportBar
        config={state.config}
        isDirty={state.isDirty}
        onLoadPreset={preset => dispatch({ type: 'LOAD_PRESET', preset })}
      />

      <div className="theme-editor__body">
        <div className="theme-editor__sidebar">
          <div className="te-field" style={{ marginBottom: 16 }}>
            <label className="te-field__label">Theme Name</label>
            <input
              type="text"
              className="te-field__input"
              value={state.config.name}
              onChange={e => dispatch({ type: 'SET_NAME', name: e.target.value })}
            />
          </div>

          <ColorSection state={state} dispatch={dispatch} />
          <TypographySection state={state} dispatch={dispatch} />
          <LogoSection state={state} dispatch={dispatch} />

          {/* Radius */}
          <div className="te-section">
            <h3 className="te-section__title">Border Radius</h3>
            {(['xs', 'sm', 'md'] as const).map(key => (
              <div key={key} className="te-field">
                <label className="te-field__label">{key.toUpperCase()}</label>
                <input
                  type="text"
                  className="te-field__input"
                  value={state.config.radius[key]}
                  onChange={e => dispatch({ type: 'SET_RADIUS', key, value: e.target.value })}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="theme-editor__preview">
          <PreviewPanel config={state.config} />
        </div>
      </div>
    </div>
  );
}
