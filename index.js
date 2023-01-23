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

addName.addEventListener("click", add_Name);
//*Random winner
var winner = "";

function theWinnerIs() {
  let random = Math.random() * players.length;

  return console.log("The winner is : " + players[Math.floor(random)]);
}
const randomWinner = document.getElementById("random-winner");
// console.log(randomWinner);
randomWinner.addEventListener("click", theWinnerIs);
