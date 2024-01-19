
let chaine="<ul>";

for (let i = 0; i < 10; i++) {
 chaine+= "<li>"+Math.floor(Math.random() * 100)+ "</li>";
}

chaine+= "</li>";
document.body.innerHTML = chaine;