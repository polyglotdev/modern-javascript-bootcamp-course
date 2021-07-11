// keyword this
const me = {
  name: 'Dom Hallan',
  age: 37,
  job: 'Fullstack Engineer',
  getThis() {
    return this
  },
  getName() {
    return this.name
  },
}

console.log(me.getThis())
console.log(me.getName())

function greet(name) {
  console.log(`Hello ${name}`)
  console.log(this) // window reference to the window object
}

const greetResult = greet('Dom')
console.log(greetResult)
