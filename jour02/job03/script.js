var count = 0;
function addone() {
  count++;
  var compteur = document.getElementById("compteur");
  compteur.textContent = count;
}
document.getElementById("button").addEventListener("click", addone);