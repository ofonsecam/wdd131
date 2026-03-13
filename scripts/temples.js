/**
 * Temple Album – Footer dates and hamburger menu.
 * @file temples.js
 */

// Footer: año actual
const currentyearEl = document.getElementById("currentyear");
if (currentyearEl) {
  currentyearEl.textContent = new Date().getFullYear();
}

// Footer: última modificación del documento
const lastModifiedEl = document.getElementById("lastModified");
if (lastModifiedEl) {
  lastModifiedEl.textContent = document.lastModified;
}

// Menú hamburguesa
const menuBtn = document.getElementById("menu");
const navigation = document.getElementById("navigation");

if (menuBtn && navigation) {
  menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuBtn.classList.toggle("open");

    if (menuBtn.classList.contains("open")) {
      menuBtn.textContent = "X";
      menuBtn.setAttribute("aria-label", "Close Navigation");
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      menuBtn.textContent = "\u2630"; // ☰
      menuBtn.setAttribute("aria-label", "Open Navigation");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}
