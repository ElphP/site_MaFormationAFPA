let monTbaleauJour = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
];
let monTableauNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let monTableauMois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
];

let date = new Date();

document.write(
    "Date du jour en français: " +
        monTbaleauJour[date.getDay()] +
        " " +
        monTableauNumber[date.getDate() - 1] +
        " " +
        monTableauMois[date.getMonth()] +
        " " +
        date.getFullYear()
);

console.log("Date du jour en français: "+ monTbaleauJour[date.getDay()] + " " + monTableauNumber[date.getDate()-1] + " " + monTableauMois[date.getMonth()] + " " + date.getFullYear());
