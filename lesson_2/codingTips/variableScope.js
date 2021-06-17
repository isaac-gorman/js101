// Questions to consider when working through the Variable Scope assignment
/*
    OVERVIEW
    Q: What is scope in JavaScript?
    A: Scope refers to the current context of the code which
    determines accessibility of variables to JavaScript.

    Q: What are the two kinds of scope in JavaScript?
    A: Global, and Local

    Q: What is Global Scope?
    A: Global scoped variables are accessible from anywhere in the file.
    AKA: Globally scoped variables are those that are
    defined outside of the blocks example: var {}

    Q: What is Local Scope?
    A: Local scoped variables are accessible only form within the code blocks
    of the where the variables is within.
    AKA: Locally scoped variables are those that are declared within blocks.
    example: {var}

    Q: What is one of the trickiest things to understand as a beginner?
    A: Scope is a very elusive concept for most beginners.

    Q: What is a variables scope?
    A: A variables scope is the part of the program that can access that
    variable name.

    Q: So what is the part of the program that defines whether or not
    a variable is accessible to other parts of the program?
    A: A variables scope

    Q: What is the rule in which decides how and where the language finds
    previously defined variables.
    A: Variable scope

    THE GLOBAL SCOPE

    LOCAL SCOPE
    - Function Scope
    - Block Scope
*/
function prompt(output) {
  console.log(output);
}

let firstName = "Julian";

prompt(firstName);
