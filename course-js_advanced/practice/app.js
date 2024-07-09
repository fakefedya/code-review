'use strict'

/*
	Функция принимает 3 параметра:
	- Сумма
	- Исходная валюта
	- Валюта для конвертации
	Возвращает строку с конвертированной суммы с постфиксом валюты. Если не смог, то null
*/

function convert(sum, originalCurrency, targetCurrency) {
	const allCurrencies = [
		{
			style: 'currency',
			currency: 'USD',
			multiplier: 1,
		},
		{
			style: 'currency',
			currency: 'RUB',
			multiplier: 1 / 60,
		},
		{
			style: 'currency',
			currency: 'EUR',
			multiplier: 1.1,
		},
	]

	if (isNaN(sum)) {
		console.log(`Введенная сумма "${sum}" не является числом`)
		return
	}

	const original = allCurrencies.find((c) => c.currency === originalCurrency)
	if (!original) {
		return null
	}

	const target = allCurrencies.find((c) => c.currency === targetCurrency)
	if (!target) {
		return null
	}
	console.log(sum * original.multiplier)
}

convert(12, 'USD', 'RUB')
