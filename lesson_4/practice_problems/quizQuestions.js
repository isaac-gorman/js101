let prompt = (message) => console.log(message);

// Q: 1
{
  let cat = "Butterscotch";
  // prompt(cat[8]); // => "o"
  // prompt(cat[-4]); // => undefined
  // prompt(cat[cat.indexOf("o")]); // => "o"
  // prompt(cat.slice(-4, -3)); // => "o"
  //   prompt(cat[cat.length - 4]); // => "o"
}

// Q: 2
{
  let dog = "fido";
  //   dog = dog[0].toUpperCase() + dog.substring(1);
  //   dog[0] = "F";
  //   dog.replace("f", "F");

  let letters = dog.split("");
  letters[0] = letters[0].toUpperCase();
  dog = letters.join("");
  //   prompt(dog); // => "Fido"
}

// Q: 3
{
  let str = "This is a string";
  let arr = ["This", "is", "a", "string"];
  let obj = { "This is": "a string" };
  //   prompt(str[10]); // => 's'
  //   prompt(arr[3.141592653589793]); // => undefined
  // prompt(obj.'This is') // => error Syntax
  //   prompt(obj["This is"]); // => "a string"
}

// Q: 4
{
  let obj = { x: "test", y: "other test" };
  //   prompt(obj.hasOwnProperty("x")); // => true
  //   prompt(obj.x);
  //   prompt(Object.keys(obj).includes("x")); // => true
  //   prompt(obj.keys());
  //   prompt(obj["x"]);
}

// Q: 5
{
  let text =
    "Projects we have completed demonstrate what we know future projects decide what we will learn";
  //   prompt(text.split(" "));
  //   prompt(text.split());
  //   prompt(split(text));
}

// Q: 6
{
  let tenCharStr = "0123456789";
  //   prompt(typeof tenCharStr.substring(2, 5)); // =>"234"
}

// Q: 7
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   prompt(arr[-1]); => undefined
}

// Q: 8
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let returnLessThan = (limit) => {
    return arr.filter((num) => num < limit);
  };
  //   console.table(returnLessThan(1));

  function lessThan(upperLimit) {
    let numbers = [];

    for (let candidate = 1; candidate < upperLimit; candidate += 1) {
      numbers.push(candidate);
    }
    return numbers;
  }

  //   prompt(lessThan(0));
}

// Q: 9
{
  let twoElmArr = [42, 24];
  //   prompt(twoElmArr.shift());
  //   prompt(twoElmArr.splice(0, 1, "🎯"));

  //   prompt(twoElmArr.slice(0, 1));

  let returnValue = twoElmArr.concat(twoElmArr[0]);
  //   prompt(returnValue);

  // Q: What is splice good at doing?
  // A: Mutating the original array and replacing elements in their place
}

// Q: 10
{
  let nums = [3, 1, 5, 2, 4];
  //   prompt(nums.sort((a, b) => a - b));
  //   prompt(nums);
}

// Q: 11
{
  function foo(array, func) {
    let newArray = [];

    for (let index = 0; index < array.length; index += 1) {
      newArray[index] = func(array[index]);
    }
    return newArray;
  }
}

// Q: 15
{
  //   [1, null, 3].forEach((crrV) => {
  //     console.log(crrV);
  //     return true;
  //   });
}

// Q: 16
{
  //   [false, null, 3].forEach((crrV) => {
  //     console.log(crrV);
  //     return false;
  //   });
}

// Q: 17
{
  //   prompt(
  //     [false, 0, 1, 0, "a", ""].filter((crrV) => {
  //       return crrV == false;
  //     })
  //   );
}

// Q: 18
{
  //   prompt(
  //     [false, 0, 1, 0, "a", ""].map((crrV) => {
  //       crrV == true;
  //     })
  //   );
}

// Q: 19 , 20, 21
{
  let colors = ["green", "blue", "red"];
  let result = colors.forEach((word) => word.toUpperCase());
  //   prompt(result); // ['GREEN', 'BLUE', 'RED']
}

// Q: 22
{
  const obj = { a: "able", b: "baker", c: "charley" };
  let result = Object.values(obj).map((value) => value.toUpperCase());
  //   prompt(result);
}

{
  let result = ["a", "b", "c"].filter(function (item) {
    console.log(item);
  });

  //   return result; // []
}

{
  let arr = [1, 2, 3, 4, 5, 6, 7];
  //   arr.forEach((elem) => {
  //     prompt(arr.splice(0, 1));
  //     console.log(elem);
  //   }); // 1, 3, 5, 7
}
