function activeSpoilerBloc(element) {
  const titre = element.querySelector(".spoiler-titre");
  const contenu = element.querySelector(".spoiler-contenu");
  titre.style.cursor = "pointer";

  contenu.style.display = "none";

  const toggle = function () {
    contenu.style.display = contenu.style.display === "none" ? "block" : "none";
  };

  titre.addEventListener("click", toggle);
}

const spoilers = document.querySelectorAll(".spoiler-bloc");

spoilers.forEach(activeSpoilerBloc);
