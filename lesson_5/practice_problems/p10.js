// Challenge:
// - Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

let descendingSortedArrays = arr.map((subArr) => {
  let copyArr = subArr.slice();
  return typeof subArr[0] === "number"
    ? copyArr.sort((a, b) => Number(b) - Number(a))
    : copyArr.sort().reverse();
});

console.log(descendingSortedArrays);
