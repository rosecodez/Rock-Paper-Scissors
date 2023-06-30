//computer's random choice 
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    console.log(choices[(Math.floor(Math.random() * choices.length))]);
}
getComputerChoice()


//player's choice
let playerChoice = prompt("What is your choice?")

if (playerChoice.toLowerCase() == "rock")
    alert("You chose Rock");
if (playerChoice.toLowerCase() == "paper")
    alert("You chose Paper");
if (playerChoice.toLowerCase() == "scissors")
    alert("You chose Scissors");



//round
function playRound(playerSelection, computerSelection) {
    if(playerSelection="Rock")
    if(getComputerChoice = "Rock")
        alert("Tie!")
}
