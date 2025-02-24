
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