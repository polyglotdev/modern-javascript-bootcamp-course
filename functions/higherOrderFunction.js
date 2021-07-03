// add function
function add(a, b) {
  return a + b
}

// subtract function
function subtract(a, b) {
  return a - b
}

// multiply function
function multiply(a, b) {
  return a * b
}

// divide function
function divide(a, b) {
  return a / b
}

const operations = [add, subtract, multiply, divide]

operations[1](100, 50) /* ? */
for (let func of operations) {
  let result = func(100, 50)
  console.log(result)
}

const thing = {
  doSomething: multiply,
}

thing.doSomething(100, 50) /* ? */
