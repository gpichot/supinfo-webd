/**
 * Historique Fonctions
 */
const CLEF_HISTORIQUE = "historiqueOperations";
function recupererHistorique() {
  return JSON.parse(localStorage.getItem(CLEF_HISTORIQUE) || "[]");
}
function enregistrerOperation(operation) {
  const historique = recupererHistorique();

  historique.push(operation);

  localStorage.setItem(CLEF_HISTORIQUE, JSON.stringify(historique));
}
function supprimerHistorique() {
  localStorage.removeItem(CLEF_HISTORIQUE);
}

function creerOperation(nomOperation) {
  return {
    nom: nomOperation,
    date: new Date().toUTCString(),
  };
}
