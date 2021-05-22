const quizData = [
  {
    question:
      "Q1 - What is the shorthand for the  jQuery ready method or ready function?",
    a: "$(function.ready() { ... });",
    b: "$(function() { ... });",
    c: "$( document).ready(function() { ... });",
    d: "$( document).(functionReady() { ... });",
    correct: "b",
  },
  {
    question:
      "Q2 - How long is the interval for the following code - $('.carousel').carousel( { interval: 2000 } );?",
    a: ".2 seconds",
    b: "2 seconds",
    c: "20 seconds",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Q3 - What is the HTML for the jQuery selector? - $('#carouselButton')",
    a: '<btn class = "carouselButton">',
    b: '<btn selector = "carouselButton">',
    c: '<btn id = "carouselButton">',
    d: '<btn name = "carouselButton">',
    correct: "c",
  },
  {
    question: "Q4 - What does DRY mean in regards to code?",
    a: "Don't Resist Yourself",
    b: "Design Reference Year ",
    c: "Dependent, Responding, Y Axis",
    d: "Don't Repeat Yourself",
    correct: "d",
  },
  {
    question: "Q5 - $color-primary: #3046C5; is an example of . . . ",
    a: "CSS",
    b: "SCSS",
    c: "jQuery",
    d: "JavaScript",
    correct: "b",
  },
  {
    question: "Q6 - Webpack, Grunt & Gulp are an example of....",
    a: " Build Tools",
    b: " Testers",
    c: " Code Beautifiers",
    d: " Linters",
    correct: "a",
  },
  {
    question: "Q7 - what is the correct syntax for a while loop? - ",
    a: '(doSomething) while{(condition)}',
    b: 'while(doSomething){(condition)}',
    c: 'while(condition){doSomething}',
    d: "None of the Above",
    correct: "c",
  },
  {
    question: "Q8 - What is the ouput?: i = 0; while(i < 3){ console.log(i); i++;}",
    a: "012",
    b: "0123",
    c: "123",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Q9 - The expressions inside the for loops are ...",
    a: "Mandatory",
    b: "Interchangeable",
    c: "Optional",
    d: "Required",
    correct: "c",
  },
  {
    question: "Q10 - Image compression, mininification, and uglification are apart of ...",
    a: "Retribution",
    b: "Distribution",
    c: "Linting",
    d: "Symantics",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <div class="quiz-header">
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            </div>
            <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
