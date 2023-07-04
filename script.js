//Initial score values
let playerScore = 0;
let computerScore = 0;


//Computer's random choice function
let computerSelection = getComputerChoice();

function getComputerChoice (computerSelection) {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()* choices.length)];
    return choice;
}

//Player's choice through prompt function
function getPlayerChoice() {
    let playerSelection = prompt("Rock, paper or scissors?");
        if (playerSelection.toLowerCase() == "rock") {
            console.log("You chose Rock");
        } else if (playerSelection.toLowerCase() == "paper") {
            console.log("You chose Paper");
        } else if (playerSelection.toLowerCase() == "scissors") {
            console.log("You chose Scissors");
        } else {
            alert("Try again please");
        }
        return playerSelection;
}

//function for playing rounds
//comparison
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!");
        computerScore++;
        return computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player wins!");
        playerScore++;
        return playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins!");
        computerScore++;
        return computerScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins!");
        playerScore++;
        return playerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!");
        computerScore++;
        return computerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins!");
        playerScore++;
        return playerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins!");
        computerScore++;
        return computerScore;
    } else {
        console.log("Tie!");
    }
}
//Game function
//Loops 5 rounds
function game() {
    for(let i=0; i<5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log("Computer chose " + `${computerSelection}`)
        getComputerChoice (computerSelection);
        playRound(playerSelection, computerSelection)
    }
}
//Score function comparison
function score() {
    if(playerScore > computerScore){
        console.log("Game ends. Player wins game!");
    } else if (playerScore < computerScore) {
        console.log("Game ends. Computer wins game!");
    } else 
        console.log("Game ends. It's a tie!")
}
//Calling the game function
game();

//Display final score
console.log("Computer's final score is = " + computerScore )
console.log("Player's final score is = " + playerScore)

//Calling the score function
score();