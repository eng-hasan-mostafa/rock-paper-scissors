
let computerScore  = 0;
let humanScore     = 0;

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function getHumanChoice() {

    let userChoice = prompt('What do you choose? rock,paper or scissors?');
    userChoice = userChoice.toLowerCase();
    if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {
        alert('Invalid input!');
    }
}

function playRound(humanChoice, computerChoice) {

    if(humanChoice === 'rock') {

        switch(computerChoice) {
            case 'paper':
                console.log('You lose! Paper beats Rock');
                computerScore++;
                break;
            case 'scissors':
                console.log('You win! Rock beats Scissors');
                humanScore++;
                break;
            case 'rock':
                console.log('It\'s a draw!');
                break;
        }
    }else if(humanChoice === 'paper') {
        
        switch(computerChoice) {
            case 'rock':
                console.log('You win! Paper beats Rock');
                humanScore++;
                break;
            case 'scissors':
                console.log('You lose! Scissors beats Paper');
                computerScore++;
                break;
            case 'paper':
                console.log('It\'s a draw!');
                break;
        }
    }else if(humanChoice === 'scissors') {

        switch(computerChoice) {
            case 'rock':
                console.log('You lose! Rock beats Scissors');
                computerScore++;
                break;
            case 'paper':
                console.log('You win! Scissors beats Paper');
                humanScore++;
                break;
            case 'scissors':
                console.log('It\'s a draw!');
                break;
        }
    }
}


const humanSelection    = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log('human score', humanScore);
console.log('computer score', computerScore);