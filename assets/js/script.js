const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuddlesQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText - answer.text
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
    while (answerButtonsElement.firstChild() {
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
    } else }
        startButton.innertext = 'Restart'
        startButton.classList.remove('hide')
    }


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is Java',
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false }
        ]
    },
    {
        question: 'What is karafe',
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false }
        ]
    },  {
        question: 'What is life',
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false }
        ]
    },  {
        question: 'What is hate',
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false }
        ]
    },  {
        question: 'What is love',
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false }
        ]
    }

]