// Will the following functions return the same results?
function first() {
  return { prop1: "hi there" };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

console.log("first(): ", first()); // {prop1: "hi there",} is returned
console.log("second(): ", second()); // nothing is returned
