const COLORS = [
  { name: 'Marfil', img: '../../assets/imagery/color-marfil.webp' },
  { name: 'Azul pavo real', img: '../../assets/imagery/color-azul-pavo-real.webp' },
  { name: 'Topo', img: '../../assets/imagery/color-topo.webp' },
  { name: 'Granate', img: '../../assets/imagery/color-granate.webp' },
  { name: 'Azul grisáceo', img: '../../assets/imagery/color-azul-grisaceo.webp' },
  { name: 'Azul navy', img: '../../assets/imagery/color-azul-navy.webp' },
  { name: 'Negro', img: '../../assets/imagery/color-negro.webp' },
];

function Colors() {
  return React.createElement('section', { style: { padding: '110px 40px 60px', fontFamily: 'var(--font-body)' } },
    React.createElement('div', { style: { maxWidth: 1120, margin: '0 auto' } },
      React.createElement('h2', { style: { margin: '0 0 24px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--dark)' } }, 'Colores disponibles'),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 } },
        COLORS.map(c => React.createElement('div', { key: c.name, style: { background: '#f8f4ef', border: '1px solid var(--border)', borderRadius: 20, padding: '18px 18px 22px', textAlign: 'center' } },
          React.createElement('img', { src: c.img, style: { width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block', borderRadius: 16, marginBottom: 16 } }),
          React.createElement('h3', { style: { margin: 0, fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--dark)' } }, c.name)
        ))
      )
    )
  );
}
window.Colors = Colors;
