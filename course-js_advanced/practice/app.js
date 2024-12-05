'use strict'

console.log(document.head)
console.log(document.body)

const el = document.querySelector('.cards')
const elAll = document.querySelectorAll('meta')
console.log(el)
console.log(elAll)

const el1 = document.getElementsByClassName('cards')
const el2 = document.getElementsByTagName('meta')
console.log(el1)
console.log(el2)

const button = document.createElement('button')
button.innerText = 'Тест'

const button2 = document.createElement('button')
button2.innerText = 'Тест2'

el.append(button)
el.prepend(button2)
el.before(button2)
el.after(button2)

function generate() {
	el.remove()
}
