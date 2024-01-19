function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function randomChoix() {
    return Math.floor(Math.random() * 5);
}

let objets = [
    ["magnifique chaise gamer", "./img/chaise.png"],
    ["costume Halloween", "./img/costume-haloween.png"],
    ["grill idéal pour l'été", "./img/grill.png"],
    ["guitare acoustique", "./img/guitare.png"],
    ["sac à main élégant", "./img/sac-a-main.png"],
];

let nbrTentatives = 0;
let tabPropositions;
let price=0;
document.getElementById("btnJouer").addEventListener("click", () => {
    price = getRandomPrice(1, 100);
    document
        .getElementById("jeu")
        .classList.add("d-flex", "justify-content-evenly");
    document.getElementById("btnJouer").style.display = "none";
    document.getElementById("valid").style.display = "block";
    document.querySelector(".logo").style.display = "none";
    document
        .querySelector(".container")
        .classList.remove("flex-column", "d-flex", "align-items-content");
    document.querySelector(".message").innerHTML = "";
    document.getElementById("reponse").focus();
    let img = document.querySelector(".cardGame>img");
    let text = document.querySelector(".name");
    let nbrAlea = randomChoix();

    let objet = objets[nbrAlea][1];
    let objetName = objets[nbrAlea][0];
    img.src = objet;
    text.innerHTML = `<span>${objetName}</span>`;
    
    console.log(price);

    nbrTentatives = 10;

    document.querySelector(
        ".tentatives"
    ).innerHTML = `Nombre de tentatives restantes: ${nbrTentatives}/10`;
    tabPropositions = [];

    document.getElementById("valid").addEventListener("click", () => {
        document.getElementById("reponse").focus();

        if (document.getElementById("reponse").value != "") {
            let nbrPropose = document.getElementById("reponse").value;
            nbrPropose = Number(nbrPropose);

            if (Number.isInteger(nbrPropose)) {
                if (price == nbrPropose) {
                    document.getElementById("valid").style.display = "none";
                    document.getElementById("btnJouer").textContent = "Rejouer";
                    
                    document.querySelector(".message").innerHTML =
                        "Bravo vous avez gagné!!!";
                    for (let i = 1; i < 11; i++) {
                        document.querySelector(
                            `.rep${i}:nth-child(1)`
                        ).textContent = "";
                        document.querySelector(
                            `.rep${i}:nth-child(2)`
                        ).textContent = "";
                    }
                    document.getElementById("reponse").value = "";
                    document.getElementById("valid").style.display = "none";
                    document.getElementById("btnJouer").textContent = "Rejouer";
                    document.getElementById("btnJouer").style.display = "block";
                     
                    var audio = new Audio(
                        "./CRWDCheer_Applaudissements concert bar 4 (ID 2482)_LS.mp3"
                    );
                   
                    audio.play();
                } else {
                    document.querySelector(`.rep${nbrTentatives}`).textContent =
                        nbrPropose;
                    document.querySelector(
                        `.rep${nbrTentatives}:nth-child(2)`
                    ).textContent = price > nbrPropose ? "+" : "-";
                    var audio = new Audio(
                        "./TOYElec_Docteur maboul 3 (ID 1684)_LS.mp3"
                    );
                    audio.play();
                    nbrTentatives--;
                    tabPropositions.push(nbrPropose);

                    document.querySelector(
                        ".tentatives"
                    ).innerHTML = `Nombre de tentatives restantes: ${nbrTentatives}/10`;
                    document.getElementById("reponse").value = "";
                }
            } else {
                document.querySelector(".message").innerHTML =
                    "Vous devez entrer un prix en euros (un nombre entier)";
                document.getElementById("reponse").value = "";
            }
        }

        if (nbrTentatives === 0) {
            
            document.querySelector(".message").innerHTML =
                "Vous avez perdu! Vous pouvez retentez votre chance...";
            document.getElementById("valid").style.display = "none";
            document.getElementById("btnJouer").style.display = "block";
            document.getElementById("btnJouer").textContent = "Rejouer";
            document.getElementById("reponse").value = "";
        }
    });
});
