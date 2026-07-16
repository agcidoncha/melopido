import React from 'react';

export function CareCard({ icon, label }) {
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '26px 18px 20px', textAlign: 'center', fontFamily: 'var(--font-body)' }}>
      <img src={icon} alt="" style={{ width: 100, height: 100, objectFit: 'contain', display: 'block', margin: '0 auto 14px' }} />
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.2, color: '#66605c', fontWeight: 700 }}>{label}</p>
    </div>
  );
}
