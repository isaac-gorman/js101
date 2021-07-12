// Step 2) Player and computer turn
/*

    Q: What have we done so far? 
    - A: Thus far we have implemented the game board. The game board is represented 
         by an object data structure and is implemented by a function called displayBoard that displays the board on the console or terminal. 

    Q: What do i need to do next? 
    - A: We need to implement the next two steps in our flowchart: 
         1) Ask the user to mark a square (make a move).
         2) Have the computer mark a square. 

*/

// Players Turn
/*
    Q: What would be the ideal implementation of having the player take a turn, why? 
    - A: Ideally we would want to use a function to request the player to take a turn.
    
*/

// 1) write a function called `playerChoosesSquare`. Think about what arguments it needs to take as input. We need to pass as the input the board object, since we need to mutate it after the player has made a move (selected a square).

const { board, display } = require("./s1");
const { prompt } = require("./utils");
const READ_LINE = require("readline-sync");

display(board);

function isValid(gameBoard) {
  return "";
}

function playerChoosesSquare(gameBoard) {
  prompt("Your move. Please make a selection (1-9)");
  let playerSelection = READ_LINE.question();

  let isValidInput = isValid(playerSelection);
  //   if (isValidInput) {
  //     gameBoard[playerSelection] = "X";
  //   } else {

  //   }
}
playerChoosesSquare(board);

display(board);

// 2) Next I need to prompt the user to make a square selection, and read that input.
