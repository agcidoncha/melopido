const PRODUCT_COLORS = [
  { key: 'Marfil', name: 'Marfil', img: '../../assets/imagery/product-90x45-marfil.webp' },
  { key: 'azulpavoreal', name: 'Azul pavo real', img: '../../assets/imagery/color-azul-pavo-real.webp' },
  { key: 'topo', name: 'Topo', img: '../../assets/imagery/color-topo.webp' },
  { key: 'granate', name: 'Granate', img: '../../assets/imagery/color-granate.webp' },
  { key: 'grisazulado', name: 'Gris azulado', img: '../../assets/imagery/color-azul-grisaceo.webp' },
  { key: 'azulnavy', name: 'Azul navy', img: '../../assets/imagery/color-azul-navy.webp' },
  { key: 'negro', name: 'Negro', img: '../../assets/imagery/color-negro.webp' },
];
const SWATCH_BG = { Marfil: 'var(--color-marfil)', azulpavoreal: 'var(--color-azul-pavoreal)', topo: 'var(--color-topo)', granate: 'var(--color-granate)', grisazulado: 'var(--color-grisazulado)', azulnavy: 'var(--color-azulnavy)', negro: 'var(--color-negro)' };

function Product({ size = '90x45' }) {
  const [active, setActive] = React.useState('Marfil');
  const current = PRODUCT_COLORS.find(c => c.key === active);
  const thumbs = ['1', '2', '3', '4', '5', '6'].map(n => `../../assets/imagery/detalle-${n}.webp`);

  return React.createElement('section', { style: { padding: '100px 40px 60px', fontFamily: 'var(--font-body)' } },
    React.createElement('div', { style: { maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 60, alignItems: 'center' } },
      React.createElement('div', { style: { width: '50%', maxWidth: 620, background: '#fff', borderRadius: 12, padding: 16 } },
        React.createElement('img', { src: current.img, alt: current.name, style: { width: '100%', display: 'block', borderRadius: 12, aspectRatio: '4/3', objectFit: 'cover' } }),
        React.createElement('div', { style: { display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' } },
          thumbs.map((t, i) => React.createElement('img', { key: i, src: t, style: { width: 80, borderRadius: 8, border: '2px solid transparent', cursor: 'pointer' } }))
        )
      ),
      React.createElement('div', { style: { width: '50%', maxWidth: 520 } },
        React.createElement('p', { style: { margin: '0 0 14px', fontSize: 14, color: '#7a736d' } }, `Funda de seda ${size}`),
        React.createElement('h1', { style: { margin: '0 0 22px', fontFamily: 'var(--font-display)', fontSize: 35, lineHeight: 1.08, color: 'var(--dark)' } },
          React.createElement('strong', { style: { fontWeight: 500 } }, '100% Seda Mulberry.'), ' Un lujo que transforma vuestro descanso.'),
        React.createElement('p', { style: { fontSize: 15, lineHeight: 1.7, color: '#66605c' } }, 'Esta funda de almohada de seda es ', React.createElement('strong', null, 'hipoalergénica'), ' y suave, y ayuda a ', React.createElement('strong', null, 'mantener la temperatura adecuada.')),
        React.createElement('p', { style: { fontSize: 15, lineHeight: 1.7, color: '#66605c' } }, 'Ayuda a ', React.createElement('strong', null, 'prevenir las arrugas'), ' al mantener la hidratación de la piel y del cabello, reduciendo la fricción y evitando la ', React.createElement('strong', null, 'ruptura del cabello.')),
        React.createElement('p', { style: { margin: '18px 0 8px', fontSize: 13, color: '#7a736d' } }, 'Disponible varios colores.'),
        React.createElement('div', { style: { display: 'flex', gap: 10, margin: '10px 0 14px' } },
          PRODUCT_COLORS.map(c => React.createElement('span', {
            key: c.key, onClick: () => setActive(c.key), title: c.name,
            style: { width: 30, height: 30, borderRadius: '50%', display: 'inline-block', background: SWATCH_BG[c.key], border: '1px solid #ddd', cursor: 'pointer', boxShadow: active === c.key ? '0 0 0 2px var(--bg), 0 0 0 3px #333' : 'none', transform: active === c.key ? 'scale(1.05)' : 'scale(1)' }
          }))
        ),
        React.createElement('p', { style: { fontSize: 13, color: '#7a736d' } }, 'Color: ', React.createElement('strong', { style: { color: 'var(--dark)' } }, current.name)),
        React.createElement('div', { style: { marginTop: 24, padding: '16px 18px', background: 'var(--surface-card)', borderRadius: 10 } },
          React.createElement('p', { style: { margin: 0, fontSize: 13, lineHeight: 1.5, color: '#5e5956' } }, '¿Quieres llevar el lujo a toda tu cama? Ofrecemos juegos de cama completos bajo pedido.')
        ),
        React.createElement('div', { style: { display: 'flex', gap: 12, marginTop: 20 } },
          React.createElement('a', { href: '#', style: { padding: '14px 22px', borderRadius: 6, textDecoration: 'none', fontSize: 14, fontWeight: 500, background: 'var(--amazon)', color: '#fff', boxShadow: '0 6px 16px rgba(243,146,0,.25)' } }, 'Lo Quiero'),
          React.createElement('a', { href: '#', style: { padding: '14px 22px', borderRadius: 6, textDecoration: 'none', fontSize: 14, fontWeight: 500, background: 'var(--surface-card)', color: '#333', border: '1px solid #ddd' } }, 'Instrucciones de uso')
        )
      )
    )
  );
}
window.Product = Product;
