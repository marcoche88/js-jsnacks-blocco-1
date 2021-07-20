// SNACK: /
// 1. Creare un oggetto palla che abbia le seguenti proprietà.
//   Nome = palla
//   Peso = 10
// 2. stampare la palla in pagina
// 3. Attraverso un input dare la possibilità all’utente di modificare il peso
// della palla, poi stampare la palla con il peso modificato
// BONUS: stampare la palla tramite una funzione

// variabili
var displayBall = document.getElementById("result-snack5");
var inputWeight = document.getElementById("weight");
var button = document.getElementById("ball-button");

// dichiarazione oggetto palla
var ball = {
    nome: "Palla",
    peso: 10,
};

// stampa oggetto palla con funzione
printObject(ball, displayBall);
console.log(ball);

// al click del bottone viene aggiornato il valore della proprietà peso di palla
button.addEventListener("click", function () {
    // prendere valore dall'input 
    var inputWeightValue = inputWeight.value;

    // validazione numero inserito dall'utente
    if (!inputWeightValue || isNaN(inputWeightValue) || inputWeightValue.trim() === "" || inputWeightValue < 1) {
        alert("Valore non valido");
        return;
    }

    // aggiornare il valore della proprietà peso dell'oggetto palla
    ball.peso = parseInt(inputWeightValue);

    // stampa oggetto palla aggiornato
    printObject(ball, displayBall);
    console.log(ball);
})


// FUNZIONI
function printObject(obj, element) {
    var content = "";
    for (var key in obj) {
        content += key + ": " + obj[key] + "<br>";
    }
    element.innerHTML = content;
}