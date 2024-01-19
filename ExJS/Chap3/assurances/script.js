let btn = document.querySelector("button");
let rdCoul = document.getElementById("couleur");

let message = document.getElementById("message");

btn.addEventListener("click", () => {
  let age = Number(document.getElementById("age").value);
  let permis = Number(document.getElementById("permis").value);
  let acc = Number(document.getElementById("acc").value);
  let fid = Number(document.getElementById("fid").value);
  rdCoul.classList = "";
  rdCoul.innerHTML = "";
  message.classList = "";
  message.innerHTML = "";

  if (
    age !== null &&
    age >= 18 &&
    Number.isInteger(age) &&
    permis !== null &&
    age - permis >= 18 &&
    Number.isInteger(permis) &&
    acc !== null &&
    Number.isInteger(acc) &&
    fid !== null &&
    Number.isInteger(fid)
  ) {
    affichCouleur(age, permis, acc, fid);
  } else {
    message.classList =
      "text-center fs-4 col-12 col-lg-6 text-warning bg-danger rounded";
    message.innerHTML =
      "Vérifiez que vous avez entré des nombres entiers. De plus, vous devez être majeur et avoir eu le permis à l'âge de 18 ans ou + !";
  }
});

// algo de l'assurance
function affichCouleur(ag, per, acc, fid) {
  let valCoul;

  if (ag >= 25 && per >= 2 && acc == 0) {
    valCoul = 3;
  } else {
    if (
      (ag >= 25 && per >= 2 && acc == 1) ||
      (((ag < 25 && per >= 2) || (ag >= 25 && per < 2)) && acc == 0)
    ) {
      valCoul = 2;
    } else {
      if (
        (ag >= 25 && per >= 2 && acc == 2) ||
        (((ag < 25 && per >= 2) || (ag >= 25 && per < 2)) && acc == 1) ||
        (ag < 25 && per < 2 && acc == 0)
      ) {
        valCoul = 1;
      } else {
        valCoul = 0;
      }
    }
  }
  if (valCoul > 0 && fid > 1) {
    valCoul++;
  }

  switch (valCoul) {
    case 0:
      message.classList = "text-center text-light fs-4 col-12 col-lg-6";
      message.innerHTML =
        "Désolé, mais vous ne remplissez pas les conditions nécessaires pour que nous puissions vous assuré...  ";

      break;

    case 1:
      message.classList = "text-center text-light fs-4 col-12 col-lg-6";
      message.innerHTML = `<p>Vous avez ${ag} ans, le permis depuis ${per} ans, vous avez eu ${acc} accidents et vous êtes client de notre assurance depuis ${fid} ans. Voici la couleur de votre tarif:</p> `;
      rdCoul.classList = "red text-center text-light fs-5 rounded-circle m-3 ";
      rdCoul.innerHTML = "<br>Rouge";
      break;
    case 2:
      message.classList = "text-center text-light fs-4 col-12 col-lg-6";
      message.innerHTML = `<p>Vous avez ${ag} ans, le permis depuis ${per} ans, vous avez eu ${acc} accidents et vous êtes client de notre assurance depuis ${fid} ans. Voici la couleur de votre tarif:</p> `;
      rdCoul.classList =
        "orange text-center text-light fs-5 rounded-circle m-3 ";
      rdCoul.innerHTML = "<br>Orange";
      break;
    case 3:
      message.classList = "text-center text-light fs-4 col-12 col-lg-6";
      message.innerHTML = `<p>Vous avez ${ag} ans, le permis depuis ${per} ans, vous avez eu ${acc} accidents et vous êtes client de notre assurance depuis ${fid} ans. Voici la couleur de votre tarif:</p> `;
      rdCoul.classList = "green text-center text-light fs-5 rounded-circle m-3";
      rdCoul.innerHTML = "<br>Vert";
      break;
    case 4:
      message.classList = "text-center text-light fs-4 col-12 col-lg-6";
      message.innerHTML = `<p>Vous avez ${ag} ans, le permis depuis ${per} ans, vous avez eu ${acc} accidents et vous êtes client de notre assurance depuis ${fid} ans. Voici la couleur de votre tarif:</p> `;
      rdCoul.classList = "blue text-center text-light fs-5 rounded-circle m-3 ";
      rdCoul.innerHTML = "<br>Bleu";
      break;
    default:
      rdCoul.innerHTML = "Cas non prévu";
  }
}
