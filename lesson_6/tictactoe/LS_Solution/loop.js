const READ_LINE = require("readline-sync");
const { prompt } = require("./utils");
const {
  board,
  initializeBoard,
  display,
  INITIAL_MARKER,
  COMPUTER_MARKER,
  HUMAN_MARKER,
} = require("./initBoard");

const {
  playerChoosesSquare,
  computerChoosesSquare,
  getEmptySquares,
} = require("./turns");

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

  let result;
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      gameBoard[sq1] === HUMAN_MARKER &&
      gameBoard[sq2] === HUMAN_MARKER &&
      gameBoard[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      gameBoard[sq1] === COMPUTER_MARKER &&
      gameBoard[sq2] === COMPUTER_MARKER &&
      gameBoard[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

function boardIsFull(gameBoard) {
  return getEmptySquares(gameBoard).length === 0;
}

function someoneWon(gameBoard) {
  return !!detectWinner(gameBoard);
}

while (true) {
  let board = initializeBoard();

  while (true) {
    display(board);

    playerChoosesSquare(board);
    display(board);
    // if (someoneWon(board) || boardIsFull(board)) break;

    computerChoosesSquare(board);

    display(board);
    if (someoneWon(board) || boardIsFull(board)) break;
  }
  display(board);
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt("\n Would you like to play again (y or n)");
  let answer = READ_LINE.question().trim();
  if (answer !== "y") {
    break;
  }
}
``;
console.clear();
prompt("Thank you for playing");
