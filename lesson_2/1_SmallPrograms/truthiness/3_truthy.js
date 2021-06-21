function isSmall(number) {
  return number < 10;
}

let num = 9;

if (isSmall(num)) {
  console.log("small number");
} else {
  console.log("large number");
}
