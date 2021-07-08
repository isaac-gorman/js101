// Annotations
/* 
   Overview: 
    Q: What will I cover in this assignment?
    - A: I will add some more debugging methods to my tool box.
         When dealing with more complex programs its more important to know how to identify a and eliminate bugs when the occur. 

         I will become a little more familiar with the debugger

   Review: 
    Q: What are the basic commands for the debugger, and concepts that I have already covered? 
    - A: 
         Calm Patient Temperament: Think Spock from Star Trek.   
         Bugs are just apart of the process, develop a clam problem solving personality 
         and mentality.
         
         Stack Trace:
         Become very used to reading the stack trace. The stack trace is the text that shows up on my screen when I make an error in my code. 

         Common Error 
         - Syntax Error 
         - Variable Doesn't Exist 
         - TypeErrors when you call a method on a value that it is not a prototype of

   Executing Expression Functions: 
    Q: What is the exec command?
    - A: The exec command is a node debugger command for executing the code you want
         to trouble shoot.

         The exec command is a way for accessing in-scope variables within the debugger. 
         Fun fact: Did you know that the exec command can be used to evaluate expressions
         or execute functions
    
    Q: How do actually use exec command again?
    - A: Go to the terminal and type `node inspect <file.js>`

    Q: What do I need in order to execute a function with the exec key word?
    - A: In order to execute with the exec command I need to have an actual invocation
         for that function in my code, not just the function definition. 

    Q: What is another way to evaluate expressions or execute functions?
    - A: Another useful way to evaluate expressions or execute functions is to access the debugger within the the REPL. You can access the REPL by via the `repl` command. Within the REPL you can now access variables that are within the scope at the point of the program execution has paused, and you can evaluate expressions or execute functions, within the repl all of this can be done with out the constraints of the `exec` command. 

   Setting and Clearing Breakpoints:
    Q: How have I learned to set up breakpoint in my code so far?
    - A: Using the `next` command or `n`?
         
         I can actually set up a breakpoint manually by using the `debugger` keyword right in my code. But can begin to become very time consuming. 

    Q: How can I add or remove breakpoint as the debugger is running?
    - A: I can set up breakpoints by using setBreakPoint() or sb() commands, and remove breakpoints by using the clearBreakPoint() or cb() commands.

    Q: What is setBreakpoint() / sb()?
    - A: setBreakPoint() and sb() are commands that set up breakpoints.
         They can be used without arguments if the are set on the current line, or with an argument if they are passed as an argument in order to set a breakpoint on the line specified. 

    Q: What is clearBreakpoint() / cb()?
    - A: These commands remove breakpoints, and take two arguments: 
        1) the name of the file name
        2) the line number

   Stepping Into Functions:
    Q: How would I step through function as of now?
    - A: I would use the "n" command or loop through the entire scope using the "c" command.

    Q: In what situation wouldn't the `n` command be useful?
    - A: When ever a function is calling another function e.g. a higher-order function. Such as a callback execution within a method. 

    - - There will be situations where I need to step into the inner scope of the function at just the right line so that I figure out what is happing within the inner function scope.

    Q: So how would I "step inside" a higher-order functions to understand what is being executed? 
    - A: Using the `s` or 'step` command.

    Q: When reaching the inner function invocation how would I move into the execution of that function, rather than just moving over to the next expression? Why is this useful?
    - A: I would use the `step` or `s` command. 
         This would enable me to not skip over to the next function call or expression. Rather I would be able to look under the hood of the functions scope to see what other functions are doing. 

     Q: How would I step out of the inner scope of a function? 
     - A: Using the `out` or `o` command.

   Other Commands:
    Q: What are some other useful commands when trouble shooting code?
    - A: help(), and list()

    Q: What does the `help` command do?
        - A: The help command simply list all the commands that
         are available. 

    Q: What does the `list()` command do?
    - A: The list() command can be used the reveal additional lines of code in the file.

      Pro-Tip: 
      - Pass the list() command function the number of arguments for the number
        of lines  of code you want to display.

*/
