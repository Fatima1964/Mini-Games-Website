# Project Title
Quick Play Arcade

# Project Description
Quick Play Arcade is a collection of four mini variety classic games such as Rock Paper Scissors, Hangman, Tic Tac Toe and BlackJack created by 
a team of four students from Coding in Colors Course. Each game is designed using the technologies and tools learned in the course as a
start for their big dream of stepping into the world of Information Technology.

Rock,Paper,Scissor - A **thrilling** challenge with the computer. Who will win? The player or The Computer ? A rock beats scissors, scissors beats
paper by cutting it, and paper beats rock by covering it. Which one to choose? Decide!

Hangman - Word puzzle game to save the stick man from hanging. To test your **vocabulary and guessing skills**, this game is a perfect match. 

Tic Tac Toe - **Strategy!!!** Use your stratigies to win against the computer. 

BlackJack - Popular Card game based only on **Luck**. Set your goal to score 21 to beat the computer and take a Big Win!

# Technologies & Tools Used:
- HTML,CSS and Javascript 
- GitHub for Collaboration
- VS Code and Git Bash
- Paint
- Google Images
- Coding in Colors Youtube lectures
- www.w3schools.com 
- ChatGPT
- Youtube Tutorials(for the cube on nav bar and spinning game thumbnails)
- Google search
- Web browsers


# Collaborators:
Home Page and Contact Page By: Fatima Farhat 
The homepage has a unique layout with revolving cards and a cube which displays our Logo and the slogan, Just Have Fun!  The vidoes from youtube and the instructors detailed instructional videos were the main source of our learning.  ChatGPT helped with the placement of the logo in the header via an Iframe tag. The colors were chosen for their subtleness.  The team members also contributed to the final design of the Home Page and the Contact Page. There insights were the determining factor in our overall design.

RockPaperScissors Game By: Fatima Farhat
To play Rock Paper Scissors user chooses an icon and the game is played against the computer's
random choice which activates both playRound and computerPlay which leads to the displayRoundResult. After the 5 rounds a message is displayed accordingly. Finally the board is either cleared or the user exits the game with either button and the game ends on a restart function.

Hangman Game By: Sundas Khan
The Hangman Game is a classic word-guessing game designed with a user-friendly interface for players of all ages, with a special focus on making it accessible and enjoyable for seniors. 
How to Run and Play the Hangman Game
Game Rules:
   - The Hangman Game is a word-guessing game. Your goal is to guess a hidden word, one letter at a time.
Make a Guess:
   - You can guess letters by clicking on the alphabet buttons displayed on the screen.
Hints and Clues:
   - You have the option to use hints, reveal vowels, and get clues to help you along the way.
Scoring:
   - Your wins and losses are displayed, allowing you to track your progress.
 Play Again:
   - If you want to play another round, simply click the "Play Again" button to start a new game.
ChatGPT Reference:
The Hangman graphic in this project has been created with inspiration from ChatGPI. The dynamic rendering of Hangman body parts based on player's incorrect guesses is a creative application inspired by the capabilities of ChatGPT.

TicTacToe Game By: Fatimah Ahmad
The objective of this simple Tic Tac Toe game is to get your markers (X or O) to get in a line within the 3x3 grid provided. The markers are to be placed and the game checks for eight possible winning combinations (three horizontal, three vertical, and two diagonal).
I have provided an explanation for each of the following functions which make up this game:
Constants: This section defines constants, such as class names for X and O, winning combinations, and references to DOM elements used in the game.
startGame(): This function initializes the game, sets the initial state, and sets up event listeners for the cells which markers will be placed into.
handleClick(e): This handles the click event when a cell is selected, allowing the current player to place their mark (X or O), checks for wins, detects draws, and switches turns between players which is also indicated under the board/grid.
endGame(draw): This function displays a message when the game ends, indicating the winner or a draw. It takes a parameter (draw) to determine if the game ended in a draw.
isDraw(): This checks if the game has ended in a draw by examining all cells to see if they contain X or O marks- if it detencts no winning combination, there is no winner and the game ends in a draw.
placeMark(cell, currentClass): This function adds the current player's mark (X or O) to the cell which is clicked by the player.
swapTurns(): This prompts the current player's turn, switching between X and O and updating the player's turn display.
setBoardHoverClass(): This function updates the board's class to show whose turn it is, providing a visual indicator of the current player.
checkWin(currentClass): This checks for a win based on the winning combinations, making sure that a player has placed their marks in a pattern which matches any of the winning combinations.
chatGPT reference places- how to play container (CSS line 285 to line 287) and home icon/back arrow (CSS line 296 to 299).


BlackJack Game By: Suganthi Ramachandran
To run and understand the game: 
To begin the game, click a number button on the game board. This button click activates the javascript connected with the button through event listener. As you continue to click on the numbers, everytime you click a number the computer generates a number and adds it to your number total and the code checks whether the total is equal to 21 or not. If the total is under 21, the code let's you to select the number and keeps adding. When the total equals to 21,the code prevents you to selecting the numbers by disabling the buttons and declares you won the game. If the total is less than 21, 
the number buttons gets disabled and declares you lost the game. If you want to play the game again, press playAgain which resets the board for new game. 
chatGPT reference places- playAgain button show and hide command(JS line 55 and 73),pre-line command(JS line 29), device response concepts(CSS styles).
github collaboration - Every time a team member pushes, pulled and made sure links are connected and checked for functionality. 

Acknowledgments:
We thank our instructors for guiding us and answering our questions for the development of this project. We would also like to acknowledge our team effort as contributors and the team spirit we displayed throughout the project.


Coding In Colour Project-Mini Games Website Team Collaboration









