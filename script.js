let humanScore = 0;
let computerScore = 0;
let message = "";
let finalResult = "";

const scoreHuman = document.querySelector(".humanScore");
const scoreComputer = document.querySelector(".computerScore");
const choiceMessageText = document.querySelector(".choicesMessage");
const finalResultText = document.querySelector(".finalResult");
const restartText = document.querySelector(".restart");
const humanChoicesButtons = document.querySelector(".weapons");
const restartButton = document.querySelector(".restartBtn");

function getComputerChoice() {
    let computerChoice;
    let randValue = Math.floor(Math.random() * 100) + 1;
    switch (true) {
        case (randValue > 0 && randValue <= 20):
        case (randValue >= 61 && randValue <= 74):
            computerChoice = "Rock";
            break;
        case (randValue >= 21 && randValue <= 40):
        case (randValue >= 75 && randValue <= 87):
            computerChoice = "Paper";
            break;
        case (randValue >= 41 && randValue <= 60):
        case (randValue >= 88 && randValue <= 100):
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    switch (true) {
        case (humanChoice === "Rock" && computerChoice === "Rock"):
        case (humanChoice === "Paper" && computerChoice === "Paper"):
        case (humanChoice === "Scissors" && computerChoice === "Scissors"):
            message = `Your choice is ${humanChoice}. Computer's choice is ${computerChoice}. Its a draw. Both, you and the computer, chose ${humanChoice}!`;
            humanScore += 0.5;
            computerScore += 0.5;
            break;
        case (humanChoice === "Rock" && computerChoice === "Scissors"):
        case (humanChoice === "Scissors" && computerChoice === "Paper"):
        case (humanChoice === "Paper" && computerChoice === "Rock"):
            message = `Your choice is ${humanChoice}. Computer's choice is ${computerChoice}. You win. ${humanChoice} beats ${computerChoice}!`;
            humanScore++;
            break;
        default:
            message = `Your choice is ${humanChoice}. Computer's choice is ${computerChoice}. Sorry! Computer wins, as ${computerChoice} beats ${humanChoice}!`;
            computerScore++;
    }
    console.log(`Your choice is ${humanChoice}.`);
    console.log(`Computer's choice is ${computerChoice}.`);
    console.log(`Computer's score is ${computerScore}.`);
    console.log(`Your score is ${humanScore}.`);
}


function scoreCalculator() {
    if (humanScore > computerScore) {
        finalResult = `Your total score is ${humanScore}, and computer's total score is ${computerScore}. You win!`;
    }

    else if (humanScore === computerScore) {
        finalResult = `Your total score and computer's total score is equal, ${humanScore}. Therefore, its a draw.`;
    }

    else {
        finalResult = `Computer's total score is ${computerScore}, and your total score is ${humanScore}. Sorry! Computer wins.`;
    }

    console.log(finalResult);

    return finalResult;
}

humanChoicesButtons.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        if (humanScore >= 5 || computerScore >= 5) {
            restartText.textContent = "Please press Restart to start over. Thanks!"
        }

        else {
            playRound(event.target.textContent, getComputerChoice());
            choiceMessageText.textContent = message;
            scoreHuman.textContent = humanScore;
            scoreComputer.textContent = computerScore;

            if (humanScore >= 5 || computerScore >= 5) {
                scoreCalculator();
                finalResultText.textContent = finalResult;
            }
        }
    }
})

restartButton.addEventListener("click", function (event) {
    humanScore = 0;
    computerScore = 0;
    message = "";
    finalResult = "";

    choiceMessageText.textContent = message;
    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;
    finalResultText.textContent = finalResult;
    restartText.textContent = ""
})





