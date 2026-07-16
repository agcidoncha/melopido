import React from 'react';

const COLOR_MAP = {
  Marfil: 'var(--color-marfil)',
  azulpavoreal: 'var(--color-azul-pavoreal)',
  topo: 'var(--color-topo)',
  granate: 'var(--color-granate)',
  grisazulado: 'var(--color-grisazulado)',
  azulnavy: 'var(--color-azulnavy)',
  negro: 'var(--color-negro)',
};

export function ColorSwatch({ color, active = false, disabled = false, size = 30, onClick }) {
  const bg = COLOR_MAP[color] || color;
  return (
    <span
      onClick={disabled ? undefined : onClick}
      title={color}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'inline-block',
        background: bg,
        border: '1px solid #ddd',
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: active ? '0 0 0 2px var(--bg), 0 0 0 3px #333' : 'none',
        transform: active ? 'scale(1.05)' : 'scale(1)',
        opacity: disabled ? 0.4 : 1,
        filter: disabled ? 'grayscale(100%)' : 'none',
        position: 'relative',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {disabled && (
        <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>×</span>
      )}
    </span>
  );
}
