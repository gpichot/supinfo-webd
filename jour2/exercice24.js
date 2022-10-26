// Au passage de la souris le paragraphe  change de couleur

// On récupère le bloc contenant les mots
const blocMots = document.querySelector("#paragraph");

// On ajoute un écouteur d'événement quand la souris passe sur le bloc
blocMots.addEventListener("mouseenter", function () {
  // On change la couleur du texte
  blocMots.style.color = "red";
});

// On ajoute un écouteur d'événement quand on sort de la zone du bloc
blocMots.addEventListener("mouseleave", function () {
  // On change la couleur du texte
  blocMots.style.color = "black";
});

// L'énoncé de l'exercice attendait la solution ci-dessus 🔝

// Si on veut effectuer le changement de couleur mot par mot c'est plus
// compliqué, parce qu'il faut que chaque mot soit dans un span : on ne peut
// pas attribuer un style spécifique à un mot dans un paragraphe.
//
// On va parcourir tous les mots et ajouter des spans autour de chaque mot.

// On récupère le bloc contenant les mots
const blockMots2 = document.querySelector("#words");

// On récupère tous les mots et on créé un tableau des mots
// On utilise la méthode split() pour séparer les mots dans un tableau
// On pourrait aussi utiliser .split(/(\s+)/) mais on a pas encore vu les
// RegExp (expressions régulières)
const mots = blockMots2.textContent.split(" ");

// On créé un tableau avec map pour mettre chaque mot dans une balise span
const motsAvecSpan = mots.map(function (mot) {
  // On créé un span
  const motSpan = document.createElement("span");
  // On ajoute le mot dans le span
  motSpan.appendChild(document.createTextNode(mot));
  // On retourne le span
  return motSpan;
});
// => [<span>Lorem</span>, <span>Ipsum</span>, ...]

// On vide le bloc (on pourrait aussi remove le child mais là c'est plus
// pratique
blockMots2.innerHTML = "";

// On veut rajouter tous les mots dans le block donc on itère sur le tableau
for (const mot of motsAvecSpan) {
  //  On ajoute le mot dans le bloc
  blockMots2.appendChild(mot);

  // On ajoute un écouteur d'événement quand la souris passe sur le mot
  mot.addEventListener("mouseenter", function () {
    // On change la couleur du texte
    mot.style.color = "red";
  });

  // On ajoute un écouteur d'événement quand on sort du mot
  mot.addEventListener("mouseleave", function () {
    // On change la couleur du texte
    mot.style.color = "black";
  });

  // On ajoute un espace entre chaque mot (celui qu'on a enlevé avec split)
  if (mot !== motsAvecSpan[motsAvecSpan.length - 1]) {
    blockMots2.appendChild(document.createTextNode(" "));
  }
}
