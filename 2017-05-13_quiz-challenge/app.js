// Only `var` works, not `let` or `const` (I get already assigned errors)
var Quiz = new Quiz();

// question, answer
const q1 = new Question("How many states are there in USA?", 50);
const q2 = new Question("What color is the sky?", "blue");
const q3 = new Question("Explain Like I'm _____ or ELI_", 5);
const q4 = new Question("What year is it?", 2017);

//This will add each question to the currentQuestion array
Quiz.questions.push(q1);
Quiz.questions.push(q2);
Quiz.questions.push(q3);
Quiz.questions.push(q4);
Quiz.answers.push(q1.answer);
Quiz.answers.push(q2.answer);
Quiz.answers.push(q3.answer);
Quiz.answers.push(q4.answer);

const quizElement = document.getElementById('question');
const progressElement = document.getElementById('progress');
const choice0Element = document.getElementById('choice0');
const choice1Element = document.getElementById('choice1');
let answerLocation = RandomOrder();
let otherLocation = 1-answerLocation;
const answer0 = document.getElementById('guess0');
const answer1 = document.getElementById('guess1');
// let randomOther = RandomOther();

if (answerLocation === 0){
  // Display the multiple choice one way
  Quiz.renderInElement(quizElement, progressElement, answer0, answer1);
} else {
  // ...display it the other way
  Quiz.renderInElement(quizElement, progressElement, answer1, answer0);
};





answer0.onclick = function (){
  // If you answer correctly
  if (answer0.textContent === Quiz.questions[Quiz.currentQuestion].answer.toString()){
    console.log('Yay, testing correct answer');
    // Then it reloads the div #quiz with next question
    // Quiz.renderInElement(quizElement);
  } else {
    // Else it's incorrect and doesn't log correct count
    console.log('Boo, wrong');
  
  }
}



answer1.onclick = function (){
  if (answer1.textContent === Quiz.questions[Quiz.currentQuestion].answer.toString()){
    console.log('Yay, testing correct answer');
    // Then it reloads the div #quiz with next question
    //Quiz.renderInElement(quizElement);
    // ...and logs to another variable how many are correct
  } else {
    // Else it's incorrect and doesn't log correct count
    console.log('Boo, wrong');
  }
}