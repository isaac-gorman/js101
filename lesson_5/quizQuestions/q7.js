function evenValues(array) {
  let evens = [];

  array.forEach((value, index) => {
    console.log(`index[${index}]: value =`, value);
    // array[0]: value = 1
    // array[1]: value = 4
    // array[2]: value = 4

    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
    //   removed value = 1
  });

  // evens = [4, 6, 12]
  return evens;
}
// live = [3, 4, 2, 4, 6, 5, 7, 9, 10, 12]
// og = [1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]
//
//
//
// [ 4, 6, 5, 7, 9, 10, 12]
//
//
console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));
