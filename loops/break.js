const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

while (true) {
  if (guess === target) break
  console.log(`Target:${target}\nGuess:${guess}`)
  guess = Math.floor(Math.random() * 10)
}

console.log(`Target:${target}\nGuess:${guess}`)
console.log(`Congrats,you guessed the number!`)
