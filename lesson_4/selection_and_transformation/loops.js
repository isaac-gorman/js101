// Using loops to transform and select collections

/* Q: What do we use in order to select specific elements in a collection?

   A: To implement criteria to determine what to select we can use many actions. The most common are conditions.

   A: A very basic implementation of a condition is using a conditional statement to extract an element form an array. 

*/

/* Q: In the coding example what do we use to implement a criteria for the selection?

   A: An if statement
   
*/

function getSelection(array, criteria) {
  let selectionArray = [];
  for (let index = 0; index < numbers.length; index++) {
    let currentNumber = array[index];

    if (currentNumber === criteria) {
      selectionArray.push(currentNumber);
    }
  }

  return selectionArray;
}

let numbers = [1, 3, 9, 11, 1, 4, 1];

// console.log(getSelection(numbers, 1)); // => [ 1, 1, 1 ]
// console.log(getSelection(numbers, 9)); // => [ 9 ]

/* Q: What is the if condition called within the getSelection() function?

   A: The if condition is called a "selection criterion". The selection criterion is what decides what is selected and what is ignored. 

*/

function appendSomething(array, appendCharacter) {
  let newArray = [];
  array.forEach((crrV) => {
    newArray.push(crrV + appendCharacter);
  });
  return newArray;
}

let fruits = ["apple", "orange", "pear"];

// console.log(appendSomething(fruits, "s"));

/* Q: What is an important thing to consider when implementing a transformation?

   A: Whether or not we need to mutate the original collection or return a new collection.


*/
