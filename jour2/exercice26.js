// On itère sur tous les paragraphes
document.querySelectorAll("p").forEach(function (p) {
  // On récupère l'attribut `name` de la balise
  const name = p.getAttribute("name");

  // On récupère le texte sans formattage
  const texteSansFormatage = p.innerText;

  // On loggue le nom et le texte du paragraphe
  // en utilisant un tableau associatif
  console.log({
    name: name,
    texte: texteSansFormatage,
  });
});
