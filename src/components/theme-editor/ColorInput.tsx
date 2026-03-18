interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function ColorInput({ label, value, onChange }: Props) {
  // Extract hex from rgba or other formats for the color picker
  const hexValue = value.startsWith('#') ? value : '#888888';

  return (
    <div className="te-color-input">
      <label className="te-color-input__label">{label}</label>
      <div className="te-color-input__row">
        <input
          type="color"
          className="te-color-input__picker"
          value={hexValue}
          onChange={e => onChange(e.target.value)}
        />
        <input
          type="text"
          className="te-color-input__text"
          value={value}
          onChange={e => onChange(e.target.value)}
          spellCheck={false}
        />
      </div>
    </div>
  );
}
