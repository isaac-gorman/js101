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

function boardIsFull(gameBoard) {
  return getEmptySquares(gameBoard).length === 0;
}

function someoneWon(gameBoard) {
  return false;
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
