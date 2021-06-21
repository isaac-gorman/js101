/*
    OVERVIEW
      Q: What are the two main strategies for passing arguments to functions?
      - The two strategies are pass-by-value (PBV) and pass-by-reference (PBR)
      - PBV and PBR have a lot to do with the behaviour of JS.
      - I should expect to understand how to invoke functions and what
        behaviour to expect.

    1) WHAT DOES PASS-BY-VALUE MEAN?
      Q: What does the term "pass-by-value" (PBV) traditionally mean?
      - Basically when you pass a variable by it's value as an argument
        the function can not mutate the original variable to a different
        value.
      - No matter what process happened in the function the variable will
        still contain the same value that was passed to the function.

      Q: What can the concept of "pass-by-value" lead me to misinterpret
         about JavaScript?
      -  PBV can mislead me to believe that JS is only PBV since reassigning
         a parameter within a function doesn't affect the variable outside
         of the function.


    2) WHAT DOES PASS-BY-REFERENCE MEAN?
      Q: What is the constraint of using JS as a PBV language only?
      -  If JS where purely PBV we wouldn't be a way for a function to
         mutate or change the original object. But this is fairly easy
         in JS.

      Q: What does PBR imply in terms of mutations to copied objects?
      -  That the value that was passed by reference will mutate the original
         object.


      Q: In the code example, why isn't the function mutating the original
    object?
      -  Because the map method returns a new array.

    3) WHAT JAVASCRIPT DOES
      Q: What happens when you PBV to a function?
      -  Whenever I pass a primitive value to a function I should expect
         JS to behave like PBV. I should understand the rule of PBV that no
         operation performed on the original value will permanently
         alter the value. In other words I when I pass a primitive value to
         a function I wouldn't be able to alter the the value of the argument
         passed to the function.

      Q: What is the most important concept you should remember when
         passing an object to a function?
      -  When using objects, js behaves like a combination of PBV & PBR.
         Some developers call this pass-by-value-of-the-reference or
         simply call-by-sharing.
      -  Whatever I chose to call it is crucial to remember:
         When an operation within the function mutates its argument it
         affects the original argument.

      Q: What is a natural question that stems from PVR to functions?
      -  Which operations then mutate the caller? The best way to learn
         this is by using js and by reading documentation.

      Q: What are functions and methods called when they mutate the caller
         and why is this?
      -  Functions that mutate their callers called destructive functions
         or methods. This is because this function actually alters the
         original object type.

      Q: What is the difference between a destructive method and reassignment
    in terms of object values? What are some examples?

      Q: Is there a way to make a destructive method into a reassignment?

    4) RETURN VALUES
      Q: What is the most practical way in which to speak of return
      values of functions?

      Q: What does bar function receive?

      Q: What is the behaviour I need to be aware of?

    5) ASSIGNMENT
      Q: When is the only time we should think of the mental model
      of PBV and PBR?

    6) VARIABLES AS POINTERS
      Q: What are the key takeaways form the JS section on Variables
      as Pointers?
      - Whenever you reassign the entire value of an object type it
        changes the pointer to a new value. But not if change a specific
        element or property in the object.


*/

// 1) WHAT DOES PASS-BY-VALUE MEAN? CODE EXAMPLES ----------------------------
// function changeName(name) {
//   name = "opie";
//   console.log("changeName: ", name);
//   return name;
// }

// function anotherFunction() {
//   let name = "max";
//   changeName(name);
//   console.log("anotherFunction: ", name);
// }

// anotherFunction();

// 1) WHAT DOES PASS-BY-VALUE MEAN? CODE EXAMPLES ----------------------------
// ---------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------

// 2) WHAT DOES PASS-BY-REFERENCE MEAN? CODE EXAMPLES ------------------------
function capitalize(arrOfStrings) {
  let newArray = [];
  for (let index = 0; index < arrOfStrings.length; index++) {
    newArray.push(
      arrOfStrings[index][0].toUpperCase() + arrOfStrings[index].slice(1)
    );
  }
  return newArray;
}
// let names = ["opie", "max", "isaac"];
// console.log(capitalize(names));
// console.log(names); // => [ 'Opie', 'Max', 'Isaac' ]
// This passing the names array to the capitalize function implies that JS is
// is also pass by reference. But as I have seen with the re-assignment example
// not all operations affect the original object. With just a minor change to
// the above program

// 2) WHAT DOES PASS-BY-REFERENCE MEAN? CODE EXAMPLES ------------------------
// ---------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------

// 3) WHAT JAVASCRIPT DOES CODE EXAMPLES -------------------------------------
//  Understanding the difference between destructive methods and reassignments
function addName(arr, name) {
  //   arr = arr.concat([name]);
  arr = arr.push(name);
  return arr;
}

// let names = ["opie", "max"];
// console.log("addNames: ", addName(names, "isaac"));
// console.log("names: ", names);

// 3) WHAT JAVASCRIPT DOES CODE EXAMPLES -------------------------------------
// ---------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------
