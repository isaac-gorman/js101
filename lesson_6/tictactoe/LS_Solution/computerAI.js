const { prompt, joinOr } = require("./utils");
const {
  board,
  display,
  initializeBoard,
  INITIAL_MARKER,
  COMPUTER_MARKER,
  HUMAN_MARKER,
} = require("./initBoard");

const {
  playerChoosesSquare,
  //   computerChoosesSquare,
  getEmptySquares,
} = require("./turns");

function checkMoves(gameBoard) {
  let potentialWins = [
    // rows 1
    [1, 2, [3]],
    [1, 3, [2]],
    [2, 3, [1]],
    // rows 2
    [4, 5, [6]],
    [4, 6, [5]],
    [5, 6, [4]],
    // rows 3
    [7, 8, [9]],
    [7, 9, [8]],
    [8, 9, [7]],

    // column 1
    [1, 4, [7]],
    [1, 7, [4]],
    [4, 7, [1]],
    // column 2
    [2, 8, [5]],
    [2, 5, [8]],
    [5, 8, [2]],
    // column 3
    [3, 9, [6]],
    [3, 6, [9]],
    [6, 9, [3]],

    // diagonal 1
    [1, 5, [9]],
    [1, 9, [5]],
    [5, 9, [1]],

    // diagonal 2
    [3, 7, [5]],
    [3, 5, [7]],
    [5, 7, [3]],
  ];

  for (let line = 0; line < potentialWins.length; line++) {
    let [sq1, sq2] = potentialWins[line];

    if (gameBoard[sq1] === HUMAN_MARKER && gameBoard[sq2] === HUMAN_MARKER) {
      console.log("true");
      return { result: true, counterMove: potentialWins[2][0] };
    } else {
      console.log("false");
      return { result: false };
    }
  }
}

function computerChoosesSquare(gameBoard) {
  let checkObject = checkMoves(gameBoard);
  if (checkObject.result === true) {
    gameBoard[checkObject.counterMove] = COMPUTER_MARKER;
  } else {
    let emptySquares = getEmptySquares(gameBoard);
    let randomIndex = Math.floor(Math.random() * emptySquares.length);

    let squareSelection = emptySquares[randomIndex];
    gameBoard[squareSelection] = COMPUTER_MARKER;
  }
}

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

return;
function aiComputerChoice(gameBoard) {
  // study the board
  // - check for possible winning moves form the human player
  // make the decision
  // implement decision
}

// input:

/*
board object{}
*/

// process:
/*
  - Check wether the human player can make a winning move 
  - If there is a potential 3 in a row move then:
  - - Select the square in place of where the human player could win
  - - else just pick at random
*/

// output:
// - attempts to block the human user from winning but blocking any 3 in a row play's
