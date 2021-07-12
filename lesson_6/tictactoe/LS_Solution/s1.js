function displayBoard(board) {
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
    initialBoard[String(square)] = " ";
  }

  return initialBoard;
}

let board = initializeBoard();
displayBoard(board);
// board =
/*
  board = {
    '1': ' ',
    '2': ' ',
    '3': ' ',
    '4': ' ',
    '5': ' ',
    '6': ' ',
    '7': ' ',
    '8': ' ',
    '9': ' '
  }
*/

module.exports = {
  displayBoard,
  initializeBoard,
  board,
};
