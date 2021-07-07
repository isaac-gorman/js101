let hello = () => {
  return "hello";
};

let howAreYou = () => {
  return "how are you? ";
};

let returnHowAreYou = () => {
  return howAreYou();
};

let print = (greet1, greet2) => console.log(greet1, " ", greet2);

print(hello(), returnHowAreYou());
