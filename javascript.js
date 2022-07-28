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

let computerWins = 0;
let playerWins = 0;

//playerChoices
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');

function playRockPaperScissors(playerSelection, computerSelection) {
        let result = '';
        let winner = '';
    


        //all cases for a player winning
        if (playerSelection === computerSelection) {
            winner = 'tie';
            result = 'It was a tie!';
        }
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            result = 'You win! Rock beats scissors';
            winner = 'player';
            playerWins += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            result = 'You win! Paper beats rock';
            winner = 'player';
            playerWins += 1;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            result = 'You win! Scissors beats paper';
            winner = 'player';
            playerWins += 1;
        }

        //all cases where computer wins

        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            result ='You lose! Rock beats scissors';
            winner = 'computer';
            computerWins += 1;
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            result = 'You lost! Paper beats rock';
            winner = 'computer';
            computerWins += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            result ='You lost! Scissors beats paper';
            winner = 'computer';
            computerWins += 1;
        }
        
        //need to add the score to the player/computer span elements
        //let parentDiv = document.getElementsByClassName('play-results');
        //let playDiv = document.createElement('div');
        //playDiv.classList.add('play-results');
    

            if (winner === 'player') {
            
                let addPlayerPointsToPage = document.querySelector('#player-points');
                let playerPointsTextToAdd = document.createElement('p');
                playerPointsTextToAdd.classList.add('content');



                addPlayerPointsToPage.innerHTML += playerPointsTextToAdd.textContent = playerWins;

                

            } else if (winner === 'computer') {
                //computerWins++;
                let addComputerPointsToPage = document.querySelector('#computer-points');
                let computerPointsTextToAdd = document.createElement('p');
                computerPointsTextToAdd.classList.add('computer-content');
                addComputerPointsToPage.innerHTML += computerPointsTextToAdd.textContent = computerWins;
                //parentDiv.appendChild(addComputerPointsToPage)
            } else if (winner === 'tie') {
                console.log('it was a tie, no points added')
            }
        
    
        
        //console.log(`Player: ${playerWins}, Computer: ${computerWins}`);

        return result;
        

}

//function to run game based on which button is clicked
//let playerSelection = '';


function playGame() {
    rockButton.addEventListener('click', () => {
        const playerSelection = 'rock';
        const computerSelection = computerplayer();
        document.getElementById('game-results').innerHTML = playRockPaperScissors(playerSelection, computerSelection);
        //return displayGameResults;
        
    });

   
    paperButton.addEventListener('click', () => {
        const playerSelection = 'paper';
        const computerSelection = computerplayer();
        document.getElementById('game-results').innerHTML = playRockPaperScissors(playerSelection, computerSelection);
        //return displayGameResults;
        
    });
    
    scissorsButton.addEventListener('click', () => {
        const playerSelection = 'scissors';
        const computerSelection = computerplayer();
        document.getElementById('game-results').innerHTML = playRockPaperScissors(playerSelection, computerSelection);
        //return displayGameResults;
        
    });

}

playGame();

//let parentDiv = document.querySelector('#player-points');

//let textToAdd = document.createElement('p');
//textToAdd.classList.add('content');


//textToAdd.textContent = 'I am here';
//parentDiv.innerHTML += textToAdd.textContent = ' I am here';
//parentDiv.innerHTML += textToAdd.textContent('I am here')


//parentDiv.appendChild(textToAdd);

//computer-points






//playGame();
//function to loop through the game as many times as the user specifies 
//  function game() {
//     for (let i = 1; i < 6; i++) {
//         const playerSelection = playGame();
//         const computerSelection = computerplayer();
        
//         //display the user and computer selection and round number they're playing
//         const result = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
//         console.log(`Round ${i}: ${result}`);
//         console.log(playRockPaperScissors(playerSelection, computerSelection));
//     }    
    
// }

// console.log(game());

