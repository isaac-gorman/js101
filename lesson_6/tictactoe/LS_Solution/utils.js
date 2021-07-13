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

module.exports = {
  prompt,
  joinOr,
};
