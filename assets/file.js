document.getElementById("generaGrigliaBtn").addEventListener("click", function() {
    let grigliaDiv = document.getElementById("griglia");
    grigliaDiv.innerHTML = "";


    let righe = 10;
    let colonne = 10;

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
