// Hangman game logic
const words = ["project", "javascript", "hangman", "developer", "coding"];
let chosenWord = "";
let guessedLetters = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;
let hintsLeft = 3; // Number of hints allowed
let vowels = ["a", "e", "i", "o", "u"]; // List of vowels

const wordDisplay = document.getElementById('word-display');
const incorrectGuessesDisplay = document.getElementById('incorrect-guesses');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const hintButton = document.getElementById('hint-button');
const vowelButton = document.getElementById('vowel-button');

// Choose a random word from the list
function chooseRandomWord() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
}

// Initialize the game
function initializeGame() {
    chooseRandomWord();
    guessedLetters = [];
    incorrectGuesses = 0;
    hintsLeft = 3; // Reset hints
    wordDisplay.textContent = createWordDisplay();
    incorrectGuessesDisplay.textContent = `Incorrect Guesses: ${incorrectGuesses}/${maxIncorrectGuesses}`;
    hintButton.disabled = false;
    vowelButton.disabled = false;
}

// Create the word display with underscores for unguessed letters
function createWordDisplay() {
    let display = "";
    for (const letter of chosenWord) {
        if (guessedLetters.includes(letter)) {
            display += letter;
        } else {
            display += "_";
        }
        display += " ";
    }
    return display;
}

// Check if the player has won
function checkWin() {
    return createWordDisplay().replace(/ /g, '') === chosenWord;
}

// Check if the player has lost
function checkLoss() {
    return incorrectGuesses >= maxIncorrectGuesses;
}

// Handle a player's guess
function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);

        if (!chosenWord.includes(letter)) {
            incorrectGuesses++;
        }

        wordDisplay.textContent = createWordDisplay();
        incorrectGuessesDisplay.textContent = `Incorrect Guesses: ${incorrectGuesses}/${maxIncorrectGuesses}`;

        if (checkWin()) {
            winsDisplay.textContent = parseInt(winsDisplay.textContent) + 1;
            alert("Congratulations! You've won!");
            initializeGame();
        } else if (checkLoss()) {
            lossesDisplay.textContent = parseInt(lossesDisplay.textContent) + 1;
            alert("Sorry, you've lost. The word was: " + chosenWord);
            initializeGame();
        }
    }
}

// Handle hint
hintButton.addEventListener('click', () => {
    if (hintsLeft > 0) {
        const unrevealedLetters = chosenWord.split('').filter(letter => !guessedLetters.includes(letter));
        const hintLetter = unrevealedLetters[Math.floor(Math.random() * unrevealedLetters.length)];
        alert(`Hint: One of the letters is "${hintLetter}"`);
        hintsLeft--;
        hintButton.textContent = `Hint (${hintsLeft} left)`;
        if (hintsLeft === 0) {
            hintButton.disabled = true;
        }
    } else {
        alert("No hints left!");
    }
});

// Handle "Guess a Vowel" feature
vowelButton.addEventListener('click', () => {
    if (guessedLetters.length < chosenWord.length && hintsLeft > 0) {
        const unrevealedVowels = vowels.filter(vowel => !guessedLetters.includes(vowel));
        if (unrevealedVowels.length > 0) {
            const vowel = unrevealedVowels[Math.floor(Math.random() * unrevealedVowels.length)];
            guessedLetters.push(vowel);
            handleGuess(vowel);
        } else {
            alert("No unrevealed vowels left!");
        }
    } else {
        alert("No hints or vowels left!");
    }
});

// Add event listeners to alphabet buttons (A-Z)
for (let letter = 65; letter <= 90; letter++) {
    const letterButton = document.createElement('button');
    letterButton.textContent = String.fromCharCode(letter);
    letterButton.addEventListener('click', function () {
        handleGuess(letterButton.textContent.toLowerCase());
    });
    document.getElementById('alphabet').appendChild(letterButton);
}

// Initialize the game when the page loads
initializeGame();
