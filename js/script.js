function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0){
        return "rock";
    } else if (choice === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {

    return prompt("Enter rock, paper, or scissors", "rock");
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice().toLowerCase;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    switch (computerChoice) {
        case (computerChoice === humanChoice):
            alert(`Computer chose ${computerChoice}. It's a tie.`);
            break;
        case (computerChoice === "rock" && humanChoice === "paper"):
            alert("Computer chose rock. You win!");
            humanScore++;
            break;
        case (computerChoice === "rock" && humanChoice === "scissors"):
            alert("Computer chose rock. Computer wins.");
            computerScore++;
            break;
        case (computerChoice === "paper" && humanChoice === "rock"):
            alert("Computer chose paper. Computer wins.");
            computerScore++;
            break;
        case (computerChoice === "paper" && humanChoice === "scissors"):
            alert("Computer chose paper. You win!");
            humanScore++;
            break;
        case (computerChoice === "scissors" && humanChoice === "rock"):
            alert("Computer chose scissors. You win!");
            humanScore++;
            break;
        case (computerChoice === "scissors" && humanChoice === "paper"):
            alert("Computer chose scissors. Computer wins.");
            computerScore++;
            break;
    }
}
