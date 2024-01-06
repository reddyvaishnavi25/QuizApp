const questions=[
    {
        question:"Capital of India?",
        answers: [
            {text:"delhi", correct:true},
            {text:"Hyderabad", correct:false},
            {text:"Mumbai", correct:false},
            {text:"Chennai", correct:false}

            ]
    },
    {
        question:"Capital of Telangana?",
        answers: [
            {text:"delhi", correct:false},
            {text:"Hyderabad", correct:true},
            {text:"Mumbai", correct:false},
            {text:"Chennai", correct:false}

            ]
    },
    {
        question:"Capital of TamilNadu?",
        answers: [
            {text:"delhi", correct:false},
            {text:"Hyderabad", correct:false},
            {text:"Mumbai", correct:false},
            {text:"Chennai", correct:true}

            ]
    },
    {
        question:"Capital of Bangladesh?",
        answers: [
            {text:"delhi", correct:false},
            {text:"Hyderabad", correct:false},
            {text:"Dhaka", correct:true},
            {text:"Chennai", correct:false}

            ]
    },
    {
        question:"Capital of Bihar?",
        answers: [
            {text:"Patna", correct:true},
            {text:"Kolkata", correct:false},
            {text:"Impal", correct:false},
            {text:"Bhuvaneshwar", correct:false}

            ]
    },
    {
        question:"Capital of West bengal?",
        answers: [
            {text:"Patna", correct:false},
            {text:"Kolkata", correct:true},
            {text:"Impal", correct:false},
            {text:"Bhuvaneshwar", correct:false}

            ]
    },
    {
        question:"Capital of Assam?",
        answers: [
            {text:"Patna", correct:false},
            {text:"Kolkata", correct:false},
            {text:"Dispur", correct:true},
            {text:"Bhuvaneshwar", correct:false}

            ]
    },
    {
        question:"Capital of Orrisa?",
        answers: [
            {text:"Patna", correct:false},
            {text:"Kolkata", correct:false},
            {text:"Impal", correct:false},
            {text:"Bhuvaneshwar", correct:true}

            ]
    },
    {
        question:"Capital of USA?",
        answers: [
            {text:"delhi", correct:false},
            {text:"Hyderabad", correct:false},
            {text:"Dhaka", correct:false},
            {text:"Washing ton", correct:true}

            ]
    },
    {
        question:"Capital of CA?",
        answers: [
            {text:"SFO", correct:false},
            {text:"sacramanto", correct:true},
            {text:"San Jose", correct:false},
            {text:"Texas", correct:false}

            ]
    }
];
const questionElement= document.getElementById("question");
const answerElement= document.getElementById("options-button");
const nextElement= document.getElementById("next-btn");

let score=0;
let currentQuestionIndex=0;
 
function showQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextElement.innerHTML="Next";
    showQuestion();
}
 function showQuestion()
  {

    resetStatus();
    let curQuestion= questions[currentQuestionIndex];
    let quesNumber=currentQuestionIndex+1;
    questionElement.innerHTML= quesNumber+". "+ curQuestion.question;
    
    curQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}
function resetStatus()
{
    nextElement.style.display="none";
    while(answerElement.firstChild)
    {
      answerElement.removeChild(answerElement.firstChild);
    }

}
function selectAnswer(e)
{
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct==="true";
if(isCorrect)
{
selectedBtn.classList.add("correct");
score++;
}
else
{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerElement.children).forEach(button => {
    if(button.dataset.correct==="true")
    {
        button.classList.add("correct");
    }
    button.disabled=true;
});
nextElement.style.display="block";

}

function showScore()
{
    resetStatus();
    questionElement.innerHTML='Your score is ' + score + '.';
    nextElement.innerHTML="Play Again";
    nextElement.style.display="block";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextElement.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    {
      handleNextButton();
    }
    else{
      showQuiz();
    }
});


showQuiz();