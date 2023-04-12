var countdown = document.querySelector("#countdown-number");
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
var finale = document.getElementById("final-score");

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
        choices: ["Los Angeles", "New York", "Japan", "All of the above"],
        correct: "All of the above"
    },
  ];
  finale.style.visibility = "hidden";
function startTimer(){
    
    seconds = setInterval(function () {
        secondsLeft--;
        if (secondsLeft >= 0) {
          countdown.textContent = secondsLeft;
        }
        if (secondsLeft === 0) {
          clearInterval(secondsLeft);
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
        // msg.style.visbility = "hidden";
        console.log("Correct!")
    }else{
        msg.textContent = "Wrong!"
        // msg.style.visibility = "hidden";
        console.log("WRONG")
    }
    
    questionIndex++
    //IF STATEMENT END OF GAME
    if (questionIndex === 4) {
        return;
    }
    renderQuestions();
//TODO
    if ( usersChoice != correctAnswer) {
        var deduction = (secondsLeft - 2);
        deduction--;
       countdown.textContent = deduction;
       console.log(deduction);
    }
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
   stopQuiz()
}
//if last question ends or the timer reaches 0, whichever first, unhide the highscores input and hide the questions
function stopQuiz() {
    // if (event.target.match("section")) {
        // finale.style.visibility = "hidden";
        // console.log(finale);
    // }
    if (secondsLeft === 0 || questionIndex > questionIndex.length ) {
        questionEl.style.visibility = "hidden";
        finale.style.visibility = "visible";
        console.log(questionEl);
       return;
       
    }
    
}

    
    choices.addEventListener("click", checkAnswer);
    start.addEventListener("click", startQuiz);

    