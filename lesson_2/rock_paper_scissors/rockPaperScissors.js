const READ_LINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];

// console.log function ----------------------
function prompt(message) {
  console.log(`➡️  ${message}`);
} // -----------------------------------------

// Play the best of 5 rounds -----------------
function playBest3OutOf5() {
  let rounds = 0;
  let userScore = 0;
  let computerScore = 0;

  while (userScore < 3 && computerScore < 3) {
    prompt(`\n \nRound ${rounds} for best 3 out of 5`);
    prompt(`\n Your Score: ${userScore} \n Computers Score: ${computerScore}`);

    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    let winner;

    prompt(`You chose 😊 ${userChoice}, 🤖 computer chose ${computerChoice}`);
    winner = displayWinner(userChoice, computerChoice);

    if (winner === 0) {
      computerScore += 1;
      rounds += 1;
      prompt(`computer score ${computerScore}`);
    } else if (winner === 1) {
      userScore += 1;
      rounds += 1;
      prompt(`user score ${userScore}`);
    }
  }

  if (userScore > computerScore) {
    prompt("You won!");
  } else {
    prompt("Computer won!");
  }
} // -----------------------------------------

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

function computerWins(userChoice, computerChoice) {
  return (
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
  );
}

// Displaying the Winner ---------------------
function displayWinner(userChoice, computerChoice) {
  let computerWinsMessage = `Computer scored a point! \n${computerChoice} beats ${userChoice}`;
  let userWinsMessage = `You scored a point! \n${userChoice} beats ${computerChoice}`;

  if (computerWins(userChoice, computerChoice)) {
    prompt(computerWinsMessage);
    return 0;
  } else if (computerChoice === userChoice) {
    prompt("Tie!");
    return 2;
  }

  prompt(userWinsMessage);
  return 1;
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
    playBest3OutOf5();

    let doesUserWantToPlayAgain = askToPlayAgain();

    if (doesUserWantToPlayAgain[0] !== "y") break;
  }
} // -----------------------------------------
playRockPaperScissors();
