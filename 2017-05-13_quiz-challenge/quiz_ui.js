function DrawTheField () {
  let answerLocation = Math.round(Math.random());

  if (answerLocation === 0){
    // Display the multiple choice one way
    Quiz.renderInElement(quizElement, progressElement, choice0Element, choice1Element);
  } else {
    // ...display it the other way
    Quiz.renderInElement(quizElement, progressElement, choice1Element, choice0Element);
  };
};

function RandomAnswer () {
  do {
    x = Math.floor(Math.random()* Quiz.questions.length);
  } while (x == Quiz.questionIndex);
  return x;
};