// List of questions
const questionsList = [
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "answer": ["<javascript>", "<script>", "<js>", "<scripting>"],
        "correct": 1
    },
    {
        "question": "How do you write \"Hello World\" in an alert box?",
        "answer": ["<jaalertBox(\"Hello World\")", "<msg(\"Hello World\");>", "msgBox(\"Hello World\");", "alert(\"Hello World\");  "],
        "correct": 3
    },
    {
        "question": "How to write an IF statement in JavaScript?",
        "answer": ["if i == 5 then", "if (i == 5)", "if i = 5", "if i = 5 then"],
        "correct": 1
    },
    {
        "question": "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        "answer": ["if i =! 5 then", "if i <> 5", "if (i <> 5)", "if (i != 5)  "],
        "correct": 3
    },
    {
        "question": "How does a FOR loop start?",
        "answer": ["for i = 1 to 5", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)"],
        "correct": 2
    },
    {
        "question": "How can you add a comment in a JavaScript?",
        "answer": ["//", "'comment'", "'comment", "<!--comment-->"],
        "correct": 0
    },
    {
        "question": "How do you round the number 7.25, to the nearest integer?",
        "answer": ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"],
        "correct": 2
    },
    {
        "question": "How do you find the number with the highest value of x and y?",
        "answer": ["Math.ceil(x, y)", "top(x, y)", "Math.max(x, y)", "ceil(x, y)"],
        "correct": 2
    },
    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "answer": ["onchange", "onmouseover", "onclick", "onmouseclick"],
        "correct": 2
    },
    {
        "question": "How do you declare a JavaScript variable?",
        "answer": ["variable carName;", "var carName;", "v carName;", "None of above"],
        "correct": 1
    },
    {
        "question": "Which operator is used to assign a value to a variable?",
        "answer": ["*", "=", "x", "=="],
        "correct": 1
    },
    {
        "question": "How does a WHILE loop start?",
        "answer": ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "None of above"],
        "correct": 1
    },
    {
        "question": "How do you call a function named \"myFunction\"?",
        "answer": ["myFunction()", "call function myFunction()", "call myFunction()", "myFunction{}"],
        "correct": 0
    },
    {
        "question": "How do you create a function in JavaScript?",
        "answer": ["function = myFunction()", "function:myFunction()", "function myFunction()", "function.myFunction()"],
        "correct": 2
    },
    {
        "question": "Where is the correct place to insert a JavaScript?",
        "answer": ["The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section", "The <main> section"],
        "correct": 1
    },
]

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

function startTimer(){
    var totalTime = 75;

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