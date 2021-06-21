const READ_LINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];
const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

let gameScore = {
  userScore: 0,
  computerScore: 0,
  rounds: 0,
};

// console.log function ----------------------
function prompt(message) {
  console.log(`➡️  ${message}`);
} // -----------------------------------------

// Resetting the game scores to 0 ------------
function resetGameScore() {
  gameScore.userScore = 0;
  gameScore.computerScore = 0;
  gameScore.rounds = 0;
} // -----------------------------------------

// Scoring the winner of each round ----------
function scoreRound(winner) {
  if (winner === 0) {
    gameScore.computerScore += 1;
    gameScore.rounds += 1;
    prompt(`computer score ${gameScore.computerScore}`);
  } else if (winner === 1) {
    gameScore.userScore += 1;
    gameScore.rounds += 1;
    prompt(`user score ${gameScore.userScore}`);
  }
} // -----------------------------------------

// Play the best of 5 rounds -----------------
function playBest3OutOf5() {
  while (gameScore.userScore < 3 && gameScore.computerScore < 3) {
    prompt(`\n \nRound ${gameScore.rounds} for best 3 out of 5`);
    prompt(
      `\n Your Score: ${gameScore.userScore} \n Computers Score: ${gameScore.computerScore}`
    );

    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    prompt(`You chose 😊 ${userChoice}, 🤖 computer chose ${computerChoice}`);
    let winner = displayWinner(userChoice, computerChoice);

    scoreRound(winner);
  }

  if (gameScore.userScore > gameScore.computerScore) {
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

// Evaluating if the computer won ------------
function computerWins(userChoice, computerChoice) {
  return WINNING_COMBOS[computerChoice].includes(userChoice);
} // ------------------------------------------

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

    if (doesUserWantToPlayAgain[0] === "y") {
      resetGameScore();
    } else {
      prompt("Thank you for playing! \n Till next time!");
      break;
    }
  }
} // -----------------------------------------
playRockPaperScissors();
