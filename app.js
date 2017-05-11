console.log("Bienvenue!");
function cafe() {
  var court = 1;
  var long = 2;
  var lait = 3;
  var cafes = ["court", "long", "lait"];
  for (var i = 0; i < 10; i++) {
    var choix = prompt("Court(1€) / long(2€) / au lait(3€) ?");
    if (cafes.indexOf(choix) < 0) {
      alert("Produit demandé non disponible / inexistant");
    }
    else {
      if (choix == "court") {
        console.log("Café court demandé, veuillez insérer 1€");
      }else if (choix == "long"){
        console.log("Café long demandé, veuillez insérer 2€");
      }else if (choix == "lait"){
        console.log("Café au lait demandé, veuillez insérer 3€");
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
      var piece2 = parseInt(piece);
      stock.push(piece2);
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
      alert("Pièce refusée.");
    }
  }
  if (choix == "court") {
    alert("Préparation café court");
    if (somme > court) {
      var rendu = somme - court;
      alert("Voici votre monnaie :" + rendu +"€");
    }
  }
  else if (choix == "long") {
    alert("Préparation café long");
    if (somme > long) {
      var rendu = somme - long;
      alert("Voici votre monnaie :" + rendu +"€");
    }
  }
  else if (choix == "lait") {
    alert("Préparation café au lait");
    if (somme > lait) {
      var rendu = somme - lait;
      alert("Voici votre monnaie :" + rendu +"€");
    }
  }
}

var gobelets = 11;
for (var i = 0; i < 11; i++) {
  console.log("Gobelets restants:", gobelets);
  gobelets --;
  cafe();
}

alert("Plus de gobelets, machine hors service.");
console.log("Plus de gobelets, machine hors service.");
