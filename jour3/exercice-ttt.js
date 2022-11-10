const etatJeu = {
  cellules: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  // Deux joueurs possibles : "X" ou "O"
  joueur: "BLEU",
};

function joueurAGagne() {
  // Vérifie si le joueur a gagné
  // Retourne etatJeu.joueur si le joueur a gagné, sinon retourne null

  // Vérifie les lignes
  for (let i = 0; i < 3; i++) {
    if (
      etatJeu.cellules[i][0] === etatJeu.joueur &&
      etatJeu.cellules[i][1] === etatJeu.joueur &&
      etatJeu.cellules[i][2] === etatJeu.joueur
    ) {
      return etatJeu.joueur;
    }
  }

  // Vérifie les colonnes
  for (let i = 0; i < 3; i++) {
    if (
      etatJeu.cellules[0][i] === etatJeu.joueur &&
      etatJeu.cellules[1][i] === etatJeu.joueur &&
      etatJeu.cellules[2][i] === etatJeu.joueur
    ) {
      return etatJeu.joueur;
    }
  }

  // Vérifie les diagonales
  // Diagonale 1
  if (
    etatJeu.cellules[0][0] === etatJeu.joueur &&
    etatJeu.cellules[1][1] === etatJeu.joueur &&
    etatJeu.cellules[2][2] === etatJeu.joueur
  ) {
    return etatJeu.joueur;
  }

  // Diagonale 2
  if (
    etatJeu.cellules[0][2] === etatJeu.joueur &&
    etatJeu.cellules[1][1] === etatJeu.joueur &&
    etatJeu.cellules[2][0] === etatJeu.joueur
  ) {
    return etatJeu.joueur;
  }
  return null;
}

const cellules = document.querySelectorAll(".cellule");
const message = document.querySelector("#instruction");

function jouer(event) {
  const id = event.target.getAttribute("id");
  const morceaux = id.split("-");
  const ligne = parseInt(morceaux[1]);
  const colonne = parseInt(morceaux[2]);

  const cellule = etatJeu.cellules[ligne][colonne];
  if (cellule === null) {
    // On met à jour l'état du jeu
    etatJeu.cellules[ligne][colonne] = etatJeu.joueur;

    // On met à jour l'affichage
    event.target.textContent = etatJeu.joueur === "ORANGE" ? "🔶" : "🔵";

    // On vérifie si le joueur a gagné
    const gagnant = joueurAGagne();
    if (gagnant !== null) {
      // On affiche le message de victoire
      message.textContent = `Le joueur ${gagnant} a gagné!`;

      // On désactive les cellules
      cellules.forEach((cellule) => {
        cellule.removeEventListener("click", jouer);
        cellule.classList.add("disabled");
      });
    } else {
      // On change de joueur
      etatJeu.joueur = etatJeu.joueur === "BLEU" ? "ORANGE" : "BLEU";

      // On affiche le message
      message.textContent = `Au tour du joueur ${etatJeu.joueur}`;
    }
  }
}

function reset() {
  etatJeu.cellules = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  etatJeu.joueur = "BLEU";

  cellules.forEach((cellule) => {
    cellule.innerHTML = "";
    cellule.addEventListener("click", jouer);
    cellule.classList.remove("disabled");
  });

  message.textContent = `Au tour du joueur ${etatJeu.joueur}`;
}

const buttonReset = document.querySelector("#reset");
buttonReset.addEventListener("click", reset);

reset();
