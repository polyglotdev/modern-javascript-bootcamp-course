// create a function that doubles an array
// and returns the new array

const doubleArray = (arr) => {
  return arr.map((num) => num * 2)
}

const result = doubleArray([1, 2, 3])
console.log(result)
