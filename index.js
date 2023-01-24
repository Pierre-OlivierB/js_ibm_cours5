// console.log("test");
//!Tirage au sort
//TODO:
//*function(){add name in array from prompt, onclick btn}
//*function(array){return random(winner), on click btn display winner}

//*Add Name
// var name = prompt("Taper un nom : ");
var players = new Array();

const addName = document.getElementById("addName");
// console.log(addName);

function add_Name() {
  var name = prompt("Taper un nom : ");
  players.push(name);
  var choix = prompt(
    "Voulez-vous entrer un autre nom ? réponse possible : yes / no, default = no"
  );
  while (choix === "yes") {
    name = prompt("Taper un autre nom : ");
    players.push(name);
    choix = prompt(
      "Voulez-vous entrer un autre nom ? réponse possible : yes / no, default = no"
    );
  }

  return players;
}
// console.log(players);

// addName.addEventListener("click", add_Name);
//*Random winner
var winner = "";

function theWinnerIs() {
  let random = Math.random() * players.length;

  return console.log("The winner is : " + players[Math.floor(random)]);
}
const randomWinner = document.getElementById("random-winner");
// console.log(randomWinner);
// randomWinner.addEventListener("click", theWinnerIs);
//!-----------------------------------------------------------------
//!Multi
//TODO: display n*n = n**2
//*Part 1
const addNum = document.getElementById("add-num");
const results = document.getElementById("results");
const rowTarget = document.getElementById("row-target");
// console.log(rowTarget);
// console.log(results);
// console.log(addNum);
var result = new Array();

function calcNum() {
  // let flag = true;
  while (!Number.isInteger(parseFloat(number))) {
    var number = prompt("Donnez un nombre entier : ");
    if (!Number.isInteger(parseFloat(number))) {
      alert("Le nombre doit être un entier, veuillez recommencer.");
    }
  }
  let numberTwo;
  let multNum = 0;
  // console.log(number);
  if (Number.isInteger(parseFloat(number))) {
    while (!Number.isInteger(parseFloat(numberTwo))) {
      numberTwo = prompt("Donnez un autre nombre : ");
      if (!Number.isInteger(parseFloat(numberTwo))) {
        alert("Le nombre doit être un entier, veuillez recommencer.");
      }
    }
    // console.log(numberTwo);
    multNum = parseInt(number) * parseInt(numberTwo);
    result.push(parseInt(number), parseInt(numberTwo), multNum);
  }
  let newCalc = rowTarget.insertRow();
  let firstCell = newCalc.insertCell(0);
  let secCell = newCalc.insertCell(1);
  let thirdCell = newCalc.insertCell(2);
  let firstContent = document.createTextNode(number);
  let secContent = document.createTextNode(numberTwo);
  let thirdContent = document.createTextNode(multNum);
  firstCell.appendChild(firstContent);
  secCell.appendChild(secContent);
  thirdCell.appendChild(thirdContent);
  // results.innerHTML += `<tr><td>${parseInt(number)}</td><td>${parseInt(
  //   numberTwo
  // )}</td><td>${multNum}</td></tr>`;
  console.log(result);
  return result;
}
// console.log(result);
// addNum.addEventListener("click", calcNum);
//!----------------------------------------------------
//*Display all mult
const tblMult = document.getElementById("row-target-mult");
const dMult = document.getElementById("d-cal");

function calcNum2() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let multNum = 0;
      multNum = i * j;
      result.push(i, j, multNum);
      let newCalc = tblMult.insertRow();
      let firstCell = newCalc.insertCell(0);
      let secCell = newCalc.insertCell(1);
      let thirdCell = newCalc.insertCell(2);
      let firstContent = document.createTextNode(i);
      let secContent = document.createTextNode(j);
      let thirdContent = document.createTextNode(multNum);
      firstCell.appendChild(firstContent);
      secCell.appendChild(secContent);
      thirdCell.appendChild(thirdContent);
    }
  }

  console.log(result);
  return result;
}
// dMult.addEventListener("click", calcNum2);
// const test = document.getElementById("test");
// console.log(test);
// test.addEventListener("click", (e)=>{});
//!------------------------------------------------------
//*Variation price
//TODO: add var in Array(); function = w read tbl with log; function = add e in tbl; add tomato 4.34mai,3.13juin,2.77juillet
const vegTarget = document.getElementById("veg-target");
const veg1 = document.getElementById("veg1");
const month = document.getElementById("month");
const readTblPart = document.getElementById("read-tbl");

// console.log(readTblPart);

// function readTbl() {
//   for (let i = 1; i < vegTarget.childNodes.length; i = i + 2) {
//     for (let j = 1; j < vegTarget.childNodes.length; j = j + 2) {
//       console.log(
//         "L'élément : " +
//           vegTarget.childNodes[i].childNodes[1].innerText +
//           " coutait " +
//           vegTarget.childNodes[i].childNodes[j + 2].innerText +
//           " euros le kilo en " +
//           month.childNodes[j + 2].innerText
//       );
//     }
//   }
// }
function readTbl() {
  for (let i = 1; i < vegTarget.childNodes.length; i = i + 2) {
    for (let j = 1; j < 4; j++) {
      console.log(
        "L'élément : " +
          vegTarget.childNodes[i].cells[0].innerText +
          " coutait " +
          vegTarget.childNodes[i].cells[j].innerText +
          " euros le kilo en " +
          month.cells[j].innerText
      );
    }
  }
}

readTblPart.addEventListener("click", readTbl);

//*gen tbl => fluctuation prices

const variations = document.getElementById("variations");
const dispDif = document.getElementById("difference");

var resultTbl = new Array();

function creatTbl() {
  for (let i = 1; i < vegTarget.childNodes.length; i = i + 2) {
    for (let j = 1; j < 4; j++) {
      let el =
        "L'élément : " +
        vegTarget.childNodes[i].cells[0].innerText +
        " coutait " +
        vegTarget.childNodes[i].cells[j].innerText +
        " euros le kilo en " +
        month.cells[j].innerText;
      let newVariation = variations.insertRow();
      let variationCell = newVariation.insertCell(0);
      let variationContent = document.createTextNode(el);
      variationCell.appendChild(variationContent);
    }
  }
  return;
}
// console.log(vegTarget.childNodes.length);

dispDif.addEventListener("click", creatTbl);
//*---------------------------------------------------
//*add tomato
const addTomato = document.getElementById("tomato");
// console.log(addTomato);

function addEl(name, pFMonth, pSMonth, pTMonth) {
  let newEl = vegTarget.insertRow();
  let firstCell = newEl.insertCell(0);
  let secCell = newEl.insertCell(1);
  let thirdCell = newEl.insertCell(2);
  let fourthCell = newEl.insertCell(3);
  let firstContent = document.createTextNode(name);
  let secContent = document.createTextNode(pFMonth);
  let thirdContent = document.createTextNode(pSMonth);
  let fourthContent = document.createTextNode(pTMonth);
  firstCell.appendChild(firstContent);
  secCell.appendChild(secContent);
  thirdCell.appendChild(thirdContent);
  fourthCell.appendChild(fourthContent);
  // console.log("test");
}
// var tomato = addEl("tomate", "4.34", "3.13", "2.77");
// addTomato.addEventListener("click", () => {
//   addEl("tomate", "4.34", "3.13", "2.77");
// });
addTomato.addEventListener(
  "click",
  addEl.bind(this, "tomate", "4.34", "3.13", "2.77")
);
//!-----------------
//!trash
// console.log(creatTbl());
// console.log(dispDif);
// console.log(variations);
// function creatTbl() {
//   for (let i = 1; i <= 6; i = i + 2) {
//     for (let j = 1; j < 6; j = j + 2) {
//       resultTbl.push(
//         "L'élément : " +
//           vegTarget.childNodes[i].childNodes[1].innerText +
//           " coutait " +
//           vegTarget.childNodes[i].childNodes[j + 2].innerText +
//           " euros le kilo en " +
//           month.childNodes[j + 2].innerText
//       );
//     }
//   }
//   return resultTbl;
// }
// const veg2 = document.getElementById("veg2");
// const veg3 = document.getElementById("veg3");
// console.log(veg1.childNodes);
// console.log(month.childNodes[3].innerText);
// console.log(vegTarget.childNodes[3].childNodes[1].innerText);
// console.log(veg1.childNodes[i].innerText);
// if (i == 1) {
// for (let j = 1; j <= 3; j++) {
//   let veg = "veg";
//   veg += j;
// console.log(
//   "L'élément : " +
//     veg1.childNodes[1].innerText +
//     " coutait " +
//     veg1.childNodes[i + 2].innerText +
//     " euros le kilo en " +
//     month.childNodes[i + 2].innerText
// );
// }
// x = i + 2;
// y = j + 2;
// }
// console.log(vegTarget);
// var vegInfo = new Array();
// vegInfo.push("abricot", "5.80", "3.37", "3.72");
// vegInfo.push("fraise", "10.57", "11.11", "12.84");
// vegInfo.push("abricot", "1.66", "2.34", "1.98");

// console.log(vegInfo);
