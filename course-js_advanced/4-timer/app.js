'use strict'

// const page = {
// 	countDiv: document.querySelector('.count'),
// }

function newYearTimeRemaining() {
	const NEW_YEAR_DATE = '2024-12-31'
	const dateToday = new Date()
	// console.log(dateToday, new Date(NEW_YEAR_DATE))
	const timeRemaining = new Date(NEW_YEAR_DATE) - dateToday
	console.log(timeRemaining)
	const secsRemaining = timeRemaining / 1000
	const minsRemaining = secsRemaining / 60
	const hoursRemaining = minsRemaining / 60
	const daysRemaining = hoursRemaining / 24
	const monthsRemaining = daysRemaining / 30
	const weeksRemaining = daysRemaining / 7
	console.log(
		secsRemaining,
		minsRemaining,
		hoursRemaining,
		daysRemaining,
		weeksRemaining,
		monthsRemaining
	)
	// console.log(
	// 	new Intl.DateTimeFormat('ru-RU', {
	// 		second: 'numeric',
	// 		hour: 'numeric',
	// 		minute: 'numeric',
	// 		year: 'numeric',
	// 		month: 'numeric',
	// 		day: 'numeric',
	// 	}).format(timeRemaining)
	// )
}
newYearTimeRemaining()

// console.log(navigator.language)
