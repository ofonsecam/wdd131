/**
 * WDD131 - Place: Greater Santiago, Chile
 * Footer dates, wind chill calculation (metric formula).
 */

/* ---------- Fechas del footer ---------- */
const currentYearEl = document.getElementById("currentyear");
const lastModifiedEl = document.getElementById("lastModified");

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}
if (lastModifiedEl) {
  lastModifiedEl.textContent = document.lastModified;
}

/* ---------- Datos estáticos Santiago ---------- */
const temp = 9;
const wind = 12;

/**
 * Calcula sensación térmica (wind chill) con fórmula métrica.
 * @param {number} temperature - Temperatura en °C
 * @param {number} windSpeed - Velocidad del viento en km/h
 * @returns {number} Sensación térmica en °C
 */
const calculateWindChill = (temperature, windSpeed) =>
  13.12 +
  0.6215 * temperature -
  11.37 * Math.pow(windSpeed, 0.16) +
  0.3965 * temperature * Math.pow(windSpeed, 0.16);

/* ---------- Inyección condicional en #windchill ---------- */
const windchillEl = document.getElementById("windchill");

if (windchillEl) {
  if (temp <= 10 && wind > 4.8) {
    windchillEl.textContent = `${calculateWindChill(temp, wind).toFixed(1)} °C`;
  } else {
    windchillEl.textContent = "N/A";
  }
}
