
let chaine="<ul>";
let cpte= 0;

for (let i = 0; i < 10; i++) {
 let nbr=Math.floor(Math.random() * 11);  
 chaine+= "<li>"+ nbr + "</li>";
 if(nbr===10) {cpte++}
}

chaine+= "</li> <br> <p>Le nombre 10 a été tiré "+cpte+" fois parmi les 10 tirages";
document.body.innerHTML = chaine;