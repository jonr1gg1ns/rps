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
let humanScore = 0
let computerScore = 0

 const resultsDiv = document.createElement("div")
resultsDiv.id = "divResults";
function playRound(humanChoice, computerChoice) {
    resultsDiv.innerHTML = "";
    const roundResult = document.createElement("p");

    if (humanChoice === computerChoice) {
        roundResult.textContent = `Tie! Both selected ${humanChoice}.`;
    } else if (
        (humanChoice === rock && computerChoice === scissors) ||
        (humanChoice === paper && computerChoice === rock) ||
        (humanChoice === scissors && computerChoice === paper)
    ) {
        roundResult.textContent = `You Won! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        roundResult.textContent = `You Lost! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    const scoreUpdate = document.createElement("p");
    scoreUpdate.textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;
    resultsDiv.appendChild(roundResult);
    resultsDiv.appendChild(scoreUpdate);

    playGame(); // Check the game status after each round
}

function playGame() {
if (humanScore === 5 || computerScore === 5) {
    const finalResult = document.createElement("p");
    finalResult.textContent =
        humanScore > computerScore
            ? "Congratulations! You Won the Game! Refresh to play again."
            : "Game Over! You Lost the Game! Refresh to play again.";
    resultsDiv.appendChild(finalResult);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}
}


 const bigDiv = document.querySelector("#bigDiv")
 bigDiv.appendChild(resultsDiv);

const rockButton = document.createElement("button")
rockButton.classList.add("rockButton")
rockButton.textContent = "Rock"

bigDiv.appendChild(rockButton);


const paperButton = document.createElement("button")
paperButton.classList.add("paperButton");
paperButton.textContent = "Paper";

bigDiv.appendChild(paperButton)

const scissorsButton = document.createElement("button");

scissorsButton.classList.add("scissorsButton");
scissorsButton.textContent = "Scissors";

bigDiv.appendChild(scissorsButton);

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));

scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));