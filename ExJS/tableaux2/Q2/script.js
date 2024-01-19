"use strict"
let monTableauFelins =["Tigre","Lion","Panthère","Ocelot","Puma"];

// ne garder que les félins avec + de 5 lettres dans le tableau felins2
const felins2 = monTableauFelins.filter((felin) => { 
   return felin.length <= 5;
}
)
// rajouter Leopard au premier tableau
monTableauFelins.push("Leopard");

// ne garder que les felins ayant un indice impair dans le tableau: 1, 3, 5. Le modulo2[%2] différent de 0 permet de sélectionner les index  impairs
let felins3 = monTableauFelins.filter((element,index)=>  {
    return index%2 !=0;
})


let monTableauPoissons = ["Truite","Ablette","Brochet","Carpe","Gardon"];
// Concataine les 2 tableaux dans un nouveau tableau
let monTableauAnimaux = monTableauFelins.concat(monTableauPoissons);

// renvoie 11 puisqu'il y 6 félins (avec Leopard) et 5 poissons
console.log(monTableauAnimaux.length);

// ici le log renvoie juste la partie "felins" du tableau
console.log(monTableauAnimaux.slice(0, 6));

// supprime 1 élément à la place 3 de tableauPoissons (et le mets dans remove)
let remove = monTableauPoissons.splice(3,1);

// Rajout de Tanche et Barbeau à l'index 3   (peut se faire en 1 fois avec la ligne ci-dessus en remplaçant 0 par 1)
monTableauPoissons.splice(3,0, "Tanche","Barbeau")

// monTableauPoissons contient-il "Brochet"? renvoie true si c'est vrai.... sinon false
console.log(monTableauPoissons.includes("Brochet"));

monTableauPoissons = ["Truite", "Ablette", "Brochet", "Carpe", "Gardon"];

// tableau avec insertions alternatives...
let monTab = [];
for (let i = 0; i < 6; i++) {
    monTab.push(monTableauFelins[i]);
    if (i<5) {
        monTab.push(monTableauPoissons[i]);
    }   
}
// créer un tableau tabPairs qui ne garde que les valeurs paires du tableau monTabNombre
let monTabNombre = [1,2,3,4,5,6,7,8,9,10];
let tabPairs = monTabNombre.filter(element  =>  {
    return element%2 === 0
})

// map permet de faire des actions sur tabPairs, ici calcul 3*element +2
tabPairs= tabPairs.map(element  =>  {
    return 3*element+2
})


let utilisateurs  =  [
    {prenom: "Sacha", nom:"RESTOUEIX" },
    {prenom: "Remi", nom:"CHOCO" },
    {prenom: "Pierre", nom:"KIROULE" }
]
// retourne un tableau contenant nom et prénom associés pour chaque élement du tableau utilisateurs : ['Sacha RESTOUEIX','Remi CHOCO', 'Pierre KIROULE' ]
let utilisateurs2 = utilisateurs.map(element =>  {
    return element.prenom +" "+ element.nom
})
// renvoie la taille de la chaine de caractère pour chaque entrée du tableau
let utilisateurs2Taille = utilisateurs2.map(el => {
    return el.length
})
// arrondi le plus proche de la racine carrée de la longuer des chaines:
let utilisateurs2RC = utilisateurs2Taille.map(el =>  {
    return Math.round(Math.sqrt(el));
})
// affichage de la valeur de la somme de tous les arrondis des racines carrées (voir ci-dessus)... 
console.log(utilisateurs2RC.reduce((acc, currentValue)=> acc+ currentValue));

