/*
    Process Problem
        Objects
          rock
          scissors
          paper
        Rules
          rock vs scissors = rock wins
          paper vs rock = paper wins
          scissors vs paper = scissors wins
          same object vs same object = tie

        Game Flow
          1. User picks an object
          2. Computer picks an object
          3. Winner is displayed or tie

    Examples

    Data Structure

    Algorithm

    Code
*/

const READ_LINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];
let playAgain = true;

function displayWinner(userChoice, computerChoice) {
  let computerWinsMessage = `Computer win's! \n${computerChoice} beats ${userChoice}`;
  let userWinsMessage = `You win! \n${userChoice} beats ${computerChoice}`;

  if (
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    prompt(computerWinsMessage);
  }

  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    prompt(userWinsMessage);
  }

  if (computerChoice === userChoice) prompt("Tie!");
}

function validateUserChoice(userChoice) {
  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice");
    userChoice = READ_LINE.question();
  }
}

function getComputerChoice() {
  let randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function validatePlayAgain(answer) {
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n" .');
    answer = READ_LINE.question().trim().toLowerCase();
  }
}

function prompt(message) {
  console.log(`➡️  ${message}`);
}

while (playAgain) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let userChoice = READ_LINE.question();
  validateUserChoice(userChoice);

  let computerChoice = getComputerChoice();

  prompt(`You chose 😊 ${userChoice}, 🤖 computer chose ${computerChoice}`);

  displayWinner(userChoice, computerChoice);

  prompt("Do you want to play again? (y/n): ");
  let answer = READ_LINE.question().trim().toLowerCase();
  validatePlayAgain(answer);

  if (answer[0] !== "y") playAgain = false; // or simply write a break; when while condition is set to (true)
}
