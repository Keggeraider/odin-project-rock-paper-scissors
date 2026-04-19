let humanScore = 0;
let computerScore = 0;

const playRound = (human, computer) => {

    switch (computer) {
        case human:
            break;
        case "rock":
            switch (human) {
                case "paper":
                    humanScore++;
                    break;
                case "scissors":
                    computerScore++;
                    break;
            }
            break;
        case "paper":
            switch (human) {
                case "rock":
                    computerScore++;
                    break;
                case "scissors":
                    humanScore++;
                    break;
            }
            break;
        case "scissors":
            switch (human) {
                case "rock":
                    humanScore++;
                    break;
                case "paper":
                    computerScore++;
                    break;
            }
            break;
    }
};
       
const computerChoice = () => {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0){
        return "rock";
    } else if (choice === 1){
        return "paper";
    } else {
        return "scissors";
    }
};

const btns = document.querySelector(".buttons");
let humanChoice = "";
let computerPick = "";

const computerScoreElement = document.querySelector(".score-comp");
const playerScoreElement = document.querySelector(".score-player");

const scoreCardElement = document.querySelector(".score-card");
const humanChoiceElement = document.querySelector(".selection-player");
const computerChoiceElement = document.querySelector(".selection-comp");

btns.addEventListener('click', (e) => {
    // let target = e.target;

    humanChoice = e.target.id;
    computerPick = computerChoice();

    playRound(humanChoice, computerPick);

    const playerChoicePara = document.createElement("p");
    const computerChoicePara = document.createElement("p");

    console.log(humanChoiceElement.childNodes)

    playerChoicePara.textContent = humanChoice;
    computerChoicePara.textContent = computerPick;

    if (humanChoiceElement.contains(playerChoicePara))  { humanChoiceElement.removeChild(playerChoicePara); }
    if (computerChoiceElement.contains(computerChoicePara)) { computerChoiceElement.removeChild(computerChoicePara); }

    humanChoiceElement.replaceChildren(playerChoicePara);
    computerChoiceElement.replaceChildren(computerChoicePara);

    console.log(`human: ${playerScoreElement.textContent}, computer: ${computerScoreElement.textContent}`);

    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = humanScore;

    scoreCardElement.classList.toggle(".flipped");

});

 

    // for (i = 0; i < 5; i++ ) {

    //     playRound(humanChoice(), computerChoice());
        
    // }


    // alert(`Computer Score is ${computerScore} and your score is ${humanScore}`);
    // (computerScore > humanScore) ? alert("Computer Wins.") : alert("You win!");