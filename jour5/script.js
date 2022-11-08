/*class Car {
  constructor(marque, modele) {
    this.marque = marque;
    this.modele = modele;
    this.carburant = 10;
  }

  faireLePlein() {
    this.carburant = 40;
  }

  recupererAutonomie() {
    return (this.carburant / 5) * 100;
  }

  afficherInfos() {
    console.log(`${this.modele} ${this.marque}`);
  }
}

const tdf = new Car("Renault", "Twingo");
const rs3 = new Car("Audi", "RS3");

tdf.afficherInfos();
rs3.afficherInfos();
console.log("TdF", tdf.modele);
console.log("RS3", rs3.modele);

tdf.faireLePlein();

console.log(tdf.carburant);
console.log(`autonomie tdf ${tdf.recupererAutonomie()}km`);

console.log(`autonomie rs3 ${rs3.recupererAutonomie()}km`);
*/

class Personnage {
  constructor(nom, type, force, vitalite) {
    this.nom = nom;
    this.type = type;
    this.force = force;
    this.vitalite = vitalite;

    this.vitaliteInitiale = vitalite;
  }

  afficherVitalite() {
    if (this.estMort()) {
      console.log(`${this.nom} est mort`);
    } else {
      console.log(`${this.nom} a ${this.vitalite} points de vie`);
    }
  }

  recoitDegats(degats) {
    this.vitalite -= degats;
  }

  attaque(autrePersonnage) {
    if (this.estMort()) {
      console.log(`${this.nom} ne peut plus jouer car mort`);
      return;
    }
    const estCoupCritique = Math.floor(Math.random() * 4) === 0;
    const multiplicateur = estCoupCritique ? 4 : 1;
    const degats = this.force * multiplicateur;
    if (estCoupCritique) {
      console.log(`!!!! Coup critique`);
    }
    autrePersonnage.recoitDegats(degats);
    if (this.type === "jedi") {
      console.log(
        `${this.nom} balance un coup de sabre laser à ${autrePersonnage.nom} qui perd ${degats} points de vie`
      );
    } else if (this.type === "magicien") {
      console.log(
        `${this.nom} donne un coup de bâton à ${autrePersonnage.nom} qui perd ${degats} points de vie`
      );
    }
  }

  regenerer() {
    this.vitalite = this.vitaliteInitiale;
  }

  estMort() {
    return this.vitalite <= 0;
  }
}

const magicien = new Personnage("Gandalf", "magicien", 5, 100);
const guerrier = new Personnage("Vador", "jedi", 15, 100);

console.log(magicien, guerrier);

function lancerCombat(guerrier1, guerrier2) {
  guerrier1.afficherVitalite();
  guerrier2.afficherVitalite();

  while (!guerrier1.estMort() && !guerrier2.estMort()) {
    guerrier1.attaque(guerrier2);
    guerrier2.afficherVitalite();
    guerrier2.attaque(guerrier1);
    guerrier1.afficherVitalite();
  }

  return guerrier1.estMort() ? guerrier2 : guerrier1;
}

lancerCombat(guerrier, magicien);

const entierAleatoire = (n) => Math.floor(Math.random() * n);
const names = [
  "Gandalf",
  "Vador",
  "Obiwan",
  "Darth Maul",
  "Luke Skywalker",
  "Bilbo",
  "Aragorn",
  "Gimli",
  "Galadriel",
  "Pikachu",
  "Raichu",
  "Miaous",
];

function creerPersonnages(n) {
  const personnages = [];
  for (let i = 0; i < n; i++) {
    const nom = names[entierAleatoire(names.length)];
    const type = entierAleatoire(2) === 0 ? "magicien" : "jedi";
    const force = entierAleatoire(20);
    const vitalite = entierAleatoire(120);
    const personnage = new Personnage(nom, type, force, vitalite);
    personnages.push(personnage);
  }

  console.log("nombre de personnages", personnages.length);
  return personnages;
}

function recupereMeilleurPersonnage(personnages) {
  return personnages.reduce((meilleurPersonnage, personnage) => {
    meilleurPersonnage.regenerer();
    personnage.regenerer();
    return lancerCombat(meilleurPersonnage, personnage);
  });
}

const personnages = creerPersonnages(100);
console.log(personnages);

const meilleurPersonnage = recupereMeilleurPersonnage(personnages);

console.log("meilleur personnage", meilleurPersonnage);
