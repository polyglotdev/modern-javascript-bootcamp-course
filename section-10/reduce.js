// const oneThruFive = [1, 2, 3, 4, 5]
// const reduceOneThruFive = oneThruFive.reduce((a, b) => a + b) // 15
// console.log(reduceOneThruFive)
//
const votes = ['yes', 'no', 'yes', 'no', 'yes']
//const results = votes.reduce((tally, val) => {
//  if (tally[val]) {
//    tally[val]++
//  } else {
//    tally[val] = 1
//  }
//  return tally
//}, {})

const results = votes.reduce((tally, val) => {
  tally[val] = tally[val] || 0 + 1
  return tally
}, {})
console.log(results)
const books = [
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    rating: 4.0,
  },
  {
    title: 'Journey to the Center of the Earth',
    author: 'J. R. R. Tolkien',
    rating: 3.0,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    rating: 5.0,
  },
  {
    title: 'The Return of the King',
    author: 'J. R. R. Tolkien',
    rating: 5.0,
  },
  {
    title: 'The Silmarillion',
    author: 'J. R. R. Tolkien',
    rating: 3.0,
  },
  {
    title: 'The Two Towers',
    author: 'J. R. R. Tolkien',
    rating: 4.0,
  },
  {
    title: 'The Unfinished Project',
    author: 'J. R. R. Tolkien',
    rating: 4.0,
  },
]

const sortBooksByRatingInObject = books.reduce((tally, val) => {
  tally[val.rating] = tally[val.rating] || []
  tally[val.rating].push(val)
  return tally
}, {})
