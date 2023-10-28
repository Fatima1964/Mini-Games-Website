// Variables to keep track of game state
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function updateFinalScore() {
    const finalPlayerScore = document.getElementById("final-player-score");
    const finalComputerScore = document.getElementById("final-computer-score");

    finalPlayerScore.textContent = playerScore;
    finalComputerScore.textContent = computerScore;
}
 
function playRound(playerSelection) {
    if (roundCount < 5) {
        const computerSelection = computerPlay();
        let resultMessage;

        if (playerSelection === computerSelection) {
            resultMessage = "It's a tie!";
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
            playerScore++;
        } else {
            resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
            computerScore++;
        }

        roundCount++;

        displayRoundResult(roundCount, resultMessage, playerScore, computerScore);

        if (roundCount === 5) {
            updateFinalScore();
            document.getElementById("exit-button").style.display = "block";
        }
    }
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
//Scoreboard//
function displayRoundResult(round, result, player, computer) {
    const scoreboardBody = document.getElementById("scoreboard-body");
    const newRow = scoreboardBody.insertRow();
    const roundCell = newRow.insertCell(0);
    const resultCell = newRow.insertCell(1);
    const playerCell = newRow.insertCell(2);
    const computerCell = newRow.insertCell(3);

    roundCell.textContent = round;
    resultCell.textContent = result;
    playerCell.textContent = player;
    computerCell.textContent = computer;
}

function exitGame() {
//Exit command//
    window.location.href = "index.html"; 
}

function clearScoreboard() {
    const scoreboardBody = document.getElementById("scoreboard-body");
    while (scoreboardBody.firstChild) {
        scoreboardBody.removeChild(scoreboardBody.firstChild);
    }
}


