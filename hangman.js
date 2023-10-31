// List of words to choose from
const wordList = ["shahrukh khan", "imran khan", "kuwait", "programmer"];

// Function to select a random word from the list
function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toLowerCase();
}

// Initialize a game
function initializeGame() {
    const wordToGuess = selectRandomWord();
    const guessedWord = "_".repeat(wordToGuess.length);
    const guessedLetters = [];
    let incorrectGuesses = 0;

    return {
        wordToGuess,
        guessedWord,
        guessedLetters,
        incorrectGuesses,
    };
}

// Function to check if the player won
function hasPlayerWon(game) {
    return game.wordToGuess === game.guessedWord;
}

// Function to generate alphabet buttons
function generateAlphabetButtons() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.split('');
}

// Function to make a guess
function makeGuess(letter) {
    // Your logic for making a guess goes here
    // Update the game state and the displayed word
}

// Add code to create and add alphabet buttons to the HTML page
const alphabetButtons = generateAlphabetButtons();
const alphabetContainer = document.getElementById('alphabet-buttons');

alphabetButtons.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => makeGuess(letter));
    alphabetContainer.appendChild(button);
});

// Call the playHangman function to start the game
playHangman();
