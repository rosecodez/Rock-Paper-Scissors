//computer's random choice 
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    console.log(choices[(Math.floor(Math.random() * choices.length))]);
}
getComputerChoice()
