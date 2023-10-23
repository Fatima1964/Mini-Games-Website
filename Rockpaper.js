let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound(playerSelection) {
    if (roundCount < 5) {
        const computerSelection = computerPlay();

        if (playerSelection === computerSelection) {
            updateResult("It's a tie!");
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            updateResult(`You win! ${playerSelection} beats ${computerSelection}.`);
            playerScore++;
        } else {
            updateResult(`You lose! ${computerSelection} beats ${playerSelection}.`);
            computerScore++;
        }

        roundCount++;

        updateScore();

        if (roundCount === 5) {
            showButtons();
        }
    }
}

function showButtons() {
    const replayButton = document.querySelector("#game-buttons button:first-child");
    const exitButton = document.querySelector("#game-buttons button:last-child");

    replayButton.style.display = "block";
    exitButton.style.display = "block";
}

function replayGame() {
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
    resetScore();
    hideButtons();
    clearResult();
}

function exitGame() {
    // Add code to exit the game or redirect to another page if needed
}

function resetScore() {
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");

    playerScoreElement.textContent = "Your Score: 0";
    computerScoreElement.textContent = "Computer Score: 0";
}

function hideButtons() {
    const replayButton = document.querySelector("#game-buttons button:first-child");
    const exitButton = document.querySelector("#game-buttons button:last-child");

    replayButton.style.display = "none";
    exitButton.style.display = "none";
}

function clearResult() {
    const roundResult = document.getElementById("round-result");
    roundResult.textContent = "";
}

function updateResult(message) {
    const roundResult = document.getElementById("round-result");
    roundResult.textContent = message;
}

function updateScore() {
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");

    playerScoreElement.textContent = `Your Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

updateScore();  // Initialize the score display
