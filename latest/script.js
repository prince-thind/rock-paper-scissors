const DOMElements = {
  playerScore: document.querySelector('#player-score'),
  computerScore: document.querySelector('#computer-score'),
  buttons: [...document.querySelectorAll('.button')],
  playerMove: document.querySelector('#player-move'),
  computerMove: document.querySelector('#computer-move'),
  resultText: document.querySelector('#result'),
  buttonReset: document.querySelector('#reset'),
}

let playerScore = 0;
let computerScore = 0;
init();

DOMElements.buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});
DOMElements.buttonReset.addEventListener('click', reset);

// function definitions
function init() {
  DOMElements.computerMove.className = 'fas';
  DOMElements.resultText.textContent = '';
}

function playRound(e) {
  const playerMove = e.currentTarget.id;
  const computerMove = randomMove();
  const result = findResult(playerMove, computerMove);
  updateResponseBar(playerMove, computerMove);
  updateScores(result);
  updateResult(result);
}

function updateResponseBar(playerMove, computerMove) {
  DOMElements.playerMove.className = getClassName(playerMove);
  DOMElements.computerMove.className = getClassName(computerMove);

  function getClassName(move) {
    switch (move) {
      case 'rock':
        return 'fas fa-hand-rock';
      case 'paper':
        return 'fas fa-hand-paper';
      case 'scissors':
        return 'fas fa-hand-scissors';
    }
  }
}

function updateResult(result) {
  if (result === 'win') {
    DOMElements.resultText.textContent = 'You Won!';
  } else if (result === 'lose') {
    DOMElements.resultText.textContent = 'You Lost!';
  } else {
    DOMElements.resultText.textContent = "It's a Draw!";
  }
}

function updateScores(result) {
  if (result === 'win') {
    playerScore++;
    DOMElements.playerScore.innerText = playerScore;
  } else if (result === 'lose') {
    computerScore++;
    DOMElements.computerScore.innerText = computerScore;
  }
}
function findResult(playerMove, computerMove) {
  //draw condition
  if (playerMove === computerMove) {
    return 'draw';
  }

  let result = null;

  //win conditions
  switch (playerMove) {
    case 'rock':
      if (computerMove == 'scissors') {
        result = 'win';
      }
      break;
    case 'paper':
      if (computerMove == 'rock') {
        result = 'win';
      }
      break;
    case 'scissors':
      if (computerMove == 'paper') {
        result = 'win';
      }
      break;
  }

  //lose condition
  if (!result) {
    result = 'lose';
  }

  return result;
}

function randomMove() {
  const arr = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.trunc(Math.random() * 3);
  return arr[randomIndex];
}

function reset() {
  init();
  playerScore = 0;
  computerScore = 0;
  DOMElements.playerScore.innerText = playerScore;
  DOMElements.computerScore.innerText = computerScore;
}
