/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const READ_LINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];

function prompt(message) {
  console.log(`➡️  ${message}`);
}
// Requesting User Choice --------------------
function getUserChoice() {
  // Request Input
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let userChoice = READ_LINE.question();

  // Validate Input
  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice");
    userChoice = READ_LINE.question();
  }
  return userChoice;
} // -----------------------------------------

// Randomly Assigning Computers Choice -------
function getComputerChoice() {
  let randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
} // -----------------------------------------

// Displaying the Winner ---------------------
function displayWinner(userChoice, computerChoice) {
  // Custom Winning Messages
  let computerWinsMessage = `Computer win's! \n${computerChoice} beats ${userChoice}`;
  let userWinsMessage = `You win! \n${userChoice} beats ${computerChoice}`;

  // Computer Winning Scenarios
  if (
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "paper" && userChoice === "spock") ||
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "rock" && userChoice === "lizard") ||
    (computerChoice === "scissors" && userChoice === "paper") ||
    (computerChoice === "scissors" && userChoice === "lizard") ||
    (computerChoice === "lizard" && userChoice === "spock") ||
    (computerChoice === "lizard" && userChoice === "paper") ||
    (computerChoice === "spock" && userChoice === "scissors") ||
    (computerChoice === "spock" && userChoice === "rock")
  ) {
    prompt(computerWinsMessage);
  }

  // User Winning Scenarios
  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "spock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "rock" && computerChoice === "lizard") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "lizard") ||
    (userChoice === "lizard" && computerChoice === "spock") ||
    (userChoice === "lizard" && computerChoice === "paper") ||
    (userChoice === "spock" && computerChoice === "scissors") ||
    (userChoice === "spock" && computerChoice === "rock")
  ) {
    prompt(userWinsMessage);
  }

  // Tie Game
  if (computerChoice === userChoice) prompt("Tie!");
} // -----------------------------------------

// Prompting User To Play Again --------------
function askToPlayAgain() {
  // Request User Input
  prompt("Do you want to play again? (y/n): ");
  let answer = READ_LINE.question().trim().toLowerCase();

  // Validate User Input
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n" .');
    answer = READ_LINE.question().trim().toLowerCase();
  }

  return answer;
} // -----------------------------------------

// Main Function -----------------------------
function playRockPaperScissors() {
  while (true) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    prompt(`You chose 😊 ${userChoice}, 🤖 computer chose ${computerChoice}`);

    displayWinner(userChoice, computerChoice);

    let doesUserWantToPlayAgain = askToPlayAgain();

    if (doesUserWantToPlayAgain[0] !== "y") break;
  }
} // -----------------------------------------
playRockPaperScissors();
