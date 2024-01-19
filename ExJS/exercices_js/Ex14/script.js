let X= parseInt(prompt("Combien voulez-vous de lignes au tableau?"));
let Y = parseInt(prompt("Combien voulez-vous de colonnes au tableau?"));
let chaine= "<table>";
for (let i = 0; i < X; i++) {
  chaine+= "<tr>"
  for (let j = 0; j < Y; j++) {
    chaine+="<td style='border: 1px solid'>"
    chaine+=Math.round(Math.random()*100);
    chaine+="</td>"
  }
  chaine+="</tr>"
}

document.body.innerHTML = chaine;