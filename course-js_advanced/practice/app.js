'use strict'

/*
Создать функцию, которая принимает пользователя и проверяет, есть ли у него сегодня день рождения или нет
*/

const user = {
	name: 'Вася',
	birthday: '7/11/2024',
}

function isBirthday(user) {
	const todayDate = new Date()
	const birthdayDate = new Date(user.birthday)
	console.log(todayDate.getMonth(), birthdayDate.getMonth())
	console.log(todayDate.getDate(), birthdayDate.getDate())
	if (todayDate.getMonth() !== birthdayDate.getMonth()) {
		return false
	}
	if (todayDate.getDate() !== birthdayDate.getDate()) {
		return false
	}
	return true
}

console.log(isBirthday(user))
