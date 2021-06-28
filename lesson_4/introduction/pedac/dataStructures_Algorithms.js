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



*/
