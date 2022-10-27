const fruits = ["pomme", "poire", "fraise", "framboise", "abricot", "figue"];

function afficherFruit(fruit) {
  console.log(`J'ai mangé un.e ${fruit}`);
}

afficherFruit(fruits[0]);

// fruits.forEach();

console.log("Version itérative");

for (let i = 0; i < fruits.length; i += 2) {
  afficherFruit(fruits[i]);
}

console.log("Version fonctionelle");

fruits.forEach(afficherFruit);

console.log("for const ... of");

function premierElementCommencantParLettre(fruits, lettre) {
  for (const fruit of fruits) {
    const premiereLettre = fruit[0];

    const premierCaractereEstF = premiereLettre === lettre;

    if (premierCaractereEstF) {
      return fruit;
    }
  }
  return console.log("pas trouvé");
}

console.log(
  "Premier élément commençant par a :",
  premierElementCommencantParLettre(fruits, "a")
);
console.log(
  "Premier élément commençant par f :",
  premierElementCommencantParLettre(fruits, "f")
);

console.log(
  "Premier élément commençant par z :",
  premierElementCommencantParLettre(fruits, "z")
);

console.clear();

function countDown(n) {
  console.log("start", n);
  if (n > 0) {
    countDown(n - 1);
  }
  console.log("end", n);
}

countDown(4);
