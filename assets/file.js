document.getElementById("generaGrigliaBtn").addEventListener("click", function() {
    let grigliaDiv = document.getElementById("griglia");
    grigliaDiv.innerHTML = "";


    let righe = 10;
    let colonne = 10;
    let bombe = [];
    let punteggio = 0;
    let gameOver = false;

    for (let i = 1; i <= righe; i++) {
      for (let j = 1; j <= colonne; j++) {
        let cella = document.createElement("div");
        cella.className = "cella";
        cella.innerText = (i - 1) * colonne + j;

        cella.addEventListener("click", function() {
          this.style.backgroundColor = "blue";
          console.log("Cella cliccata: " + this.innerText);
        });

        grigliaDiv.appendChild(cella);
      }
      grigliaDiv.appendChild(document.createElement("br"));
    }
  });

  cella.addEventListener("click", function() {
    if (!gameOver) {
      let numeroCella = parseInt(this.innerText);
      if (bombe.includes(numeroCella)) {
        this.style.backgroundColor = "red";
        gameOver = true;
        console.log("Hai calpestato una bomba Partita finita. Punteggio: " + punteggio);
      } else {
        this.style.backgroundColor = "blue";
        punteggio++;
        if (punteggio === numeroCelle - numeroBombe) {
          gameOver = true;
          console.log("Hai trovato tutte le celle senza bomba partita terminata. Punteggio: " + punteggio);
        }
      }
    }
  });
