/**
 * Cookie Fonctions
 */
function chercheCookie(nom) {
  const cookies = document.cookie.split(";");

  return cookies.find((x) => x.includes(nom));
}

function demandeUtilisateurAimeMonSite() {
  enregistrerOperation(creerOperation("demandeAimeMonSite"));
  return window.confirm("Est-ce que vous aimez mon site ?");
}

function enregistrerUtilisateurAimeMonSite(aimeMonSite) {
  enregistrerOperation(creerOperation("sauvegardeCookie"));

  const dateExpiration = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
  document.cookie = `aimeMonSite=${aimeMonSite}; path=/; expires=${dateExpiration}`;
}

/**
 * Fonctions d'affichage
 */

function afficherUtilisateurAimeMonSite(aimeMonSite) {
  const p = document.createElement("p");
  p.style.fontSize = "2rem";
  const text = aimeMonSite
    ? "Vous aimez mon site ❤️"
    : "Vous n'aimez pas mon site... 💔 vraiment ? 😭";
  p.appendChild(document.createTextNode(text));

  document.body.appendChild(p);
}

/**
 * Code
 */

const cookie = chercheCookie("aimeMonSite");
let aimeMonSite = cookie ? cookie.split("=")[1] === "true" : null;

if (!cookie) {
  aimeMonSite = demandeUtilisateurAimeMonSite();

  enregistrerUtilisateurAimeMonSite(aimeMonSite);
}

afficherUtilisateurAimeMonSite(aimeMonSite);

const boutonAfficher = document.querySelector("#afficherHistorique");
const boutonSupprimer = document.querySelector("#supprimerHistorique");

boutonAfficher.addEventListener("click", () => {
  const historiqueConteneur = document.querySelector("#historique");
  const historique = recupererHistorique();

  historiqueConteneur.innerHTML = "";

  historique.forEach((operation) => {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${operation.date}: ${operation.nom}`)
    );
    historiqueConteneur.appendChild(li);
  });
});

boutonSupprimer.addEventListener("click", () => {
  const historiqueConteneur = document.querySelector("#historique");
  historiqueConteneur.innerHTML = "";

  supprimerHistorique();
});
