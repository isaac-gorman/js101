const {
  board,
  display,
  INITIAL_MARKER,
  COMPUTER_MARKER,
  HUMAN_MARKER,
} = require("./initBoard");
const { prompt, joinOr } = require("./utils");
const READ_LINE = require("readline-sync");
const MESSAGES = require("./messages.json");

let getEmptySquares = (gameBoard) => {
  return Object.keys(gameBoard).filter((key) => {
    return gameBoard[key] === INITIAL_MARKER;
  });
};

function playerChoosesSquare(gameBoard) {
  let squareNumber;

  let emptySquares = getEmptySquares(gameBoard);

  let squareChoices = `${joinOr(emptySquares)}`;

  while (true) {
    prompt(`Your move. Please make a selection ${squareChoices}`);
    squareNumber = READ_LINE.question().trim();

    let isValid = emptySquares.includes(squareNumber);

    if (isValid) break;

    prompt(`${MESSAGES.invalid_move}`);
  }

  gameBoard[squareNumber] = HUMAN_MARKER;
}

function computerChoosesSquare(gameBoard) {
  let emptySquares = getEmptySquares(gameBoard);
  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let squareSelection = emptySquares[randomIndex];
  gameBoard[squareSelection] = COMPUTER_MARKER;
}

module.exports = {
  playerChoosesSquare,
  computerChoosesSquare,
  getEmptySquares,
};
