/*
SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

/*
1- chiedere un nuovo numero per 5 volte
2- sommare tutti i numeri inseriti
3- stampare la somma
*/

// CICLO FOR

// variabili
var result = document.getElementById("result-snack1");
var userNumber;
var sumFor = 0;

// chiedere 5 numeri e sommarli
for (var i = 0; i < 5; i++) {
    do {
        userNumber = parseInt(prompt("Inserisci un numero"));
    } while (isNaN(userNumber));

    sumFor += userNumber;
}

// stampa somma numeri
console.log("La somma con il ciclo FOR è: " + sumFor);


// CICLO WHILE

// variabili
var sumWhile = 0;

// chiedere 5 numeri e sommarli
var i = 0;
while (i < 5) {
    do {
        userNumber = parseInt(prompt("Inserisci un numero"));
    } while (isNaN(userNumber));

    sumWhile += userNumber;
    i++;
}

// stampa somma numeri
console.log("La somma con il ciclo WHILE è: " + sumWhile);
result.innerText = "La somma con il ciclo FOR è: " + sumFor + " e la somma con il ciclo WHILE è: " + sumWhile;