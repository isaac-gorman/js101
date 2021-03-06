/*

  Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions.

  Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:

  Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid.

  Help Ben fix his code.

*/

function isAnIpNumber(word) {
  let convertWordToNumber = Number(word);

  console.log(word);
  return convertWordToNumber > 0 && convertWordToNumber < 255;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    console.log("not a valid IP address");
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();

    if (!isAnIpNumber(word)) {
      console.log("not valid ip address");
      return false;
    }
  }

  console.log("valid ip");
  return true;
}

// isDotSeparatedIpAddress("1.2.3.4.5");
isDotSeparatedIpAddress("10.4.300.11");
