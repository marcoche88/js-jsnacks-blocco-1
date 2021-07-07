/*
SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

/*
1- inserire un numero
2- verificare se il numero è pari o dispari
3- se è pari stampare numero
4- se dispari stampare numero + 1
*/

// variabili
var result = document.getElementById("result");
var num;

// validazione input, fino a che il valore inserito non è un numero
do {
    num = parseInt(prompt("Inserisci un numero"));
} while (isNaN(num));

// verifica se il numero è pari o dispari
if (num % 2 === 0) {
    // pari: stampa numero
    console.log(num);
    result.innerText = "Il numero inserito è pari = " + num;
} else {
    // dispari: stampa numero + 1
    console.log(num + 1);
    result.innerText = "Il numero inserito è dispari (numero + 1) = " + (num + 1);
}
