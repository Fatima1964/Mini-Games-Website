// Constants to represent player marks
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
// Defines the winning combinations on the Tic Tac Toe board
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]') // Get all the cells on the board
const board = document.getElementById('board') // Get the game board
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton') // Get the restart button
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const playerTurnElement = document.getElementById('player-turn'); // Get the element that displays the current player's turn
let circleTurn

//Start the game
startGame()

// Listen for a click event on the restart button and start a new game
restartButton.addEventListener('click', startGame)

// This function starts the game
function startGame() {
  circleTurn = false; // X always starts first so circleTurn is false here
  playerTurnElement.innerText = "X's Turn";
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true }) // Add click event listeners for empty cells (once)
  })
  setBoardHoverClass() // Update the hover indicator for the current player (X or O)
  winningMessageElement.classList.remove('show') // This hides the winning message
}

// Function to handle a cell click
function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass) // Places the current player's mark
  if (checkWin(currentClass)) {
    endGame(false) // Check if the current player has won
  } else if (isDraw()) {
    endGame(true) // Check if it's a draw
  } else {
    swapTurns() // Switch to the other player's turn
    setBoardHoverClass()
  }
}

// Function to end the game
function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!' // This displays a draw message
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!` // Displays the winning message with the player who won
  }
  winningMessageElement.classList.add('show')
}

// Function to check if the game has ended in a draw
function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

// Function to place a mark (X or O) on the cell
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

// Function to switch between X and O depending on whose turn it is
function swapTurns() {
  circleTurn = !circleTurn;
  playerTurnElement.innerText = circleTurn ? "O's Turn" : "X's Turn";
}

// Function to update the hover visual (of X or O) for the current player
function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

// Function to check if the current player has won based on winning combinations
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}