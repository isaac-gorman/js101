/* Examples and Test Cases 

   Q: What are examples used for in PEDAC?
   - A: Examples are used for expanding and clarifying our understanding.
   - A: They are used to assert or disproved assumptions that we have made about the problem.

   Q: What are test cases?
   - A: Test cases are structured in a way to test particular inputs against an expected outputs.

   Q: So in summary what do examples and test cases do?
   - A: Can confirm / refute assumptions
   - A: Help to answer questions about implicit requirements 
   - A: Act as assertions which help to codify the rules and boundaries


*/

/* My Assumption 

  Q: What do I know about the "Main Problem"?

    - There is a of sequence even numbers starting with 2.
    - The numbers are grouped by rows containing the amount of integers equal to their row number. Row 1 contains 1 number, row 3 contains 3 numbers, row 10 contains 10 numbers.
    - All numbers are consecutively sequenced
    
    - Input: a single integer
        - the input integer defines the number of rows which is a sequence of integers
    - Output: a single integer
        - the sum of the integers in the row identified by the input integer

    Question:
    - Does each row begin back at 2 or does it begin with the consecutive number after the last integer of the most recent row?


    Sequence: 
        2, 4, 6, 8, 10, 12

    Row Structure
        2 sum => 2
        4, 6 sum => 10
        8, 10, 12 sum => 30
        14, 16, 18, 20 sum => 68 
        ....

    Q: How do we create this structure?    


    **Examples**

    row number: 1 => sum of integers in row = 2
    row number: 2 => sum of integers in row = 10
    row number: 4 => sum of integers in row = 68
 
*/

/* D: Data Structures 
   
   Q: What is the reason why we structure data?
   - A: We structure data so we can work with it more easily, at an implementation level we structure data so we interact with it in a logical way.

   Q: What decides how we structure data?
   - A: We structure data based on the specific requirements of the problem 

   Q: Why is it important to think about how we structure data? 
   - A: It is crucial to consider how to structure data as it is key component in the overall problem solving process. This is because the way in which we structure our data is key storage feature within our algorithm. 

   Q: What is an algorithm and what is the relationship it has with data structures?
   - A: An algorithm is simply a set of steps to get form the INPUT to point OUTPUT.
   - A: Data comes in as an INPUT data comes out altered as an OUTPUT
   - A: Now to get from the input to the output we need to represent data into a particular structure. 

  Q: In conclusion what do data structures help us with when solving problems?
  - A: Help reason with data logically 
  - A: Help us interact with data at an implementation level
  - A: Thinking in terms of data structures is a crucial storage feature of the overall problem solving process
  - A: Data structures are the data storage for algorithms 
    - - Algorithms are steps form input to output
     - - - Steps involve storing data in a certain way 



  **Data Structures**
     Sequence: 
        2, 4, 6, 8, 10, 12

    Row Structure
        2          
        4, 6  
        8, 10, 12  
        14, 16, 18, 20 
        ....

    - Overall structure represents a sequence 
    - Their are individual rows within overall structure
    - Individual rows in a set order in the context of the sequence 
    - Individual rows contain a set order  i the context of the sequence 

    Conclusion: 
    - Based on the analysis of the problems sequenced row structure of data we can best mimic its behaviour using nested arrays. For example: 

    [
      [2],
      [4, 6]
    
    ]

*/
