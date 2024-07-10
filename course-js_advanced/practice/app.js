'use strict'

/*
	Функция принимает 3 параметра:
	- Сумма
	- Исходная валюта
	- Валюта для конвертации
	Возвращает строку с конвертированной суммы с постфиксом валюты. Если не смог, то null
*/

function convert(sum, originalCurrency, targetCurrency) {
	let res = 0
	const allCurrencies = [
		{
			style: 'currency',
			currency: 'USD',
			multiplier: 1,
		},
		{
			style: 'currency',
			currency: 'RUB',
			multiplier: 0.011,
		},
		{
			style: 'currency',
			currency: 'EUR',
			multiplier: 1.08,
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
	res = (original.multiplier * sum) / target.multiplier
	return new Intl.NumberFormat('ru-RU', target).format(res)
}

console.log(convert(10000, 'RUB', 'EUR'))
