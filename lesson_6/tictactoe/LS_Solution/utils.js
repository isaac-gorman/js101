let prompt = (message) => console.log(message);

// input: [1, 2, 3]

let array = [1, 2, 3, 5, 6, 7, 8, 9];

let string = "";
for (let index = 0; index < array.length; index++) {
  index < array.length - 1
    ? (string += `${array[index]}, `)
    : (string += `or ${array[index]}`);
}

console.log(string);
// output: 1, 2, or 3

module.exports = {
  prompt,
};
