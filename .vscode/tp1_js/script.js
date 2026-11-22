

console.log("Bonjour");
console.log(2 + 3);

let nom = prompt("Donner votre prénom :");
alert("Bonjour " + nom);

let age = Number(prompt("Donner votre âge :"));
alert("Dans 5 ans tu auras " + (age + 5) + " ans");


const notes = [12, 15, 9, 17, 8];

let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}

let moy = somme / notes.length;
console.log("Moyenne :", moy);

if (moy >= 16) {
    console.log("Mention : Très bien");
}
else if (moy >= 14) {
    console.log("Mention : Bien");
}
else if (moy >= 10) {
    console.log("Mention : Passable");
}
else {
    console.log("Mention : Insuffisant");
}

let nb = 0;

for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        nb++;
    }
}

console.log("Notes >= 10 :", nb);

let max = notes[0];
let min = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > max) {
        max = notes[i];
    }

    if (notes[i] < min) {
        min = notes[i];
    }
}

console.log("Max :", max, "| Min :", min);


function moyenne(tableau) {
    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
        somme = somme + tableau[i];
    }

    return somme / tableau.length;
}


function mention(note) {
    if (note >= 16) {
        return "Très bien";
    }
    else if (note >= 14) {
        return "Bien";
    }
    else if (note >= 10) {
        return "Passable";
    }
    else {
        return "Insuffisant";
    }
}



function compterSuperieures(tableau, seuil) {
    let nb = 0;

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] >= seuil) {
            nb++;
        }
    }

    return nb;
}



function maxNote(tableau) {
    let max = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }

    return max;
}

function minNote(tableau) {
    let min = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }

    return min;
}



function estAdmis(note) {
    return note >= 10;
}


console.log(moyenne([12, 15, 9]));
console.log(moyenne([10, 14, 16]));

console.log(mention(15.5));
console.log(mention(8));
console.log(mention(17));

console.log(compterSuperieures([12, 5, 18], 10));
console.log(compterSuperieures([8, 9, 11, 15], 10));
console.log(compterSuperieures([5, 6, 7], 10));

console.log(maxNote([12, 15, 9]));
console.log(minNote([12, 15, 9]));

console.log(estAdmis(12));
console.log(estAdmis(8));


const estAdmisFleche = note => note >= 10;

console.log(estAdmisFleche(12));
console.log(estAdmisFleche(8));


let tab = [];

for (let i = 0; i < 5; i++) {
    let note = Number(prompt("Donner une note :"));
    tab.push(note);
}

console.log("Moyenne :", moyenne(tab).toFixed(2));