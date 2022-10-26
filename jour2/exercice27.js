const liens = document.querySelectorAll("a");

// On ajouter le comportement sur chaque lien
liens.forEach(function (elementLien) {
  // On ajoute un écouteur d'événement
  elementLien.addEventListener("click", function (event) {
    // On supprime la classe actif pour tous les liens (reset)
    liens.forEach(function (autreLien) {
      autreLien.classList.remove("actif");
    });

    // On recupère le lien actuel et on active la classe
    const lien = event.currentTarget;
    lien.classList.add("actif");
  });
});
