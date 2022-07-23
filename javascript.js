//create computerplayer function that randomly generates rock/paper/scissors



//let computerplayer = Math.floor(Math.random(choices.length) * 3) + 1;
//console.log(computerplayer[choices]);



let computerplayer = function() {
    computerChoices = ['rock', 'paper', 'scissors'];
    //choice randon item from choices array
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//console.log("Computer:" + computerplayer());

let choices = ['rock', 'paper', 'scissors'];
//function that plays a round of rock/paper/scissors


function playRockPaperScissors(playerSelection, computerSelection) {
        result = '';
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            result = 'You win! Rock beats scissors';
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            result = 'You win! Paper beats rock';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            result = 'You win! Scissors beats paper';
        }

        //all cases where computer wins

        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            result ='You lose! Rock beats scissors';
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            result = 'You lost! Paper beats rock';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            result ='You lost! Scissors beats paper';
        }
            
        //all cases with a tie

        else if (playerSelection === 'rock' && computerSelection === 'rock') {
            result ='It\'s a tie';
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            result = 'It\'s a tie';
        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            result = 'It\'s a tie';
        }
        
        return result;

}
const playerSelection = 'rock';
const computerSelection = computerplayer();
//console.log(playRockPaperScissors(playerSelection, computerSelection));


// //create div to hold results of the game

// const parentDiv = document.getElementById('game-results')
// const displayGameResults = document.createElement('div');
// displayGameResults.classList.add('content');

// let playerChoice = '';

let rockButton = document.getElementById('rock-btn');
rockButton.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = computerplayer();
    console.log(playRockPaperScissors(playerSelection, computerSelection));
    //return displayGameResults;
    
});

let paperButton = document.getElementById('paper-btn');
paperButton.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = computerplayer();
    console.log(playRockPaperScissors(playerSelection, computerSelection));
    //return displayGameResults;
    
});
let scissorsButton = document.getElementById('scissors-btn');
scissorsButton.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = computerplayer();
    console.log(playRockPaperScissors(playerSelection, computerSelection));
    //return displayGameResults;
    
});







// let paperButton = document.getElementById('paper-btn').addEventListener('click', playRockPaperScissors);
// let scissorButton = document.getElementById('scissors-btn').addEventListener('click', playRockPaperScissors);






//playGame();
//function to loop through the game as many times as the user specifies 
 function game() {
    for (let i = 1; i < 6; i++) {
        const playerSelection = prompt('Rock, paper or scissors? ' );
        const computerSelection = computerplayer();
        
        //display the user and computer selection and round number they're playing
        const result = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
        console.log(`Round ${i}: ${result}`);
        console.log(playRockPaperScissors(playerSelection, computerSelection));
    }    
    
}

//console.log(game());

