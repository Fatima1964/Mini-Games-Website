// List of words to choose from
const wordList = ["mango", "school", "quiz", "zootopia", "holiday", "teacher", "cricket", "canada", "kuwait", "programmer"];

// Define a category and clues for each word
const wordCategories = {
    mango: {
        category: "fruit",
        clues: ["Tropical fruit", "Sweet and juicy", "Orange-colored"],
    },
    school: {
        category: "place",
        clues: ["Where students learn", "Has classrooms", "Often has a playground"],
    },
    quiz: {
        category: "activity",
        clues: ["Intellectual challenge", "May involve questions", "Sometimes a competition"],
    },
    zootopia: {
        category: "movie",
        clues: ["An animated film", "Features anthropomorphic animals", "Directed by Byron Howard"],
    },
    holiday: {
        category: "event",
        clues: ["Time off from work", "Celebration or vacation", "Often associated with travel"],
    },
    teacher: {
        category: "profession",
        clues: ["Educator", "Instructor", "Imparts knowledge"],
    },
    cricket: {
        category: "sport",
        clues: ["Bat-and-ball game", "Popular in England", "Wickets and runs"],
    },
    canada: {
        category: "country",
        clues: ["Second-largest country", "Maple leaf flag", "Capital is Ottawa"],
    },
    kuwait: {
        category: "country",
        clues: ["Located in the Middle East", "Capital is Kuwait City", "Known for its oil reserves"],
    },
    programmer: {
        category: "profession",
        clues: ["Codes and develops software", "Writes algorithms", "Computer scientist"],
    },
    apple: {
        category: "fruit",
        clues: ["Common fruit", "Often used for technology logos", "Comes in various colors"],
    },
    beach: {
        category: "place",
        clues: ["Sandy shoreline", "Relaxing vacation spot", "Waves and seashells"],
    },
    dog: {
        category: "animal",
        clues: ["Man's best friend", "Barks and wags its tail", "Comes in various breeds"],
    },
    elephant: {
        category: "animal",
        clues: ["Large mammal", "Long trunk and big ears", "Herbivorous"],
    },
    guitar: {
        category: "instrument",
        clues: ["Stringed musical instrument", "Used in various music genres", "Has frets and strings"],
    },
    hamburger: {
        category: "food",
        clues: ["Popular fast food", "Consists of meat and buns", "Often served with condiments"],
    },
    jazz: {
        category: "music",
        clues: ["Musical genre", "Improvisation and syncopation", "Born in the United States"],
    },
    kangaroo: {
        category: "animal",
        clues: ["Australian marsupial", "Hops and carries young in a pouch", "Herbivorous"],
    },
    mountain: {
        category: "geography",
        clues: ["High landform", "Often snowy peaks", "Hiking and skiing destination"],
    },
    notebook: {
        category: "item",
        clues: ["Used for writing and taking notes", "Contains blank pages", "Often bound with a cover"],
    }
};

// Initialize a game and scoreboard
let game = initializeGame();
let wins = 0;
let losses = 0;
let hintsLeft = 3; // Total hints
let cluesLeft = 3; // Total clues;
let vowelsLeft = 5; // Total vowels

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

function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toLowerCase();
}

function hasPlayerWon() {
    return game.wordToGuess === game.guessedWord;
}

function revealHint() {
    if (hintsLeft > 0) {
        const unrevealedIndices = game.guessedWord.split('').map((letter, index) => {
            return letter === '_' ? index : -1;
        }).filter(index => index !== -1);

        if (unrevealedIndices.length > 0) {
            const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
            game.guessedWord = game.guessedWord.slice(0, randomIndex) + game.wordToGuess[randomIndex] + game.guessedWord.slice(randomIndex + 1);
            hintsLeft--;

            updateGameDisplay();
        }
    }
}
function giveClue() {
    const wordToGuess = game.wordToGuess;
    const categoryInfo = wordCategories[wordToGuess];
    
    if (categoryInfo && categoryInfo.clues.length > 0 && cluesLeft > 0) {
        const randomIndex = Math.floor(Math.random() * categoryInfo.clues.length);
        const clue = categoryInfo.clues.splice(randomIndex, 1)[0];
        alert(`Clue: ${clue}`);
        cluesLeft--;

        if (cluesLeft === 0) {
            document.getElementById('give-clue-button').setAttribute('disabled', true);
        }
    } else if (cluesLeft === 0) {
        alert("No more clues left.");
    }
    updateGameDisplay();
}


// Update the hangman graphic based on incorrect guesses
function updateHangmanGraphic() {
    const hangmanParts = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"];
    for (let i = 0; i < game.incorrectGuesses; i++) {
        document.getElementById(hangmanParts[i]).style.display = 'block';
    }
}
function revealVowel() {
    if (vowelsLeft > 0) {
        const vowels = 'aeiou';
        const guessedWordArray = game.guessedWord.split('');
        let vowelRevealed = false;

        for (let i = 0; i < game.wordToGuess.length; i++) {
            const letter = game.wordToGuess[i];
            if (vowels.includes(letter) && guessedWordArray[i] === '_') {
                guessedWordArray[i] = letter;
                vowelRevealed = true;
                vowelsLeft--;

                if (vowelsLeft === 0) {
                    document.getElementById('vowel-button').setAttribute('disabled', true);
                }

                // Break out of the loop after revealing one vowel
                break;
            }
        }

        if (vowelRevealed) {
            game.guessedWord = guessedWordArray.join('');
            updateGameDisplay();
        } else {
            alert("No more unrevealed vowels in the word.");
        }
    } else {
        alert("No more vowels left to reveal.");
    }
}


function updateGameDisplay() {
    document.getElementById('word-display').textContent = "Word: " + game.guessedWord;
    document.getElementById('incorrect-guesses').textContent = "Incorrect Guesses Left: " + (6 - game.incorrectGuesses);
    document.getElementById('hint-button').textContent = `Hint (${hintsLeft} left)`;
    document.getElementById('vowel-button').textContent = `Reveal Vowel (${vowelsLeft} left)`;
    document.getElementById('give-clue-button').textContent = `Give Clue (${cluesLeft} left)`;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
}

function updateScoreboard() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
}

// Function to generate alphabet buttons
function generateAlphabetButtons() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.split('');
}

const alphabetContainer = document.getElementById('alphabet-buttons');

// Generate and append the alphabet buttons to the container
const alphabetButtons = generateAlphabetButtons();
    alphabetButtons.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => makeGuess(letter));
    alphabetContainer.appendChild(button);
});

function makeGuess(letter) {
    if (!game.guessedLetters.includes(letter)) {
        game.guessedLetters.push(letter);

        if (game.wordToGuess.includes(letter)) {
            for (let i = 0; i < game.wordToGuess.length; i++) {
                if (game.wordToGuess[i] === letter) {
                    game.guessedWord = game.guessedWord.slice(0, i) + letter + game.guessedWord.slice(i + 1);
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
const hintButton = document.getElementById('hint-button');
hintButton.addEventListener('click', revealHint);

const vowelButton = document.getElementById('vowel-button');
vowelButton.addEventListener('click', revealVowel);

// Add an event listener for the "Give Clue" button
const giveClueButton = document.getElementById('give-clue-button');
giveClueButton.addEventListener('click', giveClue);


// Add an event listener for the "Play Again" button
const playAgainButton = document.getElementById('play-again-button');
playAgainButton.addEventListener('click', resetGame);

function resetGame() {
    game = initializeGame();
    hintsLeft = 3;
    cluesLeft = 3;
    vowelsLeft = 5;

    // Enable all the buttons
    document.getElementById('hint-button').removeAttribute('disabled');
    document.getElementById('vowel-button').removeAttribute('disabled');
    document.getElementById('give-clue-button').removeAttribute('disabled');

    // Hide all Hangman parts
    const hangmanParts = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"];
    hangmanParts.forEach(part => {
        document.getElementById(part).style.display = 'none';
    });

    updateGameDisplay();
}

// Make a guess when a letter button is clicked
function makeGuess(letter) {
    if (!game.wordToGuess.includes(letter)) {
        game.incorrectGuesses++;
        updateHangmanGraphic();

        if (game.incorrectGuesses >= 6) {
            losses++;
            updateScoreboard();
            alert("You lost. The word was: " + game.wordToGuess);
            resetGame();
        }
    } else {
        for (let i = 0; i < game.wordToGuess.length; i++) {
            if (game.wordToGuess[i] === letter) {
                game.guessedWord = game.guessedWord.slice(0, i) + letter + game.guessedWord.slice(i + 1);
            }
        }

        if (hasPlayerWon()) {
            wins++;
            updateScoreboard();
            alert("Congratulations! You won! The word is: " + game.wordToGuess);
            resetGame();
        }
    }

    updateGameDisplay();
}