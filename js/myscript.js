console.log("Ciao Cianuro... oggi si continua a giocare a CAMPO MINATO");
// .....................................................................................................RICHIAMO ELEMENTI DAL DOM
// .....................................................................................................
const grigliaElement = document.getElementById("griglia");
const playBtnElement = document.getElementById("play-button");
let level = document.getElementById("livello");
console.log(grigliaElement, playBtnElement, level);

// .....................................................................................................IMPOSTO LE DIMENSIONI DELLA GRIGLIA
// .....................................................................................................
let gridSize = 10;
let gridCell = gridSize * gridSize;

// .....................................................................................................APERTURA addEventListener su BOTTONE PLAY
// .....................................................................................................
playBtnElement.addEventListener("click", function () {
  console.log("INIZIO GIOCO");
  // RESETTO IL PLAY GROUND AD OGNI CLICK SUL PULSANTE PLAY
  grigliaElement.innerHTML = "";

  // .....................................................................................................CICLO LE CELLE CON FOR PER CREARE LA GRIGLIA SUL DOM
  // ..............................................................................
  // let celle = gridCellComposition();
  for (let i = 0; i < gridCell; i++) {
    let index = i + 1;
    console.log(index);
    let cellElement = document.createElement("div");
    cellElement.classList.add("cella");
    grigliaElement.append(cellElement);
    cellElement.style["width"] = `calc(100% / ${gridSize})`;
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

// .....................................................................................................FUNZIONI
// .....................................................................................................

// function gridCellComposition() {
//   let gridCell = 0;
//   let gridSize;
//   if (level.value === 1) {
//     gridSize = 10;
//     griCell = gridSize ** 2;
//     console.log(level.value);
//   } else if (level.value === 2) {
//     gridSize = 9;
//     griCell = gridSize ** 2;
//     console.log(level.value);
//   } else if (level.value === 3) {
//     gridSize = 7;
//     griCell = gridSize ** 2;
//     console.log(level.value);
//   }
//   // let griCell = gridSize ** 2;
//   return griCell;
// }
// .....................................................................................................CREO GRIGLIA BOMBE
// .....................................................................................................
let bombe = [];
// while (Bombe.length <= 16) {
let bomb = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(bomb);
if (bombe.includes(bomb) === false) {
  bombe.push(bomb);
}
console.log(bombe);
