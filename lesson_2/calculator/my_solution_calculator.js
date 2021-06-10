var readlineSync = require("readline-sync");

// Ask the for the first number
let firstNum = parseInt(readlineSync.question("first number: "));
console.log(typeof firstNum);

// Ask the for the second number
let secondNum = parseInt(readlineSync.question("second number: "));
console.log(typeof secondNum);

// Ask the for an operation to preform
let inputOperation = readlineSync.question(
  "input operation type [+, -, *, /, %]: "
);
console.log(typeof inputOperation);

// Preform the operation on the two numbers
switch (inputOperation) {
  case "+":
    console.log(`${firstNum} + ${secondNum} = `, firstNum + secondNum);
    break;
  case "-":
    console.log(`${firstNum} - ${secondNum} = `, firstNum - secondNum);
    break;
  case "*":
    console.log(`${firstNum} * ${secondNum} = `, firstNum * secondNum);
    break;
  case "/":
    console.log(`${firstNum} / ${secondNum} = `, firstNum / secondNum);
    break;
  case "%":
    console.log(`${firstNum} % ${secondNum} = `, firstNum % secondNum);
    break;
  default:
    console.log(
      `Sorry you entered an invalid operation. Please enter on of the following operations [+, -, *, /, %]`
    );
}

// Print result on terminal
