/* PROBLEM:

  Given a string, write a function changeMe which returns the same
  string but with all the words in it that are palindromes upperCased.

*/

/* Test Cases

  changeMe("We will meet at noon") === "We will meet at NOON"
  changeMe("No palindromes here") === "No palindromes here"
  changeMe("") === ""
  changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"

*/

// Understanding the Problem
/* Step 1) Ask Clarification Questions 

  1. What is a palindrome? 

  2. Should the word remain the same if they remain uppercase if they already are upper-cased

  3. How should I deal with strings empty strings provided as input? 

  4. Can I assume all inputs are strings?

  5. I should I consider letter case when determining if a word is a valid palindrome?

  6. Do I need to return the same object or should I return an entirely new one?

*/

/* Step 2) Define I/O

  Input:
  - string

  Output:
  - string with palindromes upperCase()'d

*/

/* Step 3) Define Rules

    1. Assume all inputs are strings

    2. Do not alter upper-cased words keep the same as the input

    3. Return a new string

    4. If input is a n empty string return the empty string

    5. Every palindrome must be upper-cased (reminder palindrome is a word that is the same word backwards for example: "mom", "tacocat", "bob", etc)

    6. Palindromes are case-sensitive for example "Bob", and "Dad" are not palindromes but "DAD" and "bob" are palindromes.

*/
