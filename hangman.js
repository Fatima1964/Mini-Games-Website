// List of words to choose from
const wordList = ["shahrukh khan", "canada", "kuwait", "programmer"];

// Initialize a game and scoreboard
let game = initializeGame();
let wins = 0;
let losses = 0;

function initializeGame() {
    const wordToGuess = selectRandomWord();
    const guessedWord = "_".repeat(wordToGuess.length);
    const guessedLetters = [];
    let incorrectGuesses = 0;
    let hintsLeft = 3;
    let vowelsLeft = 5;

    return {
        wordToGuess,
        guessedWord,
        guessedLetters,
        incorrectGuesses,
        hintsLeft,
        vowelsLeft,
    };
}

function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toLowerCase();
}

function hasPlayerWon() {
    return game.wordToGuess === game.guessedWord;
}

function generateAlphabetButtons() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.split('');
}

function makeGuess(letter) {
    if (!game.guessedLetters.includes(letter)) {
        game.guessedLetters.push(letter);

        if (game.wordToGuess.includes(letter)) {
            for (let i = 0; i < game.wordToGuess.length; i++) {
                if (game.wordToGuess[i] === letter) {
                    game.guessedWord = game.guessedWord.substr(0, i) + letter + game.guessedWord.substr(i + 1);
                }
            }
        } else {
            game.incorrectGuesses++;
        }

        updateGameDisplay();

        if (hasPlayerWon()) {
            wins++;
            updateScoreboard();
            alert("Congratulations! You won! The word is: " + game.wordToGuess);
            game = initializeGame();
        } else if (game.incorrectGuesses >= 6) {
            losses++;
            updateScoreboard();
            alert("You lost. The word was: " + game.wordToGuess);
            game = initializeGame();
        }
    }
}

function revealHint() {
    if (game.hintsLeft > 0) {
        const unrevealedIndices = game.guessedWord.split('').map((letter, index) => {
            return letter === '_' ? index : -1;
        }).filter(index => index !== -1);

        if (unrevealedIndices.length > 0) {
            const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
            game.guessedWord = game.guessedWord.substr(0, randomIndex) + game.wordToGuess[randomIndex] + game.guessedWord.substr(randomIndex + 1);
            game.hintsLeft--;

            updateGameDisplay();
        }
    }
}

function revealVowel() {
    if (game.vowelsLeft > 0) {
        const vowels = 'aeiou';
        const unrevealedVowels = vowels.split('').filter(vowel => !game.guessedWord.includes(vowel));

        if (unrevealedVowels.length > 0) {
            const randomVowel = unrevealedVowels[Math.floor(Math.random() * unrevealedVowels.length)];

            for (let i = 0; i < game.wordToGuess.length; i++) {
                if (game.wordToGuess[i] === randomVowel) {
                    game.guessedWord = game.guessedWord.substr(0, i) + randomVowel + game.guessedWord.substr(i + 1);
                }
            }

            game.vowelsLeft--;

            updateGameDisplay();
        }
    }
}


function updateGameDisplay() {
    document.getElementById('word-display').textContent = "Word: " + game.guessedWord;
    document.getElementById('incorrect-guesses').textContent = "Incorrect Guesses Left: " + (6 - game.incorrectGuesses);
    document.getElementById('hint-button').textContent = `Hint (${game.hintsLeft} left)`;
    document.getElementById('vowel-button').textContent = `Guess a Vowel (${game.vowelsLeft} left)`;
}

function updateScoreboard() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
}

const alphabetButtons = generateAlphabetButtons();
const alphabetContainer = document.getElementById('alphabet-buttons');

alphabetButtons.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => makeGuess(letter));
    alphabetContainer.appendChild(button);
});

const hintButton = document.getElementById('hint-button');
hintButton.addEventListener('click', revealHint);

const vowelButton = document.getElementById('vowel-button');
vowelButton.addEventListener('click', revealVowel);

initializeGame();
