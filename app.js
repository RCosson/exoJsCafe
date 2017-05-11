console.log("Bienvenue!");
function cafe() {
var court = 1;
var long = 2;
var lait = 3;
var choix = prompt("Court, long ou au lait ?");
var piece = prompt("Insérez une pièce:");
  if (choix == "court") {
    alert("Préparation café court");
    if (piece > court) {
      var rendu = piece - court;
      alert("Voici votre monnaie :" + rendu +"€");
    }
  }
  else if (choix == "long") {
    alert("Préparation café long");
    if (piece > long) {
      var rendu = piece - long;
      alert("Voici votre monnaie :" + rendu +"€");
    }
  }
  else if (choix == "lait") {
    alert("Préparation café au lait");
    if (piece > lait) {
      var rendu = piece - lait;
      alert("Voici votre monnaie :" + rendu +"€");
    }
  }
  else {
    alert("Insérez le montant exact");
  }
}
var gobelets = 11;
for (var i = 0; i < 11; i++) {
  console.log("Gobelets restants:", gobelets);
  gobelets --;
  cafe();
}
console.log("Plus de gobelets, machine hors service.");
/*var pieceValide = [0.1, 0.2, 0.5, 1, 2];
var credit = [];
credit.push(piece);
var rendu = piece - court;
var somme = 0;*/
