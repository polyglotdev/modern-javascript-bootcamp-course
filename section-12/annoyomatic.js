const annoyer = {
  phrases: [`can't stop won't stop`, `literally`, `I can't even`, `YOLO`],
  pickPhrase: () =>
    this.phrases[Math.floor(Math.random() * this.phrases.length)],
  start() {
    this.timerId = setInterval(() => {
      this.randomPhrase = this.phrases[
        Math.floor(Math.random() * this.phrases.length)
      ]
      console.log(this.randomPhrase)
    }, 1000)
  },
  stop() {
    clearInterval(this.timerId)
  },
}

annoyer.start()
console.log(annoyer)
annoyer.stop()
console.log(annoyer)
