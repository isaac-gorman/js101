/*
    Q: What is a TypeError?

    A:TypeErrors can occur in many ways.These are the
    most common things that lead to type errors:
     - accessing a property on a value that does not have any properties,
          such as null or undefined
     - trying to invoke a none function can raise a TypeError
     - trying to reassign a constant variable
*/

let a;
console.log(typeof a); // undefined

console.log(a.name); // TypeError: Cannot read property 'name' of undefined

a = 1;
console.log(a()); // TypeError: a is not a function

const B = 42;
B = 3.14;
console.log(B); // TypeError: Assignment to constant variable.
