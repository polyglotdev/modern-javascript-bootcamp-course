const texts = ['rofl', 'lol', 'omg', 'ttyl']
const capsTexts = texts.map((text) => text.toUpperCase())
console.log(capsTexts)
console.log(texts)

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
capsTexts.find((text) => text === 'OMG')
