const h1 = document.querySelector("h1");
console.log("titre: ", h1.textContent);

const paragraphes = document.querySelectorAll("p");
paragraphes.forEach(function (paragraphe) {
  console.log(paragraphe.textContent);
});

const puces = document.querySelectorAll("ul .item");
puces.forEach(function (puce) {
  console.log(puce.textContent);
});

const p = document.querySelector("#paragraph");
console.log(p.textContent);

console.log("Premiers elements");
const elements = document.querySelectorAll(
  "main :first-child, ul :first-child"
);

elements.forEach(function (element) {
  console.log(element.textContent);
});
