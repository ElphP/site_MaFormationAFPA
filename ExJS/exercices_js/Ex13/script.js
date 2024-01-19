let X= 5;
let Y = 7;
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