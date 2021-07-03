// functionScope
/*
 * "Variable visibility"
 * The location where a variable is defined dictates where we have access to that variable.
 * "Function Scope" - between the curly braces.
 */

// function scope
// "The function scope is the largest scope within which a variable is defined."
function lol(name) {
  console.log(name)
}

const lolResult = lol('Ezra') // name is not defined in the global scope

// even if you use var in function scope, it still has the same scope as the function
const varCheck = () => {
  var name = 'hello'
  console.log(name)
}

const varCheckResult = varCheck() // name is not defined in the global scope
console.log(name) // undefined

let bird = 'eagle'

const birdWatch = () => {
  let bird = 'parrot'
  console.log(bird)
}

const birdWatchResult = birdWatch() // bird is defined in the global scope with a value of eagle
console.log(bird) // eagle

// closure function
function lol() {
  const name = 'Ezra'
  console.log(name)
}
