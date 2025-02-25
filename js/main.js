
const GAME_ROUNDS = 5;

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

    let result;
    if(humanChoice === 'rock') {

        switch(computerChoice) {
            case 'paper':
                console.log('You lose! Paper beats Rock');
                result = 'computer wins';
                break;
            case 'scissors':
                console.log('You win! Rock beats Scissors');
                result = 'human wins';
                break;
            case 'rock':
                console.log('It\'s a draw!');
                result = 'draw';
                break;
        }
    }else if(humanChoice === 'paper') {
        
        switch(computerChoice) {
            case 'rock':
                console.log('You win! Paper beats Rock');
                result = 'human wins';
                break;
            case 'scissors':
                console.log('You lose! Scissors beats Paper');
                result = 'computer wins';
                break;
            case 'paper':
                console.log('It\'s a draw!');
                result = 'draw';
                break;
        }
    }else if(humanChoice === 'scissors') {

        switch(computerChoice) {
            case 'rock':
                console.log('You lose! Rock beats Scissors');
                result = 'computer wins';
                break;
            case 'paper':
                console.log('You win! Scissors beats Paper');
                result = 'human wins';
                break;
            case 'scissors':
                console.log('It\'s a draw!');
                result = 'draw';
                break;
        }
    }

    return result;
}

function playGame() {
    
    let computerScore       = 0;
    let humanScore          = 0;
    let playedRoundsCounter = 0;
    let humanSelection;
    let computerSelection;
    let roundResult;
    while(playedRoundsCounter < GAME_ROUNDS) {
        
        humanSelection     = getHumanChoice();
        computerSelection  = getComputerChoice();
        roundResult        = playRound(humanSelection, computerSelection);
        switch(roundResult) {
            case 'human wins':
                humanScore++;
                break;
            case 'computer wins':
                computerScore++;
                break;
        }
        playedRoundsCounter++;
    }
    
    console.log('human score', humanScore);
    console.log('computer score', computerScore);
    (humanScore > computerScore) ? console.log('Congrats! you win the game.') : console.log('Hard luck, you lose the game.');
}

playGame();