let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

let sortedByPublishDate = books.slice().sort((a, b) => {
  let aPublishedYear = Number(a.published);
  let bPublishedYear = Number(b.published);
  return aPublishedYear - bPublishedYear;
});

console.log(sortedByPublishDate);
// console.log(books);
