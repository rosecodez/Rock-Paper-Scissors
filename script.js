//Score values
let computerScore = 0;
let playerScore = 0;

// DOM elements
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

//Choices
const rockIcon = "rock";
const paperIcon = "paper";
const scissorsIcon = "scissors";

const randomClasses = [rockIcon, paperIcon, scissorsIcon];
const text = document.getElementById('demo');

//Results
const tie = ()=>{
    text.innerHTML = "It's a Tie ! ";
    text.style.color = 'orange';
}

const win = ()=>{
    text.innerHTML = "You win!";
    text.style.color = 'rgb(1, 146, 1)';
}

const lose = ()=>{
    text.innerHTML = "Computer wins! ";
    text.style.color = 'blue';
}

// Game function
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            // Computer's choice
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
            
           //Comparisons
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               tie();
           }
           else if(showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }else if(showIcon.className === rockIcon && computerShowIcon.className === paperIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === rockIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }else if(showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }
        });
    });
}

// Run the game function
game();