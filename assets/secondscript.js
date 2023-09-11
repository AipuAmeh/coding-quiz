var returnPage = document.querySelector(".go-back");
var startOver = document.querySelector(".clear-scores");
var scoreList = document.querySelector(".scores-list");


function renderList(){

    var initials = localStorage.getItem("finished");
    var scores = localStorage.getItem("points");
    var li = document.createElement("li");

    if (initials || scores !== null ) {
        scoreList.appendChild(li);
        li.textContent = initials + "  " + scores;
    } else {
        li.textContent = " ";
    }
}

returnPage.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./index.html";
})

startOver.addEventListener("click", function(){
    
    scoreList.textContent = "";

    localStorage.removeItem("points");
    localStorage.removeItem("finished");

})

renderList();
