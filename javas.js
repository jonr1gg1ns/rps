function getComputerChoice() {
    choice = Math.random(); {
        if(choice < 0.33)
            return "paper";

        if (choice >= 0.34 && choice < 0.66) {
            return "rock";

        } else {
            return "scissors"
        }
        }
    }

    console.log(getComputerChoice())

function  getHumanChoice() {
let text = "Please Choose Rock, Paper, or Scissors (Capitals Included)";
let Rock ="Rock" 
let Scissors = "Scissors"
let Paper = "Paper"
   let choose = prompt("Choose Rock, Paper, or Scissors"); {
     switch(choose) {
        case "Rock":
            console.log(Rock)
        break;

        case "Paper":
            console.log(Paper)
        break;

        case "Scissors":
            console.log(Scissors)
        break;

        default:
            console.log(text)
    
   }

  
}
}
console.log(getHumanChoice())

let humanScore = "0"
let computerScore = "0"


function playRound(humanChoice, computerChoice) {

}