/* eslint-disable max-len */
/*
    Q: What is unique about Syntax Errors?
    A: Unlike other errors such as Reference, and Type which are dependent on specific variables and values encountered at runtime, JS detects Syntax Errors solely on from the text of your program and can be detected before or during runtime.
*/

// function({ } //SyntaxError: Function statements require a function name

JSON.parse("not really JSON"); // SyntaxError: Unexpected token o in JSON at position 1
