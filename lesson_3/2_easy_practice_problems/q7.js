/*
    Q: Consider the following object: 
    Task: Create an array from this object that contains only two elements: Barney's name and Barney's number:
*/

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
  Jasmine: 2,
};

let barneyArray = Object.entries(flintstones)
  .flat(Infinity)
  .filter((crrV) => {
    return crrV === "Barney" || crrV === 2;
  });

// console.log(barneyArray);

let simpleArray = Object.entries(flintstones)
  .filter((pair) => pair[0] === "Barney")
  .shift();

console.log(simpleArray);
