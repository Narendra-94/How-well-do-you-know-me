var readlineSync = require("readline-sync");

var score = 0;



var questions = [{
  question: "Where do i live??  \n",
  answer: "pune"
}, {
  question: "Which color do i like the most ? \n",
  answer: "red"
},
{
  question: "which anime i like the most ? \n",
  answer: "naruto"
},
{
  question: "What do i do in weekends ?? \n",
  answer: "Theatres"
},
{
  question: " What do i like to eat??\n",
  answer: "paneer"
},

{
  question: "What do i like chocolates or ice-cream ??\n",
  answer: "icecream"
}];

function welcome() {
  var userName = readlineSync.question("What's your name?\n");

  console.log("Welcome " + userName + " to DO YOU KNOW NAREN ??\n");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right! 😊");
    score = score + 1;

  } else {
    console.log("wrong! 😿");
    console.log("The right answer is " + answer);

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
}


welcome();
game();
showScores();