import React from 'react';

export function FeatureIcon({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: 240, fontSize: 12, lineHeight: 1.4, fontWeight: 600, color: '#000', fontFamily: 'var(--font-body)' }}>
      <span style={{ width: 48, height: 48, border: '1px solid #e8ddd4', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
        <img src={icon} alt="" style={{ width: 32, height: 32, objectFit: 'contain' }} />
      </span>
      <span dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
}
