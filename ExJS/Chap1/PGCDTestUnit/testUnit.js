

"use scrict";
let repBoucle = "";
let A= 0;
let B= 0;
let expected = 0;
alert(
  "Page de tests unitaires "
);
do {
  A = entree("A");
  B = entree("B");
  expected= entree("\"Résultat attendu\"");
// entrée des nombre + calcul
  alert(
    `Le Test Unitaire du PGCD des nombres ${A} et ${B} ayant pour résultat ${expected} est : ${euclide(A,B)=== expected}. `
  );
   
  do {
    repBoucle = prompt('Voulez-vous faire un autre test? "O" ou "N"');
    if (repBoucle !== "O" && repBoucle !== "N") {
      alert('La réponse doit être "O" ou "N" exclusivement!!');
    }
  } while (repBoucle !== "O" && repBoucle !== "N");
} while (repBoucle !== "N");

//function de saisie des nombres
function entree(lettre) {
    
    let nbr=0;
    do {
    nbr = Number(prompt(`Quel est votre nombre ${lettre}?`));

    if (!Number.isInteger(nbr) || nbr===0) {
      alert("Votre nombre doit être un nombre...et un nombre entier différent de 0!!");
    }
  } while (!Number.isInteger(nbr) || nbr===0);

  return nbr;
}