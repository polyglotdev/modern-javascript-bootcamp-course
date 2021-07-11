const myDeck = {
  cards: [],
  addCard: function (card) {
    this.cards.push(card)
  },
  removeCard: function (card) {
    this.cards.splice(this.cards.indexOf(card), 1)
  },
  shuffle: function () {
    this.cards.sort(function () {
      return 0.5 - Math.random()
    })
  },
  show: function () {
    console.log(this.cards)
  },
  getCard: function (index) {
    return this.cards[index]
  },
  getCards: function () {
    return this.cards
  },
  getNumberOfCards: function () {
    return this.cards.length
  },
  getNumberOfCardsInDeck: function () {
    return this.cards.length
  },
}
