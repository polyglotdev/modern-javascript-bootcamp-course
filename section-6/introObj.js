const fitBitData = {
  totalSteps: 30000,
}

console.log(fitBitData.totalSteps)
fitBitData.totalSteps += 30
console.log(fitBitData.totalSteps)

const obj = {
  name: 'Elijah Hallan',
  age: 5,
  gradeLevel: 'Kindergarten',
}

console.log(obj.name)

const numbers = {
  100: 100,
  200: 200,
  300: 300,
}

console.log(numbers[100])

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
  '76Trombones': 'song',
}

console.log(palette['red'])
const userReviews = {}

const shoppingCart = [
  {
    product: 'Apple iPad 13 inch',
    price: 699.0,
    quantity: 1,
  },
  {
    product: 'Apple iPhone 12 Pro Max',
    price: 1300.0,
    quantity: 1,
  },
]

const student = {
  firstName: 'Elijah',
  lastName: 'Hallan',
  exams: {
    midTerm: 92,
    final: 88,
  },
}

const average = (student.exams.midTerm + student.exams.final) / 2
console.log(average)

const getCartTotal = () => {
  let total
  shoppingCart.forEach((item) => {
    total = item.price += item.price
  })
  return total
}

getCartTotal() /* ? */
