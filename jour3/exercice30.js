const div = document.createElement("div");
div.classList.add("main");

div.style.backgroundColor = "purple";
div.style.padding = "1rem";

const body = document.querySelector("body");
body.appendChild(div);

/* 
<ul class="liste">
    <li><a href="lien1.php" class="lien">page 1</a></li>
    <li><a href="lien2.php" class="lien">page 2</a></li>
  </ul>
  */

const ul = document.createElement("ul");
ul.setAttribute("class", "liste");

div.appendChild(ul);

// Premier lien
function creerLien(href, text) {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.setAttribute("href", href);
  a.classList.add("lien");
  a.appendChild(document.createTextNode(text));

  li.appendChild(a);

  li.style.padding = "1rem 2rem";
  li.style.listStyle = "none";

  return li;
}

const li1 = creerLien("lien1.php", "page 1");
ul.appendChild(li1);

const li2 = creerLien("lien2.php", "page 2");
ul.appendChild(li2);

ul.style.fontSize = "2rem";
ul.style.backgroundColor = "lightblue";
ul.style.padding = "1rem";
