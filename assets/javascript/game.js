// Random number is generated at start of game. This number can be any integer between 19 and 120
// Crystals are images, and also clickable buttons (bootstrap required). A click of any crystal will result in adding a predetermined random amount to your score. This random amount stays fixed until the game ends, after which it is reset to a different value 
// Crystals are randomly generated numbers between 1 and 12.
// Win game once score === random number. Lose game if score > random number.
// Updates the stats for wins, losses. Reset number to a different random number.

var randomTarget = 0;


//Functions to generate random numbers and keep track of score.

function getRandomNumber() {
    randomTarget = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#randomTarget").html(randomTarget);
}
console.log(randomTarget);




// The Main Process

getRandomNumber();