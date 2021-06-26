// Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// This code will create a nested array that looks like this:

// console.log(flintstones);

// input =>  ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]]
// process:
/*
    create an empty newArray
    iterate over every element of the input array
        push every element into the newArray
        if the element = typeof []
            then iterate through that array till empty while pushing each element into the newArray
    return newArray
 */
// output => [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

let flattenArray = (arr) => {
  let newArray = [];
  arr.forEach((currentOuterArrayValues) => {
    if (typeof currentOuterArrayValues === typeof []) {
      currentOuterArrayValues.forEach((currentNestedArrayValues) => {
        newArray.push(currentNestedArrayValues);
      });
    } else {
      newArray.push(currentOuterArrayValues);
    }
  });

  console.log(newArray);
};

// flattenArray(flintstones);

/*
    Q: How do I flatten the array using: 
    - concat()
*/

// Using concat()
// console.log(
//   ["Fred", "Wilma"].concat(["Barney", "Betty"], ["Bambam", "Pebbles"])
// );
// console.log((flintstones = [].concat(...flintstones)));

// Using reduce()

// console.log(
//   (flintstones = flintstones.reduce((accumulator, currentValue) => {
//     return accumulator.concat(currentValue);
//   }, []))
// );

let newFlintstones = [];
flintstones.forEach((element) => {
  newFlintstones = newFlintstones.concat(element);
});

console.log(newFlintstones);

let nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(nestedArray.flat(Infinity));
