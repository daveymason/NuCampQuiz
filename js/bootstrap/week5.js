const quizData = [
  {
    question:
      'Q1 - What is the correct way to call - function sayHello() { ... }',
    a: "call sayHello();",
    b: "function sayHello();",
    c: "sayHello();",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Q2 - Which part of the function is the parameter? - function sayHello(userName) { ... }",
    a: "function",
    b: "sayHello",
    c: "The curly brackets",
    d: "userName",
    correct: "d",
  },
  {
    question: 'Q3 - What is the argument of the following function call? sayHello("Dave");',
    a: 'Dave',
    b: 'sayHello',
    c: 'The semi-colon',
    d: 'None of the above',
    correct: "a",
  },
  {
    question: "Q4 - Which of the following statements are true?",
    a: "Parameters are in the paranthesis within the function declaration",
    b: "Arguments pass data to the function via paranthesis when calling the function",
    c: "You can pass either literal values or variables into a function via the parameter list",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Q5 - What is the correct syntax for an inline onevent handler? ",
    a: `<div mouseover="console.log('over')">DEMO</div>`,
    b: `<span onmouseover="console.log('over')">DEMO</span>`,
    c: `<span mouseover="console.log('over')">DEMO</span>`,
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Q6 - How would you select elements/DOM nodes?",
    a: " querySelector()",
    b: " document.getElementById()",
    c: " document.getElementsByTagName()",
    d: " All of the above",
    correct: "d",
  },
  {
    question: "Q7 - What is the correct syntax to add an event listener? ",
    a: "el.onmouseover(EventListener, makeTextWhite);",
    b: "el.addEventListener('onmouseover', makeTextWhite);",
    c: "el.addEventListener('mouseover', makeTextWhite);",
    d: "el.addEventListener('onmouseover', makeTextWhite)",
    correct: "b",
  },
  {
    question: "Q8 - Which of the following statements are true?",
    a: "let and const were added in ES6",
    b: "Previous to this, the only option was var.",
    c: "let and const are safer to use over var",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Q9 - Which of the following statements are true? ",
    a: "It is required to initialize variables declared with const at the time of declaration",
    b: "You should only use let if the variable will not be changed later",
    c: "All varibales decalred with const should have global scope",
    d: "Not decalring variables will throw an error",
    correct: "a",
  },
  {
    question: "Q10 - Which of the following statements is true?",
    a: "Let and Var have block scope",
    b: "Let and Const have block scope",
    c: "Let and Const have block scope",
    d: "All variables have global scope",
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
