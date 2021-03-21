const question = document.getElementById("question");
const choice = Array.from(document.getElementsByClassName("choice-text"));
console.log(choice)

let currentQuestion = {};
let acceptingAnswers =false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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
    question: "which one/s is/are Computer Programming Languages?",
    choice1: "JavaScript",
    choice2: "HTML",
    choice3: "C++C#",
    choice4: "All",
    Answer: 4,
}
]
const CORRECT_BONUS =10;
const MAX_QUESTION = 3;
startGame = () => {
    questionCounter= 0;
    score = 0;
    availableQuestions= [...questions];
    console.log(availableQuestions);
    getNewQuestion();

};
getNewQuestion = () => {
    if(availableQuestions.length ===0 || questionCounter >= MAX_QUESTION)
    return window.location.assign("/end.html")
    questionCounter++; 
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion= availableQuestions[questionIndex];
   questions.innerText = currentQuestion.question;
//for each question we set as follow
 choice.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
  });
    availableQuestions.splice(questionIndex, 1);

   acceptingAnswers= true;
};
choice.forEach(choice =>{
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) 
        return;
        acceptingAnswers= false;
        const selectedChoice = e.target;
        const selectedAnsewer = selectedChoice.dataset["number"];
        const classToApply= "incorrect";
        if (selectedAnsewer === currentQuestion.answer){
            classToApply = 'correct';
        }
        console.log(selectedAnsewer == currentQuestion.answer);
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeOut( () =>{
            selectedChoice.parentElement.classList.remove(classToApply)
  
            getNewQuestion();

        }, 1000);
        
    });
});
startGame();

