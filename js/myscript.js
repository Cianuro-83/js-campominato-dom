console.log("Ciao Cianuro... oggi si continua a giocare a CAMPO MINATO");
//********************
// RICHIAMO ELEMENTI DAL DOM
//******************** */

const grigliaElement = document.getElementById("griglia");
const playBtnElement = document.getElementById("play-button");
let level = document.getElementById("livello");
console.log(grigliaElement, playBtnElement, level);

//********************
// APERTURA addEventListener su BOTTONE PLAY
//******************** */

playBtnElement.addEventListener("click", function () {
  console.log("INIZIO GIOCO");

  //********************
  // CICLO LE CELLE CON FOR PER CREARE LA GRIGLIA SUL DOM
  //******************** */

  // RESETTO IL PLAY GROUND AD OGNI CLICK SUL PULSANTE PLAY
  grigliaElement.innerHTML = "";

  // COMPONGO LA GRIGLIA DI GIOCO
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

    // INVOCO LA FUNZIONE DELLE BOMBE
    let lose = bombPosition(parseInt(level.value));
    console.log(lose);
    // AGGIUNGO COMPORTAMENTO AL CLICK DELLA SINGOLA CELLA

    cellElement.addEventListener("click", function () {
      for (let i = 0; i < lose.length; i++) {
        if (index === parseInt(lose[i])) {
          cellElement.classList.add("bomb");
          cellElement.innerHTML = "0";
        } else {
          cellElement.innerHTML = "+1";
          cellElement.classList.add("on-click");
        }
      }
      // console.log("Hai cliccato sulla cella " + index);
      // console.log(index);
      // cellElement.classList.add("bomb");
      // cellElement.innerHTML = "+1";
    });

    // CHIUSURA CICLO FOR
  }
  //********************
  // RESETTO LA CONSOLE PER INIZIO  NUOVA PARTITA
  //******************** */

  // console.clear();
  // console.log("STAI INIZIANDO UNA NUOVA PARTITA");

  //********************
  // CHIUSURA addEventListener su BOTTONE PLAY
  //********************
});
//---------------------------------------------------------------------------
// INIZIALIZZO LE FUNZIONI
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
// FUNZIONE: GRID CELL COMPOSITIN IN BASE AI LIVELLI (TESTATA E FUNZIONANTE)
//---------------------------------------------------------------------------

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

  return parseInt(gridSize);
  //..........................................................
  //  COME RICHIAMARE LA FUNZIONE:
  // let nomeVariabile = bombPosition(parseInt(level.value));
  // Dove in questo caso level.value sta per il numero di caselle che voglio su ogni riga e viene deciso da una select presente in html
  // console.log(nomeVariabile);
  //..........................................................
}

//---------------------------------------------------------------------------
// INIZIALIZZO FUNZIONE: GRID CELL COMPOSITIN IN BASE AI LIVELLI (TESTATA E FUNZIONANTE)
//---------------------------------------------------------------------------

function bombPosition(livello) {
  let max;
  if (livello === 1) {
    max = 100;
  } else if (livello === 2) {
    max = 81;
  } else if (livello === 3) {
    max = 49;
  }

  let bombe = [];

  while (bombe.length < 16) {
    let bomb = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    console.log(bomb);
    if (bombe.includes(bomb) === false) {
      bombe.push(bomb);
    }
    console.log(bombe.length, bombe);
  }
  console.log(bombe);
  return bombe;

  //..........................................................
  //  COME RICHIAMARE LA FUNZIONE:
  // let nomeVariabile = gridCellComposition(parseInt(level.value));
  //  Dove in questo caso level.value sta per il numero max di composizione del range... il valore minimo è autosettato ad 1
  // console.log(nomeVariabile);
  //..........................................................
}
