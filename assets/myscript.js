var countdown = document.querySelector(".timer");
var scores = document.querySelector(".highScores");
var start = document.querySelector("#button");
var questions = document.querySelector(".questions-container");
var questionEl = document.getElementById("question")
var choiceOne = document.getElementById("choice1");
var choiceTwo = document.getElementById("choice2");
var choiceThree = document.getElementById("choice3");
var choiceFour = document.getElementById("choice4");
var choices = document.getElementById("choices");
var msg = document.getElementById("msg");

var secondsLeft = 30;
var questionIndex = 0

var questions = [
    { 
      question: "Which deisgner created the little black dress?",
      choices: [ "Coco Chanel", "Dave Chapelle", "Gucci", "Michael Kors"],
      correct:"Coco Chanel"
  },
    {
        question: "Who was the first African-American fashion designer?",
        choices: [ "Tyra Banks", "Ann Lowe", "Andre Leon Talley", "Naomi Campbell"],
        correct:"Ann Lowe"
    },
    {
        question: "What country was Yves Saint Laurent originally from?",
        choices: ["USA", "Algeria", "Russia", "France"],
        correct: "Algeria"
    },
    {
        question: "Where did street wear originate?",
        choices: ["Los Angeles", "New York", "Japan", "All of the above"]
    },
  ];

function startTimer(){
    seconds = setInterval(function () {
        secondsLeft--;
        if (secondsLeft >= 0) {
          countdown.textContent = "Timer: " + secondsLeft;
        }
        if (secondsLeft === 0) {
          clearInterval(secondsLeft);
          gameMessage();
        }
      }, 500);

}


function checkAnswer(event){
if(event.target.matches('li')){
    var correctAnswer = questions[questionIndex].correct;
    var usersChoice = event.target.textContent;
    console.log(event.target.textContent)
    console.log(questionIndex)
    console.log(questions[questionIndex].correct)

    //TODO
    if(correctAnswer === usersChoice){
        msg.textContent = "Correct!";
        msg.hidden;
        console.log("Correct!")
    }else{
        msg.textContent = "Wrong!"
        console.log("WRONG")
    
    }
    questionIndex++
    //IF STATEMENT END OF GAME
    if (questionIndex === 4) {
        return;
    }
    renderQuestions();
}
}

function renderQuestions() {
    questionEl.textContent = questions[questionIndex].question
    choiceOne.textContent = questions[questionIndex].choices[0]
    choiceTwo.textContent = questions[questionIndex].choices[1];
    choiceThree.textContent = questions[questionIndex].choices[2]
    choiceFour.textContent = questions[questionIndex].choices[3]
}



function startQuiz() {
   startTimer()
   renderQuestions()
}

    
    choices.addEventListener("click", checkAnswer);
    start.addEventListener("click", startQuiz);

    