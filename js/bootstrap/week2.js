const quizData = [
  {
    question:
      "Q1 - Which of the following is not a Bootstrap color utility class?",
    a: "bg-primary",
    b: "bg-transparent",
    c: "bg-success",
    d: "bg-black",
    correct: "d",
  },
  {
    question:
      "Q2 - Which of the following is not a Bootstrap spacing utility class?",
    a: "mt-5",
    b: "px-sm-3",
    c: "auto",
    d: "They are all spacing utility classes",
    correct: "d",
  },
  {
    question: "Q3 - What is REM equal to?",
    a: "Always 16px",
    b: "Font-size of HTML element",
    c: "Exactly 1% of screen width & height",
    d: "A certain % of the containers height",
    correct: "b",
  },
  {
    question: "Q4 - Which of these are types of Breadcrumbs?",
    a: "Position",
    b: "Argument",
    c: "Location",
    d: "Map",
    correct: "c",
  },
  {
    question: "Q5 - What is the HTML element used for a Navigation Bar?",
    a: "<navbar>",
    b: "<nav>",
    c: "<bar>",
    d: "<navigation>",
    correct: "b",
  },
  {
    question: "Q6 - What is the correct line of code to add a home icon?",
    a: '<i class="fa fa-home fa-lg"><i>',
    b: '<fa class="fa fa-home fa-lg"></fa>',
    c: "<i class=fa fa-home fa-lg></i>",
    d: '<i class="fa fa-home fa-lg"></i>',
    correct: "d",
  },
  {
    question: "Q7 - What is the right way to create a button?",
    a: '<a href="#" class="btn btn-primary" role="button">Primary</a>',
    b: '<input class="btn btn-primary" type="button" value="Input">',
    c: '<button class="btn btn-primary" type="submit">Button</button>',
    d: "All of the above are correct",
    correct: "d",
  },
  {
    question:
      "Q8 - What is the HTML element we use for a larger input area in a form?",
    a: "<input-lg>",
    b: "<text>",
    c: "<textarea>",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "Q9 - Which of these cannot be used within a table in HTML?",
    a: "<dt>",
    b: "<dd>",
    c: "<dl>",
    d: "<dp>",
    correct: "d",
  },
  {
    question: "Q10 - Which Bootstrap class makes a responsive image?",
    a: "img-responsive",
    b: "img-fluid",
    c: "img-xs",
    d: "img-full",
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
            <div class="quiz-header"><h2>You answered ${score}/${quizData.length} questions correctly</h2></div>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
