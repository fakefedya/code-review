const CURRENCY_TO_SOMETHING = (currencyOriginal, currencyTarget) => {
	switch (true) {
		case currencyOriginal.toLowerCase() === 'rub':
			switch (currencyTarget.toLowerCase()) {
				case 'usd':
					return 0.011
				case 'kzt':
					return 4.82
				case 'rmb':
					return 0.079
				default:
					return 0
			}
			break
		case currencyOriginal.toLowerCase() === 'usd':
			switch (currencyTarget.toLowerCase()) {
				case 'rub':
					return 91.631
				case 'kzt':
					return 441.48
				case 'rmb':
					return 7.23
				default:
					return 0
			}
			break
		case currencyOriginal.toLowerCase() === 'kzt':
			switch (currencyTarget.toLowerCase()) {
				case 'rub':
					return 0.21
				case 'usd':
					return 0.0023
				case 'rmb':
					return 0.016
				default:
					return 0
			}
			break
		default:
			return 0
	}
}

const convertedCurrency = (currencyOriginal, currencyTarget, moneyCount) =>
	CURRENCY_TO_SOMETHING(currencyOriginal, currencyTarget) * moneyCount

console.log(convertedCurrency('usd', 'rub', 1).toLocaleString('ru'))
