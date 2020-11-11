
// List of questions
var questionsList = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: ["javascript", "script", "js", "scripting"],
        correctAnswer: 1
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answer: ["jaalertBox(\"Hello World\")", "msg(\"Hello World\");>", "msgBox(\"Hello World\");", "alert(\"Hello World\");"],
        correctAnswer: 3
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answer: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i = 5 then"],
        correctAnswer: 1
    },
    // {
    //     "question": "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
    //     "answer": ["if i =! 5 then", "if i <> 5", "if (i <> 5)", "if (i != 5)  "],
    //     correctAnswer: 3
    // },
    // {
    //     "question": "How does a FOR loop start?",
    //     "answer": ["for i = 1 to 5", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)"],
    //     correctAnswer: 2
    // },
    // {
    //     "question": "How can you add a comment in a JavaScript?",
    //     "answer": ["//", "'comment'", "'comment", "<!--comment-->"],
    //     correctAnswer: 0
    // },
    // {
    //     "question": "How do you round the number 7.25, to the nearest integer?",
    //     "answer": ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"],
    //     correctAnswer: 2
    // },
    // {
    //     "question": "How do you find the number with the highest value of x and y?",
    //     "answer": ["Math.ceil(x, y)", "top(x, y)", "Math.max(x, y)", "ceil(x, y)"],
    //     correctAnswer: 2
    // },
    // {
    //     "question": "Which event occurs when the user clicks on an HTML element?",
    //     "answer": ["onchange", "onmouseover", "onclick", "onmouseclick"],
    //     correctAnswer: 2
    // },
    // {
    //     "question": "How do you declare a JavaScript variable?",
    //     "answer": ["variable carName;", "var carName;", "v carName;", "None of above"],
    //     correctAnswer: 1
    // },
    // {
    //     "question": "Which operator is used to assign a value to a variable?",
    //     "answer": ["*", "=", "x", "=="],
    //     correctAnswer: 1
    // },
    // {
    //     "question": "How does a WHILE loop start?",
    //     "answer": ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "None of above"],
    //     correctAnswer: 1
    // },
    // {
    //     "question": "How do you call a function named \"myFunction\"?",
    //     "answer": ["myFunction()", "call function myFunction()", "call myFunction()", "myFunction{}"],
    //     correctAnswer: 0
    // },
    // {
    //     "question": "How do you create a function in JavaScript?",
    //     "answer": ["function = myFunction()", "function:myFunction()", "function myFunction()", "function.myFunction()"],
    //     correctAnswer: 2
    // },
    // {
    //     "question": "Where is the correct place to insert a JavaScript?",
    //     "answer": ["The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section", "The <main> section"],
    //     correctAnswer: 1
    // },
]


var startingEl = document.getElementById("startingPage");
var questionBlockEl = document.getElementById("questionBlock");
var questionEl = document.getElementById("questions");
var answerEl = document.getElementById("answerBlock");
var timeEl = document.getElementById("timer");


// Varible for Button functioning
var startBtn = document.getElementById("startBtn")
var submitBtn = document.querySelector("#submit")
// var goBackBtn = document.querySelector("#backBtn")
// var clearBtn = document.querySelector("#clearScoreBtn")

// Click buttons
startBtn.addEventListener("click", startQuiz)
answerEl.addEventListener("click", nextQuestion);

submitBtn.addEventListener("click", submitResult)
// goBackBtn.addEventListener("click", goBack)
// clearBtn.addEventListener("click", clearScore)

var interval;
var totalTime = 5; // set the total time = 75 seconds
// var currentQuestion = 0;

// Start the quiz after click `start
function startQuiz() {
    hiddenAndDisplay();
    timerCount();
    nextQuestion();
}

// Countdown the time 
function timerCount() {
    interval = setInterval(countDown, 1000); // time will count down every 1 second

    // function to count down the time
    function countDown() {
        totalTime--;
        timeEl.innerHTML = "Time Left: " + totalTime + " s"; // place the time into html to show on browser
    }
}

// Hidden and Display pages
function hiddenAndDisplay() {

    console.log(currentQuestion);

    startingEl.setAttribute("class", "hidden"); //hidden the starting Page

    document.getElementById("questionBlock").classList.remove("hidden"); // remove hidden class to displace question page.
    questionDisplay(); // Then append question and answer button.
}

var currentQuestion = 0;

// append questions and answer button
function questionDisplay() {

    questionEl.textContent = questionsList[currentQuestion].question;

    for (var i = 0; i < questionsList[currentQuestion].answer.length; i++) {
        var li = document.createElement("button"); //creating button element
        li.setAttribute("class", "answer"); // give buttons a class = answer
        li.setAttribute("data-answer", i); // give buttons a data-answer
        li.innerHTML = questionsList[currentQuestion].answer[i];
        answerEl.append(li);
    }
    // console.log(currentQuestion);
}

// check for the answer if it correct or wrong.
function checkAnswer(answerValue) {

    var tellTheAnswer = document.getElementById("correctAnswer");

    if (answerValue === questionsList[currentQuestion].correctAnswer) {
        tellTheAnswer.textContent = "Correct"
    }
    else {
        tellTheAnswer.textContent = "Wrong"
    }
}

// Clear old question function
function removeOldQuestion() {

    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

// run the next question function after click on any answer
function nextQuestion(event) {

    var targeting = event.target;
    // console.log (event);

    if (targeting.matches("button")) {
        event.preventDefault;
        var answerValue = parseInt(targeting.getAttribute("data-answer"))
        checkAnswer(answerValue); // check the answer and tell user it is correct or Wrong
        removeOldQuestion(); // remove the questions and answer function
        currentQuestion++; // add +1 to currentQuestion for next question
        // console.log(currentQuestion);

        submiting(currentQuestion);
        // console.log(answerValue)

    }
}

// switch to initial and score pages
function submiting(currentQuestion) {
    // console.log(currentQuestion)

    if (currentQuestion <= 2) {

        questionDisplay();
    }
    else {

        questionBlockEl.setAttribute("class", "hidden");
        document.getElementById("enterName").classList.remove("hidden");
        var myScore = document.getElementById("result");
        myScore.innerHTML = "Your score is: " + totalTime;
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(interval);
}

//Enter, save and Show initial and scores
function submitResult() {
    var nameInitial = document.getElementById("your-Name").value;
    // console.log(nameInitial);
    localStorage.setItem(nameInitial, totalTime);
    afterQuizResult();
}

// 
function afterQuizResult() {
    document.getElementById("enterName").classList.add("hidden");
    document.getElementById("afterQuiz").classList.remove("hidden");

    var scoreList = document.getElementById("ssss");

    for (var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(localStorage.key(i));
        let li = document.createElement("li")
        li.textContent = key + ": " + value;
        scoreList.append(li);
    }

    // for (i = 0; i < localStorage.length; i++) {
    //     var arry = localStorage.getItem(localStorage.key(i));
    //     console.log(arry);
    // }
}

//Go back to start the quiz again function
function goBack() {
    // questionBlockEl.setAttribute("class", "hidden");

}

//clear Scores function
function clearScore() {
    clearInterval(interval)
}


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
    * set starting score = 75

    * Start the interval to begin the score countdown.

    * Present the question = create new html elements for my question content

        > Set the #question div's innerHTML = "";
        > Append a H2 for the question text
        > Append a new button for each choice

        > var button = document.createElement("button")
        > button.textContent = questionText
        > button.setAttribute("data-answer", questionText)

WHEN I answer a question

* When the user clicks one of my answer buttons

WHEN I answer a question incorrectly

    event.target.matches("button")

    > var clickButtoncontent = event.target.textContent;
    > var clickButtonValue = event.target.getAttribute("data-answer")

    > the question is correct with clickButtonValue == question[pointer].answer

THEN time is subtracted from the clock

    > subtract points from my current score

THEN I am presented with another question

* Increase our pointer by 1

* Present the next question

WHEN all questions are answered or the timer reaches 0



THEN the game is over
    > clearInterval ( interval )
    > Clear out current question or hide the #question element
    > Show our result form for getting the user's initials

WHEN the game is over
THEN I can save my initials and score

    > ON my initial form "submit"

        > var highscore = [];
        > Get the currently saved highscores out localStorage.getItem("highscores").
        > if(stored high score) highscores = JSON.parse(stored high score)
        > else highscore = [];
        > Create a new list
        > Get the value of the initial's input
        > Append a object with the initial's and score
        > Store our score in local storage
*/