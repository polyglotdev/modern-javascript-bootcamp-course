// create a function that returns a function that multiplies values by 3
const multiplyBy = (x) => (y) => x * y
multiplyBy(3)(2) // 6
multiplyBy(2)(2) // 4

const doThings = (num) => {
  return (x) => {
    return x * num
  }
}
doThings(2)(2) // 4
doThings(2)(3) // 6

// create a function that checks if parameter is between 2 numbers
const isNumBetween = (x, a, b) => x >= a && x <= b
isNumBetween(5, 0, 18) // true
