'use strict'

const wrapper = document.querySelector('.wrapper')
console.log(wrapper)

const inner = document.querySelector('.inner')
const button = document.querySelector('.button')
console.log(inner)
console.log(inner.childNodes)
console.log(inner.children)

console.log(inner.parentNode)
console.log(inner.parentElement)

console.log(button.closest('.wrapper'))

console.log(button.previousElementSibling)
console.log(button.previousSibling)
console.log(button.nextElementSibling)
console.log(button.nextSibling)
