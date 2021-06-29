// PROBLEM OVERVIEW
/* Objective:

 Given a string, write a function `palindromeSubstrings` which returns
 all the substrings from a given string which are palindromes. Consider
 palindrome words case sensitive.
 
*/
/* Test Cases: 

 console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
 should return: ["ili"]

 console.log(palindromeSubstrings("abcddcbA"))
 should return: ["bcddcb", "cddc", "dd"]

 console.log(palindromeSubstrings("palindrome"))
 should log: []

 console.log(palindromeSubstrings(""))
 should log: []

*/

// UNDERSTAND THE PROBLEM
/* Step 1) Ask Clarification Questions

  1. Should I return a new object or the same object

  2. Are all strings going to be just one word or many?

  3. What if I get an input such as "MoM", or "TaCoCaT" are those acceptable palindromes? 

  4. What is a substring?

*/

/* Step 2) Defining I/O

  Inputs: 
  - strings

  Outputs: 
  - array of palindrome substrings

*/

/* Step 3) Defining Rules

  Explicit Rules:   
    1. Return palindromes as an array
  
    2. Palindromes are case sensitive so do not consider mixed case words palindromes unless they are the same letters for example "MoM", "mOm" or "TaCoCaT", but not "moM"

  Implicit Rules:
    1. When given a an empty string "" return an empty array []

*/

// DATA STRUCTURES / ALGORITHMS
/* Step 1) Define the Data Structure

    Q: What data structure should we use when converting our input to our desired output?
        A/Q: What is the desired output?
        A: An array. 

    Conclusion: 
        We should use an array as our data structure during the data manipulation of this algorithm

*/
/* Step 2) Write out informal pseudo code for algorithm 

    create a function called palindromeSubstrings that takes a string as an argument

        - within the function create a empty string called palindromesArray

        - create a guard clause to check if the passed string is empty
            if true then return the palindromeArray empty

        - loop through each character in the string
            - within the loop create conditional logic that check if two strings are === to one another when reversed
                - if they are compare weather the characters on either side are === when reversed
                    - if true: 
                        - palindromeArray.push(palindrome)
                        - repeat this logic till the next preceding character in front of the first character and behind the last character are equal when reversed . 

            - if three characters are the same when reversed then:
                - palindromeArray.push(palindrome)
                - compare weather the next two characters before and after the reversed word is a palindrome. Repeat this process till the words do not equal palindrome. 

        - return the palindromeArray     
*/
/* Example Algorithm

  - Declare a result variable and initialize it as an empty array
  - Create an array called substrArray that contains all of the substrings of the input string that are at least 2 characters long.
  - loop through the words in the substrArray
  - if the word is a palindrome append it to the array
  - return the resultsArray

*/

// Implementing the hard parts of the algorithm
/* Hard Parts of the Algorithm

  for each starting index from 0 through the next to the last index position or (collection.length - 2)
    for each substring length from 2 until there are no substrings of that length
        extract that substring of the indicated length starting at the indicated index position 
    end inner loop
  end outer loop  


*/

let mySubStringify = (string) => {
  let stringArray = string.split("");
  let subStringArray = [];

  for (let index = 0; index < stringArray.length - 1; index++) {
    let tempStringArray = stringArray.slice(index, stringArray.length);

    while (tempStringArray.length !== 1) {
      subStringArray.push(tempStringArray.join(""));
      tempStringArray.pop();
    }
    console.log(subStringArray);
  }
};
// mySubStringify("tacocat");

/* More hard parts

Implement this logic

// - create an empty array called `result` that will contain all required substrings
// - create a `startingIndex` variable (value `0`) for the starting index of a substring
// - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//   - create a `numChars` variable (value `2`) for the length of a substring
//   - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//     - extract a substring of length `numChars` from `string` starting at `startingIndex`
//     - append the extracted substring to the `result` array
//     - increment the `numChars` variable by `1`
//   - end the inner loop
//   - increment the `startingIndex` variable by `1`
// - end the outer loop
// - return the `result` array

*/

/*

  START

   Given a string named `string`

   SET result = []
   SET startingIndex = 0

   WHILE startingIndex <= string.length - 2
     SET numChars = 2
     WHILE numChars <= string.length - startingIndex
       SET substring = numChars character form string starting at the index startingIndex
       append substring to result array
       SET numChars = numChars + 1;
     
     SET startingIndex += 1
   
   RETURN result

*/

/*

- Inside the 'isPalindrome' function, check whether the string value is equal to the its reversed value

*/
function getSubStrings(string) {
  let result = [];
  let startingIndex = 0;
  let innerRound = 1;
  let outerRound = 1;

  while (startingIndex <= string.length) {
    let numChars = 2;
    if (outerRound >= 2) {
      //   console.log(`\n\tReset numChars = ${numChars}`);
    }
    // console.log(`\nOuter Round ${outerRound}`);
    while (numChars <= string.length - startingIndex) {
      let substring = string.slice(startingIndex, startingIndex + numChars);
      //   console.log(` - inner round ${innerRound}: `, substring);
      result.push(substring);
      numChars++;
      innerRound++;
      //   console.log(`\tincremented numChars = ${numChars}`);
    }

    // console.log("startingIndex: ", startingIndex);
    innerRound = 1;
    startingIndex++;
    outerRound++;
  }
  //   console.log(result);
  return result;
}

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

function palindromeSubstrings(string) {
  let palindromeArray = [];
  let substringArray = getSubStrings(string);

  substringArray.forEach((crrV) => {
    if (isPalindrome(crrV)) {
      palindromeArray.push(crrV);
    }
  });

  return palindromeArray;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA")); // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings("")); // []
