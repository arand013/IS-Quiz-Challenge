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
        "(D) It is most applicable for processing routine periodic activities."],
        answer: "(A) It allows immediate updating of master files. "
    },
    {// #2
        title: "What is the primary difference between an intranet Web page and an Internet Web page?",
        choices: ["(A) servers", "(B) ethernet access", "(C) restiction of access", "(D) wifi access"],
        answer: "(C) restiction of access"
    },
    {// #3 
        title: "A network administrator is LEAST likely to recommend which of the following technologies to share large quantities of information in a knowledge management system?",
        choices: ["(A) Intranet", "(B) Wiki", "(C) E-mail", "(D) Discussion board"],
        answer: "(C) E-mail"
    },
    {// #4
        title: "Which of the following is a database whose data are scattered across several physical servers?",
        choices: ["(A) Data mine", "(B) Data warehouse", "(C) Relational database", "(D) Distributed database"],
        answer: "(D) Distributed database"
    },
    {// #5
        title: "Metadata is best described as what?",
        choices: ["(A) restricted data", "(B) attribute", "(C) .mp3, .wav, .pdf files", "(D) data about data"],
        answer: "(D) data about data"
    },
    {// #6
        title: "Which of the following is NOT an advantage of having an entire department using the same office software suite?",
        choices: ["(A) Lower cost per application than if purchased individually", "(B) Ease of moving data between suite applications", "(C) Ease of moving data between users in the same department", "(D) Optimal functionality of individual application packages"],
        answer: "(D) Optimal functionality of individual application packages"
    },
    {// #6 
        title: "Which of the following is NOT a means of secondary storage?",
        choices: ["(A) External hard drive", "(B) Cache memory", "(C) USB flash drive", "(D) Cloud storage"],
        answer: "(B) Cache memory"
    },
    {// #8
        title: "What is used to transmit data from Earth to a satellite and back?",
        choices: ["(A) radiowaves", "(B) gps transmisson", "(C) lightwaves", "(D) microwaves"],
        answer: "(D) microwaves"
    },
    {// #9
        title: "Which of the following network technologies allows secure transmission of data over an unsecured public network link between private networks?",
        choices: ["(A) Local area network", "(B) Wide area network", "(C) Virtual private network", "(D) Intranet"],
        answer: "(C) Virtual private network"
    },
    {// #10
        title: "Which of the following is a goal of green computing?",
        choices: ["(A) Reducing the potential for a computer to become infected with malware", "(B) Reducing the number of people experiencing computer vision syndrome", "(C) Reducing power consumption of computers and peripherals", "(D) Optimizing the human-computer interface"],
        answer: "(D) Optimizing the human-computer interface"
    },
    {// #11
        title: "Which of the following is true about EDI? Select all that apply. <br> A) The EDI documents generally contain the same information found in paper documents <br> B) The EDI documents are more likely than paper documents to contain errors <br> C) The speed in which the EDI documents are exchanged is much faster than that of paper documents.",
        choices: ["(A) B and C", "(B) A and C", "(C) A, B & C", " (D) none of the above"],
        answer: "(B) A and C"
    },
    {// #12 
        title: "Which of the following would NOT be considered an input device for a computer system?",
        choices: ["(A) Image scanner", "(B) Webcam", "(C) Keyboard", "(D) PC speaker"],
        answer: "(D) PC speaker"
    },
    {// #13
        title: "In a relational database, each column represents?",
        choices: ["(A) a record", "(B) an attribute", "(C) a key", "(D) an entity"],
        answer: "(B) an attribute"
    },
    {// #14
        title: "Conversion of data files is part of which of the following phases of the system development process?",
        choices: ["(A) Analysis incorrect", "(B) Design", "(C) Implementation", "(D) Development"],
        answer: "(C) Implementation"
    },
    {// #15
        title: "Enforcing programming standards in the software development process has which of the following impacts? Select all that apply <br> A) Establishing common expectations <br> B) Making it easier to modify code <br> C) Enhancing the end-user experience",
        choices: ["(A) A and B", "(B) A and C", "(C) A, B & C", " (D) none of the above"],
        answer: "(A) A and B"
    },
    {// #16
        title: "Which of the following statements about EDI is FALSE?",
        choices: ["(A) EDI documents contain the same information that would be found in paper documents.", "(B) EDI provides the infrastructure for both voice and data communication.", "(C) EDI standards are industry specific.", "(D) EDI enables the digital transmission of invoices."],
        answer: "(B) EDI provides the infrastructure for both voice and data communication."
    },
    {// #17
        title: "What is the term that refers to the downloading of live video, audio, or animation in such a manner that the user can begin to access the content before the download is complete?",
        choices: ["(A) Spooling", "(B) Streaming", "(C) Flaming", "(D) Spamming"],
        answer: "(B) Streaming"
    },
    {// #18
        title: "The ABC Charity Association, a nonprofit foundation, has a home page on the World Wide Web. Which of the following is the most likely URL for its home page?",
        choices: ["(A) http://www.abc-charity.gov", "(B) http://www.abc-charity.edu", "(C) http://www.abc-charity.com", "(D) http://www.abc-charity.org"],
        answer: "(D) http://www.abc-charity.org"
    },
    {// #19
        title: "A user has visited several websites, making purchases, initiating searches, and filling out online forms. Which of the following could the user access to revisit the websites?",
        choices: ["(A) Cookies", "(B) Web Browser History", "(C) Internet preferences", "(D) Web privacy settings"],
        answer: "(B) Web Browser History"
    },
    {// #20
        title: "Which of the following is NOT true of social networking sites?",
        choices: ["(A) It is unethical for a company recruiting prospective employees to track their presence on and posts to social networking sites.", "(B) Any unethical activity on a social networking site could have negative consequences outside the site", "(C) Some sites enable members to share material with many other members simultaneously." , "(D) Some sites enable members to maintain contact with other members."],
        answer: "(A) It is unethical for a company recruiting prospective employees to track their presence on and posts to social networking sites."
    },
    {// #21
        title: "Planning, scheduling, and overseeing the development of a new information system are all components of which of the following?",
        choices: ["(A) Systems analysis", "(B) System modeling", "(C) Project management", "(D) Cost-benefit analysis"],
        answer: "(C) Project management"
    },
    {// #22
        title: "In considering the economic feasibility of a systems development project, which of the following would a project manager be LEAST likely to consider?",
        choices: ["(A) Whether the hardware can be acquired for the project", "(B) The return on the initial investment on the system", "(C) When the project will break even", "(D) Whether the company can afford the project"],
        answer: "(A) Whether the hardware can be acquired for the project"
    },
    {// #23
        title: "Managers in an organization often use spreadsheets to assist with decision making. The process of using a spreadsheet to try out alternatives is called?",
        choices: ["(A) what-if analysis" , "(B) data mining", "(C) flowcharting" ,"(D) querying"],
        answer: "(A) what-if analysis"
    },
    {// #24
        title: "What term identifies the measure of accuracy, completeness, and currency of data?",
        choices: ["(A) Data dependency" ,"(B) Data integration", "(C) Data integrity", "(D) Data redundancy"],
        answer: "(C) Data integrity"
    },
    {// #25
        title: "The special formatting language used to create Web pages is called?",
        choices: ["(A) HTML", "(B) XML", "(C) Perl", "(D) Java"],
        answer: "(A) HTML"
    },
    {// #26
        title: "Which of the following best characterizes data in a data warehouse?",
        choices: ["(A) Historical", "(B) Normalized", "(C) Relational", "(D) Volatile"],
        answer: "(A) Historical"
    },
    {// #27
        title: "Which of the following best describes how GPS units function?",
        choices: ["(A) The receiver sends out regular query pulses and waits to receive responses from a GPS satellite.", "(B) The receiver is passive and listens for the regular signals from GPS satellites, which are then processed to find the distance from the satellites.", "(C) The receiver sends out radio signals that are reflected back by satellites and detected by the unit.", "(D) The receiver acts as a homing beacon that is tracked by the GPS satellites, which periodically send out position updates for each tracked receiver."],
        answer: "(B) The receiver is passive and listens for the regular signals from GPS satellites, which are then processed to find the distance from the satellites."
    },
    {// #28
        title: "Which of the following is the most likely negative consequence of participating in a social networking website?",
        choices: ["(A) Unintended disclosure of private information", "(B) Increase in spam", "(C) Infection by a virus", "(D) Download of a cookie containing personal preferences"],
        answer: "(A) Unintended disclosure of private information"
    },
    {// #29
        title: "Are digital signatures encrypted?",
        choices: ["(A) Yes", "(B) No", "(C) N/A", "(D) N/A"],
        answer: "(A) Yes"
    },
    {// #30
        title: "Do data signatures authenticate user identity?",
        choices: ["(A) Yes", "(B) No", "(C) N/A", "(D) N/A"],
        answer: "(A) Yes"
    },
    {// #31
        title: "Do data signatures typically involve CAPTCHAs?",
        choices: ["(A) Yes", "(B) No", "(C) N/A", "(D) N/A"],
        answer: "(B) No"
    },
    {// #32
        title: "Can data signatures replace ink-based signatures?",
        choices: ["(A) Yes", "(B) No", "(C) N/A", "(D) N/A"],
        answer: "(A) Yes"
    },
    {// #33 
        title: "Which of the following is a method of system implementation that requires both the previous system and the new system to perform identical tasks at the same time?",
        choices: ["(A) Parallel", "(B) Parceled","(C) Phased","(D) Pilot"],
        answer: "(A) Parallel"
    },
    {// #34
        title: "Which of the following is a potential benefit of telecommuting to the employer? Select all that apply. <br> (A) Eliminates employee commuting time <br> (B) Facilitates recruiting a larger pool of prospective employees <br> (C) Increases flexibility in handling of unexpected work after typical business hours <br> (D) Reduces stress of supervisors",
        choices: ["(A) A and B", "(B) B and C", "(C) A, B and D", "(D) B and D"],
        answer: "(B) B and C"
    },
    {// #35
        title: "Which of the following explains why digital networks can transmit different types of data?",
        choices: ["(A) Networks can accommodate different types of computers.", "(B) Network connections can be made via satellites.","(C) Data can be transmitted as either digital or analog signals.", "(D) Each data type can be represented by strings of bits."],
        answer: "(D) Each data type can be represented by strings of bits."
    },
    {// #36
        title: "Which of the following is the most likely rationale for creating a disaster recovery plan?",
        choices: ["(A) Core enterprise-wide functions cannot operate without information technology.", "(B) Human capital represents a massive investment.", "(C) A large number of transactions are processed daily.", "(D) A large number of employees work off-site."],
        answer: "(A) Core enterprise-wide functions cannot operate without information technology."
    },
    {// #37 
        title: "A disaster recovery plan to safeguard a company's computer system can be used for all of the following occurrences EXCEPT?",
        choices: ["(A) a flood, fire, or other natural disaster", "(B) a massive long-term power outage", "(C) system upgrades and hardware maintenance","(D) computer sabotage"],
        answer: "(C) system upgrades and hardware maintenance"
    },
    {// #38
        title: "In a company with a large and effective IT workforce, which of the following is the most likely title of the person who recommends enterprise-wide upgrades of computer hardware?",
        choices: ["(A) Chief Information Officer", "(B) Chief Technology Officer", "(C) Chief Financial Officer", "(D) Systems Analyst"],
        answer: "(B) Chief Technology Officer"
    },
    {// #39 
        title: "Which of the following is a major benefit of object-oriented programming?",
        choices: ["(A) The development of logical steps to achieve the object of the program", "(B) The use of subroutines that optimize the program's objective", "(C) The creation of objects that can be used or modified for use in future applications", "(D) The freedom for programmers to create objects unique to each program"],
        answer: "(C) The creation of objects that can be used or modified for use in future applications"
    },
    {// #40
        title: "Which of the following best describes a worm?",
        choices: ["(A) A program that replicates itself repeatedly, using up system resources", "(B) A program that is installed on a computer without the user's knowledge", "(C) A virus that masquerades as another active program", "(D) A program that traces user activity"],
        answer: "(A) A program that replicates itself repeatedly, using up system resources"
    },
    {// #41
        title: "When developing a website, which of the following activities should occur closest to the end of the process?",
        choices: ["(A) Creating the navigation structure", "(B) Purchasing a domain name", "(C) Verifying all the hyperlinks", "(D) Designing the style sheets"],
        answer: "(C) Verifying all the hyperlinks"
    },    
    {// #42
        title: "Which of the following can support cloud-based application development and deployment?",
        choices: ["(A) Communications as a service", "(B) Platform as a service", "(C) Infrastructure as a service", "(D) Software as a service"],
        answer: "(B) Platform as a service"
    },
    {// #43
        title: "Knowledge management software is designed to do which of the following?",
        choices: ["(A) Facilitate organizational learning", "(B) Collect and store data in a way that can be easily accessed", "(C) Manage day-to-day interactions with customers", "(D) Help analyze data and facilitate decision making"],
        answer: "(A) Facilitate organizational learning"
    },
    {// #44
        title: "An online storefront developer should test the different versions of which of the following in order to ensure usability for all users?",
        choices: ["(A) Database management systems", "(B) Hypertext markup languages", "(C) Compilers", "(D) Web browsers"],
        answer: "(D) Web browsers"
    },
    {// #45
        title: "Which of the following statements is true regarding client/server architecture?",
        choices: ["(A) The server computer accepts commands from a number of computers that are its clients.", "(B) The server computer manages a number of computers that it services.", "(C) The server computer is connected to a number of computers that provide it with services.", "(D) The client computer is connected to a number of computers that provide it with clients."],
        answer: "(A) The server computer accepts commands from a number of computers that are its clients."
    },    
    {// #46
        title: "Which of the following problem-solving techniques allows users to start with high-level information and then select more specific, lower-level details?",
        choices: ["(A) Ad hoc analysis", "(B) Exception reporting", "(C) Drill-down analysis", "(D) RFM analysis"],
        answer: "(C) Drill-down analysis"
    },    
    {// #47
        title: "In order to use cloud computing effectively, it is necessary for a large company to have which of the following?",
        choices: ["(A) a robust Internet connection", "(B) a large amount of centralized storage", "(C) computers with multiple CPUs", "(D) computers with a large amount of memory"],
        answer: "(A) a robust Internet connection"
    },    
    {// #48
        title: "Which of the following is true about user passwords?",
        choices: ["(A) They should be changed only by the administrator.", "(B) They must be no more than eight characters in length.", "(C) They are requested by CAPTCHAs.", "(D) They are most secure when they consist of letters, numbers, and special characters."],
        answer: "(D) They are most secure when they consist of letters, numbers, and special characters."
    },    
    {// #49
        title: "Which of the following statements about rapid application development is true?",
        choices: ["(A) It is used during prototyping.", "(B) It is designed to be platform dependent.", "(C) It reduces dependency on object-oriented programming.", "(D) It begins before requirements are defined."],
        answer: "(A) It is used during prototyping."
    },    
    {// #50
        title: "What are the small blocks of data that are created by dividing a large block of data before transmission over a network?",
        choices: ["(A) Bits", "(B) Bytes", "(C) Entities", "(D) Packets"],
        answer: "(D) Packets"
    },    
    {// #51
        title: "Which of the following uses the Internet, as opposed to using the public switched network, to enable voice communication?",
        choices: ["(A) TCP/IP", "(B) VoIP", "(C) EFT", "(D) EDI"],
        answer: "(B) VoIP"
    },    
    {// #52
        title: "A manager of a small business wants to use a computer to store information about clients, vendors, inventory (item, number, price), and orders. The manager needs to be able to sort and group data for various reports. Which of the following types of software packages would be best for this task?",
        choices: ["(A) Word processor", "(B) Spreadsheet", "(C) Database management system","(D) Presentation software"],
        answer: "(C) Database management system"
    },
];

// this if statment checks current page is on highscore page
if (title.innerHTML === "Highscores") {
    theTable();
}

// this function sets timer value and triggers two functions
function quizBegin() {
    timeLeft = 180
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
    if (timeLeft != 0 ) {
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
    }

}
//  this function checks for correct or wrong answers
function answerCheck(btnId) {
    if ((document.getElementById(btnId).innerHTML) === (theQuestions[questionNum].answer)) {
        rightAnswer();
        questionNum++
        score = (score + 1)
    }
    else {
        wrongAnswer();
        questionNum++
        score = (score + 0)

        if ( timeLeft <= 0) {
            quizOver();
        }
    }
    quiz(questionNum);
}
//  function runs when answer is right
function rightAnswer() {
    timeLeft = (timeLeft + 5) 
    console.log(theQuestions.length)
    feedback.innerHTML = ("Correct");
    setTimeout(function () { feedback.innerHTML = (""); }, 800)
}
//  function runs when answer is wrong
function wrongAnswer() {
    timeLeft = (timeLeft - 10)
    console.log("HERE ")
    feedback.innerHTML = ("Wrong");
    setTimeout(function () { feedback.innerHTML = (""); }, 800)
}



//  this function moves user to the end screen, allows user to submit initials with their score
function quizOver() {
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "none" })
    var content = document.getElementById('theBody')
    var done = document.getElementById("done")
    var submit = document.getElementById("submit")

    timer.innerHTML = (0);
    score = ((score/theQuestions.length) * 100).toFixed(2)

    // score = Math.round(score)* 100 / 100
  

    content.insertAdjacentHTML('afterbegin', '<h1 id="done">All Done!</h1> <button id="submit" class="btn btn-info">Submit</button> <input id="userScore"> - Enter Initials</input>');

    var done = document.getElementById("done")
    done.insertAdjacentHTML('afterend', '<p id="finalScore">Your final score is ' + score + " %" + '</p>');

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
        tbody.insertAdjacentHTML('afterbegin', '<tr class="scores"><td>' + userName + '  <===>  ' + userScore + " % "+'</td></tr>')
    }
}
// function shows clear highscores button work by clearing local storage and reload game button
function clearStorage() {
    localStorage.clear();
    window.location.reload();
}