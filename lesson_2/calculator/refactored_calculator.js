const READ_LINE = require("readline-sync");

// Pseudo-Code

function prompt(message) {
  console.log(`➡️  ${message} `);
}

function invalidNumber(number) {
  return number.trim().length === 0 || Number.isNaN(Number(number)); // will return false if it is a number true if it is not a number
}

// 0) Greet the user to the program
prompt("👋 Welcome to the Calculator!👋");

// 1) Ask user for first number
prompt("What's the first number?");
let firstNumber = READ_LINE.question();
while (invalidNumber(firstNumber)) {
  prompt("Hm... that doesn't look like a valid number");
  firstNumber = READ_LINE.question();
}

// 2) Ask user for second number
prompt("What's the second number?");
let secondNumber = READ_LINE.question();
while (invalidNumber(secondNumber)) {
  prompt("Hm... that doesn't look like a valid number");
  secondNumber = READ_LINE.question();
}
// prompt(secondNumber);

// 3) Ask user for operation on the two numbers
prompt(
  "What operation would you like to preform" +
    `\n 1) Addition: ${firstNumber} + ${secondNumber}` +
    `\n 2) Subtraction: ${firstNumber} - ${secondNumber}` +
    `\n 3) Multiplication: ${firstNumber} x ${secondNumber}` +
    `\n 4) Division: ${firstNumber} / ${secondNumber}`
);
let operation = READ_LINE.question();
while (!["1", "2", "3", "4"].includes(operation)) {
  prompt(
    "Must chose either " +
      `\n 1) Addition: ${firstNumber} + ${secondNumber}` +
      `\n 2) Subtraction: ${firstNumber} - ${secondNumber}` +
      `\n 3) Multiplication: ${firstNumber} x ${secondNumber}` +
      `\n 4) Division: ${firstNumber} / ${secondNumber}`
  );
  operation = READ_LINE.question();
}
// 4) Evaluate operation on the two numbers
// 5) Print the result to the terminal
switch (operation) {
  case "1":
    prompt(
      `${firstNumber} + ${secondNumber} = ` + (firstNumber + secondNumber)
    );
    break;
  case "2":
    prompt(
      `${firstNumber} - ${secondNumber} = ` + (firstNumber - secondNumber)
    );
    break;
  case "3":
    prompt(`${firstNumber} * ${secondNumber} = ` + firstNumber * secondNumber);
    break;
  case "4":
    prompt(`${firstNumber} / ${secondNumber} = ` + firstNumber / secondNumber);
    break;
  default:
    prompt(
      "Sorry you entered an invalid operation. Please select one of the following" +
        `\n 1) Addition: ${firstNumber} + ${secondNumber}` +
        `\n 2) Subtraction: ${firstNumber} - ${secondNumber}` +
        `\n 3) Multiplication: ${firstNumber} x ${secondNumber}` +
        `\n 4) Division: ${firstNumber} / ${secondNumber}`
    );
}
