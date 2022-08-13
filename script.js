let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;

const choices = document.querySelectorAll('.icons button');
const result = document.querySelector('.final-results');
const yourScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: 
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
    }
}


function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        compScore.textContent = ++computerScore;
        yourScore.textContent = ++playerScore;
        result.textContent = 'Tied!';
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper'){
        yourScore.textContent = ++playerScore;
        result.textContent = 'You win! PAPER beats ROCK';
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        yourScore.textContent = ++playerScore;
        result.textContent = 'You win! SCISSORS beats PAPER';
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        yourScore.textContent = ++playerScore;
        result.textContent = 'You win! ROCK beats SCISSORS';
    }
    else {
        compScore.textContent = ++computerScore;
        result.textContent = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    }
}

for (const choice of choices) {
    choice.addEventListener('click', playGame);       
}

function playGame(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerScore >=5 || computerScore >= 5) {
        if (playerScore < computerScore) {
            result.style.cssText = 'color: magenta; font-size: 19px; font-weight: bold;';
            result.textContent = 'YOU LOST. Better luck next time';
        } else if (playerScore > computerScore) {
            result.style.cssText = 'color: magenta; font-size: 19px; font-weight: bold;';
            result.textContent = 'YOU WON!';
        } else {
            result.style.cssText = 'color: magenta; font-size: 19px; font-weight: bold;';
            result.textContent = 'YOU TIED WITH COMPUTER';
        }
        for (const choice of choices) {
            choice.removeEventListener('click', playGame);
        }
    }
}






            
            





