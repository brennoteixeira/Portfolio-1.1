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