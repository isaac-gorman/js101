function evenValues(array) {
  let evens = [];

  array.forEach((value, index) => {
    console.log(`index[${index}]: value =`, value);
    // array[0]: value = 1
    // array[1]: value = 4
    // array[2]: value = 4
    // array[3]: value = 5
    // array[4]: value = 9
    // array[5]: value = 12

    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  // evens = [4, 4, 12]
  return evens;
}
// live = [ 6, "5", 7, 9, 10, 12]
// og = [1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]
//
//
//
// [ 4, 6, 5, 7, 9, 10, 12]
//
//
console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));
