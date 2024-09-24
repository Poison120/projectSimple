// DOM Elements
const buttonBox = document.querySelector('.buttonBox');
const you = document.querySelector('.you');
const result = document.querySelector('.result');
const computerChoice = document.querySelector('.computer');
const score = document.querySelector('.score');

// Score Initialization
let scoreS = JSON.parse(localStorage.getItem('score')) || {
    user: 0,
    computer: 0,
    tie: 0
};

let userScore = scoreS.user;
let computerScore = scoreS.computer;
let tie = scoreS.tie;

// Local Storage Function
function ls() {
    try {
        localStorage.setItem('score', JSON.stringify(scoreS));
        score.innerHTML = `User: ${scoreS.user} Computer: ${scoreS.computer} Tied: ${scoreS.tie}`;
    } catch (error) {
        score.innerHTML = `Error on saving: ${error}`;
    }
}

// Function to Delete Score
function deleteScore() {
    try {
        localStorage.removeItem('score');
        scoreS = { user: 0, computer: 0, tie: 0 };
        userScore=0,computerScore=0,tie=0;
        ls();
    } catch (error) {
        alert("Error deleting score:", error);
    }
}

// Function to Update Scores
function scoreFn() {
    scoreS.user = userScore;
    scoreS.computer = computerScore;
    scoreS.tie = tie;

    ls();
}

// Function for Computer's Choice and Game Logic
function computer() {
    let choices = ['ROCK', 'PAPER', 'SCISSOR'];
    let index = Math.random() * 3;
    index = Math.floor(index);
    const choice = choices[index];

    computerChoice.innerHTML = `Computer choice: ${choice.toLowerCase()} <hr>`;

    if (inputSame === 'ROCK' && choice === 'ROCK' || 
        (inputSame === 'PAPER' && choice === 'PAPER') || 
        (inputSame === 'SCISSOR' && choice === 'SCISSOR')) {
        result.innerHTML = 'It\'s a tie <hr>';
        tie++;
        scoreFn();
        
    } else if (inputSame === 'ROCK' && choice === 'PAPER') {
        result.innerHTML = 'Paper covers rock, computer wins <hr>';
        computerScore++;
        scoreFn();
        
    } else if (inputSame === 'PAPER' && choice === 'ROCK') {
        result.innerHTML = 'Paper covers rock, you win <hr>';
        userScore++;
        scoreFn();
        
    } else if (inputSame === 'PAPER' && choice === 'SCISSOR') {
        result.innerHTML = 'Scissor cuts paper, computer wins <hr>';
        computerScore++;
        scoreFn();
        
    } else if (inputSame === 'SCISSOR' && choice === 'PAPER') {
        result.innerHTML = 'Scissor cuts paper, you win <hr>';
        userScore++;
        scoreFn();
        
    } else if (inputSame === 'ROCK' && choice === 'SCISSOR') {
        result.innerHTML = 'Rock crushes scissor, you win <hr>';
        userScore++;
        scoreFn();
        
    } else if (inputSame === 'SCISSOR' && choice === 'ROCK') {
        result.innerHTML = 'Rock crushes scissor, computer wins <hr>';
        computerScore++;
        scoreFn();
    }
}

// Event Listener for Button Clicks
buttonBox.addEventListener('click', function(e) {
    if (e.target.classList.contains('buttonInput')) {
        let input = e.target.value;
        inputSame = input.toUpperCase();

        you.innerHTML = `Your Choice: ${e.target.textContent} <hr>`;
        
        computer(); // Call the computer function to determine the result
    }
});

// Initial Score Display
scoreFn();