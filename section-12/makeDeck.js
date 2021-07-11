/**
 *
 *
 * @return
 */
function makeDeck() {
  const suits = ['clubs', 'diamonds', 'hearts', 'spades']
  const ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'jack',
    'queen',
    'king',
    'ace',
  ]
  const deck = []
  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push(`${rank} of ${suit}`)
    })
  })
  return deck
}

console.log(makeDeck())
