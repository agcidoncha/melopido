import React from 'react';

export function ContentCard({ title, children, href = '#' }) {
  return (
    <a href={href} style={{ background: '#f8f4ef', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '34px 30px', textDecoration: 'none', color: 'inherit', display: 'block', fontFamily: 'var(--font-body)' }}>
      <h3 style={{ margin: '0 0 14px', fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1.1, color: 'var(--dark)' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: '#66605c' }}>{children}</p>
    </a>
  );
}
