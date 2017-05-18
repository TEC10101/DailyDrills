// Only `var` works, not `let` or `const` (I get already assigned errors)
var Quiz = new Quiz();

// question, answer
const q1 = new Question("How many states are there in USA?", 50);
const q2 = new Question("What color is the sky?", "Blue");
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
const quizField = document.getElementById('quiz');
// let randomOther = RandomOther();





DrawTheQuestion();


answer0.onclick = function (){
  // Check if last question in array
  console.log('Quiz.questions.length = ' + Quiz.questions.length);
  if (Quiz.currentQuestion < Quiz.questions.length-1) {
    // If you answer correctly
    if (choice0Element.textContent === Quiz.questions[Quiz.currentQuestion].answer.toString()){
      Quiz.numberCorrect++;
      Quiz.next();
      console.log('Quiz.currentQuestion = ' + Quiz.currentQuestion);
    } else {
      Quiz.next();
      console.log('Quiz.currentQuestion = ' + Quiz.currentQuestion);
    }
  } else {
    console.log('Should be done.');
    Quiz.done(quizField);
  }
};

answer1.onclick = function () {
  // Check if last question in array
  console.log('Quiz.questions.length = ' + Quiz.questions.length);
  if (Quiz.currentQuestion < Quiz.questions.length-1) {
    // If you answer correctly
    if (choice1Element.textContent === Quiz.questions[Quiz.currentQuestion].answer.toString()){
      Quiz.numberCorrect++;
      Quiz.next();
      console.log('Quiz.currentQuestion = ' + Quiz.currentQuestion);
    } else {
      Quiz.next();
      console.log('Quiz.currentQuestion = ' + Quiz.currentQuestion);
    }
  } else {
    console.log('Should be done.');
    Quiz.done(quizField);
  }
}