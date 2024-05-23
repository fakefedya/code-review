// const prices = [
// 	[100, 200],
// 	[120, 100],
// 	[200, 350],
// ]
// console.log(prices.flat())
// console.log(prices)
// const positivePrices = prices
// 	.filter((pricesElement) => {
// 		return pricesElement[0] < pricesElement[1]
// 	})
// 	.map((positivePricesDiff) => {
// 		return positivePricesDiff[1] - positivePricesDiff[0]
// 	})
// console.log(positivePrices)

// const arr = [1, 4, 4, 10]

// const avg = arr.reduce((acc, arrElement, i) => {
// 	if (i !== arr.length - 1) {
// 		return (acc += arrElement)
// 	} else {
// 		return (acc += arrElement) / arr.length
// 	}
// }, 0)
// console.log(avg)

// const arr = [2, 4, 4, 10, 20]

// const findElement = (arr, element) => {
// 	const res = arr.find((el) => el === element)
// 	return res === undefined ? false : true
// }
// console.log(findElement(arr, 2))

// const some = (arr, element) => (arr.find((el) => el === element) ? true : false)

// console.log(some(arr, 4))

// const num1 = '89103235356'
// const num2 = '+79103235356'
// const num3 = '+7(910)3235356'
// const num4 = '+7(910) 3235356'
// const num5 = ' +7(910) 323-53-56 '
// const num6 = '+7(910)323-53-56'

// const num1Error = '89103235'
// const num2Error = '+7d910d323-53-56'
// const num3Error = '9+7103235356'
// const num4Error = '89103q35356'

// const phoneNumberCheck = (num) => {
// 	let isNumber = false
// 	num = num.trim()
// 	num = num.replace('+7', '8')
// 	if (!num.startsWith('8')) {
// 		console.log('Номер должен начинаться с "8"!')
// 		return false
// 	}
// 	num = num.replaceAll(' ', '')
// 	num = num.replaceAll('(', '')
// 	num = num.replaceAll(')', '')
// 	num = num.replaceAll('-', '')
// 	num.length === 11 && isNaN(num) === false ? (isNumber = true) : isNumber
// 	return console.log(isNumber)
// }
// phoneNumberCheck(num1)
// phoneNumberCheck(num2)
// phoneNumberCheck(num3)
// phoneNumberCheck(num4)
// phoneNumberCheck(num5)
// phoneNumberCheck(num6)

// phoneNumberCheck(num1Error)
// phoneNumberCheck(num2Error)
// phoneNumberCheck(num3Error)
// phoneNumberCheck(num4Error)

const card = '2834234503458353'

const secureCard = (card) => {
	const cardLength = card.length
	let securedPart = card.slice(cardLength - 4, cardLength)
	securedPart = securedPart.padStart(cardLength - 4, '*')
	return securedPart
}
console.log(secureCard(card))
