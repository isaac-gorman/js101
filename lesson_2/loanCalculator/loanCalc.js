/* eslint-disable max-lines-per-function */
const READ_LINE = require("readline-sync");

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

  BASIC LOGIC (NOT DYNAMIC)
   Get all three inputs from the user:
    1. loanAmount
    2. annualPercentageRate (as a decimal 6% = 0.06)
    3. loanDuration in years

    Confirm that each input is acceptable.
    Convert acceptable inputs to correct data type. loanAmount,
    and loanDuration to number, and annualPercentageRate
    to a floating point number.

    Create function called getMonthlyPayment:
      Pass getMonthlyPayment(loanAmount, annualPercentageRate, loanDuration)
      Assign variables:
      - const MONTHS_IN_YEAR tp 12
      - monthlyRate to annualPercentageRate / MONTHS_IN_YEAR
      - numberOfPayments to loanDuration * MONTHS_IN_YEAR
      - monthlyPayments to the formula:
        loanAmount *
        (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments)))

      Return monthlyPayments

  */
}

// Define what each variable will contain;
let again = true; // boolean value to allow user to continue with additional calculations
let loanAmount; // the requested loan amount
let annualPercentageRate; // the annual percentage rate in decimal format
let loanDuration; // the duration in years
// Boolean values to validate each input in a guard clause
let isValidLoanAmount;
let isValidPercentageRate;
let isValidLoanDuration;
let isValidAnotherCalculationAnswer;

function getMonthlyPayment(loanAmount, annualPercentageRate, loanDuration) {
  let monthlyRate = annualPercentageRate / 12;

  let numberOfPayments = loanDuration * 12;

  let monthlyPayment =
    loanAmount *
    (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments)));

  return (
    "\n" +
    "\n 🤖" +
    "\n🧾💸 You will pay 💲" +
    monthlyPayment.toFixed(2) +
    " for " +
    numberOfPayments +
    " months 📆." +
    `\n📈 For a total of $${monthlyPayment.toFixed(2) * numberOfPayments}.`
  );
}

function checkIfValidInput(userInput) {
  if (
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
    console.log(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ❌‼️ Is Not Valid a Input❌‼️`);
    return false;
  }
}

function checkIfValidDecimalInput(userInput) {
  if (
    userInput[0] === "0" &&
    userInput[1] === "." &&
    !Number.isNaN(Number(userInput[2]))
  ) {
    return true;
  } else {
    console.log(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ❌‼️ Is Not Valid a Input❌‼️`);
    return false;
  }
}

function checkAnotherCalculation(userInput) {
  // input has to be either "1" or "2" nothing else
  if (userInput === "1" || userInput === "2") {
    return true;
  } else {
    console.log(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ❌‼️ Is Not Valid a Input❌‼️`);
    return false;
  }
}

while (again === true) {
  console.log("💰Welcome to the loan calculator!💰");
  isValidLoanAmount = false;
  isValidPercentageRate = false;
  isValidLoanDuration = false;
  isValidAnotherCalculationAnswer = false;

  while (isValidLoanAmount === false) {
    loanAmount = READ_LINE.question(
      "\n" +
        "\n💬Please enter the loan amount.\nExample inputs are whole numbers greater than 0 such as: \n- 1000 for $1000 \n- 200 for $200" +
        "\n➡️  "
    ).trim();

    if (checkIfValidInput(loanAmount) === true) {
      loanAmount = Number(loanAmount);
      isValidLoanAmount = true;
      console.log("\t✅Valid Input✅");
    }
  }
  while (isValidPercentageRate === false) {
    annualPercentageRate = READ_LINE.question(
      "\n" +
        "\n💬 Please enter the Annual Percentage Rate (APR).\nExample inputs are decimal numbers such as: \n- 0.06 for 6% \n- 0.12 for 12%" +
        "\n➡️  "
    ).trim();

    if (
      checkIfValidInput(annualPercentageRate) === true &&
      checkIfValidDecimalInput(annualPercentageRate) === true
    ) {
      annualPercentageRate = Number(annualPercentageRate);
      isValidPercentageRate = true;
      console.log("\t✅Valid Input✅");
    }
  }
  while (isValidLoanDuration === false) {
    loanDuration = READ_LINE.question(
      "\n" +
        "\n💬 Please enter the Loan Duration in years.\nExample inputs are whole numbers such as: \n- 10 for 10 years \n- 5 for 5 years" +
        "\n➡️  "
    ).trim();

    if (checkIfValidInput(loanDuration) === true) {
      loanDuration = Number(loanDuration);
      isValidLoanDuration = true;
      console.log("\t✅Valid Input✅");
    }
  }

  console.log(
    getMonthlyPayment(loanAmount, annualPercentageRate, loanDuration)
  );

  while (isValidAnotherCalculationAnswer === false) {
    let anotherCalculation = READ_LINE.question(
      "\n" +
        "\n💬 Would you like to make another loan calculation? " +
        "\nEnter: " +
        "\n- 1 for Yes" +
        "\n- 2 for No" +
        "\n➡️  "
    );
    if (checkAnotherCalculation(anotherCalculation) === true) {
      isValidAnotherCalculationAnswer = true;
      if (anotherCalculation === "2") {
        again = false;
        console.log(
          "\n🙋‍♀️ Thank you for using the loan calculator. Till next time :)!"
        );
      }
    }
  }
}
