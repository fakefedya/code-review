'use strict'

console.log(Number.MAX_SAFE_INTEGER)
const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER
console.log(max, min)
console.log(max + 1)
console.log(max + 4)
console.log(max + 3)

/* BigInt */

console.log(4561437651243567214375124312434n)
console.log(BigInt(4561437651243567214375124312434))
console.log(10n * BigInt(10))
console.log(10n / BigInt(3))

/* Интернационализация чисел */

const options1 = {
	style: 'currency',
	currency: 'RUB',
	useGrouping: false,
}

const options2 = {
	style: 'currency',
	currency: 'USD',
}

const options3 = {
	style: 'decimal',
}

const options4 = {
	style: 'percent',
}

const options5 = {
	style: 'unit',
	unit: 'celsius',
}

console.log(new Intl.NumberFormat('ru-RU', options1).format(23000))
console.log(new Intl.NumberFormat('en-US', options2).format(23000))
console.log(new Intl.NumberFormat('ru-RU', options3).format(10000))
console.log(new Intl.NumberFormat('ru-RU', options4).format(0.1))
console.log(new Intl.NumberFormat('ru-RU', options5).format(25))
