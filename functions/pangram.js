// create function that checks if a string is a pangram
// example: "The quick brown fox jumps over the lazy dog" is a pangram
// example: "The quick brown fox jumps over the lazy dog." is not a pangram

const pangramCheck = (str) => {
  // create an array of all the letters in the string
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  // create a variable for pangram
  let pangram = true
  for (let i = 0; i < alphabet.length; i++) {
    str = str.toLowerCase()
    // check if each letter in the alphabet is in the string
    // indexOf returns -1 if the letter is not in the string
    if (str.indexOf(alphabet[i]) === -1) {
      pangram = false
    }
  }
  return pangram
}

const pangramCheckResult = pangramCheck('The five boxing wizards jump quickly')
console.log(pangramCheckResult)
