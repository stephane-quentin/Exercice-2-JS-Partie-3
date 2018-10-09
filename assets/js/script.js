function masque(){
  document.getElementById('text').style.display = 'none'; //Masque la div donc le texte qui est dedans
}
function affiche(){
  document.getElementById('text').style.display = 'block';
}

function affichemasque(){
  var etat = document.getElementById('text2').style.display; // Vérifie l'état de l'affichage
  if (etat == 'block') { // Si affiché alors on le masque
    document.getElementById('text2').style.display = 'none';
  } else {
    document.getElementById('text2').style.display = 'block'; // ou inversement
  }
}
