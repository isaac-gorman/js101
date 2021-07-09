/*
    Decomposing the Problem: 
    Q: Before we start coding what must we do first, when first introduced with a new problem? 
    - A: I must really understand the problem that I am being 
         asked to solve. 

         I must understand the problem, then design a mental model of the solution sometimes in the form of a flowchart.

         But in order to accomplish this I must work backwards to break down the problem to several sub-problems. A good first step is to describe the problem in your own words, then move on to construct a high-level flow chart. 

    Q: Describe the game of tic-tac-toe: 
    - Tic-Tac-Toe
      - 2 player-game
      - Played on a 3 x 3 grid called the board
      - Each player take a turn marking there square on the board
      - First player to get three 3 squares in a row - vertically, horizontally, or diagonal wins
      - I all 9 square filled an no player has 3 rows then the game is tied.


    Q: What is the sequence of tic-tac-toe?
       1. Display the initial empty 3x3 board
       2. Ask the user to mark the square
       3. Computer marks a square
       4. Display the updated board state
       5. If its a winning board display: winner
       6. If the board is filled with now 3 rows display: tie
       7. If neither player won and the board is not full, go to #2
       8. Play again?
       9. If yes, go to #1
       10. If no, end the game and display: Goodbye, thank you for playing!

    Q: Where in the sequence are the two main loop? 
       - The inner loop is all the steps in the sequence up to step #7
       - The outer loop is the steps in the sequence up to step #10

    Q: According to solution what are the two loops within the sequence?
       Inner Loop: There is an inner loop  between steps 2 - 7 that repeat as there is no winner and the board isn't full. 

       Outer Loop: An outer loop between 1 - 9 that repeats as long as the player wants to keep playing.

    Q: What do the main two loops do with the function do? 

    Q: What is crucial when breaking down a problem breaking down the problem initially? 

    Flowchart: 

    construct you flowchart for the game
    



*/
