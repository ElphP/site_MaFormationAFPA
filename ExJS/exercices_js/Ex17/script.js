
let chaine="<ul>";


for (let i = 0; i < 10; i++) {
 let nbr=Math.round(Math.random() * 10);  
 chaine+= "<li>"+ nbr + "</li>";
 if(nbr===10) {"Le nombre 10 a été tiré au sort"}
}

chaine+= "</li>";
document.body.innerHTML = chaine;