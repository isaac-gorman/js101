const READ_LINE = require("readline-sync");
const MESSAGES = require("./loan_messages.json");

// console.log function ---------------------------------------
function prompt(message) {
  console.log(message);
}
// console.log function ---------------------------------------

// Validation -------------------------------------------------
function checkIfValidWholeNumber(userInput) {
  if (
    !userInput.includes(".") &&
    !Number.isNaN(Number(userInput)) &&
    userInput.length !== 0 &&
    Number(userInput) > 0 &&
    userInput[0] !== "+" &&
    userInput[0] !== "-" &&
    userInput[0] !== "*" &&
    userInput[0] !== "/" &&
    userInput[0] !== "%"
  ) {
    return true;
  } else {
    prompt(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ${MESSAGES.notValidInput}`);
    return false;
  }
}

function checkIfValidDecimalNumber(userInput) {
  if (
    userInput[0] === "0" &&
    userInput[1] === "." &&
    !Number.isNaN(Number(userInput[2])) &&
    !Number.isNaN(Number(userInput)) &&
    userInput.length !== 0 &&
    Number(userInput) > 0 &&
    userInput[0] !== "+" &&
    userInput[0] !== "-" &&
    userInput[0] !== "*" &&
    userInput[0] !== "/" &&
    userInput[0] !== "%"
  ) {
    return true;
  } else {
    prompt(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️ ${MESSAGES.notValidInput}`);
    return false;
  }
}

function checkYesOrNo(userInput) {
  // input has to be either "y" or "n" nothing else
  if (userInput[0] !== "y" && userInput[0] !== "n") {
    prompt(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ${MESSAGES.notValidInput}`);
    return false;
  } else {
    return true;
  }
}

function checkIfLoanIncludesAPR(apr) {
  if (apr === 0) {
    return false;
  } else {
    return true;
  }
}
// Validation -------------------------------------------------

// Requesting User Loan Input ---------------------------------
function getLoanAmount() {
  let isValidLoanAmount = false;
  let loanAmount;

  while (isValidLoanAmount === false) {
    loanAmount = READ_LINE.question(MESSAGES.loanAmountQuestion).trim();

    if (checkIfValidWholeNumber(loanAmount) === true) {
      loanAmount = Number(loanAmount);
      isValidLoanAmount = true;
      prompt(MESSAGES.validInput);
    }
  }

  return loanAmount;
}

function askForAPR() {
  let noAPR;
  while (true) {
    noAPR = READ_LINE.question(MESSAGES.noAPR_Question).trim().toLowerCase();
    if (checkYesOrNo(noAPR) === true) break;
  }
  return noAPR;
}

function getAnnualPercentageRate() {
  let annualPercentageRate;

  let noAPR = askForAPR();
  if (noAPR === "y") {
    annualPercentageRate = 0;
  } else {
    while (true) {
      annualPercentageRate = READ_LINE.question(
        MESSAGES.annualPercentageRate
      ).trim();

      if (checkIfValidDecimalNumber(annualPercentageRate) === true) {
        annualPercentageRate = Number(annualPercentageRate);
        prompt(MESSAGES.validInput);
        break;
      }
    }
  }
  return annualPercentageRate;
}

function getLoanDuration() {
  let isValidLoanDuration = false;
  let loanDuration;

  while (isValidLoanDuration === false) {
    loanDuration = READ_LINE.question(MESSAGES.loanDuration).trim();

    if (checkIfValidWholeNumber(loanDuration) === true) {
      loanDuration = Number(loanDuration);
      isValidLoanDuration = true;
      prompt(MESSAGES.validInput);
    }
  }

  return loanDuration;
}

function askToCalculateAgain() {
  let anotherCalculation;

  while (true) {
    anotherCalculation = READ_LINE.question(MESSAGES.anotherCalculation)
      .trim()
      .toLowerCase();

    if (checkYesOrNo(anotherCalculation) === true) break;
  }

  return anotherCalculation;
}
// Requesting User Loan Input ---------------------------------

// Operation On Loan ------------------------------------------
function decideHowToCalculateMonthlyPayment(
  loanAmount,
  annualPercentageRate,
  loanDuration
) {
  if (checkIfLoanIncludesAPR(annualPercentageRate) === true) {
    withAPRCalculateMonthlyPayment(
      loanAmount,
      annualPercentageRate,
      loanDuration
    );
  } else {
    withNoAPRCalculateMonthlyPayment(loanAmount, loanDuration);
  }
}

function withAPRCalculateMonthlyPayment(
  loanAmount,
  annualPercentageRate,
  loanDuration
) {
  const MONTHS_IN_YEAR = 12;
  let monthlyRate = annualPercentageRate / MONTHS_IN_YEAR;
  let numberOfPayments = loanDuration * MONTHS_IN_YEAR;
  let monthlyPayment =
    loanAmount *
    (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments)));

  prompt(`${MESSAGES.withAPR_MonthlyPayment} $${monthlyPayment.toFixed(2)}`);
}

function withNoAPRCalculateMonthlyPayment(loanAmount, loanDuration) {
  const MONTHS_IN_YEAR = 12;
  let numberOfPayments = loanDuration * MONTHS_IN_YEAR;
  let monthlyPayment = loanAmount / numberOfPayments;

  prompt(`${MESSAGES.zeroAPR_MonthlyPayment} $${monthlyPayment}`);
}
// Operation On Loan ------------------------------------------

// Main Function ----------------------------------------------
function getALoanEstimate() {
  while (true) {
    prompt(MESSAGES.welcome);

    let loanAmount = getLoanAmount();

    let annualPercentageRate = getAnnualPercentageRate();

    let loanDuration = getLoanDuration();

    decideHowToCalculateMonthlyPayment(
      loanAmount,
      annualPercentageRate,
      loanDuration
    );

    let doesUserWantToCalculateAgain = askToCalculateAgain();

    if (doesUserWantToCalculateAgain === "n") {
      prompt(MESSAGES.goodbye);
      break;
    }
  }
}
getALoanEstimate();
// Main Function ----------------------------------------------
