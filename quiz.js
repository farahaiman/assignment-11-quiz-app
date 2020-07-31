const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestons = [];
let availableOptions = [];

function setAvailableQuestons(){                  //push the question into availableQuestons  array
const totalQuestion = quiz.length;
for(let i=0; i<totalQuestion; i++){
    // console.log(i)
    availableQuestons.push(quiz[i])
}
   console.log(availableQuestons)
}
//set question number and question and option
function getNewQuestion(){
 //set question number                                              // console.log("hi");
questionNumber.innerHTML = "Question" + (questionCounter + 1) + " of " + quiz.length;
//set question text
//get rendom question
const questionIndex = availableQuestons[Math.floor(Math.random() * availableQuestons.length)]
currentQuestion = questionIndex;
questionText.innerHTML = currentQuestion.q;
// console.log(questionIndex)
// get the position of questionIndex from the availableQuestons array
const index1= availableQuestons.indexOf(questionIndex);
//remove the questionIndex from the availableQuestons array so that the quetion dos'not rept

availableQuestons.splice(index1,1);
// console.log(questionIndex)
// console.log(availableQuestons)
          //set the option get the length option 
          const optionLen = currentQuestion.options.length
        // console.log(currentQuestion.options)

        for(let i=0; i<optionLen; i++){  // push options into availableQuestons array
        availableQuestons.push(i)
        }
        for(let i=0; i<optionsLen; i++){   //creat options in html
          const option = document.createElement("div");
          option.innerHTML = currentQuestion.option[i];
          option.id =i;
          option.className ="option";
          optionContainer.appendChild(option)
        }

questionCounter++

}
function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over");
    }
    else{
        getNewQuestion();
    }  
}

window.onload = function(){
    //first we will set all question in availableQuestons array
    setAvailableQuestons();
    //second we will call  getNewQuestion funtion
    getNewQuestion();
}