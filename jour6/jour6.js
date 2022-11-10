async function recuperePokemon(pokemonId) {
  const response = await fetch(
    `https://pokeapi.fly.dev/gpichot/pokemons/${pokemonId}`
  );
  const json = await response.json();
  return json;
}
function afficherPokemon(pokemon) {
  const image = document.createElement("img");
  image.setAttribute("src", pokemon.image);

  const container = document.createElement("div");
  container.style.margin = "1rem";
  container.appendChild(image);

  // Pokemon Name
  const nameElement = document.createElement("h2");
  nameElement.appendChild(document.createTextNode(pokemon.name));
  container.appendChild(nameElement);

  document.querySelector("#listPokemons").innerHTML = "";
  document.querySelector("#listPokemons").appendChild(container);
}

const button = document.querySelector("#chargePokemon");
const inputPokemonId = document.querySelector("#pokemonId");

button.addEventListener("click", () => {
  const pokemonId = inputPokemonId.value;

  document.querySelector("#listPokemons").innerHTML = "Loading...";

  recuperePokemon(pokemonId).then(afficherPokemon);
});

const expiration = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
//document.cookie = `darkmode=true; path=/; expires=${expiration.toUTCString()}`;

const cookie = document.cookie;
const cookieValues = cookie.split(";").map((cookieValue) => {
  const bits = cookieValue.split("=");
  return {
    name: bits[0].trim(),
    value: bits[1].trim(),
  };
});

const cookieDarkmode = cookieValues.find(
  (cookieValue) => cookieValue.name === "darkmode"
);
console.log(document.cookie, cookieDarkmode.value);

localStorage.setItem(
  "darkmode",
  JSON.stringify({
    isActive: true,
  })
);

console.log("darkmode setting", JSON.parse(localStorage.getItem("darkmode")));

//localStorage.removeItem("darkmode");

const user = {
  firstName: "John",
  lastName: "Nom",
  age: 34,
  superPowers: ["canFly", "canTeleport"],
};

console.log(user, JSON.stringify(user));

fetch("https://pokeapi.fly.dev/gpichot32/pokemons/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Yuri4",
    type: "electric",
    height: 40,
    weight: 42,
  }),
});
