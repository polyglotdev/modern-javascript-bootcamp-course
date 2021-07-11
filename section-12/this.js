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
