
document.getElementById("generaGrigliaBtn").addEventListener("click", function() {
  let grigliaDiv = document.getElementById("griglia");
  grigliaDiv.innerHTML = "";

  let righe = 10;
  let colonne = 10;
  let numeroCelle = righe * colonne;
  let numeroBombe = 16;
  let bombe = [];
  let punteggio = 0;
  let gameOver = false;

  for (let i = 1; i <= righe; i++) {
    for (let j = 1; j <= colonne; j++) {
      let cella = document.createElement("div");
      cella.className = "cella";
      cella.innerText = (i - 1) * colonne + j;

      cella.addEventListener("click", function() {
        if (!gameOver) {
          let numeroCella = parseInt(this.innerText);
          if (bombe.includes(numeroCella)) {
            this.style.backgroundColor = "red";
            gameOver = true;
            console.log("Hai calpestato una bomba! Partita terminata. Punteggio: " + punteggio);
          } else {
            this.style.backgroundColor = "blue";
            punteggio++;
            if (punteggio === numeroCelle - numeroBombe) {
              gameOver = true;
              console.log("Hai rivelato tutte le celle non bomba! Partita terminata. Punteggio: " + punteggio);
            }
          }
        }
      });

      grigliaDiv.appendChild(cella);
    }
    grigliaDiv.appendChild(document.createElement("br"));
  }

  generaBombe();

  function generaBombe() {
    bombe = [];
    while (bombe.length < numeroBombe) {
      let numeroCasuale = Math.floor(Math.random() * numeroCelle) + 1;
      if (!bombe.includes(numeroCasuale)) {
        bombe.push(numeroCasuale);
      }
    }
  }
});
