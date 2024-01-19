
let chaine="<ul>";
let cpte= 0;

for (let i = 0; i < 10; i++) {
 let nbr=Math.round(Math.random() * 10);  
 chaine+= "<li>"+ nbr + "</li>";
 if(nbr===10) {cpte++}
}

chaine+= "</li> <br> <p>Le nombre 10 a été tiré "+cpte+" fois parmi les 10 tirages";
document.body.innerHTML = chaine;