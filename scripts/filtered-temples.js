const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo-guam-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-dc-temple.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city-temple.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl: "images/bogota-colombia-temple.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "images/provo-city-center-temple.jpg"  
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "images/salt-lake-temple.jpg"
  }
];

// Seleccionar el contenedor de la galería
const gallery = document.querySelector(".gallery");

// Función para renderizar los templos
function renderTemples(filteredTemples) {
  // Limpiar la galería antes de agregar nuevas tarjetas
  gallery.innerHTML = "";

  filteredTemples.forEach(temple => {
    // Crear elementos HTML
    let card = document.createElement("figure");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    // Asignar contenido
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    
    // Configurar imagen con lazy loading
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    // Construir la tarjeta
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    // Agregar la tarjeta a la galería
    gallery.appendChild(card);
  });
}

// Llamada inicial para mostrar todos los templos al cargar la página
renderTemples(temples);

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

// Capturar los elementos del DOM para los filtros
const title = document.querySelector("#gallery-title");
const navHome = document.querySelector("#nav-home");
const navOld = document.querySelector("#nav-old");
const navNew = document.querySelector("#nav-new");
const navLarge = document.querySelector("#nav-large");
const navSmall = document.querySelector("#nav-small");

// Event listeners para cada filtro
navHome.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que la página salte al inicio por el href="#"
  title.textContent = "Home";
  renderTemples(temples);
});

navOld.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Old";
  const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
  renderTemples(oldTemples);
});

navNew.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "New";
  const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
  renderTemples(newTemples);
});

navLarge.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Large";
  const largeTemples = temples.filter(temple => temple.area > 90000);
  renderTemples(largeTemples);
});

navSmall.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Small";
  const smallTemples = temples.filter(temple => temple.area < 10000);
  renderTemples(smallTemples);
});