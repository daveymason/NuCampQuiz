const quizData = [
  {
    question:
      "Q1 - Which of these is not a default data-toggle-attribute in Bootstrap?",
    a: "data-toggle = “collapse”",
    b: "data-toggle = “modal” ",
    c: "data-toggle = “dropdown”",
    d: "data-toggle = “contact”",
    correct: "d",
  },
  {
    question:
      "Q2 - What is the default style given to the .nav class?",
    a: "Material Design",
    b: "Materalise",
    c: "Flat CSS",
    d: "None of the above",
    correct: "d",
  },
  {
    question: "Q3 - Which class can we add to our <ul> to change the item orientation?",
    a: ".horizontal-view",
    b: ".flex-column",
    c: ".row-reverse",
    d: ".nav-vertical",
    correct: "b",
  },
  {
    question: "Q4 - What is typically used to make an Accordion?",
    a: "Card, Navbar, Modal & Dropdown",
    b: "Card, Collapse, Javascript & HTML data attributes",
    c: "CSS, Aside, Tabs & HTML data attributes.",
    d: "Tabs, Collapse, Javascript & Dropdown.",
    correct: "b",
  },
  {
    question: "Q5 - Which data attribute is used to control the direction of the tooltip?",
    a: "data-toggle",
    b: "data-location",
    c: "data-direction",
    d: "data-placement",
    correct: "d",
  },
  {
    question: "Q6 - Which line has no errors?",
    a: " $('[data-toggle='tooltip']').tooltip()",
    b: " $([data-toggle='tooltip']).tooltip()",
    c: " $(data-toggle='tooltip').tooltip()",
    d: " $('[data-toggle=tooltip]').tooltip()",
    correct: "a",
  },
  {
    question: "Q7 - Which class decides which slide to show to the user first in a carousel?",
    a: 'slide1',
    b: 'first',
    c: 'active',
    d: "start",
    correct: "c",
  },
  {
    question:
      "Q8 - Select the correct syntax for an if statement:",
    a: "if[condition], {Do Something}",
    b: "if{condition; Do Something}",
    c: "if(condition){Do Something}",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "Q9 - What keyword can be used in a switch statement if no conditions are met?",
    a: "Break",
    b: "Continue",
    c: "Initial",
    d: "Default",
    correct: "d",
  },
  {
    question: "Q10 - Which of these options cannot be passed via data attributes for Modals?",
    a: "backdrop",
    b: "transition",
    c: "keyboard",
    d: "focus",
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
