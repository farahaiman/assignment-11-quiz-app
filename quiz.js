const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestons = [];
let availableOptions = [];
  
function setAvailableQuestons(){                                     //push the question into availableQuestons  array
const totalQuestion = quiz.length;
for(let i=0; i<totalQuestion; i++){
                                                                      // console.log(i)
    availableQuestons.push(quiz[i])
}
//    console.log(availableQuestons)
}
                                                                         //set question number and question and option
function getNewQuestion(){
                                                                         //set question number     // console.log("hi");
questionNumber.innerHTML = "Question" + (questionCounter + 1) + " to " + quiz.length;
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
  //set the option //get the length option 
 const optionLen = currentQuestion.options.length
                                                      // console.log(currentQuestion.options)

        for(let i=0; i<optionLen; i++){                   // push options into availableQuestons array
        availableOptions.push(i)
        }
        optionContainer.innerHTML= '';  //is line k likhne se option repeat nhi hon ge
        let animationDelay = 0.15;
        for(let i=0; i<optionLen; i++){                           //creat options in html
                                                                              //randm option 
             
            const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];//random optin
                                                                         //get the position of 'optonIndex from the availableOptions
            const index2 =availableOptions.indexOf(optonIndex);        //optonIndex
                                                                        //removee the opton 'optonIndex from the availableOptions so that the optin does not repeat
            availableOptions.splice(index2,1);
            // console.log(optonIndex)
            // console.log(availableOptions)
            // console.log(optonIndex)
             
          const option = document.createElement("div");
          option.innerHTML = currentQuestion.options[optonIndex];
          option.id =optonIndex;
          option.style.animationDelay =animationDelay +'s';
          animationDelay = animationDelay + 0.15;
          option.className ="option";
          optionContainer.appendChild(option)
          option.setAttribute("onclick","getResult(this)");
        }

questionCounter++

}


function getResult(element) {             //get the result of current attempt question
    const id =parseInt(element.id);                                        // console.log(optionElement.innerHTML)

                                          // console.log(typeof id);
                                            //get the answer by comparing id of clicked option
if(id === currentQuestion.answer){
                                              // console.log("answer is correct");
                                          //set the green color to the correct option
    element.classList.add("correct");

}
else{
    console.log("answer is wrong");
}
    
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