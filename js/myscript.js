console.log("Ciao Cianuro... oggi si continua a giocare a CAMPO MINATO");
// .....................................................................................................RICHIAMO ELEMENTI DAL DOM
// .....................................................................................................
const grigliaElement = document.getElementById("griglia");
const playBtnElement = document.getElementById("play-button");
let level = document.getElementById("livello");
console.log(grigliaElement, playBtnElement, level);

// .....................................................................................................APERTURA addEventListener su BOTTONE PLAY
// .....................................................................................................
playBtnElement.addEventListener("click", function () {
  console.log("INIZIO GIOCO");

  // .....................................................................................................CICLO LE CELLE CON FOR PER CREARE LA GRIGLIA SUL DOM
  // ..............................................................................
  // RESETTO IL PLAY GROUND AD OGNI CLICK SUL PULSANTE PLAY
  grigliaElement.innerHTML = "";
  let celle = gridCellComposition(parseInt(level.value));
  let celle2 = celle ** 2;
  console.log(celle, celle2);
  for (let i = 0; i < celle2; i++) {
    let index = i + 1;
    console.log(index);
    let cellElement = document.createElement("div");
    cellElement.classList.add("cella");
    grigliaElement.append(cellElement);
    cellElement.style["width"] = `calc(100% / ${celle})`;
    cellElement.innerHTML = index;
    console.log(cellElement);

    // AGGIUNGO COMPORTAMENTO AL CLICK DELLA SINGOLA CELLA
    cellElement.addEventListener("click", function () {
      console.log("Hai cliccato sulla cella " + index);
      cellElement.classList.add("on-click");
    });
    // CHIUSURA CICLO FOR
  }
  // .....................................................................................................RESETTO LA CONSOLE PER INIZIO  UOVA PARTITA
  // .....................................................................................................
  // console.clear();
  // console.log("STAI INIZIANDO UNA NUOVA PARTITA DEL BONUS");
  // ...................................................................................................CHIUSURA addEventListener su BOTTONE PLAY
  // .....................................................................................................
});
// .....................................................................................................
// .....................................................................................................// .....................................................................................................CREO LE FUNZIONI
// .....................................................................................................
// .....................................................................................................FUNZION: GRID CELL COMPOSITIN IN BASE AI LIVELLI
// .....................................................................................................

function gridCellComposition(livello) {
  let gridCell;
  let gridSize;
  if (livello === 1) {
    gridSize = 10;
    gridCell = gridSize ** 2;
    console.log(level.value);
  } else if (livello === 2) {
    gridSize = 9;
    gridCell = gridSize ** 2;
    console.log(level.value);
  } else if (livello === 3) {
    gridSize = 7;
    gridCell = gridSize ** 2;
    console.log(level.value);
  }
  // let griCell = gridSize ** 2;
  return parseInt(gridSize);
}
// .....................................................................................................FUNZIONE: CREO POSIZIONE BOMBE
// .....................................................................................................
function bombPosition(max) {
  let bombe = [];
  let maxb;
  if (max === 1) {
    maxb = 10 ** 2;
  } else if (max === 2) {
    maxb = 9 ** 2;
  } else if (max === 3) {
    maxb = 7 ** 2;
  }

  while ((bombe.length = 16)) {
    let bomb = Math.floor(Math.random() * (parseInt(maxb) - 1 + 1)) + 1;
    console.log(bomb);
  }
  if (bombe.includes(bomb) === false) {
    bombe.push(bomb);
  }
  console.log(bombe.length, bombe);
  return parseInt(bombe);

  // console.log(bombPosition());
}
// .....................................................................................................FUNZIONE: CLICK SULLA CELLA
// .....................................................................................................

let casa = bombPosition(parseInt(level.value));
console.log(casa);
