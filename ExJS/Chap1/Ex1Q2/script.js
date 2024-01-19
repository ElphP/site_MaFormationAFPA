const majParEnfant = 0.15;
const majSalaire = 0.10;
const txCelib= 0.20;
const txNnCelib= 0.25;
const txMax= 0.5;
const salaireSeuil= 1800;
let salaire=0;

let txParticipation=0 ;

do  {
    if(verifyEntry("",'Etes-vous célibataire? ("O" pour "Oui" , "N" pour "Non") ')==="O")  {
        txParticipation = txCelib;
    } else {
        txParticipation= txNnCelib;
    }
    txParticipation +=  ((verifyIsNumber("Combien avez-vous d'enfants?","int")) * majParEnfant)  
    
    if((verifyIsNumber('Dernière question: quel est votre salaire? (ne pas utiliser le caractère ",") ',"float"))<salaireSeuil) {    
        txParticipation +=  majSalaire;     
    }
      
    if  (txParticipation > txMax)  {
        txParticipation = txMax;
    }
    
    window.alert("Le taux de participation de votre employeur est de "+(txParticipation.toFixed(2)*100)+"%");
}
while(verifyEntry("",'Autre taux à calculer? ("O" pour "Oui", "N" pour "Non") ')!="N");

//fonction qui vérifie que l'utilisateur entre bien "O" ou "N" (maj ou min) sinon la question est reposée!
function verifyEntry(rep, text)  {
    do  {
        rep = (window.prompt(text)).toUpperCase();
    }
    while  (!(rep==="O" || rep==="N"))
    return rep;
}


function verifyIsNumber(text, type) {
    do  {
        entry = (window.prompt(text));
    }
    while(isNaN(entry));
    if(type==="int") {
        entry= parseInt(entry);
    } 
    else if(type==="float")  {
        entry= parseFloat(entry);
    }
    return entry;
}