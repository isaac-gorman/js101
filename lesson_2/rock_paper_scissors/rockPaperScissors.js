const READ_LINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`➡️  ${message}`);
}

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
}

function getComputerChoice() {
  let randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
}

function displayWinner(userChoice, computerChoice) {
  // Custom Winning Messages
  let computerWinsMessage = `Computer win's! \n${computerChoice} beats ${userChoice}`;
  let userWinsMessage = `You win! \n${userChoice} beats ${computerChoice}`;

  // Computer Winning Scenarios
  if (
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    prompt(computerWinsMessage);
  }

  // User Winning Scenarios
  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    prompt(userWinsMessage);
  }

  // Tie Game
  if (computerChoice === userChoice) prompt("Tie!");
}

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
}

function playRockPaperScissors() {
  while (true) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    prompt(`You chose 😊 ${userChoice}, 🤖 computer chose ${computerChoice}`);

    displayWinner(userChoice, computerChoice);

    let doesUserWantToPlayAgain = askToPlayAgain();

    if (doesUserWantToPlayAgain[0] !== "y") break;
  }
}

playRockPaperScissors();
