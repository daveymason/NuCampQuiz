const quizData = [
    {
        question: "What's the correct way to link a Bootstrap CSS file?",
        a: '<link rel="stylesheet" href="bootstrap link" </>',
        b: '<link rel="stylesheet" href="bootstrap link" />',
        c: '<link style="bootstrap" href="bootstrap link" />',
        d: '<link type="stylesheet" href="bootstrap link">',
        correct: "b",
    },
    {
        question: "Are tables still considered good practice for website layout?",
        a: "Yes, they are the best",
        b: "No, Not anymore",
        c: "Yes, but only with <h1> tags",
        d: "No, tables were never used for layout purposes",
        correct: "b",
    },
    {
        question: "Bootstrap is based mostly on?",
        a: "React",
        b: "Java",
        c: "Php",
        d: "CSS",
        correct: "d",
    },
    {
        question: "Which line of code is correct?",
        a: '<class="col-large>',
        b: '<div class"container-two>',
        c: '<div class="col-12-lg">',
        d: 'div class="col-3-md"',
        correct: "c",
    },
    {
        question: "What does the class 'order-sm-last' do?",
        a: 'Reverses column direction',
        b: 'Adds space to the last column',
        c: 'Reorders the column to appear last',
        d: 'Force a column to the right by 1',
        correct: "c",
    },
    {
        question: "What does the class 'Offset-* Class' do?",
        a: 'Force a column in a grid to the right',
        b: 'Adds margin to the left of a column',
        c: 'Offsets the display from the grid',
        d: 'Offsets the breakpoint of the grid',
        correct: "a",
    },
    {
        question: "What is the class 'jumbotron' used for?",
        a: 'Make a row fullscreen',
        b: 'Increases size of all elements in a column',
        c: 'Increases font size',
        d: 'To call extra attention to a section of the page',
        correct: "d",
    },
    {
        question: "Which bootstrap class does not align text?",
        a: 'text-sm-right',
        b: 'text-lg-left',
        c: 'text-centre',
        d: 'text-md-right',
        correct: "c",
    },
    {
        question: "What is the HTML tag for an ordered list?",
        a: '<ul>',
        b: '<ol>',
        c: '<list>',
        d: 'None of the above',
        correct: "b",
    },
    {
        question: "Select the custom class",
        a: '<btn-block',
        b: '<btn-warning>',
        c: '<btn-exit>',
        d: '<btn-link>',
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})