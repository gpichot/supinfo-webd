console.log("----- Exercice 1 ------");

const hello = "Hello world";
const a = 7;
const b = 19;
console.log(hello);
console.log("soustraction", a - b);

console.log("----- Exercice 2 ------");
let age = 18; // prompt("Quel âge avez-vous ?");
console.log(age);

console.log("----- Exercice 3 ------");

const tableau = [1, 2, 3, 4];

// Solution 1
let somme = 0;
for (let i = 0; i < tableau.length; i += 1) {
  somme += tableau[i];
}

// Solution 2
tableau.forEach(function (x) {
  somme += x;
});

// Solution 3
const sommeFinale = tableau.reduce((sommePartielle, n) => sommePartielle + n);

console.log(somme);

console.log("----- Exercice 4 ------");
// x vaut 5
let x = 4;
x++;
x -= 1;
console.log("x", x);

console.log("----- Exercice 5 ------");
// y vaut 0
let y = 4;
y = y ** 3;
y %= 2;
console.log("y", y);

console.log("----- Exercice 6 ------");
// x vaut "101" (chaîne de caractères et pas nombre!)
let z = 10;
z += 1;
console.log("z", z);

console.log("----- Exercice 7 ------");

if (typeof age !== "number") {
  console.log("You should enter a valid age.");
}
if (age < 18) {
  console.log("La personne est mineure.");
}

console.log("----- Exercice 8 ------");

let ageExo8 = 35;
const estOK =
  (ageExo8 >= 20 && ageExo8 <= 30) || (ageExo8 >= 40 && ageExo8 <= 50);

if (estOK) {
  console.log("OK");
} else {
  console.log("KO");
}

console.log("---- Exercice 9 ---");

/*
let estMort = false;
while (!estMort) { */
let action = "courir"; //prompt("Que faites-vous ?");
if (action === "courir") {
  console.log("Vous courez");
} else if (action === "voler") {
  console.log("Vous volez dans le ciel, vers l'infini au-delà");
} else if (action === "marcher") {
  console.log("Vous êtes fatigués, vous marchez");
} else if (action === "frapper") {
  console.log("Vous frappez");
} else if (action === "mourir") {
  console.log("Vous mourez dans d'atroces souffrances");
  // estMort = true;
} else {
  console.error("Cette action n'est pas gérée");
}
/*
}
*/

console.log("---- Exercice 10 ---");

let u = 2.1;

// u % 2 ? alert("impair") : alert("pair");

//u > 2 && u ** 2 < 5 ? alert("1ere tranche") : undefined;

console.log("---- Exercice 11 ---");

// On veut convertir le résultat d'une string en base 10 vers un nombre
let n2 = Number.parseInt("10", 10);
n2 += 1;

console.log("---- Exercice 12 ---");

// On pourrait créer l'alphabet avec ["a", "b",...] mais on est flemmard...
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// Solution 1
for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i].toUpperCase());
}

// Solution 2
alphabet.forEach(function (letter) {
  console.log(letter.toUpperCase());
});

console.log("---- Exercice 13 ---");

// Solution 1
for (let n = 10; n >= 0; n--) {
  console.log(n);
}

// Solution 2
let n = 10;
while (n >= 0) {
  console.log(n);
  n--;
}

console.log("---- Exercice 14 ---");

const prenom = "Gabriel";

let sommePrenom = 0;
for (let i = 0; i < prenom.length; ++i) {
  sommePrenom += prenom.charCodeAt(i);
}
console.log("somme prenom:", sommePrenom);

console.log("---- Exercice 15 ----");

let fiboValues = [0, 1];
while (fiboValues.length < 8) {
  let n = fiboValues.length;
  let fibo1 = fiboValues[n - 1];
  let fibo2 = fiboValues[n - 2];
  fiboValues.push(fibo1 + fibo2);
}
console.log(fiboValues[7], { fiboValues });

console.log("---- Exercice 16 -----");

// Solution 1
let sommeAlphabet = 0;
let alphabetIndex = 0;
while (sommeAlphabet < 800) {
  sommeAlphabet += alphabet[alphabetIndex].charCodeAt(0);
  alphabetIndex++;
}
// On oublie pas le "-1" pour récupérer la bonne lettre, comme on a incrémenter une fois en trop deux lignes au-dessus
console.log("Somme: ", sommeAlphabet, "lettre: ", alphabet[alphabetIndex - 1]);

// Solution 2

let sommeAlphabet2 = 0;
for (let i = 0; i < alphabet.length; ++i) {
  sommeAlphabet2 += alphabet[i].charCodeAt(0);
  if (sommeAlphabet2 >= 800) {
    console.log("Somme: ", sommeAlphabet2, "lettre: ", alphabet[i]);
    break;
  }
}

console.log("---- Exercice 17 ----");

// Solution 1
let sommeAlphabetInf = 0;
let alphabetIndexInf = 0;
while (sommeAlphabetInf < 800) {
  sommeAlphabetInf += alphabet[alphabetIndexInf].charCodeAt(0);
  alphabetIndexInf++;
}
// console.log(alphabet.map((x) => x.charCodeAt(0)));
const lettreAvant = alphabet[alphabetIndexInf - 2];
const codeLettreEnTrop = alphabet[alphabetIndexInf - 1].charCodeAt(0);
console.log(
  "Somme: ",
  sommeAlphabetInf - codeLettreEnTrop,
  "lettre: ",
  lettreAvant
);

console.log("--- Exercice 18 ---");

// Solution 1

const tableau18 = [1, 2, 3, -2, 4, 5, 6, -2];
const nouveauTableau = [];
let sommePositifs = 0;
for (let i = 0; i < tableau18.length; i++) {
  const n = tableau18[i];
  if (n >= 0) {
    nouveauTableau.push(n);
    sommePositifs += n;
  }
}
console.log(
  "tableau: ",
  nouveauTableau,
  "moyenne: ",
  sommePositifs / nouveauTableau.length
);

// Solution 2
const nouveauTableau2 = tableau18.filter(function (x) {
  return x >= 0;
});
const sommeTableau2 = nouveauTableau2.reduce(
  (sommePartielle, x) => sommePartielle + x
);
console.log(
  "tableau: ",
  nouveauTableau2,
  "moyenne: ",
  sommeTableau2 / nouveauTableau2.length
);

console.log("---- Exercise 19 ----- ");

// Solution 1
const tableau19 = [4, 2, 3, 6, 7, 8, 9];
// Sort trie les élements in-place
tableau19.sort();
for (let i = 0; i < 10; ++i) {
  if (tableau19[i] !== i) {
    tableau19.splice(i, 0, i);
  }
}
console.log("tableau19:", tableau19);

// Solution 2: on rajoute les éléments manquans et on trie
const tableau192 = [4, 2, 3, 6, 7, 8, 9];
for (let i = 0; i < 10; i++) {
  if (!tableau192.includes(i)) {
    tableau192.push(i);
  }
}
tableau192.sort();
console.log("tableau 192:", tableau192);

console.log("---- Exercice 20 ----");




