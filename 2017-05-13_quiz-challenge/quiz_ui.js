function RandomOrder () {
    let x = Math.round(Math.random());
    // let y = 1-x;
    // const order = {
    //     first: x,
    //     second: y
    // };
    return x;
};



function DrawTheQuestion () {
    if (answerLocation === 0){
    // Display the multiple choice one way
    Quiz.renderInElement(quizElement, progressElement, choice0Element, choice1Element);
  } else {
    // ...display it the other way
    Quiz.renderInElement(quizElement, progressElement, choice1Element, choice0Element);
  };
}

function DrawDone () {
  quizElement = "";
  Quiz.renderInElement(quizElement)
}