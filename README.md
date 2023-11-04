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

RockPaperScissors Game By: Fatima Farhat

Hangman Game By: Sundas Khan

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
We thank our instructors for guiding us and answering our questions for the development of this project. 


Coding In Colour Project-Mini Games Website Team Collaboration









