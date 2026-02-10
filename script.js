// Function for getting computer's choice

function getComputerChoice() {
    let computerChoice;
    let randValue = Math.floor(Math.random() * 100) + 1;
    switch (true) {
        case (randValue >= 0 && randValue <= 20):
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


// Function for getting human's choice through the use of prompt. 

function getHumanChoice() {
    let rawInput = prompt("Please input one of the three - Rock, Paper, or Scissors").trim().toLowerCase();
    let humanChoice = rawInput.at(0).toUpperCase() + rawInput.slice(1);
    let randValueHuman = Math.floor(Math.random() * 100) + 1;
    if (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors") {
        switch (true) {
            case (randValueHuman >= 0 && randValueHuman <= 20):
            case (randValueHuman >= 61 && randValueHuman <= 74):
                humanChoice = "Paper";
                break;
            case (randValueHuman >= 21 && randValueHuman <= 40):
            case (randValueHuman >= 41 && randValueHuman <= 60):
                humanChoice = "Rock";
                break;
            case (randValueHuman >= 75 && randValueHuman <= 87):
            case (randValueHuman >= 88 && randValueHuman <= 100):
                humanChoice = "Scissors";
                break;
        }
    }
    return humanChoice;
}

// Function to play a full game of five rounds.      


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        switch (true) {
            case (humanChoice === "Rock" && computerChoice === "Rock"):
            case (humanChoice === "Paper" && computerChoice === "Paper"):
            case (humanChoice === "Scissors" && computerChoice === "Scissors"):
                message = `Its a draw. Both you and the computer chose ${humanChoice}!`;
                break;
            case (humanChoice === "Rock" && computerChoice === "Scissors"):
            case (humanChoice === "Scissors" && computerChoice === "Paper"):
            case (humanChoice === "Paper" && computerChoice === "Rock"):
                message = `You win. ${humanChoice} beats ${computerChoice}!`;
                humanScore++;
                break;
            default:
                message = `Sorry! Computer wins, as ${computerChoice} beats ${humanChoice}!`;
                computerScore++;
        }
        console.log(`Your choice is ${humanChoice}.`);
        console.log(`Computer's choice is ${computerChoice}.`);
        console.log(message);
        console.log(`Computer's score is ${computerScore}.`);
        console.log(`Your score is ${humanScore}.`);
        return message;
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    let finalResult = humanScore > computerScore ? `Your total score is ${humanScore}, and computer's total score is ${computerScore}. You win!` :
        `Computer's total score is ${computerScore}, and your total score is ${humanScore}. Sorry! Computer wins.`;

    console.log(finalResult);

    return finalResult;
}

playGame();