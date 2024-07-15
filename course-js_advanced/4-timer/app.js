/*
Сделать приложение, которое в браузере выводит таймер реального времени, который показывает 
сколько осталось до нового года в формате:
 ХХ месяцев, ХХ дней, ХХ часов, ХХ минут, ХХ секунд

	Учесть окончания существительных?
*/

'use strict'

const page = {
	countDiv: document.querySelector('.count'),
}

function counterNewYear() {
	const countDownTimer = setInterval(() => {
		calcTimeAndRenderCount()
	}, 1000)
	setTimeout(() => {
		clearInterval(countDownTimer)
		page.countDiv.innerHTML = `Ура! С Новым ${
			new Date().getFullYear() + 1
		} годом!`
	}, new Date(`1 Jan ${new Date().getFullYear() + 1} 00:00:00`) - new Date())
}

function createLabel(numberOf, typeOfLabel) {
	const LOCALE = 'ru-RU'

	const pluralOptions = {
		type: 'cardinal',
	}

	const labelsArr = [
		['месяц', 'месяца', 'месяцев'],
		['день', 'дня', 'дней'],
		['час', 'часа', 'часов'],
		['минута', 'минуты', 'минут'],
		['секунда', 'секунды', 'секунд'],
	]

	const pluralMap = new Map()
	pluralMap.set('one', 0)
	pluralMap.set('few', 1)
	pluralMap.set('many', 2)

	const plural = new Intl.PluralRules(LOCALE, pluralOptions).select(numberOf)
	const mappedPlural = pluralMap.get(plural)

	return labelsArr[typeOfLabel][mappedPlural]
}

function calcTimeAndRenderCount() {
	const now = new Date()
	const newYear = new Date(`1 Jan ${now.getFullYear() + 1} 00:00:00`)
	const datesDiff = newYear - now
	const messageArr = []

	const timeObj = {
		months: Math.floor(datesDiff / 1000 / 60 / 60 / 24 / 30.425),
		days: Math.floor(datesDiff / 1000 / 60 / 60 / 24),
		hours: Math.floor((datesDiff / 1000 / 60 / 60) % 24),
		minutes: Math.floor((datesDiff / 1000 / 60) % 60),
		seconds: Math.floor((datesDiff / 1000) % 60),
	}

	Object.values(timeObj).forEach((numberOf, typeOfLabel) => {
		if (numberOf !== 0) {
			messageArr.push(`${numberOf} ${createLabel(numberOf, typeOfLabel)}`)
		}
	})
	return (page.countDiv.innerHTML = messageArr.join(', ').replaceAll('-', ''))
}

;(() => {
	counterNewYear()
})()
