import type { Dispatch } from 'react';
import type { EditorAction, EditorState } from './types';
import { LogoRenderer } from '@boriskulakhmetov-aidigital/design-system';

interface Props {
  state: EditorState;
  dispatch: Dispatch<EditorAction>;
}

export function LogoSection({ state, dispatch }: Props) {
  const { logo, favicon } = state.config;

  function handleFileUpload(variant: 'svgDark' | 'svgLight') {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.svg';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => dispatch({ type: 'SET_LOGO_SVG', variant, svg: reader.result as string });
      reader.readAsText(file);
    };
    input.click();
  }

  return (
    <div className="te-section">
      <h3 className="te-section__title">Logo</h3>

      <div className="te-field">
        <label className="te-field__label">Logo Type</label>
        <select
          className="te-field__select"
          value={logo.type}
          onChange={e => dispatch({ type: 'SET_LOGO_TYPE', logoType: e.target.value as any })}
        >
          <option value="ai-labs-brandmark">AI Labs BrandMark (4-quadrant)</option>
          <option value="ai-digital-wordmark">AI Digital Wordmark</option>
          <option value="custom">Custom Logo</option>
        </select>
      </div>

      <div className="te-field">
        <label className="te-field__label">Preview</label>
        <div className="te-logo-preview">
          <div className="te-logo-preview__dark">
            <LogoRenderer logo={logo} size={28} variant="dark" />
          </div>
          <div className="te-logo-preview__light">
            <LogoRenderer logo={logo} size={28} variant="light" />
          </div>
        </div>
      </div>

      {logo.type === 'custom' && (
        <>
          <div className="te-field">
            <label className="te-field__label">Dark Background SVG</label>
            <button className="te-field__upload-btn" onClick={() => handleFileUpload('svgDark')}>
              {logo.svgDark ? 'Replace SVG' : 'Upload SVG'}
            </button>
          </div>
          <div className="te-field">
            <label className="te-field__label">Light Background SVG</label>
            <button className="te-field__upload-btn" onClick={() => handleFileUpload('svgLight')}>
              {logo.svgLight ? 'Replace SVG' : 'Upload SVG'}
            </button>
          </div>
        </>
      )}

      <h4 className="te-section__subtitle">Favicon</h4>
      <div className="te-field">
        <label className="te-field__label">Favicon Source</label>
        <select
          className="te-field__select"
          value={favicon === 'auto' || !favicon ? 'auto' : 'custom'}
          onChange={e => dispatch({ type: 'SET_FAVICON', favicon: e.target.value === 'auto' ? 'auto' : '' })}
        >
          <option value="auto">Auto (from brand colors)</option>
          <option value="custom">Custom URL</option>
        </select>
      </div>
      {favicon && favicon !== 'auto' && (
        <div className="te-field">
          <input
            type="text"
            className="te-field__input"
            value={favicon}
            onChange={e => dispatch({ type: 'SET_FAVICON', favicon: e.target.value })}
            placeholder="https://example.com/favicon.svg"
          />
        </div>
      )}
    </div>
  );
}
