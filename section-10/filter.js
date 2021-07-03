const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = nums.filter((x) => x % 2 === 0) // [2, 4, 6, 8, 10]
console.log(evens)

const players = [
  'Michael Jordan',
  'Lebron James',
  'Kobe Bryant',
  'Wilt Chamberlain',
]

players.filter((player) => player.includes('Kobe')) // ['Kobe Bryant']
