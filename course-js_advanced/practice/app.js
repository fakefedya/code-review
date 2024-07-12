'use strict'

console.log(1)
const messages = ['Bash!', 'Boom!']
const boomTimer = setTimeout(
	(message1, message2) => {
		// console.log(message1)
		// console.log(message2)
	},
	1000,
	...messages
)
// clearTimeout(boomTimer)
console.log(3)

/* Точность таймеров */

const mark1 = performance.now()

setTimeout(() => {
	const mark2 = performance.now()
	console.log(mark2 - mark1)
}, 1000)

/* Работа с интервалами */

const interval = setInterval(() => {
	console.log(new Date())
}, 1000)

const timer = setTimeout(() => {
	clearInterval(interval)
}, 5000)

console.log(interval, timer)
