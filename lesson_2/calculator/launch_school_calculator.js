const READ_LINE = require("readline-sync");

// Pseudo-Code

// 0) Greet the user to the program
console.log("👋 Welcome to the Calculator!👋");

// 1) Ask user for first number
console.log("What's the first number?");
let firstNumber = READ_LINE.question();
// console.log(firstNumber);

// 2) Ask user for second number
console.log("What's the second number?");
let secondNumber = READ_LINE.question();
// console.log(secondNumber);

// 3) Ask user for operation on the two numbers
console.log(
  "What operation would you like to preform" +
    `\n 1) Addition: ${firstNumber} + ${secondNumber}` +
    `\n 2) Subtraction: ${firstNumber} - ${secondNumber}` +
    `\n 3) Multiplication: ${firstNumber} x ${secondNumber}` +
    `\n 4) Division: ${firstNumber} / ${secondNumber}`
);
let operation = READ_LINE.question();
// 4) Evaluate operation on the two numbers
// 5) Print the result to the terminal
switch (operation) {
  case "1":
    console.log(
      `${firstNumber} + ${secondNumber} = `,
      firstNumber + secondNumber
    );
    break;
  case "2":
    console.log(
      `${firstNumber} - ${secondNumber} = `,
      firstNumber - secondNumber
    );
    break;
  case "3":
    console.log(
      `${firstNumber} * ${secondNumber} = `,
      firstNumber * secondNumber
    );
    break;
  case "4":
    console.log(
      `${firstNumber} / ${secondNumber} = `,
      firstNumber / secondNumber
    );
    break;
  default:
    console.log(
      "Sorry you entered an invalid operation. Please select one of the following" +
        `\n 1) Addition: ${firstNumber} + ${secondNumber}` +
        `\n 2) Subtraction: ${firstNumber} - ${secondNumber}` +
        `\n 3) Multiplication: ${firstNumber} x ${secondNumber}` +
        `\n 4) Division: ${firstNumber} / ${secondNumber}`
    );
}
