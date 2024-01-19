let somme= 0;
let rizCase = 0;
let rizCaseMoins1 = 0;

rizCaseMoins1 = 1;
for(i=1;i<65;i++)  {
    somme += rizCaseMoins1;
    rizCase = rizCaseMoins1*2;
    rizCaseMoins1 = rizCase; 
}

alert(`Le nombre de grains de riz récupéré de cette manière est égal à ${somme}`);