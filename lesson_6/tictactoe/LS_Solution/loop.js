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

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  display(board);

  // break if a condition is meet
  // - if we have winner
  // - if the board is full (no empty squares)
  // someoneWon(board) ||

  if (boardIsFull(board)) break;
}
