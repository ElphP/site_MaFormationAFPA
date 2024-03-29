
let chaine="<ul>";


for (let i = 0; i < 10; i++) {
 let nbr=Math.floor(Math.random() * 11);  
 chaine+= "<li>"+ nbr + "</li>";
 if(nbr===10) {console.log("Le nombre 10 a été tiré au sort")};
}

chaine+= "</ul>";
document.body.innerHTML = chaine;