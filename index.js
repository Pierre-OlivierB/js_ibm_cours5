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
addNum.addEventListener("click", calcNum);
//*Display all mult

// const test = document.getElementById("test");
// console.log(test);
// test.addEventListener("click", (e)=>{});
