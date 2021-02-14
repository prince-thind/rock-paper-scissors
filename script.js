let i = 0;
let arr = ["rock", "scissor", "paper"];

function computerPlay()
{
    let i = Math.floor(Math.random() * 3);
    return arr[i];
}
function playRound()
{
    let playerSelection = prompt("enter your move");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    let result = null;
    if (computerSelection === playerSelection)
        result = "tie";
    else
    {
        switch (playerSelection)
        {
            case "rock":
                if (computerSelection === "scissor")
                    result = "won";
                else
                    result = "lost";
                break;

            case "scissor":
                if (computerSelection === "paper")
                    result = "won";
                else
                    result = "lost";
                break;

            case "paper":
                if (computerSelection === "rock")
                    result = "won";
                else
                    result = "lost";
                break;

            default:
               result=null;
        }
    }
    return result;
}
function game()
{
    while (i++ < 5)
    {
        let result=playRound();
        if(result)
        console.log("player "+result)
    }
}

game();

