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
