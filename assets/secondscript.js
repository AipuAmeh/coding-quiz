var returnPage = document.querySelector(".go-back");
var startOver = document.querySelector(".clear-scores");
var scoreList = document.querySelector(".scores-list");


function renderList(){

    var initials = localStorage.getItem("finished");
    var scores = localStorage.getItem("points");
    var li = document.createElement("li");

    scoreList.appendChild(li);
    li.textContent = initials + "  " + scores;
}

returnPage.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "file:///Users/aipuameh/bootcamp/homework/week-four/index.html";
})

startOver.addEventListener("click", function(){
    
    localStorage.removeItem("li.textContent");
       
})

renderList();
