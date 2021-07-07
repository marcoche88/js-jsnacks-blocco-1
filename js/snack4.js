/*
SNACK 4: Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

/*
1- creare due liste con lunghezza differente
2- finchè il numero di elementi delle due liste è differente:
   generare numero random, vedere quale lista è la più corta,
   aggiungere numero randomo alla lista più corta.
3- stampare le due liste di uguale lunghezza
*/

// variabili
var result = document.getElementById("result");
var num1 = [2, 4, 6, 53, 23, 34, 87, 99];
var num2 = [56, 5, 1];
var randomNum = 0;

/*
genera numeri random finchè la lunghezza delle due liste è differente,
e aggiunge i numeri random alla lista più corta
*/
while (num1.length !== num2.length) {
    randomNum = Math.floor(Math.random() * 100) + 1;

    if (num1.length < num2.length) {
        // num1 più corta di num2. numero random aggiunto a num1
        num1.push(randomNum);
    } else {
        // num2 più corta di num1. numero random aggiunto a num2
        num2.push(randomNum);
    }
}

// stampa le due liste di uguali lunghezza
console.table(num1);
console.table(num2);
result.innerHTML = "Lista 1: " + num1.join(", ") + "<br>" + "Lista 2: " + num2.join(", ");