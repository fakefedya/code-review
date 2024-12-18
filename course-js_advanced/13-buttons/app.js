'use strict'

/*
  - Создать 5 кнопок с текстом "Нажми меня" и <div> с числом нажатий (по умолчанию 0)
  - При нажатии текст меняется на "Нажата!", у все остальных - "Нажми меня"
  - С нажатием любой кнопки счетчик увеличивается на 1
*/

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
const countOfPressedButtons = document.createElement('div')
countOfPressedButtons.classList.add('count')
let count = 0
countOfPressedButtons.innerText = count
document.body.append(wrapper, countOfPressedButtons)

function generateButtons(count) {
	for (let i = 0; i < count; i++) {
		const button = document.createElement('button')
		button.setAttribute('data-id', i)
		button.innerText = 'Нажми меня'
		wrapper.append(button)
	}
}
generateButtons(7)

wrapper.addEventListener('click', (e) => {
	if (!e.target.getAttribute('data-id')) {
		return
	}
	;[...wrapper.children].forEach((button) => {
		if (button === e.target) {
			console.log(button, e.target)
			button.innerText = 'Нажата!'
			count++
		} else {
			button.innerText = 'Нажми меня'
		}
	})
	countOfPressedButtons.innerText = count
})
