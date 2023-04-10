
var countdown = document.querySelector(".timer");
var scores = document.querySelector(".highScores");
var start = document.querySelector("#button");
var questions = document.querySelector(".questions");

var secondsLeft = 30;
//add event listener on click for start button//
function timed(){
    seconds = setInterval(function() {
        secondsLeft--;
        countdown.textContent = "Timer: " + secondsLeft;
        console.log(secondsLeft);
        if(secondsLeft === 0) {
            clearInterval(countdown);
            gameMessage();
        }
    }, 1000);   
}

function gameMessage(){
    countdown.textContent = "GAME OVER!"
}
timed();