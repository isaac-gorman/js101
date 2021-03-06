// First-Class Functions vs Higher-Order Functions
/*
    Q: So is there a difference between higher order functions and first-class functions?

    - A: Yes, there is a difference. 
*/

// - First-Class Functions
/*
    First-Class Functions: 
    
      Whenever a language has first-class functions, it means that the language treats functions as values - that you can assign a function into a variable, pass it around etc. 

*/

// this is an example of first class function because I can assign the anonymous function to just about any value
let hi = function () {
  return "hello";
};

console.log(hi()); // => "hello"

// - Higher-Order Functions
/*
    Higher-Order Functions:

      Higher-Order Functions are functions that are work with other functions, meaning that they take one or more functions as arguments and can also return a functions:

      Example: 
*/

// regular function
function hello() {
  return "hello";
}

// regular function
function goodbye() {
  return "goodbye";
}

// higher order function
// - because it works with one or more functions by actually taking functions as arguments and returning two functions
function greeting(function1, function2) {
  return `${function1()}, ${function2()}`;
}

// higher-order function
// - because it works with one or more functions returning the greeting function
function invoker() {
  // using a regular function as higher order by passing it other functions
  return greeting(hello, goodbye);
}

console.log(invoker());

// Symbiosis
// - It would be hard to imagine one with out the other. Both give each other the functionality to preform there task.Higher order functions support first-class functions and conversely.
