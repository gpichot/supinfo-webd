// Il y a beaucoup de méthodes possibles pour résoudre cet exercice.
//
// Si on utilise des boutons de type input, on peut utiliser la propriété value
// pour récupérer la valeur de l'opérande.

/**
 * Cette fonction ajouter l'opération l'historique
 */
function afficherCalculDansHistorique(calcul) {
  const listeHistorique = document.querySelector("#historique");

  const puce = document.createElement("li");
  puce.textContent = calcul;
  listeHistorique.appendChild(puce);
}

/**
 * Cette fonction récupère les valeurs des inputs sous forme de nombres
 */
function recupereEntree(idInputEntree) {
  const input1 = document.querySelector(idInputEntree);

  return Number(input1.value);
}

/**
 * Cette fonction renvoit le symbole pour l'opération correspondante
 */
function recupereSymboleOperation(operation) {
  if (operation === "SUM") {
    return "+";
  } else if (operation === "SUB") {
    return "-";
  } else if (operation === "MULT") {
    return "x";
  } else if (operation === "DIV") {
    return "/";
  } else if (operation === "MODULO") {
    return "%";
  }

  // On pourrait aussi écrire:
  // const symboles = {
  //  SUM: "+",
  //  SUB: "-",
  //  MULT: "x",
  //  DIV: "/",
  //  MODULO: "%",
  // };
  // return symboles[operation];
}

/**
 * Cette fonction fais le bon calcul en fonction de l'opération
 */
function faisCalcul(operation, nombre1, nombre2) {
  if (operation === "SUM") {
    return nombre1 + nombre2;
  } else if (operation === "SUB") {
    return nombre1 - nombre2;
  } else if (operation === "MULT") {
    return nombre1 * nombre2;
  } else if (operation === "DIV") {
    return nombre1 / nombre2;
  } else if (operation === "MODULO") {
    return nombre1 % nombre2;
  }
}

// On itère sur tous les boutons de type pour lesquels on veut calculer un résultat
const buttons = document.querySelectorAll(".boutonCalcul");

for (const button of buttons) {
  // On leur ajoute un écouteur d'événement
  button.addEventListener("click", function (event) {
    // On récupère les données rentrées par l'utilisateur
    const nombre1 = recupereEntree("#nombre1");
    const nombre2 = recupereEntree("#nombre2");

    // On récupère l'opération (c'est la value de l'input de type button)
    const operation = event.target.value;
    const result = faisCalcul(operation, nombre1, nombre2);

    // On ajoute le résultat dans le div opération
    const resultat = document.querySelector("#resultat");
    resultat.textContent = result;

    // On affiche l'opération dans la liste
    const symbole = recupereSymboleOperation(operation);
    const calcul = `${nombre1} ${symbole} ${nombre2} = ${result}`;
    afficherCalculDansHistorique(calcul);
  });
}
