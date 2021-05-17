var timeDisplay = document.getElementById("counter")
var timer = document.getElementById("second")
var startBtn = document.getElementById("startBtn")
var questionDiv = document.getElementById("question")
var answerBtn1 = document.getElementById("answer1")
var answerBtn2 = document.getElementById("answer2")
var answerBtn3 = document.getElementById("answer3")
var answerBtn4 = document.getElementById("answer4")
var feedback = document.getElementById("response")
var title = document.getElementById("pageTitle")
var questionNum = 0
var timeLeft = 0
var quizTime = 0
var score = 0
// All Questions

var theQuestions = [
    {
        title: "Where is the correct place to insert a JavaScript",
        choices: ["Both the head and the body section are corect", "the body section", "the head section", " In a CSS file only"],
        answer: "Both the head and the body section are corect"
    },
    {
        title: "Arrays in Javascript can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["prompts", "booleans", "strings", "numbers"],
        answer: "prompts"
    },
    {
        title: "How do you declare a JavaScript variable",
        choices: ["var carName", " variable carName", "v carName", "function()"],
        answer: "var carName"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices: ["if (i == 5)", "if i == 5 then", "if i = 5", "if i = 5 then"],
        answer: "Both the head and the body section are corect"
    },


];


// this if statment checks current page is on highscore page
if (title.innerHTML === "Highscores") {
    theTable();
}

// set initial timer value and fire off two functions
function quizBegin() {
    timeLeft = 60
    beginTimer();
    initQ();
}
//  function changes timer display every secCounter (second)
function beginTimer() {
    timer.innerHTML = (timeLeft);
    quizTime = setInterval(secCounter, 1000);
}
//  function equates a secCounter to a second and determines when timer reaches zero
function secCounter() {
    if (timeLeft !== 0) {
        timeLeft--
        timer.innerHTML = (timeLeft)
    }
    else {
        clearInterval(quizTime)
        quizOver();
    }
    return;
}
//  function hides initial elements and shows quiz relevant ones, then starts main quiz function
function initQ() {
    document.querySelectorAll(".main").forEach(main => { main.style.display = "none" })
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "initial" })
    quiz(questionNum);
}
//  function checks if there are anymore questions and if not ends the quiz
function quiz() {
    if (questionNum >= theQuestions.length) {
        quizOver();
    }
    else {
        questionDiv.innerHTML = (theQuestions[questionNum].title)
        answerBtn1.innerHTML = (theQuestions[questionNum].choices[0])
        answerBtn2.innerHTML = (theQuestions[questionNum].choices[1])
        answerBtn3.innerHTML = (theQuestions[questionNum].choices[2])
        answerBtn4.innerHTML = (theQuestions[questionNum].choices[3])
    }
}
//  function checks whether or not answer is the correct one
function answerCheck(btnId) {
    if ((document.getElementById(btnId).innerHTML) === (theQuestions[questionNum].answer)) {
        rightAnswer();
        questionNum++
    }
    else {
        wrongAnswer();
        questionNum++
    }
    quiz(questionNum);
}
//  this function runs when answer is right
function rightAnswer() {
    score = timeLeft
    feedback.innerHTML = ("Correct");
    setTimeout(function () { feedback.innerHTML = (""); }, 800)
}
//  this function runs when answer is wrong
function wrongAnswer() {
    timeLeft = (timeLeft - 15)
    feedback.innerHTML = ("Wrong");
    setTimeout(function () { feedback.innerHTML = (""); }, 800)
}

//  this function generates the end screen and allows user to submit initials with their score
function quizOver() {
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "none" })
    var content = document.getElementById('theBody')
    var done = document.getElementById("done")
    var submit = document.getElementById("submit")

    timer.innerHTML = (0)

    content.insertAdjacentHTML('afterbegin', '<h1 id="done">All Done!</h1> <button id="submit" class="btn btn-danger">Submit</button> <input id="userScore"> - Enter Initials</input>');

    var done = document.getElementById("done")
    done.insertAdjacentHTML('afterend', '<p id="finalScore">Your final score is ' + score + '</p>');

    var submit = document.getElementById("submit")
    submit.addEventListener("click", function () {
        var value = document.getElementById('userScore').value;
        localStorage.setItem(value, score)
        window.location.href = "highscore.html"
    });
    clearInterval(quizTime)
}

// this function renders the table on the highscore table with the scores from local storage
function theTable() {
    var tbody = document.getElementById("tableBody")
    for (let i = 0; i < localStorage.length; i++) {
        var userName = localStorage.key(i)
        var userScore = localStorage.getItem(userName)
        tbody.insertAdjacentHTML('afterbegin', '<tr class="scores"><td>' + userName + ' - ' + userScore + '</td></tr>')
    }
}
//  this function has the clear highscores button work by clearing local storage and re-rendering table
function clearStorage() {
    localStorage.clear();
    window.location.reload();
}