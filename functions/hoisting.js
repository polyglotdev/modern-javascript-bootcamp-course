// hoisting example
console.log(animal) // => undefined is the value we get because animal is not defined yet
var animal = '🐕'
console.log(animal) // => 🐕

// let hoisting example
let shrimp = '🐛'
console.log(shrimp) // =>

function getAnimal() {
  var animal = '🐕'
  console.log(animal) // => 🐕
  return animal
}

getAnimal()

console.log(hoistingExample)

var hoistingExample = function () {
  let animal = '🐕'
  console.log(animal) // => 🐕
  return animal
}

hoistingExample()
