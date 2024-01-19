"use strict" 
let btn = document.querySelector("button");

btn.addEventListener("click", ()=>  {
    let heures = document.getElementById("heures").value;
    let minutes = document.getElementById("minutes").value;
    let secondes = document.getElementById("secondes").value;
    if (heures>23  || minutes >59 || secondes>59)  {
        document.getElementById("message").innerHTML = "Veuillez entrer un horaire cohérent!";
    }
    else  {
        let horaire = calcul(heures, minutes, secondes);
        document.getElementById("message").innerHTML = `En ajoutant 1 seconde il est: ${horaire[0]} h : ${horaire[1]} m : ${horaire[2]} s`;
    }
   

})

function calcul(h,m,s)  {
    let horaire = [];
        if(s==59)  {
            s=0;
            if(m==59)  {
                m=0;
                if(h==23)  {
                    h=0;
                }
                else {
                    h++;
                }
            }
            else  {
                m++;
            }
        }
        else  {
            s++;
        }
        return horaire=[h,m,s];
}

