// Constructor function to make question objs
function Question(question, answer) {

  //Media.call(this, title, duration, type);
  this.question = question;
  this.answer = answer;
}

// Prototype chain... how you create inheritance in JS.
//Question.prototype = Object.create(Media.prototype);