// Récupération de l'élément textarea avec l'ID "keylogger"
var textarea = document.getElementById("keylogger");

// Ajout d'un écouteur d'événement "keydown" au niveau du document
document.addEventListener("keydown", function(event) {
  // Récupération de la touche enfoncée, convertie en minuscules
  var key = event.key.toLowerCase();

  // Vérification si la touche correspond à une lettre de l'alphabet (a-z)
  if (key.match(/[a-z]/)) {
    // Vérification si le focus est actuellement sur le textarea
    if (document.activeElement === textarea) {
      // Ajout de la lettre deux fois dans la valeur du textarea
      textarea.value += key;
    } else {
      // Ajout de la lettre une seule fois dans la valeur du textarea
      textarea.value += key;
    }
  }
});
