// Variables to keep track of game state
let playerScore = 0; // Initialize the player's score to 0.
let computerScore = 0; // Initialize the computer's score to 0.
let roundCount = 0; // Initialize the round count to 0.

// Function to update the final scores displayed on the page and display the game result message.
function updateFinalScore() {
    const finalPlayerScore = document.getElementById("final-player-score");
    const finalComputerScore = document.getElementById("final-computer-score");
    const gameResultMessage = document.getElementById("game-result-message");

    finalPlayerScore.textContent = playerScore; // Update player's final score.
    finalComputerScore.textContent = computerScore; // Update computer's final score.

    if (roundCount === 5) { // Check if it's the final round.
        if (playerScore > computerScore) {
            gameResultMessage.textContent = "🚀 Congratulations You Won! 🚀";
        } else if (playerScore < computerScore) {
            gameResultMessage.textContent = "☹ Better Luck Next Time! ☹";
        } else if (playerScore === computerScore) {
            gameResultMessage.textContent = "😐 It's A Tie! 😐";
        }
    }
}

// Function to play a round of the game.
function playRound(playerSelection) {
    if (roundCount < 5) { // Check if the game is not yet over (5 rounds).
        const computerSelection = computerPlay(); // Get the computer's choice.
        let resultMessage;

        if (playerSelection === computerSelection) {
            resultMessage = "It's a tie!"; // The result is a tie.
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`; // Player wins.
            playerScore++;
        } else {
            resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`; // Computer wins.
            computerScore++;
        }

        roundCount++; // Increase the round count.

        displayRoundResult(roundCount, resultMessage, playerScore, computerScore); // Display the result.

        if (roundCount === 5) { // Check if it's the final round.
            updateFinalScore(); // Update the final scores.
            document.getElementById("exit-button").style.display = "block";
        }
    }
}

// Function to generate a random choice for the computer.
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; // Return a random choice.
}

// Function to display the result of each round in the scoreboard.
function displayRoundResult(round, result, player, computer) {
    const scoreboardBody = document.getElementById("scoreboard-body");
    const newRow = scoreboardBody.insertRow(); // Insert a new row.
    const roundCell = newRow.insertCell(0);
    const resultCell = newRow.insertCell(1);
    const playerCell = newRow.insertCell(2);
    const computerCell = newRow.insertCell(3);

    roundCell.textContent = round; //  Displays the round number.
    resultCell.textContent = result; // " the result message.
    playerCell.textContent = player; // " the player's score.
    computerCell.textContent = computer; //  " the computer's score.
}

// Function to exit the game and return to the home page.
function exitGame() {
    // Exit command to redirect to "index.html."
    window.location.href = "index.html";
}

// Function to clear the scoreboard.
function clearScoreboard() {
    const scoreboardBody = document.getElementById("scoreboard-body");
    while (scoreboardBody.firstChild) {
        scoreboardBody.removeChild(scoreboardBody.firstChild); // Remove all rows from the scoreboard.
    }
}

// Function to restartGame
function restartGame() {
    roundCount = 0; // reset variables to zero
    playerScore = 0;
    computerScore = 0;
    updateFinalScore(); // Clear the final score display
    clearScoreboard(); // Clear the scoreboard
    document.getElementById("game-result-message").textContent = ""; // Clear the game result message
}

// Event listener for the clear button
document.getElementById("clear-button").addEventListener("click", restartGame);

// Initialize the game
updateFinalScore();
