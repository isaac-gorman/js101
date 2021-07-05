let arr = [1, 2];

arr.map((subArr) => arr.pop());

console.log(arr); // => [ 2, <1 empty item> ]
