console.log('Section 14')

// get the h1 element
const h1 = document.querySelector('h1')
console.log(h1.innerText)

// get the innerText of ul
const ul = document.querySelector('ul')
console.log(ul.innerText)

// get all text in the document
const text = document.body.innerText // inner text changes the text but could remove the element from the DOM
console.log(text)

const changeH1 = document.querySelector('h1')
changeH1.innerText = 'Kobe Bryant'

const changefirstP = document.querySelector('p')
changefirstP.innerText = `Born in Philadelphia and partly raised in Italy, Bryant was recognized as the top American high-school basketball player while at Lower Merion. The son of former NBA player Joe Bryant, he declared for the 1996 NBA draft and was selected by the Charlotte Hornets with the 13th overall pick; he was then traded to the Lakers. As a rookie, Bryant earned a reputation as a high-flyer by winning the 1997 Slam Dunk Contest, and was named an All-Star by his second season. Despite a feud with teammate Shaquille O'Neal, the pair led the Lakers to three consecutive NBA championships from 2000 to 2002.`

// innerHTML - change the innerHTML of the element
const form = document.querySelector('form')
// form.innerHTML = `<input type="text" name="firstname" placeholder="First Name">`
