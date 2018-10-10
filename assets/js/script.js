function hide(){
  document.getElementById('text').style.display = 'none'; //Masque la div donc le texte qui est dedans
}
function display(){
  document.getElementById('text').style.display = 'block';
}

//Autre solution

function hideDisplay(){
  var etat = document.getElementById('text2').style.display; // Vérifie l'état de l'affichage
  if (etat == 'none') { // Si non affiché alors on l'affiche
    document.getElementById('text2').style.display = 'block';
  } else {
    document.getElementById('text2').style.display = 'none'; // ou inversement
  }
}
