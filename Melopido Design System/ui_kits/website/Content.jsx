const CARE = [
  ['../../assets/icons/care/30.webp', 'Lavar a máx. 30°'],
  ['../../assets/icons/care/lejia.webp', 'No usar lejía'],
  ['../../assets/icons/care/secar-plano.webp', 'Secar en plano'],
  ['../../assets/icons/care/plancha.webp', 'Planchar baja temp.'],
];
const CARDS = [
  ['Beneficios', 'Descubre cómo la seda de morera cuida tu piel y tu cabello cada noche.'],
  ['Protege tu cabello', 'Menos fricción, menos encrespamiento, menos roturas al despertar.'],
  ['Seda vs algodón/satén', 'Por qué la seda de morera supera a los tejidos convencionales.'],
  ['Instrucciones de uso', 'Cómo lavar y cuidar tu funda de seda para que dure más.'],
];

function Content() {
  return React.createElement('div', { style: { fontFamily: 'var(--font-body)' } },
    React.createElement('section', { style: { padding: '120px 40px 0' } },
      React.createElement('div', { style: { maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 40, alignItems: 'stretch' } },
        React.createElement('div', { style: { width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
          React.createElement('h1', { style: { margin: 0, fontFamily: 'var(--font-display)', fontSize: 42, lineHeight: 1.1, color: 'var(--dark)' } }, 'La guía completa de la funda de almohada de seda'),
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.6, color: '#66605c', marginTop: 20 } }, 'Todo lo que necesitas saber sobre la seda de morera: beneficios para la piel y el cabello, tallas, colores y cuidado.')
        ),
        React.createElement('img', { src: '../../assets/imagery/content-beneficios.webp', style: { width: '50%', objectFit: 'cover', borderRadius: 12 } })
      )
    ),
    React.createElement('section', { style: { padding: '40px 40px 20px' } },
      React.createElement('div', { style: { maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 } },
        CARDS.map(([t, b]) => React.createElement('a', { key: t, href: '#', style: { background: '#f8f4ef', border: '1px solid var(--border)', borderRadius: 20, padding: '34px 30px', textDecoration: 'none', color: 'inherit', display: 'block' } },
          React.createElement('h3', { style: { margin: '0 0 14px', fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--dark)' } }, t),
          React.createElement('p', { style: { margin: 0, fontSize: 15, lineHeight: 1.7, color: '#66605c' } }, b)
        ))
      )
    ),
    React.createElement('section', { style: { padding: '20px 40px 60px' } },
      React.createElement('div', { style: { maxWidth: 1120, margin: '0 auto', background: '#f8f4ef', border: '1px solid var(--border)', borderRadius: 20, padding: '34px 38px' } },
        React.createElement('h2', { style: { margin: '0 0 24px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--dark)' } }, 'Instrucciones de cuidado'),
        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 } },
          CARE.map(([icon, label]) => React.createElement('div', { key: label, style: { background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 18, padding: '26px 18px 20px', textAlign: 'center' } },
            React.createElement('img', { src: icon, style: { width: 100, height: 100, objectFit: 'contain', display: 'block', margin: '0 auto 14px' } }),
            React.createElement('p', { style: { margin: 0, fontSize: 15, color: '#66605c', fontWeight: 700 } }, label)
          ))
        )
      )
    )
  );
}
window.Content = Content;
