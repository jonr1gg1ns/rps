const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        return rock; 
    } else if (choice < 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

function getHumanChoice() {
    let choose = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    switch (choose) {
        case "rock":
            return rock;
        case "paper":
            return paper;
        case "scissors":
            return scissors;
        default:
            return "invalid"; 
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

console.log(`Human selected: ${humanSelection}`);  
console.log(`Computer selected: ${computerSelection}`); 
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } 
    else if (
        (humanChoice === rock && computerChoice === scissors) ||
        (humanChoice === paper && computerChoice === rock) ||
        (humanChoice === scissors && computerChoice === paper)
      
    ) {
        console.log("You Won!");
        humanScore++;
    } 
    else if (
        (humanChoice === rock && computerChoice === paper) ||
        (humanChoice === paper && computerChoice === scissors) ||
        (humanChoice === scissors && computerChoice === rock)
    ) {
        console.log("You Lost!");
        computerScore++;
    } 
    else {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }
   console.log(`Human score: ${humanScore}`);  
   console.log(`Computer Score: ${computerScore}`);
}

playRound(humanSelection, computerSelection);

