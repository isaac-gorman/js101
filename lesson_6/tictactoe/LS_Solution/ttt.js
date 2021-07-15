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
  console.clear();

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

function humanChoosesSquare(gameBoard) {
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

function computerAI(gameBoard) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let markersInLine = WINNING_LINES[line].map(
      (squareNum) => gameBoard[squareNum]
    );

    let opportunityLine = markersInLine.filter(
      (marks) => marks === COMPUTER_MARKER
    );

    if (!markersInLine.includes(HUMAN_MARKER) && opportunityLine.length === 2) {
      let winningMove = WINNING_LINES[line].find(
        (squareNum) => gameBoard[squareNum] === INITIAL_MARKER
      );
      return winningMove;
    }

    let atRiskLine = markersInLine.filter((marks) => marks === HUMAN_MARKER);

    if (!markersInLine.includes(COMPUTER_MARKER) && atRiskLine.length === 2) {
      let defensiveMove = WINNING_LINES[line].find(
        (squareNum) => gameBoard[squareNum] === INITIAL_MARKER
      );
      return defensiveMove;
    } else if (
      line === WINNING_LINES.length - 1 &&
      gameBoard[5] === INITIAL_MARKER
    ) {
      return 5;
    } else if (line === WINNING_LINES.length - 1) {
      return undefined;
    }
  }
}

function computerChoosesSquare(gameBoard) {
  let move = computerAI(gameBoard);

  if (move !== undefined) {
    return (gameBoard[move] = COMPUTER_MARKER);
  }
  let emptySquares = getEmptySquares(gameBoard);
  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let squareSelection = emptySquares[randomIndex];
  gameBoard[squareSelection] = COMPUTER_MARKER;
}

function detectWinner(gameBoard) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      gameBoard[sq1] === HUMAN_MARKER &&
      gameBoard[sq2] === HUMAN_MARKER &&
      gameBoard[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    }

    if (
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

function computerFirst(gameBoard, currentPlayer) {
  while (true) {
    display(gameBoard);
    chooseSquare(gameBoard, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(gameBoard) || boardIsFull(gameBoard)) break;
  }
}

function humanFirst(gameBoard, currentPlayer) {
  while (true) {
    display(gameBoard);
    chooseSquare(gameBoard, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(gameBoard) || boardIsFull(gameBoard)) break;
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === "human") {
    return "computer";
  } else {
    return "human";
  }
}

function chooseSquare(gameBoard, currentPlayer) {
  if (currentPlayer === "human") {
    humanChoosesSquare(gameBoard);
  } else {
    computerChoosesSquare(gameBoard);
  }
}

function getValidAnswer() {
  let answer;
  while (true) {
    prompt("\n Would you like to play again (y or n)");
    answer = READ_LINE.question().trim();

    if (answer !== "y" && answer !== "n") {
      console.clear();
      prompt("You entered an invalid answer");
    } else {
      break;
    }
  }
  return answer;
}

function playTicTacToe() {
  while (true) {
    let board = initializeBoard();

    let firstMover = READ_LINE.question(
      "Who plays first? Computer or Human? \n(c or h): "
    );
    if (firstMover === "c") {
      computerFirst(board, "computer");
    } else {
      humanFirst(board, "human");
    }

    display(board);
    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    let answer = getValidAnswer();
    if (answer !== "y") {
      break;
    }
  }
  ``;
  console.clear();
  prompt("Thank you for playing");
}
playTicTacToe();
