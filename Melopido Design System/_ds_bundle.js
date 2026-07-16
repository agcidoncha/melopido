/* @ds-bundle: {"format":4,"namespace":"MelopidoDesignSystem_6a8326","components":[{"name":"ColorSwatch","sourcePath":"components/commerce/ColorSwatch/ColorSwatch.jsx"},{"name":"FeatureIcon","sourcePath":"components/commerce/FeatureIcon/FeatureIcon.jsx"},{"name":"SizeCard","sourcePath":"components/commerce/SizeCard/SizeCard.jsx"},{"name":"CareCard","sourcePath":"components/content/CareCard/CareCard.jsx"},{"name":"ContentCard","sourcePath":"components/content/ContentCard/ContentCard.jsx"},{"name":"Button","sourcePath":"components/core/Button/Button.jsx"},{"name":"FooterDesktop","sourcePath":"components/layout/FooterDesktop/FooterDesktop.jsx"},{"name":"Header","sourcePath":"components/layout/Header/Header.jsx"}],"sourceHashes":{"components/commerce/ColorSwatch/ColorSwatch.jsx":"fb1fbe2d87ae","components/commerce/FeatureIcon/FeatureIcon.jsx":"bbb70cd9a642","components/commerce/SizeCard/SizeCard.jsx":"7db3715abb44","components/content/CareCard/CareCard.jsx":"b4dc468bf049","components/content/ContentCard/ContentCard.jsx":"d49e09b8562c","components/core/Button/Button.jsx":"a1036fc72583","components/layout/FooterDesktop/FooterDesktop.jsx":"0e15deb22f32","components/layout/Header/Header.jsx":"ed0cdb2e4135","ui_kits/website/Colors.jsx":"f3c231046bc5","ui_kits/website/Content.jsx":"59c236cbda63","ui_kits/website/Home.jsx":"7fb4ec2af78d","ui_kits/website/Product.jsx":"4ea386becf6e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MelopidoDesignSystem_6a8326 = window.MelopidoDesignSystem_6a8326 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/ColorSwatch/ColorSwatch.jsx
try { (() => {
const COLOR_MAP = {
  Marfil: 'var(--color-marfil)',
  azulpavoreal: 'var(--color-azul-pavoreal)',
  topo: 'var(--color-topo)',
  granate: 'var(--color-granate)',
  grisazulado: 'var(--color-grisazulado)',
  azulnavy: 'var(--color-azulnavy)',
  negro: 'var(--color-negro)'
};
function ColorSwatch({
  color,
  active = false,
  disabled = false,
  size = 30,
  onClick
}) {
  const bg = COLOR_MAP[color] || color;
  return /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : onClick,
    title: color,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-block',
      background: bg,
      border: '1px solid #ddd',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: active ? '0 0 0 2px var(--bg), 0 0 0 3px #333' : 'none',
      transform: active ? 'scale(1.05)' : 'scale(1)',
      opacity: disabled ? 0.4 : 1,
      filter: disabled ? 'grayscale(100%)' : 'none',
      position: 'relative',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    }
  }, disabled && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700,
      color: '#fff'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { ColorSwatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ColorSwatch/ColorSwatch.jsx", error: String((e && e.message) || e) }); }

// components/commerce/FeatureIcon/FeatureIcon.jsx
try { (() => {
function FeatureIcon({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: 240,
      fontSize: 12,
      lineHeight: 1.4,
      fontWeight: 600,
      color: '#000',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      border: '1px solid #e8ddd4',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: 32,
      height: 32,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: label
    }
  }));
}
Object.assign(__ds_scope, { FeatureIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/FeatureIcon/FeatureIcon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SizeCard/SizeCard.jsx
try { (() => {
function SizeCard({
  label,
  dimensions,
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      textDecoration: 'none',
      color: 'inherit',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '26px 12px',
      textAlign: 'center',
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      color: '#4b4542',
      fontSize: 15,
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 10,
      color: '#78716c',
      fontSize: 14
    }
  }, dimensions));
}
Object.assign(__ds_scope, { SizeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SizeCard/SizeCard.jsx", error: String((e && e.message) || e) }); }

// components/content/CareCard/CareCard.jsx
try { (() => {
function CareCard({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)',
      padding: '26px 18px 20px',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: 100,
      height: 100,
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.2,
      color: '#66605c',
      fontWeight: 700
    }
  }, label));
}
Object.assign(__ds_scope, { CareCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CareCard/CareCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ContentCard/ContentCard.jsx
try { (() => {
function ContentCard({
  title,
  children,
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      background: '#f8f4ef',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '34px 30px',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 14px',
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      lineHeight: 1.1,
      color: 'var(--dark)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.7,
      color: '#66605c'
    }
  }, children));
}
Object.assign(__ds_scope, { ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContentCard/ContentCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button/Button.jsx
try { (() => {
function Button({
  variant = 'round',
  href = '#',
  children,
  arrow = false,
  disabled = false
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: 'none',
    fontWeight: 500
  };
  const variants = {
    round: {
      background: 'var(--accent)',
      color: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '17px 28px',
      fontSize: 16
    },
    light: {
      background: '#fff',
      border: '1px solid #ddd',
      color: '#333',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 18px',
      fontSize: 14
    },
    primary: {
      background: 'var(--accent-strong)',
      color: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 18px',
      fontSize: 14
    },
    amazon: {
      background: 'var(--amazon)',
      color: '#fff',
      borderRadius: 'var(--radius-sm)',
      padding: '14px 22px',
      fontSize: 14,
      boxShadow: 'var(--shadow-amazon-btn)'
    },
    guide: {
      background: 'var(--surface-card)',
      color: '#333',
      border: '1px solid #ddd',
      borderRadius: 4,
      padding: '14px 22px',
      fontSize: 14
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: style,
    "aria-disabled": disabled
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.2)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      lineHeight: 1
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/layout/FooterDesktop/FooterDesktop.jsx
try { (() => {
function FooterDesktop({
  logo = 'assets/logo.png'
}) {
  const col = {
    fontFamily: 'var(--font-body)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '48px 40px 36px',
      background: 'linear-gradient(to bottom, #f4efe8 0%, #efe7dd 100%)',
      borderTop: '1px solid #e2d6c9'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Melopido",
    style: {
      width: 32
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: 18,
      color: 'var(--dark)',
      lineHeight: 1
    }
  }, "Melopido"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: '#8a817c',
      marginTop: 2
    }
  }, "Seda de morera premium")))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 14,
      color: 'var(--dark)'
    }
  }, "Fundas"), ['75 × 50 cm', '90 × 45 cm', '110 × 45 cm', '120 × 45 cm', '135 × 45 cm', '150 × 45 cm'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--text)',
      textDecoration: 'none',
      marginBottom: 8,
      opacity: 0.8
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 14,
      color: 'var(--dark)'
    }
  }, "Informaci\xF3n"), ['Beneficios', 'Cabello', 'Arrugas', 'Seda vs algodón', 'Instrucciones', 'Colores'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--text)',
      textDecoration: 'none',
      marginBottom: 8,
      opacity: 0.8
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 14,
      color: 'var(--dark)'
    }
  }, "M\xE1s"), ['Amazon', 'Aviso legal', 'Privacidad'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--text)',
      textDecoration: 'none',
      marginBottom: 8,
      opacity: 0.8
    }
  }, s)))));
}
Object.assign(__ds_scope, { FooterDesktop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FooterDesktop/FooterDesktop.jsx", error: String((e && e.message) || e) }); }

// components/layout/Header/Header.jsx
try { (() => {
function Header({
  logo = 'assets/logo.png',
  claim = 'Sueño de seda',
  claimSub = 'Piel y cabello más cuidados cada noche'
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      width: '100%',
      padding: '20px 40px',
      background: 'var(--bg)',
      borderBottom: '1px solid #eee',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "melopido",
    style: {
      width: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-wordmark)',
      fontSize: 20,
      letterSpacing: 1
    }
  }, "melopido"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      color: '#5f5f5f',
      lineHeight: '15px'
    }
  }, "Seda de morera premium"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--dark)',
      letterSpacing: 0.5
    }
  }, claim), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 11,
      color: '#8a817c',
      marginTop: 2,
      letterSpacing: 0.8
    }
  }, claimSub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Abrir men\xFA",
    style: {
      display: 'flex',
      width: 24,
      height: 18,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 0,
      border: 0,
      background: 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: 2,
      background: '#333',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: 2,
      background: '#333',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: 2,
      background: '#333',
      borderRadius: 2
    }
  })))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Header/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Colors.jsx
try { (() => {
const COLORS = [{
  name: 'Marfil',
  img: '../../assets/imagery/color-marfil.webp'
}, {
  name: 'Azul pavo real',
  img: '../../assets/imagery/color-azul-pavo-real.webp'
}, {
  name: 'Topo',
  img: '../../assets/imagery/color-topo.webp'
}, {
  name: 'Granate',
  img: '../../assets/imagery/color-granate.webp'
}, {
  name: 'Azul grisáceo',
  img: '../../assets/imagery/color-azul-grisaceo.webp'
}, {
  name: 'Azul navy',
  img: '../../assets/imagery/color-azul-navy.webp'
}, {
  name: 'Negro',
  img: '../../assets/imagery/color-negro.webp'
}];
function Colors() {
  return React.createElement('section', {
    style: {
      padding: '110px 40px 60px',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, React.createElement('h2', {
    style: {
      margin: '0 0 24px',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      color: 'var(--dark)'
    }
  }, 'Colores disponibles'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, COLORS.map(c => React.createElement('div', {
    key: c.name,
    style: {
      background: '#f8f4ef',
      border: '1px solid var(--border)',
      borderRadius: 20,
      padding: '18px 18px 22px',
      textAlign: 'center'
    }
  }, React.createElement('img', {
    src: c.img,
    style: {
      width: '100%',
      aspectRatio: '1/1',
      objectFit: 'cover',
      display: 'block',
      borderRadius: 16,
      marginBottom: 16
    }
  }), React.createElement('h3', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--dark)'
    }
  }, c.name))))));
}
window.Colors = Colors;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Colors.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Content.jsx
try { (() => {
const CARE = [['../../assets/icons/care/30.webp', 'Lavar a máx. 30°'], ['../../assets/icons/care/lejia.webp', 'No usar lejía'], ['../../assets/icons/care/secar-plano.webp', 'Secar en plano'], ['../../assets/icons/care/plancha.webp', 'Planchar baja temp.']];
const CARDS = [['Beneficios', 'Descubre cómo la seda de morera cuida tu piel y tu cabello cada noche.'], ['Protege tu cabello', 'Menos fricción, menos encrespamiento, menos roturas al despertar.'], ['Seda vs algodón/satén', 'Por qué la seda de morera supera a los tejidos convencionales.'], ['Instrucciones de uso', 'Cómo lavar y cuidar tu funda de seda para que dure más.']];
function Content() {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('section', {
    style: {
      padding: '120px 40px 0'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      gap: 40,
      alignItems: 'stretch'
    }
  }, React.createElement('div', {
    style: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, React.createElement('h1', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      lineHeight: 1.1,
      color: 'var(--dark)'
    }
  }, 'La guía completa de la funda de almohada de seda'), React.createElement('p', {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: '#66605c',
      marginTop: 20
    }
  }, 'Todo lo que necesitas saber sobre la seda de morera: beneficios para la piel y el cabello, tallas, colores y cuidado.')), React.createElement('img', {
    src: '../../assets/imagery/content-beneficios.webp',
    style: {
      width: '50%',
      objectFit: 'cover',
      borderRadius: 12
    }
  }))), React.createElement('section', {
    style: {
      padding: '40px 40px 20px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24
    }
  }, CARDS.map(([t, b]) => React.createElement('a', {
    key: t,
    href: '#',
    style: {
      background: '#f8f4ef',
      border: '1px solid var(--border)',
      borderRadius: 20,
      padding: '34px 30px',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block'
    }
  }, React.createElement('h3', {
    style: {
      margin: '0 0 14px',
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--dark)'
    }
  }, t), React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.7,
      color: '#66605c'
    }
  }, b))))), React.createElement('section', {
    style: {
      padding: '20px 40px 60px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      background: '#f8f4ef',
      border: '1px solid var(--border)',
      borderRadius: 20,
      padding: '34px 38px'
    }
  }, React.createElement('h2', {
    style: {
      margin: '0 0 24px',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      color: 'var(--dark)'
    }
  }, 'Instrucciones de cuidado'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22
    }
  }, CARE.map(([icon, label]) => React.createElement('div', {
    key: label,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      padding: '26px 18px 20px',
      textAlign: 'center'
    }
  }, React.createElement('img', {
    src: icon,
    style: {
      width: 100,
      height: 100,
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto 14px'
    }
  }), React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 15,
      color: '#66605c',
      fontWeight: 700
    }
  }, label)))))));
}
window.Content = Content;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  nav
}) {
  const feature = (icon, label) => React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: 220,
      fontSize: 12,
      lineHeight: 1.4,
      fontWeight: 600,
      color: '#000'
    }
  }, React.createElement('span', {
    style: {
      width: 48,
      height: 48,
      border: '1px solid #e8ddd4',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, React.createElement('img', {
    src: icon,
    alt: '',
    style: {
      width: 32,
      height: 32,
      objectFit: 'contain'
    }
  })), React.createElement('span', {
    dangerouslySetInnerHTML: {
      __html: label
    }
  }));
  const sizes = [['INFANTIL', '75 × 50 cm', '75x50'], ['INDIVIDUAL', '90 × 45 cm', '90x45'], ['INDIVIDUAL XL', '110 × 45 cm', '110x45'], ['MATRIMONIO', '120 × 45 cm', '120x45'], ['MATRIMONIO XL', '135 × 45 cm', '135x45'], ['GRANDE', '150 × 45 cm', '150x45']];
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('section', {
    style: {
      position: 'relative',
      minHeight: 560,
      overflow: 'hidden',
      backgroundImage: "url('../../assets/imagery/hero-home.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(248,244,239,.95) 0%, rgba(248,244,239,.85) 35%, rgba(248,244,239,.4) 55%, rgba(248,244,239,0) 75%)'
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '70px 40px'
    }
  }, React.createElement('div', {
    style: {
      width: '55%'
    }
  }, React.createElement('p', {
    style: {
      margin: '0 0 26px',
      color: 'var(--accent)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 1
    }
  }, 'DUERME MEJOR, SIÉNTETE MEJOR'), React.createElement('h1', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 64,
      lineHeight: 0.95,
      color: 'var(--dark)',
      letterSpacing: '-0.03em'
    }
  }, 'Fundas de almohada de seda'), React.createElement('p', {
    style: {
      margin: '28px 0 24px',
      fontSize: 26,
      lineHeight: 1.1,
      fontWeight: 600,
      color: 'var(--accent)'
    }
  }, 'Disponibles en 6 tallas'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 18,
      margin: '34px 0 38px'
    }
  }, feature('../../assets/icons/nav/beneficios.webp', 'MÁS SUAVIDAD<br>PARA TU PIEL'), feature('../../assets/icons/nav/frizz.webp', 'MENOS ENCRESPAMIENTO'), feature('../../assets/icons/nav/morera100-2.webp', '100% SEDA<br>DE MORERA')), React.createElement('a', {
    href: '#',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '17px 28px',
      borderRadius: 999,
      background: 'var(--accent)',
      color: '#fff',
      textDecoration: 'none',
      fontSize: 16,
      fontWeight: 500
    }
  }, 'Descubre nuestras fundas ', React.createElement('span', {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.2)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, '›'))))), React.createElement('section', {
    style: {
      padding: '0 40px 40px',
      marginTop: -80,
      position: 'relative',
      zIndex: 3
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '34px 46px 28px',
      background: 'var(--surface-card)',
      borderRadius: 20
    }
  }, React.createElement('p', {
    style: {
      margin: 0,
      textAlign: 'center',
      color: '#47413e',
      fontSize: 20,
      fontWeight: 600
    }
  }, 'Elige la talla ideal para tu almohada y mejora tu piel mientras duermes.'), React.createElement('p', {
    style: {
      margin: '10px 0 0',
      textAlign: 'center',
      color: '#7a736d',
      fontSize: 14
    }
  }, '6 tamaños para adaptarse a cualquier tipo de almohada'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 18,
      marginTop: 24
    }
  }, sizes.map(([label, dim, code]) => React.createElement('a', {
    key: code,
    href: '#',
    onClick: e => {
      e.preventDefault();
      nav('product', code);
    },
    style: {
      textDecoration: 'none',
      color: 'inherit',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '26px 12px',
      textAlign: 'center',
      display: 'block'
    }
  }, React.createElement('strong', {
    style: {
      display: 'block',
      color: '#4b4542',
      fontSize: 15,
      fontWeight: 600
    }
  }, label), React.createElement('span', {
    style: {
      display: 'block',
      marginTop: 10,
      color: '#78716c',
      fontSize: 14
    }
  }, dim)))), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 18,
      marginTop: 22,
      color: '#6a645f',
      fontSize: 14
    }
  }, React.createElement('span', null, '22 momme'), React.createElement('span', null, 'Seda premium'), React.createElement('span', null, 'Máxima calidad')))), React.createElement('section', {
    style: {
      padding: '28px 40px 60px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 20,
      padding: '34px 38px',
      textAlign: 'center'
    }
  }, React.createElement('h2', {
    style: {
      margin: '0 0 14px',
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      color: 'var(--dark)'
    }
  }, 'Fundas de almohada de seda de morera'), React.createElement('p', {
    style: {
      maxWidth: 720,
      margin: '0 auto 22px',
      fontSize: 16,
      lineHeight: 1.7,
      color: '#66605c'
    }
  }, 'Descubre todos los beneficios de dormir con una funda de almohada de seda y cómo puede ayudarte a cuidar tu piel y tu cabello cada noche.'), React.createElement('a', {
    href: '#',
    onClick: e => {
      e.preventDefault();
      nav('content');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '17px 28px',
      borderRadius: 999,
      background: 'var(--accent)',
      color: '#fff',
      textDecoration: 'none',
      fontSize: 16,
      fontWeight: 500
    }
  }, 'Ver guía completa ›'))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Product.jsx
try { (() => {
const PRODUCT_COLORS = [{
  key: 'Marfil',
  name: 'Marfil',
  img: '../../assets/imagery/product-90x45-marfil.webp'
}, {
  key: 'azulpavoreal',
  name: 'Azul pavo real',
  img: '../../assets/imagery/color-azul-pavo-real.webp'
}, {
  key: 'topo',
  name: 'Topo',
  img: '../../assets/imagery/color-topo.webp'
}, {
  key: 'granate',
  name: 'Granate',
  img: '../../assets/imagery/color-granate.webp'
}, {
  key: 'grisazulado',
  name: 'Gris azulado',
  img: '../../assets/imagery/color-azul-grisaceo.webp'
}, {
  key: 'azulnavy',
  name: 'Azul navy',
  img: '../../assets/imagery/color-azul-navy.webp'
}, {
  key: 'negro',
  name: 'Negro',
  img: '../../assets/imagery/color-negro.webp'
}];
const SWATCH_BG = {
  Marfil: 'var(--color-marfil)',
  azulpavoreal: 'var(--color-azul-pavoreal)',
  topo: 'var(--color-topo)',
  granate: 'var(--color-granate)',
  grisazulado: 'var(--color-grisazulado)',
  azulnavy: 'var(--color-azulnavy)',
  negro: 'var(--color-negro)'
};
function Product({
  size = '90x45'
}) {
  const [active, setActive] = React.useState('Marfil');
  const current = PRODUCT_COLORS.find(c => c.key === active);
  const thumbs = ['1', '2', '3', '4', '5', '6'].map(n => `../../assets/imagery/detalle-${n}.webp`);
  return React.createElement('section', {
    style: {
      padding: '100px 40px 60px',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      gap: 60,
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      width: '50%',
      maxWidth: 620,
      background: '#fff',
      borderRadius: 12,
      padding: 16
    }
  }, React.createElement('img', {
    src: current.img,
    alt: current.name,
    style: {
      width: '100%',
      display: 'block',
      borderRadius: 12,
      aspectRatio: '4/3',
      objectFit: 'cover'
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8,
      flexWrap: 'wrap'
    }
  }, thumbs.map((t, i) => React.createElement('img', {
    key: i,
    src: t,
    style: {
      width: 80,
      borderRadius: 8,
      border: '2px solid transparent',
      cursor: 'pointer'
    }
  })))), React.createElement('div', {
    style: {
      width: '50%',
      maxWidth: 520
    }
  }, React.createElement('p', {
    style: {
      margin: '0 0 14px',
      fontSize: 14,
      color: '#7a736d'
    }
  }, `Funda de seda ${size}`), React.createElement('h1', {
    style: {
      margin: '0 0 22px',
      fontFamily: 'var(--font-display)',
      fontSize: 35,
      lineHeight: 1.08,
      color: 'var(--dark)'
    }
  }, React.createElement('strong', {
    style: {
      fontWeight: 500
    }
  }, '100% Seda Mulberry.'), ' Un lujo que transforma vuestro descanso.'), React.createElement('p', {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: '#66605c'
    }
  }, 'Esta funda de almohada de seda es ', React.createElement('strong', null, 'hipoalergénica'), ' y suave, y ayuda a ', React.createElement('strong', null, 'mantener la temperatura adecuada.')), React.createElement('p', {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: '#66605c'
    }
  }, 'Ayuda a ', React.createElement('strong', null, 'prevenir las arrugas'), ' al mantener la hidratación de la piel y del cabello, reduciendo la fricción y evitando la ', React.createElement('strong', null, 'ruptura del cabello.')), React.createElement('p', {
    style: {
      margin: '18px 0 8px',
      fontSize: 13,
      color: '#7a736d'
    }
  }, 'Disponible varios colores.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10,
      margin: '10px 0 14px'
    }
  }, PRODUCT_COLORS.map(c => React.createElement('span', {
    key: c.key,
    onClick: () => setActive(c.key),
    title: c.name,
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      display: 'inline-block',
      background: SWATCH_BG[c.key],
      border: '1px solid #ddd',
      cursor: 'pointer',
      boxShadow: active === c.key ? '0 0 0 2px var(--bg), 0 0 0 3px #333' : 'none',
      transform: active === c.key ? 'scale(1.05)' : 'scale(1)'
    }
  }))), React.createElement('p', {
    style: {
      fontSize: 13,
      color: '#7a736d'
    }
  }, 'Color: ', React.createElement('strong', {
    style: {
      color: 'var(--dark)'
    }
  }, current.name)), React.createElement('div', {
    style: {
      marginTop: 24,
      padding: '16px 18px',
      background: 'var(--surface-card)',
      borderRadius: 10
    }
  }, React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.5,
      color: '#5e5956'
    }
  }, '¿Quieres llevar el lujo a toda tu cama? Ofrecemos juegos de cama completos bajo pedido.')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 20
    }
  }, React.createElement('a', {
    href: '#',
    style: {
      padding: '14px 22px',
      borderRadius: 6,
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      background: 'var(--amazon)',
      color: '#fff',
      boxShadow: '0 6px 16px rgba(243,146,0,.25)'
    }
  }, 'Lo Quiero'), React.createElement('a', {
    href: '#',
    style: {
      padding: '14px 22px',
      borderRadius: 6,
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      background: 'var(--surface-card)',
      color: '#333',
      border: '1px solid #ddd'
    }
  }, 'Instrucciones de uso')))));
}
window.Product = Product;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Product.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ColorSwatch = __ds_scope.ColorSwatch;

__ds_ns.FeatureIcon = __ds_scope.FeatureIcon;

__ds_ns.SizeCard = __ds_scope.SizeCard;

__ds_ns.CareCard = __ds_scope.CareCard;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FooterDesktop = __ds_scope.FooterDesktop;

__ds_ns.Header = __ds_scope.Header;

})();
