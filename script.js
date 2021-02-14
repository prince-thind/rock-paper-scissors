let i=0;
let arr=["rock","scissor","paper"];

function generateMove()
{
    let i=Math.floor(Math.random()*3);
    return arr[i];
}
while(i++<100)
{
let userInput=prompt("enter your move");
userInput=userInput.toLowerCase();
let pcMove=generateMove();
if(pcMove===userInput)
console.log("It's a tie!");
else{
switch(userInput)
{
    case "rock":
        if(pcMove==="scissor")
        console.log("you won");
        else
        console.log("you lost");
        break;

        case "scissor":
        if(pcMove==="paper")
        console.log("you won");
        else
        console.log("you lost");
        break;

        case "paper":
        if(pcMove==="rock")
        console.log("you won");
        else
        console.log("you lost");
        break;

        default:
            console.log("invalid player move");
}
}
}