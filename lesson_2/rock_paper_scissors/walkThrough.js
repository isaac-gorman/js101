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

function prompt(message) {
  console.log(`➡️  ${message}`);
}

// Asking the user to chose an object either: rock, paper or scissors:

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let userChoice = READ_LINE.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice");
    userChoice = READ_LINE.question();
  }

  let randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose 😊 ${userChoice}, 🤖 computer chose ${computerChoice}`);

  // Winning Prompt Messages
  let computerWinsMessage = `Computer win's! \n${computerChoice} beats ${userChoice}`;
  let userWinsMessage = `You win's! \n${computerChoice} beats ${userChoice}`;

  // Conditional Logic for Computer Winning
  if (
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    prompt(computerWinsMessage);
  }

  // Conditional Logic for User Winning
  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    prompt(userWinsMessage);
  }

  // Conditional Logic for Tie Game!
  if (computerChoice === userChoice) {
    prompt("Tie!");
  }

  prompt("Do you want to play again? (y/n): ");
  let answer = READ_LINE.question().trim().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n" .');
    answer = READ_LINE.question().trim().toLowerCase();
  }

  if (answer[0] !== "y") break;
}
