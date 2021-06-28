let prompt = (message) => console.log(`${message}`);

// OVERVIEW
// Q: What are collections made up of?
// A: Collections are made up of individual elements

// Q: How do we work with collections?
// A: We work with collections by understanding how they are structured and how to reference and assign the individual elements within them.

/*
    a b c
    - - -
    0 1 2
*/

// ELEMENT REFERENCE
// String Element Reference
// Q: How do strings store data?
// A: Strings store data by using integer based indexes that represent each character

let str = "abcdefghi";
str[2]; // => '2'

// Q: How can you reference multiple characters within a string?
/* A: 
    I can use the slice() method to reference multiple characters in a string
*/

// Q: How do I use the slice method?
/* A:

    The slice method takes two arguments 
    1. Index where to start the extraction
    2. Index where to end the extraction

*/

// extracting "fgh" form the str variable
// prompt(str.slice(5, 8));
let ogArray = [1, 2, 3];
let newArray = ogArray.slice();
newArray[2] = "🦖";
// prompt("ogArray: " + `${ogArray}`);
// prompt("newArray: " + `${newArray}`);

// Q: Why isn't the character at index 5 returned in the substring?
/* A: 

    Because that is where the shallow copied substring will return up but not including that index

*/

// Coding Question❔
// Q: How would you reference "grass" from within the string below?

let practiceString = "The grass is green";

let getWord = (word, string) => {
  let find = string.match(word);
  if (find !== null) {
    prompt(`The word: "${word}" was found in the string`);
    return true;
  }
  prompt(`The word: "${word}" was NOT found in the string`);
  return false;
};

// getWord("hello", practiceString);
// getWord("grass", practiceString);

// Q: What happens when you pass negative arguments to the slice() method?
/*

  When negative numbers are passed to the slice() method the negative numbers are evaluated as: 
    string.length + (-index)


*/

// Q: What is the difference between the string methods slice() and substring()
/* A: 

   Both methods return a substring based on taking a starting, and an ending index but the differ in the following ways:
   
     1. Whenever the substring() method is passed a start index that is
        greater last index substring swaps the two arguments. While slice
        would return an empty string. 

     2. Whenever you pass substring() a negative arguments for either argument
        substring will reassign any negative value as 0. 


*/

// Conclusion: Do not use substring as it has un-natural behaviors and outcomes. Instead use splice. Also be aware of .substr() a legacy method.
