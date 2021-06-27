// Alan wrote the following function, which was intended to return all of the factors of number:
// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

// number % divisor === 0 is the condition that must meet in order for the divisor to be a valid factor of the given number

function factors(number) {
  // Guard Clause
  if (number <= 0) {
    return "please enter a positive number greater than 0";
  }

  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
      console.log(
        "divisor: ",
        divisor,
        `\n${number} % ${divisor} = ${number % divisor}`
      );
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors(0));
console.log(factors(10));
