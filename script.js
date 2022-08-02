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
    const playerSelection = prompt("Rock, Paper or Scissors?");
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

}

for (let i = 0; i < 5; i++){
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