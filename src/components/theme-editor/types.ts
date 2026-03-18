import type { ThemeConfig } from '@boriskulakhmetov-aidigital/design-system';

export interface EditorState {
  config: ThemeConfig;
  isDirty: boolean;
  presetBase: string | null;
}

export type EditorAction =
  | { type: 'LOAD_PRESET'; preset: ThemeConfig }
  | { type: 'SET_NAME'; name: string }
  | { type: 'SET_COLOR'; key: string; value: string }
  | { type: 'SET_DARK'; key: string; value: string }
  | { type: 'SET_LIGHT'; key: string; value: string }
  | { type: 'SET_SEMANTIC'; key: string; value: string }
  | { type: 'SET_TYPOGRAPHY'; key: string; value: string | number }
  | { type: 'SET_LOGO_TYPE'; logoType: 'ai-labs-brandmark' | 'ai-digital-wordmark' | 'custom' }
  | { type: 'SET_LOGO_SVG'; variant: 'svgDark' | 'svgLight'; svg: string }
  | { type: 'SET_FAVICON'; favicon: string }
  | { type: 'SET_RADIUS'; key: string; value: string }
  | { type: 'SET_GLOW'; key: string; value: string }
  | { type: 'SET_SECONDARY'; key: string; value: string }
  | { type: 'REMOVE_SECONDARY'; key: string };

export function editorReducer(state: EditorState, action: EditorAction): EditorState {
  const c = state.config;
  switch (action.type) {
    case 'LOAD_PRESET':
      return { config: { ...action.preset }, isDirty: false, presetBase: action.preset.name };
    case 'SET_NAME':
      return { ...state, isDirty: true, config: { ...c, name: action.name } };
    case 'SET_COLOR':
      return { ...state, isDirty: true, config: { ...c, colors: { ...c.colors, [action.key]: action.value } } };
    case 'SET_DARK':
      return { ...state, isDirty: true, config: { ...c, dark: { ...c.dark, [action.key]: action.value } } };
    case 'SET_LIGHT':
      return { ...state, isDirty: true, config: { ...c, light: { ...c.light, [action.key]: action.value } } };
    case 'SET_SEMANTIC':
      return { ...state, isDirty: true, config: { ...c, semantic: { ...c.semantic, [action.key]: action.value } } };
    case 'SET_TYPOGRAPHY':
      return { ...state, isDirty: true, config: { ...c, typography: { ...c.typography, [action.key]: action.value } } };
    case 'SET_LOGO_TYPE':
      return { ...state, isDirty: true, config: { ...c, logo: { ...c.logo, type: action.logoType } } };
    case 'SET_LOGO_SVG':
      return { ...state, isDirty: true, config: { ...c, logo: { ...c.logo, [action.variant]: action.svg } } };
    case 'SET_FAVICON':
      return { ...state, isDirty: true, config: { ...c, favicon: action.favicon } };
    case 'SET_RADIUS':
      return { ...state, isDirty: true, config: { ...c, radius: { ...c.radius, [action.key]: action.value } } };
    case 'SET_GLOW':
      return { ...state, isDirty: true, config: { ...c, glows: { ...c.glows, [action.key]: action.value } } };
    case 'SET_SECONDARY':
      return { ...state, isDirty: true, config: { ...c, secondaryColors: { ...(c.secondaryColors ?? {}), [action.key]: action.value } } };
    case 'REMOVE_SECONDARY': {
      const sc = { ...(c.secondaryColors ?? {}) };
      delete sc[action.key];
      return { ...state, isDirty: true, config: { ...c, secondaryColors: sc } };
    }
    default:
      return state;
  }
}
