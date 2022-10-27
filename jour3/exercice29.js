const p = document.querySelectorAll("p");

const p1 = p[0];
const p2 = p[1];
const p3 = p[2];
const p4 = p[3];
const p5 = p[4];
const p6 = p[5];

p2.insertAdjacentElement("afterend", p1);

p2.insertAdjacentElement("beforebegin", p4);

p6.insertAdjacentElement("afterbegin", p5);
