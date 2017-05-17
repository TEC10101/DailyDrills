// Only `var` works, not `let` or `const` (I get already assigned errors)
var Quiz = new Quiz();

// question, answer
const q1 = new Question("How many states are there in USA?", 50);
const q2 = new Question("What color is the sky?", "blue");
const q3 = new Question("Explain Like I'm _____ or ELI_", 5);
const q4 = new Question("What year is it?", 2017);

//This will add each question to the currentQuestion array
Program.questions.push(q1);
Program.questions.push(q2);
Program.questions.push(q3);
Program.questions.push(q4);

const quizElement = document.getElementById('question');
const progressElement = document.getElementById('progress');

Quiz.renderInElement(quizElement, progressElement, 0);



const answer1 = document.getElementById('guess0');
answer1.onclick = function (){
  Quiz.next();
  Quiz.renderInElement(quizElement);
}


const answer2 = document.getElementById('guess1');
answer2.onclick = function (){
  Quiz.next();
  Quiz.renderInElement(quizElement);
}


/*
const stopButton = document.getElementById('stop');
stopButton.onclick = function (){
  Playlist.stop();
  Playlist.nowPlayingIndex = 0;
  console.log('currentSong index is `' + Playlist.nowPlayingIndex + '`');
  Playlist.renderInElement(quizElement);
}*/