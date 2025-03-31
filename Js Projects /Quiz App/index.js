const questions =
[
{
    question :"What is the largest lake in the world?",
    answer:[
        {text:"Caspian Sea" ,corrct:false },
        {text:"Baikal" ,corrct:true },
        {text:"Lake Superior" ,corrct:false },
        {text:"Ontario" ,corrct:false }
    ]
},
{
    question:'Which planet in the solor system is know as the "Red Planet"',
    answer:[
        {text:"Venus" , correct :false},
        {text:"Earth", corrext:false},
        {text:"Mars", correct:true},
        {text:"Jupiter", correct:false}
    ]
},
{
    question:"What animal is the national symbol of Australia", 
    answer:
    [
        {text:"Kangaroo",correct:true},
        {text:"Emu",correct:false},
        {text:"Tiger",correct:false},
        {text:"Crocodile",correct:false},
        
    ]
}
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0 ;
let score = 0;

function startQuiz()
{
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion()
{
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;
}



