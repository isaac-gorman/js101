let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// input: the flintstones array
// - extract the indexes of each element set it to indexValues
// - create an empty object called flintObj = {}
// - loop through every flintstones value
// - - assign every element in the flintstones array as a key in the flintObj and every indexValues as a value in the flintObj
// output: an object { Name: atIndex, Name: atIndex, .... }

let flintObj = {};
flintstones.forEach((element, index) => (flintObj[element] = index));
console.table(flintObj);
