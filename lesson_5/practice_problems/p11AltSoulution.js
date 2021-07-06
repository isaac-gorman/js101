let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// Using for in loop
let newArr = arr.map((subObj) => {
  let incrementObj = {};

  for (let key in subObj) {
    incrementObj[key] = subObj[key] + 1;
  }

  return incrementObj;
});

// let result = arr.map((obj) => {
//   let incrementedObj = {};

//   for (let key in obj) {
//     incrementedObj[key] = obj[key] + 1;
//   }

//   //   console.log([incrementedObj]);
//   return incrementedObj;
// });

// console.log("new array: ", newArr);
// console.log("\noriginal array: ", arr);
