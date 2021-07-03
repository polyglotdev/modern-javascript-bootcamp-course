// default parameters
const multiply = (a, b = 1) => a * b
multiply(2)

// spread operator - function
function giveMeFour(a, b, c, d) {
  return a + b + c + d
}

const nums = [1, 2, 3, 4]
fnSpread = giveMeFour(...nums)
console.log(fnSpread)

// spread operator - array
const nums1 = [1, 2, 3, 4]
const nums2 = [5, 6, 7, 8]
const nums3 = [...nums1, ...nums2]
console.log(nums3)
const nums3Copy = nums3
// nums3Copy is a copy of nums3 - remember that this is dont by reference
console.log(nums3Copy === nums3)
nums3Copy.push(9)
console.log(nums3)
console.log(nums3)

// spread operator - object
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

const objSpread = { ...obj }
console.log(objSpread)
const objSpreadCopy = {
  ...obj,
}

// rest operator
const sum = (...nums) => nums.reduce((a, b) => a + b)
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000)

const fullName = (first, last, ...titles) => {
  const fullName = first + ' ' + last
  return titles.length > 0 ? `${fullName} ${titles.join(' ')}` : fullName
}

const restResult = fullName('Elijah', 'Hallan', 'M.D.', 'Ph.D.')
console.log(restResult)

// destructuring - array
const [a, b, c, d] = [1, 2, 3, 4]
console.log(a, b, c, d)

const nbaMvpVotingResults = [
  'Kobe Bryant',
  'LeBron James',
  'Carmelo Anthony',
  'Dwight Howard',
]
const [Mamba, King, Melo, Superman] = nbaMvpVotingResults
console.log(Mamba, King, Melo, Superman)
