const READ_LINE = require("readline-sync");

// Step 2 - Player and Computer turn:

let displayBoard = (board) => console.table(board);

let initializeBoard = () => {
  let gameBoard = [];
  gameBoard["row_one"] = [[], [], []];
  gameBoard["row_two"] = [[], [], []];
  gameBoard["row_three"] = [[], [], []];

  return gameBoard;
};

let choiceBoard = () => {
  let choiceBoard = [];
  choiceBoard["row_one"] = [["R1-C1"], ["R1-C2"], ["R1-C3"]];
  choiceBoard["row_two"] = [["R2-C1"], ["R2-C2"], ["R2-C3"]];
  choiceBoard["row_three"] = [["R3-C1"], ["R3-C2"], ["R3-C3"]];

  return choiceBoard;
};

let board = initializeBoard();
let optionsBoard = choiceBoard();

// Pseudo Code for User Selection
// - Display board
displayBoard(board);
// - Display the choice board that is linked to the actual board
console.log(
  `\n Please make your move enter the R#-C# for the square you would like to mark:`
);
let playerChoice = READ_LINE.question(displayBoard(optionsBoard));
// - Whenever a new mark is added by either play the choice is eliminated form the choice bar
