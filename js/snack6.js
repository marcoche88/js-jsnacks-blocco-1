// SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio
// con proprietà "nome", "città" "punti";
// Stampiamo le squadre in pagina, all'interno di una tabella HTML

// variabili
var tableTeams = document.getElementById("table-teams");
var content = "";

// dichiarazione array di oggetti squadre
var teams = [
    {
        name: "Milan",
        city: "Milano",
        points: 32,
    },
    {
        name: "Lazio",
        city: "Roma",
        points: 25,
    },
    {
        name: "Fiorentina",
        city: "Firenze",
        points: 30,
    }
];

// per ogni squadra stampare tutte le proprietà in una tabella
for (var i = 0; i < teams.length; i++) {
    var currentTeam = teams[i];

    content += "<tr>";
    for (var key in currentTeam) {
        content += "<td>" + currentTeam[key] + "</td>";
    }
    content += "</tr>";

}

tableTeams.innerHTML = content;