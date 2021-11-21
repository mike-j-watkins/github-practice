"use strict";

const btnContainer = document.querySelector(".btn-container");
const result = document.querySelector(".result");
const playerWins = document.querySelector(".player-wins-num");
const computerWins = document.querySelector(".computer-wins-num");
const winner = document.querySelector(".winner");
let playing = 1;

function computerTurn(min, max) {
  let turn = Math.floor(Math.random() * (max - min)) + min;
  if (turn == 1) return "rock";
  if (turn == 2) return "paper";
  if (turn == 3) return "scissors";
}

const calculateWinner = function (comp, playerTurn) {
  if (comp == playerTurn) return { message: "draw" };
  if (playerTurn == "rock") {
    return comp == "scissors"
      ? { winner: "player", message: "You win!" }
      : { winner: "computer", message: "You lose!" };
  }
  if (playerTurn == "paper") {
    return comp == "rock"
      ? { winner: "player", message: "You win!" }
      : { winner: "computer", message: "You lose!" };
  }

  if (playerTurn == "scissors") {
    return comp == "paper"
      ? { winner: "player", message: "You win!" }
      : { winner: "computer", message: "You lose!" };
  }
};

function playRound(e) {
  if (playing) {
    if (!e.target.classList.contains("btn")) return;
    let playerTurn = e.target.dataset.choice;
    let comp = computerTurn(1, 4);
    let ans = calculateWinner(comp, playerTurn);
    result.textContent = ans.message;

    if (!ans.winner) return;
    ans.winner == "player"
      ? (playerWins.textContent = +playerWins.textContent + 1)
      : (computerWins.textContent = +computerWins.textContent + 1);
    if (+playerWins.textContent == 5) {
      winner.textContent = "Player has won the game!";
      playing--;
    }
    if (+computerWins.textContent == 5) {
      winner.textContent = "Computer has won the game!";
      playing--;
    }
  }
}
btnContainer.addEventListener("click", playRound);
