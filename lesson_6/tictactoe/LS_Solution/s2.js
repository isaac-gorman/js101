const { board, display, INITIAL_MARKER } = require("./s1");
const { prompt } = require("./utils");
const READ_LINE = require("readline-sync");
const MESSAGES = require("./messages.json");

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

  gameBoard[squareNumber] = "X";
}
playerChoosesSquare(board);

prompt(board);
display(board);
