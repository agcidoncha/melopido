// AVISO DE COOKIES — Google Analytics solo se carga si el usuario acepta
const GA_MEASUREMENT_ID = "G-GQ75L6TKYJ";
const cookieBanner = document.getElementById("cookie-banner");
const cookieAcceptBtn = document.getElementById("cookie-accept");
const cookieRejectBtn = document.getElementById("cookie-reject");

function loadGoogleAnalytics() {
  if (window.gaLoaded) return;
  window.gaLoaded = true;

  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}

const cookieConsent = localStorage.getItem("melopido-cookies");

if (cookieConsent === "accepted") {
  loadGoogleAnalytics();
} else if (cookieConsent === null && cookieBanner) {
  cookieBanner.classList.add("active");
}

if (cookieAcceptBtn) {
  cookieAcceptBtn.addEventListener("click", () => {
    localStorage.setItem("melopido-cookies", "accepted");
    cookieBanner.classList.remove("active");
    loadGoogleAnalytics();
  });
}

if (cookieRejectBtn) {
  cookieRejectBtn.addEventListener("click", () => {
    localStorage.setItem("melopido-cookies", "rejected");
    cookieBanner.classList.remove("active");
  });
}

const cookiePreferencesBtn = document.getElementById("cookie-preferences-btn");

if (cookiePreferencesBtn) {
  cookiePreferencesBtn.addEventListener("click", () => {
    localStorage.removeItem("melopido-cookies");
    if (cookieBanner) cookieBanner.classList.add("active");
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
}

const menuIcon = document.querySelector(".menu-icon");
const body = document.body;

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    body.classList.toggle("menu-open");
  });
}

const desktopMenuToggle = document.querySelector(".desktop-menu-toggle");
const desktopMenu = document.querySelector(".desktop-menu");
const desktopMenuOverlay = document.querySelector(".desktop-menu-overlay");
const desktopMenuClose = document.querySelector(".desktop-menu-close");

function openDesktopMenu() {
  document.body.classList.add("desktop-menu-open");
}

function closeDesktopMenu() {
  document.body.classList.remove("desktop-menu-open");
}

if (desktopMenuToggle) {
  desktopMenuToggle.addEventListener("click", () => {
    openDesktopMenu();
  });
}

if (desktopMenuClose) {
  desktopMenuClose.addEventListener("click", () => {
    closeDesktopMenu();
  });
}

if (desktopMenuOverlay) {
  desktopMenuOverlay.addEventListener("click", () => {
    closeDesktopMenu();
  });
}

const claimText = document.getElementById("claim-text");
const claimSub = document.getElementById("claim-sub");

if (claimText && claimSub) {
  const claimItems = [
    {
      title: "Sueño de seda",
      sub: "Piel y cabello más cuidados cada noche",
    },
    {
      title: "Descanso premium",
      sub: "Suavidad natural para dormir mejor",
    },
    {
      title: "Belleza mientras duermes",
      sub: "Menos fricción, más cuidado nocturno",
    },
  ];

  let claimIndex = 0;

  function changeClaim() {
    claimText.classList.remove("is-visible");
    claimSub.classList.remove("is-visible");

    claimText.classList.add("is-hidden");
    claimSub.classList.add("is-hidden");

    setTimeout(() => {
      claimIndex = (claimIndex + 1) % claimItems.length;
      claimText.textContent = claimItems[claimIndex].title;
      claimSub.textContent = claimItems[claimIndex].sub;

      claimText.classList.remove("is-hidden");
      claimSub.classList.remove("is-hidden");

      claimText.classList.add("is-visible");
      claimSub.classList.add("is-visible");
    }, 350);
  }

  claimText.classList.add("is-visible");
  claimSub.classList.add("is-visible");

  setInterval(changeClaim, 4000);
}

// HERO (solo home)
const heroTitle = document.getElementById("hero-title");
const heroSub = document.getElementById("hero-sub");

const heroBg1 = document.querySelector(".hero-bg-1");
const heroBg2 = document.querySelector(".hero-bg-2");

if (heroTitle && heroSub && heroBg1 && heroBg2) {
  const isMobile = window.innerWidth <= 768;

  const heroSlides = [
    {
      image: isMobile
        ? "images/homemobile/1-mobile.webp"
        : "images/home/hero-home.jpg",
      title: "Fundas de almohada de seda",
      sub: "Disponibles en 6 tallas",
    },
    {
      image: isMobile
        ? "images/homemobile/2-mobile.webp"
        : "images/home/hero-home2.jpg",
      title: "Mejora tu piel mientras duermes",
      sub: "Disponible en 7 colores",
    },
  ];

  let heroIndex = 0;
  let activeBg = 1;

  // Inicial
  heroBg1.style.backgroundImage = `url('${heroSlides[0].image}')`;
  heroTitle.textContent = heroSlides[0].title;
  heroSub.textContent = heroSlides[0].sub;
  heroBg1.classList.add("active");

  function changeHeroBackground() {
    const nextIndex = (heroIndex + 1) % heroSlides.length;
    const nextSlide = heroSlides[nextIndex];
    const nextImage = nextSlide.image;

    if (activeBg === 1) {
      heroBg2.style.backgroundImage = `url('${nextImage}')`;
      heroBg2.classList.add("active");
      heroBg1.classList.remove("active");
      activeBg = 2;
    } else {
      heroBg1.style.backgroundImage = `url('${nextImage}')`;
      heroBg1.classList.add("active");
      heroBg2.classList.remove("active");
      activeBg = 1;
    }

    heroTitle.classList.remove("hero-visible");
    heroSub.classList.remove("hero-visible");

    heroTitle.classList.add("hero-fade");
    heroSub.classList.add("hero-fade");

    setTimeout(() => {
      heroTitle.textContent = nextSlide.title;
      heroSub.textContent = nextSlide.sub;

      heroTitle.classList.remove("hero-fade");
      heroSub.classList.remove("hero-fade");

      heroTitle.classList.add("hero-visible");
      heroSub.classList.add("hero-visible");
    }, 500);

    heroIndex = nextIndex;
  }

  setInterval(changeHeroBackground, 6500);
}

// PRODUCTO
const colors = document.querySelectorAll(".product-colors span");
const amazonLinkEls = document.querySelectorAll("#amazon-link, .js-amazon-link");
const selectedColorTextDesktop = document.getElementById(
  "selected-color-desktop",
);
const selectedColorTextMobile = document.getElementById(
  "selected-color-mobile",
);
const productImage = document.getElementById("product-image");
const productSection = document.querySelector(".product");
const productSize = productSection ? productSection.dataset.size : "";
const thumbs = document.querySelectorAll(".product-thumb");

const productImages = {
  Marfil: "marfil.webp",
  azulpavoreal: "azulpavoreal.webp",
  topo: "topo.webp",
  granate: "granate.webp",
  grisazulado: "grisazulado.webp",
  azulnavy: "azulnavy.webp",
  negro: "negro.webp",
};

const amazonLinks = {
  "75x50": {
    Marfil:
      "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
    azulpavoreal:
      "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
    topo: "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
    granate:
      "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
    grisazulado:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYKXDSC",
    azulnavy:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYJMCLR",
    negro:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYFQZNK",
  },
  "90x45": {
    Marfil:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYDSJMD",
    azulpavoreal:
      "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
    topo: "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYHBGCJ",
    granate:
      "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
    grisazulado:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYHH9GM",
    azulnavy:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYFJS1B",
    negro:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYJ3ZV3",
  },

  "110x45": {
    Marfil:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYJ3T2X",
    azulpavoreal:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYKDYXS",
    topo: "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYLSDS6",
    granate:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYHWNR6",
    grisazulado:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYKX28Q",
    azulnavy:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYHCTYW",
    negro:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYH7QT6",
  },

  "120x45": {
    Marfil:
      "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
    azulpavoreal:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYGRM6W",
    topo: "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYJ8YZQ",
    granate:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYGZKZ6",
    grisazulado:
      "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
    azulnavy:
      "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
    negro:
      "https://www.amazon.es/stores/Melopido/page/857CF463-B1A2-4A92-AC5A-22805E40B900",
  },

  "135x45": {
    Marfil:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYK74JC",
    azulpavoreal:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYHNGG8",
    topo: "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYN1R4H",
    granate:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYJ57ZK",
    grisazulado: "PENDIENTE",
    azulnavy:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYJTR77",
    negro:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYJ6WMX",
  },

  "150x45": {
    Marfil:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYK7K9Q",
    azulpavoreal:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYL4FTG",
    topo: "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYGML5T",
    granate:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYG943V",
    grisazulado:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYFMTYT",
    azulnavy:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYHBHDW",
    negro:
      "https://www.amazon.es/Almohada-Mulberry-Termorreguladora-hipoalerg%C3%A9nica-Certificada/dp/B0DQYJ42YY",
  },
};

const currentAmazonLinks = amazonLinks[productSize] || {};

const prettyNames = {
  Marfil: "Marfil",
  azulpavoreal: "Azul Pavo Real",
  topo: "Topo",
  granate: "Granate",
  grisazulado: "Gris Azulado",
  azulnavy: "Azul Navy",
  negro: "Negro",
};

function changeImage(newSrc, newAlt) {
  if (!productImage) return;

  productImage.style.opacity = 0;

  setTimeout(() => {
    productImage.src = newSrc;
    productImage.alt = newAlt;
    productImage.style.opacity = 1;
  }, 100);
}

function isValidAmazonLink(url) {
  if (!url) return false;
  const trimmed = url.trim();
  return trimmed !== "#" && trimmed.toUpperCase() !== "PENDIENTE";
}

if (colors.length && amazonLinkEls.length) {
  // Si la URL trae ?color=xxx (por ejemplo desde el cuestionario "elige tu
  // color"), lo usamos como color inicial en vez del que venga marcado por
  // defecto en el HTML.
  const colorFromUrl = new URLSearchParams(window.location.search).get(
    "color",
  );

  if (colorFromUrl) {
    // Ojo: cada talla tiene el selector de color duplicado (uno para móvil y
    // otro para escritorio), así que hay que marcar todas las coincidencias,
    // no solo la primera.
    const matchesByUrl = Array.from(colors).filter(
      (c) => c.dataset.color.toLowerCase() === colorFromUrl.toLowerCase(),
    );

    if (matchesByUrl.length) {
      colors.forEach((c) => c.classList.remove("active"));
      matchesByUrl.forEach((c) => c.classList.add("active"));
    }
  }

  // desactivar colores sin link
  colors.forEach((color) => {
    const colorName = color.dataset.color;

    if (!isValidAmazonLink(currentAmazonLinks[colorName])) {
      color.classList.add("disabled");
    }
  });

  // asegurar que el active inicial no esté disabled
  let activeColor = document.querySelector(".product-colors span.active");

  if (
    activeColor &&
    !isValidAmazonLink(currentAmazonLinks[activeColor.dataset.color])
  ) {
    activeColor.classList.remove("active");

    const firstAvailable = Array.from(colors).find((color) => {
      const name = color.dataset.color;
      return isValidAmazonLink(currentAmazonLinks[name]);
    });

    if (firstAvailable) {
      firstAvailable.classList.add("active");
      activeColor = firstAvailable;
    }
  }

  // default final
  const defaultColor = document.querySelector(".product-colors span.active");

  if (defaultColor) {
    const selectedColor = defaultColor.dataset.color;

    if (productImages[selectedColor] && productSize) {
      changeImage(
        `images/${productSize}/${productImages[selectedColor]}`,
        `Funda de almohada de seda ${productSize} color ${
          prettyNames[selectedColor] || selectedColor
        }`,
      );
    }

    if (currentAmazonLinks[selectedColor]) {
      amazonLinkEls.forEach((el) => {
        el.href = currentAmazonLinks[selectedColor];
      });
    }

    if (selectedColorTextDesktop) {
      selectedColorTextDesktop.textContent =
        prettyNames[selectedColor] || selectedColor;
    }

    if (selectedColorTextMobile) {
      selectedColorTextMobile.textContent =
        prettyNames[selectedColor] || selectedColor;
    }
  }

  // eventos color
  colors.forEach((color) => {
    color.addEventListener("click", () => {
      if (color.classList.contains("disabled")) return;

      colors.forEach((c) => c.classList.remove("active"));
      color.classList.add("active");

      const selectedColor = color.dataset.color;

      thumbs.forEach((t) => t.classList.remove("active"));

      if (productImages[selectedColor] && productSize) {
        changeImage(
          `images/${productSize}/${productImages[selectedColor]}`,
          `Funda de almohada de seda ${productSize} color ${
            prettyNames[selectedColor] || selectedColor
          }`,
        );
      }

      if (currentAmazonLinks[selectedColor]) {
        amazonLinkEls.forEach((el) => {
          el.href = currentAmazonLinks[selectedColor];
        });
      }

      if (selectedColorTextDesktop) {
        selectedColorTextDesktop.textContent =
          prettyNames[selectedColor] || selectedColor;
      }

      if (selectedColorTextMobile) {
        selectedColorTextMobile.textContent =
          prettyNames[selectedColor] || selectedColor;
      }
    });
  });
}

// COMPRAR EN MELOPIDO — aviso de confirmación de talla/color antes de pagar
// Interruptor: mientras Stripe siga en modo prueba, false (el botón lleva a Amazon
// como siempre). El día que se pase a modo real, cambiar a true y ya usa el pago real.
const MELOPIDO_CHECKOUT_LIVE = false;

const melopidoBuyEls = document.querySelectorAll(".js-melopido-buy");
const confirmOverlay = document.getElementById("confirm-overlay");
const confirmSizeEl = document.getElementById("confirm-size");
const confirmColorEl = document.getElementById("confirm-color");
const confirmPayBtn = document.getElementById("confirm-pay-btn");
const confirmCancelBtn = document.getElementById("confirm-cancel-btn");
const checkoutForm = document.getElementById("melopido-checkout-form");
const checkoutTallaInput = document.getElementById("checkout-talla");
const checkoutColorInput = document.getElementById("checkout-color");

if (
  melopidoBuyEls.length &&
  confirmOverlay &&
  checkoutForm &&
  checkoutTallaInput &&
  checkoutColorInput
) {
  const openConfirm = () => {
    const activeColor = document.querySelector(".product-colors span.active");
    const colorKey = activeColor ? activeColor.dataset.color : "";
    const colorLabel = prettyNames[colorKey] || colorKey;

    confirmSizeEl.textContent = productSize;
    confirmColorEl.textContent = colorLabel;
    checkoutTallaInput.value = productSize;
    checkoutColorInput.value = colorLabel;

    confirmOverlay.classList.add("active");
  };

  const closeConfirm = () => {
    confirmOverlay.classList.remove("active");
  };

  melopidoBuyEls.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      if (!MELOPIDO_CHECKOUT_LIVE) {
        const activeColor = document.querySelector(
          ".product-colors span.active",
        );
        const colorKey = activeColor ? activeColor.dataset.color : "";
        const fallbackUrl = currentAmazonLinks[colorKey];
        if (fallbackUrl) window.location.href = fallbackUrl;
        return;
      }

      openConfirm();
    });
  });

  confirmCancelBtn.addEventListener("click", closeConfirm);

  confirmOverlay.addEventListener("click", (e) => {
    if (e.target === confirmOverlay) closeConfirm();
  });

  confirmPayBtn.addEventListener("click", () => {
    checkoutForm.submit();
  });
}

// eventos miniaturas
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const activeColor = document.querySelector(".product-colors span.active");
    const colorName = activeColor ? activeColor.dataset.color : "";

    changeImage(
      thumb.src,
      `Detalle de funda de almohada de seda ${productSize} color ${
        prettyNames[colorName] || colorName
      }`,
    );

    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");

    thumb.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  });
});

const overlay = document.querySelector(".menu-overlay");

if (overlay) {
  overlay.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
}

const mobileToggle = document.querySelector(".mobile-toggle");
const mobileSubmenu = document.querySelector(".mobile-submenu");

if (mobileToggle && mobileSubmenu) {
  mobileToggle.addEventListener("click", () => {
    mobileSubmenu.classList.toggle("open");
  });
}

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetUrl = link.getAttribute("href");

    if (!targetUrl || targetUrl.startsWith("#")) return;

    e.preventDefault();
    document.body.classList.remove("menu-open");

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 300);
  });
});

const mobileClose = document.querySelector(".mobile-close");

if (mobileClose) {
  mobileClose.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
}
const toggleRows = document.querySelectorAll(".mobile-toggle-row");

toggleRows.forEach((row) => {
  row.addEventListener("click", () => {
    const parent = row.closest(".mobile-item");
    const submenu = row.nextElementSibling;

    parent.classList.toggle("open");
    submenu.classList.toggle("open");
  });
});

const openVideoBtns = document.querySelectorAll(".js-open-video");
const videoModal = document.getElementById("video-modal");
const closeVideoBtn = document.getElementById("close-video-modal");
const videoOverlay = document.querySelector(".video-modal-overlay");
const videoEl = document.getElementById("melopido-video");

if (openVideoBtns.length && videoModal) {
  openVideoBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      videoModal.classList.add("is-open");
      document.body.classList.add("video-open");

      if (videoEl) {
        videoEl.pause();
        videoEl.currentTime = 0;
        videoEl.load();
      }
    });
  });
}

function closeVideo() {
  if (!videoModal) return;

  videoModal.classList.remove("is-open");
  document.body.classList.remove("video-open");

  if (videoEl) {
    videoEl.pause();
    videoEl.currentTime = 0;
  }
}

if (closeVideoBtn) {
  closeVideoBtn.addEventListener("click", closeVideo);
}

if (videoOverlay) {
  videoOverlay.addEventListener("click", closeVideo);
}

const customPlayBtn = document.getElementById("video-custom-play");

if (customPlayBtn && videoEl) {
  customPlayBtn.addEventListener("click", () => {
    videoEl.play();
    customPlayBtn.style.display = "none";
  });

  videoEl.addEventListener("pause", () => {
    customPlayBtn.style.display = "flex";
  });

  videoEl.addEventListener("ended", () => {
    customPlayBtn.style.display = "flex";
  });
}

const desktopToggles = document.querySelectorAll(".desktop-toggle-row");

desktopToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const parent = toggle.closest(".desktop-menu-item");
    parent.classList.toggle("active");
  });
});

// CUESTIONARIO "ELIGE TU COLOR" — solo se activa en elige-tu-color.html
(function () {
  const card = document.getElementById("quizCard");
  if (!card) return;

  const QUIZ_COLORS = {
    marfil:   { name: "Marfil",         hex: "#efe4d4", siteKey: "Marfil",       desc: "Elegante y delicado. Aporta luminosidad y una sensación de pureza y calma." },
    topo:     { name: "Topo",           hex: "#c6a58f", siteKey: "topo",         desc: "Cálido y sofisticado. Transmite bienestar y armonía a tu espacio." },
    gris:     { name: "Gris azulado",   hex: "#8996a3", siteKey: "grisazulado",  desc: "Moderno y versátil. Aporta equilibrio y un toque contemporáneo." },
    granate:  { name: "Granate",        hex: "#7c2634", siteKey: "granate",      desc: "Intenso y elegante. Aporta calidez y profundidad a tu habitación." },
    pavoreal: { name: "Azul pavo real", hex: "#15748c", siteKey: "azulpavoreal", desc: "Vibrante y lujoso. Aporta energía, confianza y sofisticación." },
    navy:     { name: "Azul navy",      hex: "#1c2c4c", siteKey: "azulnavy",     desc: "Clásico y atemporal. Transmite tranquilidad y favorece un sueño profundo." },
    negro:    { name: "Negro",          hex: "#1c1a19", siteKey: "negro",        desc: "Elegante y sofisticado. Aporta un toque de lujo y combina con todo." },
  };

  const QUIZ_TALLAS = [
    { slug: "75x50",  label: "Infantil",      sub: "75 × 50 cm" },
    { slug: "90x45",  label: "Individual",    sub: "90 × 45 cm" },
    { slug: "110x45", label: "Individual XL", sub: "110 × 45 cm" },
    { slug: "120x45", label: "Matrimonio",    sub: "120 × 45 cm" },
    { slug: "135x45", label: "Matrimonio XL", sub: "135 × 45 cm" },
    { slug: "150x45", label: "Grande",        sub: "150 × 45 cm" },
  ];

  const QUIZ_QUESTIONS = [
    {
      text: "¿De qué color es tu dormitorio?",
      answers: [
        { label: "Blancos y tonos muy claros", swatch: "#f2ede4", scores: { marfil: 3, gris: 2, negro: 1 } },
        { label: "Cálidos: beige, madera, terracota", swatch: "#cba586", scores: { topo: 3, granate: 2, marfil: 1 } },
        { label: "Fríos: grises o azules", swatch: "#8b98a6", scores: { gris: 3, navy: 3, pavoreal: 1 } },
        { label: "Oscuro o con mucha personalidad", swatch: "#2b2622", scores: { negro: 3, granate: 2, navy: 1 } },
      ],
    },
    {
      text: "¿Prefieres algo discreto o con contraste?",
      answers: [
        { label: "Discreto, que se funda con la decoración", swatch: "#e3d9c9", scores: { marfil: 3, topo: 3, gris: 2 } },
        { label: "Con contraste, que destaque", swatch: "#7c2634", scores: { granate: 3, pavoreal: 3, negro: 2 } },
      ],
    },
    {
      text: "¿Tu estilo es clásico, moderno o elegante?",
      answers: [
        { label: "Clásico", swatch: "#1c2c4c", scores: { marfil: 2, topo: 2, navy: 3 } },
        { label: "Moderno", swatch: "#8b98a6", scores: { gris: 3, pavoreal: 2, negro: 1 } },
        { label: "Elegante", swatch: "#1c1a19", scores: { granate: 2, negro: 3, navy: 1 } },
      ],
    },
    {
      text: "¿Quieres un color fácil de combinar?",
      answers: [
        { label: "Sí, que combine con todo", swatch: "#efe4d4", scores: { marfil: 3, negro: 3, topo: 2, gris: 1 } },
        { label: "No me importa, quiero personalidad", swatch: "#15748c", scores: { granate: 2, pavoreal: 3, navy: 1 } },
      ],
    },
  ];

  const QUIZ_TOTAL_STEPS = QUIZ_QUESTIONS.length + 1;
  const quizScores = {};
  Object.keys(QUIZ_COLORS).forEach((k) => (quizScores[k] = 0));
  const quizHistory = [];
  let quizStep = 0;
  let quizSelectedTalla = null;

  const quizView = document.getElementById("quizView");
  const quizResultView = document.getElementById("quizResultView");
  const quizStepLabel = document.getElementById("quizStepLabel");
  const quizQuestionText = document.getElementById("quizQuestionText");
  const quizAnswersList = document.getElementById("quizAnswersList");
  const quizBackLink = document.getElementById("quizBackLink");
  const quizThreadFill = document.getElementById("quizThreadFill");

  function quizIsTallaStep() {
    return quizStep === QUIZ_QUESTIONS.length;
  }

  function quizRenderQuestion() {
    quizAnswersList.innerHTML = "";
    quizStepLabel.textContent = `Pregunta ${quizStep + 1} de ${QUIZ_TOTAL_STEPS}`;

    if (quizIsTallaStep()) {
      quizQuestionText.textContent = "¿Qué talla buscas?";
      QUIZ_TALLAS.forEach((t) => {
        const btn = document.createElement("button");
        btn.className = "color-quiz-answer-btn";
        btn.innerHTML = `<span class="color-quiz-talla-text"><span class="color-quiz-talla-label">${t.label}</span><span class="color-quiz-talla-sub">${t.sub}</span></span>`;
        btn.addEventListener("click", () => quizSelectTalla(t));
        quizAnswersList.appendChild(btn);
      });
    } else {
      const q = QUIZ_QUESTIONS[quizStep];
      quizQuestionText.textContent = q.text;
      q.answers.forEach((a) => {
        const btn = document.createElement("button");
        btn.className = "color-quiz-answer-btn";
        btn.innerHTML = `<span class="color-quiz-swatch-dot" style="background:${a.swatch}"></span><span>${a.label}</span>`;
        btn.addEventListener("click", () => quizSelectAnswer(a));
        quizAnswersList.appendChild(btn);
      });
    }

    quizQuestionText.classList.remove("color-quiz-fade");
    void quizQuestionText.offsetWidth;
    quizQuestionText.classList.add("color-quiz-fade");
    quizAnswersList.classList.remove("color-quiz-fade");
    void quizAnswersList.offsetWidth;
    quizAnswersList.classList.add("color-quiz-fade");

    quizBackLink.hidden = quizStep === 0;
    quizThreadFill.style.width = `${(quizStep / QUIZ_TOTAL_STEPS) * 100}%`;
  }

  function quizSelectAnswer(answer) {
    quizHistory.push(JSON.parse(JSON.stringify(quizScores)));
    Object.entries(answer.scores).forEach(([color, pts]) => {
      quizScores[color] = (quizScores[color] || 0) + pts;
    });
    quizStep += 1;
    quizRenderQuestion();
  }

  function quizSelectTalla(talla) {
    quizSelectedTalla = talla;
    quizThreadFill.style.width = "100%";
    quizShowResult();
  }

  quizBackLink.addEventListener("click", () => {
    if (quizStep === 0) return;
    quizStep -= 1;
    if (!quizIsTallaStep()) Object.assign(quizScores, quizHistory.pop());
    quizRenderQuestion();
  });

  function quizShowResult() {
    const ranked = Object.entries(quizScores).sort((a, b) => b[1] - a[1]);
    const primary = QUIZ_COLORS[ranked[0][0]];
    const alt = QUIZ_COLORS[ranked[1][0]];

    document.getElementById("quizResultSwatch").style.background = primary.hex;
    document.getElementById("quizResultName").textContent = primary.name;
    document.getElementById("quizResultCopy").innerHTML =
      `<strong>${primary.name}</strong> es tu combinación perfecta. ${primary.desc}`;
    document.getElementById("quizAltSwatch").style.background = alt.hex;
    document.getElementById("quizAltText").innerHTML =
      `También te podría gustar <b>${alt.name}</b>: ${alt.desc}`;

    const url = `funda-almohada-seda-${quizSelectedTalla.slug}.html?color=${encodeURIComponent(primary.siteKey)}`;
    const ctaPrimary = document.getElementById("quizCtaPrimary");
    ctaPrimary.href = url;
    ctaPrimary.innerHTML = `Ver funda ${quizSelectedTalla.sub} en ${primary.name} <span class="arrow">›</span>`;

    quizView.classList.add("color-quiz-quiz");
    quizView.classList.add("hidden");
    quizResultView.classList.add("active");
  }

  const quizRestartBtn = document.getElementById("quizRestartBtn");
  if (quizRestartBtn) {
    quizRestartBtn.addEventListener("click", () => {
      Object.keys(quizScores).forEach((k) => (quizScores[k] = 0));
      quizHistory.length = 0;
      quizStep = 0;
      quizSelectedTalla = null;
      quizResultView.classList.remove("active");
      quizView.classList.remove("hidden");
      quizRenderQuestion();
    });
  }

  quizRenderQuestion();
})();
