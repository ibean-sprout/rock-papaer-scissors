//create computerplayer function that randomly generates rock/paper/scissors



//let computerplayer = Math.floor(Math.random(choices.length) * 3) + 1;
//console.log(computerplayer[choices]);

function computerplayer() {
    computerChoices = ['rock', 'paper', 'scissors'];
    //choice randon item from choices array
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

console.log(computerplayer());

let choices = ['rock', 'paper', 'scissors'];
//function that plays a round of rock/paper/scissors
function playRockPaperScissors(playerSelection, computerSelection) {
        //all cases for player winning

        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return 'You win! Rock beats scissors';
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            return 'You win! Paper beats rock';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return'You win! Scissors beats paper';
        }

        //all cases where computer wins

        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return 'You lose! Rock beats scissors';
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return 'You lost! Paper beats rock';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return 'You win! Scissors beats paper';
        }
            
        //all cases with a tie

        else if (playerSelection === 'rock' && computerSelection === 'rock') {
            return 'It\'s a tie';
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return 'It\'s a tie';
        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return 'It\'s a tie';
        }
            
}

const playerSelection = 'rock';
const computerSelection = computerplayer();
const result = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
console.log(result);
console.log(playRockPaperScissors(playerSelection, computerSelection));