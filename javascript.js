//not finished but i'm tired of working on it

//let runningTotal = 0;

let playerOnePoints = 0;
let playerTwoPoints = 0;



//TODO add logic to add player wins in this function?


function computerTurn() {
    let computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
        computerInput = 'rock';
    }  else if (computerInput === 1) {
        computerInput = 'paper';
    } else {
        computerInput = 'scissors';
    }
    return computerInput;
};

const options = document.querySelectorAll('.userOptions');
options.forEach((option) => {
    option.addEventListener('click', function() {
        ///fetch users input with the text value
        //this = button that was clicked
        const playerInput = this.textContent;
        const computerInput = computerTurn()

        compare(playerInput, computerInput)

    })
})
// const testDiv = document.getElementsByClassName('myDiv');
// //const para = document.createElement('div');
// const para = document.createElement('p');
// para.innerHTML += 'this worked';
// testDiv[0].appendChild(para);

let playerWins = 0;
let computerWins = 0;
const runningScore = `Player points: ${playerWins}, Computer points: ${computerWins}`;

function compare(player, computer) {
    let gameDiv = document.getElementsByClassName('myDiv');
    const para = document.createElement('p');


    const currentMatch = `You chose ${player} and the Computer chose ${computer}`;
    

    //check for a tie
    if (player === computer) {
        gameDiv.textContent = 'it\'s a tie';
        return;
    }

    //rock
    if (player === 'rock') {
        if (computer === 'scissors') {
            para.textContent = `${currentMatch}, which means You win`;
            gameDiv[0].appendChild(para);
            playerWins += 1;
            //para.textContent += ` .${runningScore}`;
        } else {
            para.textContent = `${currentMatch}, which means Computer wins`;
            gameDiv[0].appendChild(para);
            computerWins += 1;
            //para.textContent += ` .${runningScore}`;
        }
        
    }

    //paper
    if (player === 'paper') {
        if (computer === 'rock') {
            para.textContent = `${currentMatch}, which means You win`;
            gameDiv[0].appendChild(para);
            playerWins += 1;
            //para.textContent += ` .${runningScore}`;
        } else {
            para.textContent = `${currentMatch}, which means Computer wins`;
            gameDiv[0].appendChild(para);
            computerWins += 1;
            //para.textContent += ` .${runningScore}`;
        }
    }

    //scissors
    else {
        if (computer === 'paper') {
            para.textContent = `${currentMatch}, which means You win`;
            gameDiv[0].appendChild(para);
            playerWins += 1;
            //para.textContent += ` .${runningScore}`;
        } else {
            para.textContent = `${currentMatch}, which means Computer wins`;
            gameDiv[0].appendChild(para);
            computerWins += 1;
            //para.textContent += ` .${runningScore}`;
        }
    }
    return playerWins, computerWins

}




