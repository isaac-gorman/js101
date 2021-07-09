const READ_LINE = require('readline-sync');

let displayBoard = (board) => console.table(board);
let initializeBoard = () => {
  let gameBoard = [];
  gameBoard['row_one'] = [[], [], []];
  gameBoard['row_two'] = [[], [], []];
  gameBoard['row_three'] = [[], [], []];

  return gameBoard;
};

let choiceBoard = () => {
  let choiceBoard = [];
  choiceBoard['row_one'] = [['R1-C1'], ['R1-C2'], ['R1-C3']];
  choiceBoard['row_two'] = [['R2-C1'], ['R2-C2'], ['R2-C3']];
  choiceBoard['row_three'] = [['R3-C1'], ['R3-C2'], ['R3-C3']];

  return choiceBoard;
};

let board = initializeBoard();
let optionsBoard = choiceBoard();

displayBoard(board);
console.log(
  `\n Please make your move enter the R#-C# for the square you would like to mark:`
);

let playerChoice = READ_LINE.question(displayBoard(optionsBoard));
switch (playerChoice) {
  // cases for first-row
  case 'R1-C1':
    board['row_one'][0] = 'X';
    optionsBoard['row_one'][0] = 'X';
    break;
  case 'R1-C2':
    board['row_one'][1] = 'X';
    optionsBoard['row_one'][1] = 'X';
    break;
  case 'R1-C3':
    board['row_one'][2] = 'X';
    optionsBoard['row_one'][2] = 'X';
    break;

  // cases for second-row
  case 'R2-C1':
    board['row_two'][0] = 'X';
    optionsBoard['row_two'][0] = 'X';
    break;
  case 'R2-C2':
    board['row_two'][1] = 'X';
    optionsBoard['row_two'][1] = 'X';
    break;
  case 'R2-C3':
    board['row_two'][2] = 'X';
    optionsBoard['row_two'][2] = 'X';
    break;

  // cases for third-row
  case 'R3-C1':
    board['row_three'][0] = 'X';
    optionsBoard['row_three'][0] = 'X';
    break;
  case 'R3-C2':
    board['row_three'][1] = 'X';
    optionsBoard['row_three'][1] = 'X';
    break;
  case 'R3-C3':
    board['row_three'][2] = 'X';
    optionsBoard['row_three'][2] = 'X';
    break;

  default:
}
displayBoard(board);
