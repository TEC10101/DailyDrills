const QArray = [
  new Question("How many states are there in USA?", "50"),
  new Question("What color is the sky?", "Blue"),
  new Question("Explain Like I'm ____ or ELI_", "5"),
  new Question("What year is it?", "2017")
];

// Only `var` works, not `let` or `const` (I get already assigned errors)
var Quiz = new Quiz(QArray);

const quizElement = document.getElementById('question');
const progressElement = document.getElementById('progress');
const choice0Element = document.getElementById('choice0');
const choice1Element = document.getElementById('choice1');
const button1 = document.getElementById('guess0');
const button2 = document.getElementById('guess1');

// Start the quiz
DrawTheField();

button1.onclick = function (){
  // Correct answer
  if (choice0Element.textContent === Quiz.getAnswer(Quiz.questionIndex)) {
    Quiz.numberCorrect++;
    // Check if more questions
    if (Quiz.questionIndex < Quiz.questions.length-1) {
      Quiz.next();
    } else { // No more questions
      Quiz.done();
    };

  // Wrong answer
  } else {
    // Check if more questions
    if (Quiz.questionIndex < Quiz.questions.length-1) {
      Quiz.next();
    } else { // No more questions
      Quiz.done();
    };
  }
};

button2.onclick = function (){
  // Correct answer
  if (choice1Element.textContent === Quiz.getAnswer(Quiz.questionIndex)) { //Quiz.questions[Quiz.questionIndex].answer) {
    Quiz.numberCorrect++;
    // Check if more questions
    if (Quiz.questionIndex < Quiz.questions.length-1) {
      Quiz.next();
    } else { // No more questions
      Quiz.done();
    };
    
  // Wrong answer
  } else {
    // Check if more questions
    if (Quiz.questionIndex < Quiz.questions.length-1) {
      Quiz.next();
    } else { // No more questions
      Quiz.done();
    };
  }
};