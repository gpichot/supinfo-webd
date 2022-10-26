function listeElements(element, indentation) {
  const children = element.children;
  console.log(`${indentation}Element: `, element.tagName);
  if (children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      listeElements(children[i], indentation + "  ");
    }
  } else {
    console.log(
      `${indentation}Pas d'enfant mais du texte: `,
      element.textContent
    );
  }
  console.log(`${indentation}Fin de l'élément: `, element.tagName);
}

// Pour l'instant on a vu qu'on devait absolument placer le script en fin de
// page pour que le DOM soit chargé et qu'on puisse accèder aux éléments et
// les manipuler.
//
// Mais il existe une autre solution : on peut attendre que le DOM soit chargé
// pour exécuter notre code. Pour cela on utilise l'événement `DOMContentLoaded`
// qui est déclenché quand le DOM est chargé.
//
// On pourrait aussi utiliser l'événement `load` qui est déclenché quand la page
// est chargée (images, styles, scripts, etc.) en plus du DOM.
//
// !! Notez bien cette fois-ci qu'on a placé le script dans le head et qu'il
// n'y a pas de problème.
window.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector("section");

  listeElements(section, "");
});
