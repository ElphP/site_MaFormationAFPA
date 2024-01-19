
let chaine="<ul>";


for (let i = 0; i < 10; i++) {
  
 chaine+= "<li>"+ Math.round(Math.random() * 10);  + "</li>";
 
}

chaine+= "</li>" ;
document.body.innerHTML = chaine;