const majParEnfant = 0.15;
const majSalaire = 0.10;
const txCelib= 0.20;
const txNnCelib= 0.25;
const txMax= 0.5;
const salaireSeuil= 1800;
let salaire=0;

let txParticipation=0 ;




if(window.prompt("Etes vous célibataire? Répondez par 'O' ou 'N'")==="O")  {
    txParticipation = txCelib;
} else {
    txParticipation= txNnCelib;
}


txParticipation +=  ((parseInt(window.prompt("Combien avez-vous d'enfants?")))*majParEnfant)




if((parseFloat(window.prompt("Dernière question: Quel est votre salaire?")))<salaireSeuil) {

   
    txParticipation +=  majSalaire;
      
}


if  (txParticipation > txMax)  {
    txParticipation = txMax;
}

window.alert("Le taux de participation de votre employeur est de "+(txParticipation.toFixed(2)*100)+"%");