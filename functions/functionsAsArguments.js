const callTwice = (func) => {
  func()
}

const callThrice = (func) => {
  func()
}

const laugh = () => 'ha'

// rage function
const rage = () => 'I hate you'

function repeatNTimes(n, func) {
  for (let i = 0; i < n; i++) {
    func()
  }
}

repeatNTimes(3, rage)
repeatNTimes(2, laugh) /* ? */

const pickOne = (f1, f2) => {
  let rand = Math.random()
  if (rand < 0.5) {
    return f1()
  } else {
    return f2()
  }
}

pickOne(laugh, rage)
