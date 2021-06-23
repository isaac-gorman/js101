const READ_LINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];
const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};
prompt(WINNING_COMBOS.rock);

let gameScore = {
  userScore: 0,
  computerScore: 0,
  rounds: 0,
};

function prompt(message) {
  console.log(`➡️  ${message}`);
}

function resetGameScore() {
  gameScore.userScore = 0;
  gameScore.computerScore = 0;
  gameScore.rounds = 0;
}

function scoreRound(winner) {
  if (winner === "computer") {
    gameScore.computerScore += 1;
    gameScore.rounds += 1;
    prompt(`computer score ${gameScore.computerScore}`);
  } else if (winner === "user") {
    gameScore.userScore += 1;
    gameScore.rounds += 1;
    prompt(`user score ${gameScore.userScore}`);
  }
}

function playBest3OutOf5() {
  while (gameScore.userScore < 3 && gameScore.computerScore < 3) {
    prompt(`\n \nRound ${gameScore.rounds} for best 3 out of 5`);
    prompt(
      `\n Your Score: ${gameScore.userScore} \n Computers Score: ${gameScore.computerScore}`
    );

    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    let winner = displayWinner(userChoice, computerChoice);

    scoreRound(winner);
    console.clear();
  }

  if (gameScore.userScore > gameScore.computerScore) {
    prompt("You won!");
  } else {
    prompt("Computer won!");
  }
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

function computerWins(userChoice, computerChoice) {
  return WINNING_COMBOS[computerChoice].includes(userChoice);
}

function displayWinner(userChoice, computerChoice) {
  let computerWinsMessage = `Computer scored a point! \n${computerChoice} beats ${userChoice}`;
  let userWinsMessage = `You scored a point! \n${userChoice} beats ${computerChoice}`;

  if (computerWins(userChoice, computerChoice)) {
    prompt(computerWinsMessage);
    return "computer";
  } else if (computerChoice === userChoice) {
    prompt("Tie!");
    return "tie";
  }

  prompt(userWinsMessage);
  return "user";
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
    playBest3OutOf5();

    let doesUserWantToPlayAgain = askToPlayAgain();

    if (doesUserWantToPlayAgain[0] === "y") {
      resetGameScore();
    } else {
      prompt("Thank you for playing! \n Till next time!");
      break;
    }
  }
}
playRockPaperScissors();
