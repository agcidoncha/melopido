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
const amazonLink = document.getElementById("amazon-link");
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
    Marfil: "LINK_75_MARFIL",
    azulpavoreal: "LINK_75_AZUL",
    topo: "LINK_75_TOPO",
    granate: "LINK_75_GRANATE",
    grisazulado: "LINK_75_GRISAZULADO",
    azulnavy: "LINK_75_NAVY",
    negro: "LINK_75_NEGRO",
  },
  "90x45": {
    Marfil: "LINK_90_MARFIL",
    azulpavoreal: "LINK_90_AZUL",
    topo: "LINK_90_TOPO",
    granate: "LINK_90_GRANATE",
    grisazulado: "LINK_90_GRISAZULADO",
    azulnavy: "LINK_90_NAVY",
    negro: "LINK_90_NEGRO",
  },

  "110x45": {
    Marfil: "LINK_110_MARFIL",
    azulpavoreal: "LINK_110_AZUL",
    topo: "LINK_110_TOPO",
    granate: "LINK_110_GRANATE",
    grisazulado: "LINK_110_GRISAZULADO",
    azulnavy: "LINK_110_NAVY",
    negro: "LINK_110_NEGRO",
  },

  "120x45": {
    Marfil: "LINK_120_MARFIL",
    azulpavoreal: "LINK_120_AZUL",
    topo: "LINK_120_TOPO",
    granate: "LINK_120_GRANATE",
    grisazulado: "LINK_120_GRISAZULADO",
    azulnavy: "LINK_120_NAVY",
    negro: "LINK_120_NEGRO",
  },

  "135x45": {
    Marfil: "LINK_135_MARFIL",
    azulpavoreal: "LINK_135_AZUL",
    topo: "LINK_135_TOPO",
    granate: "LINK_135_GRANATE",
    grisazulado: "LINK_135_GRISAZULADO",
    azulnavy: "LINK_135_NAVY",
    negro: "LINK_135_NEGRO",
  },

  "150x45": {
    Marfil: "LINK_150_MARFIL",
    azulpavoreal: "LINK_150_AZUL",
    topo: "LINK_150_TOPO",
    granate: "LINK_150_GRANATE",
    grisazulado: "LINK_150_GRISAZULADO",
    azulnavy: "LINK_150_NAVY",
    negro: "LINK_150_NEGRO",
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

if (colors.length && amazonLink) {
  // desactivar colores sin link
  colors.forEach((color) => {
    const colorName = color.dataset.color;

    if (
      !currentAmazonLinks[colorName] ||
      currentAmazonLinks[colorName].trim() === "#"
    ) {
      color.classList.add("disabled");
    }
  });

  // asegurar que el active inicial no esté disabled
  let activeColor = document.querySelector(".product-colors span.active");

  if (
    activeColor &&
    (!currentAmazonLinks[activeColor.dataset.color] ||
      currentAmazonLinks[activeColor.dataset.color].trim() === "#")
  ) {
    activeColor.classList.remove("active");

    const firstAvailable = Array.from(colors).find((color) => {
      const name = color.dataset.color;
      return (
        currentAmazonLinks[name] && currentAmazonLinks[name].trim() !== "#"
      );
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
      amazonLink.href = currentAmazonLinks[selectedColor];
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
        amazonLink.href = currentAmazonLinks[selectedColor];
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
