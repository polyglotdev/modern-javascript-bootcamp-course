// write a function that uses closure as an example
const outer = () => {
  let movie = `The Golden Child`
  const inner = () => {
    console.log(movie)
  }
  return inner()
}

const outerResult = outer()
console.log(outerResult)
