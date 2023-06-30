//computer's random choice 
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    console.log (choices[(Math.floor(Math.random() * choices.length))]);
}


//player's choice
let playerSelection = prompt("Rock, Paper or Scissors?")

function getPlayerChoice() {
    if (playerSelection.toLowerCase() == "rock")
        alert("You chose Rock");
    if (playerSelection.toLowerCase() == "paper")
        alert("You chose Paper");
    if (playerSelection.toLowerCase() == "scissors")
        alert("You chose Scissors");
}

getPlayerChoice()

//game
function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        alert("It's a tie!")
    }
    else if(playerSelection == 'Rock'){
        if(computerSelection == 'Paper'){
            alert("Computer wins!")
        }else{
            alert("Player wins!")
        }
    }
    else if(playerSelection == 'Paper'){
        if(computerSelection == 'Rock'){
            alert("Computer wins!")
        }else{
            alert("Player wins!")
        }
    }
    else if(playerSelection == 'Paper'){
        if(computerSelection == 'Scissors'){
            alert("Computer wins!")
        }else{
            alert("Playerwins!")
        }
    }
}

const computerSelection = getComputerChoice();
playRound();