// Step 1: Set up and display the board

// Q: How have I set up this program so far, and why?

// - My Data Structure
// let gameBoard = [];
// gameBoard["row_one"] = [[], [], []];
// gameBoard["row_two"] = [[], [], []];
// gameBoard["row_three"] = [[], [], []];

// console.table(gameBoard);

// - Adding a marks
// gameBoard["row_one"][0] = "X";
// gameBoard["row_two"][1] = "X";
// gameBoard["row_three"][2] = "X";

// console.table(gameBoard);

// My Function:

let displayBoard = (board) => console.table(board);

let initializeBoard = () => {
  let gameBoard = [];
  gameBoard["row_one"] = [[], [], []];
  gameBoard["row_two"] = [[], [], []];
  gameBoard["row_three"] = [[], [], []];

  return gameBoard;
};

let board = initializeBoard();
displayBoard(board);

// Testing assignment of mark
// board["row_one"][1] = "X";
// displayBoard(board);
