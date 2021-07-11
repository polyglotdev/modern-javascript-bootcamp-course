// keyword this
const me = {
  name: 'Dom Hallan',
  age: 37,
  job: 'Fullstack Engineer',
  getThis() {
    return this
  },
}

console.log(me.getThis())

function greet(name) {
  console.log(`Hello ${name}`)
  console.log(this)
}

const greetResult = greet('Dom')
console.log(greetResult)
