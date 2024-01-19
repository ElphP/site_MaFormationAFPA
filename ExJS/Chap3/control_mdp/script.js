"use strict"

document.getElementById("pwd").addEventListener("keyup", ()=>   {
    let entree= document.getElementById("pwd").value;
    
    testPwd(entree);
    console.log(entree);
    
})  



function testPwd (val){
    let mess = document.getElementById("message");
        let compteur=0;
        //test au moins 1 lettre ET 1 chiffre
        let regex1 = /(?=.*\d)(?=.*[a-zA-Z]).+/;
        if(regex1.test(val))  {
            compteur++;
        }
// test Maj
        let regex2 = /[A-Z]+/;
        if(regex2.test(val))  {
            compteur++;
        }
// test min
        let regex3 = /[a-z]+/;
        if(regex3.test(val))  {
            compteur++;
        }
        // caractères spéciaux
        let regex4 = /[$&+,:;=?@#|'<>.^*()%!-]/;
        if(regex4.test(val)) {
            compteur++;
        }

        if(val.length<8)  {
            compteur--;
        }

        console.log(compteur);

        switch(compteur)  {
            case 0:
                mess.innerHTML= `<span style="color: red; background-color: white" class="p-2 rounded">Dangereux</span>`;
            break;
            case 1:
                mess.innerHTML= `<span style="color: red; background-color: white" class="p-2 rounded">Dangereux</span>`;
            break;
            case 2:
                mess.innerHTML= `<span style="color: #ffc40c; background-color: white" class="p-2 rounded">Moyen</span>`;
            break;
            case 3:
                mess.innerHTML= `<span style="color: greenyellow; background-color: white" class="p-2 rounded">Sécurisé</span>`;
            break;
            case 4:
                mess.innerHTML= `<span style="color: green; background-color: white" class="p-2 rounded">Très sécurisé</span>`;
            break;
            default:
                mess.innerHTML= `Error`
        }
    }

    