const heures = document.querySelector("#heures");
const minutes = document.querySelector("#minutes");
const secondes = document.querySelector("#secondes");
const millisecondes = document.querySelector("#millisecondes");

setInterval(function () {
  const maintenant = new Date();

  heures.textContent = String(maintenant.getHours()).padStart(2, "0");
  minutes.textContent = String(maintenant.getMinutes()).padStart(2, "0");
  secondes.textContent = String(maintenant.getSeconds()).padStart(2, "0");
  millisecondes.textContent = String(maintenant.getMilliseconds()).padStart(
    3,
    "0"
  );
}, 100);
