'use strict'

const birthdayDate1 = '1996-01-30'
const birthdayDate2 = '2015-03-25'
const birthdayDate3 = '20s5-03-25'

function isAdult(birthdayString) {
	if (isNaN(new Date(birthdayString).getTime())) {
		return 'Введена некорректная дата'
	}
	return Math.round(
		(new Date() - new Date(birthdayString)) / (1000 * 3600 * 24 * 365)
	) >= 14
		? true
		: false
}

console.log(isAdult(birthdayDate1))
console.log(isAdult(birthdayDate2))
console.log(isAdult(birthdayDate3))
