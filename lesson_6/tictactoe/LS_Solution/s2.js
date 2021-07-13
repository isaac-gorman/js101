const { board, display, INITIAL_MARKER } = require("./s1");
const { prompt } = require("./utils");
const READ_LINE = require("readline-sync");
const MESSAGES = require("./messages.json");
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

prompt(board);
display(board);

function playerChoosesSquare(gameBoard) {
  let squareNumber;

  let emptySquares = Object.keys(gameBoard).filter((key) => {
    return gameBoard[key] === INITIAL_MARKER;
  });

  let squareChoices = `${emptySquares.join(", ")}`;

  while (true) {
    prompt(`Your move. Please make a selection ${squareChoices}`);
    squareNumber = READ_LINE.question().trim();

    let isValid = emptySquares.includes(squareNumber);

    if (isValid) break;

    prompt(`${MESSAGES.invalid_move}`);
  }

  gameBoard[squareNumber] = HUMAN_MARKER;
}
playerChoosesSquare(board);

prompt(board);
display(board);

function computerChoosesSquare(gameBoard) {
  let emptySquares = Object.keys(gameBoard).filter((key) => {
    return gameBoard[key] === INITIAL_MARKER;
  });

  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let squareSelection = emptySquares[randomIndex];
  gameBoard[squareSelection] = COMPUTER_MARKER;
}
computerChoosesSquare(board);

prompt(board);
display(board);
