// Challenge:
// - Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let serializedArray = JSON.stringify(arr);
let deepCopyArray = JSON.parse(serializedArray);

let incrementEachBy = (value) =>
  deepCopyArray.map((subObj) => {
    let objectKeys = Object.keys(subObj);

    return objectKeys.forEach((key) => {
      return (subObj[key] += value);
    });
  });
// incrementEachBy(10);
console.log(deepCopyArray);
// let flatKeys = subObjKeys.flat(Infinity);

// console.log(flatKeys);

// flatKeys.map((key) => deepCopyArray.map((subObj) => console.log(subObj[key])));

// deepCopyArray
