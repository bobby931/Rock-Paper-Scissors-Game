const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice

generateComputerChoice()
getResult()

}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use possibleChoices.length
    console.log(randomNumber)


    if (randomNumber ===1){
        computerChoice = 'Rock'
    }
    if(randomNumber ===2){
        computerChoice = 'Scissors'
    }
    if(randomNumber ===3){
        computerChoice = 'Paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult(){
    console.log(result)
    if(computerChoice === userChoice){
        result = 'It is a draw'
    }
    if(computerChoice === 'Rock' && userChoice === "Paper"){
        result = 'You Win!'
    }
    if(computerChoice === 'Rock' && userChoice === "Scissors"){
        result = 'You lose, try again'
    }
    if(computerChoice === 'Paper' && userChoice === "Scissors"){
        result = 'You Win!'
    }
    if(computerChoice === 'Paper' && userChoice === "Rock"){
        result = 'You lose, try again'
    }
    if(computerChoice === 'Scissors' && userChoice === "Rock"){
        result = 'You Win!'
    }
    if(computerChoice === 'Scissors' && userChoice === "Paper"){
        result = 'You lose, try again.'
    }

    if(computerChoice === 'Scissors' && userChoice === "Scissors"){
        result = 'It is a tie! Play again.'
    }
    if(computerChoice === 'Paper' && userChoice === "Paper"){
        result = 'It is a tie! Play again.'
    }
    if(computerChoice === 'Rock' && userChoice === "Rock"){
        result = 'It is a tie! Play again.'
    }
    
    resultDisplay.innerHTML = result
}
