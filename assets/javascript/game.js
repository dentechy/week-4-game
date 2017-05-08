// Random number is generated at start of game. This number can be any integer between 19 and 120
// Crystals are images, and also clickable buttons (bootstrap required). A click of any crystal will result in adding a predetermined random amount to your score. This random amount stays fixed until the game ends, after which it is reset to a different value 
// Crystals are randomly generated numbers between 1 and 12.
// Win game once score === random number. Lose game if score > random number.
// Updates the stats for wins, losses. Reset number to a different random number.

var randomTarget = 0;
var rubyGem = 0;
var emeraldGem = 0;
var sapphireGem = 0;
var topazGem = 0;
var userScore = 0;
var wins = 0;
var losses = 0;


//Functions to generate random numbers and keep track of score.

function getRandomNumber() {
    randomTarget = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#randomTarget").html(randomTarget);
}

function gemButtons() {
    rubyGem = Math.floor(Math.random() * (13 - 1)) + 1;
    emeraldGem = Math.floor(Math.random() * (13 - 1)) + 1;
    sapphireGem = Math.floor(Math.random() * (13 - 1)) + 1;
    topazGem = Math.floor(Math.random() * (13 - 1)) + 1;
} 

//This function below ensures that none of the buttons have the same number.
function checkEquality() {
    var gemArr = [rubyGem, emeraldGem, sapphireGem, topazGem];
//Need to iterate through the array, checking a pair of variables at a time for equality. A total of 6 comparisons need to be made to account for all possible combinations. 
    for (i = 0; i < gemArr.length; i++) {
        if (gemArr[i] === gemArr[i+1]) {
            gemButtons(); //runs the randomization function again
        }
        else if (gemArr[i] === gemArr[i+2]) {
            gemButtons();
        }
        else if (gemArr[i] === gemArr[i+3]) {
            gemButtons();
        }
    }
}
// The Main Process

getRandomNumber();

gemButtons();
checkEquality();

$("#ruby").click(function() {
    userScore = userScore + rubyGem;
    $("#userScore").html("<p>" + userScore + "</p>");
});

$("#emerald").click(function() {
    userScore = userScore + emeraldGem;
    $("#userScore").html("<p>" + userScore + "</p>");
});
$("#sapphire").click(function() {
    userScore = userScore + sapphireGem;
    $("#userScore").html("<p>" + userScore + "</p>");
});
$("#topaz").click(function() {
    userScore = userScore + topazGem;
    $("#userScore").html("<p>" + userScore + "</p>");
});