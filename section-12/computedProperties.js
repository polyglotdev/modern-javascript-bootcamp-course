const role = 'host'
const person = 'Kobe Bryant'

const team = {
  [role]: person,
}
console.log(team)

// create a function that accepts and object and then copies the object with a new property added in
function addProp(obj, prop, value) {
  const newObj = { ...obj }
  newObj[prop] = value
  return newObj
}

const addPropResult = addProp(team, 'accomplishments', [
  'slam dunk champion',
  '18 time all-star',
  '2 time finals MVP',
  '5 time NBA Champion',
  '3 scoring title',
  '2008 NBA MVP',
])
console.log(addPropResult)
console.log()
