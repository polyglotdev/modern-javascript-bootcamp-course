// create your own reduce function
// the function should take two arguments, the first is the current value of the reduce and the second is the current value of the array
// return the new value of the reduce

let myReduce = (reduced, array, type) => {
  if (type === 'addition') {
    for (let item of array) {
      item += reduced
      reduced = item
    }
  } else if (type === 'multiply') {
    for (let item of array) {
      console.log(item * item)
      item *= reduced
      reduced = item
    }
  }
  return reduced
}

myReduce(1, [1, 2, 3], 'multiply')

const myArray = [1, 2, 3]
myArray.reduce((acc, curr) => acc * curr)

const grades = [80, 90, 100, 85, 70, 60, 50, 40, 30, 20, 10]
const maxGrade = grades.reduce((acc, curr) => (acc > curr ? acc : curr))
