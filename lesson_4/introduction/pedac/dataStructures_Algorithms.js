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
// Implementing the example algorithm

let substringfy = (string) => {
  let targetArray = [];
  string.split("").forEach((crrV, index, currentArray) => {
    if (index === currentArray.length - 2) {
      // append 2 letters
      targetArray.push(`${crrV}${currentArray[index + 1]}`);
    } else if (index < currentArray.length - 2) {
      // append 2 letters
      targetArray.push(`${crrV}${currentArray[index + 1]}`);

      // append 3 letters
      targetArray.push(
        `${crrV}${currentArray[index + 1]}${currentArray[index + 2]}`
      );
    }
  });
  return targetArray;
};

let isPalindrome = (substring) => {
  // I need to compare every element in the array with its reversed version of itself
  let reversedWord = substring.split("").reverse().join("");
  console.log(reversedWord);
  if (substring === reversedWord) {
    console.log(`${substring} is a palindrome`);
    return true;
  } else {
    console.log(`${substring} is NOT palindrome`);
    return false;
  }
};
// isPalindrome(subStringArray);

function palindromeSubstrings(string) {
  let resultsArray = [];
  let subStringsArray = substringfy(string);

  subStringsArray.forEach((substring) => {
    if (isPalindrome(substring)) {
      resultsArray.push(substring);
    }
  });

  console.log(resultsArray);
  return resultsArray;
}

palindromeSubstrings("abcddcbA");

/* Substring Logic 

    substring logic for string 'halo'

*/

let simpleString = "mom";

let subStringArray = substringfy(simpleString);
// console.log(subStringArray);

// let substringArray = ["ha", "hal", "al", "alo", "lo"];
