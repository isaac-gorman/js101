/*
    VARIABLE SHADOWING
      Q: When does variable shadowing occur?
      A: Variable shadowing occurs when you choose a local variable
         in an inner scope that shares the same name as a variable
         in an outer scope.

      A: It is very common mistake. This mistake will prevent you
         from accessing the outer scope variable from an inner scope.

*/

const LAST_NAME = "johnson";

["kim", "joe", "sam"].forEach((name) => console.log(`${name} ${LAST_NAME}`));

let names = ["kim", "joe", "sam"];
names.forEach((_, index) => {
  console.log(`At index ${index}: got a name!`);
});
