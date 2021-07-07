// Question 3
// - Given the following nested data structure, and without running the code, select all of the code snippets that will change the string 'Apple Juice' to 'Orange Juice'.

let todoLists = [
  {
    id: 1,
    listName: "Groceries",
    todos: [
      { id: 1, name: "Bread", completed: false },
      { id: 2, name: "Milk", completed: false },
      { id: 3, name: "Apple Juice", completed: false },
    ],
  },
];

todoLists[0]["todos"][2]["name"] = "Orange Juice";
// todoLists[0]["todos"][2].name = "Orange Juice";

console.log(todoLists[0]);
