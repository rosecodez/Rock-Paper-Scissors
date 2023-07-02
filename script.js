let playerScore = 0;
let computerScore = 0;
for(let i=0; i<5; i++) {



//computer's  choice
const choices = ["rock", "paper", "scissors"];
let computerSelection = choices[Math.floor(Math.random()* choices.length)];
    console.log("Computer chose " + `${computerSelection}`);

//player's choice
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

//player vs. computer comparison


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
//Function loop to repeat the round 5 times
let results = playRound(playerSelection, computerSelection);
let playerScore = playRound(playerSelection, computerScore);
console.log("Player Score = " + playerScore);
console.log("Computer Score = " + computerScore);

//Function to decide final score
function gameScore() {
    if (playerScore > computerScore) {
        console.log("Round ends: Player wins!");
    } else if (playerSelection < computerScore) {
        console.log("Round ends: Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}
    gameScore();
}