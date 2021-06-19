/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const READ_LINE = require("readline-sync");

// -
// console.log function --------------
function prompt(message) {
  console.log(message);
}
// console.log function --------------
// -

// -
// Validation ------------------------
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
    prompt(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ❌‼️ Is Not Valid a Input❌‼️`);
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
    prompt(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ❌‼️ Is Not Valid a Input❌‼️`);
    return false;
  }
}

function checkYesOrNo(userInput) {
  // input has to be either "y" or "n" nothing else
  if (userInput[0] !== "y" && userInput[0] !== "n") {
    prompt(`\t🤦‍♂️😅👉 ${userInput} 👈😅🤦‍♂️  ❌‼️ Is Not Valid a Input❌‼️`);
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
// Validation ------------------------
// -

// -
// Requesting User Loan Input --------
function getLoanAmount() {
  let isValidLoanAmount = false;
  let loanAmount;

  while (isValidLoanAmount === false) {
    loanAmount = READ_LINE.question(
      "\n" +
        "\n💬Please enter the loan amount.\nExample inputs are whole numbers greater than 0 such as: \n- 1000 for $1000 \n- 200 for $200" +
        "\n➡️  "
    ).trim();

    if (checkIfValidWholeNumber(loanAmount) === true) {
      loanAmount = Number(loanAmount);
      isValidLoanAmount = true;
      prompt("\t✅Valid Input✅");
    }
  }

  return loanAmount;
}

function getAnnualPercentageRate() {
  let isValidPercentageRate = false;
  let annualPercentageRate;
  let noAPR;

  // Is your APR 0% (y/n)?

  while (true) {
    noAPR = READ_LINE.question(
      "Do you have 0% APR (y/n)" +
        "\nEnter: " +
        "\n- Y for Yes" +
        "\n- N for No" +
        "\n➡️  "
    )
      .trim()
      .toLowerCase();

    if (checkYesOrNo(noAPR) === true) break;
  }

  if (noAPR === "y") {
    annualPercentageRate = 0;
  } else {
    while (isValidPercentageRate === false) {
      annualPercentageRate = READ_LINE.question(
        "\n" +
          "\n💬 Please enter the Annual Percentage Rate (APR).\nExample inputs are decimal numbers such as: \n- 0.06 for 6% \n- 0.12 for 12%" +
          "\n➡️  "
      ).trim();

      if (checkIfValidDecimalNumber(annualPercentageRate) === true) {
        annualPercentageRate = Number(annualPercentageRate);
        isValidPercentageRate = true;
        prompt("\t✅Valid Input✅");
      }
    }
  }
  return annualPercentageRate;
}

function getLoanDuration() {
  let isValidLoanDuration = false;
  let loanDuration;

  while (isValidLoanDuration === false) {
    loanDuration = READ_LINE.question(
      "\n" +
        "\n💬 Please enter the Loan Duration in years.\nExample inputs are whole numbers such as: \n- 10 for 10 years \n- 5 for 5 years" +
        "\n➡️  "
    ).trim();

    if (checkIfValidWholeNumber(loanDuration) === true) {
      loanDuration = Number(loanDuration);
      isValidLoanDuration = true;
      prompt("\t✅Valid Input✅");
    }
  }

  return loanDuration;
}

function askToCalculateAgain() {
  let anotherCalculation;

  while (true) {
    anotherCalculation = READ_LINE.question(
      "\n" +
        "\n💬 Would you like to make another loan calculation (y/n)? " +
        "\nEnter: " +
        "\n- Y for Yes" +
        "\n- N for No" +
        "\n➡️  "
    )
      .trim()
      .toLowerCase();

    if (checkYesOrNo(anotherCalculation) === true) break;
  }

  return anotherCalculation;
}
// Requesting User Loan Input --------
// -

// -
// Operation On Loan -----------------
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

  prompt(
    `\n🧾💸 You will pay 💲${monthlyPayment.toFixed(
      2
    )} for ${numberOfPayments} months 📆. \n📈 For a total of 💲${(
      monthlyPayment * numberOfPayments
    ).toFixed(2)}.`
  );
}

function withNoAPRCalculateMonthlyPayment(loanAmount, loanDuration) {
  const MONTHS_IN_YEAR = 12;
  let numberOfPayments = loanDuration * MONTHS_IN_YEAR;
  let monthlyPayment = loanAmount / numberOfPayments;

  prompt(
    `\nWith 0% APR you will pay $${monthlyPayment} each month for ${numberOfPayments} months.`
  );
}
// Operation On Loan -----------------
// -

// -
// Main Function ---------------------
function getALoanEstimate() {
  while (true) {
    prompt("💰Welcome to the loan calculator!💰");

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
      prompt(
        "\n🙋‍♀️ Thank you for using the loan calculator. Till next time :)!"
      );
      break;
    }
  }
}
getALoanEstimate();
// Main Function ----------------------
// -
