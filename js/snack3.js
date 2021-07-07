/*
SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi
e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

/*
1- creare lista di nomi e di cognomi
2- generare casualmente un nome e cognome e aggiungerlo alla lista se non presente
3- ripetere la 2 finchè la lista non è piena (3 invitati)
4- stampare lista invitati
*/

// variabili
var result = document.getElementById("result");
var firstNames = ["Luca", "Marco", "Paolo", "Laura", "Giovanni", "Luigi", "Martina"];
var lastNames = ["Rossi", "Bianchi", "Verdi", "Neri", "Marroni", "Gialli"];
var firstName = "";
var lastName = "";
var fullName = "";
var list = [];

// genera nome e cognome random e riempe la lista finchè non ha 3 invitati
while (list.length < 3) {
    // genera nome e cognome random
    firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    fullName = firstName + " " + lastName;

    /*
    verifica se il nome generato non è presente nella lista,
    e in questo caso lo aggiunge. se è presente lo ignora
    */
    if (!list.includes(fullName)) {
        list.push(fullName);
    }
}

// stampa lista invitati
console.table(list);
result.innerHTML = list.join("<br>");