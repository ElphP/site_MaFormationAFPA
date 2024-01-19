"use strict";

//création des dessous d'images randomisées

let tabVal = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
//fonctions timer
let timer = setInterval(countTimer, 1000);
let temps = 0;



let compteur = 0;
let tabVerify = [];
let tabCompte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(tabVal);


// fonctions qui génère et place les cartes au hasard
function aleaCard() {
  for (let i = tabVal.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = tabVal[i];
    tabVal[i] = tabVal[j];
    tabVal[j] = k;
  }

  for (let i = 1; i < tabVal.length + 1; i++) {
    var Image = document.createElement("img");
    Image.setAttribute("src", `./images/${tabVal[i - 1]}.jpg`);
    Image.classList.add("objet");
    document.querySelector(`.card${i}`).appendChild(Image);
  }
}

// fonction timer
function countTimer() {
  temps++;
  document.querySelector(
    ".timer"
  ).innerHTML = `Temps écoulé (en secondes): ${temps}`;
}
function stopTimer() {
  clearInterval(timer);
}



//jeu
aleaCard();
document.querySelectorAll(".card").forEach((e) => {
  e.addEventListener("click", () => {
   
    if (compteur < 2) {
      e.querySelector("img").style.opacity = 0;
      tabVerify[compteur] = e;

      //Array.from créé un tableau qui contient tous les enfants du parent de l'élément cliqué (e) et on peut donc  récupérer l' index de la carte cliquée....
      tabCompte[Array.from(e.parentNode.children).indexOf(e)] = 1;
      compteur++;
      if (compteur === 2) {
        if (
          tabVerify[0].querySelector(".objet").src !=
          tabVerify[1].querySelector(".objet").src
        ) {
         
          setTimeout(returnCard, 3000);
        } else {
          tabCompte[
            Array.from(tabVerify[0].parentNode.children).indexOf(tabVerify[0])
          ] = 2;
          tabCompte[
            Array.from(tabVerify[1].parentNode.children).indexOf(tabVerify[1])
          ] = 2;

          compteur = 0;
          
          if (tabCompte.every((v) => v === 2)) {
            document.querySelector(".message").innerHTML =
              "Bravo!! Vous avez gagné!";
              stopTimer();
            document.querySelector(
              ".timer"
            ).innerHTML = `Votre temps: ${temps}`;
            createCookie(tabCompte.length / 2, temps);
            document.querySelector(".btn1").textContent= "Rejouer";
          }
        }
      }
    }
  });
});

document.querySelector(".btn1").addEventListener("click", () => {
  stopTimer();
  let compte = 0;
 if(!(tabCompte.every((v) => v === 2)))  {

  tabCompte.forEach((element) => {
    if (element === 2) {
      compte++;
    }
    document.querySelector(".message").innerHTML = `Vous avez trouvé ${
      compte / 2
    } paires en ${temps} secondes`;
  });
  createCookie(compte / 2, temps);
  setTimeout(() => {
    resetGame();
  }, 5000);
 }
  else {
    resetGame();
  }

});


function returnCard() {
  tabVerify[0].querySelector("img").style.opacity = 1;
  tabVerify[1].querySelector("img").style.opacity = 1;
  compteur = 0;
}


function resetGame() {
  document.querySelector(".message").innerHTML = "";
  document.querySelector(".timer").innerHTML = "";
  clearInterval(timer);
  document.querySelectorAll(".card").forEach((e) => {
    e.querySelector("img").style.opacity = 1;
  });
  // changement des cartes
  let img = document.querySelectorAll(".card img:nth-child(2)");
  img.forEach((element) => {
    element.remove();
  });
  aleaCard();
  // RAZ valeurs globales
  compteur = 0;
  tabVerify = [];
  tabCompte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.querySelector(".btn1").textContent= "Stopper la partie";
  temps=0;
  timer = setInterval(countTimer, 1000);
}



//gestion des cookies
document.querySelector(".btnCookie").addEventListener("click", () => {
  document.querySelector(".messCookie").innerHTML = lireCookie();
});

function createCookie(nbrCartes, temps) {
  let nom = prompt("Quel est votre nom?");
  let d = new Date();
  //validité de cookie de 7 jours (604800000 secondes)
  d = d.getTime();
  d = d + 604800000;
  d = new Date(d);

  document.cookie += `<br> ${nom}: ${nbrCartes} paires trouvées en ${temps} secondes /` + "; expires= " + d +"; path=/;";
   
}

function lireCookie() {
  let lect = document.cookie;
  return lect;
}

