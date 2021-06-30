/* Q: What is PEDAC?
   A: A structured approach to solving programming problems
*/

/* Q: PEDAC Process Definition
   A:  
    P = Understanding the Problem
    E = Examples and Test Cases
    D = Data Structures
    A = Algorithms
    C = Implementing Solution Code

*/

/* Q: What is the point of the first step?
   A: Well I need to take my time to really chew on the problem before getting started on implementing code.

   A: In a sense all of the 5 PEDAC steps are about really dissecting the issue at hand, even the implementation step of coding out the algorithm. So the whole time we are going through the steps we should constantly iterate over our understanding of the problem.
*/

/* Q: What is the best way to start off to understand the problem?
   A: To create some structured understanding around the issue by: 
        - Establishing some rules
        - Define the boundaries of the problem
*/

/* Q: What is the best way to establish some rules for the problem?
   A: To analyze all info on the problem 
    - break down the in your own words then break them down into a list of rules and requirements.
    - requirements can be either explicit or implicit you must identify and restate both of them 
    - do not rush this step. 
    - strive to clearly understand the problem.
*/

// General Example:
// - Given a string, produce a new string with every other word removed.

/* Q: Define some explicit and implicit rules for the problem above?
   
   Explicit Rules
   - Input: string
   - Output: new string
   - I need to remove every other word form the initial input string

   Implicit Rules
   
*/

/* Q: What are some clarifying questions that I have for the problem above?

   Questions:
   - Will I alway receive a string as the input
   - What should I return if I don't get a string as my input?
   - What should I return if I receive an empty string as my input?
   - What does every other word mean? Every 2, 3, or 4 words how many? All odds, or evens, or does "other" have a completely different meaning?
   - How do we define word in this context?
    - Words are delimited by spaces

    Now the answers to these questions form the implicit requirements to the problem. 

*/

/* Q: What forms the implicit rules for the problem?

   A: The answers to my questions that I ask for clarification.

*/

/*  Main Problem:

    Sum Even Number Rows

    Imagine a sequence of consecutive even integers beginning with 2. The integers are grouped in rows, with the third row three integers, and so on. Given an integer representing the number of a particular row, return an integer representing the sum of all the integers in that row.


*/

/*  Q: What do I know about the "Main Problem"?

    - There is a of sequence even numbers starting with 2.
    - The numbers are grouped by rows containing the amount of integers equal to their row number. Row 1 contains 1 number, row 3 contains 3 numbers, row 10 contains 10 numbers.
    - All numbers are consecutively sequenced
    
    - Input: a single integer
        - the input integer defines the number of rows which is a sequence of integers
    - Output: a single integer
        - the sum of the integers in the row identified by the input integer

    Question:
    - Does each row begin back at 2 or does it begin with the consecutive number after the last integer of the most recent row?


*/

/* Q: How would you visualize the "Main Problem"?

    Sequence: 
        2, 4, 6, 8, 10, 12

    Row Structure
        2
        4, 6
        8, 10, 12
        14, 16, 18, 20
        ....

    Q: How do we create this structure?    
 
*/
