'use strict'

const calculateStart = (id) => {
	const operandOne = document.querySelector('.operand-one')
	const operandTwo = document.querySelector('.operand-two')
	const inputResult = document.querySelector('.result-input')
	const alert = document.querySelector('.alert')
	const buttonOperation = document.querySelectorAll('.button-operation')
	let operationResult = ''
	if (!operandOne.value || !operandTwo.value) {
		alert.innerText = 'Необходимо ввести два числа!'
		return
	}
	buttonOperation.forEach(() => {
		switch (id) {
			case 'plus':
				alert.innerText = 'Произведена операция сложения'
				operationResult = Number(operandOne.value) + Number(operandTwo.value)
				break
			case 'minus':
				alert.innerText = 'Произведена операция вычитания'
				operationResult = Number(operandOne.value) - Number(operandTwo.value)
				break
			case 'multiply':
				alert.innerText = 'Произведена операция умножения'
				operationResult = Number(operandOne.value) * Number(operandTwo.value)
				break
			case 'division':
				if (Number(operandOne.value) !== 0 && Number(operandTwo.value) === 0) {
					alert.innerText = 'Деление на 0!'
					operationResult = 'Ошибка'
					return
				} else if (
					Number(operandOne.value) === 0 &&
					Number(operandTwo.value) === 0
				) {
					alert.innerText = 'Деление на 0!'
					operationResult = 'NaN'
					return
				} else {
					alert.innerText = 'Произведена операция деления'
					operationResult = Number(operandOne.value) / Number(operandTwo.value)
				}
				break
			default:
				alert.innerText = ''
		}
	})
	inputResult.value = operationResult
	operandOne.value = ''
	operandTwo.value = ''
}
