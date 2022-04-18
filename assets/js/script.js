console.dir(window.document);



// adding functionality to the html elements
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

//randomizes questions
let shuffledQuestions, currentQuestionIndex

// // //setting up the timer
var timerEl = document.getElementById('timer');
var message =
    'TIMES UP, SCRUB';

// i spent all my time trying to figure out how to get the timer to start when start function was triggered by click event
var timeLeft = 30;

function timer() {
}

var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + '  seconds remaining';
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } else {
        timerEl.textContent = message;
        clearInterval(timeInterval);
    }
}, 1000);


startButton.addEventListener('click', startGame)

//did not want a next button, needed this to happen after answer was selected and result appeared
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    //felt like timer function should have gone here. 
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    //adjust timer based off question answer result
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }
    else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

//result reaction
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
   //add text with correct
    } else {
        element.classList.add('wrong')
      //add text with wrong
    }
}

//clears result reaction
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//questions for quiz

const questions = [
    {
        question: 'What will the following code return: Boolean(10 > 9)?',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    }, {
        question: 'How does a WHILE loop start?',
        answers: [
            { text: 'while (i <= 10)', correct: true },
            { text: 'while (i <= 10 ,i++)', correct: false },
            { text: 'while i = 1 to 10', correct: false },
            { text: 'YL', correct: false }
        ]
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
            { text: '&', correct: false },
            { text: '*', correct: false },
            { text: '=', correct: true },
            { text: '-', correct: false }
        ]
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        answers: [
            { text: 'if (i<>5)', correct: false },
            { text: 'if (i !=5)', correct: true },
            { text: 'if i=!5', correct: false },
            { text: 'if 👁 !', correct: false }
        ]
    },
    {
        question: 'Is JavaScript case-sensitive?',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'no', correct: false }
        ]
    }
]