const gameObj =
{
    rock: { beat: "scissor", lose: "paper" },
    paper: { beat: "rock", lose: "scissor" },
    scissor: { beat: "paper", lose: "rock" }
}
const gameArray = ["rock", "paper", "scissor"];
const resultValues = ["tie", "win", "lose"];

let moves = 0;
let score1 = 0;
let score2 = 0;

function playRound(playerMove, computerMove)
{
    if (playerMove == computerMove)
    {
        return 0;
    }
    let check = (gameObj[playerMove].beat == computerMove);

    if (check)
    {
        return 1;
    }
    return 2;
}
function reset(e)
{
    moves = 0;
    score1 = 0;
    score2 = 0;

    const p1Score = document.querySelector('.p1Score');
    const p2Score = document.querySelector('.p2Score');

    p1Score.textContent = "Player score is: " + 0;
    p2Score.textContent = "Computer score is: " + 0;

    const moveText = document.querySelector('.move-number');
    moveText.textContent = "Move Number: " + 0;

    const playerMoveText = document.querySelector('.player-move');
    const computerMoveText = document.querySelector('.computer-move');
    playerMoveText.textContent = "Player Move: " + "Awaiting Response";
    computerMoveText.textContent = "Computer Move: " + "Awaiting Response";

    const resultText = document.querySelector('.result');
    resultText.textContent = "Result of this Round: " + "Awaiting Response";

    const finalResultText = document.querySelector('.final-result');
    finalResultText.textContent = "Final Result : " + 10 + " More need to be completed"

}
function update(e)
{
    if (moves >= 10)
    {
        moves = 0;
        score1 = 0;
        score2 = 0;
    }
    let move = e.target.textContent;
    move = move.toLowerCase();
    let cMove = gameArray[Math.floor(Math.random() * 3)];
    let result = playRound(move, cMove);
    let resultString = "";
    let finalResultString = "";
    switch (result)
    {
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

    const p1Score = document.querySelector('.p1Score');
    const p2Score = document.querySelector('.p2Score');

    p1Score.textContent = "Player score is: " + score1;
    p2Score.textContent = "Computer score is: " + score2;

    const moveText = document.querySelector('.move-number');
    moveText.textContent = "Move Number: " + moves;

    const playerMoveText = document.querySelector('.player-move');
    const computerMoveText = document.querySelector('.computer-move');
    playerMoveText.textContent = "Player Move: " + move;
    computerMoveText.textContent = "Computer Move: " + cMove;

    const resultText = document.querySelector('.result');
    resultText.textContent = "Result of this Round: " + resultString;

    const finalResultText = document.querySelector('.final-result');
    if (moves >= 10)
    {
        if (score1 > score2)
        {
            finalResultString = "Player won!"
        }
        else if (score1 < score2)
        {
            finalResultString = "Computer won!"
        }
        else
        {
            finalResultString = "It's a tie!"
        }
        finalResultText.textContent = "Final Result : " + finalResultString;
    }
    else
    {
        finalResultText.textContent = "Final Result : " + (10 - moves) + " More need to be completed"
    }

}
const buttonRock = document.querySelector('.b1');
const buttonPaper = document.querySelector('.b2');
const buttonScissor = document.querySelector('.b3');
const buttonReset = document.querySelector('.reset>button');

buttonRock.addEventListener('click', update);
buttonPaper.addEventListener('click', update);
buttonScissor.addEventListener('click', update);
buttonReset.addEventListener('click', reset);

