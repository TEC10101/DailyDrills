// Current Score and Current Question... similar to playlist.js
// Collection of question objs

// Constructor function which doesn't have parameters
function Quiz() {
  this.questions = [];
  this.answers = [];
  this.currentQuestion = 0;
  this.numberCorrect = 0;
};



Quiz.prototype.renderInElement = function(questionElement, progress, answerLocation, otherLocation) {
  questionElement.innerHTML = this.questions[this.currentQuestion]['question'];
  progressElement.innerHTML = "Question " + [this.currentQuestion + 1] + " of " + this.questions.length;
  answerLocation.innerHTML = this.answers[this.currentQuestion];
  otherLocation.innerHTML = this.answers[3-this.currentQuestion];
};

Quiz.prototype.next = function () {
    this.currentQuestion++;
    DrawTheQuestion();
}

Quiz.prototype.done = function () {
    DrawDone();
}

// Creating media.prototype.toHtml with an if clause for the HTML generation (DRY)
Quiz.prototype.toHTML = function() {
  let htmlString = '<li';
  if (this.isPlaying === true){
    htmlString += ' class="current"'
  }
  htmlString += '>';
  htmlString += this.title;
  console.log(this.type);
  if (this.type === "song") {
    htmlString += ' - ';
    htmlString += this.artist;
  } else if (this.type === "movie") {
    htmlString += ' [';
    htmlString += this.year;
    htmlString += '] ';
  }
  htmlString += '<span class="duration">';
  htmlString += this.duration; 
  htmlString += '</span></li>';
  
  return htmlString;
};