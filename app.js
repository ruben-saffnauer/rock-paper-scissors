const showPlayerChoice = document.getElementById("playerChoice");
const showComputerChoice = document.getElementById("computerChoice");
const showResult = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    showPlayerChoice.innerHTML = playerChoice;
    generateRandomChoice();
    generateResult();
}))

function generateRandomChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1) computerChoice = "Rock";
    if(randomNum === 2) computerChoice = "Paper";
    if(randomNum === 3) computerChoice = "Scissors";
    showComputerChoice.innerHTML = computerChoice;
}

function generateResult() {
    if(computerChoice === playerChoice) result = "Draw!"
    if(computerChoice === "Rock" && playerChoice === "Scissors") result = "You lose!"
    if(computerChoice === "Paper" && playerChoice === "Rock") result = "You lose!"
    if(computerChoice === "Scissors" && playerChoice === "Paper") result = "You lose!"
    if(computerChoice === "Rock" && playerChoice === "Paper") result = "You win!"
    if(computerChoice === "Paper" && playerChoice === "Scissors") result = "You win!"
    if(computerChoice === "Scissors" && playerChoice === "Rock") result = "You win!"
    showResult.innerHTML = result;
}