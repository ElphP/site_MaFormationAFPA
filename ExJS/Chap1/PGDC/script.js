let a= 0;
let A= 0;
let b= 0;
let B= 0;
let rest= 0;
let repBoucle="";


alert("Ce programme va vous aider à trouver le Plus Grand Diviseur Commun de 2 nombres A et B. ");
do{
   

    do{
        a= Number(prompt("Quel est votre nombre A?"));
        
        if(!Number.isInteger(a)) {
            alert('Votre nombre doit être un nombre...et un nombre entier!!')
        }
    }
    while(!Number.isInteger(a))
    
    A= a;
    
    do{
        b= Number(prompt("Quel est votre nombre B?"));
        
        if(!Number.isInteger(b) || b===0) {
            alert('Votre nombre doit être un nombre... un nombre entier et différent de "0" !!')
        }
    }
    while(!Number.isInteger(b) || b===0)
    
    B= b;

    while((a%b)!=0)
    {
        rest= a%b;
        a=b;
        b=rest;
    }
    alert(`Après calcul, l\'ordinateur peut vous dire que le Plus Grand Diviseur Commun des nombres ${A} et ${B} est ${b}. `);

    do{
        repBoucle= prompt('Voulez-vous rechercher un nouveau PGDC? "O" ou "N"');
        if(repBoucle!=="O" && repBoucle!=="N")  {
            alert('La réponse doit être "O" ou "N" exclusivement!!')
    }
    }
    while(repBoucle!=="O" && repBoucle!=="N")
    

}
while(repBoucle!=="N")