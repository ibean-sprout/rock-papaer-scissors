//create computerplayer function that randomly generates rock/paper/scissors

/*choices = ['rock', 'paper', 'scissors'];

let computerplayer = Math.floor(Math.random(choices.length) * 3) + 1;
console.log(computerplayer[choices]);*/

function computerplayer() {
    choices = ['rock', 'paper', 'scissors'];
    //choice randon item from choices array
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerplayer());