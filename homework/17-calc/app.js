'use strict'

const page = {
	button: document.querySelectorAll('[data-action]'),
	fieldAlert: document.querySelector('.alert'),
	input: {
		firstOperand: document.querySelector('.operand-one'),
		secondOperand: document.querySelector('.operand-two'),
		result: document.querySelector('.result-input'),
	},
}

function actionOnClick() {
	page.button.forEach((el) => {
		el.addEventListener('click', (e) => {
			const action = el.dataset.action
			const operands = [page.input.firstOperand, page.input.secondOperand]
			const inputData = validateAndGetData(operands)
			if (!inputData) {
				return
			}
			const actionResult = calculate(inputData, action)
			page.input.result.value = actionResult
			resetInputs(operands)
		})
	})
}

function validateAndGetData(operands) {
	let isValid = true
	const result = []
	for (const operand of operands) {
		operand.classList.remove('error')
		page.fieldAlert.innerText = ''
		if (!operand.value) {
			operand.classList.add('error')
			page.fieldAlert.innerText = 'Заполните поля!'
			isValid = false
		}
		result.push(Number(operand.value))
	}
	if (!isValid) {
		return false
	}
	return result
}

function calculate(inputData, action) {
	switch (action) {
		case 'addition': {
			return inputData[0] + inputData[1]
		}
		case 'subtraction': {
			return inputData[0] - inputData[1]
		}
		case 'multiplication': {
			return (inputData[0] * inputData[1]).toFixed(1)
		}
		case 'division': {
			if (inputData[1] === 0) {
				page.fieldAlert.innerText = 'Ошибка деления на 0!'
			}
			return (inputData[0] / inputData[1]).toFixed(1)
		}
		default:
	}
}

function resetInputs(operands) {
	for (const operand of operands) {
		operand.value = ''
	}
}
;(() => {
	actionOnClick()
})()
