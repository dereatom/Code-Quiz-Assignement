var ScoreForm = document.getElementById("Score-form");
var initialsInpute= document.getElementById("initials-text");
var currentScore = localStorage.getItem('currentScore');
var scoreUl=document.getElementById("score-list")
var currentHighScores= [];
var questionCounterText=document.getElementById('questionCounter')
var questionCounter = 0;

if (currentScore !==null) {
  ScoreForm.style.display= "block"
}
ScoreForm.addEventListener("submit", function(event) {
    event.preventDefault() 
    var initials= initialsInpute.value
    initialsInpute.value= ""
    console.log("summit", initials, currentScore)
    saveHighScore(initials, currentScore)

    getHighScores()
    ScoreForm.style.display= "none"
    localStorage.removeItem('currentScore')
})
function readLocalStorage() {
   var highScore= localStorage.getItem("highScore")
   if(highScore) {
       return JSON.parse(highScore)
   }
   return []
}
 function saveHighScore(initials, score) {
     var userObj = {
         initials: initials, 
         score: score,
     }
     var highScores=readLocalStorage() 
     highScores.push(userObj)
     localStorage.setItem("highScore", JSON.stringify(highScores))
 }
   

function getHighScores() {
    scoreUl.innerText= ""
    currentHighScores= readLocalStorage()
    for(var i=0; i < currentHighScores.length; i++) {
        var liEl=document.createElement("li") 
        var initials= currentHighScores[i].initials
        var score= currentHighScores[i].score
        liEl.innerText= initials + " " + score
        scoreUl.append(liEl)
        
    
    }
}
getHighScores()
