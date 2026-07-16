import React from 'react';

export function FooterDesktop({ logo = 'assets/logo.png' }) {
  const col = { fontFamily: 'var(--font-body)' };
  return (
    <footer style={{ padding: '48px 40px 36px', background: 'linear-gradient(to bottom, #f4efe8 0%, #efe7dd 100%)', borderTop: '1px solid #e2d6c9' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 60 }}>
        <div style={col}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={logo} alt="Melopido" style={{ width: 32 }} />
            <div>
              <strong style={{ display: 'block', fontSize: 18, color: 'var(--dark)', lineHeight: 1 }}>Melopido</strong>
              <span style={{ display: 'block', fontSize: 12, color: '#8a817c', marginTop: 2 }}>Seda de morera premium</span>
            </div>
          </div>
        </div>
        <div style={col}>
          <h4 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14, color: 'var(--dark)' }}>Fundas</h4>
          {['75 × 50 cm', '90 × 45 cm', '110 × 45 cm', '120 × 45 cm', '135 × 45 cm', '150 × 45 cm'].map(s => (
            <a key={s} href="#" style={{ display: 'block', fontSize: 14, color: 'var(--text)', textDecoration: 'none', marginBottom: 8, opacity: 0.8 }}>{s}</a>
          ))}
        </div>
        <div style={col}>
          <h4 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14, color: 'var(--dark)' }}>Información</h4>
          {['Beneficios', 'Cabello', 'Arrugas', 'Seda vs algodón', 'Instrucciones', 'Colores'].map(s => (
            <a key={s} href="#" style={{ display: 'block', fontSize: 14, color: 'var(--text)', textDecoration: 'none', marginBottom: 8, opacity: 0.8 }}>{s}</a>
          ))}
        </div>
        <div style={col}>
          <h4 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14, color: 'var(--dark)' }}>Más</h4>
          {['Amazon', 'Aviso legal', 'Privacidad'].map(s => (
            <a key={s} href="#" style={{ display: 'block', fontSize: 14, color: 'var(--text)', textDecoration: 'none', marginBottom: 8, opacity: 0.8 }}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
