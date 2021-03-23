const question = document.getElementById("question");
const choice = Array.from(document.getElementsByClassName("choice-text"));
setTimeout(function(){ question.value = "1 seconds" }, 1000);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
{
    question: "What does HTML stand for?",
    choice1: "Hypertext Markup Language",
    choice2: "Hyper Text Marketing Language",
    choice3: "Hyper Trainer Marking Language",
    choice4: "Hyper Text Markup Leveler",
    answer: 1,
},
{
    question: "What does CSS stand for?",
    choice1: "Cascading System Sheets",
    choice2: "Cascading Seen Sheets",
    choice3: "Cascading Style Sheets",
    choice4: "Cascading Style meet",
    answer: 3,
},
{
    question: "which are Computer Programming Languages?",
    choice1: "JavaScript",
    choice2: "HTML",
    choice3: "C++C#",
    choice4: "All",
    Answer: 4
}
]
const CORRECT_BONUS =10;
const MAX_QUESTION = 3;
startGame = () => {
    questionCounter= 0;
    score = 0;
    availableQuestion= [...questions];
    
    getNewQuestion();

};
getNewQuestion = () => {
    if(availableQuestion.length ===0 || questionCounter >= MAX_QUESTION)
    return window.location.assign("/Users/derej/workspaces/bootcamp/Homework/Code-Quiz-Assingment/Code-Quiz-Assignement/highscores.html")
    questionCounter++; 
   const questionIndex = Math.floor(Math.random() * availableQuestion.length);
   currentQuestion= availableQuestion[questionIndex];
   question.innerText = currentQuestion.question;
//for each question we set as follow
 choice.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
  });
    availableQuestion.splice(questionIndex, 1);

   acceptingAnswers= true;
};
choice.forEach(choice =>{
    choice.addEventListener("click", e => {
        
        if(!acceptingAnswers) 
        return;
        acceptingAnswers= false;
        const selectedChoice = e.target;
        const selectedAnsewer = selectedChoice.dataset["number"];
        
       const classToApply = selectedAnsewer == currentQuestion.answer ? "correct": "incorrect";
       
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
  
          getNewQuestion();

         }, 1000);
        
    });
});
startGame();
var secondsLeft = 30;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "final score";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}
