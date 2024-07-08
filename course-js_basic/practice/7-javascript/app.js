'use strict'

// console.log(document.querySelectorAll('.one')[0].innerText)
// console.log(document.querySelectorAll('.one')[1].innerText)
// console.log(document.getElementById('two').innerText)
// console.log(document.querySelector('[user-id="4"]').innerText)

const newElement = document.createElement('div')
const panelText = 'Панель'
const panelClass = 'button'
newElement.setAttribute('user-id', 1)
newElement.classList.add('panel')
// newElement.innerText = 'Кнопка'
// newElement.innerHTML = `<div class="${panelClass}">${panelText}</div>`

// document.querySelector('.test').appendChild(newElement)

const submitText = () => {
	const input = document.querySelector('.input')
	let inputValue = input.value
	if (!inputValue) {
		return
	}
	let textString = JSON.stringify({ text: inputValue })
	localStorage.setItem('PS', textString)
	document.querySelector('.input').value = ''
	console.log(textString)
}
console.log(localStorage.getItem('a'))
