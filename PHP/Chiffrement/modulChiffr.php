<?php
$code = 'Message crypté: ';
if (isset($_POST["chiffr"])) {
    if (!empty($_POST["key"]) && !empty($_POST["mess"])) {
        // $mess = str_replace(' ', '', $_POST["mess"]);
        // $mess = strtoupper($mess);

        // $count = mb_strlen($mess);
        // $key = strtoupper($_POST["key"]);


        // while ($count > 0) {
        //     for ($i = 0; $i < mb_strlen($key); $i++) {

        //         if ($count == 0) {
        //             continue;
        //         } else {
        //             global $strKey;
        //             $strKey .= $key[$i];
        //             $count--;
        //         }
        //     }
        // }
        // $alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        // for ($i = 0; $i < mb_strlen($mess); $i++) {
        //     global $code;


        //     $code .= $alphabet[(array_search($mess[$i], $alphabet) + array_search($strKey[$i], $alphabet)) % 26];
        // }
        // echo "Message codé: " . $code;
        $nbrPos=[];
        $mess= (strtoupper($_POST["mess"]));
        // ici je chiffre la position des blancs avec 1 chiffre aléatoire (à retirer + 1 calcul pour chiffrer le delta (nombre de lettre du mot suivant) de la position)
        $position=0;
        while(strpos($mess," ")){
            $chiffr1= rand(0,9);
            
            $delta= strpos($mess, " ") - $position;
            
            $position += $delta;
            
            $chiffrPos= (string)($chiffr1).(string)($delta*5+12);
            
            array_push($nbrPos, $chiffrPos);
        
            $mess= substr($mess,0,strpos($mess," ")).substr($mess,strpos($mess," ")+1);
        }
        $chiffr1= rand(0,9);          
        array_push($nbrPos,(string)($chiffr1).(string)((strlen($mess)-$position)*5+12));
        // var_dump($nbrPos);
        // $mess = strtoupper(str_replace(' ', '', $_POST["mess"]));
        $key = strtoupper($_POST["key"]);
        $keyRepeated = strtoupper(str_repeat($key, ceil(strlen($mess) / strlen($key))));
        $alphabet = range('A', 'Z');

        $code.='<br>';
        for ($i = 0; $i < strlen($mess); $i++) {
            $messIndex = array_search($mess[$i], $alphabet);
            $keyIndex = array_search($keyRepeated[$i], $alphabet);
            $code .= $alphabet[($messIndex + $keyIndex) % 26];
        }
        for ($i=0; $i<count($nbrPos)  ; $i++) { 
            $code.=$nbrPos[$i];
        }
    }
}


?>
<div class="p-3 w-50 mx-auto my-3 w-50 border border-2 ">
    <h1 class="text-center">Module de chiffrement</h1>
    <div class="container text-center ">
        <form action="" method="post" class="d-flex flex-column ">
            <div class="my-2  ">
                <label for=" key" class="text-align-left col-12 col-sm-3">Clé de chiffrement</label>
                <input type="text" name="key" id="key" class="col-12 col-sm-3">
            </div>
            <div class="my-2  d-flex align-content-start justify-content-center">
                <label for="mess" class="col-12 col-sm-3">Message à coder</label>
                <textarea type="text" name="mess" id="mess" class="col-12 col-sm-6"></textarea>
            </div>
            <button type="submit" class="btn btn-primary col-4 m-auto " name="chiffr">Coder le message</button>

        </form>
        <div class="messCode p-3"> <?= $code=='Message crypté: ' ? ' ' : $code ?></div>
    </div>
</div>