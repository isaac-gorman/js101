// EXTRACTING TO FUNCTIONS
// - Extracting selection operations to functions
/* Q: What are transformations and selections perfect for?

   A: They are perfect for extracting into functions. To separate complexity.

*/

/* Q: What is key feature of the selectVowels() function?

   A: The fact that selectVowels() returns a new string. It leaves its argument un-mutated.

*/

/* Q: What can I do now with the selectVowels() function that I couldn't do if I didn't return a new string?

   A: Because I left the original string un-mutated I can run actions on the new string with out affecting the original string. Such as methods to extract more data, or to evaluate information about the data.

   A: AKA we can therefore call other methods on the string to access other properties on the return value.

*/

/* Coding Challenge: How would I implement

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

*/

function selectFruit(obj) {
  // create an empty object called  justFruits{}
  let justFruits = {};

  // loop through each value in the the object
  for (let keys in obj) {
    // selection criterion: if the current value === "Fruit" and add it to a new object
    if (obj[keys] === "Fruit") {
      justFruits[keys] = obj[keys];
    }
  }

  return justFruits;
}

function otherSelectFruit(obj) {
  // extract an array for each key in the object call it produceKeys
  let produceKeys = Object.keys(obj);
  //   console.log(produceKeys);

  // declare an empty a object called selectedFruits{}
  let selectedFruits = {};

  // iterate over the produceKeys
  for (let index = 0; index < produceKeys.length; index++) {
    // - create two pointers
    // - - 1. assign a pointer starting at the first element of the produceKeys array and declare it as currentKey
    let currentKey = produceKeys[index];

    // - - 2. assign another pointer to the value pair of the key on the object called currentValue = obj[currentKey]
    let currentValue = obj[currentKey];

    //- Selection Criterion: if the currentValue === "Fruits" add it to the selectedFruits{} object
    if (currentValue === "Fruit") {
      selectedFruits[currentKey] = currentValue;
    }
  }
  return selectedFruits;
}

let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

let justTheFruit = selectFruit(produce);
// console.log(justTheFruit);

let justOtherTheFruit = otherSelectFruit(produce);
// console.log(justOtherTheFruit);

// - Extracting transformations logic to functions
/* Coding Challenge: How would you refactor the doubleNumbers() functions so it mutated its argument?

*/

/* Q: What is the definition of a transformation?

*/

/* Q: What is known as an identity transformation?

*/

/* Coding Challenge: Refactor the doubleOddNumber() functions so it doubles numbers that at odd indexes.

*/

// - More Flexible Functions

/* Q: 

*/
