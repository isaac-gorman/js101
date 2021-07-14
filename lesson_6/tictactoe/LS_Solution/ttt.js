const READ_LINE = require("readline-sync");
const MESSAGES = require("./messages.json");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

const WINNING_LINES = [
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

let prompt = (message) => console.log(message);

function joinOr(array) {
  let string = "";
  array.forEach((element, index) => {
    index < array.length - 1
      ? (string += `${array[index]}, `)
      : (string += `or ${array[index]}`);
  });

  return string;
}

function display(board) {
  //   console.clear();

  prompt(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
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

function getEmptySquares(gameBoard) {
  return Object.keys(gameBoard).filter((key) => {
    return gameBoard[key] === INITIAL_MARKER;
  });
}

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

function findAtRiskSquare(gameBoard) {
  let counterMove = undefined;

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let markersInLine = WINNING_LINES[line].map(
      (squareNum) => gameBoard[squareNum]
    );
    let atRiskLine = markersInLine.filter((marks) => marks === "X");

    if (atRiskLine.length === 2) {
      console.log("WINNING_LINES[line]: ", WINNING_LINES[line]);
      WINNING_LINES[line].filter((squareNum) => {
        if (gameBoard[squareNum] !== "X") {
          counterMove = squareNum;
        }
      });
    }
  }

  return counterMove;
}

function computerChoosesSquare(gameBoard) {
  // if no at risk the just pick at random
  let counterMove = findAtRiskSquare(gameBoard);
  console.log(counterMove); // => undefined || #

  if (counterMove !== undefined) {
    return (gameBoard[counterMove] = COMPUTER_MARKER);
  }
  let emptySquares = getEmptySquares(gameBoard);
  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let squareSelection = emptySquares[randomIndex];
  gameBoard[squareSelection] = COMPUTER_MARKER;
}

function detectWinner(gameBoard) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    // findAtRiskSquare(WINNING_LINES[line], gameBoard);

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

function playTicTacToe() {
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
}
playTicTacToe();
