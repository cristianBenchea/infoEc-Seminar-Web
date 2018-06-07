/**
 * Created by Benchea on 07.06.2018.
 */
$(document).ready(function () {
    var level        = Number(prompt("Pick a difficulty level (1,2 or 3)")),
        number       = 0,
        guesses      = 0,
        playerGuess  = 0;
    if(level === 1){
        number = Math.floor((Math.random()*10)+1);
    } else if(level === 2){
        number = Math.floor((Math.random()*100)+1);
    } else if(level === 3){
        number = Math.floor((Math.random()*1000)+1);
    }
    $("#content").append("Let's play Guess the Number. <br> Pick a difficulty level (1, 2, or 3): " + level + "<br>");
    console.log(number);
    while(playerGuess !== number){
        playerGuess = Number(prompt("I have my number. What's your guess?"));
        guesses++;
        if(playerGuess < number){
            alert("Too low. Guess again: " + guesses);
        } else if (playerGuess > number){
            alert("Too high. Guess again: " + guesses);
        } else if(playerGuess === number){
            alert("You got it in " + guesses + " guesses");
            var playAgain = confirm("Play again?");
            if(playAgain == true){
                location.reload();
            } else {
                $("#content").append("You got it in " + guesses + " guesses <br>");
                $("#content").append("Goodbye!");
            }
        }
    }

});