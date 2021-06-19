/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const READ_LINE = require("readline-sync");

let again = true;
let annualPercentageRate;
let loanDuration;
let isValidLoanAmount;
let isValidPercentageRate;
let isValidLoanDuration;
let isValidAnotherCalculationAnswer;

function prompt(message) {
  console.log(message);
}

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
    `\n📈 For a total of 💲${(monthlyPayment * numberOfPayments).toFixed(2)}.`
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
    prompt(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ❌‼️ Is Not Valid a Input❌‼️`);
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
    prompt(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ❌‼️ Is Not Valid a Input❌‼️`);
    return false;
  }
}

function checkAnotherCalculation(userInput) {
  // input has to be either "1" or "2" nothing else
  if (userInput === "1" || userInput === "2") {
    return true;
  } else {
    prompt(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ❌‼️ Is Not Valid a Input❌‼️`);
    return false;
  }
}

function getLoanAmount() {
  isValidLoanAmount = false;
  let loanAmount;
  while (isValidLoanAmount === false) {
    loanAmount = READ_LINE.question(
      "\n" +
        "\n💬Please enter the loan amount.\nExample inputs are whole numbers greater than 0 such as: \n- 1000 for $1000 \n- 200 for $200" +
        "\n➡️  "
    ).trim();

    if (checkIfValidInput(loanAmount) === true) {
      loanAmount = Number(loanAmount);
      isValidLoanAmount = true;
      prompt("\t✅Valid Input✅");
    }
  }
  return loanAmount;
}

function getALoanEstimate() {
  while (again) {
    prompt("💰Welcome to the loan calculator!💰");
    isValidPercentageRate = false;
    isValidLoanDuration = false;
    isValidAnotherCalculationAnswer = false;

    let loanAmount = getLoanAmount();

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
        prompt("\t✅Valid Input✅");
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
        prompt("\t✅Valid Input✅");
      }
    }

    prompt(getMonthlyPayment(loanAmount, annualPercentageRate, loanDuration));

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
          prompt(
            "\n🙋‍♀️ Thank you for using the loan calculator. Till next time :)!"
          );
          again = false;
        }
      }
    }
  }
}

getALoanEstimate();
