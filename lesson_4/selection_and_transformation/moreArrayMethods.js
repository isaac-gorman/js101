/*  More JS array methods

    Q: What are other common JS array methods?
    A: List: 
        - some()
        - every()
        - find()
        - findIndex()
        - reverse()
        - includes()
    
    Q: What does some() do?
    A: The some functions test wether at least one of the elements in an array passes the test implemented by the provided function. Returns true if the element is is found within the array returns false if it doesn't.

    Q: What does every() do?
    A: Unlike the some method which only test if one of the elements in an array pass a given test to return true, the every method only returns true if "every" element in the array passes the given "selection criterion"

    Q: What does the find() method do? 
    A: The find method returns the first element in the array that passes the selection criterion. 

    Q: What does findIndex() method do?
    A: findIndex() returns the index of the first element that passed the selection criterion.

    Q: What does reverse() method do?
    A: The reverse method inverts the order of elements within an array.
    IMPORTANT NOTE: reverse is a mutable method, as it mutates the array in which is its called on.

    Q: What does the includes() method do?
    A: Returns true or false if the passed arguments is an element within the array it is called on
    IMPORTANT NOTE: Remember when trying to find the same object you literally must look for the same object not the identical value pair. Remember that objects are passed by reference not value so: 
    - {a: 2} === {a: 2} is false 
    - but let obj = {a: 2}
    - let randomArray = [ 1, 3, obj]
    - randomArray[2] === obj is true because it is the object is compared by- address not key value pairs.

    Q: What does Object.prototype.hasOwnProperty do?
    A: hasOwnProperty method returns a boolean indicating whether the object has the specified property as opposed to inheriting it.

*/

// some()
// - with arrays
let names = ["Isaac", "Jasmine", "Ari", "Arik"];
const startsWithA = (person) => person.charAt(0) === "A";
// console.log(names.some(startsWithA));

// - with objects
let animals = { a: "ant", b: "bear", c: "cat" };
// console.log(Object.values(animals).some((crrV) => crrV === "cat"));

// every()
let family = [
  { firstName: "Arik", lastName: "Gorman" },
  { firstName: "Ari", lastName: "Gorman" },
  { firstName: "Isaac", lastName: "Gorman" },
  { firstName: "Opie", lastName: "Gorman" },
];
// console.log(family.every((person) => person.lastName === "Gorman"));

// find()
// console.log(family.find((person) => person.firstName === "Isaac"));

// findIndex()
// console.log(names.findIndex((person) => person === "Arik"));

// reverse()
// is a mutable method, so I will mutate a shallow copy of the names array
let newNames = names.slice(); // or [...names]
// console.log(newNames.reverse());
// console.log(names);
// I can also use the slice() method to make a shallow copy

// includes()
let numbers = [1, 2, 3, 4, 100, 200];
// console.log(numbers.includes(200));
// includes with objects

let bobObject = { firstName: "Bob", lastName: "Weir" };
let theBand = ["John", bobObject, "Oteil", "Jeff", "Mickey", "Bill"];
// console.log(theBand.includes(bobObject));

// hasOwnProperty()

console.log(bobObject.hasOwnProperty("lastName"));

console.log(bobObject.hasOwnProperty("instruments"));
