'use strict'

const button = document.querySelector('.button')

const eventHandler = function (event) {
	console.log('Event 1')
}

button.addEventListener('click', eventHandler)

button.addEventListener('click', (event) => {
	console.log('Event 2')
	button.removeEventListener('click', eventHandler)
})
