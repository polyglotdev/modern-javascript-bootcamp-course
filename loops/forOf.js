const myArray = [1, 2, 3, 4, 5]
for (const num of myArray) {
  console.log(num)
}

const magicSquare = [
  [8, 3, 4],
  [1, 5, 9],
  [6, 7, 2],
]

// check if magic square is valid
for (const row of magicSquare) {
  let sum = 0
  // loop over rows
  for (const num of row) {
    // loop over numbers in each row
    sum += num
  }
  console.log(sum)
}

const words = ['mail', 'milk', 'bath', 'black']
const words2 = ['box', 'shake', 'tub', 'berry']
for (let i = 0; i < words.length; i++) {
  console.log(`${words[i]}${words2[i]}`)
}

const person = {
  name: 'John',
  age: 30,
  job: 'developer',
}

Object.keys(person).forEach((key) => {
  console.log(key, person[key])
})

const movieReleases = {
  'The Matrix': 1999,
  'The Mummy': 1999,
  'The Dark Knight': 2008,
  'The Dark Knight Rises': 2012,
  'The Dark Knight 3D': 2013,
}

for (const movie in movieReleases) {
  console.log(movie, movieReleases[movie])
}

// you can do this too where we use Object.keys
for (let movie of Object.keys(movieReleases)) {
  console.log(movie, movieReleases[movie])
}
