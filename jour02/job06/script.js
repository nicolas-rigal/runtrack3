// Définition de la fonction Konami
function konami() {
    var code = [];
    var konamiCode = [38,38,40,40,37,39,37,39,66,65]; 
    // Code Konami : haut,haut ,bas,bas ,gauche,droite,gauche,droite,b,a
    //keycodes are:
    //left = 37
    //up = 38
    //right = 39
    //down = 40
    
    // Fonction de vérification du code Konami
    function checkCode() {
      if (code.toString() === konamiCode.toString()) {
        // Code Konami correct, changer le CSS ici
        document.body.style.backgroundColor = 'blue';
      }
      // Réinitialiser le code après chaque tentative
      code = [];
    }
    
    // Écouteur d'événement pour détecter les touches pressées
    document.addEventListener('keydown', function(event) {
      // Ajouter la touche pressée au tableau du code
      code.push(event.keyCode);
      
      // Vérifier si le code Konami a été entré
      if (code.length === konamiCode.length) {
        console.log("konami code entered"),
        checkCode();

      }
    });
  }
  
  // Appeler la fonction Konami
  konami();