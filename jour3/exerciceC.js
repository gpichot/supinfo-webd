/**
 * Lance n děs à 6 faces et retourne les lancers.
 */
function lanceDes(nombreDeDes) {
  const lancers = [];
  for (let i = 0; i < nombreDeDes; i++) {
    lancers.push(Math.floor(Math.random() * 6) + 1);
  }
  return lancers;
}

console.log("Lancer de 10 dès", lanceDes(10).join(", "));

function sommeLancerDes(nombreDeDes) {
  const lancer = lanceDes(nombreDeDes);

  let somme = 0;
  for (let i = 0; i < lancer.length; i++) {
    somme += lancer[i];
  }

  return somme;
}

console.log("Somme de 10 dès", sommeLancerDes(10));
