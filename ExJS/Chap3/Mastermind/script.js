"use strict";

let code = [];

function codeRandom()  {
    for (let i = 0; i < 4; i++) {
      switch (Math.floor(Math.random() * 4)) {
        case 0:
          code[i] = "red";
          break;
        case 1:
          code[i] = "yellow";
          break;
        case 2:
          code[i] = "green";
          break;
        case 3:
          code[i] = "blue";
          break;
        default:
          alert("erreur");
      }
    }
}

codeRandom();

// console.log(code[0], code[1], code[2], code[3]);

let nbrTours = 0;

document.getElementById("jouez").addEventListener("click", () => {
  document.querySelector(".proposition").classList.remove("d-none");
  document.getElementById("jouez").style.visibility = "hidden";
});

document.getElementById("valid").addEventListener("click", () => {
  nbrTours++;
  let x = 0,
    y = 0;
  let flag = 0;
  let tabJeu = [
    document.getElementById("pion1").value,
    document.getElementById("pion2").value,
    document.getElementById("pion3").value,
    document.getElementById("pion4").value,
  ];

  document.querySelector(`.tr${nbrTours}>.td1`).style.backgroundColor =
    tabJeu[0];
  document.querySelector(`.tr${nbrTours}>.td2`).style.backgroundColor =
    tabJeu[1];
  document.querySelector(`.tr${nbrTours}>.td3`).style.backgroundColor =
    tabJeu[2];
  document.querySelector(`.tr${nbrTours}>.td4`).style.backgroundColor =
    tabJeu[3];

  for (let i = 0; i < 4; i++) {
    if (code[i] === tabJeu[i]) {
      x++;
      tabJeu[i] = -1;
    }
  }

  for (let i = 0; i < 4; i++) {
    flag = 0;
    for (let j = 0; j < 4; j++) {
      if (code[i] === tabJeu[j] && tabJeu[i] != -1) {
        flag = 1;
        tabJeu[j] = -2;
      }
    }

    if (flag === 1) {
      y++;
    }
  }
  document.querySelector(`.tr${nbrTours}>.td5`).innerHTML = x;
  document.querySelector(`.tr${nbrTours}>.td6`).innerHTML = y;

  if (x === 4) {
    document.querySelector(".message").innerHTML =
      "Bravo vous avez trouvé le code!";
    document.querySelector(".proposition").classList.add("d-none");
    document.getElementById("jouez").innerHTML = "Rejouer";
    document.getElementById("jouez").style.visibility = "visible";
    document.getElementById("jouez").addEventListener("click", () => {
      reset();
    });
  } else if (nbrTours === 10) {
    document.querySelector(".message").innerHTML =
      "Désolé vous avez perdu! Vous pouvez rejouer. ";
    document.querySelector(".proposition").classList.add("d-none");
    document.getElementById("jouez").innerHTML = "Rejouer";
    document.getElementById("jouez").style.visibility = "visible";
    document.querySelector(".solution").innerHTML =` La solution était: <table ><tr class="border-0">
    <td class="rounded-circle border-0" style="background-color: ${code[0]}; height: 60px; width :60px"> 
    <td class="rounded-circle border-0" style="background-color: ${code[1]}; height: 60px; width :60px">
    <td class="rounded-circle border-0" style="background-color: ${code[2]}; height: 60px; width :60px">
    <td class="rounded-circle border-0" style="background-color: ${code[3]}; height: 60px; width :60px">
    </tr></table>`;
    document.getElementById("jouez").addEventListener("click", () => {
      reset();
    });
  }
});

function reset() {
  document.querySelectorAll(`.td1`).forEach((element) => {
    element.style.backgroundColor = "transparent";
  });
  document.querySelectorAll(`.td2`).forEach((element) => {
    element.style.backgroundColor = "transparent";
  });
  document.querySelectorAll(`.td3`).forEach((element) => {
    element.style.backgroundColor = "transparent";
  });
  document.querySelectorAll(`.td4`).forEach((element) => {
    element.style.backgroundColor = "transparent";
  });
  document.querySelectorAll(".td5").forEach((element) => {
    element.innerHTML = "";
  });
  document.querySelectorAll(".td6").forEach((element) => {
    element.innerHTML = "";
  });
  document.querySelector(".message").innerHTML = "";
  nbrTours = 0;
  document.querySelector(".solution").innerHTML ="";
  codeRandom();
  
}
