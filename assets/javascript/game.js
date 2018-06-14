
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var lettersGuessed = [];
var guessesLeft = 9;
var lettersToGuess = null;

var computerGuess = choices[Math.floor(Math.random() * choices.length)];
console.log(computerGuess);
var updateGuessesLeft = function() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};
var updateLetterToGuess = function () {
    this.letterToGuess = this.choices[Math.floor(Math.random() * this.choices.length)];
};
var updateGuessesSoFar = function() {
    document.querySelector("#guessesSoFar").innerHTML = "Your Guesses so far: " + lettersGuessed.join(', ');
};
var updatecomputerGuess = function() {
    computerGuess = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerGuess);
}
var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
    updatecomputerGuess();
};
updateLetterToGuess();
updateGuessesLeft();
document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    lettersGuessed.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

        if (guessesLeft > 0 && userGuess === computerGuess) {
            
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            alert( "You've selected the correct letter!");
            reset();
        }

        else if (guessesLeft === 0 && userGuess !== computerGuess){
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("You've selected incorrectly!");
            reset();
        }
        
    
}