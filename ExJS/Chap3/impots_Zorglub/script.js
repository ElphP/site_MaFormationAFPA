let choixSex = document.getElementById("sex");
let choixAge = document.getElementById("age");
let reponse= document.getElementById("reponse");

let btnCalcul = document.querySelector("button");
btnCalcul.addEventListener("click", () => {
    let valSex = choixSex.options[choixSex.selectedIndex].value;
    let valAge = choixAge.value;
    if(valAge=="" || valSex=="Choisissez une valeur") {
        reponse.classList = "col-12 col-lg-4 bg-danger text-warning fs-5 rounded text-center p-1";
        reponse.innerHTML= "Vous devez définir votre sexe et votre âge! "
    }
    
    else if ((valSex==="H" && valAge>18)||(valSex==="F" && (valAge <=35 && valAge>=18)))  {
        reponse.classList =
            "col-12 col-lg-4 bg-warning text-dark fs-5 rounded text-center p-1";
        reponse.innerHTML =
            "Vous êtes imposable! ";
}
else  {
    reponse.classList =
        "col-12 col-lg-4 bg-success text-light fs-5 rounded text-center p-1";
    reponse.innerHTML = "Vous êtes non imposable! ";
}
});
