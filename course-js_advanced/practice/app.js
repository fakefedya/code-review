'use strict'

const wrapper = document.querySelector('.wrapper')

for (let i = 0; i < 100; i++) {
	const el = document.createElement('div')
	el.innerHTML = `User ID #${i}`
	el.setAttribute('data-id', i)
	// el.addEventListener('click', () => {
	// 	console.log(`Deleted: User ID #${i}`)
	// })
	wrapper.append(el)
}

wrapper.addEventListener('click', (e) => {
	const i = e.target.getAttribute('data-id')
	console.log(`Deleted: User ID #${i}`)
})
