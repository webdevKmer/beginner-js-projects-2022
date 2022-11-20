const questions = [
    {
        id: 1,
        question: "Qui est le meilleur basketteur?",
        answers: [
            { answer: "Michael Jordan", isCorrect: true },
            { answer: "Scottie Pippen", isCorrect: false },
            { answer: "Allan Iverson", isCorrect: false },
            { answer: "Stephen Curry", isCorrect: false }
        ]    
    },
    {
        id: 2,
        question: "Qui est le meilleur footballeur?",
        answers: [
            { answer: "Christiano Ronaldo", isCorrect: false },
            { answer: "Lionel Messi", isCorrect: false },
            { answer: "Zinedine Zidane", isCorrect: true },
            { answer: "Paolo Maldini", isCorrect: false }
        ] 
    },
    {
        id: 3,
        question: "Qui est la meilleure voiture?",
        answers: [
            { answer: "Ferrari", isCorrect: false },
            { answer: "Mercedes", isCorrect: false },
            { answer: "Lamborgini", isCorrect: false },
            { answer: "Mustang", isCorrect: true }
        ]    
    },
    {
        id: 4,
        question: "Qui cogne fort?",
        answers: [
            { answer: "Mike Tyson", isCorrect: false },
            { answer: "Evander Hollyfield", isCorrect: false },
            { answer: "Francis Nganou", isCorrect: false },
            { answer: "Super Makia", isCorrect: true }
        ]   
    }
]

const game = document.querySelector('.game')
const results = document.querySelector('.results')
const question = document.querySelector('.question')
const answersContainer = document.querySelector('.answers')
let correctAnswers = 0
let wrongAnswers = 0
let yourTotal = 0
const correctAnswersMessage = document.querySelector('.correct')
const wrongAnswersMessage = document.querySelector('.wrong')
const submitBtn = document.querySelector('.submit')
const playBtn = document.querySelector('.play')

let questionIndex = 0

function showNextQuestion(idx){
    if (idx <= questions.length -1){

        question.textContent = questions[idx].question
    
        for (let i = 0; i < questions[idx].answers.length; i++){
            answersContainer.innerHTML += `
                <div class="answer">
                    <input type="radio" name="answer" id="answer${i}">
                    <label for="answer${i}">${questions[idx].answers[i].answer}</label>
                </div>
                `
        }
    } else {
        console.log("No more question!!!");
    }
    questionIndex++
    console.log('qindex', questionIndex);
}

function showResults() {
    game.classList.add('hidden')
    results.classList.remove('hidden')
}

function restartGame() {
    results.classList.add('hidden')
    game.classList.remove('hidden')
    questionIndex = 0
    answersContainer.innerHTML = ""
    showNextQuestion(questionIndex)
}

showNextQuestion(questionIndex)

submitBtn.addEventListener('click', () => {
    console.log('submit index',questionIndex);
    if (questionIndex <= questions.length -1){
        answersContainer.innerHTML = ""
        showNextQuestion(questionIndex)
    } else {
        showResults()
    }
})

playBtn.addEventListener('click', () => {
    restartGame()
})