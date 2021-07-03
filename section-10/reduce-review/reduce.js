// reduce method
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = array.reduce((a, b) => a + b)
console.log(result)

const myArray = [1, 2, 3, 4]
// Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
myArray.reduce((a, b) => a * b)

// get the max grade
const myGrades = [80, 86, 92, 78, 90, 100]
const maxGrade = myGrades.reduce((a, b) => (a > b ? a : b))

// NBA Players Career Total Scoring
const players = [
  {
    name: 'LeBron James',
    points: 35367,
  },
  {
    name: 'Kevin Durant',
    points: 23833,
  },
  {
    name: 'Kobe Bryant',
    points: 33643,
  },
  {
    name: 'Kareem Abdul Jabar',
    points: 38387,
  },
]

const maxPoints = players.reduce((a, b) => (a.points > b.points ? a : b))
console.log(maxPoints)

const votes = ['yes', 'no', 'yes', 'no', 'yes', 'maybe']

const votingResults = votes.reduce((voteChoice, voteCount) => {
  voteChoice[voteCount] = (voteChoice[voteCount] || 0) + 1
  return voteChoice
}, {})

console.log(votingResults)

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
]

//group books by rating
const ratingGrouped = books.reduce((acc, book) => {
  const key = Math.floor(book.rating)
  acc[key] = (acc[key] || []).concat(book)
  return acc
}, {})

console.log(ratingGrouped)
