
const majParEnfant = 15;
const majSalaire = 10;
let salaire=0;

let txParticipation=0 ;




if(window.prompt("Etes vous célibataire? Répondez par 'O' ou 'N'")==="O")  {
    txParticipation = 20;
} else {
    txParticipation= 25;
}


txParticipation +=  ((Number(window.prompt("Combien avez-vous d'enfants?")))*majParEnfant)




if((Number(window.prompt("Dernière question: Quel est votre salaire?")))<1800) {

   
    txParticipation +=  majSalaire;
      
}


if  (txParticipation > 50)  {
    txParticipation = 50;
}

window.alert("Le taux de participation de votre employeur est de "+txParticipation+"%");

