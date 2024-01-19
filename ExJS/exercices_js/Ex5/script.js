let mHT = Number(prompt("Quel est le prix de l'article Hors Taxe?"));
let TVA=0;
do  {
     TVA = Number(prompt("Quel est le taux de TVA applicable à cet achat? (en %)"));
}
while(TVA<0 || TVA>100)
 
if ((mHT+ (mHT*(TVA/100))>100))  {
    document.body.innerHTML = `<h1 style="color:red"> Le prix de ce produit est de  ${(mHT+ (mHT*(TVA/100)))} euros. <h1>` ;
}
else {
    document.body.innerHTML = `<h1 style="color:green"> Le prix de ce produit est de  ${(mHT+ (mHT*(TVA/100)))} euros. <h1>` ;
}