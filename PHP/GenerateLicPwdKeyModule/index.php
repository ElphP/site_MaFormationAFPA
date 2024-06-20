<?php

if (isset($_GET['genHexa'])) {

    $hexRange = array_merge(range('0', '9'), range('A', 'F'));
    $reponseHexa = "";

    for ($i = 0; $i < $_GET['tailleHexa']; $i++) {
        for ($j = 0; $j < 2; $j++) {
            $reponseHexa .= $hexRange[rand(0, 15)];
        }
        if ($i != $_GET['tailleHexa'] - 1) {
            $reponseHexa .= "-";
        }
    }
}

if (isset($_GET['genLic'])) {
    $licRange = [];
    if (isset($_GET["num"])) {
        $numeros = range(0, 9);
        foreach ($numeros as $value) {
            $licRange[] = $value;
        }
    }
    if (isset($_GET["min"])) {
        $minuscules = range('a', 'z');
        foreach ($minuscules as $value) {
            $licRange[] = $value;
        }
    }
    if (isset($_GET["num"])) {
        $majuscules = range('A', 'Z');
        foreach ($majuscules as $value) {
            $licRange[] = $value;
        }
    };
    $reponseLic = "";
    for ($i = 0; $i < $_GET['nbrSeg']; $i++) {
        for ($j = 0; $j < $_GET['tailleSeg']; $j++) {
            $reponseLic .= $licRange[rand(0, count($licRange) - 1)];
        }
        if ($i != $_GET['nbrSeg'] - 1) {
            $reponseLic .= "-";
        }
    }
}
if (isset($_GET['genPwd'])) {
    $strPwd = "";
    if (isset($_GET["select"]) && !empty($_GET["select"])) {

        $arrayCaract = ["!", "#", "$", "%", "&",  "(", ")", "*", "+", ",", "-", ".", ":", ";", "=", "?", "@", "[", "/", "]", "^", "_", "{", "|", "}", "~"];
        switch ($_GET['select']) {
            case "select1":
                $strPwd  .= $arrayCaract[rand(0, count($arrayCaract) - 1)];
                break;
            case "select2":
                for ($i = 0; $i < 2; $i++) {
                    $strPwd  .= $arrayCaract[rand(0, count($arrayCaract) - 1)];
                }

                break;
            case "select3":
                for ($i = 0; $i < 3; $i++) {
                    $strPwd  .= $arrayCaract[rand(0, count($arrayCaract) - 1)];
                }
                break;
            case "select4":
                for ($i = 0; $i < 4; $i++) {
                    $strPwd  .= $arrayCaract[rand(0, count($arrayCaract) - 1)];
                }
                break;
            case 'default':
                echo "Erreur";
                break;
        }
    }
    $arrayAutres = [];


    if (isset($_GET["num"])) {
        $numeros = range(0, 9);

        foreach ($numeros as $value) {
            $arrayAutres[] = $value;
        }
    }
    if (isset($_GET["min"])) {
        $minuscules = range('a', 'z');

        foreach ($minuscules as $value) {
            $arrayAutres[] = $value;
        }
    }
    if (isset($_GET["maj"])) {
        $majuscules = range('A', 'Z');

        foreach ($majuscules as $value) {
            $arrayAutres[] = $value;
        }
    }
    shuffle($arrayAutres);
    if(count($arrayAutres)!=0)  {
        while (mb_strlen($strPwd) < $_GET["taillePwd"]) {   
            $strPwd .= $arrayAutres[rand(0, count($arrayAutres) - 1)];
    }
    }
    $reponsePwd = str_shuffle(str_shuffle($strPwd));
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module de Génération de Clés-Licenses-Password</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <h1 class="text-center p-3 ">Module de création de mots de passe ou de clés de license
    </h1>


    <div class="container ">
        <div class=" m-4">
            <h4 class="text-center">Choisissez votre type de code à générer:</h4>
            <div class="radio w-25 m-auto my-2">
                <input type="radio" name="choix" value="pwd" class="choix form-check-input" id="pwd"><label
                    class="form-check-label ps-3" for=" pwd">Mot de
                    passe</label><br>
                <input type="radio" name="choix" value="lic" class="choix form-check-input" id="lic"><label
                    class="form-check-label ps-3" for="lic">Clé de
                    license </label><br>
                <input type="radio" name="choix" value="hexa" class="choix form-check-input" id="hexa"><label
                    class="form-check-label ps-3" for=" hexa">Clé de
                    license au format hexadécimal</label><br>
            </div>


        </div>
        <!-- contenu -->
        <div id="contenuForm"></div>




        <div class="codeResult m-auto text-center  fs-2">
            <?php if (isset($reponseHexa)) {
                echo "Voici votre clé hexadécimale comportant " . $_GET["tailleHexa"] . " segments : <br><span class='text-primary'>" . $reponseHexa . "</span>";
            }  ?>
            <?php if (isset($reponseLic)) {
                echo "Voici votre clé de license comportant " . $_GET["nbrSeg"] . " segments comportants " .  $_GET["tailleSeg"] . " caractères : <br><span class='text-primary'>" . $reponseLic . "</span>";
            }  ?>
            <?php if (isset($reponsePwd)) {
                echo "Voici votre mot de passe comportant " . $_GET["taillePwd"] . " caractères : <br><span class='text-primary'>" . $reponsePwd . "</span>";
            }  ?>
        </div>

    </div>


    <script>
    // Récupération des boutons radios
    var radios = document.querySelectorAll('.choix');

    // Ajout d'un écouteur d'événements à chaque bouton radio
    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            // Vérification du bouton radio sélectionné
            if (this.checked) {
                // Récupération de la valeur du bouton radio sélectionné
                let choixForm = this.value;

                // Appel AJAX pour récupérer le contenu du script PHP sélectionné
                let xhr = new XMLHttpRequest();
                xhr.open('GET', "./" + choixForm + ".html", true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        document.querySelector(".codeResult").innerHTML = "";
                        document.getElementById('contenuForm').innerHTML = xhr
                            .responseText;
                        let script = document.getElementById('script').innerHTML;
                        // code qui permet d'activer le script...
                        const scriptFunction = new Function(script);
                        scriptFunction()

                    }
                };
                xhr.send();
            }
        });
    });
    </script>
</body>

</html>