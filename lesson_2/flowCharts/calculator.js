const READ_LINE = require("readline-sync");

// Informal Pseudo Code
{
  /*
        Get the first number
        - Make sure that it is a valid number, otherwise, ask for another number

        Get the second number
        - Make sure that it is a valid number, otherwise, ask for another number

        Get the operator
        - Make sure it's a valid operator, otherwise ask for a valid input

        Preform the operation on the two  numbers
        Display the result
        Ask wether the user wants to do another calculations 
    */
}

// Formal Pseudo Code
{
  /*
        START

         GET firstNumber
         VALIDATE firstNumber 
         IF NOT VALID valNumber()
         prompt the user for acceptable inputs as firstNumber

         GET secondNumber 
         VALIDATE secondNumber
         IF NOT VALID prompt the user for the acceptable inputs for secondNumber

         GET operation 
         VALIDATE operation 
         IF NOT VALID prompt the user for the acceptable inputs for operations

        PRINT firstNumber operation secondNumber 

    */
}

let validNumberInstructions = "Please enter valid number above 0: ";

function isValid(num) {
  let numValid = false;
  while (!numValid) {
    if (num > 0) {
      numValid = true;
      console.log("Number Passed!");
    } else {
      num = Number(READ_LINE.question(validNumberInstructions + "the number"));
    }
  }
}

function isValidOperator(op) {
  let isValidOp = false;
  while (!isValidOp) {
    // check if operator is valid
    if (op === "+" || op === "-" || op === "*" || op === "/" || op === "%") {
      // if valid set isValid to true
      isValidOp = true;
      console.log("operator is valid");
    } else {
      // input operator
      op = READ_LINE.question(
        "please input a valid operation type [+, -, *, /, %]: "
      ).trim();
    }
  }
}

let again = true;

while (again === true) {
  console.log("Welcome!");

  let firstNum = Number(
    READ_LINE.question(validNumberInstructions + "the first number: ")
  );
  isValid(firstNum);

  let secondNum = Number(
    READ_LINE.question(validNumberInstructions + "the second number: ")
  );
  isValid(secondNum);
  // }

  let operation = READ_LINE.question(
    "please input a valid operation type [+, -, *, /, %]: "
  ).trim();
  isValidOperator(operation);

  switch (operation) {
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
      break;
  }

  let proceed = Number(
    READ_LINE.question(
      "Would you like to calculate another pair of numbers? \n Enter 1 for Yes \n Enter 2 for No: "
    )
  );

  console.log(proceed);

  if (proceed === 2) {
    again = false;
  }
}
