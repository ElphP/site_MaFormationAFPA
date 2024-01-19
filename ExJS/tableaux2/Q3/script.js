document.querySelector("button.valid").addEventListener("click", () => {

    let nbrValeurs = document.querySelector("input").value;

    if (nbrValeurs !== "" && nbrValeurs > 0 && nbrValeurs <= 20) {
        let zoneInsert = document.querySelector(".zoneInsert");
        // réinitialistaion de la zoneinsert
        while (zoneInsert.firstChild) {
            zoneInsert.removeChild(zoneInsert.firstChild);
        }

        for (let i = 0; i < nbrValeurs; i++) {
            // création  des champs de saisie  des nombres à comparer
            let champSaisie = document.createElement("input");
            champSaisie.setAttribute("type", "number");
            champSaisie.style.borderRadius = "15px";
            champSaisie.style.border = "3px solid black";
            champSaisie.classList.add("dataTab");

            zoneInsert.appendChild(champSaisie);
        }
        // affichage du bouton pour obtenir le résultat
        let btnResultat = document.createElement("button");
        btnResultat.style.backgroundColor = "red";
        btnResultat.style.color = "black";
        btnResultat.classList.add("btnResult");
        btnResultat.innerHTML = "Résultat";

        zoneInsert.appendChild(btnResultat);

        // action sur le bouton pour obtenir le résultat
        document.querySelector(".btnResult").addEventListener("click", () => {
            // réinitialistaion
            let tabVal = [];
            document.querySelector(".messErr").innerHTML = "";
            document.querySelector(".result").innerHTML = "";
            // entrée des nombres dans un tableau
            for (let i = 1; i < Number(nbrValeurs) + 1; i++) {
                tabVal.push(
                    document.querySelector(`.dataTab:nth-child(${i})`).value
                );
            }
            // vérification si tous les nombres ont bien été entrés...
            if (tabVal.includes("")) {
                messErr(
                    "Toutes les entrées doivent être renseignées avec un nombre..."
                );
            } else {

                // recherche du max et affichage du résultat
                nbrMax = Math.max(...tabVal);
                let affich = document.createElement("span");
                affich.style.fontSize = "2rem";
                affich.innerHTML = "Le maximum du tableau est : ";
                let result = document.createElement("span");
                result.style.color = "yellow";
                result.style.fontSize = "2rem";
                result.innerHTML = nbrMax;
                let affichageResult = document.querySelector(".result");
                affichageResult.append(affich);
                affichageResult.append(result);
                
                for (let i = 0; i < Number(nbrValeurs); i++) {
                   
                    if (Number(tabVal[i])===nbrMax)  {
                        document.querySelector(`.dataTab:nth-child(${i+1}`).style.backgroundColor= "yellow";
                    }
                    
                }
            }
        });
    } else {
        messErr(
            "Vous devez entrer un nombre entier compris entre 1 et 20 dans la zone ci-dessous!"
        );
    }
});

// fonction affichage du message d'erreur
function messErr(param) {
    document.querySelector(".messErr").style.color = "white";
    document.querySelector(".messErr").style.paddingLeft = "50px";
    document.querySelector(".messErr").innerHTML = param;
}
