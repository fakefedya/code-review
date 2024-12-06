//Суть задания: создать функцию поиска текста среди элементов на странице.

const wrapper = document.querySelector('.wrapper')

function generateText(countOfSymbols) {
	for (let i = 0; i < countOfSymbols; i++) {
		const el = document.createElement('p')
		el.innerHTML = i
		wrapper.append(el)
	}
}
generateText(100)
function search(event) {
	const inputValue = event.target.value
	for (const el of [...wrapper.children]) {
		if (el.innerHTML.includes(inputValue)) {
			el.style.backgroundColor = 'purple'
			continue
		}
		el.style.backgroundColor = 'transparent'
	}
}
console.log([...wrapper.children])
