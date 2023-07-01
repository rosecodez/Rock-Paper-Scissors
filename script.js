//computer's choice 
const choices = ["rock", "paper", "scissors"];

let computerSelection = choices[Math.floor(Math.random()* choices.length)];
    console.log("Computer chose " + `${computerSelection}`)

//player's choice
let playerSelection = prompt("Rock, Paper or Scissors?")

function getPlayerChoice() {
    if (playerSelection.toLowerCase() == "rock") {
        console.log("You chose Rock");
    } else if (playerSelection.toLowerCase() == "paper") {
        console.log("You chose Paper");
    } else if (playerSelection.toLowerCase() == "scissors") {
        console.log("You chose Scissors");
    } else {
        alert("Try again please");
    }
}

getPlayerChoice(); 

//game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win!")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins!")
    } else {
        console.log("Tie!")
    }
}


playRound(playerSelection, computerSelection);

