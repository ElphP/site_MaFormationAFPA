"use strict"

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