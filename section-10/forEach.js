// use the forEach method to iterate over an array
const fruit = ['apple', 'orange', 'pear', 'banana']

fruit.forEach((item) => {
  console.log(item)
})

const numbers = [1, 2, 3, 4, 5]
numbers.forEach((number) => {
  console.log(number)
})

const books = [
  {
    title: 'Javascript Design Patterns',
    author: 'Addy Osmani',
    price: 12.99,
  },
  {
    title: 'Angular 2',
    author: 'Misko Hevery',
    price: 22.99,
  },
  {
    title: 'Eloquent Javascript',
    author: 'Marijn Haverbeke',
    price: 17.99,
  },
]

books.forEach((book) => {
  return book.title // returns the title of each book
})

// map over book objects
books.map((book) => {
  return book.title // returns the title of each book
})

// use the forOf method to iterate over an array
for (book of books) {
  console.log(book.title)
}

// use the forOf method to iterate over an array with a Object.keys() method
for (item of Object.values(books)) {
  console.log(item.author)
}
