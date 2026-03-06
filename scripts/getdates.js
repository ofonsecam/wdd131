/**
 * Sets #currentyear to the current year and #lastModified to the document's last modified date.
 */
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
