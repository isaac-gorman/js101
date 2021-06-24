// Q: Will the code below raise an error?
// Answer 👇
{
  // A: No. JavaScript will merely assign 5 to the 6th index and assign undefined values as elements in the index's leading up to the 6th index for 3, 4, 5. Or <3 empty items>
}
// Bonus Question: What will "console.log(nums[4])" return?
// Answer 👇
{
  // A: undefined
  // A: The JavaScript engine will treat array slots (indexes) 3 to 5 as empty slots.
}
// Bonus Answer 👇🤓
{
  // Even though "console.log(nums[4])" logs undefined to the console it's value isn't anything not even undefined.

  // In the example bellow even if the initially empty slots are not reassigned to undefined or other values they can not be reassigned in a loop, or functional method such a .map(). For example in the mapOfDeepDiveNums variable its map expression will reassign only the index that was explicity declared ass undefined.

  let deepDiveNums = [1, 2, 3];
  deepDiveNums[6] = 5;
  deepDiveNums[5] = undefined;
  deepDiveNums[4] = undefined;
  let mapOfDeepDiveNums = deepDiveNums.map(() => 10);
  console.log(mapOfDeepDiveNums);
}

let nums = [1, 2, 3];
nums[6] = 5;
console.log(nums);
console.log(nums[4]);
