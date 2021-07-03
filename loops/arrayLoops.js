const animals = [`🐄`, `🐴`, `🐷`, `🐅`]

const getAnimals = () => {
  animals.forEach((animal) => {
    console.log(animal)
  })
}

getAnimals() /* ? */

const examScore = [98, 77, 88, 99]
const getAverage = () => {
  const reducer = (acc, curr) => acc + curr
  let average = examScore.reduce(reducer) / examScore.length
  return average
}

getAverage() /* ? */
const word = 'This is JavaScript'

for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i])
}
