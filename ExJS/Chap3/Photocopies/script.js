"use strict"
let btn= document.getElementById("valid");
let result= document.getElementById("prix");

btn.addEventListener("click", ()=>  {
    let nbr = document.querySelector("input").value;
    let nbrinit = nbr;
    let prix=0;
    console.log(nbr);
    if(nbr<=10) {
        prix=nbr*0.1;
    }
    else nbr= nbr-10;
    if(nbr<=20)  {
        prix= (10*0.1)+(nbr*0.09);
    }
    else nbr=nbr-20;
    prix=10*0.1 + 20*0.09 + nbr*0.08

    result.innerHTML= `Vous devrez payer ${prix.toFixed(2)} euros pour ${nbrinit} photocopies`
})