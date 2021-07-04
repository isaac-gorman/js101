// WORKING WITH CALLBACK FUNCTIONS
/*
    Q: What concepts will be covered in this assignment?
    - A:
    - - Functions as first-class objects and higher order functions
    - - Mapping Code: A step by step process to understand what complex code is doing 
    - - Higher order functions: JS gives us the ability to pass functions as arguments to other functions

    Q: What have I learned in the last two assignments?
    - A: In the passed two assignments I have covered:
    - - How to work with nested data structures 
    - - How to sort collections
    - Overall I have learned how to work with collections via: 
    - - iterations
    - - selections
    - - transformation
    - - sorting 
    - - nesting them 
    - - freezing them
    - - re-assigning them 
    - - shallow copying them
    - - deep copying them using JSON methods
    - - using callbacks
    - - using existing JS methods such as map, forEach, filter with arrays, Object.keys, Object.values, Object.entries for Objects. And converting strings to arrays to preform specific actions on them using split()

    Q: What will I focus on in this assignment? 
    - A: In this assignment I will combine all the previous concepts, while taking the time to understand how each one works.

    Q: What is something I should take away form this assignment?
    - A: In this assignment I need to learn how to focus on the right details, and how each detail work with one another.

    - Functions as First-Class Objects and Higher Order Functions
    Q: What does a higher order function mean?
    - A: Unlike other languages JS functions can be assigned to variables in the same way that strings or arrays can. This enables them to be passed around as arguments to other functions or returned from them as well. So a higher-order function is a function that accepts functions as arguments and/or returns a function.

    Q: What does the term "first-class object" or "first-class value" mean?
    - A: first-class object or value is a way to describe a value that meets the following criteria: 
    - - They can be assigned to a variable or an element of data structure (such as an array or object)
    - - They can be passed as an argument to another function
    - - They can be returned as the value of a function

    Q: What is not easy to realize about first-class values in JS? What is surprising?
    - A: Well believe it or not functions are also first class values as well, we can pass them around return them just like any other value

    Q: What is a common way to distinguish JS functions from other functions in other languages?
    - A: first class functions

    Q: What are some of the major differences in transforming every element in a collection with map() and a for loop?
    - A: 

    Q: What is an imperative approach?
    - A:

    Q: What is a declarative approach?
    - A: 

    Q: Why is the declarative approach to programming possible?
    - A: 

    Q: What are functions called that take other functions as arguments?
    - A: 

    Q: What is another definition of a higher order function?
    - A: 

    Q: What type of examples will I go over? What is something I need to look out for?
    - A: 

    Q: Is forEach calling higher order function? Are callbacks examples of using higher order functions?
    - A: 

    Q: What is an example of a multi-dimensional array?
    - A: 

    - Mapping Code
    Q: What are the steps should I take to map out complex code?
    A: Ask the following questions to evaluate what specific pieces of information we should be tracking. 

    - Step 1): What type of action is being preformed?  
    - - method call(s)
    - - callback(s)
    - - conditional(s)
    - - something else entirely .... 
    
    - Step 2): On what value is that action being preformed on?

    - Step 3): What is the side-effect of the action?
    - - an output
    - - destructive actions
    - - displays something to user
    - - ect ....

    - Step 4): What is the return value of the action?

    - Step 5): Is the return value being used by whatever instigated the action? 

*/

let prompt = (output) => console.log(output);
let tablefy = (output) => console.table(output);

// Scratch
{
  let printGreeting = (test) => console.log(test);
  //   let arr = [
  //     1,
  //     3,
  //     printGreeting("Hello!"),
  //     printGreeting("Goodbye!"),
  //     printGreeting("Good to see you!"),
  //   ];
  //   return arr[3];
}

// comparing for loop vs map()
{
  // for loop transformation
  let numbers = [1, 2, 3, 4, 5];
  let transform = (arr) => {
    // Declare an initialize an empty array:
    let transformedNumbers = [];

    // Declare a counter; loop till counter equal to the length of array; increment counter
    for (let counter = 0; counter < arr.length; counter += 1) {
      // Extract the current number by referencing it and assign using counter which is dynamic it to the currentNumber
      let currentNum = arr[counter];
      let squaredNum = currentNum * currentNum;

      transformedNumbers.push(squaredNum);
    }

    return transformedNumbers;
  };

  //   prompt(transform(numbers));

  // using map()

  let withMap = (arr) => arr.map((crrV) => crrV * crrV);
  //   prompt(withMap(numbers));
}

// Example 1
{
  //   let example1 = [
  //     [1, 2],
  //     [3, 4],
  //   ].forEach((arr) => console.log(arr[0]));

  //   prompt(example1);
  // Challenge:
  {
    /* 
     Q: What is happening in the code above? Take it apart and describe every iteration.

     - example1 is a variable that stores a forEach loop over an array with nested arrays
     - the forEach loop call a callback that takes each current element as an argument per every element in the entire length of the array
     - the callback executes a console.log() for every element in the array 
     - the console.log within the console.log() we are printing to the terminal every first element in each nested array at the index of [0] using bracket notation
    - the forEach loop logs each nested arrays first element then finally logs out undefined because forEach loops are non destructive and always return undefined.

  */
  }

  // Answer / Explanation:
  {
  }

  let tabular = [
    {
      action: "method call (forEach)",
      preformedOn: "the outer array (the nested array)",
      sideEffects: NaN,
      returnValues: undefined,
      isReturnValueUsed: "No, but is shown on line 4",
    },
    {
      action: "callback execution",
      preformedOn: "Each sub-array",
      sideEffects: NaN,
      returnValues: undefined,
      isReturnValueUsed: "No",
    },
    {
      action: "element reference ([0])",
      preformedOn: "Each sub-array",
      sideEffects: NaN,
      returnValues: "Element at index 0 of sub-array",
      isReturnValueUsed: "Yes, used by console.log()",
    },
    {
      action: "method call console.log()",
      preformedOn: "Element at index 0 of the sub-array",
      sideEffects: "Outputs string representation of a Number",
      returnValues: undefined,
      isReturnValueUsed: "Yes, used to determine callback's return value",
    },
  ];

  // tablefy(tabular);
}

// Example 2
{
  {
    /*
        Q: What is different about using a map instead of a forEach using the same actions as above?
        - A: 

        Q: Unlike forEach map uses the return value in what way?
        - A: 

        */
  }

  let withMap = [
    [1, 2],
    [3, 4],
  ].map((arr) => console.log([arr[0]]));

  let codeMappingChart = [
    {
      actionNumber: 1,
      action: "method call (map())",
      preformedOn: "the outer array (the nested array)",
      sideEffects: NaN,
      returnValues: [undefined, undefined],
      isReturnValueUsed: "Yes, to construct a new array",
    },
    {
      actionNumber: 2,
      action: "callback execution",
      preformedOn: "each sub-array",
      sideEffects: NaN,
      returnValues: undefined,
      isReturnValueUsed:
        "Yes, it is added a new element to the return array for map",
    },
    {
      actionNumber: 3,
      action: "element reference",
      preformedOn: "each sub-array",
      sideEffects: NaN,
      returnValues: "the element at that sub array",
      isReturnValueUsed: "Yes, by the console.log()",
    },
    {
      actionNumber: 4,
      action: "method call of console.log()",
      preformedOn: "the element at the index of 0 of the sub-array",
      sideEffects: "outputs the string representation of the number",
      returnValues: undefined,
      isReturnValueUsed: "Yes, is used to determine the callbacks return value",
    },
  ];

  tablefy(codeMappingChart);
}

// Example 3
{
  /*
        Q: 
    */
}
