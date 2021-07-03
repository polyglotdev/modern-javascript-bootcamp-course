const getDate = () => {
  const target = Math.floor(Math.random() * 10)
  let guess = Math.floor(Math.random() * 10)

  while (guess != target) {
    if (guess > target) {
      return (guess = Math.floor(Math.random() * 10))
    } else {
      return (guess = Math.floor(Math.random() * 10))
    }
  }
}

getDate() /* ? */
