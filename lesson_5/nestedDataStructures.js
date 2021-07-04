// NESTED DATA STRUCTURES Notes
/*
    Q: What are some common ways in which to work with nested data structures?
    - A: List:
    - Referencing Collections
    - Updating Collection Elements
    - Shallow Copying Collections
    - Deep Copying Collections (with JSON methods .stringify() then .parse())
    - Freezing an Collections

    - Referencing Collection Elements
    Q: How are nested arrays stored? Are they different from non nested data types?
    - A: 

    - Updating Collection Elements 
    Q: How does JS make it easy for us to updated elements? 
    - A: 

    Q: How would I insert an additional element in a nested array
    - A: 





*/

let prompt = (output) => console.log(output);
let tablefy = (output) => console.table(output);

// Adding elements to inner array
{
  let nestedArrays = [[1, 5], ["!"]];
  nestedArrays[1].unshift(":)");
  //   tablefy(nestedArrays);
}

// Reassigning the key value pair of an inner object
{
  let nestObject = [
    { firstName: "isaac", lastName: "gorman" },
    { firstName: "arik", lastName: "gorman" },
  ];

  //  reassigning the entry properties of the first object

  nestObject[0] = { a: 1, b: 2 };
  //   prompt(nestObject);
}

// Deep copying collections
{
  let arr = [{ b: "foo" }, ["bar"]];
  // converting object to strings using = JSON.stringify()
  let serializedArr = JSON.stringify(arr);
  // converting string'ed object back into a object literal using = JSON.parse()
  let deepCopiedArr = JSON.parse(serializedArr);
  deepCopiedArr[1].push({ a: 2 });
  //   prompt(deepCopiedArr);
  //   prompt(arr);
}

// Q: What doesn't the above deep copy method work with?
// A: I does not work with objects that have:
// - - methods
// - - complex objects (dates, times)
// - - custom objects

// Q: What is serializing?
// A: converting a objects, and arrays that only have primitive values, arrays and plain objects as elements into strings, that then could be converted back into an identical object without having to reference the same object in memory (point to it)
