/* eslint-disable max-len */
{
  // Questions to consider when working through Catching Errors Assignment
  /*
        Overview -----------------------------------------------------------------
        Q: Is it possible to prevent all error? What should I do instead?

        Q: What is the only way to prevent errors in JSON.parse?

        Q: Instead of trying to avoid errors what should I do instead?

        When to Use Try/Catch ----------------------------------------------------
        Q: When should I use try catch blocks?

        Further Reading ----------------------------------------------------------
        Q: What are the main take key takeaways form the student written article about errors in JS?
  */
}
let actualJSONData = '{ "name": "Ferdinand", "age": 13 }';
let notJSONData = { name: "Ferdinand", age: 13 };

function parseJSON(data) {
  let result;

  try {
    // Do something here that might fail here and throw an exception

    result = JSON.parse(data);
    // console.log("Success: ", JSON.parse(data));
  } catch (error) {
    // This code only runs if something goes wrong in the try clause throws an exception
    // The "error" parameter contains the exception object
    result = "Failure: " + error;
    // console.log("Failure: ", error);
  } finally {
    // This code always runs even if the above code throws an exception
    // Note that I can omit the final clause very similar to the else clause in an if statement
    console.log("Finished parsing data");
  }
  return result;
}

console.log(parseJSON(notJSONData)); // -> Failure:
console.log(parseJSON(actualJSONData)); // -> Success:
