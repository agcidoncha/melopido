import React from 'react';

export function SizeCard({ label, dimensions, href = '#' }) {
  return (
    <a href={href} style={{ textDecoration: 'none', color: 'inherit', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '26px 12px', textAlign: 'center', display: 'block', fontFamily: 'var(--font-body)' }}>
      <strong style={{ display: 'block', color: '#4b4542', fontSize: 15, fontWeight: 600 }}>{label}</strong>
      <span style={{ display: 'block', marginTop: 10, color: '#78716c', fontSize: 14 }}>{dimensions}</span>
    </a>
  );
}
