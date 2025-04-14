
let computerScore       = 0;
let humanScore          = 0;

function getComputerChoice() {
    // generate random number between 1 and 3 included.
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

function playRound(humanChoice, computerChoice) {

    const resultsBoard = document.querySelector('.results');
    if(humanChoice === 'rock') {

        switch(computerChoice) {
            case 'paper':
                resultsBoard.innerHTML = 'You lose! Paper beats Rock';
                computerScore++;
                break;
            case 'scissors':
                resultsBoard.innerHTML = 'You win! Rock beats Scissors';
                humanScore++;
                break;
            case 'rock':
                resultsBoard.innerHTML = 'It\'s a draw!';
                break;
        }
    }else if(humanChoice === 'paper') {
        
        switch(computerChoice) {
            case 'rock':
                resultsBoard.innerHTML = 'You win! Paper beats Rock';
                humanScore++;
                break;
            case 'scissors':
                resultsBoard.innerHTML = 'You lose! Scissors beats Paper';
                computerScore++;
                break;
            case 'paper':
                resultsBoard.innerHTML = 'It\'s a draw!';
                break;
        }
    }else if(humanChoice === 'scissors') {

        switch(computerChoice) {
            case 'rock':
                resultsBoard.innerHTML = 'You lose! Rock beats Scissors';
                computerScore++;
                break;
            case 'paper':
                resultsBoard.innerHTML = 'You win! Scissors beats Paper';
                humanScore++;
                break;
            case 'scissors':
                resultsBoard.innerHTML = 'It\'s a draw!';
                break;
        }
    }
    if(humanScore === 5 || computerScore === 5) {
        (humanScore > computerScore) ? 
        resultsBoard.innerHTML += `<br>Congrats! you win the game.
                                   <br>Final score:
                                   <br>human: ${humanScore}
                                   <br>computer: ${computerScore}`:
        resultsBoard.innerHTML += `<br>Hard luck, you lose the game.
                                   <br>Final score:
                                   <br>human: ${humanScore}
                                   <br>computer: ${computerScore}`;
    } else {        
        resultsBoard.innerHTML += `<br>Current Score:
                                   <br>human: ${humanScore}
                                   <br>computer: ${computerScore}`;
    }
    
}

const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');

rockButton.addEventListener('click', ()=>{
    computerSelection  = getComputerChoice();
    playRound('rock', computerSelection);
});

paperButton.addEventListener('click', ()=>{
    computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
})

scissorsButton.addEventListener('click', ()=>{
    computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
})