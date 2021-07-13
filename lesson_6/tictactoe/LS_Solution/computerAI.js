const {
  board,
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

display(board);
playerChoosesSquare(board);
display(board);

function aiComputerChoice(gameBoard) {}

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
