// Varible for Button functioning
var startBtn = document.querySelector("#startBtn")
var submitBtn = document.querySelector("#submit")
var goBackBtn = document.querySelector("#backBtn")
var clearBtn = document.querySelector("#clearScoreBtn")

startBtn.addEventListener("click", startQuiz)
// submitBtn.addEventListener("click", submitResult)
// goBackBtn.addEventListener("click", goBack)
// clearBtn.addEventListener("click", clearScore)

var interval;

// Start the quiz
function startQuiz(){
    startTimer();
}

// function renderTime(){
//     secondsDisplay.textContent = getFormattedSeconds();
// }
//console.log(startTimer);

function startTimer(){
    var totalTime = 10;

    var timeDisplace = document.getElementById("timer");

    interval = setInterval(countDown, 1000);

    function countDown(){
        if(totalTime >= 0){
            timeDisplace.innerHTML = "Time Left: " + totalTime + "s";
            totalTime--;
        }
        // else{
        //     clearInterval(interval)
        // }
    }
}

// Enter, save and Show initial and scores
// function submitResult() {

// }

// Go back to start the quiz again function
// function goBack(){

// }

// clear Scores function
// function clearScore (){

// }


/*
# Your Task

* setInterval to do the "timed" functionality

* clearInterval to stop the timeout

* VAR currentScore/timeLeft.

* VAR questions - Array

* Var pointer/index - Current position in the question array

```
var questions = [
    {
        question text
        List of Question answer
        Correct Answer
    }
]
```
GIVEN I am taking a code quiz

WHEN I click the `start button`
```
    function startGame (){
        
    }
```
    `start button` . addEventListener("click", function() {});

THEN a timer starts and I am presented with a question  
```
    set starting score = 75

    Start the interval to begin the score countdown.

WHEN I answer a question  
THEN I am presented with another question  
WHEN I answer a question incorrectly  
THEN time is subtracted from the clock  
WHEN all questions are answered or the timer reaches 0  
THEN the game is over  
WHEN the game is over  
THEN I can save my initials and score 

*/