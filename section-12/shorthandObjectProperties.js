// create shorthand object properties
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  getKeys() {
    return Object.keys(this)
  },
}

console.log(obj.getKeys())

// create a getCard function
const getCard = () => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  const suits = ['hearts', 'diamonds', 'clubs', 'spades']
  const cards = []
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      cards.push(`${values[i]} of ${suits[j]}`)
    }
  }
  return cards
}

const getCardResult = getCard()
console.log(getCardResult)
