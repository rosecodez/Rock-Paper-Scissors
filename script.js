const choices = ["rock", "paper", "scissors"];

//function to generate computer's random choice
let computerSelection = choices[Math.floor(Math.random()* choices.length)];
    console.log("Computer chose " + `${computerSelection}`);

//function to get player's choice through prompt
let playerSelection = prompt("Rock, Paper or Scissors?");

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

//function for player vs. computer comparison


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!");
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player wins!");
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins!");
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins!");
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!");
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins!");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("Tie!");
    }
}
//Function to decide final score
function gameScore() {
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (playerSelection < computerScore) {
        console.log("Computer wins!");
    } else {
        alert("It's a tie!");
    }
}
//Function loop to repeat the round 5 times
let playerScore = 0;
let computerScore = 0;

function game() {
    for(let i=0; i<5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playRound(playerSelection, computerSelection);
    console.log("Player Score =" + playerScore);
    console.log("Computer Score = " + computerScore)
    }
}
game();



