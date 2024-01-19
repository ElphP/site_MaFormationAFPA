"use strict ";
let tab = []; //Variable globale Tableau
let tabTrie = []; //Variable globale Tableau trié

function affichTab(tableau, id, text) {
    let place = document.getElementById(id);

    for (let i = 0; i < tableau.length; i++) {
        text += `${tableau[i]} `;
    }
    place.innerHTML = text;
}

// Créer le tableau défini par l'utilisateur et l'affiche.
function random() {
    let nbrDeValeurs = parseInt(
        prompt("Combien avez-vous de nombres à trier?")
    );
    let max = parseInt(prompt("Valeur maximale de vos nombres aléatoires?"));
    for (let i = 0; i < nbrDeValeurs - 1; i++) {
        tab[i] = Math.floor(Math.random() * max);
    }
    affichTab(tab, "tabRand", "Le tableau aléatoire non classé contient : ");
}

function classer() {
    if (bulle.checked) {
        affichTab(
            triBulle(tab.slice()),
            "result",
            'Valeurs classées avec le tri par Bulle : '
        );
    } else if (select.checked) {
        affichTab(
            triSelection(tab.slice()),
            "result",
            'Valeurs classées avec le tri Sélection : '
        );
    } else if (insert.checked) {
        affichTab(
            triInsert(tab.slice()),
            "result",
            "Valeurs classées avec le tri par Insertion : "
        );
    } else if (pos.checked) {
        affichTab(
            triPos(tab.slice()),
            "result",
            "Valeurs classées avec le tri par Position : "
        );
    }
}

function triBulle(tab) {
    let nombreValeurs = tab.length;

    let temp = 0,
        bool = 1;

    while (bool === 1) {
        bool = 0;
        for (let i = 0; i < nombreValeurs - 1; i++) {
            if (tab[i] > tab[i + 1]) {
                bool = 1;
                temp = tab[i];
                tab[i] = tab[i + 1];
                tab[i + 1] = temp;
            }
        }
    }
    return tab;
}

// function triSelection  {
function triSelection(tab) {
    let nombreValeurs = tab.length;
    let posMini = 0;
    for (let i = 0; i < nombreValeurs - 1; i++) {
        min = tab[i];
        posMini = i;
        for (let j = i + 1; j < nombreValeurs; j++) {
            if (tab[j] < min) {
                min = tab[j];
                posMini = j;
            }
        }
        j = posMini;
        while (j > i) {
            tab[j] = tab[j - 1];
            j = j - 1;
        }
        tab[i] = min;
    }
    return tab;
}

function triInsert(tab) {
  for(let i=1; i<tab.length;i++){
    let cle= tab[i];
    let j=i-1;
    while(j>=0 && tab[j]>cle){
      tab[j+1]=tab[j];
      j--;
    }
    tab[j+1]=cle;
  }
  return tab;
}

function triPos(tab) {
  let tabTri=[];
    for (let i = 0; i < tab.length; i++) {
        let pos = 0;
        for (let j = 0; j < tab.length; j++) {
            if (tab[i] > tab[j]) {
                pos++;
            }
        }
        while(tab[i]===tabTri[pos])  {
          pos++;
        }
        tabTri[pos]=tab[i];
    }
    return tabTri;
}
