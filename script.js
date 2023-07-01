//computer's choice 
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let computerSelection = choices[Math.floor(Math.random()* choices.length)];
    console.log("Computer chose " + `${computerSelection}`)
}

//player's choice
let playerSelection = prompt("Rock, Paper or Scissors?")

function getPlayerChoice() {
    if (playerSelection.toLowerCase() == "rock")
        console.log("You chose Rock");
    if (playerSelection.toLowerCase() == "paper")
        console.log("You chose Paper");
    if (playerSelection.toLowerCase() == "scissors")
        console.log("You chose Scissors");
}

getPlayerChoice()

//game
function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        console.log("It's a tie!")
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            console.log("Computer wins!")
        }else{
            console.log("Player wins!")
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            console.log("Computer wins!")
        }else{
            console.log("Player wins!")
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            console.log("Computer wins!")
        }else{
            console.log("Player wins!")
        }
    }
}

const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);