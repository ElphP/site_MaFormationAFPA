<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application de chiffrement</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>
</head>

<body>
    <h1 class="text-center p-3">Code Vigenère</h1>


    <h2 class="text-center p-3"> Modules de chiffrement & déchiffrement</h2>
    <p class="p-5 w-50 m-auto">Le chiffre de Vigenère a été inventé par le cryptologue français Blaise de
        Vigenère au XVIe
        siècle.
        Il est
        souvent considéré comme l'un des premiers exemples de chiffrement par substitution polyalphabétique.
        L'algorithme a été publié dans son livre "Traicté des Chiffres ou Secrètes Manières d'Escripture" en 1586.
        <br>

        Au moment de son invention, le chiffre de Vigenère était considéré comme inviolable et a été utilisé par de
        nombreux gouvernements et diplomates pour protéger leurs communications confidentielles. Sa méthode de
        chiffrement polyalphabétique complexe a rendu sa cryptanalyse difficile à l'époque, même pour les
        cryptanalystes
        les plus compétents. <br>

        Cependant, au XIXe siècle, le cryptanalyste allemand Friedrich Kasiski a développé une méthode pour casser
        le
        chiffre de Vigenère en utilisant des fréquences de lettres et des techniques de recherche de répétitions de
        motifs. Cette percée a affaibli la sécurité du chiffre de Vigenère et a contribué à son déclin en tant que
        méthode de chiffrement sûre. <br><br>
        <strong>Mise en garde: </strong>
        De nos jours, le chiffre de Vigenère est principalement étudié à des fins éducatives et historiques pour
        illustrer les principes de base de la cryptographie... Ce chiffrement n'est plus sûr! <br><br>
        Bien qu'il ne soit plus utilisé pour sécuriser les
        communications dans les contextes modernes, son invention a joué un rôle important dans le développement
        ultérieur de la cryptographie et a ouvert la voie à des techniques plus avancées de chiffrement et de
        cryptanalyse.
    </p>
    <?php include_once('modulChiffr.php')  ?>
    <?php include_once('modulDechiffr.php')  ?>

</body>

</html>