const READ_LINE = require("readline-sync");

/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
// Informal Pseudo Code
{
  /*
  INPUTS & OUTPUTS
    Inputs:
    - loan amount
    - annual percentage rate (APR)
    - loan duration

    Outputs:
    - monthly interest rate
    - loan duration in months

  LOGIC
   Get all three inputs from the user:
    1. loanAmount
    2. annualPercentageRate (as a decimal 6% = 0.06)
    3. loanDuration in years

    Confirm that each input is acceptable.
    Convert acceptable inputs to correct data type. loanAmount, and loanDuration to number, and annualPercentageRate to a floating point number.

    Create function called getMonthlyPayment:
      Pass getMonthlyPayment(loanAmount, annualPercentageRate, loanDuration)
      Assign variables:
      - const MONTHS_IN_YEAR tp 12
      - monthlyRate to annualPercentageRate / MONTHS_IN_YEAR
      - numberOfPayments to loanDuration * MONTHS_IN_YEAR
      - monthlyPayments to the formula:
        loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments)))

      Return monthlyPayments

  */
}
let isValidLoanAmount = false;
let isValidPercentageRate = false;
let isValidLoanDuration = false;

let loanAmount;
let annualPercentageRate;

function checkIfValidInput(userInput) {
  if (
    !Number.isNaN(Number(userInput)) &&
    userInput.length !== 0 &&
    userInput[0] !== "+" &&
    userInput[0] !== "-" &&
    userInput[0] !== "*" &&
    userInput[0] !== "/" &&
    userInput[0] !== "%"
  ) {
    return true;
  } else {
    console.log("is not Valid Input!");
    return false;
  }
}

function checkIfValidDecimalInput(userInput) {
  if (userInput[0] === "0" && userInput[1] === ".") {
    return true;
  } else {
    console.log("is not Valid Decimal Input!");
    return false;
  }
}
while (isValidLoanAmount === false) {
  loanAmount = READ_LINE.question(
    "Please enter the loan amount.\nExample inputs are 1000 for $1000, 200 for $200: "
  ).trim();

  if (checkIfValidInput(loanAmount) === true) {
    // loanAmount = Number(loanAmount);
    isValidLoanAmount = true;
    console.log("valid input");
  }
}
while (isValidPercentageRate === false) {
  annualPercentageRate = READ_LINE.question(
    "Please enter the Annual Percentage Rate (APR).\nExample inputs are 0.06 for 6%, and 0.12 for 12%: "
  ).trim();

  if (
    checkIfValidInput(annualPercentageRate) === true &&
    checkIfValidDecimalInput(annualPercentageRate) === true
  ) {
    // annualPercentageRate = Number(annualPercentageRate);
    isValidPercentageRate = true;
    console.log("valid input");
  }
}

console.log("typeof loanAmount: ", typeof loanAmount);
console.log("typeof annualPercentageRate: ", typeof annualPercentageRate);

function getMonthlyPayment(loanAmount, annualPercentageRate, loanDuration) {
  let monthlyRate = annualPercentageRate / 12;

  let numberOfPayments = loanDuration * 12;

  let monthlyPayment =
    loanAmount *
    (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments)));

  return (
    "You will pay $" +
    monthlyPayment.toFixed(2) +
    " for " +
    numberOfPayments +
    " months." +
    `\nFor a total of $${monthlyPayment.toFixed(2) * numberOfPayments}.`
  );
}

// console.log(getMonthlyPayment(1000, 0.06, 10)); // -> $11.00 for 120 months
