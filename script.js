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
let humanScore = 0;
let computerScore = 0;

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
            console.log(computerScore)
            console.log(humanScore)
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("Tie!");
            console.log(computerScore)
            console.log(humanScore)
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Tie!");
            console.log(computerScore)
            console.log(humanScore)
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You win!");
            console.log(computerScore)
            console.log(humanScore)
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You win!");
            console.log(computerScore)
            console.log(humanScore)
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You win!");
            console.log(computerScore)
            console.log(humanScore)
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("Computer win!");
            computerScore++;
            console.log(computerScore)
            console.log(humanScore)
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log(computerScore)
            console.log(humanScore)
            console.log("Computer win!")
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log(computerScore)
            console.log(humanScore)
            console.log("Computer win!")
        } else {
            console.log("Error")
        }
}

// make new function named 'playGame'
function playGame() {
    computerScore = 0;
    humanScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (computerScore < humanScore) {
        console.log("You have Won");
    }
    else if (computerScore > humanScore) {
        console.log("Computer has Won!");
    }
    else if (computerScore === humanScore) {
        console.log("It is Draw");
    }
    else {
        console.log("Error")
    }
}

playGame();