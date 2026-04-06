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


function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    let computerChoice = " ";
    let humanChoice = " ";

    function playRound(humanChoice, computerChoice){

        switch (computerChoice) {
            case humanChoice:
                alert(`Computer chose ${computerChoice}. It's a tie.`);
                break;
            case "rock":
                switch (humanChoice) {
                    case "paper":
                        alert("Computer chose rock. You win!");
                        humanScore++;
                        break;
                    case "scissors":
                        alert("Computer chose rock. Computer wins.");
                        computerScore++;
                        break;
                }
            case "paper":
                switch (humanChoice) {
                    case "rock":
                        alert("Computer chose paper. Computer wins.");
                        computerScore++;
                        break;
                    case "scissors":
                        alert("Computer chose paper. You win!");
                        humanScore++;
                        break;
                }
            case "scissors":
                switch (humanChoice) {
                    case "rock":
                        alert("Computer chose scissors. You win!");
                        humanScore++;
                        break;
                    case "paper":
                        alert("Computer chose scissors. Computer wins.");
                        computerScore++;
                        break;
                }
        }
    }

    for (i = 0; i < 5; i++ ) {

        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice().toLowerCase();
        playRound(humanChoice, computerChoice);
        
    }

    alert(`Computer Score is ${computerScore} and your score is ${humanScore}`);
    (computerScore > humanScore) ? alert("Computer Wins.") : alert("You win!");
}

playGame();

