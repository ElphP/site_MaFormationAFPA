"use strict";

const mots =
    "disqualifieras, interviewasses, vulgarisatrice, régénératrices, réinjectassiez, superpositions, privilégierait, chantourneront, effilocherions, dégringolerons, psychiatrisant, anéantissaient, rétracteraient, magnétométries, démeublassions, péripatétismes, reverdissaient, multipliassiez, réorchestrasse, enorgueillisse, framboiserions, prédestinerais, démythifierons, défroisserions, dépelotonnerez, monosaccharide, impatienterait, triballassions, dérouillassiez, désingularises, militariseront, encartonneriez, dégueulassions, schématisation, encanaillement, surglaceraient, réincorporasse, graticulassent, présenteraient, intermédiaires, désurchauffais, déflaquassions, tressailliront, prolétarisasse, concrétiseront, argumentassent, anticiperaient, renformirèrent, démantibulasse, anesthésiasses, contrebuterait, rahat-loukoums, réadmettraient, désenvenimerai, pervertisseuse, avitaillassent, dégrouilleriez, traumatologues, blasonnassions, sectorisassent, boustifaillons, champlevassiez, camion-citerne, amplifications, strangulassent, pourfendissent, contre-valeure, dépoussiérâtes, tournailleriez, lèche-vitrines, paupériserions, madrigaliserez, prophétiseront, horticultrices, guillemetasses, désensibilisez, ratiboisassent, appréhenderont, désenflammions, chantournaient, désépaississes, endommageaient, minéralisasses, mensualisèrent, transvestismes, lyophiliserais, revendicateurs, désinsectisera, passe-lacettes, attristassions, pantouflassent, tératologiques, craquetassions, collectionniez, courbaturerais, scintigraphies, hémodynamiques, rembougeassent, christianisons, oppresseraient, dégobillerions, contre-placage, ensaisinassent, chouchoutaient, barbouillerais, acquiesçassiez, désaffectionne, renverseraient, resplendissais, réciproquèrent, conventionnons, renflammassent, substantialité, obédientielles, superpuissance, déconditionnât, transitionnels, baragouinaient, consonantismes, étançonnerions, sympathisantes, mytilicultrice, stéréotyperont, revendicatives, porte-drapeaux, agenouillerait, tournassassiez, décadenasseras, dépoussiérants, fractionneront, parallélisâmes, bouleversèrent, antépénultième, morigénassions, désaffectasses, raccourcissiez, régulariserais, préchauffèrent, télescopassent, désincarnaient, bourgeonnerons, quarante-trois, surenchéririez, déconcentreras, recommanderait, recommandables, écrabouillasse, scolariserions, ébouillantâtes, détrompassions";
const tabMots = mots.split(",");

let mot = tabMots[Math.floor(Math.random() * tabMots.length - 1)];

let lettres = document.querySelectorAll(".btn");
let echec = 0;
let success = 0;
document.querySelector(".tentatives").innerHTML = `Il reste ${9 - echec} coups`;

// écouteur d'évenement sur le clavier alpha
lettres.forEach((lettre) =>
    lettre.addEventListener("click", () => {
        if (
            mot.indexOf(lettre.value) != -1 ||
            (lettre.value === "e" &&
                (mot.indexOf("é") != -1 || mot.indexOf("è") != -1))
        ) {
            for (let i = 0; i < mot.length; i++) {
                if (
                    (mot[i] === "é" || mot[i] === "è") &&
                    lettre.value === "e"
                ) {
                    document.querySelector(`.c${i}`).innerHTML = mot[i];
                    success++;
                } else if (mot[i] === lettre.value) {
                    document.querySelector(`.c${i}`).innerHTML = lettre.value;
                    success++;
                }
            }

            lettre.style.backgroundColor = "green";
            lettre.setAttribute("disabled", "");
            lettre.classList.remove("btn-outline-primary");
            lettre.classList.add("btn-outline-dark");
        } else if (mot.indexOf(lettre.value) == -1) {
            lettre.style.backgroundColor = "red";
            lettre.setAttribute("disabled", "");
            lettre.classList.remove("btn-outline-primary");
            lettre.classList.add("btn-outline-dark");
            echec++;
        }

        document.querySelector(".tentatives").innerHTML = `Il reste ${
            9 - echec
        } coups`;

        // gestion de la fin de la partie
        if (echec === 9 && success != 14) {
            document.querySelector(
                ".tentatives"
            ).innerHTML = `Vous avez échoué! Le mot à découvrir était : "${mot}"`;
            rejouer();
            desactiv();
        } else if (success === 14) {
            document.querySelector(".tentatives").innerHTML =
                "Bravo vous avez gagné!!";
            rejouer();
            desactiv();
        }
    })
);

//  bouton rejouer
function rejouer() {
    let rejouer = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerHTML = "Rejouer";
    rejouer.classList.add("text-center");
    btn.classList.add("btn", "btn-primary");
    rejouer.appendChild(btn);

    document.body.querySelector("main").appendChild(rejouer);
    rejouer.addEventListener("click", () => {
        location.reload();
    });
}

function desactiv() {
   lettres.forEach((lettre)=>  {
    lettre.setAttribute("disabled", "");
   })
}