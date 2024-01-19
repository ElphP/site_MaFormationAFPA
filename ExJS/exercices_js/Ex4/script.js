let mHT = Number(prompt("Quel est le prix de l'article Hors Taxe?"));
let TVA=0;
do  {
    TVA = Number(prompt("Quel est le taux de TVA applicable à cet achat? (en %)"));
    console.log(TVA);
}
while(TVA<0 || TVA>100)
 

    document.body.innerText = " Le prix de ce produit est de "+ (mHT+ (mHT*(TVA/100))) + " euros. " ;

