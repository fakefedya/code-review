'use strict'

function generate(event) {
	console.log(event.target.getBoundingClientRect())

	console.log(`X: ${window.pageXOffset}`)
	console.log(`Y: ${window.pageYOffset}`)
	console.log(`Client Width: ${document.documentElement.clientWidth}`)
	console.log(`Client Height: ${document.documentElement.clientHeight}`)

	const el = document.querySelector('.down')
	const rect = el.getBoundingClientRect()

	window.scrollTo({
		left: window.pageXOffset + rect.left,
		top: window.pageYOffset + rect.top,
		behavior: 'smooth',
	})
}
