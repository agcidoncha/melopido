import React from 'react';

export function Header({ logo = 'assets/logo.png', claim = 'Sueño de seda', claimSub = 'Piel y cabello más cuidados cada noche' }) {
  return (
    <header style={{ position: 'relative', width: '100%', padding: '20px 40px', background: 'var(--bg)', borderBottom: '1px solid #eee', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 20 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="melopido" style={{ width: 36 }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'var(--font-wordmark)', fontSize: 20, letterSpacing: 1 }}>melopido</span>
            <span style={{ fontSize: 8, color: '#5f5f5f', lineHeight: '15px' }}>Seda de morera premium</span>
          </div>
        </a>
        <div style={{ textAlign: 'center', lineHeight: 1.1 }}>
          <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--dark)', letterSpacing: 0.5 }}>{claim}</span>
          <span style={{ display: 'block', fontSize: 11, color: '#8a817c', marginTop: 2, letterSpacing: 0.8 }}>{claimSub}</span>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <button aria-label="Abrir menú" style={{ display: 'flex', width: 24, height: 18, flexDirection: 'column', justifyContent: 'space-between', padding: 0, border: 0, background: 'transparent', cursor: 'pointer' }}>
            <span style={{ display: 'block', height: 2, background: '#333', borderRadius: 2 }}></span>
            <span style={{ display: 'block', height: 2, background: '#333', borderRadius: 2 }}></span>
            <span style={{ display: 'block', height: 2, background: '#333', borderRadius: 2 }}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
