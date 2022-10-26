// Affiche la date et l'heure de visite
const blockDateVisite = document.querySelector("#dateHeureVisite");

// On peut aussi utiliser date.toISOString(), date.toUTCString() ou date.toDateString()
// cf https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date
const date = new Date().toLocaleString();

// On ajoute la date et l'heure de visite dans le bloc
// blockDateVisite.textContent = date;

// On peut aussi utiliser pour éviter les injections
const text = document.createTextNode(date);
blockDateVisite.appendChild(text);

// Allez pour le fun, on va afficher la date et l'heure en temps réél
setInterval(function () {
  const block = document.querySelector("#heureTempsReel");
  const date = new Date().toLocaleTimeString();
  block.textContent = date;
}, 1000);
