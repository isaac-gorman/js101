const READ_LINE = require('readline-sync');

let displayBoard = (board) => console.table(board);
let initializeBoard = () => {
  let gameBoard = [];
  gameBoard[0] = [' ', ' ', ' '];
  gameBoard[1] = [' ', ' ', ' '];
  gameBoard[2] = [' ', ' ', ' '];

  return gameBoard;
};

let choiceBoard = () => {
  let choiceBoard = [];
  choiceBoard[0] = ['R1-C1', 'R1-C2', 'R1-C3'];
  choiceBoard[1] = ['R2-C1', 'R2-C2', 'R2-C3'];
  choiceBoard[2] = ['R3-C1', 'R3-C2', 'R3-C3'];

  return choiceBoard;
};

let board = initializeBoard();
let optionsBoard = choiceBoard();

displayBoard(board);
console.log(board[1][1]);

console.log(
  `\n Please make your move enter the R#-C# for the square you would like to mark:`
);

let playerChoice = READ_LINE.question(displayBoard(optionsBoard));
switch (playerChoice) {
  // cases for first-row
  case 'R1-C1':
    board[0][0] = 'X';
    optionsBoard[0][0] = 'X';
    break;
  case 'R1-C2':
    board[0][1] = 'X';
    optionsBoard[0][1] = 'X';
    break;
  case 'R1-C3':
    board[0][2] = 'X';
    optionsBoard[0][2] = 'X';
    break;

  // cases for second-row
  case 'R2-C1':
    board[1][0] = 'X';
    optionsBoard[1][0] = 'X';
    break;
  case 'R2-C2':
    board[1][1] = 'X';
    optionsBoard[1][1] = 'X';
    break;
  case 'R2-C3':
    board[1][2] = 'X';
    optionsBoard[1][2] = 'X';
    break;

  // cases for third-row
  case 'R3-C1':
    board[2][0] = 'X';
    optionsBoard[2][0] = 'X';
    break;
  case 'R3-C2':
    board[2][1] = 'X';
    optionsBoard[2][1] = 'X';
    break;
  case 'R3-C3':
    board[2][2] = 'X';
    optionsBoard[2][2] = 'X';
    break;

  default:
}
displayBoard(board);

// based on the current available boxes the computer will pick at random a choice
// - choice can be based on random numbers within the range of the current choices within the board.

let computerChoice = () => {
    console.log(optionsBoard);
  let randomRange = optionsBoard.((subArray) => {
    let noXs = subArray.filter((element) => element !== 'X');
    return noXs;
  });
  return randomRange;
};

computerChoice();
