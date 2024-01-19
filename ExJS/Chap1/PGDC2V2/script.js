let repBoucle = "";
let A= 0;
let B= 0;
alert(
  "Ce programme va vous aider à trouver le Plus Grand Diviseur Commun de 2 nombres A et B. "
);
do {
  A = entree("A");
  B = entree("B");
// entrée des nombre + calcul
  alert(
    `Après calcul, l\'ordinateur peut vous dire que le Plus Grand Diviseur Commun (PGCD) des nombres ${A} et ${B} est ${euclide(A,B)}. `
  );
   
  do {
    repBoucle = prompt('Voulez-vous rechercher un nouveau PGDC? "O" ou "N"');
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

//function calcul

function euclide(a, b)  {
  if (b === 0) return a;
  else return euclide(b, a%b)
}
   