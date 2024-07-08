const currencyConverter = (currencySum, currencyOriginal, currencyTarget) => {
	const RUB = 1
	const USD = 91.34
	const EUR = 98.88
	switch (currencyOriginal.toUpperCase()) {
		case 'RUB':
			switch (currencyTarget.toUpperCase()) {
				case 'USD':
					return (currencySum / USD).toFixed(2)
					break
				case 'EUR':
					return (currencySum / EUR).toFixed(2)
					break
				default:
					console.log('Целевая валюта не найдена!')
					return 0
			}
			break
		case 'USD':
			switch (currencyTarget.toUpperCase()) {
				case 'RUB':
					return (currencySum * USD).toFixed(2)
					break
				case 'EUR':
					return ((currencySum * EUR) / USD).toFixed(2)
					break
				default:
					console.log('Целевая валюта не найдена!')
					return 0
			}
			break
		case 'EUR':
			switch (currencyTarget.toUpperCase()) {
				case 'RUB':
					return (currencySum * EUR).toFixed(2)
					break
				case 'USD':
					return ((currencySum * USD) / EUR).toFixed(2)
					break
				default:
					console.log('Целевая валюта не найдена!')
					return 0
			}
			break
		default:
			console.log('Курс неизвестен!')
			return 0
	}
}
console.log(currencyConverter(1, 'USD', 'RUB'))
console.log(currencyConverter(100, 'RUB', 'USD'))
console.log(currencyConverter(1, 'USD', 'EUR'))
console.log(currencyConverter(1, 'EUR', 'USD'))
