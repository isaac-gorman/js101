const READ_LINE = require("readline-sync");

// Objective:
{
  // - We need to ask the user to enter N collections of numbers and that we want to find and display the largest number from each collection.
}

// Informal Pseudo Code
{
  // While the use wants to keep going
  // - ask the user form a collection of numbers
  {
    // iterate through the collection one by one
    // - save the first value as the starting value
    // - for each iteration, compare the saved value with the current value
    // - if the saved value is greater than or equal to the current number
    // - - move the to the next value in the collection
    // - otherwise, if the current value is greater than the saved value
    // - - reassign the saved value as the current value
  }
  //  - after iterating through the collection, save the largest value into the list
  // - ask the user if they want to input another collection
  // return the saved list of numbers
}

// Formal Pseudo Code
{
  /*
    START
        SET largeNumbers = []
        SET keepGoing = true

        WHILE keepGoing === true 
            GET "enter collection"
            SET largestNumber = SUB-PROCESS "extract the largest num form the collection"
            largestNumbers.push(largestNumber)
            GET "enter another collection? \nEnter 1 for yes /nEnter 2 for no"
            IF "1"
                keepGoing = true
            ELSE 
                keepGoing = false

        PRINT largestNumbers
    END    
*/
}

let largestNumbers = [];
let keepGoing = true;

while (keepGoing === true) {
  let currentCollection = [];
  for (let i = 0; i < 10; i++) {
    console.log(`Please enter number ${i + 1}/ 10`);
    let num = READ_LINE.question();
    currentCollection.push(Number(num));
  }
  console.log(currentCollection);

  let largestValue = -Infinity;
  currentCollection.forEach((crrV) => {
    if (crrV > largestValue) largestValue = crrV;
  });

  console.log(largestValue);
  largestNumbers.push(largestValue);

  console.log(
    "Would you like to add another collection?" +
      "\n Enter 1 for Yes" +
      "\n Enter 2 for No"
  );
  let repeatDecision = READ_LINE.question();
  repeatDecision === "1" ? (keepGoing = true) : (keepGoing = false);
}

console.log(largestNumbers);
