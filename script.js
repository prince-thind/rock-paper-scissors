const gameObj = {
  rock: { beat: "scissor", lose: "paper" },
  paper: { beat: "rock", lose: "scissor" },
  scissor: { beat: "paper", lose: "rock" },
};

const gameArray = ["rock", "paper", "scissor"];
const resultValues = ["tie", "win", "lose"];

let moves = 0;
let score1 = 0;
let score2 = 0;

const p1Score = document.querySelector(".p1Score");
const p2Score = document.querySelector(".p2Score");
const moveText = document.querySelector(".move-number");
const playerMoveText = document.querySelector(".player-move");
const computerMoveText = document.querySelector(".computer-move");
const resultText = document.querySelector(".result");
const finalResultText = document.querySelector(".final-result");

function playRound(playerMove, computerMove) {
  if (playerMove == computerMove) {
    return 0;
  }
  let check = gameObj[playerMove].beat == computerMove;

  if (check) {
    return 1;
  }
  return 2;
}
function reset(e) {
  moves = 0;
  score1 = 0;
  score2 = 0;

  p1Score.textContent = "Player score is: " + 0;
  p2Score.textContent = "Computer score is: " + 0;

  moveText.textContent = "Move Number: " + 0;

  playerMoveText.textContent = "Player Move: " + "Awaiting Response";
  computerMoveText.textContent = "Computer Move: " + "Awaiting Response";

  resultText.textContent = "Result of this Round: " + "Awaiting Response";

  finalResultText.textContent =
    "Final Result : " + 10 + " More need to be completed";
}

function update(e) {
  let move = e.target.textContent.toLowerCase();
  let cMove = gameArray[Math.floor(Math.random() * 3)];
  let result = playRound(move, cMove);
  let resultString = "";
  let finalResultString = "";
  
  switch (result) {
    case 0:
      moves++;
      resultString = "It's a Tie!";
      break;
    case 1:
      score1++;
      moves++;
      resultString = "Player Won!";
      break;
    case 2:
      score2++;
      moves++;
      resultString = "Computer Won!";
      break;
  }

  p1Score.textContent = "Player score is: " + score1;
  p2Score.textContent = "Computer score is: " + score2;

  moveText.textContent = "Move Number: " + moves;

  playerMoveText.textContent = "Player Move: " + move;
  computerMoveText.textContent = "Computer Move: " + cMove;

  resultText.textContent = "Result of this Round: " + resultString;

  if (moves >= 10) {
    if (score1 > score2) {
      finalResultString = "Player won!";
    } else if (score1 < score2) {
      finalResultString = "Computer won!";
    } else {
      finalResultString = "It's a tie!";
    }
    finalResultText.textContent = "Final Result : " + finalResultString;
   
    moves = 0;
    score1 = 0;
    score2 = 0;
  } else {
    finalResultText.textContent =
      "Final Result : " + (10 - moves) + " More need to be completed";
  }
}
const buttonRock = document.querySelector(".b1");
const buttonPaper = document.querySelector(".b2");
const buttonScissor = document.querySelector(".b3");
const buttonReset = document.querySelector(".reset");

buttonRock.addEventListener("click", update);
buttonPaper.addEventListener("click", update);
buttonScissor.addEventListener("click", update);
buttonReset.addEventListener("click", reset);
