let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: 
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return 'SCISSORS';
    }
}


function playRound(playerSelection, computerSelection){
    
    if (playerSelection.toUpperCase() === computerSelection){
        computerScore++;
        playerScore++;
        return 'Tie';
    }
    else if (computerSelection === 'ROCK' && playerSelection.toUpperCase() == 'PAPER'){
        playerScore++;
        return 'You win! PAPER beats ROCK';
    }
    else if (computerSelection === 'PAPER' && playerSelection.toUpperCase() == 'SCISSORS'){
        playerScore++;
        return 'You win! SCISSORS beats PAPER';
    }
    else if (computerSelection === 'SCISSORS' && playerSelection.toUpperCase() == 'ROCK'){
        playerScore++;
        return 'You win! ROCK beats SCISSORS';
    }
    else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    const choices = document.querySelectorAll('.icons buttons');
    const computerSelection = getComputerChoice();
    const result = document.querySelector('.final-result');
    const yourScore = document.querySelector('.your-score');
    const compScore = document.querySelector('.computer-score');
    
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            result.textContent = playRound(choice.className, computerSelection);
    })});
    compScore.textContent = computerScore.toString();
    yourScore.textContent = playerScore.toString();
}
    

while (playerScore < 5 && computerScore < 5){
    game();
    console.log(`Computer score: ${computerScore}`);
    console.log(`Your score: ${playerScore}`);
}

if (computerScore > playerScore){
    console.log("Sorry. Better luck next time");
}
else if (computerScore < playerScore){
    console.log("WINNER!")
}
else {
    console.log("Let's break this tie!");
}