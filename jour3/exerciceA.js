function factorielleRecursive(n) {
  if (n === 0) return 1;
  return n * factorielleRecursive(n - 1);
}

function factorielleIterative(n) {
  if (n < 0) return console.error(`Valeur non valide pour n : ${n}`);
  let resultat = 1;

  for (let i = 1; i <= n; i += 1) {
    resultat *= i;
  }

  return resultat;
}
const entiers = [0, 1, 2, 3, 4, 5];

function mapTableau(tableau, fn) {
  const resultat = new Array(tableau.length);

  for (let i = 0; i < tableau.length; i += 1) {
    resultat[i] = fn(tableau[i]);
  }
  return resultat;
}

console.log(entiers, entiers.map(factorielleRecursive));
console.log(entiers, entiers.map(factorielleIterative));

function randomInt(end) {
  return Math.floor(Math.random() * (end + 1));
}
function generatePassword(n) {
  let str = "";
  let letters = "abcdefghijklmnopqrstuvwxyz0123456789#$%&@";

  for (let i = 0; i < n; ++i) {
    str += letters[randomInt(letters.length - 1)];
  }

  return str;
}

console.log(generatePassword(10));
console.log(generatePassword(10));
console.log(generatePassword(10));
console.log(generatePassword(10));
console.log(generatePassword(10));
console.log(generatePassword(10));
