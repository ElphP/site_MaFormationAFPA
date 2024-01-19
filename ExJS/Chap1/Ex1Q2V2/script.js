const majParEnfant = 0.15;
const majSalaire = 0.10;
const txCelib= 0.20;
const txNnCelib= 0.25;
const txMax= 0.5;
const salaireSeuil= 1800;
let salaire=0;
let repCelib="";
let repEnfants="";
let repBoucle="";

let txParticipation=0 ;


do {

    do  {
        repCelib = window.prompt("Etes vous célibataire?");
        if (repCelib!=="O" && repCelib!=="N"){
             alert('Vous devez choisir entre "O" et "N" exclusivement!' );
            } 
        }
    while (repCelib!=="O" && repCelib!=="N")

    if(repCelib==="O")  {
        txParticipation = txCelib;
    } else {
        txParticipation= txNnCelib;
    }

    do  {
        repEnfants= parseInt(window.prompt("Combien avez-vous d'enfants?"));
        if(isNaN(repEnfants))  {
            alert("Votre réponse doit être un nombre (et si possible entier!!)");
        }
    }
    while(isNaN(repEnfants)) 

    txParticipation +=  (repEnfants*majParEnfant);

    do  {
        salaire= parseFloat(window.prompt("Quel est votre salaire?"));
        if(isNaN(salaire))  {
            alert("Votre réponse doit être un nombre");
        }
    }
    while(isNaN(salaire)) ;


    if(salaire<salaireSeuil) {
        txParticipation +=  majSalaire;    
    }


    if  (txParticipation > txMax)  {
        txParticipation = txMax;
    }

    window.alert(`Le taux de prise en charge par l'entreprise est de ${txParticipation.toFixed(2)*100}%`);

   

    repBoucle= window.prompt('Voulez-vous faire une autre simulation? "O" ou "N"');
    if (repBoucle!=="O" && repBoucle!=="N"){
        alert('Vous devez choisir entre "O" et "N" exclusivement!' );
       } 
}
while(repBoucle!=="N")
