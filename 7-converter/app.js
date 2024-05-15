const currencyConverter = (currencySum, currencyOriginal, currencyTarget) => {
	switch (currencyOriginal.toUpperCase()) {
		case 'RUB':
			const usdToRub = 91.34
			const eurToRub = 98.88
			const kztToRub = 0.21
			switch (currencyTarget.toUpperCase()) {
				case 'USD':
					return (currencySum / usdToRub).toFixed(2)
					break
				case 'EUR':
					return (currencySum / eurToRub).toFixed(2)
					break
				case 'KZT':
					return (currencySum / kztToRub).toFixed(2)
					break
				default:
					console.log('Целевая валюта не найдена!')
					return 0
			}
			break
		case 'USD':
			const rubToUsd = 0.011
			const eurToUsd = 1.08
			const kztToUsd = 0.0023
			switch (currencyTarget.toUpperCase()) {
				case 'RUB':
					return (currencySum / rubToUsd).toFixed(2)
					break
				case 'EUR':
					return (currencySum / eurToUsd).toFixed(2)
					break
				case 'KZT':
					return (currencySum / kztToUsd).toFixed(2)
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
console.log(currencyConverter(100, 'RUB', 'RMB'))
console.log(currencyConverter(100, 'RMB', 'USD'))
