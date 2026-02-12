document.addEventListener("DOMContentLoaded", () => {

  /* ===== IDIOMA ===== */
  let currentLang = "pt";

  window.toggleLanguage = function () {
    const elements = document.querySelectorAll("[data-pt]");
    const btn = document.getElementById("lang-btn");

    elements.forEach(el => {
      el.innerText = el.dataset[currentLang === "pt" ? "en" : "pt"];
    });

    currentLang = currentLang === "pt" ? "en" : "pt";
    btn.innerText = currentLang === "pt" ? "PT" : "EN";
  };

  /* ===== MENU ===== */
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");
  const navLinks = nav.querySelectorAll("a");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");
  menuBtn.classList.toggle("active");

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.classList.toggle("hidden", isOpen);
  }
});

  /* ===== SCROLL SUAVE ===== */
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.dataset.scroll;
      const target = document.getElementById(targetId);
      if (!target) return;

      const headerOffset = 70;
      const targetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

      nav.classList.remove("active");
      menuBtn.classList.remove("active");

      const langBtn = document.getElementById("lang-btn");
        if (langBtn) {
        langBtn.classList.remove("hidden");
        }
    });
  });

});

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.innerText = "☀";  // sol preto
  } else {
    themeBtn.innerText = "☾";  // lua branca
  }
});

/* ===== SCROLL REVEAL (DO ABOUT PRA BAIXO) ===== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => revealObserver.observe(el));

/* ===== MODAL CONTATO ===== */

const openContact = document.getElementById("open-contact");
const openContactHome = document.getElementById("open-contact-home");
const closeContact = document.getElementById("close-contact");
const contactModal = document.getElementById("contact-modal");

function openModal() {
  contactModal.classList.add("active");
}

if (openContact) {
  openContact.addEventListener("click", openModal);
}

if (openContactHome) {
  openContactHome.addEventListener("click", openModal);
}

if (closeContact && contactModal) {
  closeContact.addEventListener("click", () => {
    contactModal.classList.remove("active");
  });

  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove("active");
    }
  });
}

/* ===== LOGO VOLTA AO INÍCIO ===== */

const logoHome = document.getElementById("logo-home");

if (logoHome) {
  logoHome.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}