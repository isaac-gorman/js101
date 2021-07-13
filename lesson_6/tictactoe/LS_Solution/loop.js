const {
  board,
  initializeBoard,
  display,
  INITIAL_MARKER,
} = require("./initBoard");

const {
  playerChoosesSquare,
  computerChoosesSquare,
  getEmptySquares,
} = require("./turns");

display(board);

function detectWinner(gameBoard) {
  let winningLines = [
    // rows
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // columns
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // diagonals
    [1, 5, 9],
    [3, 5, 7],
  ];
}

function boardIsFull(gameBoard) {
  return getEmptySquares(gameBoard).length === 0;
}

function someoneWon(gameBoard) {
  return !!detectWinner(gameBoard);
}

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  display(board);

  // break if a condition is meet
  // - if we have winner
  // - if the board is full (no empty squares)
  // someoneWon(board) ||

  if (someoneWon(board) || boardIsFull(board)) break;
}

if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`);
} else {
  prompt("It's a tie!");
}
