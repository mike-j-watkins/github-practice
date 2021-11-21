"use strict";
function computerTurn(min, max) {
  let turn = Math.floor(Math.random() * (max - min)) + min;
  if (turn == 1) return "rock";
  if (turn == 2) return "paper";
  if (turn == 3) return "scissors";
}

let comp = computerTurn(1, 4);
let playerTurn = prompt("insert rock paper or scissors");
if (comp == playerTurn) console.log("draw");
if (playerTurn == "rock") {
  if (comp == "paper") {
    console.log("You lose");
  } else {
    console.log("You win!");
  }
}
if (playerTurn == "paper") {
  if (comp == "rock") {
    console.log("You win!");
  } else {
    console.log("You lose");
  }
}
if (playerTurn == "scissors") {
  switch (comp) {
    case "rock":
      console.log("You lose");
      break;
    case "paper":
      console.log("You win");
      break;
  }
}
