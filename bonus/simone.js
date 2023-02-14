console.log("PROVA");
//********************
// RICHIAMO ELEMENTI DAL DOM E CREAZIONE VARIABILI
//******************** */

const grigliaElement = document.getElementById("griglia");
const playBtnElement = document.getElementById("play-button");
let level = document.getElementById("livello");
let cellElement;
let celle = [];
console.log(celle);
let prova = document.getElementById("prova");
let counterElement = document.getElementById("counter");

let gameOverElement = document.getElementById("end-game");
console.log(grigliaElement, playBtnElement, level, gameOverElement);
let counter = 0;
//********************
// APERTURA addEventListener su BOTTONE PLAY
//******************** */

playBtnElement.addEventListener("click", function () {
  grigliaElement.innerHTML = "";
  counterElement.innerHTML = "YOUR SCORE IS " + 0;
  gameOverElement.classList.add("d-none");
  console.log("INIZIO GIOCO");

  let gridCell;
  let gridSize;
  if (parseInt(level.value) === 1) {
    gridSize = 10;
    gridCell = gridSize ** 2;
    console.log(level.value);
  } else if (parseInt(level.value) === 2) {
    gridSize = 9;
    gridCell = gridSize ** 2;
    console.log(level.value);
  } else if (parseInt(level.value) === 3) {
    gridSize = 7;
  }

  let playGround = parseInt(gridSize);
  let celle2 = playGround ** 2;

  // BOMBE
  let max;
  if (parseInt(level.value) === 1) {
    max = 100;
  } else if (parseInt(level.value) === 2) {
    max = 81;
  } else if (parseInt(level.value) === 3) {
    max = 49;
  }

  let bombe = [];

  while (bombe.length < 16) {
    let bomb = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    // console.log(bomb);
    if (bombe.includes(bomb) === false) {
      bombe.push(bomb);
    }
  }
  bombe.fill("bomb");
  // return bombe;

  // array altri numeri
  let num;
  if (parseInt(level.value) === 1) {
    num = 100;
  } else if (parseInt(level.value) === 2) {
    num = 81;
  } else if (parseInt(level.value) === 3) {
    num = 49;
  }

  let simone = [];

  while (simone.length < num - 16) {
    let bomb = Math.floor(Math.random() * (num - 1 + 1)) + 1;

    simone.push(bomb);
  }
  simone.fill("on-click");

  // unisco gli array

  let unioneArray = [...bombe, ...simone];
  console.log(unioneArray);

  // mischio l'array
  let casualBomb = unioneArray.sort(function () {
    return Math.random() - 0.5;
  });
  console.log(casualBomb);

  //********************
  // CICLO LE CELLE CON FOR PER CREARE LA GRIGLIA SUL DOM
  //******************** */
  for (let i = 0; i < celle2; i++) {
    let index = i + 1;
    let cellElement = document.createElement("div");
    cellElement.setAttribute("id", index);
    cellElement.classList.add(casualBomb[i]);
    celle.push(cellElement);
    cellElement.classList.add("cella");
    grigliaElement.append(cellElement);
    cellElement.style["width"] = `calc(100% / ${playGround})`;
    cellElement.innerHTML = index;
    //********************
    // EVENT LISTENER SULLE CELLE
    //******************** */
    cellElement.addEventListener("click", function (event) {
      click(cellElement);
      // CHIUSURA EVENT LISTENER SULLE CELLE
    });
    // CHIUSURA CICLO FOR PER CREARE LA GRIGLIA
  }

  // ⁄chiusura event listener Play Button
});

//---------------------------------------------------------------------------
// FUNZIONE: COMPOPRTAMENTO AL CLICK SULLA CELLA (TESTATA E FUNZIONANTE)
//---------------------------------------------------------------------------
function click(cellElement) {
  if (cellElement.classList.contains("bomb")) {
    console.log("GAME OVER... SEI MORTO ED I TUOI RESTI SPARSI NEL WEB");
    cellElement.classList.add("explosion");
    setTimeout(function () {
      cellElement.classList.add("explosion");
      grigliaElement.innerHTML = "";
      gameOverElement.classList.remove("d-none");
    }, 1000);
  } else if (cellElement.classList.contains("on-click")) {
    counter++;
    counterElement.innerHTML = "YOUR SCORE IS= " + counter;
    cellElement.classList.add("alive");
  }

  // fine della funzione COMPOPRTAMENTO AL CLICK SULLA CELLA
}
