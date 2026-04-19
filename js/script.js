let humanScore = 0;
let computerScore = 0;

const playRound = (human, computer) => {

    switch (computer) {
        case human:
            alert(`Computer chose ${computer}. It's a tie.`);
            break;
        case "rock":
            switch (human) {
                case "paper":
                    alert("Computer chose rock. You win!");
                    humanScore++;
                    break;
                case "scissors":
                    alert("Computer chose rock. Computer wins.");
                    computerScore++;
                    break;
            }
            break;
        case "paper":
            switch (human) {
                case "rock":
                    alert("Computer chose paper. Computer wins.");
                    computerScore++;
                    break;
                case "scissors":
                    alert("Computer chose paper. You win!");
                    humanScore++;
                    break;
            }
            break;
        case "scissors":
            switch (human) {
                case "rock":
                    alert("Computer chose scissors. You win!");
                    humanScore++;
                    break;
                case "paper":
                    alert("Computer chose scissors. Computer wins.");
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

btns.addEventListener('click', (e) => {
    let target = e.target;

    humanChoice = target.id;
    computerPick = computerChoice();

    // playRound(humanChoice, computerPick);

    console.log(`human: ${humanChoice}, computer: ${computerPick}`);

});

 

    // for (i = 0; i < 5; i++ ) {

    //     playRound(humanChoice(), computerChoice());
        
    // }


    // alert(`Computer Score is ${computerScore} and your score is ${humanScore}`);
    // (computerScore > humanScore) ? alert("Computer Wins.") : alert("You win!");