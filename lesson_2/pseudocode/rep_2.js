// Informal Pseudo
{
  // Create a function that takes and array of strings as arguments
  // take the array and join all the elements
  // return all the strings concatenated together
}

// Formal Pseudo
{
  // START
  // FUNCTION
  // concatArray(arr) {
  // SET
  // concatenatedArray = arr.join("")
  // RETURN
  // concatenatedArray
  // }
}

function concatArray(arr) {
  let joinedArray = arr.join("");
  return joinedArray;
}

let arr1 = ["a", "b", "c"];
let arr2 = ["j", "a", "s", "m", "i", "n", "e"];

console.log(concatArray(arr1));
console.log(concatArray(arr2));
