// make function named 'getComputerChoice'
/*
    Steps:
    Computer play random (Rock / Paper / Scissors)
        v
    Need random number between (0 - 3)
        v
    Change number to text (e.g. 1 means Rock)
        v
    Show text as choice
*/

choiceArray = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choiceArray[randomNumber].toLowerCase();
    console.log(computerChoice);
    return computerChoice;
}



// make function named 'getHumanChoice'
/*
    Steps:
    You need to choose with text
        v
    Need to compare with computer's choice
        v
    Which side will win?
        v
    Show the winner for this round and add point
        v
    Next round
*/

function getHumanChoice() {
    let humanChoice = prompt("Type your turn: ").toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

// make new variable 'humanScore' and 'computerScore'
/*
    Steps:sc
    If you get 5 points, you win
        or
    If computer get 5 points, computer win
*/

// make new function named 'playRound'

function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("Tie!");
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("Tie!");
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Tie!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win!");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win!");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("Computer win!");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("Computer win!")
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("Computer win!")
        } else {
            console.log("Error")
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// make new function named 'playGame'
function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
    }
}

playGame();