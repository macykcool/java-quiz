console.dir(window.document);

// adding functionality to the html elements
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

//do not need a next button, SO NEED TO ELIMINATE BTN OR CHANGE
//CLICK EVENT TO AFTER THE RESULT APPEARS
//THATS AN ALERT I THINK
const nextButton = document.getElementById('next-btn')

//randomizes questions
let shuffledQuestions, currentQuestionIndex

//setting up the counter
let counter = 0
setInterval (() => {
    counter++
    consolelog(counter)
}, 1000)


//click event to startGame function AND TIMER
startButton.addEventListener('click', startGame)

//need the event of an answer click to show result, AND GO TO NEXT QUESTION
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// START SHOULD START TIMER
//this starts the game by pulling at random a question. 
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
//this pulls up the question container
function setNextQuestion() {
    resetState()
    // STARTS TIMER
    //COUNTER =60;
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//
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

//remove click event
function resetState() {
    clearStatusClass(document.body)
    //need to hide result and it not be an event listener
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
       (answerButtonsElement.firstChild)
    }
    }
    
    //need to log the answer selection with json
function selectAnswer(e) {
    const selectedButton = e.target 
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    //THIS IS WHEN NEXT QUESTION SHOULD COME UP
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } 
    // IF OUT OF QUESTIONS OR TIME NEED A GAMEOVER ALERT
    //AFTER GAME OVER ALERT, RECORD SCORES OR RESTART
    else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}
 // this is result of answer
 //NEED TO ALERT CORRECT OR WRONG
 // CORRECT OR WRONG RESULT NEEDS TO ADJUST TIMER
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        //ADD TIME
        //COUNTER -= 10;
    } else {
        element.classList.add('wrong')
        //REMOVE TIME 
        //COUNTER += 10;
    }
}

// AFTER ALERT
//this is when a new question comes up, changes the display back 
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



//need to add a score page and timer

//game is over CAN RECORD initials and score, AND OR RESTART

// can visit score page before start

//the quiz questions
const questions = [
    {
        question: 'What will the following code return: Boolean(10 > 9)?',
        answers: [
            { text: 'True' , correct: true },
            { text: 'False' , correct: false }
        ]
    }, {
        question: 'How does a WHILE loop start?',
        answers: [
            { text: 'while (i <= 10)' , correct: true },
            { text: 'while (i <= 10 ,i++)' , correct: false },
            { text: 'while i = 1 to 10' , correct: false },
            { text: 'YL' , correct: false }
        ]
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
            { text: '&' , correct: false },
            { text: '*' , correct: false },
            { text: '=' , correct: true },
            { text: '-' , correct: false }
        ]
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        answers: [
            { text: 'if (i<>5)' , correct: false },
            { text: 'if (i !=5)' , correct: true },
            { text: 'if i=!5' , correct: false },
            { text: 'if 👁 !' , correct: false }
        ]
    },
    {
        question: 'Is JavaScript case-sensitive?',
        answers: [
            { text: 'Yes' , correct: true },
            { text: 'no' , correct: false }
        ]
    }
]    


