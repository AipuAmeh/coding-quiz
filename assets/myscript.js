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
var finish = document.getElementById("end-of-game");
var secondsLeft = 30;
var questionIndex = 0
console.log("adding changes");
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
  finish.style.visibility = "hidden";
choices.style.visibility = "hidden";

function startTimer(){
    
    seconds = setInterval(function () {
        secondsLeft--;
        if (secondsLeft >= 0) {
          countdown.textContent = secondsLeft;
        }
        if (secondsLeft === 0) {
          clearInterval(seconds);
        }
      }, 1000);

document.getElementById("questions-container").style.visibility = "visible";
choices.style.visibility="visible";
document.getElementById("game-instructions").style.visibility= "hidden";
start.style.visibility = "hidden";
}

var points = localStorage.getItem("#points");

function checkAnswer(event){
if(event.target.matches('li')){
    var correctAnswer = questions[questionIndex].correct;
    var usersChoice = event.target.textContent;
    console.log(event.target.textContent)
    console.log(questionIndex)
    console.log(questions[questionIndex].correct)

    if(correctAnswer === usersChoice){
        msg.textContent = "Correct!";
        points += 3
        console.log("Correct!")
    }else{
        msg.textContent = "Wrong!"
        console.log("WRONG")
        secondsLeft = secondsLeft - 5;
      
    }
    
    questionIndex++
    
    if ( secondsLeft === 0 || questionIndex===4) {
        choices.style.visibility="hidden";
        document.getElementById("questions-container").style.visibility = "hidden";
        finale.style.visibility = "visible";
        console.log(questionEl);
    }
    renderQuestions();

}


}

function renderQuestions() {
    if(questionIndex >= questions.length){
         clearInterval(seconds);
        return
    }
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


var submit = document.querySelector(".submit-button");

submit.addEventListener("click", function(event){
    event.preventDefault();
var initialInput = document.querySelector("#finished").value;
   
    if (initialInput === "") {
        initialInput.textContent = "Input field cannot be blank";
       
    } else {
        console.log("success");
    }
    localStorage.setItem("finished", initialInput);
    localStorage.setItem("points", points);
    console.log(points);
    console.log(initialInput);
    
    window.location.href = "./myindex.html";
})
    

    
    choices.addEventListener("click", checkAnswer);
    start.addEventListener("click", startQuiz);

    