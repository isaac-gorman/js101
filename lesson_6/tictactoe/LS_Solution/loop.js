const {
  board,
  initializeBoard,
  display,
  INITIAL_MARKER,
} = require("./initBoard");

const { playerChoosesSquare, computerChoosesSquare } = require("./turns");

let board = initializeBoard();
display(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  display(board);

  // break if a condition is meet
}
