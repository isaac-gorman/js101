const INITIAL_MARKER = " ";

function display(board) {
  console.clear();

  console.log("");
  console.log("     |     |");
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  // empty object
  let initialBoard = {};

  // use a for loop to construct each level of the board
  for (let square = 1; square <= 9; square++) {
    initialBoard[String(square)] = INITIAL_MARKER;
  }

  return initialBoard;
}

let board = initializeBoard();
// displayBoard(board);

module.exports = {
  display,
  initializeBoard,
  board,
  INITIAL_MARKER,
};
