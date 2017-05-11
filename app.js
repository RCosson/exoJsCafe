//message d'accueil
console.log("Bienvenue!");
//initialisation de la fonction permettant la commande et la production d'un café
function cafe() {
  //déclaration des différents cafés
  var court = 1;
  var long = 1.2;
  var lait = 1.5;
  var cafes = ["court", "long", "lait"];
  //boucle de sélection d'un café s'il existe
  for (var i = 0; i < 10; i++) {
    var choix = prompt("Court(1€) / long(1.2€) / au lait(1.5€) ?").toLowerCase();
    if (cafes.indexOf(choix) < 0) {
      alert("Produit demandé non disponible / inexistant");
    }
    else {
      //consignes de paiment
      if (choix == "court") {
        console.log("Café court demandé, veuillez insérer 1€");
      }else if (choix == "long"){
        console.log("Café long demandé, veuillez insérer 1.2€");
      }else if (choix == "lait"){
        console.log("Café au lait demandé, veuillez insérer 1.5€");
      }
      break;
    }
  }
  var bonnesPieces = ["0.1", "0.2", "0.5", "1", "2"];
  var stock = [];
  var somme = 0;
  for (var i = 0; i < 20; i++) {
    var piece = prompt('Veuillez insérer vos pièces:');
    if (bonnesPieces.indexOf(piece) >= 0) {
      var piece2 = parseInt(piece).toFixed(2);
      stock.push(piece2);
      console.log("*cling*");
    }else if(piece == "") {
      somme = stock.reduce((total, amount) => total + amount);
      if (choix == "court") {
        if (somme < 1 ) {
          alert("Somme insuffisante, reprenez vos pièces et recommencez.");
          cafe();
        }
        else {
          break;
        }
      }
      if (choix == "long") {
        if (somme < 2 ) {
          alert("Somme insuffisante, reprenez vos pièces et recommencez.");
          cafe();
        }
        else {
          break;
        }
      }
      if (choix == "lait") {
        if (somme < 3 ) {
          alert("Somme insuffisante, reprenez vos pièces et recommencez.");
          cafe();
        }
        else {
          break;
        }
      }
    }else{
      alert("Pièce refusée, seules acceptées: 0.1, 0.2, 0.5, 1 et 2(€).");
    }
  }
  if (choix == "court") {
    alert("Préparation café court");
    if (somme > court) {
      var rendu = somme - court;
      alert("Voici votre monnaie : " + rendu +"€");
    }
  }
  else if (choix == "long") {
    alert("Préparation café long");
    if (somme > long) {
      var rendu = somme - long;
      alert("Voici votre monnaie : " + rendu +"€");
    }
  }
  else if (choix == "lait") {
    alert("Préparation café au lait");
    if (somme > lait) {
      var rendu = somme - lait;
      alert("Voici votre monnaie : " + rendu +"€");
    }
  }
  alert("Voici votre café, passez une bonne journée!");
}

var gobelets = 11;
for (var i = 0; i < 11; i++) {
  console.log("Gobelets restants:", gobelets);
  gobelets --;
  cafe();
}

alert("Plus de gobelets, machine hors service.");
console.log("Plus de gobelets, machine hors service.");
