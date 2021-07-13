let prompt = (message) => console.log(message);

function joinOr(array) {
  let string = "";
  array.forEach((element, index) => {
    index < array.length - 1
      ? (string += `${array[index]}, `)
      : (string += `or ${array[index]}`);
  });

  return string;
}

console.log(joinOr([1, 2, 3, 4, 5, 6, 7]));

module.exports = {
  prompt,
  joinOr,
};
