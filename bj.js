// Declare and initialize variables
let selectedNumber = 0;
let sum = 0;
let rndsum = 0;
let usersum = 0;
let gameEnded = false;
// Function to add user input and random number to the sum
function add(userInput, sum, randNum) {
  sum = sum + userInput + randNum;
  console.log(sum);
  return sum;
}

function setNumberButtonsState(enabled){
  document.querrySelectorAll(`.numberbutton`).forEach(button => {
    button.disabled = !enabled;
  })
}


// Event listeners for number buttons
document.querySelectorAll('.numberbutton').forEach(button => {
  button.addEventListener('click', function () {
    if(!gameEnded){
      // Update selected number and display it
      selectedNumber = parseInt(this.dataset.value);
      document.getElementById('result').style.whiteSpace = 'pre-line';
      document.getElementById('result').textContent = `You have selected: ${selectedNumber} `;
    
      // Generate a random number
      const randNum = Math.round(Math.random() * 5) + 1;
      console.log(randNum);
    
      // Update game variables and check game status
      sum = add(selectedNumber, sum, randNum);
      usersum = usersum + selectedNumber;
      rndsum = rndsum + randNum;
      document.getElementById('result').textContent += `\nThe current running total is: ${rndsum}`;
   
      if (sum === 21) {
        document.getElementById('result').textContent += `\nEnd of the Game!\n\nCongratulations! You won!`;      
      } else if (sum > 21) {
        document.getElementById('result').textContent += `\nEnd of the Game!\n\nSorry, you lost the game :(. Better luck next time!`;
      } else {
        document.getElementById('result').textContent += '\nYou are still under 21. Keep Playing!';
      }

      if (sum === 21 || sum > 21) {
        // Display the final scores and reset the game
          document.getElementById('result').textContent += `\nThe Game Total is:  ${sum}`
          document.getElementById('result').textContent += `\nYour Final Score is:  ${usersum}`
          document.getElementById('result').textContent += `\nDealer's Final Score is:  ${rndsum}`
          document.getElementById('replayButton').style.display = 'block';
          sum = 0;
          rndsum = 0;
          usersum = 0;
          gameEnded = true;
          setNumberButtonsState(false);
      }
    
    }
  });
});

// Event listener for replay button
document.getElementById('replayButton').addEventListener('click', function () {
  // Reset the game and clear the result
  document.getElementById('result').textContent = '';
  selectedNumber = 0;
  sum = 0;
  document.getElementById('replayButton').style.display = 'none';
  gameEnded =false;
  setNumberButtonsState(true);
});
