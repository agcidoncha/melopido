import React from 'react';

export function Button({ variant = 'round', href = '#', children, arrow = false, disabled = false }) {
  const base = {
    fontFamily: 'var(--font-body)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: 'none',
    fontWeight: 500,
  };
  const variants = {
    round: { background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '17px 28px', fontSize: 16 },
    light: { background: '#fff', border: '1px solid #ddd', color: '#333', borderRadius: 'var(--radius-pill)', padding: '10px 18px', fontSize: 14 },
    primary: { background: 'var(--accent-strong)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '10px 18px', fontSize: 14 },
    amazon: { background: 'var(--amazon)', color: '#fff', borderRadius: 'var(--radius-sm)', padding: '14px 22px', fontSize: 14, boxShadow: 'var(--shadow-amazon-btn)' },
    guide: { background: 'var(--surface-card)', color: '#333', border: '1px solid #ddd', borderRadius: 4, padding: '14px 22px', fontSize: 14 },
  };
  const style = { ...base, ...variants[variant] };
  return (
    <a href={href} style={style} aria-disabled={disabled}>
      {children}
      {arrow && <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, lineHeight: 1 }}>›</span>}
    </a>
  );
}
