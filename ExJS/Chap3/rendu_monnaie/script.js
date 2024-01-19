let btnValid = document.querySelector("button");
let message= document.getElementById("message");

btnValid.addEventListener("click", () => {
    let ticket = parseInt(document.getElementById("ticket").value);
    let somme = parseInt(document.getElementById("sommePayee").value);
    console.log(ticket, somme);
    calcul(ticket,somme);

})

function calcul(T,S)   {
    if(S<T) {
        message.classList.add = "text-danger fs-5"; 
    message.innerHTML= `La somme payée doit être supérieure à la somme à payer... Vous ne m'avez pas donné assez!`;
    }
    
    let rendu = S-T;
    let billet10= Math.floor(rendu/10);
    let billet5 = Math.floor((rendu%10)/5);
    let pieces = rendu - (billet10*10 + billet5*5);
    message.classList.add = "text-warning fs-5"; 
    message.innerHTML= `Je dois vous rendre ${billet10} billets de 10 euros, ${billet5} billets de 5 euros et ${pieces} pièces de 1 euros.`;
}