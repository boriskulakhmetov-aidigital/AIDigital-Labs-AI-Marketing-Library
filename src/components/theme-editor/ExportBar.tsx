import type { ThemeConfig } from '@boriskulakhmetov-aidigital/design-system';
import { aiLabsTheme, aiDigitalTheme } from '@boriskulakhmetov-aidigital/design-system';
import { useState } from 'react';

interface Props {
  config: ThemeConfig;
  isDirty: boolean;
  onLoadPreset: (preset: ThemeConfig) => void;
}

function configToTs(config: ThemeConfig): string {
  return `import type { ThemeConfig } from '@boriskulakhmetov-aidigital/design-system';\n\nexport const customTheme: ThemeConfig = ${JSON.stringify(config, null, 2)};\n`;
}

export function ExportBar({ config, isDirty, onLoadPreset }: Props) {
  const [copied, setCopied] = useState(false);

  function downloadTs() {
    const blob = new Blob([configToTs(config)], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-theme.ts`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function copyJson() {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="te-export">
      <div className="te-export__presets">
        <span className="te-export__label">Preset:</span>
        <button className="te-export__preset-btn" onClick={() => onLoadPreset(aiLabsTheme)}>AI Labs</button>
        <button className="te-export__preset-btn" onClick={() => onLoadPreset(aiDigitalTheme)}>AI Digital</button>
      </div>
      <div className="te-export__actions">
        {isDirty && <span className="te-export__dirty">Unsaved changes</span>}
        <button className="te-export__btn" onClick={copyJson}>{copied ? 'Copied!' : 'Copy JSON'}</button>
        <button className="te-export__btn te-export__btn--primary" onClick={downloadTs}>Download .ts</button>
      </div>
    </div>
  );
}
