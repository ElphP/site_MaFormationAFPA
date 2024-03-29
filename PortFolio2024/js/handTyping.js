// création d'une table de valeur aléatoire pour le delay entre lettres
let tab = [];
for (let i = 0; i < 55; i++) {
    tab[i] = Math.floor(Math.random() * 120 + 50);
}
// temps "d'arrêts"
tab[6] = 580;
tab[21] = 550;
tab[29] = 320;
tab[37] = 920;
tab[55] = 850;

let i = 0;
const text1 = "Salut, c'est L-FÈJ.P,";
const text2 = "je suis";
const text3 = " musicien";
const text4 = " développeur web!";

function type() {
    var cond2 = text1.length + text2.length;
    var cond3 = text1.length + text2.length + text3.length;

    if (i < text1.length) {
        document.getElementById("animText1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(type, tab[i]);

        if (i == text1.length) {
            $("#animText1").removeClass("element");
            $("#animText2").addClass("element");
        }
    } else if (i < cond2) {
        document.getElementById("animText2").innerHTML += text2.charAt(
            i - text1.length
        );
        i++;
        setTimeout(type, tab[i]);
        if (i == cond2) {
            $("#animText2").removeClass("element");
            $("#animText3").addClass("element");
        }
    } else if (i < cond3) {
        document.getElementById("animText3").innerHTML += text3.charAt(
            i - (text1.length + text2.length)
        );
        i++;
        setTimeout(type, tab[i]);
    } else if (i == cond3) {
        document.getElementById("animText3").style.textDecoration =
            "line-through";
        setTimeout(type, 1200);
        i++;
    } else if (i == cond3 + 1) {
        setTimeout(reset, 400);

        setTimeout(type, 550);
        i++;
    } else if (i < cond3 + text4.length + 2) {
        document.getElementById("animText3").innerHTML += text4.charAt(
            i - (text1.length + text2.length + text3.length + 2)
        );
        i++;
        setTimeout(type, tab[i]);
    }
    if (i == cond3 + text4.length + 2) {
        setTimeout(() => $("#animText3").removeClass("element"), 3000);
    }
}

function reset() {
    document.getElementById("animText3").innerHTML = "";
    document.getElementById("animText3").style.textDecoration = "none";
    document.getElementById("animText3").style.color = "#FF532B";
}


export{ type };