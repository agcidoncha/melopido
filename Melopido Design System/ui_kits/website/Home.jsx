function Home({ nav }) {
  const feature = (icon, label) => React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14, width: 220, fontSize: 12, lineHeight: 1.4, fontWeight: 600, color: '#000' } },
    React.createElement('span', { style: { width: 48, height: 48, border: '1px solid #e8ddd4', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' } },
      React.createElement('img', { src: icon, alt: '', style: { width: 32, height: 32, objectFit: 'contain' } })),
    React.createElement('span', { dangerouslySetInnerHTML: { __html: label } })
  );

  const sizes = [
    ['INFANTIL', '75 × 50 cm', '75x50'],
    ['INDIVIDUAL', '90 × 45 cm', '90x45'],
    ['INDIVIDUAL XL', '110 × 45 cm', '110x45'],
    ['MATRIMONIO', '120 × 45 cm', '120x45'],
    ['MATRIMONIO XL', '135 × 45 cm', '135x45'],
    ['GRANDE', '150 × 45 cm', '150x45'],
  ];

  return React.createElement('div', { style: { fontFamily: 'var(--font-body)' } },
    React.createElement('section', { style: { position: 'relative', minHeight: 560, overflow: 'hidden', backgroundImage: "url('../../assets/imagery/hero-home.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' } },
      React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(248,244,239,.95) 0%, rgba(248,244,239,.85) 35%, rgba(248,244,239,.4) 55%, rgba(248,244,239,0) 75%)' } }),
      React.createElement('div', { style: { position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '70px 40px' } },
        React.createElement('div', { style: { width: '55%' } },
          React.createElement('p', { style: { margin: '0 0 26px', color: 'var(--accent)', fontSize: 12, fontWeight: 600, letterSpacing: 1 } }, 'DUERME MEJOR, SIÉNTETE MEJOR'),
          React.createElement('h1', { style: { margin: 0, fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 0.95, color: 'var(--dark)', letterSpacing: '-0.03em' } }, 'Fundas de almohada de seda'),
          React.createElement('p', { style: { margin: '28px 0 24px', fontSize: 26, lineHeight: 1.1, fontWeight: 600, color: 'var(--accent)' } }, 'Disponibles en 6 tallas'),
          React.createElement('div', { style: { display: 'flex', gap: 18, margin: '34px 0 38px' } },
            feature('../../assets/icons/nav/beneficios.webp', 'MÁS SUAVIDAD<br>PARA TU PIEL'),
            feature('../../assets/icons/nav/frizz.webp', 'MENOS ENCRESPAMIENTO'),
            feature('../../assets/icons/nav/morera100-2.webp', '100% SEDA<br>DE MORERA')
          ),
          React.createElement('a', { href: '#', style: { display: 'inline-flex', alignItems: 'center', gap: 12, padding: '17px 28px', borderRadius: 999, background: 'var(--accent)', color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500 } },
            'Descubre nuestras fundas ',
            React.createElement('span', { style: { width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' } }, '›')
          )
        )
      )
    ),
    React.createElement('section', { style: { padding: '0 40px 40px', marginTop: -80, position: 'relative', zIndex: 3 } },
      React.createElement('div', { style: { maxWidth: 1120, margin: '0 auto', padding: '34px 46px 28px', background: 'var(--surface-card)', borderRadius: 20 } },
        React.createElement('p', { style: { margin: 0, textAlign: 'center', color: '#47413e', fontSize: 20, fontWeight: 600 } }, 'Elige la talla ideal para tu almohada y mejora tu piel mientras duermes.'),
        React.createElement('p', { style: { margin: '10px 0 0', textAlign: 'center', color: '#7a736d', fontSize: 14 } }, '6 tamaños para adaptarse a cualquier tipo de almohada'),
        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 18, marginTop: 24 } },
          sizes.map(([label, dim, code]) => React.createElement('a', { key: code, href: '#', onClick: (e) => { e.preventDefault(); nav('product', code); }, style: { textDecoration: 'none', color: 'inherit', background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '26px 12px', textAlign: 'center', display: 'block' } },
            React.createElement('strong', { style: { display: 'block', color: '#4b4542', fontSize: 15, fontWeight: 600 } }, label),
            React.createElement('span', { style: { display: 'block', marginTop: 10, color: '#78716c', fontSize: 14 } }, dim)
          ))
        ),
        React.createElement('div', { style: { display: 'flex', justifyContent: 'center', gap: 18, marginTop: 22, color: '#6a645f', fontSize: 14 } },
          React.createElement('span', null, '22 momme'), React.createElement('span', null, 'Seda premium'), React.createElement('span', null, 'Máxima calidad')
        )
      )
    ),
    React.createElement('section', { style: { padding: '28px 40px 60px' } },
      React.createElement('div', { style: { maxWidth: 1120, margin: '0 auto', background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 20, padding: '34px 38px', textAlign: 'center' } },
        React.createElement('h2', { style: { margin: '0 0 14px', fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--dark)' } }, 'Fundas de almohada de seda de morera'),
        React.createElement('p', { style: { maxWidth: 720, margin: '0 auto 22px', fontSize: 16, lineHeight: 1.7, color: '#66605c' } }, 'Descubre todos los beneficios de dormir con una funda de almohada de seda y cómo puede ayudarte a cuidar tu piel y tu cabello cada noche.'),
        React.createElement('a', { href: '#', onClick: (e) => { e.preventDefault(); nav('content'); }, style: { display: 'inline-flex', alignItems: 'center', gap: 12, padding: '17px 28px', borderRadius: 999, background: 'var(--accent)', color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500 } }, 'Ver guía completa ›')
      )
    )
  );
}
window.Home = Home;
