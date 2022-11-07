class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  hello() {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old.`
    );
  }

  greetsInHTML() {
    const greetings = `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old.`;
    const greetingsElement = document.querySelector("#greetings");
    greetingsElement.innerHTML = "";
    greetingsElement.appendChild(document.createTextNode(greetings));
  }
}

class Administrator extends User {
  permissions = ["can_remove_user"];

  constructor(firstName, lastName, age, permissions) {
    super(firstName, lastName, age);
    this.permissions = permissions;
  }

  hello() {
    console.log(`I am a super administrator and my name is ${this.firstName}`);
  }
}

const user = new Administrator("Gabriel", "Pichot", 30, []);
const john = new User("John", "Snow", 30);
const bilbo = new User("Bilbo", "Le Hobbit", 30);

console.log(typeof user);
console.log(user, john, bilbo);

const button = document.querySelector("#btn");

button.addEventListener("click", function () {
  user.greetsInHTML();
});

class Car {
  constructor(marque, modele, typeEssence, nbChevaux) {
    this.marque = marque;
    this.modele = modele;
    this.typeEssence = typeEssence;
    this.nbChevaux = nbChevaux;
  }

  roule() {
    console.log(`Hello je suis une ${this.modele}`);
    if (this.nbChevaux <= 100) {
      console.log("Je ne vais pas rouler très vite");
    } else {
      console.log("Je vais aller beaucoup plus vite.");
    }
  }
}

const twingoDeFarha = new Car("Renault", "Twingo", "diesel", 75);
const rs3 = new Car("Audi", "RS3", "essence", 400);

const cars = [twingoDeFarha, rs3];

button.addEventListener("click", function () {
  const text = document.createTextNode(`${twingoDeFarha.marque}`);
  document.querySelector("#parent").appendChild(text);
});
