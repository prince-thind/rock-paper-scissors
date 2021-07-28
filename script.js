const gameObj = {
  rock: { beat: 'scissor', lose: 'paper' },
  paper: { beat: 'rock', lose: 'scissor' },
  scissor: { beat: 'paper', lose: 'rock' },
};

const gameArray = ['rock', 'paper', 'scissor'];
const resultValues = ['tie', 'win', 'lose'];

let moves = 0;
let score1 = 0;
let score2 = 0;

const p1Score = document.querySelector('#p1-score');
const p2Score = document.querySelector('#p2-score');
const moveText = document.querySelector('#move-number');
const playerMoveText = document.querySelector('#player-move');
const computerMoveText = document.querySelector('#computer-move');
const resultText = document.querySelector('#result');
const finalResultText = document.querySelector('#final-result');
const buttonRock = document.querySelector('#button-rock');
const buttonPaper = document.querySelector('#button-paper');
const buttonScissor = document.querySelector('#button-scissor');
const buttonReset = document.querySelector('#reset');

function playRound(playerMove, computerMove) {
  if (playerMove == computerMove) {
    return 'tie';
  }
  const check = gameObj[playerMove].beat == computerMove;

  if (check) {
    return 'won';
  }
  return 'lose';
}
function reset(e) {
  moves = 0;
  score1 = 0;
  score2 = 0;

  p1Score.textContent = 'Player score is: ' + 0;
  p2Score.textContent = 'Computer score is: ' + 0;

  moveText.textContent = 'Move Number: ' + 0;

  playerMoveText.textContent = 'Player Move: ' + 'Awaiting Response';
  computerMoveText.textContent = 'Computer Move: ' + 'Awaiting Response';

  resultText.textContent = 'Result of this Round: ' + 'Awaiting Response';

  finalResultText.textContent =
    'Final Result : ' + 10 + ' More need to be completed';
}

function update(e) {
  let move = e.target.textContent.toLowerCase();
  let cMove = gameArray[Math.floor(Math.random() * 3)];
  let result = playRound(move, cMove);
  let resultString = '';
  let finalResultString = '';

  switch (result) {
    case 'tie':
      moves++;
      resultString = "It's a Tie!";
      break;
    case 'won':
      score1++;
      moves++;
      resultString = 'Player Won!';
      break;
    case 'lose':
      score2++;
      moves++;
      resultString = 'Computer Won!';
      break;
  }

  p1Score.textContent = 'Player score is: ' + score1;
  p2Score.textContent = 'Computer score is: ' + score2;

  moveText.textContent = 'Move Number: ' + moves;

  playerMoveText.textContent = 'Player Move: ' + move;
  computerMoveText.textContent = 'Computer Move: ' + cMove;

  resultText.textContent = 'Result of this Round: ' + resultString;

  if (moves >= 10) {
    if (score1 > score2) {
      finalResultString = 'Player won!';
    } else if (score1 < score2) {
      finalResultString = 'Computer won!';
    } else {
      finalResultString = "It's a tie!";
    }
    finalResultText.textContent = 'Final Result : ' + finalResultString;

    moves = 0;
    score1 = 0;
    score2 = 0;
  } else {
    finalResultText.textContent =
      'Final Result : ' + (10 - moves) + ' More need to be completed';
  }
}

buttonRock.addEventListener('click', update);
buttonPaper.addEventListener('click', update);
buttonScissor.addEventListener('click', update);
buttonReset.addEventListener('click', reset);
