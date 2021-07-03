let num = 1
while (num <= 5) {
  console.log(num)
  num++
}

const person = {
  name: `Ezra Hallan`,
  age: 3,
  isAwesome: true,
}

//gets the keys of the object
for (const facts in person) {
  console.log(facts)
}

const nums = [12, 13, 14, 15]
for (const key in nums) {
  if (nums.hasOwnProperty(key)) {
    const element = nums[key]
    console.log(element)
  }
}

const average = Math.floor(Math.random() * 10)
console.log(average)

// iterate over object and print sum
const cart = [
  {
    itemId: 1,
    itemDescription: `iPhone 12 Pro Max`,
    itemCost: 1099.0,
  },
  {
    itemId: 2,
    itemDescription: `iPad Pro`,
    itemCost: 1299.0,
  },
]
