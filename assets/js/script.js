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
    {// #1 
        title: "Which of the following is NOT a correct characterization of batch processing?",
        choices: ["(A) It allows immediate updating of master files. ", "(B) It provides physical batch totals to be used in control procedures. ","(C) It provides efficient updating of master files.", 
        "(D) It is most applicable for processing routine periodic activities.", "(E) It allows efficient scheduling of processing."],
        answer: "(A) It allows immediate updating of master files. "
    },
    {// #2
        title: "What is the primary difference between an intranet Web page and an Internet Web page?",
        choices: ["(A) servers", "(B) ethernet access", "(C) restiction of access", "(D) wifi access"],
        answer: "(C) restiction of access"
    },
    {// #3 
        title: "A network administrator is LEAST likely to recommend which of the following technologies to share large quantities of information in a knowledge management system?",
        choices: ["(A) Intranet", "(B) Wiki", "(C) E-mail", "(D) Discussion board", "(E) Shared network drive"],
        answer: "(C) E-mail"
    },
    {// #3 
        title: "Which of the following is a database whose data are scattered across several physical servers?",
        choices: ["(A) Data mine", "(B) Data warehouse", "(C) Relational database", "(D) Distributed database", "(E) Integrated database"],
        answer: "(D) Distributed database"
    },
    {// #4
        title: "Metadata is best described as what?",
        choices: ["(A) restricted data", "(B) attribute", "(C) .mp3, .wav, .pdf files", "(D) data about data"],
        answer: "(D) data about data"
    },
    {// #5
        title: "Which of the following is NOT an advantage of having an entire department using the same office software suite?",
        choices: ["(A) Lower cost per application than if purchased individually", "(B) Ease of moving data between suite applications", "(C) Ease of moving data between users in the same department", "(D) Optimal functionality of individual application packagese"],
        answer: "(D) Optimal functionality of individual application packages"
    },
    {// #6 
        title: "Which of the following is NOT a means of secondary storage?",
        choices: ["(A) External hard drive", "(B) Cache memory", "(C) USB flash drive", "(D) Cloud storage"],
        answer: "(B) Cache memory"
    },
    {// #7
        title: "What is used to transmit data from Earth to a satellite and back?",
        choices: ["(A) radiowaves", "(B) gps transmisson", "(C) lightwaves", "(D) microwaves"],
        answer: "(D) microwaves"
    },
    {// #8
        title: "Which of the following network technologies allows secure transmission of data over an unsecured public network link between private networks?",
        choices: ["(A) Local area network", "(B) Wide area network", "(C) Virtual private network", "(D) Intranet"],
        answer: "(C) Virtual private network"
    },
    {// #9 
        title: "Which of the following is a goal of green computing?",
        choices: ["(A) Reducing the potential for a computer to become infected with malware", "(B) Reducing the number of people experiencing computer vision syndrome", "(C) Reducing power consumption of computers and peripherals", "(D) Optimizing the human-computer interface", "(E) Building relationships between computer manufacturers and environmental groups"],
        answer: "(D) Optimizing the human-computer interface"
    },
    {// #10
        title: "Which of the following is true about EDI? Select all that apply. <br> A) The EDI documents generally contain the same information found in paper documents <br> B) The EDI documents are more likely than paper documents to contain errors <br> C) The speed in which the EDI documents are exchanged is much faster than that of paper documents.",
        choices: ["(A) B and C", "(B) A and C", "(C) A, B & C", " (D) none of the above"],
        answer: "(B) A and C"
    },
    {// #11 
        title: "Which of the following would NOT be considered an input device for a computer system?",
        choices: ["(A) Image scanner", "(B) Webcam", "(C) Keyboard", "(D) PC speaker"],
        answer: "(D) PC speaker"
    },
    {// #12 
        title: "In a relational database, each column represents?",
        choices: ["(A) a record", "(B) an attribute", "(C) a key", "(D) an entity"],
        answer: "(B) an attribute"
    },
    {// #13
        title: "Conversion of data files is part of which of the following phases of the system development process?",
        choices: ["(A) Analysis incorrect", "(B) Design", "(C) Implementation", "(D) Development"],
        answer: "(C) Implementation"
    },
    {// #14
        title: "Enforcing programming standards in the software development process has which of the following impacts? Select all that apply <br> A) Establishing common expectations <br> B) Making it easier to modify code <br> C) Enhancing the end-user experience",
        choices: ["(A) A and B", "(B) A and C", "(C) A, B & C", " (D) none of the above"],
        answer: "(A) A and B"
    },
    {// #15
        title: "Which of the following statements about EDI is FALSE?",
        choices: ["(A) EDI documents contain the same information that would be found in paper documents.", "(B) EDI provides the infrastructure for both voice and data communication.", "(C) EDI standards are industry specific.", "(D) EDI enables the digital transmission of invoices."],
        answer: "(B) EDI provides the infrastructure for both voice and data communication."
    },
    {// #16
        title: "What is the term that refers to the downloading of live video, audio, or animation in such a manner that the user can begin to access the content before the download is complete?",
        choices: ["(A) Spooling", "(B) Streaming", "(C) Flaming", "(D) Spamming", "(E) Queuing"],
        answer: "(B) Streaming"
    },
    {// #17
        title: "The ABC Charity Association, a nonprofit foundation, has a home page on the World Wide Web. Which of the following is the most likely URL for its home page?",
        choices: ["(A) http://www.abc-charity.gov", "(B) http://www.abc-charity.edu", "(C) http://www.abc-charity.com", "(D) http://www.abc-charity.org"],
        answer: "(D) http://www.abc-charity.org"
    },
    {// #18
        title: "A user has visited several websites, making purchases, initiating searches, and filling out online forms. Which of the following could the user access to revisit the websites?",
        choices: ["(A) Cookies", "(B) Web Browser History", "(C) Internet preferences", "(D) Web privacy settings"],
        answer: "(B) Web Browser History"
    },
    {// #19
        title: "Which of the following is NOT true of social networking sites?",
        choices: ["(A) It is unethical for a company recruiting prospective employees to track their presence on and posts to social networking sites.", "(B) Any unethical activity on a social networking site could have negative consequences outside the site", "(C) Some sites enable members to share material with many other members simultaneously." , "(D) Some sites enable members to maintain contact with other members."],
        answer: "(A) It is unethical for a company recruiting prospective employees to track their presence on and posts to social networking sites."
    },
    {// #20
        title: "Planning, scheduling, and overseeing the development of a new information system are all components of which of the following?",
        choices: ["(A) Systems analysis", "(B) System modeling", "(C) Project management", "(D) Cost-benefit analysis"],
        answer: "(C) Project management"
    },
    {// #21
        title: "In considering the economic feasibility of a systems development project, which of the following would a project manager be LEAST likely to consider?",
        choices: ["(A) Whether the hardware can be acquired for the project", "(B) The return on the initial investment on the system", "(C) When the project will break even", "(D) Whether the company can afford the project"],
        answer: "(A) Whether the hardware can be acquired for the project"
    },
    {// #22
        title: "Managers in an organization often use spreadsheets to assist with decision making. The process of using a spreadsheet to try out alternatives is called?",
        choices: ["(A) what-if analysis" , "(B) data mining", "(C) flowcharting" ,"(D) querying","(E) data manipulation"],
        answer: "(A) what-if analysis"
    }
    // {// #23 
    //     title: "What term identifies the measure of accuracy, completeness, and currency of data?",
    //     choices: ["(A) Data dependency,"(B) Data integration", "(C) Data integrity", "(D) Data redundancy"],
    //     answer: "(C) Data integrity"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #25
    //     title: "Which of the following best characterizes data in a data warehouse?",
    //     choices: ["(A) Historical", "(B) Normalized", "(C) Relational", "(D) Volatile"],
    //     answer: "(A) Historical"
    // },
    // {// #26
    //     title: "Which of the following best describes how GPS units function?",
    //     choices: ["(A) The receiver sends out regular query pulses and waits to receive responses from a GPS satellite.", "(B) The receiver is passive and listens for the regular signals from GPS satellites, which are then processed to find the distance from the satellites.", "(C) The receiver sends out radio signals that are reflected back by satellites and detected by the unit.", "(D) The receiver acts as a homing beacon that is tracked by the GPS satellites, which periodically send out position updates for each tracked receiver."],
    //     answer: "(B) The receiver is passive and listens for the regular signals from GPS satellites, which are then processed to find the distance from the satellites."
    // },
    // {// #27
    //     title: "Which of the following is the most likely negative consequence of participating in a social networking website?",
    //     choices: ["(A) Unintended disclosure of private information", "(B) Increase in spam", "(C) Infection by a virus", "(D) Download of a cookie containing personal preferences"],
    //     answer: "(A) Unintended disclosure of private information"
    // },
    // {// #28
    //     title: "Are digital signatures encrypted?",
    //     choices: ["(A) Yes", "(B) No", "(C) N/A", "(D) N/A"],
    //     answer: "(A) Yes"
    // },
    // {// #29
    //     title: "Do data signatures authenticate user identity?",
    //     choices: ["(A) Yes", "(B) No", "(C) N/A", "(D) N/A"],
    //     answer: "(A) Yes"
    // },
    // {// #30
    //     title: "Do data signatures authenticate user identity?",
    //     choices: ["(A) Yes", "(B) No", "(C) N/A", "(D) N/A"],
    //     answer: "(A) Yes"
    // },
    // {// #31
    //     title: "Do data signatures typically involve CAPTCHAs?",
    //     choices: ["(A) Yes", "(B) No", "(C) N/A", "(D) N/A"],
    //     answer: "(B) No"
    // },
    // {// #32
    //     title: "Can data signatures replace ink-based signatures?",
    //     choices: ["(A) Yes", "(B) No", "(C) N/A", "(D) N/A"],
    //     answer: "(A) Yes"
    // },
    // {// #24 -- HERE --- 
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },    
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },    
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },    
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },    
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },    
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },    
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },    
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },    
    // {// #24
    //     title: "The special formatting language used to create Web pages is called?",
    //     choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
    //     answer: "(A) HTML"
    // },
];

// this if statment checks current page is on highscore page
if (title.innerHTML === "Highscores") {
    theTable();
}

// this function sets timer value and triggers two functions
function quizBegin() {
    timeLeft = 150
    beginTimer();
    initQ();
}
//  this function changes timer display every (second)
function beginTimer() {
    timer.innerHTML = (timeLeft);
    quizTime = setInterval(secCounter, 1000);
}
//  this function equates to a second, then identifies when timer is at 0
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
//  this function hides initial elements, Moves on to display quiz.
function initQ() {
    document.querySelectorAll(".main").forEach(main => { main.style.display = "none" })
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "initial" })
    quiz(questionNum);
}
//  this function checks if there are anymore questions or else will end quiz
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
        answerBtn5.innerHTML = (theQuestions[questionNum].choices[4])
    }
}
//  this function checks for correct or wrong answers
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
//  function runs when answer is right
function rightAnswer() {
    timeLeft = (timeLeft + 5) 
    score = timeLeft
    feedback.innerHTML = ("Correct");
    setTimeout(function () { feedback.innerHTML = (""); }, 800)
}
//  function runs when answer is wrong
function wrongAnswer() {
    timeLeft = (timeLeft - 10)
    score = timeLeft
    feedback.innerHTML = ("Wrong");
    setTimeout(function () { feedback.innerHTML = (""); }, 800)
}

//  this function moves user to the end screen, allows user to submit initials with their score
function quizOver() {
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "none" })
    var content = document.getElementById('theBody')
    var done = document.getElementById("done")
    var submit = document.getElementById("submit")

    timer.innerHTML = (0)

    content.insertAdjacentHTML('afterbegin', '<h1 id="done">All Done!</h1> <button id="submit" class="btn btn-info">Submit</button> <input id="userScore"> - Enter Initials</input>');

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

// function displays the table on the highscore table along with scores from local storage
function theTable() {
    var tbody = document.getElementById("tableBody")
    for (let i = 0; i < localStorage.length; i++) {
        var userName = localStorage.key(i)
        var userScore = localStorage.getItem(userName)
        tbody.insertAdjacentHTML('afterbegin', '<tr class="scores"><td>' + userName + ' --- ' + userScore + '</td></tr>')
    }
}
// function shows clear highscores button work by clearing local storage and reload game button
function clearStorage() {
    localStorage.clear();
    window.location.reload();
}