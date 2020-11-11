
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

// Stop the time after the quiz is done
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

// Show score list page after enter initial and submit score
function afterQuizResult() {
    document.getElementById("enterName").classList.add("hidden");
    document.getElementById("afterQuiz").classList.remove("hidden");

    var scoreList = document.getElementById("scoreList");

    for (var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(localStorage.key(i));
        let li = document.createElement("li")
        li.textContent = key + ": " + value;
        scoreList.append(li);
    }
}

//Go back to start the quiz again function
function goBack() {
    // questionBlockEl.setAttribute("class", "hidden");

}

//clear Scores function
function clearScore() {
    clearInterval(interval)
}