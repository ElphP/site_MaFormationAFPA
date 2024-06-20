<?php
$result = '';
if (isset($_POST["dechiffr"])) {
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


        $letters = preg_replace('/[^a-zA-Z]/', '',$_POST["mess"]);
        $numbers = (preg_replace('/[^0-9]/', '',$_POST["mess"]));
        
        $key = strtoupper($_POST["key"]);
        $keyRepeated = strtoupper(str_repeat($key, ceil(strlen($letters) / strlen($key))));
        $alphabet = range('A', 'Z');

         
        for ($i = 0; $i < strlen($letters); $i++) {
            $messIndex = array_search($letters[$i], $alphabet);
            $keyIndex = array_search($keyRepeated[$i], $alphabet);
            $result .= $alphabet[($messIndex - $keyIndex + 26) % 26];
        }

       $position=0;
       $longueurChaine= strlen($numbers);
        for ($i= 0; $i <$longueurChaine;  $i=$i+3) { 
           
            $chiffrSpace= substr($numbers,0, 3);
            
            $chiffrSpace= substr($chiffrSpace,-2);
            $delta= ((int)$chiffrSpace- 12)/5;
            $position+= $delta;
            
            $result= substr_replace($result," ", $position,0);
            
            $numbers= substr($numbers,3);
            
            $position++;

        }
        
        $result = 'Message en clair: <br>'.$result;
    }
}


?>
<div class="p-3 m-2 w-50 m-auto w-50 border border-2">

    <h1 class="text-center">Module de déchiffrement</h1>
    <div class="container text-center ">
        <form action="" method="post" class="d-flex flex-column ">
            <div class="my-2  ">
                <label for=" key" class="text-align-left col-12 col-sm-3">Clé de chiffrement</label>
                <input type="text" name="key" id="key" class="col-12 col-sm-3">
            </div>
            <div class="my-2  d-flex align-content-start justify-content-center">
                <label for="mess" class="col-12 col-sm-3">Message à décoder</label>
                <textarea type="text" name="mess" id="mess" class="col-12 col-sm-6"></textarea>
            </div>
            <button type="submit" class="btn btn-primary col-4 m-auto " name="dechiffr">Décoder le message</button>

        </form>
        <div class="messCode p-3"> <?= (($result == '') ? '' : $result) ?></div>
    </div>
</div>