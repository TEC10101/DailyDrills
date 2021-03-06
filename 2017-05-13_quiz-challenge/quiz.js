// Constructor function which gets passed an array literal of the questions
function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
  this.numberCorrect = 0;
};

Quiz.prototype.render = function(questionElement, progress, answerLocation, otherLocation) {
  questionElement.innerHTML = this.getCurrentQuestion();
  progressElement.innerHTML = "Question " + [this.questionIndex + 1] + " of " + this.questions.length;
  answerLocation.innerHTML = this.getAnswer(this.questionIndex);
  otherLocation.innerHTML = this.getAnswer(RandomAnswer());
};

Quiz.prototype.next = function() {
  this.questionIndex++;
  DrawTheField();
};

Quiz.prototype.done = function () {
  let quizField = document.getElementById('quiz');
  // Clear field
  while (quizField.firstChild) {
    quizField.removeChild(quizField.firstChild);
  }
  // Draw final summary message
  quiz.innerHTML += '<h1>Quiz Complete</h1>';
  quiz.innerHTML += '<h2 id="question" class="headline-secondary--grouped">Total Correct: ' + Quiz.numberCorrect + '</h2>'
};

Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.questionIndex]['question'];
};

Quiz.prototype.getAnswer = function (index) {
  return this.questions[index]['answer'];
};