const cardNumber = '4561-1213-4367-2611'
const cardNumber1 = '4561121343672612'
const cardNumber2 = '4561 1213 4367 2612'
const cardNumber3 = '45f1-1213 4367 2612'
const cardNumber4 = '0123 4567 8901 2345' // True

const isValidCard = (card) => {
	let isNumberOk = false
	let isCardOk = false
	let oddNumberSum = 0
	let evenNumberSum = 0
	card = card.replaceAll('-', '')
	card = card.replaceAll(' ', '')
	card.length === 16 && isNaN(card) === false ? (isNumberOk = true) : isNumberOk
	if (!isNumberOk === true) {
		console.log('Введен некорректный формат номера карты')
		return
	}
	for (let i = 0; i < card.length; i++) {
		let oddNumber = 0
		let evenNumber = 0
		if (i === 0 || i % 2 === 0) {
			oddNumber = card[i] * 2
			switch (true) {
				case oddNumber > 9:
					oddNumber = oddNumber - 9
				case oddNumber <= 9:
					oddNumber
			}
			oddNumberSum += oddNumber
		} else {
			evenNumber = card[i] * 1
			evenNumberSum += evenNumber
		}
	}
	;(oddNumberSum + evenNumberSum) % 2 === 0 ? (isCardOk = true) : isCardOk
	return console.log(isCardOk)
}

isValidCard(cardNumber)
isValidCard(cardNumber1)
isValidCard(cardNumber2)
isValidCard(cardNumber3)
isValidCard(cardNumber4)
