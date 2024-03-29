// jQuery

$(document).ready(function () {
  $('input[type="radio"]').on("change", function () {
    if (this.checked) {
      let name = window.prompt("Veuillez entrer votre nom:");
      let niveau = "";
      let theme = "";
      let image = "";

      switch (this.id) {
        case "deb":
          niveau = "Débutant";
          break;
        case "conf":
          niveau = "Confirmé";
          break;
        case "exp":
          niveau = "Expert";
          break;
        default:
          niveau = "Erreur Script";
          break;
      }

      let themeObject = "";
      switch (this.name) {
        case "choix1":
          theme = "Applications Web";
          image = "./img/web.jpg";
          themeObject = "./json/quizzweb.json";
          break;
        case "choix2":
          theme = "JavaScript";
          image = "./img/javascript.png";
          themeObject = "./json/quizzjavascript.json";

          break;
        case "choix3":
          theme = "Le XXème siècle";
          image = "./img/dates20.jpg";
          themeObject = "./json/quizzdates20.json";

          break;
        case "choix4":
          theme = "Nintendo";
          image = "./img/nintendo.jpg";
          themeObject = "./json/quizznintendo.json";

          break;
        case "choix5":
          theme = "Trouver le nombre";
          image = "./img/nombres.jpg";
          themeObject = "./json/quizznombres.json";

          break;
        case "choix6":
          theme = "Microsoft";
          image = "./img/microsoft.jpg";
          themeObject = "./json/quizzmicrosoft.json";

          break;
        case "choix7":
          theme = "PHP";
          image = "./img/php.jpg";
          themeObject = "./json/quizzphp.json";

          break;
        case "choix8":
          theme = "Méandres d'Internet";
          image = "./img/internet.jpg";
          themeObject = "./json/quizzinternet.json";
          break;
        default:
          console.log("error");
          break;
      }

      // la fonction de callback permet d'attendre la fin de l'animation avant d'éxécuter la suite du code...
      $(".accueil").animate({ opacity: 0 }, 500, function () {
        $(this).hide();
        $(".recap h2").html(`${theme}   -    Niveau ${niveau}`);
        $(".recap img").attr("src", image);
        $(".recap img").attr("alt", "image_du_theme");
        $(".recap p").html(
          `<span>${name}</span>, vous allez pouvoir démarrer ce Quizz!!!`
        );
        $(".recap").css({ display: "block" });
      });

      //   ici démarre le jeu
      $(".recap button").click(function () {
        let data = {};

        $(".recap").animate({ height: 0, opacity: 0 }, 500);
        fetch(themeObject)
          .then((response) => response.json())
          .then((json) => jeu(theme, niveau, json, name));
      });
    }
  });
});

function jeu(them, niv, response, name) {
  // la fonction de callback permet d'attendre la fin de l'animation avant d'éxécuter la suite du code...
  $(".recap").animate({ opacity: 0 }, 500, function () {
    $(this).hide();
    $(".jeu h2").html(`${them}   -    Niveau ${niv}`);
    $(".jeu").css({ display: "block" });
  });

  let tabQuestion = [];
  switch (niv) {
    case "Débutant":
      tabQuestion = response.quizz.débutant;
      break;
    case "Confirmé":
      tabQuestion = response.quizz.confirmé;
      break;
    case "Expert":
      tabQuestion = response.quizz.expert;
      break;

    default:
      console.log("error");
      break;
  }

  let emplacementReponses = `<div class="reponse" id="reponse1"></div>
    <div class="reponse" id="reponse2" ></div>
    <div class="reponse" id="reponse3"></div>
    <div class="reponse" id="reponse4"></div>`;

  let score = 0;
  let indexQuestion = 0;

  entreesQuestion(indexQuestion, tabQuestion);

  $(".zoneDepot button").on("click", function () {
    indexQuestion++;

    entreesQuestion(indexQuestion, tabQuestion);
    $(".zoneDepot button").prop("disabled", true);
  });

  function entreesQuestion(indexQuestion, tabQuestion) {
    $(".reponses").html(emplacementReponses);

    $(".anecdote").css("backgroundColor", "transparent");
    $(".anecdote").html("");
    $(".depot").css("backgroundColor", "white");
    $(".numeroQuestion").html("Question " + tabQuestion[indexQuestion].id);
    $(".question").html(tabQuestion[indexQuestion].question);
    $("#reponse1").html(tabQuestion[indexQuestion].propositions[0]).draggable();
    $("#reponse2").html(tabQuestion[indexQuestion].propositions[1]).draggable();
    $("#reponse3").html(tabQuestion[indexQuestion].propositions[2]).draggable();
    $("#reponse4").html(tabQuestion[indexQuestion].propositions[3]).draggable();
  }

  // function déclenchée quand un élément est lachée dans la zone de réponse
  $(".depot").droppable({
    drop: function (event, ui) {
      $("#reponse1").draggable("disable");
      $("#reponse2").draggable("disable");
      $("#reponse3").draggable("disable");
      $("#reponse4").draggable("disable");

      let baliseBonneReponse = `#${ui.draggable[0].id}`;
      if ($(baliseBonneReponse).text() === tabQuestion[indexQuestion].réponse) {
        $(".depot").css("backgroundColor", "#0FFF00");
        if (tabQuestion[indexQuestion].anecdote) {
          $(".anecdote").css("backgroundColor", "#FF6D00");
          $(".anecdote").html(tabQuestion[indexQuestion].anecdote);
        }
        score++;
      } else {
        $(".depot").css("backgroundColor", "#C50401");
      }
      // couleur de la div réponse correcte passe en vert
      for (let l = 0; l < 4; l++) {
        if (
          tabQuestion[indexQuestion].propositions[l] ===
          tabQuestion[indexQuestion].réponse
        ) {
          $(`#reponse${l + 1}`).css("backgroundColor", "#0FFF00");
        }
      }

      if (indexQuestion === 9) {
        $(".jeu").animate({ opacity: 0 }, 500, function () {
          $(this).hide();

          $(".message").html(
            `<p>${name}, votre score sur ce quizz est de ${score}/10</p><br><button class="rejouer">Rejouer</button>`
          );
          $(".message").css({ display: "flex" });
          $(".rejouer").click(function () {
            history.go(0);
          });
        });
      } else {
        $(".zoneDepot button").prop("disabled", false);
      }
    },
  });
}
